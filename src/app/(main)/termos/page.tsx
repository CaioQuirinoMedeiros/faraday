import { Terms } from "@/app/_components/terms"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Termos de Uso",
  description: "Confira os Termos de Uso do Fisiquei",
}

export default function TermosPage() {
  return (
    <main className="max-w-4xl mx-auto py-20 px-5 sm:px-8 bg-background">
      <Terms />
    </main>
  )
}
