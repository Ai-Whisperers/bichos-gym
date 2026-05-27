import type { Metadata } from "next"
import { Montserrat, Playfair_Display } from "next/font/google"
import "./globals.css"
import { CookieConsent } from "@ai-whisperers/seo"
import { WhatsAppFloat } from "@ai-whisperers/whatsapp"

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://bichos-gym.paragu-ai.com"),
  title: "Bicho's Gym",
  description: "Gimnasio completo, entrenadores certificados y el mejor ambiente para alcanzar tus metas fitness",
  icons: { icon: "/favicon.ico" },
  alternates: { canonical: "https://bichos-gym.paragu-ai.com" },
  openGraph: {
    title: "Bicho's Gym",
    description: "Gimnasio completo, entrenadores certificados y el mejor ambiente para alcanzar tus metas fitness",
    url: "https://bichos-gym.paragu-ai.com",
    siteName: "Bicho's Gym",
    locale: "es_PY",
    type: "website",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Bicho's Gym",
    description: "Gimnasio completo, entrenadores certificados y el mejor ambiente para alcanzar tus metas fitness",
    url: "https://bichos-gym.paragu-ai.com",
    image: "https://bichos-gym.paragu-ai.com/images/og-default.jpg",
  }

  return (
    <html lang="es" className={montserrat.variable + " " + playfair.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body antialiased bg-background text-foreground">{children}
        <WhatsAppFloat />
        <CookieConsent />
      </body>
    </html>
  )
}
