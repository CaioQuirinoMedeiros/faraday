"use client"

import * as Accordion from "@radix-ui/react-accordion"
import { ChevronDownIcon } from "lucide-react"
import { motion, stagger, Variants } from "motion/react"
import { WhatsappLogoIcon } from "@/assets/icons"
import { faqItems } from "@/data/faq"

const AccordionRoot = motion.create(Accordion.Root)
const AccordionItem = motion.create(Accordion.Item)

const container: Variants = {
  hidden: {},
  visible: { transition: { delayChildren: stagger(0.2) } },
}

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
}

export function FaqSection() {
  return (
    <section
      id="faq"
      className="flex flex-col items-center justify-center py-20 scroll-mt-24"
    >
      <div className="max-w-3xl w-full flex flex-col px-4 md:px-6">
        <div className="flex flex-col gap-3.5 items-center mb-12">
          <div className="flex items-center justify-center bg-primary text-primary-foreground rounded-full px-2.5 py-1 text-center text-sm font-medium">
            <span>Perguntas Frequentes</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-center text-white">
            Dúvidas?{" "}
            <span className="text-primary-light">A gente responde</span>!
          </h2>
        </div>

        <AccordionRoot
          type="single"
          initial="hidden"
          whileInView="visible"
          /** @ts-expect-error não sei pq */
          collapsible
          variants={container}
          viewport={{ once: true }}
          className="w-full flex flex-col mb-4"
        >
          {faqItems.map((faqItem) => {
            return (
              <AccordionItem
                key={faqItem.key}
                variants={item}
                value={faqItem.key}
                className="w-full flex flex-col border-t first:border-t-0 border-border"
              >
                <Accordion.Trigger className="text-left group cursor-pointer flex gap-4 items-center justify-between px-1 py-4">
                  <span className="text-base sm:text-lg font-medium text-[#dedede] group-data-[state=open]:text-white group-hover:text-white transition-colors">
                    {faqItem.question}
                  </span>
                  <ChevronDownIcon className="size-5 group-data-[state=open]:rotate-180 transition-all text-muted group-data-[state=open]:text-white group-hover:text-white shrink-0" />
                </Accordion.Trigger>
                <Accordion.Content className="overflow-hidden px-1 data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                  <p className="pb-4 text-foreground/75 text-sm sm:text-base">
                    {faqItem.answer}
                  </p>
                </Accordion.Content>
              </AccordionItem>
            )
          })}
        </AccordionRoot>

        <div className="flex flex-col sm:flex-row gap-4 justify-between sm:items-center p-4 rounded-lg bg-accent text-accent-foreground">
          <div className="flex flex-col">
            <strong className="font-semibold text-base">
              Não encontrou sua dúvida?
            </strong>
            <p className="text-sm opacity-90">
              Entre em contato com nosso suporte que vamos te ajudar
            </p>
          </div>
          <a
            target="_blank"
            href="https://app.fisiquei.com.br/suporte?origem=faq-landing&mensagem=Ol%C3%A1%2C+estou+na+se%C3%A7%C3%A3o+do+FAQ+mas+ainda+tenho+d%C3%BAvida"
            className="bg-accent-dark/50 flex items-center justify-center border border-accent-dark/90 gap-2 rounded-md px-3.5 py-2.5 text-black font-semibold hover:bg-accent-dark hover:text-white group transition-all text-center whitespace-nowrap"
          >
            <WhatsappLogoIcon className="size-4 group-hover:fill-white transition-colors" />
            <span>Falar no WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  )
}
