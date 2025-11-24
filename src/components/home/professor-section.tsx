"use client"

import {
  GraduationCapIcon,
  MedalIcon,
  UsersIcon,
  YoutubeIcon,
} from "lucide-react"
import { AnimatePresence, motion } from "motion/react"
import * as React from "react"

type ItemBadge = {
  title: string
  message: string
  icon: React.ElementType
}

const badges: ItemBadge[] = [
  {
    title: "Formação UnB",
    message: "Bacharelado e Licenciatura em Física pela UnB",
    icon: GraduationCapIcon,
  },
  {
    title: "+10 anos experiência",
    message: "Principais colégios e cursinhos de Brasília",
    icon: MedalIcon,
  },
  {
    title: "5M de visualizações",
    message: "Canal do Youtube com 50k inscritos e +600 vídeos",
    icon: YoutubeIcon,
  },
  {
    title: "+5.000 alunos",
    message: "Transformados com o jeito Fisiquei de aprender",
    icon: UsersIcon,
  },
]

const professorImages = [
  "/images/professor/professor_1.png",
  "/images/professor/professor_2.png",
  "/images/professor/professor_3.png",
]

const intervalMs = 4_000

export function ProfessorSection() {
  const [imageIndex, setImageIndex] = React.useState(0)

  React.useEffect(() => {
    const id = setInterval(
      () => setImageIndex((i) => (i + 1) % professorImages.length),
      intervalMs
    )
    return () => clearInterval(id)
  }, [])

  return (
    <section
      id="professor"
      className="flex flex-col items-center justify-center pt-20 pb-15 bg-primary-lighter text-[#101828] overflow-x-hidden"
    >
      <div className="relative flex flex-col-reverse mdx:flex-row mdx:items-center px-6 gap-x-10 xl:gap-x-12 2xl:gap-x-16 gap-y-12 max-w-6xl">
        <motion.div
          whileInView={{
            opacity: 1,
            transform: "translateX(0)",
          }}
          transition={{ duration: 0.75 }}
          initial={{ opacity: 0, transform: "translateX(-100px)" }}
          viewport={{ once: true, amount: 0.25 }}
          className="relative flex flex-col w-full aspect-video mdx:aspect-2/3 rounded-3xl bg-[#242324] mdx:flex-1 mdx:min-w-[400px] bg-[radial-gradient(circle,#424F67_10%,#101828_100%)] shadow-[0_0_22px_3px_rgba(0,0,0,0.5)]"
        >
          <AnimatePresence>
            <motion.img
              key={imageIndex}
              src={professorImages[imageIndex]}
              alt={`slide ${imageIndex}`}
              className="absolute inset-0 size-full object-contain object-bottom"
              initial={{ opacity: 0 }}
              fetchPriority="high"
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2 }}
            />
          </AnimatePresence>

          <div className="absolute right-6 top-0 -translate-y-1/2 self-center bg-[#f5f5f5] rounded-md sm:rounded-xl text-primary-foreground text-sm sm:text-lg px-2 sm:px-3 py-1 sm:py-2 shadow-[0_0_24px_4px_rgba(0,0,0,0.5)]">
            <span className="italic">{'"The jump of the cat"'}</span>
          </div>
        </motion.div>

        <motion.div
          whileInView={{
            opacity: 1,
            transform: "translateX(0)",
          }}
          transition={{ duration: 0.75 }}
          initial={{ opacity: 0, transform: "translateX(100px)" }}
          viewport={{ once: true, amount: 0.25 }}
          className="flex flex-col mdx:flex-1"
        >
          <div className="flex flex-col gap-3 items-start mb-6">
            <div className="flex items-center justify-center border border-primary-foreground/10 bg-primary-light text-primary-foreground rounded-full px-2.5 py-1 text-center text-sm font-medium">
              <span>Conheça o professor</span>
            </div>
            <h2 className="text-4xl font-bold text-[#121211]">
              Prof. Thales Quirino
            </h2>
          </div>
          <div className="space-y-4 text-base sm:text-lg text-primary-foreground/90 mb-6">
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
              enfim deu origem ao FISIQUEI, que vem transformando o
              aprendizado de Física para milhares de alunos em todo o Brasil.
            </p>
          </div>

          <div className="flex flex-col gap-3.5">
            {badges.map((badge) => {
              const { icon: BadgeIcon } = badge

              return (
                <div key={badge.title} className="flex gap-2.5 items-center">
                  <div className="bg-primary/70 rounded-md size-10 sm:size-11 flex items-center justify-center shrink-0">
                    <BadgeIcon className="text-primary-foreground size-5" />
                  </div>
                  <div className="flex flex-col">
                    <strong className="text-sm">{badge.title}</strong>
                    <p className="text-gray-600 text-xs sm:text-sm">{badge.message}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
