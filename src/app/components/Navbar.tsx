import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Logo } from "./Logo";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const goTo = (selector: string) => {
    setIsOpen(false);
    if (isHome) {
      if (selector === "#") window.scrollTo({ top: 0, behavior: "smooth" });
      else document.querySelector(selector)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const contact = () => {
    setIsOpen(false);
    const message = encodeURIComponent("Olá! Gostaria de conversar com a equipe Grupo W3 sobre cibersegurança e infraestrutura de TI.");
    window.open(`https://wa.me/5515988189999?text=${message}`, "_blank");
  };

  return (
    <nav className={`w3-nav ${isScrolled ? "scrolled" : ""}`}>
      <div className="w3-nav-inner">
        <Link to="/" className="w3-nav-brand" onClick={() => goTo("#")} aria-label="Grupo W3 - início">
          <Logo className="w3-nav-logo" />
        </Link>

        <div className={`w3-nav-menu ${isOpen ? "active" : ""}`}>
          <div className="w3-nav-links">
            <Link to="/" onClick={() => goTo("#servicos")}>Soluções</Link>
            <Link to="/" onClick={() => goTo("#operacao")}>Como operamos</Link>
            <Link to="/" onClick={() => goTo("#sobre")}>Grupo W3</Link>
            <Link to="/" onClick={() => goTo("#contato")}>Contato</Link>
          </div>
          <div className="w3-nav-actions">
            <button className="w3-nav-primary" onClick={contact}>Falar com especialista</button>
          </div>
        </div>

        <button className={`w3-menu-toggle ${isOpen ? "active" : ""}`} onClick={() => setIsOpen((value) => !value)} aria-label={isOpen ? "Fechar menu" : "Abrir menu"} aria-expanded={isOpen}>
          <span /><span />
        </button>
      </div>
    </nav>
  );
}
