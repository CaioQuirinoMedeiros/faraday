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
  sameAs: [
    "https://youtube.com/@fisiquei",
    "https://x.com/fisiquei",
    "https://instagram.com/thalesquirino",
  ],
}

export const professorJsonLd = {
  "@type": "Person",
  "@id": professorId,
  name: "Thales Quirino",
  jobTitle: "Professor de Física",
  worksFor: { "@id": organizationId },
  sameAs: [
    "https://instagram.com/thalesquirino",
    "https://www.threads.com/@thalesquirino",
  ],
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
