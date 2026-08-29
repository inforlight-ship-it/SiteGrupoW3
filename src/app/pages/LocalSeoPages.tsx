import { ArrowLeft, ArrowRight, CheckCircle2, MapPin, ShieldCheck } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { SEO } from "../components/SEO";

type LocalPageData = {
  path: string;
  eyebrow: string;
  title: string;
  seoTitle: string;
  description: string;
  location: string;
  intro: string;
  contextTitle: string;
  context: string;
  pillars: { title: string; text: string }[];
  situations: string[];
  related: { label: string; to: string }[];
  whatsapp: string;
};

const pages: Record<string, LocalPageData> = {
  "/ciberseguranca-sorocaba": {
    path: "/ciberseguranca-sorocaba",
    eyebrow: "CIBERSEGURANÇA EM SOROCABA",
    title: "Cibersegurança para empresas de Sorocaba com visão integrada de risco e operação.",
    seoTitle: "Cibersegurança em Sorocaba para Empresas | Grupo W3",
    description: "Cibersegurança em Sorocaba com SOC, EDR, firewall, backup, proteção de e-mail e consultoria para ambientes empresariais.",
    location: "Sorocaba e região",
    intro: "Com base operacional em Sorocaba, o Grupo W3 atende empresas que precisam conectar proteção de endpoints, rede, dados, identidade e monitoramento sem tratar cada camada como um projeto isolado.",
    contextTitle: "Segurança precisa acompanhar a realidade da operação local.",
    context: "Empresas industriais, logísticas, corporativas e de serviços podem possuir ambientes muito diferentes, mas compartilham a necessidade de manter tecnologia disponível e reduzir exposição. A arquitetura deve partir do contexto do negócio, não de uma lista pronta de ferramentas.",
    pillars: [
      { title: "Proteção", text: "EDR, firewall, e-mail e controles aplicados às principais superfícies de ataque." },
      { title: "Visibilidade", text: "SOC e monitoramento para dar contexto a eventos e priorizar ocorrências." },
      { title: "Resiliência", text: "Backup, recuperação e continuidade conectados à estratégia de segurança." },
    ],
    situations: ["Empresa cresceu e a segurança ficou distribuída entre fornecedores", "Não existe acompanhamento contínuo dos eventos de segurança", "Backup, endpoint e firewall não fazem parte de um plano único", "A liderança precisa entender riscos e prioridades técnicas"],
    related: [{ label: "Segurança para empresas", to: "/seguranca-para-empresas" }, { label: "SOC 24x7", to: "/servicos/soc" }, { label: "Diagnóstico inicial", to: "/diagnostico-seguranca" }],
    whatsapp: "Olá! Procuro uma empresa de cibersegurança em Sorocaba e gostaria de conversar com o Grupo W3.",
  },
  "/soc-sorocaba": {
    path: "/soc-sorocaba",
    eyebrow: "SOC EM SOROCABA",
    title: "SOC 24x7 para empresas de Sorocaba que precisam acompanhar segurança além do horário comercial.",
    seoTitle: "SOC em Sorocaba | Monitoramento de Segurança 24x7 | Grupo W3",
    description: "SOC em Sorocaba para monitoramento, triagem e resposta coordenada a eventos de segurança em ambientes empresariais.",
    location: "Sorocaba e região",
    intro: "O Grupo W3 combina presença regional com uma operação de segurança orientada a processo. O objetivo é centralizar sinais, priorizar eventos e conectar a resposta às equipes e tecnologias que já fazem parte do ambiente.",
    contextTitle: "O desafio não é apenas receber alertas. É saber quem olha, quando olha e o que acontece depois.",
    context: "Quando eventos chegam de firewall, endpoint, identidade e outras fontes sem um fluxo claro, a empresa pode ter tecnologia instalada e ainda continuar reativa. Um SOC estrutura responsabilidade, triagem, investigação e escalonamento.",
    pillars: [
      { title: "Monitorar", text: "Acompanhamento contínuo das fontes definidas no escopo da operação." },
      { title: "Priorizar", text: "Contextualização para separar ruído de situações que exigem investigação." },
      { title: "Responder", text: "Comunicação e coordenação das ações previstas para cada tipo de ocorrência." },
    ],
    situations: ["Alertas ficam sem acompanhamento fora do horário comercial", "A equipe interna recebe sinais demais e não consegue priorizar", "Não há um fluxo definido entre detecção e resposta", "Segurança e infraestrutura trabalham sem contexto compartilhado"],
    related: [{ label: "Conhecer o SOC", to: "/servicos/soc" }, { label: "SOC para empresas", to: "/soc-para-empresas" }, { label: "SOC x NOC", to: "/conteudos/soc-vs-noc" }],
    whatsapp: "Olá! Gostaria de entender a operação de SOC 24x7 do Grupo W3 para uma empresa da região de Sorocaba.",
  },
  "/ti-gerenciada-sorocaba": {
    path: "/ti-gerenciada-sorocaba",
    eyebrow: "TI GERENCIADA EM SOROCABA",
    title: "Operação de TI para empresas de Sorocaba que precisam de estrutura sem ampliar toda a equipe interna.",
    seoTitle: "TI Gerenciada em Sorocaba | NOC, RMM e CIO as a Service | Grupo W3",
    description: "TI gerenciada em Sorocaba com NOC, RMM, infraestrutura e CIO as a Service para empresas que precisam organizar e acompanhar tecnologia.",
    location: "Sorocaba e região",
    intro: "A W3 pode atuar como extensão da equipe interna ou assumir frentes de gestão para empresas que não possuem uma estrutura completa de TI. O modelo conecta operação, fornecedores, infraestrutura e decisões de negócio.",
    contextTitle: "Terceirizar TI não precisa significar perder controle.",
    context: "O objetivo de uma operação gerenciada é criar responsabilidade clara, visibilidade e processo. NOC e RMM ajudam a acompanhar infraestrutura, enquanto CIO as a Service pode aproximar decisões tecnológicas da estratégia da empresa.",
    pillars: [
      { title: "Operação", text: "Monitoramento, manutenção e acompanhamento da infraestrutura conforme escopo." },
      { title: "Coordenação", text: "Organização entre fornecedores, prioridades, projetos e necessidades das áreas de negócio." },
      { title: "Estratégia", text: "Planejamento tecnológico e apoio à tomada de decisão por meio de CIO as a Service." },
    ],
    situations: ["A empresa não possui TI interno dedicado", "Existe equipe interna, mas faltam cobertura e especialidades", "Fornecedores atuam sem coordenação central", "Tecnologia cresce sem roadmap ou prioridades claras"],
    related: [{ label: "Terceirização de TI", to: "/terceirizacao-de-ti" }, { label: "CIO as a Service", to: "/servicos/cio-as-a-service" }, { label: "NOC", to: "/servicos/noc" }],
    whatsapp: "Olá! Procuro apoio de TI gerenciada em Sorocaba e gostaria de entender como a W3 pode atuar.",
  },
  "/consultoria-ciberseguranca-sp": {
    path: "/consultoria-ciberseguranca-sp",
    eyebrow: "CONSULTORIA DE CIBERSEGURANÇA EM SP",
    title: "Consultoria de cibersegurança para empresas em São Paulo que precisam transformar risco em prioridades executáveis.",
    seoTitle: "Consultoria de Cibersegurança em SP | Grupo W3",
    description: "Consultoria de cibersegurança em São Paulo para avaliar riscos, arquitetura, controles, continuidade, governança e prioridades técnicas.",
    location: "Estado de São Paulo",
    intro: "Projetos de segurança precisam conectar tecnologia, processos e impacto para o negócio. O Grupo W3 apoia empresas na análise do cenário atual e na definição de uma evolução compatível com risco, operação e orçamento.",
    contextTitle: "Uma boa consultoria não começa pela compra de uma ferramenta.",
    context: "Antes de recomendar controles, é necessário entender ativos críticos, dependências, exposição, capacidade interna, fornecedores existentes e objetivos da organização. A partir desse contexto, prioridades podem ser organizadas de forma mais defensável.",
    pillars: [
      { title: "Diagnóstico", text: "Leitura do cenário e identificação de lacunas relevantes para o contexto do negócio." },
      { title: "Arquitetura", text: "Organização de camadas de proteção, infraestrutura, identidade, dados e continuidade." },
      { title: "Roadmap", text: "Priorização de iniciativas para transformar achados em um plano de evolução executável." },
    ],
    situations: ["A empresa possui ferramentas, mas não sabe onde estão as maiores lacunas", "Existe demanda de governança, LGPD ou alinhamento com frameworks", "Projetos de segurança são conduzidos de forma isolada", "A liderança precisa transformar risco técnico em prioridades"],
    related: [{ label: "Consultoria em cibersegurança", to: "/consultoria-ciberseguranca" }, { label: "DPO as a Service", to: "/servicos/dpo-as-a-service" }, { label: "Diagnóstico inicial", to: "/diagnostico-seguranca" }],
    whatsapp: "Olá! Gostaria de conversar sobre consultoria de cibersegurança para uma empresa em São Paulo.",
  },
};

export function LocalSeoPage() {
  const { pathname } = useLocation();
  const data = pages[pathname] || pages["/ciberseguranca-sorocaba"];
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: data.eyebrow,
    description: data.description,
    provider: { "@type": "Organization", name: "Grupo W3", url: "https://grupow3.com" },
    areaServed: { "@type": "AdministrativeArea", name: data.location },
    url: `https://grupow3.com${data.path}`,
  };

  const contact = () => window.open(`https://wa.me/5515988189999?text=${encodeURIComponent(data.whatsapp)}`, "_blank", "noopener,noreferrer");

  return (
    <main className="w3-local-page">
      <SEO title={data.seoTitle} description={data.description} path={data.path} schema={schema} />
      <section className="w3-local-hero">
        <div className="w3-container">
          <Link className="w3-local-back" to="/"><ArrowLeft size={16} /> Grupo W3</Link>
          <div className="w3-local-location"><MapPin size={17} /> {data.location}</div>
          <span className="w3-section-eyebrow">{data.eyebrow}</span>
          <h1>{data.title}</h1>
          <p>{data.intro}</p>
          <button type="button" className="w3-btn-primary" onClick={contact}>Falar com a W3 <ArrowRight size={18} /></button>
        </div>
      </section>
      <section className="w3-section w3-local-context"><div className="w3-container w3-local-context-grid"><div><span className="w3-section-eyebrow">CONTEXTO</span><h2 className="w3-section-title">{data.contextTitle}</h2></div><p className="w3-section-lead">{data.context}</p></div></section>
      <section className="w3-section w3-local-pillars"><div className="w3-container"><div className="w3-local-pillar-grid">{data.pillars.map((pillar,index)=><article key={pillar.title}><span>0{index+1}</span><ShieldCheck size={21}/><h2>{pillar.title}</h2><p>{pillar.text}</p></article>)}</div></div></section>
      <section className="w3-section w3-local-situations"><div className="w3-container w3-local-situations-grid"><div><span className="w3-section-eyebrow">QUANDO CONVERSAR</span><h2 className="w3-section-title">Situações que costumam indicar <strong>necessidade de estruturação.</strong></h2></div><div>{data.situations.map(item=><p key={item}><CheckCircle2 size={17}/>{item}</p>)}</div></div></section>
      <section className="w3-local-related"><div className="w3-container"><span className="w3-section-eyebrow">EXPLORE O TEMA</span><div>{data.related.map(item=><Link key={item.to} to={item.to}>{item.label}<ArrowRight size={16}/></Link>)}</div></div></section>
    </main>
  );
}
