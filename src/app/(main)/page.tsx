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
