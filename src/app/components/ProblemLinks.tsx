import { ArrowUpRight, Radar, ShieldCheck, ServerCog, Workflow } from "lucide-react";
import { Link } from "react-router-dom";

const links = [
  ["Segurança para empresas", "/seguranca-para-empresas", ShieldCheck],
  ["Monitoramento de TI 24×7", "/monitoramento-ti-24x7", Radar],
  ["Proteção contra ransomware", "/protecao-contra-ransomware", ShieldCheck],
  ["Backup e recuperação", "/backup-e-recuperacao", ServerCog],
  ["SOC para empresas", "/soc-para-empresas", Radar],
  ["NOC para empresas", "/noc-para-empresas", ServerCog],
  ["Terceirização de TI", "/terceirizacao-de-ti", Workflow],
  ["Consultoria em cibersegurança", "/consultoria-ciberseguranca", ShieldCheck],
] as const;

export function ProblemLinks() {
  return (
    <section className="w3-section w3-problem-links">
      <div className="w3-container">
        <div className="w3-problem-links-head">
          <div><span className="w3-section-eyebrow">POR ONDE COMEÇAR</span><h2 className="w3-section-title">Nem todo cliente procura uma ferramenta. Às vezes ele procura <strong>resolver um problema.</strong></h2></div>
          <p className="w3-section-lead">Explore a W3 pelo desafio que sua empresa enfrenta hoje e veja quais capacidades se conectam a esse cenário.</p>
        </div>
        <div className="w3-problem-links-grid">
          {links.map(([label, to, Icon], index) => (
            <Link to={to} key={to}>
              <span>0{index + 1}</span>
              <div><Icon size={21} /></div>
              <strong>{label}</strong>
              <ArrowUpRight size={17} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
