"use client"

import { ArrowRightIcon, CalendarClockIcon } from "lucide-react"
import { blackCheckoutUrl } from "@/data/black"
import { cn } from "@/utils/styles"
import { useBlackPhase } from "./use-black-phase"

interface BlackCheckoutButtonProps {
  coupon: string
  label: string
  variant?: "fire" | "outline"
  className?: string
}

export function BlackCheckoutButton(props: BlackCheckoutButtonProps) {
  const { coupon, label, variant = "fire", className } = props
  const { phase } = useBlackPhase()

  const isAvailable = phase === "live"

  const text =
    phase === "soon"
      ? "Libera em 16/11"
      : phase === "ended"
        ? "A Black Fisiquei acabou"
        : label

  return (
    <a
      href={isAvailable ? blackCheckoutUrl(coupon) : undefined}
      target="_blank"
      aria-disabled={!isAvailable}
      className={cn(
        "flex items-center justify-center gap-2.5 px-5 md:px-6 py-3 min-h-12 rounded-lg font-bold text-base text-center transition-all",
        variant === "fire" &&
          "bg-fire text-fire-foreground hover:scale-105 hover:brightness-110",
        variant === "outline" &&
          "border-2 border-fire text-fire hover:scale-105 hover:bg-fire/10",
        !isAvailable &&
          "pointer-events-none border-white/15 bg-white/10 text-white/60",
        phase === "loading" && "invisible",
        className
      )}
    >
      {phase === "soon" && <CalendarClockIcon className="size-5" />}
      {text}
      {isAvailable && <ArrowRightIcon className="size-5" strokeWidth={2.5} />}
    </a>
  )
}
