import { ArrowLeft, ArrowUpRight, CheckCircle2, ChevronRight, Home, LucideIcon, Radar, ShieldCheck, ServerCog, Workflow } from "lucide-react";
import { Link } from "react-router-dom";
import { SEO } from "../../components/SEO";

type ProblemKey = "security" | "monitoring" | "ransomware" | "recovery" | "soc" | "noc" | "outsourcing" | "consulting";

type ProblemData = {
  path: string;
  title: string;
  seoTitle: string;
  description: string;
  eyebrow: string;
  problem: string;
  approach: string;
  signs: string[];
  pillars: { title: string; text: string; icon: LucideIcon }[];
  related: { label: string; to: string }[];
  whatsapp: string;
};

const problems: Record<ProblemKey, ProblemData> = {
  security: {
    path: "/seguranca-para-empresas",
    title: "Segurança para empresas que precisam proteger operação, dados e continuidade.",
    seoTitle: "Segurança para Empresas | Cibersegurança Corporativa | Grupo W3",
    description: "Cibersegurança para empresas com proteção de endpoints, firewall, monitoramento, backup e operação integrada pelo Grupo W3.",
    eyebrow: "SEGURANÇA PARA EMPRESAS",
    problem: "Quando segurança fica distribuída entre ferramentas, fornecedores e equipes diferentes, a empresa pode até ter tecnologia instalada, mas continua sem uma visão coordenada de risco, resposta e continuidade.",
    approach: "A W3 conecta as principais camadas de proteção com infraestrutura e operação, criando uma visão mais consistente de endpoints, rede, servidores, dados e identidade.",
    signs: ["Ferramentas de segurança sem acompanhamento centralizado", "Dificuldade para saber quem responde quando ocorre um incidente", "Firewall, endpoints e backup tratados como projetos separados", "Pouca visibilidade sobre riscos e prioridades técnicas"],
    pillars: [
      { title: "Proteção", text: "EDR, firewall, e-mail e controles aplicados às principais superfícies de ataque.", icon: ShieldCheck },
      { title: "Visibilidade", text: "Monitoramento e contexto para entender o que merece atenção primeiro.", icon: Radar },
      { title: "Continuidade", text: "Backup e recuperação integrados ao plano de proteção do negócio.", icon: ServerCog },
    ],
    related: [{ label: "SOC 24×7", to: "/servicos/soc" }, { label: "Proteções EDR", to: "/servicos/protecoes-edr" }, { label: "Firewall", to: "/servicos/firewall" }],
    whatsapp: "Olá! Gostaria de avaliar a segurança da minha empresa com o Grupo W3.",
  },
  monitoring: {
    path: "/monitoramento-ti-24x7",
    title: "Monitoramento de TI 24×7 para enxergar problemas antes que virem indisponibilidade.",
    seoTitle: "Monitoramento de TI 24×7 | SOC e NOC | Grupo W3",
    description: "Monitoramento de TI 24×7 com SOC e NOC para redes, servidores, segurança, eventos e disponibilidade da infraestrutura empresarial.",
    eyebrow: "MONITORAMENTO DE TI 24×7",
    problem: "Ambientes sem monitoramento contínuo normalmente dependem do usuário perceber a falha, abrir um chamado e só então iniciar a investigação. Isso transforma tecnologia em uma operação essencialmente reativa.",
    approach: "Com SOC e NOC, a W3 acompanha sinais de segurança, disponibilidade e performance para organizar alertas, priorizar eventos e acelerar a atuação técnica.",
    signs: ["A equipe descobre indisponibilidades por reclamações de usuários", "Alertas chegam em ferramentas diferentes sem priorização", "Não existe acompanhamento fora do horário comercial", "Rede, servidores e segurança são monitorados de forma separada"],
    pillars: [
      { title: "NOC", text: "Disponibilidade, performance e continuidade da infraestrutura.", icon: ServerCog },
      { title: "SOC", text: "Eventos de segurança, análise e resposta operacional.", icon: ShieldCheck },
      { title: "Contexto", text: "Centralização para reduzir ruído e focar no que pode afetar o negócio.", icon: Radar },
    ],
    related: [{ label: "NOC", to: "/servicos/noc" }, { label: "SOC", to: "/servicos/soc" }, { label: "RMM", to: "/servicos/rmm" }],
    whatsapp: "Olá! Gostaria de entender o monitoramento de TI 24×7 do Grupo W3.",
  },
  ransomware: {
    path: "/protecao-contra-ransomware",
    title: "Proteção contra ransomware exige mais do que antivírus.",
    seoTitle: "Proteção Contra Ransomware para Empresas | Grupo W3",
    description: "Estratégia de proteção contra ransomware com EDR, firewall, backup, monitoramento e resposta coordenada para ambientes empresariais.",
    eyebrow: "PROTEÇÃO CONTRA RANSOMWARE",
    problem: "Ransomware pode atravessar diferentes camadas do ambiente. Por isso, depender de uma única ferramenta deixa lacunas entre prevenção, detecção, contenção e recuperação.",
    approach: "A abordagem da W3 combina proteção de endpoints e rede, monitoramento de eventos, controles de acesso e uma estratégia de backup e recuperação para reduzir exposição e melhorar capacidade de resposta.",
    signs: ["Antivírus é tratado como principal ou única camada de defesa", "Backup existe, mas restauração não faz parte do plano de incidente", "Usuários e endpoints não seguem uma estratégia uniforme de proteção", "Não existe processo claro de contenção e recuperação"],
    pillars: [
      { title: "Prevenir", text: "Reduzir superfícies de ataque com controles em endpoints, rede e acesso.", icon: ShieldCheck },
      { title: "Detectar", text: "Monitorar sinais e eventos para identificar comportamento suspeito.", icon: Radar },
      { title: "Recuperar", text: "Tratar backup e continuidade como parte da estratégia de resiliência.", icon: ServerCog },
    ],
    related: [{ label: "EDR", to: "/servicos/protecoes-edr" }, { label: "Backup as a Service", to: "/servicos/backup-as-a-service" }, { label: "SOC", to: "/servicos/soc" }],
    whatsapp: "Olá! Gostaria de avaliar a proteção da minha empresa contra ransomware.",
  },
  recovery: {
    path: "/backup-e-recuperacao",
    title: "Backup e recuperação para empresas que não podem depender da sorte quando algo falha.",
    seoTitle: "Backup e Recuperação para Empresas | Grupo W3",
    description: "Backup empresarial, continuidade e recuperação de dados integrados à operação de TI e cibersegurança do Grupo W3.",
    eyebrow: "BACKUP E RECUPERAÇÃO",
    problem: "Ter uma rotina de cópia não significa necessariamente ter uma estratégia de recuperação. O ponto crítico é saber como os dados e serviços serão restaurados quando a operação realmente precisar deles.",
    approach: "A W3 trata backup como uma camada de continuidade, conectando proteção dos dados, acompanhamento operacional e planejamento de recuperação ao restante do ambiente.",
    signs: ["A empresa sabe que há backup, mas não conhece claramente o processo de restauração", "Cópias e infraestrutura são administradas sem uma visão única", "Recuperação só é discutida depois de um incidente", "Não há clareza sobre prioridades de sistemas e dados"],
    pillars: [
      { title: "Dados", text: "Proteção das informações que sustentam processos e aplicações.", icon: ServerCog },
      { title: "Operação", text: "Acompanhamento do ambiente e das rotinas relacionadas à proteção.", icon: Radar },
      { title: "Recuperação", text: "Planejamento para retornar serviços e dados ao funcionamento quando necessário.", icon: Workflow },
    ],
    related: [{ label: "Backup as a Service", to: "/servicos/backup-as-a-service" }, { label: "Gerenciamento de Datacenter", to: "/servicos/gerenciamento-datacenter" }, { label: "NOC", to: "/servicos/noc" }],
    whatsapp: "Olá! Gostaria de avaliar backup e recuperação para a minha empresa.",
  },
  soc: {
    path: "/soc-para-empresas",
    title: "SOC para empresas que precisam transformar eventos de segurança em uma operação de resposta.",
    seoTitle: "SOC para Empresas | Security Operations Center 24×7 | Grupo W3",
    description: "SOC para empresas com monitoramento de segurança, análise de eventos e resposta operacional integrada à infraestrutura de TI.",
    eyebrow: "SOC PARA EMPRESAS",
    problem: "Ferramentas de segurança geram eventos o tempo todo. Sem uma operação que contextualize e priorize esses sinais, alertas importantes podem se misturar ao ruído diário.",
    approach: "O SOC da W3 organiza monitoramento, análise e resposta para aproximar telemetria de segurança das decisões e ações técnicas necessárias no ambiente.",
    signs: ["Muitos alertas e pouca clareza sobre prioridade", "Ferramentas existem, mas não há acompanhamento operacional contínuo", "Incidentes dependem de atuação improvisada", "Segurança e infraestrutura trabalham sem coordenação suficiente"],
    pillars: [
      { title: "Monitorar", text: "Acompanhar sinais e eventos relevantes do ambiente.", icon: Radar },
      { title: "Analisar", text: "Adicionar contexto para diferenciar ruído de situações prioritárias.", icon: ShieldCheck },
      { title: "Responder", text: "Conectar análise às ações técnicas necessárias para contenção e normalização.", icon: Workflow },
    ],
    related: [{ label: "SOC", to: "/servicos/soc" }, { label: "EDR", to: "/servicos/protecoes-edr" }, { label: "Firewall", to: "/servicos/firewall" }],
    whatsapp: "Olá! Gostaria de entender o SOC 24×7 do Grupo W3 para minha empresa.",
  },
  noc: {
    path: "/noc-para-empresas",
    title: "NOC para empresas que precisam acompanhar disponibilidade e performance continuamente.",
    seoTitle: "NOC para Empresas | Monitoramento de Infraestrutura 24×7 | Grupo W3",
    description: "NOC para empresas com monitoramento 24×7 de rede, servidores, disponibilidade, performance e continuidade da infraestrutura.",
    eyebrow: "NOC PARA EMPRESAS",
    problem: "Quando a infraestrutura é acompanhada apenas durante incidentes, a equipe trabalha sempre depois do impacto. Falhas de performance e disponibilidade passam a ser percebidas pelo usuário antes da TI.",
    approach: "O NOC da W3 acompanha componentes críticos de infraestrutura para identificar sinais, organizar alertas e apoiar uma operação mais previsível e proativa.",
    signs: ["Usuários percebem lentidão ou falhas antes da equipe técnica", "Servidores e rede são acompanhados por ferramentas isoladas", "Não existe visibilidade contínua de disponibilidade", "A empresa depende de chamados para iniciar investigações"],
    pillars: [
      { title: "Disponibilidade", text: "Acompanhamento dos componentes que precisam permanecer acessíveis.", icon: Radar },
      { title: "Performance", text: "Visibilidade sobre comportamento e capacidade da infraestrutura.", icon: ServerCog },
      { title: "Continuidade", text: "Operação orientada a reduzir interrupções e organizar resposta técnica.", icon: Workflow },
    ],
    related: [{ label: "NOC", to: "/servicos/noc" }, { label: "RMM", to: "/servicos/rmm" }, { label: "Gerenciamento de Datacenter", to: "/servicos/gerenciamento-datacenter" }],
    whatsapp: "Olá! Gostaria de entender o NOC 24×7 do Grupo W3 para minha empresa.",
  },
  outsourcing: {
    path: "/terceirizacao-de-ti",
    title: "Terceirização de TI para empresas que precisam de estrutura técnica sem montar tudo internamente.",
    seoTitle: "Terceirização de TI para Empresas | Grupo W3",
    description: "Terceirização de TI, gestão tecnológica e CIO as a Service para empresas que precisam de suporte técnico e direção sem ampliar a estrutura interna.",
    eyebrow: "TERCEIRIZAÇÃO DE TI",
    problem: "Nem toda empresa precisa ou consegue manter internamente todas as competências de infraestrutura, segurança, gestão e operação. O desafio é terceirizar sem perder visão de negócio e responsabilidade.",
    approach: "A W3 pode assumir frentes operacionais e estratégicas, funcionando como extensão da empresa e conectando fornecedores, infraestrutura, segurança e prioridades de tecnologia.",
    signs: ["A empresa não possui equipe interna suficiente para todas as demandas", "Decisões de tecnologia ficam espalhadas entre fornecedores", "Não existe uma liderança clara para prioridades de TI", "A diretoria precisa de apoio técnico para decisões e planejamento"],
    pillars: [
      { title: "Operação", text: "Acompanhamento técnico das necessidades do ambiente.", icon: ServerCog },
      { title: "Coordenação", text: "Organização de demandas, fornecedores e prioridades.", icon: Workflow },
      { title: "Direção", text: "Apoio executivo para conectar decisões de tecnologia ao negócio.", icon: ShieldCheck },
    ],
    related: [{ label: "CIO as a Service", to: "/servicos/cio-as-a-service" }, { label: "RMM", to: "/servicos/rmm" }, { label: "NOC", to: "/servicos/noc" }],
    whatsapp: "Olá! Gostaria de conversar sobre terceirização e gestão de TI para minha empresa.",
  },
  consulting: {
    path: "/consultoria-ciberseguranca",
    title: "Consultoria em cibersegurança para organizar prioridades antes de comprar mais ferramentas.",
    seoTitle: "Consultoria em Cibersegurança para Empresas | Grupo W3",
    description: "Consultoria em cibersegurança para avaliar riscos, prioridades, controles e evolução do ambiente empresarial com visão técnica e de negócio.",
    eyebrow: "CONSULTORIA EM CIBERSEGURANÇA",
    problem: "É comum empresas acumularem soluções de segurança sem uma visão clara de prioridade, maturidade e dependências. O resultado pode ser investimento alto com lacunas ainda abertas.",
    approach: "A consultoria da W3 ajuda a organizar o cenário, identificar frentes prioritárias e estruturar uma evolução coerente entre risco, operação, infraestrutura e controles.",
    signs: ["Existem muitas ferramentas, mas não um plano de evolução", "A empresa não sabe quais riscos tratar primeiro", "Segurança é discutida apenas em auditorias ou incidentes", "Diretoria e área técnica não têm uma visão comum das prioridades"],
    pillars: [
      { title: "Diagnóstico", text: "Entendimento do ambiente, contexto e principais pontos de atenção.", icon: Radar },
      { title: "Prioridade", text: "Organização das frentes conforme risco e impacto para a operação.", icon: Workflow },
      { title: "Evolução", text: "Definição de próximos passos conectando controles, processos e tecnologia.", icon: ShieldCheck },
    ],
    related: [{ label: "DPO as a Service", to: "/servicos/dpo-as-a-service" }, { label: "SOC", to: "/servicos/soc" }, { label: "CIO as a Service", to: "/servicos/cio-as-a-service" }],
    whatsapp: "Olá! Gostaria de conversar sobre uma consultoria em cibersegurança para minha empresa.",
  },
};

function ProblemPage({ problemKey }: { problemKey: ProblemKey }) {
  const data = problems[problemKey];
  const contact = () => window.open(`https://wa.me/5515988189999?text=${encodeURIComponent(data.whatsapp)}`, "_blank");
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: data.title,
    description: data.description,
    provider: { "@type": "Organization", name: "Grupo W3", url: "https://grupow3.com" },
    areaServed: "BR",
    url: `https://grupow3.com${data.path}`,
  };

  return (
    <main className="w3-problem-page">
      <SEO title={data.seoTitle} description={data.description} path={data.path} schema={serviceSchema} />
      <section className="w3-problem-hero">
        <div className="w3-problem-grid" aria-hidden="true" />
        <div className="w3-container">
          <nav className="w3-detail-breadcrumb" aria-label="Breadcrumb">
            <Link to="/"><Home size={14} /> Início</Link><ChevronRight size={13} /><span>{data.eyebrow}</span>
          </nav>
          <Link to="/" className="w3-detail-back"><ArrowLeft size={16} /> Voltar para o site</Link>
          <div className="w3-problem-heading">
            <span className="w3-section-eyebrow">{data.eyebrow}</span>
            <h1>{data.title}</h1>
            <p>{data.approach}</p>
            <button className="w3-btn-primary" onClick={contact}>Avaliar meu cenário <ArrowUpRight size={17} /></button>
          </div>
        </div>
      </section>

      <section className="w3-problem-body">
        <div className="w3-container">
          <div className="w3-problem-context">
            <article><span>O PROBLEMA</span><h2>Quando tecnologia existe, mas a operação ainda está exposta.</h2><p>{data.problem}</p></article>
            <article><span>SINAIS COMUNS</span><ul>{data.signs.map((sign) => <li key={sign}><CheckCircle2 size={17} />{sign}</li>)}</ul></article>
          </div>

          <div className="w3-problem-pillars">
            <div className="w3-case-page-section-head"><span className="w3-section-eyebrow">ABORDAGEM W3</span><h2>Três frentes para organizar o cenário.</h2></div>
            <div className="w3-problem-pillar-grid">
              {data.pillars.map(({ title, text, icon: Icon }, index) => (
                <article key={title}><span>0{index + 1}</span><div><Icon size={24} /></div><h3>{title}</h3><p>{text}</p></article>
              ))}
            </div>
          </div>

          <div className="w3-problem-related">
            <div><span className="w3-section-eyebrow">SOLUÇÕES RELACIONADAS</span><h2>Aprofunde nas capacidades que sustentam esta abordagem.</h2></div>
            <div>{data.related.map((item) => <Link to={item.to} key={item.to}>{item.label}<ArrowUpRight size={16} /></Link>)}</div>
          </div>

          <div className="w3-case-page-cta">
            <div><span className="w3-section-eyebrow">PRÓXIMO PASSO</span><h2>Comece pelo cenário, não pela ferramenta.</h2><p>Descreva sua estrutura atual e o principal problema que deseja resolver. A W3 avalia quais frentes fazem sentido para a operação.</p></div>
            <button onClick={contact}>Conversar com a W3 <ArrowUpRight size={18} /></button>
          </div>
        </div>
      </section>
    </main>
  );
}

export const SecurityForCompaniesPage = () => <ProblemPage problemKey="security" />;
export const Monitoring24x7Page = () => <ProblemPage problemKey="monitoring" />;
export const RansomwareProtectionPage = () => <ProblemPage problemKey="ransomware" />;
export const BackupRecoveryPage = () => <ProblemPage problemKey="recovery" />;
export const SocForCompaniesPage = () => <ProblemPage problemKey="soc" />;
export const NocForCompaniesPage = () => <ProblemPage problemKey="noc" />;
export const ITOutsourcingPage = () => <ProblemPage problemKey="outsourcing" />;
export const CybersecurityConsultingPage = () => <ProblemPage problemKey="consulting" />;
