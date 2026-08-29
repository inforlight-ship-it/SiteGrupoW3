import { Activity, BellRing, Crosshair, RefreshCcw, ShieldCheck } from "lucide-react";
import { motion } from "motion/react";

const stages = [
  {
    icon: Crosshair,
    number: "01",
    title: "Detectar",
    text: "Telemetria de rede, endpoints, servidores e serviços centralizada para encontrar sinais antes que virem indisponibilidade.",
  },
  {
    icon: BellRing,
    number: "02",
    title: "Priorizar",
    text: "Eventos são contextualizados para separar ruído de risco real e direcionar atenção para o que pode afetar o negócio.",
  },
  {
    icon: ShieldCheck,
    number: "03",
    title: "Responder",
    text: "Ações coordenadas entre segurança e infraestrutura reduzem o tempo entre identificação, contenção e normalização.",
  },
  {
    icon: RefreshCcw,
    number: "04",
    title: "Recuperar",
    text: "Backup, continuidade e melhoria pós-incidente fecham o ciclo e aumentam a resiliência da operação.",
  },
];

const monitoredLayers = [
  ["Endpoints", "EDR / resposta"],
  ["Rede", "Firewall / disponibilidade"],
  ["Servidores", "RMM / performance"],
  ["Dados", "Backup / recuperação"],
  ["Identidade", "Acesso / conformidade"],
];

export function SecurityOperations() {
  return (
    <section id="operacao" className="w3-section w3-operations-section">
      <div className="w3-container">
        <div className="w3-operations-grid">
          <div className="w3-operations-copy">
            <span className="w3-section-eyebrow">OPERAÇÃO DE SEGURANÇA</span>
            <h2 className="w3-section-title">Segurança não é uma ferramenta. <strong>É um ciclo operacional.</strong></h2>
            <p className="w3-section-lead">
              A proposta da W3 é conectar monitoramento, infraestrutura, proteção e recuperação para que o ambiente seja observado como um todo — não como produtos isolados.
            </p>

            <div className="w3-operation-stages">
              {stages.map(({ icon: Icon, number, title, text }, index) => (
                <motion.article
                  key={title}
                  className="w3-operation-stage"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                >
                  <div className="w3-operation-icon"><Icon size={19} /></div>
                  <div>
                    <span className="w3-operation-number">{number}</span>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>

          <motion.div
            className="w3-ops-console"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65 }}
            aria-label="Representação visual da cobertura operacional"
          >
            <div className="w3-console-topbar">
              <div className="w3-console-dots"><span /><span /><span /></div>
              <span>VISÃO OPERACIONAL</span>
              <div className="w3-console-status"><i /> cobertura integrada</div>
            </div>

            <div className="w3-console-radar">
              <div className="w3-radar-grid" />
              <div className="w3-radar-scan" />
              <div className="w3-radar-core">
                <Activity size={26} />
                <span>W3</span>
              </div>
              <span className="w3-radar-node node-a" />
              <span className="w3-radar-node node-b" />
              <span className="w3-radar-node node-c" />
            </div>

            <div className="w3-console-layers">
              {monitoredLayers.map(([name, description]) => (
                <div className="w3-console-layer" key={name}>
                  <span className="w3-layer-dot" />
                  <div>
                    <strong>{name}</strong>
                    <small>{description}</small>
                  </div>
                  <span className="w3-layer-state">monitorado</span>
                </div>
              ))}
            </div>

            <p className="w3-console-caption">Visual conceitual da arquitetura de cobertura. Não representa métricas em tempo real.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
