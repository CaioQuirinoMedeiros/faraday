'use client'

import { motion } from 'motion/react'
import { StarsBackground } from './stars-background'

export function TestimonialsSection() {
  return (
    <section
      id='depoimentos'
      // className='relative flex flex-col items-center justify-center py-20 bg-card bg-linear-to-b from-background from-0% to-[#101111] to-3%'
      className='relative flex flex-col items-center justify-center py-20 bg-[#101111]'
    >
      <StarsBackground
        starDensity={0.00015}
        allStarsTwinkle={false}
        twinkleProbability={0.85}
        minTwinkleSpeed={0.5}
        maxTwinkleSpeed={1}
      />

      <div className='max-w-3xl flex flex-col items-center'>
        <div className='flex flex-col gap-3.5 items-center mb-12'>
          <div className='flex items-center justify-center bg-primary text-primary-foreground rounded-full px-2.5 py-1 text-center text-sm font-medium'>
            <span>Depoimentos</span>
          </div>
          <h2 className='text-4xl font-bold font-display text-center text-white'>
            O que os <span className='text-primary-light'>alunos dizem</span>
          </h2>
        </div>

        <div className='relative'>
          <div className='relative mx-auto border-[#121212] bg-[#121212] border-[10px] rounded-[2.5rem] shadow-[0_0_30px_2px_rgba(255,255,255,.08)]'>
            <div className='w-[148px] h-[18px] bg-[#121212] top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute z-10'></div>
            <div className='h-[32px] w-[3px] bg-[#0b0b0b] absolute -start-[13px] top-[72px] rounded-s-lg'></div>
            <div className='h-[46px] w-[3px] bg-[#0b0b0b] absolute -start-[13px] top-[124px] rounded-s-lg'></div>
            <div className='h-[46px] w-[3px] bg-[#0b0b0b] absolute -start-[13px] top-[178px] rounded-s-lg'></div>
            <div className='h-[64px] w-[3px] bg-[#0b0b0b] absolute -end-[13px] top-[142px] rounded-e-lg'></div>
            <div className='w-[320px] aspect-9/16 box-content relative rounded-[2rem] overflow-hidden bg-[#000]'>
              <motion.div
                className='size-full relative'
                initial={{ opacity: 0, scale: 0.15, y: 200 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, amount: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <iframe
                  id='panda-testimonials'
                  className='size-full'
                  title="Depoimentos de alunos aprovados"
                  src='https://player-vz-b027ba5d-190.tv.pandavideo.com.br/embed/?v=3dd5de93-01df-41bd-ac1b-13c2875e1629&autoplay=true&muted=true&hideControlsOnStart=true'
                  allow='accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture'
                  allowFullScreen
                ></iframe>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
