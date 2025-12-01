import { Plan } from "@/@types/plans.types"
import { formatMoneyInCents } from "@/utils/formatters"
import { cn } from "@/utils/styles"
import {
  CheckSquareIcon,
  FlameIcon,
  MinusSquareIcon,
  ShieldCheckIcon,
  XSquareIcon,
} from "lucide-react"

interface PlanCardProps {
  plan: Plan
  className?: string
}

export function PlanCard(props: PlanCardProps) {
  const { plan, className } = props

  const {
    internalName,
    name,
    description,
    features,
    cashDiscountInt,
    cashPriceInt,
    hotText,
    couponData,
    free,
    ctaText,
    ctaIcon: CtaIcon,
    installment,
  } = plan

  const url = new URL(
    `https://app.fisiquei.com.br/api/ofertas/${internalName}/checkout`
  )
  const searchParams = new URLSearchParams()
  if (couponData) {
    searchParams.set("coupon", couponData.couponCode)
  }
  url.search = searchParams.toString()
  const checkoutUrl = url.toString()

  const finalInstallmentPriceFormatted = formatMoneyInCents(
    installment.valueInt
  )
  const cashPriceFormatted = formatMoneyInCents(cashPriceInt)

  return (
    <div
      className={cn(
        "relative p-8 rounded-2xl border-2 border-gray-600 shadow-xl flex flex-col bg-neutral",
        !free &&
          "bg-accent-darker text-[#fff] border-accent-dark bg-radial-[at_15%_0%] bg-black from-accent-darker/90 from-20% to-accent-darker/50",
        className
      )}
      id={plan.key}
    >
      {!!hotText && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 border border-primary-dark shadow-sm -translate-y-1/2 flex items-center gap-1.5 text-xs font-semibold bg-primary text-primary-foreground rounded-full px-2.5 py-1">
          <FlameIcon className="size-3.5" strokeWidth={3} />
          {hotText}
        </div>
      )}
      <header className="flex flex-col mb-4">
        <h3 className="text-2xl font-bold font-sans">{name}</h3>
        <span className="text-xs opacity-70 font-medium">{description}</span>
      </header>

      <div className="flex flex-col self-start rounded-md font-highlight">
        <div className="h-5 mb-1.5">
          {couponData && (
            <div className="flex gap-2.5 items-center">
              <span className="text-sm line-through opacity-80">
                {formatMoneyInCents(couponData.oldPriceInt)}
              </span>
              <div className="h-5 flex pl-3 rounded-l-[2px] rounded-r-[6px] bg-[radial-gradient(circle_at_0%_50%,_rgba(0,0,0,0)_4px,_#11e55e_5px)] text-primary-foreground">
                <div className="border-r-2 border-dotted border-accent-darker pr-2 flex items-center">
                  <span className="text-sm font-bold leading-none">
                    {couponData.formattedCouponValue}
                  </span>
                </div>
                <div className="bg-accent/5 pl-2 pr-2 flex items-center gap-1">
                  <span className="text-sm font-normal">
                    {couponData.couponCode}
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>

        <span className="text font-bold text-4xl tracking-tight">
          {!free && (
            <span className="text-base font-medium">{installment.count}x </span>
          )}
          {finalInstallmentPriceFormatted}
        </span>
        {!free && (
          <span className="text-xs mt-1.5 opacity-90 leading-none">
            ou {cashPriceFormatted} à vista
            {!!cashDiscountInt && (
              <span>
                &nbsp;•&nbsp;{"economize "}
                {formatMoneyInCents(cashDiscountInt)}
              </span>
            )}
          </span>
        )}
        {!!free && (
          <span className="text-sm mt-1.5 opacity-90 leading-none">free!</span>
        )}
      </div>

      <div className="mt-6 flex flex-col">
        <a
          target="_blank"
          href={!free ? checkoutUrl : "https://app.fisiquei.com.br/cadastro"}
          className={cn(
            "w-full rounded-lg text-base bg-primary py-2 px-3 text-center font-bold min-h-12 flex items-center justify-center gap-2.5 text-primary-foreground hover:scale-105 cursor-pointer hover:brightness-105 transition-all",
            !!free && "bg-gray-300 text-accent-foreground"
          )}
        >
          {ctaText}
          {!!CtaIcon && <CtaIcon className="size-5" />}
        </a>
      </div>

      <div className="mt-5 pt-5 border-t border-white/10">
        <div className="flex flex-col gap-3">
          {features.map((feature) => {
            const CheckedIcon =
              feature.checked === "partial"
                ? MinusSquareIcon
                : feature.checked
                ? CheckSquareIcon
                : XSquareIcon

            return (
              <div
                key={feature.description}
                className={cn(
                  "flex items-center gap-2",
                  feature.checked === false && "opacity-40",
                  feature.checked === "partial" && "opacity-90"
                )}
              >
                <CheckedIcon
                  className={cn(
                    "size-4",
                    feature.checked === "partial" && "text-[rgb(138,255,154)]",
                    feature.checked === true && "text-[rgb(48,255,76)]"
                  )}
                />
                <p className={cn("text-sm")}>{feature.description}</p>
              </div>
            )
          })}
        </div>

        {!free && (
          <span className="flex gap-1 justify-center items-center text-sm text-white/50 mt-6 -mb-3">
            <ShieldCheckIcon className="size-3.5" /> Garantia de 7 dias
          </span>
        )}
      </div>
    </div>
  )
}
