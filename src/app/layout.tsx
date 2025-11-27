import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "../globals.css"
import Script from "next/script"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
})

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

const appUrl = "https://b61d4a226597.ngrok-free.app"

export const metadata: Metadata = {
  metadataBase: new URL(appUrl),
  title: {
    default: "Fisiquei - Aprenda Física de verdade!",
    template: "%s | Fisiquei",
  },
  description:
    "Prepare-se para o ENEM e vestibulares com a melhor plataforma de ensino de Física online! O Fisiquei vai mudar a forma como você enxerga a Física!",
  openGraph: {
    title: "Fisiquei - Aprenda Física de verdade!",
    description:
      "Prepare-se para o ENEM e vestibulares com a melhor plataforma de ensino de Física online! O Fisiquei vai mudar a forma como você enxerga a Física!",
    type: "website",
    locale: "pt_BR",
    url: appUrl,
    siteName: "Fisiquei",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt" className="overflow-y-auto">
      <body
        className={`${inter.variable} ${poppins.variable} min-h-dvh antialiased bg-background font-sans max-w-dvw`}
      >
        {children}
        <Script
          id="mautic-tracking"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,t,u,n,a,m){w['MauticTrackingObject']=n;
w[n]=w[n]||function(){(w[n].q=w[n].q||[]).push(arguments)},a=d.createElement(t),
m=d.getElementsByTagName(t)[0];a.async=1;a.src=u;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://mkt.fisiquei.com.br/mtc.js','mt');
mt('send', 'pageview');`,
          }}
        />
      </body>
    </html>
  )
}
