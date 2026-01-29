export type Plan = {
  key: string
  internalName: string
  free: boolean
  name: string
  description: string
  cashDiscountInt: number | null
  hotText?: string
  cashPriceInt: number
  installment: { count: number; valueInt: number }
  features: { checked: boolean | "partial"; description: string }[]
  couponData: null | {
    oldPriceInt: number
    couponCode: string
    formattedCouponValue: string
    endAt: Date
    startAt: Date
  }
  ctaText: string
  ctaIcon?: React.ElementType
}
