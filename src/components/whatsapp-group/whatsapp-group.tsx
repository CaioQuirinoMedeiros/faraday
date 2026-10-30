"use client"

import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { QRCodeSVG } from "qrcode.react"
import { CheckIcon, CopyIcon, ExternalLinkIcon, XIcon } from "lucide-react"
import { WhatsappLogoIcon } from "@/assets/icons"
import { cn } from "@/utils/styles"

export function WhatsappGroupQrCode({
  url,
  size = 200,
  className,
}: {
  url: string
  size?: number
  className?: string
}) {
  return (
    <div
      className={cn("relative shrink-0 rounded-xl bg-white p-3", className)}
    >
      <QRCodeSVG
        value={url}
        size={size}
        level="H"
        fgColor="#06210f"
        title="QR code do grupo no WhatsApp"
        className="block size-full"
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center size-[22%] rounded-full bg-white">
        <WhatsappLogoIcon className="size-[78%] fill-[#25D366]" />
      </div>
    </div>
  )
}

export function WhatsappGroupButton({
  url,
  className,
}: {
  url: string
  className?: string
}) {
  const [open, setOpen] = React.useState(false)
  const [copied, setCopied] = React.useState(false)

  function onClick(e: React.MouseEvent<HTMLAnchorElement>) {
    if (!window.matchMedia("(pointer: fine)").matches) return
    e.preventDefault()
    setOpen(true)
  }

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2_000)
    } catch {}
  }

  return (
    <>
      <a
        href={url}
        target="_blank"
        onClick={onClick}
        className={cn(
          "flex items-center justify-center gap-2.5 px-5 md:px-6 py-3 bg-[#25D366] font-bold rounded-lg text-[#06210f] text-base hover:scale-105 transition-all hover:bg-[#3be07a] text-center",
          className
        )}
      >
        <WhatsappLogoIcon className="size-5 fill-[#06210f]" />
        Entrar no grupo
      </a>

      <DialogPrimitive.Root open={open} onOpenChange={setOpen}>
        <DialogPrimitive.Portal>
          <DialogPrimitive.Overlay className="fixed inset-0 bg-black/80 z-50 backdrop-blur-sm data-[state=open]:animate-fade-in data-[state=closed]:animate-fade-out" />
          <DialogPrimitive.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[calc(100%-16px)] max-w-md rounded-2xl bg-background text-foreground shadow-lg border border-neutral p-8 data-[state=open]:animate-dialog-in data-[state=closed]:animate-dialog-out">
            <DialogPrimitive.Close className="absolute top-4 right-4 cursor-pointer hover:opacity-70 transition-opacity text-muted">
              <XIcon className="size-5" />
            </DialogPrimitive.Close>

            <div className="flex flex-col items-center">
              <DialogPrimitive.Title className="text-2xl font-bold font-display text-white text-center mb-2">
                Entre no grupo pelo celular
              </DialogPrimitive.Title>
              <DialogPrimitive.Description className="text-muted text-center mb-6">
                Aponta a câmera do celular pro QR code e toca no link que
                aparecer.
              </DialogPrimitive.Description>

              <WhatsappGroupQrCode url={url} size={220} className="mb-6" />

              <div className="flex items-center gap-2 w-full rounded-lg border border-white/10 bg-[#101318] pl-3 pr-1.5 py-1.5 mb-4">
                <span className="flex-1 truncate text-sm text-gray-300">
                  {url.replace(/^https?:\/\//, "")}
                </span>
                <button
                  type="button"
                  onClick={copyLink}
                  className="cursor-pointer shrink-0 flex items-center gap-1.5 rounded-md bg-white/10 px-3 py-1.5 text-sm font-semibold text-white hover:bg-white/15 transition-colors"
                >
                  {copied ? (
                    <CheckIcon className="size-4 text-[#25D366]" />
                  ) : (
                    <CopyIcon className="size-4" />
                  )}
                  {copied ? "Copiado!" : "Copiar"}
                </button>
              </div>

              <a
                href={url}
                target="_blank"
                className="flex items-center gap-1.5 text-sm text-gray-300 hover:text-[#25D366] transition-colors"
              >
                Abrir no WhatsApp Web
                <ExternalLinkIcon className="size-3.5" />
              </a>
            </div>
          </DialogPrimitive.Content>
        </DialogPrimitive.Portal>
      </DialogPrimitive.Root>
    </>
  )
}
