"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"

import { cn } from "@/utils/styles"
import { ArrowLeftIcon, HomeIcon } from "lucide-react"

export default function NotFoundPage() {
  const router = useRouter()

  function handleGoBack() {
    window.history.back()
  }

  return (
    <div className="h-dvh flex flex-col items-center justify-center px-8 py-[80px] gap-2">
      <span className="text-9xl text-[140px] font-bold font-display opacity-30 mb-5">
        404
      </span>
      <div className="max-w-[640px] flex flex-col gap-4">
        <h2 className="text-4xl font-semibold text-center">
          Página não encontrada
        </h2>
        <p className="text-center text-muted">
          Pode ser que o endereço da página que você procura tenha mudado ou
          talvez você digitou o endereço errado.
        </p>

        <div className="flex flex-row gap-2 self-center mt-6">
          <button
            onClick={handleGoBack}
            className="bg-neutral font-semibold py-2 px-3 rounded-md text-center flex items-center justify-center gap-2 cursor-pointer hover:opacity-75"
          >
            <ArrowLeftIcon className="size-4" />
            Voltar
          </button>
          <a
            href={`/`}
            className="bg-primary text-primary-foreground font-semibold py-2 px-3 rounded-md text-center flex items-center justify-center gap-2 cursor-pointer hover:opacity-75"
          >
            <HomeIcon className="size-4" />
            Página inicial
          </a>
        </div>

        <p className="mt-8 text-sm text-muted-foreground text-center">
          Precisa de ajuda?{" "}
          <Link
            href={`/suporte?origem=not-found`}
            target="_blank"
            className="hover:opacity-75 underline"
          >
            Entre em contato com o suporte
          </Link>
        </p>
      </div>

      <div className="mt-auto flex flex-col gap-3 items-center">
        <img
          src="/images/logo_fisiquei_365x100.png"
          alt={"Logo Fisiquei"}
          className="w-[200px]"
        />
      </div>
    </div>
  )
}
