import type { MetadataRoute } from "next"
import { siteUrl } from "@/utils/seo"

export const dynamic = "force-static"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${siteUrl}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${siteUrl}/black/`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${siteUrl}/revisao/`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${siteUrl}/antifraude/`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${siteUrl}/termos/`, changeFrequency: "yearly", priority: 0.1 },
    {
      url: `${siteUrl}/privacidade/`,
      changeFrequency: "yearly",
      priority: 0.1,
    },
  ]
}
