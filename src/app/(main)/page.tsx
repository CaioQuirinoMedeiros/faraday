import { FaqSection } from "@/components/home/faq-section"
import { ProfessorSection } from "@/components/home/professor-section"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { PlatformSection } from "@/components/home/platform-section"
import { HeroSpotlight } from "@/components/home/hero-spotlight"
import { DownloadContentSection } from "@/components/home/download-content-section"
import { PricingSection } from "@/components/home/pricing-section"
import { TopBanner } from "@/components/home/top-banner"
import { JsonLd } from "@/components/json-ld"
import { faqItems } from "@/data/faq"
import {
  faqPageJsonLd,
  organizationId,
  organizationJsonLd,
  professorId,
  professorJsonLd,
  siteUrl,
} from "@/utils/seo"
import type { Metadata } from "next"

export const metadata: Metadata = {
  alternates: { canonical: "/" },
}

const homeJsonLd = {
  "@graph": [
    organizationJsonLd,
    professorJsonLd,
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: "Fisiquei",
      url: siteUrl,
      inLanguage: "pt-BR",
      publisher: { "@id": organizationId },
    },
    {
      "@type": "Course",
      name: "Curso de Física para ENEM e Vestibulares",
      description:
        "Curso online de Física com videoaulas, banco de mais de 5.000 questões com resolução e Central de Dúvidas, para o ENEM e vestibulares.",
      url: siteUrl,
      inLanguage: "pt-BR",
      provider: { "@id": organizationId },
      instructor: { "@id": professorId },
    },
    faqPageJsonLd(faqItems),
  ],
}

export default function Home() {
  return (
    <main className="">
      <JsonLd data={homeJsonLd} />

      <TopBanner
        ctaTitle="Revisão ENEM ao vivo e gratuita"
        ctaSubtitle="de 09/11 a 13/11"
        ctaButtonLink="/revisao"
        ctaButtonText="Participar"
        startDate={new Date(2026, 10, 9, 19, 45)}
        endDate={new Date(2026, 10, 13, 23, 59, 59)}
      />

      <TopBanner
        ctaTitle="Black Fisiquei: 50% OFF no Extensivo 2027"
        ctaSubtitle="de 16/11 a 16/12, com Seguro SiSU"
        ctaButtonLink="/black"
        ctaButtonText="Ver oferta"
        startDate={new Date("2026-11-16T00:00:00-03:00")}
        endDate={new Date("2026-12-16T23:59:59-03:00")}
        visibleFrom={new Date("2026-11-14T00:00:00-03:00")}
        liveText="Até 16/12"
        className="bg-fire text-fire-foreground"
      />

      <HeroSpotlight />

      <PlatformSection />

      <ProfessorSection />

      <DownloadContentSection />

      <div className="h-[2px] bg-[#232323]" />

      <TestimonialsSection />

      <PricingSection />

      <FaqSection />
    </main>
  )
}
