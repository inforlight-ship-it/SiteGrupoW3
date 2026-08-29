import { Instagram, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { Logo } from "./Logo";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w3-footer">
      <div className="w3-container">
        <div className="w3-footer-top">
          <div className="w3-footer-brand">
            <Logo className="w3-footer-logo" />
            <p>Cibersegurança, infraestrutura e operação de TI conectadas para reduzir risco e manter o negócio disponível.</p>
            <div className="w3-footer-social">
              <a href="https://www.instagram.com/grupow3" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={17} /></a>
              <a href="mailto:contato@grupow3.com" aria-label="Email"><Mail size={17} /></a>
              <a href="tel:+5515988189999" aria-label="Telefone"><Phone size={17} /></a>
            </div>
          </div>

          <div className="w3-footer-column">
            <span>Soluções</span>
            <Link to="/servicos/soc">SOC</Link>
            <Link to="/servicos/noc">NOC</Link>
            <Link to="/servicos/protecoes-edr">EDR</Link>
            <Link to="/servicos/firewall">Firewall</Link>
            <Link to="/servicos/backup-as-a-service">Backup</Link>
          </div>

          <div className="w3-footer-column">
            <span>Estratégia & Infra</span>
            <Link to="/servicos/cio-as-a-service">CIO as a Service</Link>
            <Link to="/servicos/dpo-as-a-service">DPO as a Service</Link>
            <Link to="/servicos/gerenciamento-datacenter">Datacenter</Link>
            <Link to="/servicos/rmm">RMM</Link>
            <Link to="/servicos/controle-acesso">Controle de acesso</Link>
          </div>

          <div className="w3-footer-column w3-footer-contact">
            <span>Contato</span>
            <a href="mailto:contato@grupow3.com">contato@grupow3.com</a>
            <a href="tel:+5515988189999">+55 (15) 98818-9999</a>
            <p>Sorocaba, SP — Brasil</p>
            <div className="w3-footer-availability"><i /> atendimento corporativo</div>
          </div>
        </div>

        <div className="w3-footer-bottom">
          <p>© {currentYear} Grupo W3 Cibersegurança. Todos os direitos reservados.</p>
          <div>
            <Link to="/privacidade">Privacidade</Link>
            <Link to="/cookies">Cookies</Link>
            <Link to="/termos-de-uso">Termos</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
