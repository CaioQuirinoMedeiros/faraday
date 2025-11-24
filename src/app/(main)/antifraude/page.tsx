import { Metadata } from "next"
import { PhoneChecker } from "./_components/phone-checker"
import { WhatsappLogoIcon } from "@/assets/icons"

export const metadata: Metadata = {
  title: {
    absolute: "Verificar número Fisiquei - Antifraude",
  },
  description:
    "Verifique se um número de telefone realmente é do Fisiquei e se proteja de golpes!",
}

const securityTips = [
  {
    key: "denuncie",
    content: (
      <>
        Se você identificou uma menssagem de golpe, denuncie no WhatsApp e, se
        possível, nos avise no suporte.
      </>
    ),
  },
  {
    key: "canal-ofertas",
    content: (
      <>
        Nossas ofertas estão sempre disponíveis em{" "}
        <a href="https://app.fisiquei.com.br/ofertas">
          https://app.fisiquei.com.br/ofertas
        </a>
        .
      </>
    ),
  },
  {
    key: "dominio",
    content: (
      <>
        O Fisiquei utiliza apenas o domínio fisiquei.com.br (e seus
        subdomínios).
      </>
    ),
  },
  {
    key: "canal-suporte",
    content: (
      <>
        Quaisquer dúvidas, entre em contato com nosso suporte ou acesse nossos
        canais oficiais.
      </>
    ),
  },
]

export default function AntifraudePage() {
  return (
    <main className="h-full flex flex-col justify-center py-16 px-4 sm:px-8">
      <div className="bg-[#232323] rounded-3xl p-6 sm:p-8 max-w-5xl flex flex-col mx-auto border border-primary-lighter/25 shadow-[0_0_8px_0px_rgba(140,240,240,0.15)] ">
        <div className="flex flex-col items-center">
          <img
            src="/images/celular-seguro.webp"
            alt="Ícone de celular com escudo de segurança"
            className="w-[60px] object-contain mb-8"
          />

          <h1 className="text-2xl sm:text-3xl text-[#fdfdfd] font-display font-semibold mb-4 text-center">
            Verificador de número do Fisiquei
          </h1>

          <p className="mb-6 text-[#EFEFEF] text-center sm:max-w-[600px]">
            Recebeu uma mensagem ou ligação suspeita dizendo ser do Fisiquei?
            Digite o número aqui embaixo para verificar se realmente somos nós:
          </p>

          <PhoneChecker />
        </div>

        <hr className="my-8 border-gray-500" />

        <ul className="flex flex-col list-disc list-inside text-sm text-white/85 gap-2">
          {securityTips.map((securityTip) => {
            return <li key={securityTip.key}>{securityTip.content}</li>
          })}
        </ul>

        <a
          href="https://app.fisiquei.com.br/suporte?origem=antifraude&mensagem=Ol%C3%A1%2C%20estou%20na%20p%C3%A1gina%20de%20antifraude%20e%20estou%20com%20uma%20d%C3%BAvida"
          target="_blank"
          className="mt-6 sm:self-start justify-center flex gap-2 items-center py-2 px-3 rounded-md bg-[#128c7e] text-white hover:brightness-110 transition-all"
        >
          <WhatsappLogoIcon className="size-4 fill-white" />
          Falar com o suporte
        </a>
      </div>
    </main>
  )
}
