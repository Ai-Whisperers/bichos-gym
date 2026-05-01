import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { CtaBanner } from "@/components/cta-banner"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"

export default function Home() {
  return (
    <>
      <Header />
      <Hero
        title="Bicho's Gym"
        subtitle="Gimnasio completo en Capiatá con entrenadores certificados y el mejor ambiente para alcanzar tus metas"
      />
      <Services />
      <CtaBanner />
      <Footer
        businessName="Bicho's Gym"
        tagline="Transformá tu Cuerpo en Capiatá"
        address="Capiatá"
        phone="0981 000 001"
        hours="Lun-Sáb: 7:00 - 21:00, Dom: 9:00 - 13:00"
        waPhone="595981000001"
      />
      <WhatsAppFloat />
    </>
  )
}
