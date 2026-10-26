import { Metadata } from "next"
import {
  CalendarDaysIcon,
  CheckIcon,
  ClockIcon,
  FileDownIcon,
  GiftIcon,
  PlayIcon,
  SparklesIcon,
} from "lucide-react"
import { WhatsappLogoIcon, YoutubeLogoIcon } from "@/assets/icons"
import { Spotlight } from "@/components/home/spotlight"

export const metadata: Metadata = {
  title: "Revisão ENEM 2026 de Física",
  description:
    "Revisão gratuita de Física para o ENEM 2026 com o Prof. Thales Quirino. 5 lives no YouTube de 09 a 13/11, às 19h45, e 75 questões para treinar.",
}

const whatsappGroupUrl = "https://chat.whatsapp.com/DDKUU8B2wim8YvP6qmOn17"
const materialUrl = "https://url.fisiquei.com.br/revisaoenem2026"

const lives = [
  {
    date: "09/11",
    weekday: "Segunda",
    topic: "Cinemática",
    url: "https://youtube.com/live/LFQuN3k0qfc",
  },
  {
    date: "10/11",
    weekday: "Terça",
    topic: "Ondulatória",
    url: "https://youtube.com/live/34-3fDKtLGo",
  },
  {
    date: "11/11",
    weekday: "Quarta",
    topic: "Termologia",
    url: "https://youtube.com/live/KLkqokWFb2k",
  },
  {
    date: "12/11",
    weekday: "Quinta",
    topic: "Eletrodinâmica",
    url: "https://youtube.com/live/aoWmlAM7rCg",
  },
  {
    date: "13/11",
    weekday: "Sexta",
    topic: "Diversos",
    url: "https://youtube.com/live/fDrdEI3GxPM",
  },
]

const materialItems = [
  "75 questões no estilo ENEM, 15 para cada live",
  "10 questões de cada dia corrigidas ao vivo",
  "5 questões de cada dia com resolução na plataforma",
]

const groupItems = [
  "Lembrete antes de cada live",
  "Material e links sempre à mão",
  "Desconto exclusivo para quem está no grupo",
]

function WhatsappButton({ className }: { className?: string }) {
  return (
    <a
      href={whatsappGroupUrl}
      target="_blank"
      className={`flex items-center justify-center gap-2.5 px-5 md:px-6 py-3 bg-[#25D366] font-bold rounded-lg text-[#06210f] text-base hover:scale-105 transition-all hover:bg-[#3be07a] text-center ${className ?? ""}`}
    >
      <WhatsappLogoIcon className="size-5 fill-[#06210f]" />
      Entrar no grupo
    </a>
  )
}

function MaterialButton({ className }: { className?: string }) {
  return (
    <a
      href={materialUrl}
      target="_blank"
      className={`flex items-center justify-center gap-2.5 px-5 md:px-6 py-3 bg-primary font-bold rounded-lg text-primary-foreground text-base hover:scale-105 transition-all hover:bg-primary-light text-center ${className ?? ""}`}
    >
      <FileDownIcon className="size-5" />
      Baixar material
    </a>
  )
}

export default function RevisaoPage() {
  return (
    <main>
      <section className="relative bg-background overflow-hidden">
        <Spotlight />

        <div className="relative max-w-4xl w-full mx-auto pt-20 pb-20 px-6 flex flex-col items-center z-2">
          <div className="text-primary flex gap-1.5 items-center justify-center mb-4 px-3 py-1 bg-primary/10 border border-primary rounded-full text-sm">
            <SparklesIcon className="size-3.5 opacity-95" />
            <span className="font-medium text-center">
              100% gratuita · ENEM 2026
            </span>
          </div>

          <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-6">
            Revisão de Física
            <br />
            para o ENEM
          </h1>

          <p className="text-base md:text-lg text-gray-300 mb-8 leading-relaxed text-center max-w-[620px]">
            Uma semana inteira revisando o que mais cai no ENEM, com o{" "}
            <strong className="text-primary-light">Prof. Thales Quirino</strong>
            . São 5 lives no YouTube, de{" "}
            <strong className="text-primary-light">09 a 13 de novembro</strong>
            , sempre às 19h45, pra você chegar no 2º dia afiado.
          </p>

          <div className="flex flex-col sms:flex-row items-stretch sms:items-center gap-4 w-full sms:w-auto">
            <WhatsappButton />
            <MaterialButton />
          </div>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-8 text-sm text-gray-400">
            <span className="flex items-center gap-1.5">
              <CalendarDaysIcon className="size-4 text-primary" />
              09 a 13/11
            </span>
            <span className="flex items-center gap-1.5">
              <ClockIcon className="size-4 text-primary" />
              19h45 (Brasília)
            </span>
            <span className="flex items-center gap-1.5">
              <YoutubeLogoIcon className="size-4 fill-primary" />
              Ao vivo no YouTube
            </span>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-0 bg-[url(/images/grid.svg)] bg-size-[50px] opacity-25 bg-repeat" />
      </section>

      <section id="lives" className="bg-background py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-display text-white text-center mb-3">
            Agenda das lives
          </h2>
          <p className="text-muted text-center mb-10">
            Todas às 19h45, no canal do Fisiquei. Ativa o lembrete pra não
            perder.
          </p>

          <ol className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {lives.map((live, index) => {
              return (
                <li key={live.date}>
                  <a
                    href={live.url}
                    target="_blank"
                    className="group h-full flex items-center sm:flex-col sm:items-start gap-4 sm:gap-0 rounded-xl border border-white/10 bg-[#101318] p-4 sm:p-5 hover:border-primary/60 hover:-translate-y-1 transition-all"
                  >
                    <span className="text-2xl sm:text-3xl font-bold font-display text-primary min-w-[4.25rem] sm:order-2 sm:mb-3">
                      {live.date}
                    </span>
                    <span className="flex flex-col sm:contents">
                      <span className="text-xs font-semibold uppercase tracking-wider text-muted sm:order-1 sm:mb-1">
                        Live {index + 1} · {live.weekday}
                      </span>
                      <span className="text-lg font-semibold text-white sm:order-3 sm:mb-6">
                        {live.topic}
                      </span>
                    </span>
                    <span className="ml-auto sm:ml-0 sm:mt-auto sm:order-4 flex items-center gap-1.5 text-sm text-gray-300 group-hover:text-primary transition-colors">
                      <PlayIcon className="size-4 sm:size-3.5" />
                      <span className="hidden sm:inline">Abrir no YouTube</span>
                    </span>
                  </a>
                </li>
              )
            })}
          </ol>
        </div>
      </section>

      <section
        id="material"
        className="bg-primary-lighter text-[#101828] py-20 px-6"
      >
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
          <div className="flex flex-col rounded-2xl bg-white/60 border border-primary p-8">
            <FileDownIcon className="size-8 text-primary-dark mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold font-display mb-4">
              Material da revisão
            </h2>
            <ul className="flex flex-col gap-3 mb-8">
              {materialItems.map((item) => {
                return (
                  <li key={item} className="flex items-start gap-2.5">
                    <CheckIcon className="size-5 shrink-0 text-primary-dark" />
                    <span>{item}</span>
                  </li>
                )
              })}
            </ul>
            <MaterialButton className="mt-auto" />
          </div>

          <div className="flex flex-col rounded-2xl bg-[#101828] text-white p-8 shadow-[0_0_22px_3px_rgba(0,0,0,0.25)]">
            <WhatsappLogoIcon className="size-8 fill-[#25D366] mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold font-display mb-4">
              Grupo da revisão
            </h2>
            <ul className="flex flex-col gap-3 mb-8">
              {groupItems.map((item) => {
                return (
                  <li key={item} className="flex items-start gap-2.5">
                    <CheckIcon className="size-5 shrink-0 text-[#25D366]" />
                    <span>{item}</span>
                  </li>
                )
              })}
            </ul>
            <WhatsappButton className="mt-auto" />
          </div>
        </div>
      </section>

      <section className="bg-background py-20 px-6">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="shrink-0 size-56 rounded-3xl overflow-hidden bg-[radial-gradient(circle,#424F67_10%,#101828_100%)]">
            <img
              src="/images/professor/professor_1.png"
              alt="Prof. Thales Quirino"
              className="size-full object-cover object-top"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold font-display text-white mb-4">
              Quem vai te guiar
            </h2>
            <p className="text-gray-300 leading-relaxed mb-3">
              Sou o Thales, professor de Física formado pela UnB, com mais de
              10 anos de sala de aula e mais de 5.000 alunos no Fisiquei.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Nessa revisão, a ideia é simples: pegar os temas que mais caem,
              resolver questão por questão com você e mostrar o raciocínio que
              o ENEM cobra. Te vejo nas lives!
            </p>
          </div>
        </div>
      </section>

      <section className="bg-background pb-20 px-6">
        <div className="max-w-4xl mx-auto rounded-2xl border border-primary/40 bg-radial-[at_0%_0%] from-primary/20 to-[#101318] to-60% p-8 md:p-10 flex flex-col md:flex-row md:items-center gap-6">
          <div className="flex-1">
            <div className="flex items-center gap-1.5 text-primary text-sm font-semibold mb-2">
              <GiftIcon className="size-4" />
              Depois da prova
            </div>
            <h2 className="text-2xl md:text-3xl font-bold font-display text-white mb-2">
              Black Fisiquei começa em 16/11
            </h2>
            <p className="text-gray-300">
              A maior oferta do ano para quem vai estudar em 2027. Quem está no
              grupo fica sabendo primeiro.
            </p>
          </div>
          <WhatsappButton className="shrink-0" />
        </div>
      </section>
    </main>
  )
}
