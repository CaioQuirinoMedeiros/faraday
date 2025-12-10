"use client"

import { motion } from "motion/react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import {
  CheckIcon,
  DownloadIcon,
  FileDownIcon,
  GiftIcon,
  LockIcon,
  StarIcon,
  XIcon,
} from "lucide-react"
import { Label } from "@/components/base/label"
import { Input } from "@/components/base/input"
import { phoneNumberMaskFunction } from "@/utils/formatters"
import * as React from "react"
import { validateEmail, validatePhoneNumber } from "@/utils/validators"
import FatalitySlideshow from "./fatality-slideshow"

const contentMicrocopies = [
  "511 questões de Física do ENEM",
  "Organizadas por tópicos",
  "Gabarito e resoluções em vídeo",
  "Estatísticas dos conteúdos",
]

const fileUrl =
  "https://cdn.fisiquei.com.br/static-asssets/Fisiquei_Fatality-ENEM-v20251122.pdf"
const filename = fileUrl.split("/").pop() ?? "apostila_fisiquei.pdf"

export function DownloadContentSection() {
  const [name, setName] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [phone, setPhone] = React.useState("")

  const [successDialogOpen, setSuccessDialogOpen] = React.useState(false)

  const isFormValid = React.useMemo(() => {
    const phoneValidation = validatePhoneNumber(phone)
    return (
      !!name &&
      validateEmail(email) &&
      phoneValidation.isValid &&
      !!phoneValidation.areaCode
    )
  }, [email, name, phone])

  function downloadFile() {
    const link = document.createElement("a")
    link.target = "_blank"
    link.href = fileUrl
    link.download = filename
    document.body.appendChild(link)
    link.click()
    link.remove()
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const requestBody = {
      name: name,
      email: email,
      phone: phone,
    }

    fetch("https://app.fisiquei.com.br/api/fatality-enem", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestBody),
    }).catch((error) => {
      console.log("Houve um erro ao enviar os dados:", error)
    })

    setTimeout(downloadFile, 2_250)

    setSuccessDialogOpen(true)
  }

  return (
    <section
      id="apostila"
      className="relative overflow-hidden flex flex-col items-center justify-center pb-20 bg-radial-[at_0%_15%] bg-background from-primary/25 to-background to-45%"
    >
      <svg
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto -translate-y-1 rotate-180 z-20"
      >
        <path
          d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
          fill="white"
          className="fill-primary-lighter"
        ></path>
      </svg>

      <div className="max-w-6xl flex flex-col mdx:flex-row mdx:items-center gap-14 pt-24 px-6 z-20">
        <div className="flex flex-col flex-1 overflow-hidden">
          <div className="flex flex-col gap-3.5 items-start mb-5">
            <div className="flex items-center justify-center gap-1.5 bg-primary text-primary-foreground rounded-full px-2.5 py-1 text-sm font-medium">
              <GiftIcon className="size-3.5" />
              <span>Material gratuito</span>
            </div>
            <h2 className="text-4xl sm:text-5xl leading-[1.2] font-bold font-display text-white whitespace-pre-wrap">
              <span className="text-4xl">Apostila</span>
              <br />
              <span className="text-primary-light">Fatality ENEM</span>
            </h2>
          </div>

          <p className="mb-6 text-muted">
            Todas as questões de Física do ENEM de 2009 até 2024, separadas por
            tópicos e com resoluções em vídeo.
          </p>

          <ul className="flex flex-col gap-2.5">
            {contentMicrocopies.map((microcopy) => {
              return (
                <li key={microcopy} className="flex items-center gap-2">
                  <StarIcon className="size-3.5 fill-primary-light stroke-primary" />
                  <span>{microcopy}</span>
                </li>
              )
            })}
          </ul>

          <span className="mt-8 font-semibold text-white/70 text-sm bg-primary/10 px-2.5 py-1 rounded-sm self-start">
            Mais de 500 downloads todo mês!
          </span>
        </div>

        <motion.div
          initial={{ opacity: 0, x: -54 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          viewport={{ once: true, amount: 0.5 }}
          className="relative z-20 rounded-xl px-5 sm:px-8 py-8 pt-12 bg-primary-lighter text-primary-foreground border border-primary shrink-0 mdx:w-[470px]"
        >
          <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 size-12 rounded-xl flex items-center justify-center bg-primary text-primary-foreground border border-primary-lighter shadow-md">
            <DownloadIcon className="size-6" />
          </div>
          <div className="flex flex-col gap-1.5 mb-5">
            <h3 className="text-center text-3xl font-bold tracking-tight">
              Baixe a apostila
            </h3>
            <span className="text-center text-sm opacity-75">
              Preencha o formulário para fazer o download
            </span>
          </div>
          <form
            id="download-content-form"
            aria-describedby="form-desc"
            autoComplete="on"
            role="form"
            onSubmit={onSubmit}
          >
            <p className="sr-only" id="form-desc">
              Formulário para baixar a Apostila Fatality. Preecha nome, email e
              telefone para receber o link de download.
            </p>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <Label htmlFor="name">Nome</Label>
                <Input
                  id="name"
                  name="name"
                  value={name}
                  onChangeValue={setName}
                  maskFunction={value => value.replace(/[^A-Za-zÀ-ÖØ-öø-ÿ' -]/g, '')}
                  type="text"
                  required
                  autoComplete="name"
                  spellCheck={false}
                  autoCapitalize="words"
                  placeholder="João da Silva"
                  pattern="^[^@]{1,}$"
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="email">E-mail</Label>
                <Input
                  id="email"
                  name="email"
                  value={email}
                  onChangeValue={setEmail}
                  type="email"
                  required
                  autoComplete="email"
                  spellCheck={false}
                  autoCapitalize="off"
                  inputMode="email"
                  placeholder="joao@exemplo.com"
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="phone">Celular (DDD + número)</Label>
                <Input
                  id="phone"
                  name="phone"
                  value={phone}
                  onChangeValue={setPhone}
                  type="tel"
                  required
                  autoComplete="tel"
                  inputMode="tel"
                  maskFunction={phoneNumberMaskFunction}
                  maxLength={19}
                  pattern="^\(?[1-9]{2}\)? ?9[0-9]{4}-?[0-9]{4}$"
                  placeholder="(11) 99999-9999"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={!isFormValid}
              className="cursor-pointer uppercase font-semibold hover:brightness-105 flex items-center gap-2 justify-center w-full bg-accent-dark text-white hover:scale-101 transition-all py-2 min-h-12 rounded-md mt-5 tracking-tight disabled:pointer-events-none disabled:opacity-60"
            >
              Baixar apostila gratuita
            </button>

            <p className="text-center text-xs flex items-center gap-2 justify-center mt-3 opacity-70">
              <LockIcon className="size-3" />
              Seus dados estão protegidos
            </p>
          </form>
        </motion.div>
      </div>

      <div className="hidden xl:block absolute inset-y-0 h-[110%] max-w-[500px] right-0 z-10">
        <FatalitySlideshow />
      </div>

      <DialogPrimitive.Root
        open={successDialogOpen}
        onOpenChange={setSuccessDialogOpen}
      >
        <DialogPrimitive.Portal>
          <DialogPrimitive.Overlay className="fixed inset-0 bg-black/80 z-50 backdrop-blur-sm data-[state=open]:animate-fade-in data-[state=closed]:animate-fade-out" />
          <DialogPrimitive.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[calc(100%-16px)] max-w-lg rounded-lg bg-background text-foreground shadow-lg border border-neutral p-8 data-[state=open]:animate-dialog-in data-[state=closed]:animate-dialog-out">
            <DialogPrimitive.Close className="absolute top-4 right-4 cursor-pointer hover:opacity-70 transition-opacity text-muted">
              <XIcon className="size-5" />
            </DialogPrimitive.Close>
            <div className="flex flex-col items-center">
              <div className="bg-green-600 text-white rounded-full size-12 flex items-center justify-center mb-6">
                <CheckIcon className="size-6" strokeWidth={3} />
              </div>

              <DialogPrimitive.Title className="text-lg font-semibold mb-2 text-center">
                Parabéns, {name}!
              </DialogPrimitive.Title>
              <DialogPrimitive.Description className="text-base text-muted text-center mb-8">
                Seu link para baixar a apostila foi liberado! Clique no botão
                abaixo caso o download não comece automaticamente.
              </DialogPrimitive.Description>

              <a
                href={fileUrl}
                download={filename}
                target="_blank"
                className="rounded-md px-3 py-2 bg-primary text-primary-foreground font-semibold flex items-center gap-2 w-full max-w-[340px] justify-center text-center hover:opacity-75 transition-opacity"
              >
                Apostila Fatality ENEM
                <FileDownIcon className="size-4" />
              </a>
            </div>
          </DialogPrimitive.Content>
        </DialogPrimitive.Portal>
      </DialogPrimitive.Root>
    </section>
  )
}

// 03668d
