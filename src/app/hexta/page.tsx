import { ArrowRightIcon } from 'lucide-react'
import { AuroraBackground } from '../_components/aurora-background'
import { FaqSection } from '../_components/faq-section'
import { Header } from '../_components/header'
import { ProfessorSection } from '../_components/professor-section'
import { TestimonialsSection } from '../_components/testimonials-section'
import { Footer } from '../_components/footer'
import { PlatformSection } from '../_components/platform-section'
import { HeroHexta } from '../_components/hero-hexta'

export default function Home() {
  return (
    <div className='overflow-x-hidden relative'>
      <Header />

      <HeroHexta />

      <PlatformSection />

      <ProfessorSection />

      <TestimonialsSection />

      <FaqSection />

      <Footer />
    </div>
  )
}
