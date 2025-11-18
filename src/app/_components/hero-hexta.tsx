'use client'

import * as React from 'react'
import { ArrowRightIcon, RocketIcon } from 'lucide-react'
import { motion, AnimatePresence, Variants } from 'motion/react'

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

export function HeroHexta() {
  return (
    <motion.section
      variants={container}
      initial='hidden'
      animate='show'
      className='bg-#101010 pt-[150px] relative'
    >
      <div className='flex flex-col items-end absolute -right-60 -top-10 blur-xl z-0'>
        <div className='h-[6rem] rounded-full w-[60rem] z-1 bg-gradient-to-b blur-[6rem] from-purple-600 to-sky-600'></div>
        <div className='h-[6rem] rounded-full w-[90rem] z-1 bg-gradient-to-b blur-[6rem] from-pink-900 to-yellow-400'></div>
        <div className='h-[6rem] rounded-full w-[60rem] z-1 bg-gradient-to-b blur-[6rem] from-yellow-600 to-sky-500'></div>
      </div>
      <div className='absolute bg-repeat bg-size-[200px_200px] inset-0 z-0 bg-[url(/images/noise.svg)] opacity-30'></div>

      <div className='relative z-10 max-w-7xl w-full mx-auto px-6 flex flex-col items-center gap-20'>
        <div className='flex flex-col items-center max-w-[600px]'>
          <motion.div className='flex flex-col items-center' variants={item}>
            <div className='flex gap-1.5 items-center justify-center mb-4 px-3 py-1 bg-black/25 text-primary border border-primary rounded-full text-sm'>
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

          <motion.div
            variants={item}
            className='flex flex-col items-center animate-hero-text-in'
          >
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

        <motion.div
          variants={item}
          className='z-20 relative mx-auto w-full max-w-6xl -mb-[100px]'
        >
          <div className='absolute inset-0 rounded shadow-lg bg-background blur-[10rem] opacity-20' />

          <img
            src='/images/plataforma/inicio.png'
            alt='Hero Image'
            className='relative w-full h-auto shadow-md rounded-2xl'
          />
        </motion.div>
      </div>
    </motion.section>
  )
}
