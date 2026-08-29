import { ArrowUpRight, Building2, Network, Route, Server, ShieldCheck, UsersRound } from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

const cases = [
  {
    index: "01",
    client: "Fazenda Boa Vista",
    segment: "Infraestrutura + segurança",
    icon: Building2,
    headline: "Tecnologia de ponta conectada à operação.",
    description:
      "Atuação como parceiro tecnológico em soluções para servidores, controle de acesso e cibersegurança, integrando diferentes camadas críticas do ambiente.",
    tags: ["Servidores", "Controle de acesso", "Cibersegurança"],
    visual: [Server, UsersRound, ShieldCheck],
    link: "/cases/fazenda-boa-vista",
  },
  {
    index: "02",
    client: "Adimax",
    segment: "Rede corporativa",
    icon: Network,
    headline: "Infraestrutura Laserway para um prédio corporativo de grande escala.",
    description:
      "Implementação de solução Laserway em prédio corporativo com aproximadamente 500 pontos de rede, estruturando conectividade para a operação do ambiente.",
    tags: ["Laserway", "500 pontos de rede", "Infraestrutura"],
    visual: [Network, Route, Building2],
    link: "/cases/adimax",
  },
  {
    index: "03",
    client: "Diso",
    segment: "CIO as a Service",
    icon: Route,
    headline: "A TI da empresa conduzida como parte da estratégia do negócio.",
    description:
      "Em uma operação logística sem equipe interna de TI, a W3 auxilia de ponta a ponta nos processos de tecnologia, atuando de forma próxima ao papel de uma diretoria de TI externa.",
    tags: ["Logística", "Gestão de TI", "CIO as a Service"],
    visual: [Route, Server, ShieldCheck],
    link: "/cases/diso",
  },
];

export function CaseStudies() {
  return (
    <section id="cases" className="w3-section w3-cases-section">
      <div className="w3-container">
        <div className="w3-cases-header">
          <div>
            <span className="w3-section-eyebrow">CASES DE ATUAÇÃO</span>
            <h2 className="w3-section-title">
              Tecnologia aplicada a <strong>desafios reais de operação.</strong>
            </h2>
          </div>
          <p className="w3-section-lead">
            Três exemplos de como a W3 atua em contextos diferentes — infraestrutura de rede, segurança, servidores e gestão estratégica de TI.
          </p>
        </div>

        <div className="w3-cases-grid">
          {cases.map((item, caseIndex) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.client}
                className="w3-case-card"
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, delay: caseIndex * 0.07 }}
              >
                <div className="w3-case-topline">
                  <span>{item.index}</span>
                  <span>{item.segment}</span>
                </div>

                <div className="w3-case-visual" aria-hidden="true">
                  <div className="w3-case-visual-grid" />
                  <div className="w3-case-client-mark"><Icon size={27} /></div>
                  <div className="w3-case-flow-line" />
                  {item.visual.map((VisualIcon, iconIndex) => (
                    <div className={`w3-case-node node-${iconIndex + 1}`} key={iconIndex}>
                      <VisualIcon size={18} />
                    </div>
                  ))}
                </div>

                <div className="w3-case-content">
                  <span className="w3-case-client">{item.client}</span>
                  <h3>{item.headline}</h3>
                  <p>{item.description}</p>
                  <div className="w3-case-tags">
                    {item.tags.map((tag) => <span key={tag}>{tag}</span>)}
                  </div>
                </div>

                <div className="w3-case-footer">
                  <Link to={item.link} className="w3-case-footer-link" aria-label={`Conhecer o case ${item.client}`}>
                    <span>Conhecer case completo</span>
                    <ArrowUpRight size={17} />
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
