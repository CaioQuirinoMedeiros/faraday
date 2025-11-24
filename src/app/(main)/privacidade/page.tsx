import { Privacy } from "@/app/_components/privacy"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: "Confira a Política de Privacidade do Fisiquei",
}

export default function PoliticaPrivacidadePage() {
  return (
    <main className="max-w-4xl mx-auto py-20 px-5 sm:px-8 bg-background">
      <Privacy />
    </main>
  )
}
