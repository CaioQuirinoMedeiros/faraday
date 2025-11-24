import { Header } from "../_components/header"
import { Footer } from "../_components/footer"

import * as React from "react"
import { WhatsappLogoIcon } from "@/assets/icons"

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <React.Fragment>
      <Header />

      {children}

      <Footer />

      <a
        href={`https://app.fisiquei.com.br/suporte?origem=site&mensagem=Ol%C3%A1%2C+estou+no+site+e+gostaria+de+tirar+uma+d%C3%BAvida`}
        className="fixed bottom-6 right-6 size-14 z-30 inline-flex items-center justify-center rounded-2xl bg-[#25D366] transition-all p-2 hover:scale-110 hover:bg-[#1a9447] shadow-lg"
        aria-label="Fale com o nosso suporte"
      >
        <WhatsappLogoIcon className="size-8 fill-white" />
      </a>
    </React.Fragment>
  )
}
