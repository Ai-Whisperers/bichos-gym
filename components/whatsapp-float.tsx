"use client";
import { MessageCircle } from "lucide-react";

export function WhatsAppFloat() {
  return (
    <a href="https://wa.me/595982292573?text=Hola!%20Quiero%20informaci%C3%B3n%20sobre%20membres%C3%ADas%20de%20Bicho%27s%20Gym" target="_blank" rel="noopener noreferrer"
       className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-lg hover:scale-110 hover:shadow-xl transition-all"
       aria-label="Contactar por WhatsApp">
      <MessageCircle className="w-7 h-7" />
    </a>
  );
}
