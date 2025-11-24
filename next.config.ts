import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  trailingSlash: true,

  turbopack: {
    rules: {
      "*.svg": {
        loaders: ["@svgr/webpack"],
        as: "*.js",
      },
    },
  },
}

export default nextConfig
