import { Metadata } from "next"
import {
  BarChart3Icon,
  FileDownIcon,
  GamepadIcon,
  GraduationCapIcon,
  ListChecksIcon,
  MessageCircleQuestionIcon,
  MonitorPlayIcon,
  ShieldCheckIcon,
  TimerIcon,
} from "lucide-react"
import { FaqSection } from "@/components/home/faq-section"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { BlackCheckoutButton } from "@/components/black/black-checkout-button"
import { BlackCountdown } from "@/components/black/black-countdown"
import {
  blackCheckoutUrl,
  blackOffers,
  blackOriginalPriceInt,
} from "@/data/black"
import { faqBlackItems } from "@/data/faq"
import { formatMoneyInCents } from "@/utils/formatters"
import { cn } from "@/utils/styles"

export const metadata: Metadata = {
  title: "Black Fisiquei: 50% OFF no Extensivo 2027",
  description:
    "De 16/11 a 16/12, o Extensivo 2027 de Física do Prof. Thales Quirino sai com 50% OFF: 12x de R$ 45,83 ou R$ 440 à vista. Com Seguro SiSU: aprovou até 28/02/2027, recebe 100% de volta.",
}

const features = [
  { icon: MonitorPlayIcon, text: "Todas as aulas, do básico ao avançado" },
  { icon: ListChecksIcon, text: "Banco com mais de 5.000 questões" },
  { icon: MessageCircleQuestionIcon, text: "Central de Dúvidas comigo" },
  { icon: BarChart3Icon, text: "Estatísticas de evolução e desempenho" },
  { icon: GamepadIcon, text: "Simuladores digitais" },
  { icon: FileDownIcon, text: "Listas personalizadas em PDF" },
]

function Coupon({ code }: { code: string }) {
  return (
    <div className="inline-flex items-center gap-3 border-2 border-dashed border-fire rounded-xl px-4 py-2 self-start">
      <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-white/60">
        Cupom
      </span>
      <strong className="font-display font-bold text-xl text-fire tracking-wide">
        {code}
      </strong>
    </div>
  )
}

function Price({
  installmentInt,
  cashPriceInt,
  large,
}: {
  installmentInt: number
  cashPriceInt: number
  large?: boolean
}) {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-sm font-semibold text-white/50 line-through decoration-[#ff4d4d] decoration-2">
        De {formatMoneyInCents(blackOriginalPriceInt)}
      </span>
      <span
        className={cn(
          "font-display font-bold leading-none text-white",
          large ? "text-5xl" : "text-4xl"
        )}
      >
        <span className={large ? "text-2xl" : "text-xl"}>12x </span>
        {formatMoneyInCents(installmentInt)}
      </span>
      <span className="text-sm font-medium text-white/75">
        ou {formatMoneyInCents(cashPriceInt)} à vista
      </span>
    </div>
  )
}

function SisuSeal({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "shrink-0 size-32 rounded-full bg-fire text-fire-foreground grid place-items-center text-center -rotate-10 shadow-[0_0_0_6px_#050505,0_0_0_9px_var(--color-fire)]",
        className
      )}
    >
      <div className="font-display font-black uppercase leading-none text-sm">
        Seguro
        <span className="block text-4xl tracking-tight">SiSU</span>
        100% de volta
      </div>
    </div>
  )
}

export default function BlackPage() {
  const { public: publicOffer, renewal } = blackOffers

  return (
    <main className="bg-[#050505]">
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgb(252_126_32/0.07)_1px,transparent_1px),linear-gradient(90deg,rgb(252_126_32/0.07)_1px,transparent_1px)] bg-size-[50px_50px]" />
        <div className="pointer-events-none absolute -right-40 top-10 size-[720px] rounded-full bg-radial from-fire/25 to-transparent to-70%" />

        <div className="relative max-w-6xl mx-auto px-6 pt-14 pb-0 md:py-20 grid md:grid-cols-[1fr_400px] lg:grid-cols-[1fr_460px] gap-x-8 items-center z-2">
          <div className="flex flex-col gap-6">
            <img
              src="/images/black/logo-black-fisiquei.png"
              alt="Black Fisiquei"
              className="size-16 object-contain"
            />

            <h1 className="font-display font-black italic uppercase leading-[0.86] tracking-tight text-6xl sm:text-7xl lg:text-8xl text-white">
              Black
              <br />
              <span className="text-transparent [-webkit-text-stroke:2px_var(--color-fire)]">
                Fisiquei
              </span>
            </h1>

            <div className="flex items-end gap-3">
              <span className="font-display font-black text-8xl leading-[0.8] tracking-tighter text-fire">
                {publicOffer.percentOff}
                <span className="text-5xl">%</span>
              </span>
              <span className="font-display font-bold text-2xl leading-tight text-white pb-1">
                OFF no
                <br />
                Extensivo 2027
              </span>
            </div>

            <Price
              installmentInt={publicOffer.installmentInt}
              cashPriceInt={publicOffer.cashPriceInt}
              large
            />

            <Coupon code={publicOffer.coupon} />

            <BlackCountdown />

            <div className="">
              <BlackCheckoutButton
                coupon={publicOffer.coupon}
                label="Garantir com 50% OFF"
                className="w-full max-w-100"
              />
            </div>

            <p className="flex items-center gap-1.5 text-sm text-white/60">
              <ShieldCheckIcon className="size-4 text-fire" />
              Garantia de 7 dias + Seguro SiSU
            </p>
          </div>

          <div className="relative mt-6 md:mt-0 h-[420px] sms:h-[520px] md:h-[620px] -mx-6 md:mx-0">
            <img
              src="/images/black/chama.webp"
              alt=""
              className="absolute left-1/2 -translate-x-1/2 bottom-14 w-[280px] sms:w-[340px] md:w-[400px] opacity-90"
            />
            <img
              src="/images/black/thales-apontando-para-voce.webp"
              alt="Prof. Thales Quirino"
              className="absolute left-1/2 -translate-x-1/2 bottom-0 h-[390px] sms:h-[500px] md:h-[600px] object-contain"
            />
            <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-[#050505] to-transparent" />
            <SisuSeal className="absolute right-5 top-2 md:right-0 md:top-10" />
          </div>
        </div>
      </section>

      <section id="oferta" className="relative py-20 px-6 scroll-mt-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-display text-white text-center mb-3">
            Escolha seu cupom
          </h2>
          <p className="text-white/60 text-center mb-10 max-w-xl mx-auto">
            O plano é o mesmo, o Extensivo 2027, com acesso a tudo até
            31/01/2028. Se você já estudou comigo, o seu desconto é maior.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-6 rounded-2xl border-2 border-fire bg-radial-[at_0%_0%] from-fire/20 to-[#0d0d0d] to-60% p-7 md:p-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.14em] text-fire">
                  Para todo mundo
                </span>
                <h3 className="font-display font-bold text-2xl text-white mt-1">
                  {publicOffer.percentOff}% OFF no Extensivo 2027
                </h3>
              </div>
              <Price
                installmentInt={publicOffer.installmentInt}
                cashPriceInt={publicOffer.cashPriceInt}
              />
              <Coupon code={publicOffer.coupon} />
              <BlackCheckoutButton
                coupon={publicOffer.coupon}
                label="Garantir minha vaga"
                className="mt-auto"
              />
            </div>

            <div className="flex flex-col gap-6 rounded-2xl border-2 border-white/15 bg-[#0d0d0d] p-7 md:p-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.14em] text-fire">
                  Já sou aluno ou ex-aluno
                </span>
                <h3 className="font-display font-bold text-2xl text-white mt-1">
                  {renewal.percentOff}% OFF para renovação
                </h3>
              </div>
              <Price
                installmentInt={renewal.installmentInt}
                cashPriceInt={renewal.cashPriceInt}
              />
              <div className="flex flex-col gap-2">
                <Coupon code={renewal.coupon} />
                <p className="text-xs text-white/50">
                  Use o mesmo email do seu acesso atual para o cupom ser
                  validado.
                </p>
              </div>
              <div className="mt-auto flex flex-col gap-3">
                <BlackCheckoutButton
                  coupon={renewal.coupon}
                  label="Renovar com 60% OFF"
                  variant="outline"
                />
              </div>
            </div>
          </div>

          <div className="mt-12 rounded-2xl border border-white/10 bg-[#0d0d0d] p-7 md:p-8">
            <h3 className="font-display font-semibold text-xl text-white mb-5">
              O Extensivo 2027 dá acesso completo ao Fisiquei:
            </h3>
            <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {features.map((feature) => {
                return (
                  <li
                    key={feature.text}
                    className="flex items-center gap-3 text-white/85"
                  >
                    <span className="shrink-0 size-9 rounded-lg bg-fire/10 border border-fire/30 grid place-items-center">
                      <feature.icon className="size-4.5 text-fire" />
                    </span>
                    {feature.text}
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </section>

      <section
        id="seguro-sisu"
        className="bg-fire text-fire-foreground py-20 px-6"
      >
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-12 mb-10">
            <div className="shrink-0 size-36 rounded-full bg-[#050505] text-fire grid place-items-center text-center -rotate-10 self-center md:self-auto">
              <div className="font-display font-black uppercase leading-none text-sm">
                Seguro
                <span className="block text-5xl tracking-tight">SiSU</span>
                100% de volta
              </div>
            </div>
            <div>
              <span className="text-sm font-bold uppercase tracking-wider opacity-70">
                &quot;E se eu comprar e passar no SiSU?&quot;
              </span>
              <h2 className="text-3xl md:text-5xl font-bold font-display mt-2 mb-4 leading-tight tracking-tighter">
                Você recebe 100% do valor de volta.
              </h2>
              <p className="text-lg font-medium max-w-2xl">
                Comprou na Black Fisiquei e foi aprovado no SiSU até{" "}
                <strong>28/02/2027</strong>? Eu devolvo o valor integral. Não
                importa em qual chamada, o que vale é a data. É só mandar o
                comprovante para o nosso suporte.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="rounded-2xl bg-[#050505]/8 border-2 border-[#050505]/15 p-6">
              <span className="text-xs font-bold uppercase tracking-[0.14em] opacity-70">
                Passou no SiSU
              </span>
              <p className="font-display font-bold text-2xl mt-2">
                Dinheiro de volta
              </p>
            </div>
            <div className="rounded-2xl bg-[#050505] text-white p-6">
              <span className="text-xs font-bold uppercase tracking-[0.14em] text-white/60">
                Vai estudar em 2027
              </span>
              <p className="font-display font-bold text-2xl mt-2 text-fire">
                Já garantiu 50% OFF
              </p>
            </div>
          </div>

          <p className="mt-8 flex items-start gap-2 font-medium">
            <ShieldCheckIcon className="size-5 shrink-0 mt-0.5" />E tem a
            garantia de 7 dias: se não gostar, pede o reembolso em até 7 dias
            após a compra, sem burocracia.
          </p>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="shrink-0 relative size-64 rounded-3xl overflow-hidden bg-radial from-fire/40 to-[#141414] to-70%">
            <img
              src="/images/black/thales-anunciando.webp"
              alt="Prof. Thales Quirino"
              className="absolute left-1/2 -translate-x-1/2 top-4 w-[88%]"
            />
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="text-3xl font-bold font-display text-white mb-1">
              Por que agora?
            </h2>
            <p className="text-gray-300 leading-relaxed">
              A Black é o único momento do ano em que o Extensivo sai por esse
              preço. E com o Seguro SiSU, você não tem risco nenhum em adquirir
              agora.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Quem começa a estudar antes tem muito mais tempo para ver todo o
              conteúdo com calma e ainda revisar antes da prova. Então aproveita
              essa oportunidade pra fazer 2027 o ano da sua evolução na Física!
            </p>
            <p className="text-white font-semibold mt-4">
              Prof. Thales Quirino
            </p>
          </div>
        </div>
      </section>

      <TestimonialsSection />

      <FaqSection items={faqBlackItems} />

      <section className="px-6 pb-20">
        <div className="max-w-4xl mx-auto relative overflow-hidden rounded-2xl border-2 border-fire bg-radial-[at_100%_0%] from-fire/25 to-[#0d0d0d] to-60% p-8 md:p-10 flex flex-col md:flex-row md:items-center gap-8">
          <div className="flex-1 flex flex-col gap-4">
            <h2 className="font-display font-black italic uppercase text-4xl md:text-5xl leading-[0.9] text-white">
              A Black vai
              <br />
              <span className="text-fire">até 16/12</span>
            </h2>
            <p className="text-white/75">
              Depois disso o Extensivo 2027 volta para R$ 1.100.
            </p>
            <BlackCountdown />
          </div>
          <div className="flex flex-col gap-3 md:w-72">
            <BlackCheckoutButton
              coupon={publicOffer.coupon}
              label="Garantir com 50% OFF"
            />
            <a
              href={blackCheckoutUrl(renewal.coupon)}
              className="flex items-center justify-center gap-1.5 text-sm text-white/60 hover:text-white transition-colors"
            >
              <GraduationCapIcon className="size-4" />
              Já sou aluno, quero o RENOVABF60
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
