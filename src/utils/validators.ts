type PhoneNumberValidation =
  | {
      isValid: true
      hasBrCountryCode: boolean
      carrierCode: string
      areaCode: string
      raw9digits: string
    }
  | { isValid: false }

const dddCodes = [
  11, 12, 13, 14, 15, 16, 17, 18, 19, 21, 22, 24, 27, 28, 31, 32, 33, 34, 35,
  37, 38, 41, 42, 43, 44, 45, 46, 47, 48, 49, 51, 53, 54, 55, 61, 62, 64, 63,
  65, 66, 67, 68, 69, 71, 73, 74, 75, 77, 79, 81, 82, 83, 84, 85, 86, 87, 88,
  89, 91, 92, 93, 94, 95, 96, 97, 98, 99,
]

const carrierCodes = [31, 32, 14, 15, 21, 41, 12, 43, 10, 17, 64, 99]

function getIsValidAreaCode(ddd: string | number) {
  const indexOfDdd = dddCodes.indexOf(Number(ddd))
  return indexOfDdd !== -1
}

function getIsCarrierCode(digitos: string | number) {
  const indexOfCarier = carrierCodes.indexOf(Number(digitos))
  return indexOfCarier !== -1
}

export function validatePhoneNumber(phone: string): PhoneNumberValidation {
  if (typeof phone !== "string") return { isValid: false }

  let rawPhone = phone.replace(/^\+|[()\s-]+/g, "")

  // Deve ter pelo menos 9 e no maximo 17 digitos
  if (!/^[\d]{9,17}$/.test(rawPhone)) return { isValid: false }

  let hasBrCountryCode = false
  let carrierCode = ""
  let areaCode = ""

  // Identifica codigo do Brasil
  if (rawPhone.startsWith("55") && rawPhone.length >= 13) {
    hasBrCountryCode = true
    rawPhone = rawPhone.replace(/^55/, "")
  }

  // Remove 0 de possível codigo de operadora ou DDD
  if (rawPhone.startsWith("0") && rawPhone.length >= 12) {
    rawPhone = rawPhone.replace(/^0/, "")
  }

  // Identifica codigo de operadora
  if (rawPhone.length >= 13) {
    carrierCode = rawPhone.slice(0, 2)
    if (getIsCarrierCode(carrierCode)) {
      rawPhone = rawPhone.slice(2)
    } else {
      return { isValid: false }
    }
  }

  // Remove 0 de possível codigo de DDD
  if (rawPhone.startsWith("0") && rawPhone.length === 12) {
    rawPhone = rawPhone.replace(/^0/, "")
  }

  // Identifica o DDD
  if (/^[\d]{11}$/.test(rawPhone)) {
    areaCode = rawPhone.slice(0, 2)
    if (getIsValidAreaCode(areaCode)) {
      rawPhone = rawPhone.slice(2)
    } else {
      return { isValid: false }
    }
  }

  const isFirstDigit9 = rawPhone.slice(0, 1) === "9"
  if (/^[\d]{9}$/.test(rawPhone) && isFirstDigit9) {
    return {
      isValid: true,
      hasBrCountryCode: hasBrCountryCode,
      carrierCode: carrierCode,
      areaCode: areaCode,
      raw9digits: rawPhone,
    }
  } else {
    return { isValid: false }
  }
}

export function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}
