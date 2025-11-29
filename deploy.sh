#!/usr/bin/env bash
set -euo pipefail

# entrypoint.sh
# Usage: container expects environment variables:
#   SSH_USER, SSH_HOST, SSH_PORT, REMOTE_TMP (e.g. /home/user/public_html_tmp),
#   REMOTE_DIR (e.g. /home/user/public_html), HEALTHCHECK_URL (optional),
#   BUILD_CMD (optional) (default: "npm ci && npm run build && npm run export")
# The host's private key should be mounted into the container at /root/.ssh/id_rsa (read-only)

# --- env / defaults ---
SSH_USER="${SSH_USER:-fisiqu16}"
SSH_HOST="${SSH_HOST:-br.star4070.com.br}"
SSH_PORT="${SSH_PORT:-215}"
REMOTE_TMP="${REMOTE_TMP:-/home/$SSH_USER/public_html_tmp}"
REMOTE_DIR="${REMOTE_DIR:-/home/$SSH_USER/public_html}"
HEALTHCHECK_URL="${HEALTHCHECK_URL:-}"
BUILD_CMD="${BUILD_CMD:-npm ci && npm run build}"
KEY_PATH="${KEY_PATH:-$HOME/.ssh/deploy_key}"

if [ -z "$SSH_USER" ] || [ -z "$SSH_HOST" ]; then
  echo "ERROR: SSH_USER and SSH_HOST environment variables must be set"
  exit 2
fi

echo "Deploy start -> ${SSH_USER}@${SSH_HOST}:${SSH_PORT}"
echo "Build cmd: $BUILD_CMD"
echo "Using SSH key: $KEY_PATH"
echo "Remote tmp: $REMOTE_TMP"
echo "Remote dir: $REMOTE_DIR"

# --- build locally ---
echo "Building..."
eval "$BUILD_CMD"
echo "Build succeeded!"

# ensure out exists
echo "Checkint build output..."
if [ ! -d "./out" ]; then
  echo "ERROR: ./out not found after build"
  exit 1
fi
echo "Output found!"

# --- ssh key checks ---
echo "Checking SSH key..."
if [ ! -f "$KEY_PATH" ]; then
  echo "ERROR: Private key not found at $KEY_PATH"
  exit 2
fi
chmod 600 "$KEY_PATH"
echo "SSH key found!"


# ensure .ssh/known_hosts has the host (best-effort)
echo "Ensuring .ssh/known_hosts has the host..."
mkdir -p "$HOME/.ssh"
ssh-keyscan -p "$SSH_PORT" "$SSH_HOST" >> "$HOME/.ssh/known_hosts" 2>/dev/null || true
chmod 644 "$HOME/.ssh/known_hosts" || true

# --- prepare remote tmp dir ---
echo "Preparing remote tmp dir: $REMOTE_TMP"
ssh -i "$KEY_PATH" -p "$SSH_PORT" -o StrictHostKeyChecking=yes "$SSH_USER@$SSH_HOST" \
  "rm -rf '$REMOTE_TMP' && mkdir -p '$REMOTE_TMP'"
echo "Remote tmp dir fresh created!"

  # --- stream tar to remote tmp ---
echo "Streaming tarball to remote tmp..."
tar -C out -czf - . | ssh -i "$KEY_PATH" -p "$SSH_PORT" -o StrictHostKeyChecking=yes "$SSH_USER@$SSH_HOST" \
  "tar -xzf - -C '$REMOTE_TMP'"
echo "Tarball streamed to remote tmp!"


# --- atomic swap (mv with backup) ---
echo "Swapping $REMOTE_TMP -> $REMOTE_DIR"
ssh -i "$KEY_PATH" -p "$SSH_PORT" -o StrictHostKeyChecking=yes "$SSH_USER@$SSH_HOST" bash -s <<EOF
set -euo pipefail
BACKUP='${REMOTE_DIR}_backup'
if [ -d '${REMOTE_DIR}' ]; then
  mv '${REMOTE_DIR}' "\$BACKUP"
fi
mv '${REMOTE_TMP}' '${REMOTE_DIR}'
echo "SWAPPED -> ${REMOTE_DIR} (backup: \$BACKUP)"
EOF