import { FaqSection } from './_components/faq-section'
import { Header } from './_components/header'
import { ProfessorSection } from './_components/professor-section'
import { TestimonialsSection } from './_components/testimonials-section'
import { PlatformSection } from './_components/platform-section'
import { Footer } from './_components/footer'
import { HeroSpotlight } from './_components/hero-spotlight'

export default function Home() {
  return (
    <div className=''>
      <Header />

      <HeroSpotlight />

      <PlatformSection />

      <ProfessorSection />

      <TestimonialsSection />

      <FaqSection />

      <Footer />
    </div>
  )
}
