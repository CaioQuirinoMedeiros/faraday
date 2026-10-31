"use client"

import { cn } from "@/utils/styles"
import { useBlackPhase } from "./use-black-phase"

const pad = (value: number) => `${value}`.padStart(2, "0")

export function BlackCountdown({ className }: { className?: string }) {
  const { phase, remaining } = useBlackPhase()

  if (phase === "ended") return null

  const units = [
    { label: "dias", value: remaining.days },
    { label: "horas", value: remaining.hours },
    { label: "min", value: remaining.minutes },
    { label: "seg", value: remaining.seconds },
  ]

  return (
    <div className={cn("flex flex-col gap-2.5", className)}>
      <span className="text-xs font-bold uppercase tracking-[0.14em] text-white/60">
        {phase === "live" ? "Termina em" : "Começa em"}
      </span>
      <div className="flex gap-2">
        {units.map((unit) => {
          return (
            <div
              key={unit.label}
              className="min-w-16 rounded-lg border border-fire/30 bg-fire/10 px-2 py-2 flex flex-col items-center"
            >
              <span className="font-mono font-bold text-2xl leading-none text-white">
                {phase === "loading" ? "--" : pad(unit.value)}
              </span>
              <span className="text-[11px] font-medium text-white/60 mt-1">
                {unit.label}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
