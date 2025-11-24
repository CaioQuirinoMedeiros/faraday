import {
  BookCheckIcon,
  CalendarDaysIcon,
  LucideIcon,
  MessageSquareIcon,
  TvMinimalPlayIcon,
} from "lucide-react"

type PlatformFeature = {
  title: string
  badgeText: string
  shortText: React.ReactNode
  icon: LucideIcon
  color: string
  imageSrc: string
  imageAlt: string
  topics: React.ReactNode[]
}

export const platformFeatures: PlatformFeature[] = [
  {
    title: "Aulas completas",
    badgeText: "Todo o conteúdo de Física",
    icon: TvMinimalPlayIcon,
    color: "#00b35f",
    imageSrc: "/images/plataforma-features/aula.png",
    imageAlt: "Página de uma videoaula na plataforma Fisiquei",
    shortText: (
      <>
        Aulas claras e objetivas cobrindo todo o conteúdo de Física. Nada de
        decoreba, aqui você vai finalmente aprender de verdade!
      </>
    ),
    topics: [
      <>+330 videoaulas organizadas em módulos</>,
      <>Material em PDF para acompanhar as aulas</>,
      <>Didática pra qualquer um destravar a física</>,
      <>Média de 12 minutos/aula</>,
    ],
  },
  {
    title: "Cronograma personalizado",
    badgeText: "Organização e planejamento",
    icon: CalendarDaysIcon,
    color: "#a548e0",
    imageSrc: "/images/plataforma-features/cronograma.png",
    imageAlt: "Página do gerador de cronograma na plataforma Fisiquei",
    shortText: (
      <>
        Escolha os módulos, priorize, informe sua disponibilidade e receba o seu
        cronograma completo que se atualiza conforme você progride.
      </>
    ),
    topics: [
      <>Seleção e ordenação de módulos</>,
      <>Cálculo com base na sua disponibilidade e preferências</>,
      <>Atualização automática ao progredir no curso</>,
      <>Previsão da data de término</>,
    ],
  },
  {
    title: "Listas e Simulados",
    badgeText: "Resolução de questões",
    icon: BookCheckIcon,
    color: "#ff7400",
    imageSrc: "/images/plataforma-features/lista.png",
    imageAlt: "Página de uma lista de questões na plataforma Fisiquei",
    shortText: (
      <>
        Crie listas e simulados entre mais de 5.000 questões bem organizadas e
        com resolução. Você vai se surpreender com a qualidade do nosso banco de questões. 
      </>
    ),
    topics: [
      <>Questões com dica e resolução em vídeo</>,
      <>Filtragem por tópico, dificuldade e prova</>,
      <>Estatísticas das alternativas</>,
      <>Exportação das listas em PDF</>,
    ],
  },
  {
    title: "Fórum de Dúvidas",
    badgeText: "Suporte para dúvidas",
    icon: MessageSquareIcon,
    color: "#1f54e9",
    imageSrc: "/images/plataforma-features/forum_duvidas.png",
    imageAlt: "Página do fórum de dúvidas na plataforma Fisiquei",
    shortText: (
      <>
        Ficou com alguma dúvida em uma aula ou uma questão? Com um clique você
        envia a sua dúvida e o professor vai responder o mais breve possivel.
      </>
    ),
    topics: [
      <>Mais de 1.100 dúvidas já respondidas</>,
      <>Uso de formatação, links, equações e imagens</>,
      <>Interação entre o professor e os alunos</>,
      <>Notificação de resposta da sua dúvida</>,
    ],
  },
]
