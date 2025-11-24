import {
  InstagramLogoIcon,
  ThreadsLogoIcon,
  XLogoIcon,
  YoutubeLogoIcon,
} from "@/assets/icons"
import Link from "next/link"

const socials = [
  {
    icon: InstagramLogoIcon,
    size: 16,
    href: "https://instagram.com/thalesquirino",
    ariaLabel: "Acessar o Instagram do Fisiquei",
  },
  {
    icon: YoutubeLogoIcon,
    size: 18,
    href: "https://youtube.com/@fisiquei",
    ariaLabel: "Acessar o canal do Youtube do Fisiquei",
  },
  {
    icon: XLogoIcon,
    size: 15,
    href: "https://x.com/fisiquei",
    ariaLabel: "Acessar o X (Twitter) do Fisiquei",
  },
  {
    icon: ThreadsLogoIcon,
    size: 16,
    href: "https://www.threads.com/@thalesquirino",
    ariaLabel: "Acessar o Threads do Fisiquei",
  },
]

const links = [
  { label: "A Plataforma", href: "/#plataforma" },
  { label: "Sobre o Professor", href: "/#professor" },
  { label: "Apostila gratuita", href: "/#apostila" },
  { label: "Depoimentos", href: "/#depoimentos" },
  { label: "Planos e preços", href: "/#planos" },
  { label: "FAQ", href: "/#faq" },
]

export function Footer() {
  return (
    <footer className="bg-[#121211] border-t border-[#101010] text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          <div>
            <img
              src="/images/logo_fisiquei_365x100.png"
              className="h-[38px] aspect-365/100 object-contain mb-4"
              alt=""
            />
            <div className="text-sm text-gray-400 flex flex-col gap-2">
              <p className="leading-relaxed">
                Porque a Física não precisa ser complicada
              </p>
              <p className="">
                Ajudando milhares de estudantes a conquistarem suas aprovações
                desde 2020
              </p>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Links rápidos</h3>
            <ul className="space-y-2">
              {links.map((link) => {
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-[#FFC107] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Redes sociais</h3>
            <p className="text-gray-400 text-sm mb-2">
              Acompanhe dicas, conteúdos gratuitos e novidades
            </p>
            <div className="flex gap-3">
              {socials.map((social) => {
                const { icon: SocialIcon } = social

                return (
                  <a
                    key={social.href}
                    className="group size-10 bg-[#333] rounded-lg flex items-center justify-center hover:bg-primary hover:text-gray-900 transition-all"
                    target="_blank"
                    href={social.href}
                    aria-label={social.ariaLabel}
                  >
                    <SocialIcon
                      style={{
                        width: `${social.size}px`,
                        height: `${social.size}px`,
                      }}
                      className="size-4 fill-white group-hover:fill-primary-foreground transition-colors"
                    />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        <div className="border-t border-white/15 pt-8 text-center">
          <p className="text-gray-200 mb-2">
            © 2025 FISIQUEI - Todos os direitos reservados
          </p>
          <div>
            <span className="text-xs text-foreground/60">
              <a href="/termos" className="underline hover:opacity-75">
                Termos de Uso
              </a>
              {" & "}
              <a href="/privacidade" className="underline hover:opacity-75">
                Política de Privacidade
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
