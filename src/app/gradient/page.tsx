import { FaqSection } from '../_components/faq-section'
import { Header } from '../_components/header'
import { ProfessorSection } from '../_components/professor-section'
import { TestimonialsSection } from '../_components/testimonials-section'
import { Footer } from '../_components/footer'
import { PlatformSection } from '../_components/platform-section'
import { HeroGradient } from '../_components/hero-gradient'

export default function Home() {
  return (
    <div className=''>
      <Header />

      <HeroGradient />

      <PlatformSection />

      <ProfessorSection />

      <TestimonialsSection />

      <FaqSection />

      <Footer />
    </div>
  )
}
