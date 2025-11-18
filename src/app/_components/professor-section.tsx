'use client'

import {
  GraduationCapIcon,
  MedalIcon,
  UsersIcon,
  YoutubeIcon
} from 'lucide-react'
import { motion } from 'motion/react'

type ItemBadge = {
  title: string
  message: string
  icon: React.ElementType
}

const badges: ItemBadge[] = [
  {
    title: 'Formação UnB',
    message: 'Bacharelado e Licenciatura em Física pela UnB',
    icon: GraduationCapIcon
  },
  {
    title: '+10 anos experiência',
    message: 'Atuando nos principais colégios e cursinhos de Brasília',
    icon: MedalIcon
  },
  {
    title: '5M de visualizações',
    message: 'No canal do Youtube com 50k de inscritos e +600 vídeos',
    icon: YoutubeIcon
  },
  {
    title: '+5.000 alunos',
    message: 'Transformados com o jeito Fisiquei de aprender',
    icon: UsersIcon
  }
]

export function ProfessorSection() {
  return (
    <section
      id='professor'
      className='flex flex-col items-center justify-center pt-20 bg-[#ffe6ad] text-[#101828]'
    >
      <div className='relative flex flex-col-reverse md:flex-row md:items-center px-6 gap-x-10 xl:gap-x-12 2xl:gap-x-16 gap-y-8 max-w-6xl'>
        <motion.div
          whileInView={{
            opacity: 1,
            transform: 'translateX(0)'
          }}
          transition={{ duration: 0.75 }}
          initial={{ opacity: 0, transform: 'translateX(-100px)' }}
          viewport={{ once: true, amount: 0.25 }}
          className='flex flex-col aspect-2/3 rounded-3xl bg-[#242324] relative md:flex-1 md:min-w-[400px] bg-[radial-gradient(circle,#424F67_10%,#101828_100%)] shadow-[0_0_22px_3px_rgba(0,0,0,0.5)]'
        >
          <img
            src='/images/professor/professor_4.png'
            className='size-full object-contain bg-center'
            alt='Professor Thales Quirino'
          />

          <div className='absolute bottom-0 translate-y-1/3 self-center bg-accent rounded-md text-primary-foreground text-lg px-3 py-2 shadow-[0_0_24px_4px_rgba(0,0,0,0.5)]'>
            <span className='italic'>{'"The jump of the cat"'}</span>
          </div>
        </motion.div>

        <motion.div
          whileInView={{
            opacity: 1,
            transform: 'translateX(0)'
          }}
          transition={{ duration: 0.75 }}
          initial={{ opacity: 0, transform: 'translateX(100px)' }}
          viewport={{ once: true, amount: 0.25 }}
          className='flex flex-col md:flex-1'
        >
          <div className='flex flex-col gap-3 items-start mb-6'>
            <div className='flex items-center justify-center border border-primary-foreground/10 bg-primary/60 text-primary-foreground rounded-full px-2.5 py-1 text-center text-sm font-medium'>
              <span>Conheça o professor</span>
            </div>
            <h2 className='text-4xl font-bold text-center text-[#121211]'>
              Prof. Thales Quirino
            </h2>
          </div>
          <div className='space-y-4 text-lg text-primary-foreground/90 mb-6'>
            <p>
              Formado em Bacharelado e Licenciatura pela Universidade de
              Brasília (UnB), Thales acumula mais de uma década ensinando Física
              em escolas e cursinhos de alto nível em Brasília. Ao longo dos
              anos adquiriu muita experiência em resolução de vestibulares de
              todo o Brasil, especialmente o ENEM.
            </p>
            <p>
              Com o modelo remoto imposto pela pandemia, começou a se
              aperfeiçoar no formato digital, ministrando diversas aulas online
              e criando materiais didáticos próprios. Toda essa metodologia
              enfim se transformou no FISIQUEI, que vem transformando o
              aprendizado de Física para milhares de alunos em todo o Brasil.
            </p>
          </div>

          <div className='flex flex-col gap-3.5'>
            {badges.map((badge) => {
              const { icon: BadgeIcon } = badge

              return (
                <div key={badge.title} className='flex gap-2.5 items-center'>
                  <div className='bg-primary/70 rounded-md size-11 flex items-center justify-center'>
                    <BadgeIcon className='text-primary-foreground size-5' />
                  </div>
                  <div className='flex flex-col'>
                    <strong className='text-sm'>{badge.title}</strong>
                    <p className='text-gray-600 text-sm'>{badge.message}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </motion.div>
      </div>

      <svg
        viewBox='0 0 1440 120'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className='w-full h-auto translate-y-1 pt-14'
      >
        <path
          d='M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z'
          fill='white'
          className='fill-background'
        ></path>
      </svg>
    </section>
  )
}
