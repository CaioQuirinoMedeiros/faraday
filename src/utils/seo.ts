import { instagramUrl, threadsUrl, xUrl, youtubeUrl } from "@/data/socials"
import type { Metadata } from "next"
import { isValidElement, type ReactNode } from "react"

export const siteUrl = "https://fisiquei.com.br"

export const siteDescription =
  "Prepare-se para o ENEM e vestibulares com a melhor plataforma de ensino de Física online! O Fisiquei vai mudar a forma como você enxerga a Física!"

export const baseOpenGraph: NonNullable<Metadata["openGraph"]> = {
  type: "website",
  locale: "pt_BR",
  siteName: "Fisiquei",
}

export const organizationId = `${siteUrl}/#organization`
export const professorId = `${siteUrl}/#thales-quirino`

export const organizationJsonLd = {
  "@type": "EducationalOrganization",
  "@id": organizationId,
  name: "Fisiquei",
  url: siteUrl,
  logo: `${siteUrl}/images/logo_fisiquei_365x100.png`,
  description: siteDescription,
  sameAs: [youtubeUrl, xUrl, instagramUrl],
}

export const professorJsonLd = {
  "@type": "Person",
  "@id": professorId,
  name: "Thales Quirino",
  jobTitle: "Professor de Física",
  worksFor: { "@id": organizationId },
  sameAs: [instagramUrl, threadsUrl],
}

export function reactNodeToText(node: ReactNode): string {
  if (node === null || node === undefined || typeof node === "boolean") {
    return ""
  }
  if (typeof node === "string" || typeof node === "number") {
    return String(node)
  }
  if (Array.isArray(node)) {
    return node.map(reactNodeToText).join("")
  }
  if (isValidElement<{ children?: ReactNode }>(node)) {
    return reactNodeToText(node.props.children)
  }
  return ""
}

export function faqPageJsonLd(
  items: { question: ReactNode; answer: ReactNode }[]
) {
  return {
    "@type": "FAQPage",
    mainEntity: items.map((faqItem) => ({
      "@type": "Question",
      name: reactNodeToText(faqItem.question),
      acceptedAnswer: {
        "@type": "Answer",
        text: reactNodeToText(faqItem.answer).replace(/\s+/g, " ").trim(),
      },
    })),
  }
}
