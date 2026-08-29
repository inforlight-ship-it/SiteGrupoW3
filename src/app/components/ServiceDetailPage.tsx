import { motion } from "motion/react";
import { ArrowLeft, ArrowUpRight, Check, ChevronRight, Home, LucideIcon } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { SEO } from "./SEO";

interface ServiceDetailPageProps {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  benefits: string[];
  features: string[];
  technologies?: string[];
  whatsappMessage: string;
  color: string;
}

export function ServiceDetailPage({ icon: Icon, title, subtitle, description, imageUrl, benefits, features, technologies, whatsappMessage, color }: ServiceDetailPageProps) {
  const location = useLocation();
  const handleContact = () => window.open(`https://wa.me/5515988189999?text=${encodeURIComponent(whatsappMessage)}`, "_blank");
  const seoDescription = `${description} Conheça a abordagem do Grupo W3 para ${title.toLowerCase()} em ambientes empresariais.`;
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: title,
    description: seoDescription,
    provider: { "@type": "Organization", name: "Grupo W3", url: "https://grupow3.com" },
    areaServed: "BR",
    url: `https://grupow3.com${location.pathname}`,
  };

  return (
    <main className="w3-detail-page" data-source-image={imageUrl} data-legacy-color={color}>
      <SEO title={`${title} | Grupo W3`} description={seoDescription} path={location.pathname} schema={schema} />
      <div className="w3-container">
        <nav className="w3-detail-breadcrumb" aria-label="Breadcrumb">
          <Link to="/"><Home size={14} /> Início</Link><ChevronRight size={13} /><Link to="/#servicos">Soluções</Link><ChevronRight size={13} /><span>{title}</span>
        </nav>

        <Link to="/#servicos" className="w3-detail-back"><ArrowLeft size={16} /> Voltar para soluções</Link>

        <section className="w3-detail-hero">
          <div className="w3-detail-grid" />
          <motion.div className="w3-detail-icon" initial={{ opacity: 0, scale: .92 }} animate={{ opacity: 1, scale: 1 }}><Icon size={34} /></motion.div>
          <motion.div className="w3-detail-copy" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .08 }}>
            <span className="w3-section-eyebrow">SOLUÇÃO GRUPO W3</span>
            <h1>{title}</h1>
            <p className="w3-detail-subtitle">{subtitle}</p>
            <p className="w3-detail-description">{description}</p>
            <button className="w3-btn-primary" onClick={handleContact}>Falar com especialista <ArrowUpRight size={16} /></button>
          </motion.div>
          <div className="w3-detail-signal" aria-hidden="true"><i /><i /><i /><i /></div>
        </section>

        <section className="w3-detail-columns">
          <motion.article initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="w3-detail-kicker">IMPACTO PARA O NEGÓCIO</span><h2>Benefícios</h2>
            <ul>{benefits.map((item) => <li key={item}><span><Check size={14} /></span>{item}</li>)}</ul>
          </motion.article>
          <motion.article initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="w3-detail-kicker">ESCOPO DA SOLUÇÃO</span><h2>Funcionalidades</h2>
            <ul>{features.map((item) => <li key={item}><span><Check size={14} /></span>{item}</li>)}</ul>
          </motion.article>
        </section>

        {technologies && technologies.length > 0 && (
          <section className="w3-detail-tech">
            <div><span className="w3-detail-kicker">TECNOLOGIAS & ECOSSISTEMA</span><h2>Integrações e parceiros relacionados à solução</h2></div>
            <div>{technologies.map((tech) => <span key={tech}>{tech}</span>)}</div>
          </section>
        )}

        <section className="w3-detail-cta">
          <div><span className="w3-section-eyebrow">PRÓXIMO PASSO</span><h2>Entenda como essa solução se encaixa no seu ambiente.</h2><p>Uma avaliação inicial ajuda a definir escopo, prioridade e dependências antes de qualquer implementação.</p></div>
          <button className="w3-btn-primary" onClick={handleContact}>Conversar com a W3 <ArrowUpRight size={16} /></button>
        </section>
      </div>
    </main>
  );
}
