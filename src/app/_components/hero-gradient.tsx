'use client'

import { ArrowRightIcon, RocketIcon } from 'lucide-react'
import { motion, Variants } from 'motion/react'
import { GradientBackground } from './gradient-background'

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      // stagger child animations for a subtle cascading effect
      delayChildren: 0,
      staggerChildren: 0.08
    }
  }
}

const item: Variants = {
  hidden: { y: 16, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] }
  }
}

export function HeroGradient() {
  return (
    <motion.section
      variants={container}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0.1 }}
      className='relative'
    >
      <GradientBackground>
        <div className='max-w-7xl w-full mx-auto pt-[150px] px-6 flex flex-col items-center gap-20 z-2'>
          <div className='flex flex-col items-center max-w-[600px]'>
            <motion.div
              className='flex flex-col items-center'
              variants={item}
            >
              <div className='text-primary flex gap-1.5 items-center justify-center mb-4 px-3 py-1 bg-primary/10 border border-primary rounded-full text-sm'>
                <RocketIcon className='size-3.5 opacity-95' />
                <span className='font-medium text-center'>
                  Sua aprovação começa aqui
                </span>
              </div>

              <h1 className='text-center text-6xl md:6xl font-display font-semibold text-white mb-6 leading-[1.1]'>
                Aprenda Física
                <br />
                <span className='text-primary'>de verdade!</span>
              </h1>
            </motion.div>

            <motion.div variants={item} className='flex flex-col items-center animate-hero-text-in'>
              <p className='text-lg text-gray-300 mb-8 leading-relaxed text-center'>
                O Fisiquei vai mudar a forma como você enxerga a Física.
                Prepare-se para o <strong>ENEM e vestibulares</strong> com a
                melhor plataforma do Brasil.
              </p>

              <div className='flex items-center gap-4'>
                <a
                  href='https://app.fisiquei.com.br/cadastro'
                  className='flex items-center gap-3 px-6 py-3 bg-primary font-bold rounded-lg text-primary-foreground text-base hover:scale-105 transition-all hover:bg-primary-light text-center'
                >
                  Comece grátis
                </a>
                <a
                  href='https://app.fisiquei.com.br/ofertas'
                  className='flex items-center gap-3 px-6 py-3 bg-gray-950/15 border border-gray-400 text-white/95 font-bold rounded-lg text-base hover:scale-105 transition-all hover:bg-gray-950/50 hover:text-white text-center'
                >
                  Ver planos <ArrowRightIcon className='size-4' />
                </a>
              </div>
            </motion.div>
          </div>

          <motion.div variants={item} className='w-full -mb-[140px]'>
            <div className='relative z-20 overflow-hidden rounded-[20px] border-10 border-[rgb(18,18,18,0.2)] bg-transparent shadow-[0_0_8px_0px_rgba(140,240,240,0.15)]'>
              <div className='relative w-full aspect-video rounded-[10px] overflow-hidden'>
                <img
                  src='/images/plataforma/inicio.png'
                  className='size-full bg-cover'
                />
              </div>
            </div>
          </motion.div>
        </div>
      </GradientBackground>
    </motion.section>
  )
}
