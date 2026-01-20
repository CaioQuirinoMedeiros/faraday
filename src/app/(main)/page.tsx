import { FaqSection } from "@/components/home/faq-section"
import { ProfessorSection } from "@/components/home/professor-section"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { PlatformSection } from "@/components/home/platform-section"
import { HeroSpotlight } from "@/components/home/hero-spotlight"
import { DownloadContentSection } from "@/components/home/download-content-section"
import { PricingSection } from "@/components/home/pricing-section"
import { TopBanner } from "@/components/home/top-banner"

export default function Home() {
  return (
    <main className="">
      <TopBanner
        ctaTitle="Promoção SiSU"
        ctaSubtitle="40% OFF no 2º LOTE!"
        ctaButtonLink="https://app.fisiquei.com.br/api/ofertas/extensivo-2026-padrao/checkout?coupon=PROMOSISU"
        ctaButtonText="Garantir minha vaga"
        endDate={new Date(2026, 0, 28, 23, 59, 59)}
        endText="2º lote até 28/01/2026"
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
