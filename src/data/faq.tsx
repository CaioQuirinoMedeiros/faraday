"use client"

import * as React from "react"

type FaqItem = {
  key: string
  question: React.ReactNode
  answer: React.ReactNode
}

const faqAcessoGratuito: FaqItem = {
  key: "acesso-gratuito",
  question: "Como funciona o acesso gratuito?",
  answer: (
    <>
      Com uma conta gratuita você pode explorar toda a plataforma com algumas
      limitações: Você pode assistir as primeiras aulas do curso e também tem
      acesso a um número limitado de questões, o que ainda é suficiente para
      montar várias listas personalizadas! É perfeito para você testar e ver
      como a metodologia funciona antes de assinar o plano completo.
    </>
  ),
}

const faqParaQuem: FaqItem = {
  key: "para-quem",
  question: "Para quem o curso é indicado?",
  answer: (
    <>
      Para quem deseja aprender Física de verdade e alcançar a aprovação no ENEM
      ou qualquer outro vestibular/concurso. É ideal para quem ainda precisa
      formar uma BASE sólida em Física e também para quem precisa aprofundar,
      como vestibulandos de MEDICINA.
    </>
  ),
}

const faqValorAcesso: FaqItem = {
  key: "valor-e-acesso",
  question: "Qual o valor do acesso completo? E quanto tempo de acesso?",
  answer: (
    <>
      Entre na{" "}
      <a
        href="https://app.fisiquei.com.br/ofertas"
        className="underline hover:opacity-75 text-primary"
      >
        página de ofertas
      </a>{" "}
      para conferir os planos disponíveis no momento. Lá você encontrará o valor
      e o tempo de acesso de cada plano!
    </>
  ),
}

const faqFormasPagamento: FaqItem = {
  key: "formas-pagamento",
  question: "Quais as formas de pagamento?",
  answer: (
    <>
      As opções de pagamento são: <strong>Pix</strong>, <strong>Boleto</strong>{" "}
      e <strong>Cartão de crédito</strong> até 12x sem juros
    </>
  ),
}

const faqRenovacao: FaqItem = {
  key: "renovacao",
  question: "Tem desconto para renovação de aluno/ex-aluno?",
  answer: (
    <>
      A Black Fisiquei está dando 50% de desconto... Mas para{" "}
      <strong>aluno ou ex-aluno o desconto é de 60%!</strong>{" "}
      <a
        target="_blank"
        href="https://app.fisiquei.com.br/ofertas/extensivo-2026/checkout?coupon=RENOVABF60"
        className="text-primary-lighter underline hover:opacity-80"
      >
        Clique aqui
      </a>{" "}
      para usar seu cupom RENOVABF60 (use o mesmo email do seu acesso atual para
      validar o cupom corretamente)
    </>
  ),
}

const faqPossuiQuestoes: FaqItem = {
  key: "plataforma-possui-questoes",
  question: "A plataforma possui questões resolvidas?",
  answer: (
    <>
      Sim, A plataforma tem um banco com mais de 5.000 questões das quais mais
      de 3.000 possuem resolução em vídeo! Além da resolução, todas as questões
      têm uma dica opcional para te ajudar quando precisar. Todas as questões
      são classificadas por assunto, prova de origem e dificuldade, assim fica
      fácil de você montar sua lista personalizada!
    </>
  ),
}

const faqTirarDuvidas: FaqItem = {
  key: "tirar-duvidas",
  question: "Como vou poder tirar minhas dúvidas?",
  answer: (
    <>
      A plataforma Fisiquei possui um Fórum de Dúvidas incrível para você postar
      qualquer dúvida sobre uma aula ou uma questão! É bem fácil, basta procurar
      o botão <strong>&quot;Dúvidas&quot;</strong>, postar a sua pergunta e
      esperar... O professor Thales não deixa ninguém sem resposta!
    </>
  ),
}

const faqAulasGravadas: FaqItem = {
  key: "aulas-ao-vivo-ou-gravadas",
  question: "As aulas são ao vivo ou gravadas?",
  answer: (
    <>
      As videoaulas são gravadas e já estão todas disponíveis para você começar
      quando quiser, assim você pode avançar no seu próprio ritmo e assistir as
      aulas quando e de onde quiser!
    </>
  ),
}

const faqReembolso: FaqItem = {
  key: "reembolso",
  question: "Se eu me arrepender, posso pedir reembolso?",
  answer: (
    <>
      Sim! <strong>Em até 7 dias após a compra</strong> você pode solicitar o
      reembolso e terá 100% do valor reembolsado. E é sem burocracia, não
      precisa de justificativa, basta entrar em contato com o suporte e fazer a
      solicitação.
    </>
  ),
}

const faqSeguroSisu: FaqItem = {
  key: "seguro-sisu",
  question: "Como funciona o Seguro SiSU?",
  answer: (
    <>
      Em caso de aprovação no SiSU 2026, até 3ª chamada, você terá reembolso
      total do valor investido. Basta mandar mensagem para nosso suporte
      comprovando sua aprovação.
    </>
  ),
}

export const faqItems = [
  faqAcessoGratuito,
  faqParaQuem,
  faqValorAcesso,
  faqFormasPagamento,
  faqPossuiQuestoes,
  faqTirarDuvidas,
  faqAulasGravadas,
  faqReembolso,
]
