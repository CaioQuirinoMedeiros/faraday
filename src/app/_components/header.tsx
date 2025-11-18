import { MenuIcon } from "lucide-react"

const navItems = [
  { label: 'Plataforma', href: '#plataforma' },
  { label: 'Professor', href: '#professor' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Apostila', href: '#apostila' },
  { label: 'FAQ', href: '#faq' }
]

export function Header() {
  return (
    <header className='fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-gray-900/85 backdrop-blur-sm shadow-lg'>
      <nav className='mx-auto max-w-[1440px] flex items-center justify-between px-6 py-4'>
        <a href='#' aria-label="Página inicial" >
          <img
            src='/images/logo_fisiquei_365x100.png'
            className='h-[46px] aspect-365/100 object-contain hover:scale-[102%] transition-transform'
            alt="Fisiquei"
          />
        </a>
        <ul className='hidden md:flex gap-6'>
          {navItems.map((navItem) => {
            return (
              <li key={navItem.label}>
                <a
                  href={navItem.href}
                  className='text-gray-300 hover:text-primary transition-colors font-medium'
                >
                  {navItem.label}
                </a>
              </li>
            )
          })}
        </ul>
        <div>
          <a
            href='https://app.fisiquei.com.br'
            className='hidden sm:block text-primary-foreground px-6 py-2 bg-primary font-bold rounded-lg hover:bg-primary/60 transition-all duration-300 text-sm'
          >
            Comece grátis
          </a>
          <button id='menu-toggle' className='md:hidden cursor-pointer'>
            <MenuIcon className="size-7" />
          </button>
        </div>
      </nav>
    </header>
  )
}
