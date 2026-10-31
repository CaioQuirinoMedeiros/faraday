"use client"

import { useIsMounted } from "@/hooks/use-is-mounted"
import { ArrowRightIcon } from "lucide-react"
import Link from "next/link"
import { useTimer } from "react-timer-hook"
import { cn } from "@/utils/styles"

interface TopBannerProps {
  startDate: Date
  endDate: Date
  ctaTitle: string
  ctaSubtitle: string
  ctaButtonText: string
  ctaButtonLink: string
  visibleFrom?: Date
  liveText?: string
  className?: string
}

const pad = (value: number) => `${value}`.padStart(2, "0")

export function TopBanner(props: TopBannerProps) {
  const {
    ctaButtonLink,
    ctaButtonText,
    ctaSubtitle,
    ctaTitle,
    endDate,
    startDate,
    visibleFrom,
    liveText = "Em andamento",
    className,
  } = props

  const { isMounted } = useIsMounted()

  const start = useTimer({ expiryTimestamp: startDate, autoStart: true })
  const end = useTimer({ expiryTimestamp: endDate, autoStart: true })

  if (!isMounted) return null
  if (end.totalMilliseconds <= 0) return null
  if (visibleFrom && visibleFrom > new Date()) return null

  const isLive = start.totalMilliseconds <= 0
  const startTime = `${startDate.getHours()}h${pad(startDate.getMinutes())}`

  const countdown =
    start.days > 0
      ? `${start.days}d ${pad(start.hours)}h`
      : `${pad(start.hours)}h ${pad(start.minutes)}m`

  const shortCountdown =
    start.days > 1
      ? `${start.days} dias`
      : start.days === 1
        ? "1 dia"
        : `hoje, ${startTime}`

  return (
    <Link
      href={ctaButtonLink}
      className={cn(
        "group block bg-primary text-primary-foreground focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-primary-foreground",
        className
      )}
    >
      <div className="max-w-[1440px] mx-auto min-h-11 px-5 sm:px-6 py-2.5 flex items-center justify-between sm:justify-center gap-x-7 gap-y-1 text-sm">
        <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-2 min-w-0">
          <strong className="font-display font-bold text-[15px]">
            {ctaTitle}
          </strong>
          <span className="hidden sm:inline text-primary-foreground/70">
            {ctaSubtitle}
          </span>
          <span className="sm:hidden font-medium text-primary-foreground/70">
            {isLive ? liveText : `Começa em ${shortCountdown}`}
          </span>
        </div>

        <span className="hidden sm:inline font-semibold whitespace-nowrap tabular-nums pl-7 border-l border-primary-foreground/20">
          {isLive ? liveText : `Começa em ${countdown}`}
        </span>

        <span className="flex-none inline-flex items-center justify-center gap-1 font-bold whitespace-nowrap size-8 rounded-full bg-primary-foreground text-primary sm:size-auto sm:rounded-none sm:bg-transparent sm:text-primary-foreground sm:underline sm:underline-offset-3 sm:group-hover:decoration-2">
          <span className="hidden sm:inline">{ctaButtonText}</span>
          <ArrowRightIcon className="size-4" strokeWidth={2.5} />
        </span>
      </div>
    </Link>
  )
}
