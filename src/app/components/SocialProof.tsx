import { Clock3, Layers3, ShieldCheck, Trophy } from "lucide-react";
import { motion } from "motion/react";

const proofItems = [
  {
    icon: Trophy,
    value: "25+",
    label: "anos de experiência",
    detail: "Tecnologia, infraestrutura e cibersegurança aplicadas ao negócio.",
  },
  {
    icon: Clock3,
    value: "24×7",
    label: "operação contínua",
    detail: "SOC e NOC conectados à realidade operacional dos clientes.",
  },
  {
    icon: Layers3,
    value: "12",
    label: "frentes de serviço",
    detail: "Da estratégia de TI à proteção de endpoints, rede, dados e acesso.",
  },
  {
    icon: ShieldCheck,
    value: "End-to-end",
    label: "visão integrada",
    detail: "Uma única equipe conectando segurança, infraestrutura e continuidade.",
  },
];

export function SocialProof() {
  return (
    <section className="w3-proof-section" aria-label="Indicadores de experiência do Grupo W3">
      <div className="w3-container">
        <div className="w3-proof-heading">
          <span className="w3-section-eyebrow">EXPERIÊNCIA QUE SUSTENTA A OPERAÇÃO</span>
          <p>
            Mais do que fornecedores de tecnologia, atuamos como parceiro técnico em ambientes onde disponibilidade, segurança e continuidade são parte do negócio.
          </p>
        </div>

        <div className="w3-proof-grid">
          {proofItems.map(({ icon: Icon, value, label, detail }, index) => (
            <motion.article
              key={label}
              className="w3-proof-card"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
            >
              <div className="w3-proof-icon"><Icon size={20} /></div>
              <strong>{value}</strong>
              <span>{label}</span>
              <p>{detail}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
