import { ArrowRight, CheckCircle2, ClipboardCheck, ShieldQuestion } from "lucide-react";
import { motion } from "motion/react";

const topics = ["Segurança e endpoints", "Rede e disponibilidade", "Backup e recuperação", "Governança e riscos"];

export function DiagnosticCTA() {
  const requestDiagnostic = () => {
    const message = encodeURIComponent(
      "Olá! Gostaria de solicitar uma avaliação inicial da segurança e infraestrutura da minha empresa com o Grupo W3."
    );
    window.open(`https://wa.me/5515988189999?text=${message}`, "_blank");
  };

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
              Converse com a equipe W3 para uma avaliação inicial do cenário de segurança e infraestrutura. O objetivo é identificar prioridades e direcionar os próximos passos — sem transformar a conversa em uma lista genérica de produtos.
            </p>
            <button onClick={requestDiagnostic} className="w3-diagnostic-button">
              Solicitar avaliação inicial <ArrowRight size={18} />
            </button>
            <small>O contato é iniciado pelo WhatsApp e a avaliação depende das informações fornecidas sobre o ambiente.</small>
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
