export const blackStartAt = new Date("2026-11-16T00:00:00-03:00")
export const blackEndAt = new Date("2026-12-16T23:59:59-03:00")

export const blackWhatsappGroupUrl =
  "https://chat.whatsapp.com/DDKUU8B2wim8YvP6qmOn17"

export const blackCheckoutUrl = (coupon: string) =>
  `https://app.fisiquei.com.br/ofertas/extensivo-2027/checkout?coupon=${coupon}`

export const blackOffers = {
  public: {
    coupon: "BLACKFISIQUEI",
    percentOff: 50,
    installmentInt: 45_83,
    cashPriceInt: 440_00,
  },
  renewal: {
    coupon: "RENOVABF60",
    percentOff: 60,
    installmentInt: 36_67,
    cashPriceInt: 330_00,
  },
}

export const blackOriginalPriceInt = 1_100_00
