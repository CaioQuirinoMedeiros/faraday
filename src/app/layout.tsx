import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'

import WhatsAppLogo from '../assets/icons/whatsapp-logo.svg'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin']
})

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700']
})

export const metadata: Metadata = {
  title: 'Fisiquei - Aprenda Física de verdade!',
  description:
    'Prepare-se para o ENEM e vestibulares com a melhor plataforma de ensino de Física online! O Fisiquei vai mudar a forma como você enxerga a Física!'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body
        className={`${inter.variable} ${poppins.variable} antialiased bg-background font-sans`}
      >
        {children}

        <a
          href={`https://app.fisiquei.com.br/suporte?origem=site&mensagem=Ol%C3%A1%2C+estou+no+site+e+gostaria+de+tirar+uma+d%C3%BAvida`}
          className='fixed bottom-6 right-6 size-14 z-30 inline-flex items-center justify-center rounded-2xl bg-[#25D366] transition-all p-2 hover:scale-110 hover:bg-[#1a9447] shadow-lg'
          aria-label='Fale com o nosso suporte'
        >
          <WhatsAppLogo className='size-8 fill-white' />
        </a>
      </body>
    </html>
  )
}
