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
        ctaTitle="BLACK FISIQUEI • 50% OFF"
        ctaSubtitle="O maior desconto do ano foi estendido!"
        ctaButtonLink="/#plano-atual"
        ctaButtonText="Ver oferta"
        endDate={new Date(2025, 11, 12, 23, 59, 59)}
        endText="Prorrogado até 12/12"
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
