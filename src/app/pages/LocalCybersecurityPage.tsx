import { ArrowLeft, ArrowRight, Building2, CheckCircle2, MapPin, Radar, ServerCog, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { SEO } from "../components/SEO";
import { trackEvent } from "../lib/analytics";

const demands = [
  { title: "SOC 24×7", text: "Monitoramento, triagem e resposta coordenada a eventos de segurança.", to: "/servicos/soc", icon: ShieldCheck },
  { title: "NOC 24×7", text: "Acompanhamento de disponibilidade, performance e infraestrutura crítica.", to: "/servicos/noc", icon: Radar },
  { title: "Proteção contra ransomware", text: "Estratégia em camadas envolvendo endpoint, rede, monitoramento e recuperação.", to: "/protecao-contra-ransomware", icon: ShieldCheck },
  { title: "Backup e recuperação", text: "Continuidade, proteção de dados e processos de restauração alinhados ao negócio.", to: "/backup-e-recuperacao", icon: ServerCog },
  { title: "Firewall empresarial", text: "Arquitetura, políticas, VPN, segmentação e gestão recorrente do perímetro.", to: "/servicos/firewall", icon: ShieldCheck },
  { title: "CIO as a Service", text: "Direção de tecnologia para empresas que precisam coordenar TI sem ampliar toda a estrutura interna.", to: "/servicos/cio-as-a-service", icon: Building2 },
] as const;

const localSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Grupo W3",
  url: "https://grupow3.com/ciberseguranca-sorocaba",
  telephone: "+55-15-98818-9999",
  description: "Cibersegurança, SOC, NOC, infraestrutura, backup e gestão de TI para empresas em Sorocaba e região.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Sorocaba",
    addressRegion: "SP",
    addressCountry: "BR",
  },
  areaServed: {
    "@type": "City",
    name: "Sorocaba",
  },
  serviceType: ["Cibersegurança", "SOC 24x7", "NOC 24x7", "Infraestrutura de TI", "Backup", "Consultoria de TI"],
};

export function LocalCybersecurityPage() {
  const contact = () => {
    trackEvent("local_seo_whatsapp", { location: "sorocaba" });
    const message = encodeURIComponent("Olá! Encontrei a página do Grupo W3 sobre cibersegurança em Sorocaba e gostaria de conversar sobre o ambiente da minha empresa.");
    window.open(`https://wa.me/5515988189999?text=${message}`, "_blank", "noopener,noreferrer");
  };

  return (
    <main className="w3-local-page">
      <SEO
        title="Cibersegurança em Sorocaba | SOC, NOC e TI | Grupo W3"
        description="Cibersegurança em Sorocaba com SOC e NOC 24×7, firewall, EDR, backup, infraestrutura e gestão de TI para empresas da região."
        path="/ciberseguranca-sorocaba"
        schema={localSchema}
      />

      <section className="w3-local-hero">
        <div className="w3-local-grid" aria-hidden="true" />
        <div className="w3-container">
          <Link to="/" className="w3-local-back"><ArrowLeft size={16} /> Voltar para o Grupo W3</Link>
          <div className="w3-local-hero-layout">
            <div>
              <span className="w3-section-eyebrow">CIBERSEGURANÇA EM SOROCABA</span>
              <h1>Segurança e operação de TI para empresas em <strong>Sorocaba e região.</strong></h1>
              <p>O Grupo W3 conecta cibersegurança, infraestrutura, monitoramento e gestão para empresas que precisam reduzir risco sem fragmentar a operação entre diferentes fornecedores.</p>
              <div className="w3-local-actions">
                <button type="button" className="w3-btn-primary" onClick={contact}>Falar com a W3 <ArrowRight size={18} /></button>
                <Link className="w3-btn-secondary" to="/diagnostico-seguranca">Fazer diagnóstico inicial</Link>
              </div>
            </div>
            <aside className="w3-local-location" aria-label="Atendimento regional">
              <MapPin size={25} />
              <span>BASE OPERACIONAL</span>
              <strong>Sorocaba · SP</strong>
              <p>Atendimento corporativo regional e projetos em outras localidades conforme escopo.</p>
            </aside>
          </div>
        </div>
      </section>

      <section className="w3-section w3-local-context">
        <div className="w3-container w3-local-context-grid">
          <div>
            <span className="w3-section-eyebrow">ATUAÇÃO CORPORATIVA</span>
            <h2 className="w3-section-title">Proximidade local com <strong>visão de ambiente completo.</strong></h2>
          </div>
          <div className="w3-local-context-copy">
            <p>A necessidade de uma empresa raramente termina em uma única ferramenta. Firewall depende de rede, endpoint depende de identidade, backup depende de recuperação e monitoramento depende de um processo de resposta.</p>
            <p>A atuação da W3 procura conectar essas dependências para que decisões técnicas considerem disponibilidade, risco e impacto para o negócio.</p>
          </div>
        </div>
      </section>

      <section className="w3-section w3-local-demands">
        <div className="w3-container">
          <div className="w3-section-head w3-section-head-split">
            <div><span className="w3-section-eyebrow">DEMANDAS MAIS COMUNS</span><h2 className="w3-section-title">Do incidente pontual à <strong>operação contínua.</strong></h2></div>
            <p className="w3-section-lead">A entrada pode acontecer por uma necessidade específica. O desenho final considera como essa demanda se conecta ao restante da infraestrutura e da segurança.</p>
          </div>
          <div className="w3-local-demand-grid">
            {demands.map(({ title, text, to, icon: Icon }) => (
              <Link to={to} key={title}>
                <div><Icon size={20} /></div>
                <h3>{title}</h3>
                <p>{text}</p>
                <span>Conhecer solução <ArrowRight size={15} /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="w3-section w3-local-process">
        <div className="w3-container">
          <div className="w3-section-head"><span className="w3-section-eyebrow">COMO COMEÇAMOS</span><h2 className="w3-section-title">Primeiro entendemos o ambiente. <strong>Depois definimos a tecnologia.</strong></h2></div>
          <div className="w3-local-steps">
            <article><span>01</span><div><CheckCircle2 size={20} /><h3>Contexto</h3><p>Entender operação, infraestrutura, criticidade, equipe interna e principais dores.</p></div></article>
            <article><span>02</span><div><CheckCircle2 size={20} /><h3>Prioridades</h3><p>Organizar riscos e dependências para separar urgência técnica de evolução estruturada.</p></div></article>
            <article><span>03</span><div><CheckCircle2 size={20} /><h3>Operação</h3><p>Definir serviços, responsabilidades, ferramentas e acompanhamento compatíveis com o cenário.</p></div></article>
          </div>
        </div>
      </section>

      <section className="w3-local-cta">
        <div className="w3-container">
          <div className="w3-local-cta-card">
            <div><MapPin size={24} /><span className="w3-section-eyebrow">SOROCABA E REGIÃO</span><h2>Quer avaliar segurança, infraestrutura ou operação de TI da sua empresa?</h2><p>Começamos pela situação atual e pelas prioridades do negócio, sem partir de uma ferramenta pré-definida.</p></div>
            <button type="button" onClick={contact}>Conversar com a equipe <ArrowRight size={18} /></button>
          </div>
        </div>
      </section>
    </main>
  );
}
