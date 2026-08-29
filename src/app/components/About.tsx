import { motion } from "motion/react";
import { Check, CloudCog, Fingerprint, Network, Server, ShieldCheck } from "lucide-react";

const strengths = [
  "Visão integrada de segurança e infraestrutura",
  "Operação e suporte para ambientes críticos",
  "Governança, LGPD e continuidade de negócio",
  "Projetos desenhados para a realidade de cada empresa",
];

const perimeter = [
  { icon: Fingerprint, label: "Identidade" },
  { icon: ShieldCheck, label: "Endpoints" },
  { icon: Network, label: "Rede" },
  { icon: Server, label: "Datacenter" },
  { icon: CloudCog, label: "Serviços" },
];

export function About() {
  return (
    <section id="sobre" className="w3-section w3-about-section">
      <div className="w3-container">
        <div className="w3-about-grid">
          <motion.div className="w3-about-copy" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }}>
            <span className="w3-section-eyebrow">GRUPO W3</span>
            <h2 className="w3-section-title">Tecnologia precisa proteger o negócio, <strong>não complicar a operação.</strong></h2>
            <p className="w3-section-lead">
              O Grupo W3 atua em cibersegurança e Tecnologia da Informação conectando estratégia, infraestrutura, monitoramento e proteção em uma mesma visão operacional.
            </p>
            <p className="w3-about-text">
              Em vez de tratar firewall, endpoint, backup, rede e governança como projetos independentes, estruturamos a proteção considerando dependências, disponibilidade e impacto para o negócio.
            </p>

            <div className="w3-about-checks">
              {strengths.map((item) => (
                <div className="w3-about-check" key={item}><span><Check size={15} /></span>{item}</div>
              ))}
            </div>

            <div className="w3-about-metrics">
              <div><strong>25+</strong><span>anos de experiência</span></div>
              <div><strong>24×7</strong><span>operação monitorada</span></div>
              <div><strong>12</strong><span>frentes de serviço</span></div>
            </div>
          </motion.div>

          <motion.div className="w3-security-map" initial={{ opacity: 0, scale: .97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: .65 }} aria-label="Mapa conceitual de proteção integrada">
            <div className="w3-map-grid" />
            <div className="w3-map-orbit orbit-one" />
            <div className="w3-map-orbit orbit-two" />
            <div className="w3-map-core">
              <ShieldCheck size={30} />
              <strong>W3</strong>
              <span>proteção integrada</span>
            </div>
            {perimeter.map(({ icon: Icon, label }, index) => (
              <div className={`w3-map-node node-${index + 1}`} key={label}>
                <Icon size={17} />
                <span>{label}</span>
              </div>
            ))}
            <div className="w3-map-caption">Pessoas · processos · tecnologia · continuidade</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
