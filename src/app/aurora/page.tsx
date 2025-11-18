import { FaqSection } from '../_components/faq-section'
import { Header } from '../_components/header'
import { ProfessorSection } from '../_components/professor-section'
import { TestimonialsSection } from '../_components/testimonials-section'
import { Footer } from '../_components/footer'
import { PlatformSection } from '../_components/platform-section'
import { HeroAurora } from '../_components/hero-aurora'

export default function Home() {
  return (
    <div className=''>
      <Header />

      <HeroAurora />

      <PlatformSection />

      <ProfessorSection />

      <TestimonialsSection />

      <FaqSection />

      <Footer />
    </div>
  )
}
