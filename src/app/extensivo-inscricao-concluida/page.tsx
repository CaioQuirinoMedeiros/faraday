import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Parabéns! Seu acesso foi liberado",
  description:
    "Seja muito bem-vindo(a) ao FISIQUEI! Espero que você aproveite ao máximo nosso curso.",
}

export default function InscricaoConcluidaPage() {
  return (
    <main className="h-full flex flex-col justify-center">
      <div className="bg-[#232323] rounded-3xl p-10 max-w-[800px] flex flex-col items-start my-8 mx-auto border border-primary-lighter/25 shadow-[0_0_8px_0px_rgba(140,240,240,0.15)] ">
        <img
          src="/images/logo_fisiquei_365x100.png"
          className="w-[200px] object-contain mb-8"
        />

        <h1 className="text-3xl text-[#fdfdfd] font-display font-semibold mb-4">
          Seja muito bem-vindo(a) ao FISIQUEI!
        </h1>

        <div className="text-[#EFEFEF]">
          <p className="mb-2">
            Seu acesso ao curso Extensivo já foi liberado! Antes de mais nada,
            preencha por favor a{" "}
            <a
              href="https://forms.gle/Sg7HA7nmavZd43ju64"
              className="text-[rgb(45,199,109)] font-semibold hover:opacity-75 underline transition-opacity"
            >
              ficha do aluno
            </a>
            .
          </p>
          <p className="mb-2">
            Agora basta acessar a plataforma usando o seu email e começar a
            estudar:
          </p>
        </div>

        <a
          href="https://app.fisiquei.com.br"
          className="bg-primary text-primary-foreground rounded-lg py-2.5 px-4 text-center font-bold hover:opacity-75 cursor-pointer transition-all mt-4 sm:min-w-[280px]"
        >
          Acessar a plataforma
        </a>

        <ul className="text-[#acacac] text-sm flex flex-col gap-2.5 list-disc pl-5 mt-4">
          <li>Você precisa acessar com o mesmo e-mail usado na compra.</li>
          <li>
            Se você ainda não tinha cadastro, use seu CPF como senha ou use a
            opção de redefinir senha.
          </li>
        </ul>

        <p className="mt-8 text-[#cbcbcb]">
          Ficou com alguma dúvida?{" "}
          <a
            href="https://app.fisiquei.com.br/suporte"
            className="underline text-[#88e4dc] hover:opacity-75"
          >
            Entre em contato com o suporte
          </a>
          .
        </p>
      </div>
    </main>
  )
}
