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
