import { ArrowLeft, ArrowRight, BellRing, FileText, Fingerprint, Mail, Network, Radar, Server, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { SEO } from "../../components/SEO";

const monitored = [
  { icon: ShieldCheck, title: "Endpoints", text: "Eventos e sinais de proteção dos dispositivos conectados ao ambiente corporativo." },
  { icon: Network, title: "Rede e perímetro", text: "Firewalls, tráfego e camadas de acesso que ajudam a contextualizar comportamento suspeito." },
  { icon: Fingerprint, title: "Identidade e acesso", text: "Eventos de autenticação e uso de credenciais relevantes para a investigação de segurança." },
  { icon: Mail, title: "E-mail", text: "Sinais relacionados a ameaças e tentativas de comprometimento do canal corporativo." },
  { icon: Server, title: "Servidores e serviços", text: "Eventos de ativos críticos conectados à estratégia de monitoramento da organização." },
  { icon: Radar, title: "Fontes integradas", text: "Telemetria disponível nas ferramentas do ambiente, centralizada para análise e priorização." },
];

const flow = [
  ["01", "Coletar e correlacionar", "Centralizar eventos relevantes para evitar que sinais importantes permaneçam isolados entre ferramentas."],
  ["02", "Triar e priorizar", "Separar ruído operacional de eventos que merecem investigação, usando contexto técnico e impacto potencial."],
  ["03", "Investigar e responder", "Aprofundar o evento e coordenar as ações previstas para contenção, correção ou escalonamento junto às equipes envolvidas."],
  ["04", "Registrar e evoluir", "Manter histórico, comunicar ocorrências e utilizar aprendizados para aprimorar controles e visibilidade do ambiente."],
] as const;

const deliverables = [
  "Acompanhamento contínuo de eventos de segurança conforme escopo contratado",
  "Triagem e contextualização de alertas relevantes",
  "Comunicação e escalonamento de ocorrências conforme fluxo definido",
  "Histórico operacional para apoiar investigação e melhoria contínua",
  "Relatórios e visão gerencial conforme o modelo de operação",
  "Integração com infraestrutura, endpoints, rede, backup e demais frentes quando aplicável",
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "SOC - Security Operations Center",
  serviceType: "Monitoramento e operação de segurança 24x7",
  provider: { "@type": "Organization", name: "Grupo W3", url: "https://grupow3.com" },
  areaServed: "BR",
  url: "https://grupow3.com/servicos/soc",
};

export function SOCPage() {
  const contact = () => {
    const message = encodeURIComponent("Olá! Gostaria de entender como o SOC 24x7 do Grupo W3 pode ser estruturado para o ambiente da minha empresa.");
    window.open(`https://wa.me/5515988189999?text=${message}`, "_blank", "noopener,noreferrer");
  };

  return (
    <main className="w3-soc-page">
      <SEO
        title="SOC 24x7 para Empresas | Security Operations Center | Grupo W3"
        description="SOC 24x7 para monitorar, priorizar e responder a eventos de segurança de forma coordenada com a infraestrutura da empresa."
        path="/servicos/soc"
        schema={serviceSchema}
      />

      <section className="w3-soc-hero">
        <div className="w3-soc-grid" aria-hidden="true" />
        <div className="w3-container">
          <Link to="/" className="w3-soc-back"><ArrowLeft size={16} /> Voltar para soluções</Link>
          <div className="w3-soc-hero-layout">
            <div className="w3-soc-hero-copy">
              <span className="w3-section-eyebrow">SOC · SECURITY OPERATIONS CENTER</span>
              <h1>Visibilidade 24x7 para transformar <strong>alerta em resposta coordenada.</strong></h1>
              <p>O SOC do Grupo W3 conecta telemetria, análise e fluxo de resposta para reduzir a distância entre um sinal de segurança e uma ação técnica orientada ao contexto do negócio.</p>
              <div className="w3-soc-actions">
                <button className="w3-btn-primary" type="button" onClick={contact}>Conversar sobre o SOC <ArrowRight size={18} /></button>
                <Link className="w3-btn-secondary" to="/soc-para-empresas">Entender quando um SOC faz sentido</Link>
              </div>
            </div>
            <div className="w3-soc-hero-panel" aria-label="Ciclo operacional do SOC">
              <div className="w3-soc-pulse"><Radar size={28} /></div>
              <strong>OPERAÇÃO SOC</strong>
              <span>monitorar → priorizar → investigar → responder</span>
              <div className="w3-soc-live"><i /> operação contínua conforme escopo</div>
            </div>
          </div>
        </div>
      </section>

      <section className="w3-section w3-soc-monitor">
        <div className="w3-container">
          <div className="w3-section-head w3-section-head-split">
            <div><span className="w3-section-eyebrow">O QUE ENTRA NA VISÃO DO SOC</span><h2 className="w3-section-title">Quanto mais contexto, <strong>melhor a decisão.</strong></h2></div>
            <p className="w3-section-lead">As fontes dependem das tecnologias e do escopo de cada cliente. A função do SOC é transformar sinais dispersos em uma visão operacional que ajude a equipe a decidir o que merece atenção primeiro.</p>
          </div>
          <div className="w3-soc-monitor-grid">
            {monitored.map(({ icon: Icon, title, text }) => <article key={title}><div><Icon size={20} /></div><h3>{title}</h3><p>{text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="w3-section w3-soc-flow-section">
        <div className="w3-container">
          <div className="w3-section-head"><span className="w3-section-eyebrow">COMO A OPERAÇÃO FUNCIONA</span><h2 className="w3-section-title">Não basta receber alertas. <strong>É preciso um processo.</strong></h2></div>
          <div className="w3-soc-flow">
            {flow.map(([number, title, text]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="w3-section w3-soc-priority">
        <div className="w3-container w3-soc-priority-layout">
          <div>
            <span className="w3-section-eyebrow">PRIORIZAÇÃO</span>
            <h2 className="w3-section-title">O objetivo é reduzir ruído e <strong>concentrar atenção no que importa.</strong></h2>
            <p className="w3-section-lead">Cada evento precisa ser entendido dentro do ambiente. Uma mesma evidência pode ter pesos diferentes dependendo do ativo afetado, usuário envolvido, recorrência e controles disponíveis.</p>
          </div>
          <div className="w3-soc-priority-list">
            <article><span>01</span><div><strong>Evento</strong><p>Telemetria registrada e disponível para correlação.</p></div></article>
            <article><span>02</span><div><strong>Sinal relevante</strong><p>Comportamento que exige contexto ou investigação adicional.</p></div></article>
            <article><span>03</span><div><strong>Ocorrência</strong><p>Situação que demanda ação, comunicação ou escalonamento conforme o fluxo definido.</p></div></article>
          </div>
        </div>
      </section>

      <section className="w3-section w3-soc-deliverables">
        <div className="w3-container">
          <div className="w3-section-head"><span className="w3-section-eyebrow">O QUE O CLIENTE RECEBE</span><h2 className="w3-section-title">Uma operação estruturada para <strong>dar continuidade à resposta.</strong></h2></div>
          <div className="w3-soc-deliverable-grid">
            {deliverables.map((item) => <div key={item}><CheckIcon /><span>{item}</span></div>)}
          </div>
          <div className="w3-soc-integration">
            <div><BellRing size={22} /><span><strong>SOC + infraestrutura</strong><small>Segurança ganha mais contexto quando conversa com rede, endpoints, servidores e continuidade.</small></span></div>
            <Link to="/servicos/noc">Conhecer o NOC <ArrowRight size={17} /></Link>
          </div>
        </div>
      </section>

      <section className="w3-soc-cta">
        <div className="w3-container">
          <div className="w3-soc-cta-card">
            <div><FileText size={26} /><span className="w3-section-eyebrow">PRÓXIMO PASSO</span><h2>Vamos entender quais fontes, riscos e processos precisam entrar na sua operação.</h2><p>A arquitetura do SOC depende do ambiente existente. A conversa inicial serve para mapear contexto e prioridades antes de definir ferramentas ou escopo.</p></div>
            <button type="button" onClick={contact}>Falar com a W3 <ArrowRight size={18} /></button>
          </div>
        </div>
      </section>
    </main>
  );
}

function CheckIcon() {
  return <span className="w3-soc-check"><ShieldCheck size={16} /></span>;
}
