import { ArrowRight, CheckCircle2, CircleAlert } from "lucide-react";
import { motion } from "motion/react";

const contrasts = [
  ["Alertas espalhados e sem contexto", "Monitoramento centralizado e priorizado"],
  ["TI reage quando o problema já apareceu", "Operação proativa com acompanhamento contínuo"],
  ["Backup existe, mas a recuperação é incerta", "Backup tratado junto com continuidade e recuperação"],
  ["Pouca visibilidade sobre rede e servidores", "Indicadores e acompanhamento da infraestrutura"],
  ["Fornecedores separados e responsabilidades difusas", "Um parceiro coordenando segurança e infraestrutura"],
  ["Incidentes viram urgências improvisadas", "Processo estruturado para detectar, responder e recuperar"],
];

export function BeforeAfter() {
  return (
    <section className="w3-section w3-before-after" id="antes-depois">
      <div className="w3-container">
        <div className="w3-before-after-head">
          <div>
            <span className="w3-section-eyebrow">ANTES E DEPOIS DA W3</span>
            <h2 className="w3-section-title">Tecnologia deixa de ser um conjunto de urgências e passa a ser <strong>uma operação coordenada.</strong></h2>
          </div>
          <p className="w3-section-lead">A diferença não está apenas nas ferramentas. Está em conectar visibilidade, responsabilidade, resposta e continuidade em torno do negócio.</p>
        </div>

        <div className="w3-before-after-table" role="table" aria-label="Comparação entre uma operação fragmentada e uma operação acompanhada pela W3">
          <div className="w3-ba-header" role="row">
            <div role="columnheader"><CircleAlert size={17} /> Cenário fragmentado</div>
            <div className="w3-ba-arrow" aria-hidden="true"><ArrowRight size={18} /></div>
            <div role="columnheader"><CheckCircle2 size={17} /> Com uma operação coordenada pela W3</div>
          </div>
          {contrasts.map(([before, after], index) => (
            <motion.div
              key={before}
              className="w3-ba-row"
              role="row"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.45 }}
              transition={{ duration: 0.4, delay: index * 0.045 }}
            >
              <div role="cell"><span>{String(index + 1).padStart(2, "0")}</span>{before}</div>
              <div className="w3-ba-arrow" aria-hidden="true"><ArrowRight size={16} /></div>
              <div role="cell"><CheckCircle2 size={16} />{after}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
