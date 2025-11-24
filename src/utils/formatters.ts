export function phoneNumberMaskFunction(phoneNumber: string): string {
  if (!phoneNumber) return ""

  let fixedPhone = phoneNumber || ""
  if (fixedPhone.startsWith("+55")) {
    fixedPhone = fixedPhone.slice(3)
  }
  if (fixedPhone.startsWith("55") && fixedPhone.length > 11) {
    fixedPhone = fixedPhone.slice(2)
  }

  fixedPhone = fixedPhone.replace(/\D+/g, "")

  if (fixedPhone.length > 11) {
    fixedPhone = fixedPhone.slice(0, 11)
  }

  if (fixedPhone.length > 10) {
    fixedPhone = fixedPhone.replace(/^(\d{2})(\d{5})(\d{4}).*/, "($1) $2-$3")
  } else if (fixedPhone.length > 7) {
    fixedPhone = fixedPhone.replace(/^(\d{2})(\d{5})(\d{0,4}).*/, "($1) $2-$3")
  } else if (fixedPhone.length > 2) {
    fixedPhone = fixedPhone.replace(/^(\d{2})(\d{0,5})/, "($1) $2")
  } else {
    fixedPhone = fixedPhone.replace(/^(\d{0,2})/, "($1")
  }

  return fixedPhone
}

export function formatMoney(value: number): string {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value)
}

export function formatMoneyInCents(cents: number): string {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(cents / 100)
}
