"use client"

import { useIsMounted } from "@/hooks/use-is-mounted"
import { ArrowRightIcon, CalendarIcon } from "lucide-react"
import Link from "next/link"
import { useTimer } from "react-timer-hook"

interface TopBannerProps {
  endDate: Date
  endText: string
  ctaTitle: string
  ctaSubtitle: string
  ctaButtonText: string
  ctaButtonLink: string
}

export function TopBanner(props: TopBannerProps) {
  const {
    ctaButtonLink,
    ctaButtonText,
    ctaSubtitle,
    ctaTitle,
    endDate,
    endText,
  } = props

  const { isMounted } = useIsMounted()

  const { days, hours, minutes, seconds, totalMilliseconds } = useTimer({
    expiryTimestamp: endDate,
    autoStart: true,
  })

  const countdownItems = [
    { label: "d", value: days },
    { label: "h", value: hours },
    { label: "m", value: minutes },
    { label: "s", value: seconds },
  ]

  if (!isMounted) return null
  if (totalMilliseconds <= 0) return null

  return (
    <div className="bg-primary bg-linear-to-r from-[#ffbc57] to-[#ffec81] text-primary-foreground">
      <div className="relative max-w-[1440px] mx-auto px-6 md:px-6 py-2 flex flex-col sm:flex-row gap-y-4 gap-x-14 sm:items-center sm:justify-between">
        <div className="flex flex-col md:flex-row gap-x-5 gap-y-2 items-start md:items-center">
          <div className="flex flex-col">
            <strong className="tracking-tighter font-bold text-xl">
              {ctaTitle}
            </strong>
            <span className="text-primary-foreground/85 text-sm">
              {ctaSubtitle}
            </span>
          </div>

          <Link
            href={ctaButtonLink}
            className="bg-neutral text-white text-sm rounded-md px-2.5 py-1.5 text-center font-bold flex items-center gap-2 border border-neutral hover:opacity-90 transition-all hover:scale-105"
          >
            {ctaButtonText}
            <ArrowRightIcon className="size-4" />
          </Link>
        </div>

        <div className="flex flex-col items-start sm:items-end gap-1">
          <div className="flex items-center gap-3 rounded-lg bg-white/50 px-2.5 py-1.5 border border-neutral/20">
            <CalendarIcon className="size-6" />
            <div className="flex flex-row gap-3">
              {countdownItems.map((countdownItem) => {
                return (
                  <span
                    key={countdownItem.label}
                    className="font-medium whitespace-nowrap text-neutral/90"
                  >
                    <span className="inline-block w-[23px] text-center font-bold whitespace-nowrap text-neutral">
                      {`${countdownItem.value}`.padStart(2, "0")}
                    </span>
                    {countdownItem.label}
                  </span>
                )
              })}
            </div>
          </div>
          <p className="hidden sm:block text-xs sm:text-right text-neutral/90">
            {endText}
          </p>
        </div>
      </div>
    </div>
  )
}
