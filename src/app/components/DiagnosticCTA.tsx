import { ArrowRight, CheckCircle2, ClipboardCheck, ShieldQuestion } from "lucide-react";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";

const topics = ["Segurança e endpoints", "Rede e disponibilidade", "Backup e recuperação", "Governança e riscos"];

export function DiagnosticCTA() {
  const navigate = useNavigate();

  return (
    <section id="diagnostico" className="w3-diagnostic-section">
      <div className="w3-container">
        <motion.div
          className="w3-diagnostic-card"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55 }}
        >
          <div className="w3-diagnostic-glow" aria-hidden="true" />
          <div className="w3-diagnostic-copy">
            <span className="w3-section-eyebrow">PRÓXIMO PASSO</span>
            <div className="w3-diagnostic-icon"><ClipboardCheck size={24} /></div>
            <h2>Quer entender onde sua operação está mais exposta?</h2>
            <p>
              Faça uma triagem rápida de oito controles essenciais e, se fizer sentido, use o resultado como ponto de partida para conversar com a equipe W3. O diagnóstico acontece localmente no navegador e não envia respostas automaticamente.
            </p>
            <button onClick={() => navigate("/diagnostico-seguranca")} className="w3-diagnostic-button">
              Fazer diagnóstico inicial <ArrowRight size={18} />
            </button>
            <small>O resultado é orientativo e não substitui assessment, auditoria, pentest ou análise técnica do ambiente.</small>
          </div>

          <div className="w3-diagnostic-panel" aria-label="Temas avaliados em uma conversa inicial">
            <div className="w3-diagnostic-panel-head">
              <ShieldQuestion size={22} />
              <span>
                <strong>Visão inicial</strong>
                <small>Pontos que podem entrar na conversa</small>
              </span>
            </div>
            <div className="w3-diagnostic-list">
              {topics.map((topic, index) => (
                <div key={topic}>
                  <span className="w3-diagnostic-index">0{index + 1}</span>
                  <strong>{topic}</strong>
                  <CheckCircle2 size={17} />
                </div>
              ))}
            </div>
            <div className="w3-diagnostic-status"><i /> análise orientada ao contexto do negócio</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
