"use client"

import { ArrowRightIcon, RocketIcon } from "lucide-react"
import { motion, stagger, Variants } from "motion/react"
import { Spotlight } from "./spotlight"
import ImageSlideshow from "./image-slideshow"
import Link from "next/link"

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      delayChildren: stagger(0.08),
    },
  },
}

const item: Variants = {
  hidden: { y: 20, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 1.4, ease: [0.22, 1, 0.36, 1] },
  },
}

export function HeroSpotlight() {
  return (
    <motion.section
      variants={container}
      initial="hidden"
      animate="show"
      viewport={{ once: true, amount: 0.1 }}
      className="relative bg-background"
    >
      <Spotlight />

      <div className="relative max-w-7xl w-full mx-auto pt-20 px-6 flex flex-col items-center z-2">
        <div className="flex flex-col items-center max-w-[600px] mb-12 md:mb-20">
          <motion.div className="flex flex-col items-center" variants={item}>
            <div className="text-primary flex gap-1.5 items-center justify-center mb-4 px-3 py-1 bg-primary/10 border border-primary rounded-full text-sm">
              <RocketIcon className="size-3.5 opacity-95" />
              <span className="font-medium text-center">
                Sua aprovação começa aqui
              </span>
            </div>

            <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 mb-6">
              Aprenda Física
              <br />
              de verdade
            </h1>
          </motion.div>

          <motion.div
            variants={item}
            className="flex flex-col items-center animate-hero-text-in"
          >
            <p className="text-base md:text-lg text-gray-300 mb-8 leading-relaxed text-center">
              O Fisiquei vai mudar a forma como você enxerga a Física.
              Prepare-se para o <strong className="text-primary-light">ENEM e vestibulares</strong> com a
              melhor plataforma do Brasil.
            </p>

            <div className="flex items-center gap-4">
              <a
                href="https://app.fisiquei.com.br/cadastro"
                target="_blank"
                className="flex items-center gap-3 px-4 md:px-6 py-2 md:py-3 bg-primary font-bold rounded-lg text-primary-foreground text-base hover:scale-105 transition-all hover:bg-primary-light text-center"
              >
                Comece grátis
              </a>
              <Link
                href="/#planos"
                className="flex items-center gap-3 px-4 md:px-6 py-2 md:py-3 bg-gray-950/15 border border-gray-400 text-white/95 font-bold rounded-lg text-base hover:scale-105 transition-all hover:bg-gray-950/50 hover:text-white text-center"
              >
                Ver planos <ArrowRightIcon className="size-4" />
              </Link>
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={item}
          className="w-[calc(100%+24px)] sm:w-full -mb-[140px]"
        >
          <div className="relative z-20 overflow-hidden rounded-[12px] border-10 border-[rgb(14,14,16,1)] bg-transparent shadow-[0_0_8px_0px_rgba(140,240,240,0.15)]">
            <div className="relative w-full aspect-[168/89] rounded-[6px] overflow-hidden">
              <ImageSlideshow />
            </div>
            {/* <HeroYoutubePlayer /> */}
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.25 }}
        transition={{ duration: 2 }}
        className="pointer-events-none absolute inset-0 bg-[url(/images/grid.svg)] bg-size-[50px] opacity-25 bg-repeat"
      />
    </motion.section>
  )
}
