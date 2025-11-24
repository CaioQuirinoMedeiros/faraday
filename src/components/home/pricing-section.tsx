"use client"

import { Plan } from "@/@types/plans.types"
import { PlanCard } from "./plan-card"
import {
  ArrowRightIcon,
  RocketIcon,
  ShieldCheckIcon,
  ShieldIcon,
} from "lucide-react"

const plans: Plan[] = [
  {
    key: "plano-gratis",
    name: "Gratuito",
    description: "Ideal para explorar a plataforma",
    cashDiscountInt: 0,
    cashPriceInt: 0,
    free: true,
    couponData: null,
    ctaText: "Começar grátis",
    internalName: "",
    installment: { count: 1, valueInt: 0 },
    features: [
      { description: "Aulas dos primeiros módulos", checked: "partial" },
      {
        description: "Acesso parcial ao Banco de Questões",
        checked: "partial",
      },
      {
        description: "Acesso de leitura do Fórum de Dúvidas",
        checked: "partial",
      },
      { description: "Estatísticas de respostas e aulas", checked: true },
      { description: "Acesso aos simuladores digitais", checked: true },
    ],
  },
  {
    key: "plano-atual",
    name: "Extensivo 2026",
    hotText: "Black Fisiquei",
    description: "Acesso até 31/01/2027",
    cashDiscountInt: 110_00,
    cashPriceInt: 440_00,
    free: false,
    couponData: {
      couponCode: "BLACKFISIQUEI",
      deductionAbsInt: 550_00,
      endAt: new Date("2027-01-31"),
      formattedCouponValue: "50%",
      oldPriceInt: 1100_00,
      startAt: new Date(),
    },
    ctaText: "Garantir minha vaga",
    ctaIcon: ArrowRightIcon,
    internalName: "extensivo-2026-padrao",
    installment: { count: 12, valueInt: 45_83 },
    features: [
      { description: "Todas as aulas disponíveis", checked: true },
      { description: "Acesso total ao Banco de Questões", checked: true },
      { description: "Acesso total ao Fórum de Dúvidas", checked: true },
      { description: "Estatísticas de respostas e aulas", checked: true },
      { description: "Acesso aos simuladores digitais", checked: true },
      { description: "Exportação das listas em PDF", checked: true },
    ],
  },
]

export function PricingSection() {
  return (
    <section
      id="planos"
      className="flex flex-col items-center justify-center py-20 bg-[#ffe6ad] bg-linear-to-tl from-[#ffebbe] via-[#ffe7c8] via-35% to-[#c9e9ff]"
    >
      <div className="max-w-8xl w-full flex flex-col items-center px-4 md:px-6">
        <div className="flex flex-col gap-3.5 items-center mb-12">
          <div className="flex items-center justify-center gap-1.5 bg-primary-lighter border border-primary/80 text-primary-foreground rounded-full px-2.5 py-1 text-sm font-medium">
            <RocketIcon className="size-3.5" />
            <span>Planos e Preços</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-center text-neutral">
            Escolha seu plano e
            <span className="text-primary-dark"> comece a estudar!</span>
          </h2>
        </div>

        <div className="self-stretch flex flex-col md:flex-row md:justify-center md:items-stretch gap-6">
          {plans.map((plan) => {
            return (
              <PlanCard
                key={plan.key}
                plan={plan}
                className="md:min-w-[340px] lg:min-w-[380px] md:hover:-translate-y-1.5 transition-all duration-300 ease-in-out"
              />
            )
          })}
        </div>

        <div>
          <h3 className="text-3xl font-bold font-display text-center text-neutral mt-16">
            O risco é todo meu...
          </h3>
          <div className="mt-6 flex flex-col gap-4">
            <div className="relative p-4 sm:p-6 rounded-2xl border border-primary bg-primary-lighter text-neutral flex gap-4 sm:gap-6 sm:items-start max-w-[740px]">
              <img
                src="/images/selos/selo-garantia-7dias.png"
                className="size-[60px] sm:size-[92px] object-contain"
                alt="Selo de garantia de 7 dias"
              />

              <div className="text-justify sm:text-left">
                <strong className="text-lg font-bold flex items-center gap-1 mb-1.5">
                  <ShieldCheckIcon className="size-4.5" strokeWidth={3} />
                  Garantia de 7 dias
                </strong>
                <p className="text-neutral/90 text-sm">
                  Comprou e não gostou? Você pode solicitar o reembolso em até 7
                  dias após a compra e terá 100% do valor investido devolvido.
                  Sem burocracia e sem perguntas!
                </p>
              </div>
            </div>

            <div className="relative p-4 sm:p-6 rounded-2xl border border-primary bg-primary-lighter text-neutral flex gap-4 sm:gap-6 items-start max-w-[740px]">
              <img
                src="/images/selos/selo-garantia-sisu.png"
                className="size-[60px] sm:size-[92px] object-contain"
                alt="Selo de garantia SiSU"
              />
              <div className="text-justify sm:text-left">
                <strong className="text-lg font-bold flex items-center gap-1 mb-1.5">
                  <ShieldCheckIcon className="size-4.5" strokeWidth={3} />
                  Seguro SiSU
                </strong>
                <p className="text-neutral/90 text-sm">
                  Está esperando o SiSU 2026? Não tem problema! Em caso de
                  aprovação, em até 3ª chamada, você pode solicitar seu
                  reembolso total. É só nos mandar mensagem comprovando sua
                  aprovação.
                </p>
                <p className="text-xs mt-2 font-medium">
                  Atenção: O Seguro SiSU é apenas para a oferta da Black
                  Fisiquei, que vai até o dia 30/11.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
