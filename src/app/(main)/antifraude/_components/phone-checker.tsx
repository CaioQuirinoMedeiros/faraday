"use client"

import { Input } from "@/components/base/input"
import { phoneNumberMaskFunction } from "@/utils/formatters"
import { cn } from "@/utils/styles"
import { TriangleAlertIcon } from "lucide-react"
import * as React from "react"

const validPhones = [
  "61999667745",
  "6199667745",
  "61982237388",
  "6182237388",
  "61996689386",
  "6196689386",
  "61993756696",
  "6193756696",
]

export function PhoneChecker() {
  const [phone, setPhone] = React.useState("")

  const validationResult = React.useMemo(() => {
    console.log("phone", phone)

    const rawPhone = phone.replace(/\D/g, "")

    if (rawPhone.length < 10) return "undefined"

    if (validPhones.includes(rawPhone)) {
      return "valid"
    } else {
      return "invalid"
    }
  }, [phone])

  return (
    <div className="flex flex-col gap-3 items-center">
      <Input
        id="phone-checker"
        name="phone"
        value={phone}
        onChangeValue={setPhone}
        type="tel"
        autoComplete="tel"
        inputMode="tel"
        maskFunction={phoneNumberMaskFunction}
        maxLength={19}
        pattern="^\(?[1-9]{2}\)? ?9[0-9]{4}-?[0-9]{4}$"
        placeholder="(11) 99999-9999"
        className="bg-[#414141] border border-[#676767] placeholder:text-white/40 text-white text-lg md:text-xl text-center max-w-[300px]"
      />

      <div
        className={cn(
          "rounded-lg px-4 py-3 text-center border border-transparent",
          validationResult === "valid" && "bg-green-100 border-green-600 text-green-600",
          validationResult === "invalid" && "bg-red-100 border-red-600 text-red-600",
        )}
      >
        {validationResult === "undefined" && (
          <p className="text-white/70">Digite o número para verificar...</p>
        )}
        {validationResult === "invalid" && (
          <span className="flex gap-1.5 items-center font-medium">
            <TriangleAlertIcon className="size-5" />
            <span>
              <strong className="font-bold">ATENÇÃO:</strong> Esse número NÃO pertence ao Fisiquei!
            </span>
          </span>
        )}
        {validationResult === "valid" && (
          <span className="flex gap-1.5 items-center font-medium">
            <TriangleAlertIcon className="size-5" />
            <span>
              <strong className="font-bold">VERIFICADO:</strong> Esse número é sim do Fisiquei 😉
            </span>
          </span>
        )}
      </div>
    </div>
  )
}
