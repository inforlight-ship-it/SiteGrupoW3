import { Activity, BellRing, Gauge, Network, Radar, ServerCog, ShieldAlert, ShieldCheck, Workflow } from "lucide-react";
import { motion } from "motion/react";

const socItems = [
  { icon: Radar, title: "Detecção", text: "Eventos e sinais de segurança centralizados para aumentar visibilidade sobre ameaças." },
  { icon: ShieldAlert, title: "Análise", text: "Contexto técnico para diferenciar ruído operacional de eventos que exigem resposta." },
  { icon: ShieldCheck, title: "Resposta", text: "Ações coordenadas para contenção, tratamento e evolução do ambiente." },
];

const nocItems = [
  { icon: Activity, title: "Disponibilidade", text: "Acompanhamento contínuo dos componentes que sustentam a operação de TI." },
  { icon: Gauge, title: "Performance", text: "Visibilidade sobre capacidade, comportamento e degradações da infraestrutura." },
  { icon: ServerCog, title: "Continuidade", text: "Atuação proativa para reduzir indisponibilidade e acelerar normalização." },
];

export function SocNoc() {
  return (
    <section id="soc-noc" className="w3-section w3-socnoc-section">
      <div className="w3-container">
        <div className="w3-socnoc-heading">
          <span className="w3-section-eyebrow">SOC + NOC 24×7</span>
          <h2 className="w3-section-title">
            Segurança e disponibilidade <strong>observadas como uma única operação.</strong>
          </h2>
          <p className="w3-section-lead">
            Incidentes de segurança e falhas de infraestrutura frequentemente se cruzam. A W3 conecta as duas visões para reduzir silos e acelerar decisões técnicas.
          </p>
        </div>

        <div className="w3-socnoc-shell">
          <motion.div
            className="w3-socnoc-side soc"
            initial={{ opacity: 0, x: -22 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55 }}
          >
            <div className="w3-socnoc-side-head">
              <div className="w3-socnoc-symbol"><ShieldCheck size={24} /></div>
              <div>
                <span>SECURITY OPERATIONS CENTER</span>
                <h3>SOC</h3>
              </div>
            </div>
            <div className="w3-socnoc-items">
              {socItems.map(({ icon: Icon, title, text }) => (
                <article key={title}>
                  <div><Icon size={18} /></div>
                  <span><strong>{title}</strong><small>{text}</small></span>
                </article>
              ))}
            </div>
          </motion.div>

          <div className="w3-socnoc-core">
            <div className="w3-socnoc-core-glow" />
            <div className="w3-socnoc-core-ring outer" />
            <div className="w3-socnoc-core-ring inner" />
            <div className="w3-socnoc-core-mark"><Workflow size={28} /><strong>W3</strong></div>
            <div className="w3-socnoc-core-copy">
              <span>OPERAÇÃO INTEGRADA</span>
              <strong>24×7</strong>
              <small>Segurança • Rede • Servidores • Dados</small>
            </div>
            <div className="w3-socnoc-pulse pulse-a" />
            <div className="w3-socnoc-pulse pulse-b" />
          </div>

          <motion.div
            className="w3-socnoc-side noc"
            initial={{ opacity: 0, x: 22 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55 }}
          >
            <div className="w3-socnoc-side-head">
              <div className="w3-socnoc-symbol"><Network size={24} /></div>
              <div>
                <span>NETWORK OPERATIONS CENTER</span>
                <h3>NOC</h3>
              </div>
            </div>
            <div className="w3-socnoc-items">
              {nocItems.map(({ icon: Icon, title, text }) => (
                <article key={title}>
                  <div><Icon size={18} /></div>
                  <span><strong>{title}</strong><small>{text}</small></span>
                </article>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="w3-socnoc-footnote">
          <BellRing size={16} />
          <span>Representação institucional da operação. Não exibe eventos ou indicadores em tempo real.</span>
        </div>
      </div>
    </section>
  );
}
