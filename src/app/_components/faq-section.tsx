'use client'

import * as React from 'react'
import * as Accordion from '@radix-ui/react-accordion'
import { ChevronDownIcon } from 'lucide-react'
import { motion, stagger, Variants } from 'motion/react'

type FaqItem = {
  key: string
  question: React.ReactNode
  answer: React.ReactNode
}

const faqItems: FaqItem[] = [
  {
    key: 'como-funciona',
    question: 'Como funciona o acesso gratuito?',
    answer: (
      <>
        Com uma conta gratuita você pode explorar toda a plataforma com algumas
        limitações: Você pode assistir as primeiras aulas do curso e também tem
        acesso a um número limitado de questões, o que ainda é suficiente para
        montar várias listas personalizadas! É perfeito para você testar e ver
        como a metodologia funciona antes de assinar o plano completo.
      </>
    )
  },
  {
    key: 'para-quem',
    question: 'Para quem o curso é indicado?',
    answer:
      'Para quem deseja aprender Física de verdade e alcançar a aprovação no ENEM ou qualquer outro vestibular/concurso. É ideal para quem ainda precisa formar uma BASE sólida em Física e também para quem precisa aprofundar, como vestibulandos de MEDICINA.'
  },
  {
    key: 'valor-e-acesso',
    question: 'Qual o valor do acesso completo? E quanto tempo de acesso?',
    answer: (
      <>
        Entre na{' '}
        <a
          href='https://app.fisiquei.com.br/ofertas'
          className='underline hover:opacity-75 text-primary'
        >
          página de ofertas
        </a>{' '}
        para conferir os planos disponíveis no momento. Lá você encontrará o
        valor e o tempo de acesso de cada plano!
      </>
    )
  },
  {
    key: 'formas-pagamento',
    question: 'Quais as formas de pagamento?',
    answer: (
      <>
        As opções de pagamento são: <strong>Pix</strong>,{' '}
        <strong>Boleto</strong> e <strong>Cartão de crédito</strong> até 12x sem
        juros
      </>
    )
  },
  {
    key: 'plataforma-possui-questoes',
    question: 'A plataforma possui questões resolvidas?',
    answer:
      'Sim, A plataforma tem um banco com mais de 5.000 questões das quais mais de 3.000 possuem resolução em vídeo! Além da resolução, todas as questões têm uma dica opcional para te ajudar quando precisar. Todas as questões são classificadas por assunto, prova de origem e dificuldade, assim fica fácil de você montar sua lista personalizada!'
  },
  {
    key: 'tirar-duvidas',
    question: 'Como vou poder tirar minhas dúvidas?',
    answer: (
      <>
        A plataforma Fisiquei possui um Fórum de Dúvidas incrível para você
        postar qualquer dúvida sobre uma aula ou uma questão! É bem fácil, basta
        procurar o botão <strong>&quote;Dúvidas&quote;</strong>, postar sua
        dúvida e esperar... O professor Thales não deixa ninguém sem resposta!
      </>
    )
  },
  {
    key: 'aulas-ao-vivo-ou-gravadas',
    question: 'As aulas são ao vivo ou gravadas?',
    answer: (
      <>
        As videoaulas são gravadas e já estão todas disponíveis para você
        começar quando quiser, assim você pode avançar no seu próprio ritmo e
        assistir as aulas quando e de onde quiser!
      </>
    )
  },
  {
    key: 'reembolso',
    question: 'Se eu me arrepender, posso pedir reembolso?',
    answer: (
      <>
        Sim! <strong>Em até 7 dias após a compra</strong> você pode solicitar o
        reembolso e terá 100% do valor reembolsado. E é sem burocracia, não
        precisa de justificativa, basta entrar em contato com o suporte e fazer
        a solicitação.
      </>
    )
  }
]

const AccordionRoot = motion.create(Accordion.Root)
const AccordionItem = motion.create(Accordion.Item)

const container: Variants = {
  hidden: {},
  visible: { transition: { delayChildren: stagger(0.2) } }
}

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: 'easeInOut' }
  }
}

export function FaqSection() {
  return (
    <section
      id='faq'
      className='flex flex-col items-center justify-center py-20'
    >
      <div className='max-w-3xl w-full flex flex-col'>
        <div className='flex flex-col gap-3.5 items-center mb-8'>
          <div className='flex items-center justify-center bg-primary text-primary-foreground rounded-full px-2.5 py-1 text-center text-sm font-medium'>
            <span>Perguntas Frequentes</span>
          </div>
          <h2 className='text-4xl font-bold text-center text-white'>
            Dúvidas? A gente responde!
          </h2>
        </div>

        <AccordionRoot
          type='single'
          initial='hidden'
          whileInView='visible'
          /** @ts-expect-error não sei pq */
          collapsible
          variants={container}
          viewport={{ once: true }}
          className='w-full flex flex-col mb-4'
        >
          {faqItems.map((faqItem) => {
            return (
              <AccordionItem
                key={faqItem.key}
                variants={item}
                value={faqItem.key}
                className='w-full flex flex-col border-t first:border-t-0 border-border'
              >
                <Accordion.Trigger className='group cursor-pointer flex gap-4 items-center justify-between px-1 py-4'>
                  <span className='text-lg font-medium text-[#dedede] group-data-[state=open]:text-white group-hover:text-white transition-colors'>
                    {faqItem.question}
                  </span>
                  <ChevronDownIcon className='size-5 group-data-[state=open]:rotate-180 transition-all text-muted group-data-[state=open]:text-white group-hover:text-white' />
                </Accordion.Trigger>
                <Accordion.Content className='overflow-hidden px-1 data-[state=closed]:animate-slide-up data-[state=open]:animate-slide-down'>
                  <p className='pb-4 text-foreground/75'>{faqItem.answer}</p>
                </Accordion.Content>
              </AccordionItem>
            )
          })}
        </AccordionRoot>

        <div className='flex flex-col sm:flex-row gap-4 justify-between items-center p-4 rounded-lg bg-accent'>
          <div className='flex flex-col'>
            <strong className='font-semibold text-base text-primary-foreground'>
              Não encontrou sua dúvida?
            </strong>
            <p className='text-sm text-primary-foreground/90'>
              Entre em contato com nosso suporte que vamos te ajudar
            </p>
          </div>
          <a
            target='_blank'
            href='https://app.fisiquei.com.br/suporte?origem=faq-landing&mensagem=Ol%C3%A1%2C+estou+na+se%C3%A7%C3%A3o+do+FAQ+mas+ainda+tenho+d%C3%BAvida'
            className='bg-background/20 flex items-center border border-black/25 gap-2 rounded-md px-3 py-2 text-black font-semibold hover:bg-background/70 hover:text-white group transition-all'
          >
            <svg
              viewBox='0 0 32 32'
              version='1.1'
              xmlns='http://www.w3.org/2000/svg'
              className='size-4 fill-black group-hover:fill-white transition-colors'
            >
              <title>whatsapp</title>
              <path d='M26.576 5.363c-2.69-2.69-6.406-4.354-10.511-4.354-8.209 0-14.865 6.655-14.865 14.865 0 2.732 0.737 5.291 2.022 7.491l-0.038-0.070-2.109 7.702 7.879-2.067c2.051 1.139 4.498 1.809 7.102 1.809h0.006c8.209-0.003 14.862-6.659 14.862-14.868 0-4.103-1.662-7.817-4.349-10.507l0 0zM16.062 28.228h-0.005c-0 0-0.001 0-0.001 0-2.319 0-4.489-0.64-6.342-1.753l0.056 0.031-0.451-0.267-4.675 1.227 1.247-4.559-0.294-0.467c-1.185-1.862-1.889-4.131-1.889-6.565 0-6.822 5.531-12.353 12.353-12.353s12.353 5.531 12.353 12.353c0 6.822-5.53 12.353-12.353 12.353h-0zM22.838 18.977c-0.371-0.186-2.197-1.083-2.537-1.208-0.341-0.124-0.589-0.185-0.837 0.187-0.246 0.371-0.958 1.207-1.175 1.455-0.216 0.249-0.434 0.279-0.805 0.094-1.15-0.466-2.138-1.087-2.997-1.852l0.010 0.009c-0.799-0.74-1.484-1.587-2.037-2.521l-0.028-0.052c-0.216-0.371-0.023-0.572 0.162-0.757 0.167-0.166 0.372-0.434 0.557-0.65 0.146-0.179 0.271-0.384 0.366-0.604l0.006-0.017c0.043-0.087 0.068-0.188 0.068-0.296 0-0.131-0.037-0.253-0.101-0.357l0.002 0.003c-0.094-0.186-0.836-2.014-1.145-2.758-0.302-0.724-0.609-0.625-0.836-0.637-0.216-0.010-0.464-0.012-0.712-0.012-0.395 0.010-0.746 0.188-0.988 0.463l-0.001 0.002c-0.802 0.761-1.3 1.834-1.3 3.023 0 0.026 0 0.053 0.001 0.079l-0-0.004c0.131 1.467 0.681 2.784 1.527 3.857l-0.012-0.015c1.604 2.379 3.742 4.282 6.251 5.564l0.094 0.043c0.548 0.248 1.25 0.513 1.968 0.74l0.149 0.041c0.442 0.14 0.951 0.221 1.479 0.221 0.303 0 0.601-0.027 0.889-0.078l-0.031 0.004c1.069-0.223 1.956-0.868 2.497-1.749l0.009-0.017c0.165-0.366 0.261-0.793 0.261-1.242 0-0.185-0.016-0.366-0.047-0.542l0.003 0.019c-0.092-0.155-0.34-0.247-0.712-0.434z'></path>
            </svg>
            <span>Falar no WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  )
}
