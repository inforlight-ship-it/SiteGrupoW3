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
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname, location.hash]);

  const scrollHomeSection = (selector: string) => {
    setIsOpen(false);
    if (!isHome) return;
    if (selector === "#") window.scrollTo({ top: 0, behavior: "smooth" });
    else document.querySelector(selector)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const diagnostic = () => {
    setIsOpen(false);
    if (isHome) {
      document.querySelector("#diagnostico")?.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    window.location.assign("/#diagnostico");
  };

  return (
    <nav className={`w3-nav ${isScrolled ? "scrolled" : ""}`} aria-label="Navegação principal">
      <div className="w3-nav-inner">
        <Link to="/" className="w3-nav-brand" onClick={() => scrollHomeSection("#")} aria-label="Grupo W3 - início">
          <Logo className="w3-nav-logo" />
        </Link>

        <div id="w3-mobile-navigation" className={`w3-nav-menu ${isOpen ? "active" : ""}`}>
          <div className="w3-nav-links">
            <Link to="/#servicos" onClick={() => scrollHomeSection("#servicos")}>Soluções</Link>
            <Link to="/#cases" onClick={() => scrollHomeSection("#cases")}>Cases</Link>
            <Link to="/#soc-noc" onClick={() => scrollHomeSection("#soc-noc")}>SOC + NOC</Link>
            <Link to="/#sobre" onClick={() => scrollHomeSection("#sobre")}>Grupo W3</Link>
          </div>
          <div className="w3-nav-actions">
            <button className="w3-nav-primary" onClick={diagnostic}>Solicitar diagnóstico</button>
          </div>
        </div>

        <button className={`w3-menu-toggle ${isOpen ? "active" : ""}`} onClick={() => setIsOpen((value) => !value)} aria-label={isOpen ? "Fechar menu" : "Abrir menu"} aria-expanded={isOpen} aria-controls="w3-mobile-navigation">
          <span /><span />
        </button>
      </div>
    </nav>
  );
}
