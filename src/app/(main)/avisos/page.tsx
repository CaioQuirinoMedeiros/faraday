import { Privacy } from "@/app/_components/privacy"
import { Terms } from "@/app/_components/terms"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Termos de Uso e Política de Privacidade",
  description:
    "Confira os Termos de Uso e a Política de Privacidade do Fisiquei",
}

export default function AvisosPage() {
  return (
    <main className="max-w-4xl mx-auto py-20 px-8 bg-background">
      <Terms />

      <hr className="my-14 border-gray-800" />

      <Privacy />
    </main>
  )
}
