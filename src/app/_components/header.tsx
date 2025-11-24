import { MenuIcon, XIcon } from "lucide-react"
import * as PrimitiveCollapsible from "@radix-ui/react-collapsible"
import Link from "next/link"

const navItems = [
  { label: "Plataforma", labelMobile: "Plataforma", href: "/#plataforma" },
  { label: "Professor", labelMobile: "Professor", href: "/#professor" },
  { label: "Apostila", labelMobile: "Apostila gratuita", href: "/#apostila" },
  { label: "Depoimentos", labelMobile: "Depoimentos", href: "/#depoimentos" },
  { label: "Planos", labelMobile: "Planos", href: "/#planos" },
  { label: "FAQ", labelMobile: "Perguntas frequentes", href: "/#faq" },
]

export function Header() {
  return (
    <header className="sticky top-0 left-0 right-0 z-50 transition-all duration-300 bg-gray-900/90 backdrop-blur-sm shadow-lg border-b border-gray-800">
      <PrimitiveCollapsible.Root>
        <nav className="mx-auto max-w-[1440px] flex items-center justify-between px-6 py-4">
          <Link href="/" aria-label="Página inicial">
            <img
              src="/images/logo_fisiquei_365x100.png"
              className="h-[46px] aspect-365/100 object-contain hover:scale-[102%] transition-transform"
              alt="Fisiquei"
            />
          </Link>
          <ul className="hidden mdx:flex gap-6">
            {navItems.map((navItem) => {
              return (
                <li key={navItem.label}>
                  <Link
                    href={navItem.href}
                    className="text-gray-300 hover:text-primary transition-colors font-medium"
                  >
                    {navItem.label}
                  </Link>
                </li>
              )
            })}
          </ul>

          <div className="flex gap-3 items-center">
            <a
              href="https://app.fisiquei.com.br/cadastro"
              target="_blank"
              className="hidden sms:block text-primary-foreground px-6 py-2 bg-primary text-center font-bold rounded-lg hover:bg-primary/60 transition-all duration-300 text-sm"
            >
              Comece grátis
            </a>

            <PrimitiveCollapsible.Trigger
              id="menu-toggle"
              className="group mdx:hidden cursor-pointer hover:text-primary transition-colors"
            >
              <MenuIcon className="size-7 group-data-[state=open]:hidden" />
              <XIcon className="size-7 group-data-[state=closed]:hidden" />
            </PrimitiveCollapsible.Trigger>
          </div>
        </nav>

        <PrimitiveCollapsible.Content className="mdx:hidden overflow-hidden data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down">
          <div className="py-6 px-8 flex flex-col gap-4">
            <ul className="flex flex-col items-start gap-3">
              {navItems.map((navItem) => {
                return (
                  <PrimitiveCollapsible.Trigger key={navItem.label} asChild>
                    <li>
                      <a
                        href={navItem.href}
                        className="text-gray-300 hover:text-primary transition-colors font-medium"
                      >
                        {navItem.labelMobile}
                      </a>
                    </li>
                  </PrimitiveCollapsible.Trigger>
                )
              })}
            </ul>

            <a
              href="https://app.fisiquei.com.br/cadastro"
              target="_blank"
              className="sms:hidden text-primary-foreground px-6 py-2 bg-primary text-center font-bold rounded-lg hover:bg-primary/60 transition-all duration-300 text-sm"
            >
              Comece grátis
            </a>
          </div>
        </PrimitiveCollapsible.Content>
      </PrimitiveCollapsible.Root>
    </header>
  )
}
