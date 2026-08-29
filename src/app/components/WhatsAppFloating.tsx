import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5515988189999?text=" + encodeURIComponent(
  "Olá! Gostaria de conversar com um especialista do Grupo W3.",
);

export function WhatsAppFloating() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(true), 7000);
    const onScroll = () => {
      if (window.scrollY > Math.min(420, window.innerHeight * 0.35)) {
        setVisible(true);
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <a
      className={`w3-whatsapp-float ${visible ? "is-visible" : ""}`}
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer noopener"
      aria-label="Falar com um especialista do Grupo W3 pelo WhatsApp"
    >
      <span className="w3-whatsapp-status" aria-hidden="true" />
      <MessageCircle size={19} aria-hidden="true" />
      <span className="w3-whatsapp-copy">
        <small>ESPECIALISTA W3</small>
        <strong>Falar com a equipe</strong>
      </span>
    </a>
  );
}
