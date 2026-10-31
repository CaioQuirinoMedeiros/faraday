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
        href="https://app.fisiquei.com.br/ofertas/extensivo-2027/checkout?coupon=RENOVABF60"
        className="text-primary underline hover:opacity-80"
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
      A plataforma Fisiquei possui a Central de Dúvidas, um local para enviar
      sua dúvida sobre uma aula ou uma questão! É bem fácil, basta procurar o
      botão <strong>&quot;Dúvidas&quot;</strong>, postar a sua pergunta e
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
      Quem compra na Black Fisiquei e é aprovado no SiSU até{" "}
      <strong>28/02/2027</strong> recebe o reembolso integral do valor pago. Não
      importa a chamada, vale a data: é só mandar o comprovante da aprovação
      para o nosso suporte até lá.
    </>
  ),
}

const faqBlackOQueE: FaqItem = {
  key: "black-o-que-e",
  question: "O que é a Black Fisiquei e até quando vai?",
  answer: (
    <>
      É a maior promoção do ano do Fisiquei. De <strong>16/11 a 16/12</strong>,
      o Extensivo 2027 sai com <strong>50% de desconto</strong> usando o cupom
      BLACKFISIQUEI. A oferta acaba às 23h59 do dia 16/12 (horário de Brasília)
      e depois o plano volta ao preço normal de R$ 1.100.
    </>
  ),
}

const faqBlackPreco: FaqItem = {
  key: "black-preco",
  question: "Quanto fica o Extensivo 2027 na Black?",
  answer: (
    <>
      De R$ 1.100 por <strong>12x de R$ 45,83</strong> no cartão ou{" "}
      <strong>R$ 440 à vista</strong>, com o cupom BLACKFISIQUEI. Para alunos e
      ex-alunos, com o cupom RENOVABF60, fica 12x de R$ 36,67 ou R$ 330 à vista.
    </>
  ),
}

const faqBlackAcesso: FaqItem = {
  key: "black-acesso",
  question: "Até quando vou ter acesso? Posso começar a estudar agora?",
  answer: (
    <>
      O Extensivo 2027 dá acesso a toda a plataforma até{" "}
      <strong>31/01/2028</strong>, cobrindo o ENEM 2027 e os vestibulares do fim
      do ano. Todas as aulas já estão disponíveis, então você pode começar assim
      que o pagamento for confirmado.
    </>
  ),
}

const faqBlackAlunoAtivo: FaqItem = {
  key: "black-aluno-ativo",
  question: "Já tenho acesso até 31/01/2027. Vale a pena renovar agora?",
  answer: (
    <>
      Vale, porque o desconto de 60% do RENOVABF60 só existe durante a Black.
      Você garante o Extensivo 2027 pelo menor preço e segue estudando sem
      interrupção até 31/01/2028. Use o mesmo email do seu acesso atual para o
      cupom ser validado.
    </>
  ),
}

const faqBlackNaoSeiSeVouEstudar: FaqItem = {
  key: "black-nao-sei",
  question: "Ainda não sei se vou precisar estudar em 2027. Compro agora?",
  answer: (
    <>
      Esse é justamente o motivo do Seguro SiSU. Você garante os 50% OFF agora
      e, se for aprovado no SiSU até 28/02/2027, recebe todo o dinheiro de
      volta. Se não passar, já está com o curso do ano inteiro garantido pelo
      menor preço.
    </>
  ),
}

const faqBlackVestibulares: FaqItem = {
  key: "black-vestibulares",
  question: "Serve para outros vestibulares além do ENEM?",
  answer: (
    <>
      Sim! O curso cobre toda a Física do ensino médio, do básico ao avançado, e
      o banco de questões tem provas de diversos vestibulares.
    </>
  ),
}

export const faqBlackItems = [
  faqBlackOQueE,
  faqBlackPreco,
  faqSeguroSisu,
  faqBlackNaoSeiSeVouEstudar,
  faqRenovacao,
  faqBlackAlunoAtivo,
  faqBlackAcesso,
  faqFormasPagamento,
  faqReembolso,
  faqBlackVestibulares,
  faqTirarDuvidas,
]

export const faqItems = [
  faqAcessoGratuito,
  faqParaQuem,
  faqValorAcesso,
  faqSeguroSisu,
  faqFormasPagamento,
  faqRenovacao,
  faqPossuiQuestoes,
  faqTirarDuvidas,
  faqAulasGravadas,
  faqReembolso,
]
