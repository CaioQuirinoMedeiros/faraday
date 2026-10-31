"use client"

import * as React from "react"
import { blackEndAt, blackStartAt } from "@/data/black"

export type BlackPhase = "loading" | "soon" | "live" | "ended"

export function useBlackPhase() {
  const [now, setNow] = React.useState<Date | null>(null)

  React.useEffect(() => {
    setNow(new Date())
    const interval = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(interval)
  }, [])

  const phase: BlackPhase =
    now == null
      ? "loading"
      : now < blackStartAt
        ? "soon"
        : now <= blackEndAt
          ? "live"
          : "ended"

  const target = phase === "soon" ? blackStartAt : blackEndAt
  const remaining =
    now == null ? 0 : Math.max(0, target.getTime() - now.getTime())

  return {
    phase,
    remaining: {
      days: Math.floor(remaining / 86_400_000),
      hours: Math.floor(remaining / 3_600_000) % 24,
      minutes: Math.floor(remaining / 60_000) % 60,
      seconds: Math.floor(remaining / 1000) % 60,
    },
  }
}
