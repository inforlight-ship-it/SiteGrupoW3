import { useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, CheckCircle2, RotateCcw, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { SEO } from "../components/SEO";
import { trackEvent } from "../lib/analytics";

type Answer = 0 | 1 | 2;

const questions = [
  "Contas administrativas e acessos críticos utilizam MFA?",
  "Os endpoints possuem EDR ou proteção equivalente com gestão centralizada?",
  "Existe uma estratégia de backup isolada, protegida ou imutável para dados críticos?",
  "A empresa testa periodicamente a restauração de backups e serviços essenciais?",
  "Rede, servidores e eventos de segurança são monitorados de forma contínua?",
  "Existe um processo documentado de resposta a incidentes de segurança?",
  "Firewall e regras de borda são revisados e administrados de forma recorrente?",
  "Acessos privilegiados são inventariados, revisados e removidos quando deixam de ser necessários?",
] as const;

const options: { label: string; value: Answer; helper: string }[] = [
  { label: "Sim", value: 2, helper: "Controle implementado e utilizado" },
  { label: "Parcial", value: 1, helper: "Existe, mas ainda não é consistente" },
  { label: "Não", value: 0, helper: "Controle ausente ou não validado" },
];

function posture(score: number) {
  if (score >= 70) return { title: "Controles mais estruturados", tone: "strong", text: "O cenário indica uma base mais madura, mas ainda merece validação técnica e acompanhamento contínuo." };
  if (score >= 40) return { title: "Maturidade intermediária", tone: "medium", text: "Existem controles relevantes, porém algumas lacunas podem aumentar risco operacional ou dificultar uma resposta coordenada." };
  return { title: "Exposição potencial elevada", tone: "attention", text: "O resultado sugere priorizar controles básicos de proteção, visibilidade e recuperação antes de ampliar a complexidade do ambiente." };
}

export function SecurityPostureCheckPage() {
  const [answers, setAnswers] = useState<Record<number, Answer>>({});
  const [showResult, setShowResult] = useState(false);

  const answered = Object.keys(answers).length;
  const score = useMemo(() => {
    const total = Object.values(answers).reduce<number>((sum, value) => sum + value, 0);
    return Math.round((total / (questions.length * 2)) * 100);
  }, [answers]);
  const result = posture(score);

  const finish = () => {
    if (answered !== questions.length) return;
    setShowResult(true);
    trackEvent("security_check_completed", { score_band: result.title, score });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const reset = () => {
    setAnswers({});
    setShowResult(false);
  };

  const whatsapp = () => {
    const message = encodeURIComponent(
      `Olá! Fiz o diagnóstico preliminar no site do Grupo W3 e obtive ${score}/100 (${result.title}). Gostaria de conversar sobre uma avaliação técnica do meu ambiente.`,
    );
    trackEvent("security_check_whatsapp", { score_band: result.title, score });
    window.open(`https://wa.me/5515988189999?text=${message}`, "_blank", "noopener,noreferrer");
  };

  return (
    <main className="w3-check-page">
      <SEO
        title="Diagnóstico de Segurança Empresarial | Grupo W3"
        description="Faça uma avaliação preliminar da postura de segurança da sua empresa em poucos minutos. O resultado é orientativo e não substitui uma análise técnica."
        path="/diagnostico-seguranca"
      />

      <div className="w3-container">
        <Link to="/" className="w3-check-back"><ArrowLeft size={16} /> Voltar para o site</Link>

        {!showResult ? (
          <>
            <header className="w3-check-heading">
              <span className="w3-section-eyebrow">SECURITY POSTURE CHECK</span>
              <h1>Uma leitura inicial da sua <strong>postura de segurança.</strong></h1>
              <p>Responda oito perguntas objetivas. Nenhuma resposta é enviada ao Grupo W3; o cálculo acontece somente no seu navegador.</p>
              <div className="w3-check-progress" aria-label={`${answered} de ${questions.length} perguntas respondidas`}>
                <div style={{ width: `${(answered / questions.length) * 100}%` }} />
              </div>
              <small>{answered} de {questions.length} respondidas</small>
            </header>

            <section className="w3-check-list">
              {questions.map((question, index) => (
                <article className="w3-check-question" key={question}>
                  <div className="w3-check-question-head">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <h2>{question}</h2>
                  </div>
                  <div className="w3-check-options" role="radiogroup" aria-label={question}>
                    {options.map((option) => (
                      <button
                        type="button"
                        key={option.label}
                        className={answers[index] === option.value ? "selected" : ""}
                        onClick={() => setAnswers((current) => ({ ...current, [index]: option.value }))}
                        aria-pressed={answers[index] === option.value}
                      >
                        <strong>{option.label}</strong>
                        <span>{option.helper}</span>
                        {answers[index] === option.value && <CheckCircle2 size={17} />}
                      </button>
                    ))}
                  </div>
                </article>
              ))}
            </section>

            <div className="w3-check-finish">
              <div>
                <strong>{answered === questions.length ? "Pronto para calcular." : "Responda todas as perguntas para gerar o resultado."}</strong>
                <span>O indicador é educacional e não equivale a auditoria, pentest ou assessment formal.</span>
              </div>
              <button type="button" onClick={finish} disabled={answered !== questions.length}>
                Ver resultado <ArrowRight size={18} />
              </button>
            </div>
          </>
        ) : (
          <section className={`w3-check-result ${result.tone}`}>
            <div className="w3-check-score">
              <ShieldCheck size={28} />
              <strong>{score}</strong>
              <span>/100</span>
            </div>
            <div className="w3-check-result-copy">
              <span className="w3-section-eyebrow">RESULTADO PRELIMINAR</span>
              <h1>{result.title}</h1>
              <p>{result.text}</p>
              <p className="w3-check-disclaimer">Este resultado depende exclusivamente das respostas fornecidas e serve como triagem educacional. Uma conclusão sobre risco, conformidade ou maturidade exige avaliação técnica do ambiente.</p>
              <div className="w3-check-result-actions">
                <button type="button" className="w3-btn-primary" onClick={whatsapp}>Conversar com a W3 <ArrowRight size={18} /></button>
                <button type="button" className="w3-btn-secondary" onClick={reset}><RotateCcw size={17} /> Refazer diagnóstico</button>
              </div>
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
