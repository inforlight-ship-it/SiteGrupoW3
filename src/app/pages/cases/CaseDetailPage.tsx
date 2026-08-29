import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowUpRight,
  Building2,
  Cable,
  CheckCircle2,
  Network,
  Route,
  Server,
  ShieldCheck,
  UsersRound,
  Workflow,
} from "lucide-react";
import { motion } from "motion/react";

type CaseKey = "fazenda" | "adimax" | "diso";

type CaseData = {
  client: string;
  segment: string;
  eyebrow: string;
  title: string;
  intro: string;
  context: string;
  role: string;
  scope: { title: string; text: string }[];
  demonstrates: string[];
  architecture: { label: string; icon: typeof Server }[];
  cta: string;
};

const cases: Record<CaseKey, CaseData> = {
  fazenda: {
    client: "Fazenda Boa Vista",
    segment: "Infraestrutura + segurança",
    eyebrow: "CASE W3 · FAZENDA BOA VISTA",
    title: "Tecnologia de ponta conectada à infraestrutura, acesso e cibersegurança.",
    intro:
      "A W3 atua como parceiro tecnológico da Fazenda Boa Vista em frentes críticas do ambiente, conectando soluções para servidores, controle de acesso e cibersegurança.",
    context:
      "O projeto reúne diferentes camadas de tecnologia que precisam conviver de forma coordenada: infraestrutura de servidores, controle de acesso físico e mecanismos de proteção digital.",
    role:
      "A atuação da W3 é de parceiro tecnológico, apoiando a evolução dessas frentes e conectando necessidades de infraestrutura, segurança física e cibersegurança dentro de uma visão integrada.",
    scope: [
      { title: "Servidores", text: "Soluções e suporte para a camada de infraestrutura que sustenta serviços e aplicações do ambiente." },
      { title: "Controle de acesso", text: "Tecnologia aplicada ao controle e à gestão de acesso físico em áreas e operações relevantes." },
      { title: "Cibersegurança", text: "Proteção das camadas digitais que precisam permanecer disponíveis e seguras dentro da operação." },
    ],
    demonstrates: [
      "Capacidade de atuar em múltiplas camadas tecnológicas dentro do mesmo cliente.",
      "Integração entre infraestrutura, segurança física e cibersegurança.",
      "Relacionamento de longo prazo como parceiro tecnológico, e não apenas fornecedor pontual.",
    ],
    architecture: [
      { label: "Servidores", icon: Server },
      { label: "Acesso", icon: UsersRound },
      { label: "Proteção", icon: ShieldCheck },
    ],
    cta: "Olá! Vi o case Fazenda Boa Vista no site do Grupo W3 e gostaria de conversar sobre uma solução integrada de infraestrutura e cibersegurança.",
  },
  adimax: {
    client: "Adimax",
    segment: "Rede corporativa · Laserway",
    eyebrow: "CASE W3 · ADIMAX",
    title: "Infraestrutura Laserway para um prédio corporativo com aproximadamente 500 pontos de rede.",
    intro:
      "A W3 realizou a implementação de uma solução Laserway em um prédio corporativo da Adimax, estruturando a conectividade de aproximadamente 500 pontos de rede.",
    context:
      "Um prédio corporativo com centenas de pontos exige uma arquitetura de rede pensada para distribuição, organização e continuidade da conectividade ao longo do ambiente.",
    role:
      "A W3 conduziu a implementação da solução Laserway, aplicando a tecnologia à infraestrutura corporativa e ao atendimento dos aproximadamente 500 pontos de rede previstos para o edifício.",
    scope: [
      { title: "Laserway", text: "Aplicação da solução de rede óptica passiva no ambiente corporativo." },
      { title: "500 pontos de rede", text: "Projeto dimensionado para aproximadamente 500 pontos distribuídos pelo prédio corporativo." },
      { title: "Infraestrutura", text: "Implementação voltada à conectividade e à organização da camada de rede do edifício." },
    ],
    demonstrates: [
      "Experiência da W3 em projetos de rede corporativa em escala relevante.",
      "Capacidade de implementar arquitetura Laserway em ambiente empresarial.",
      "Atuação em projetos que exigem planejamento de conectividade para centenas de pontos.",
    ],
    architecture: [
      { label: "Laserway", icon: Network },
      { label: "Distribuição", icon: Cable },
      { label: "500 pontos", icon: Building2 },
    ],
    cta: "Olá! Vi o case Adimax no site do Grupo W3 e gostaria de conversar sobre projetos Laserway e infraestrutura de rede corporativa.",
  },
  diso: {
    client: "Diso",
    segment: "CIO as a Service · Logística",
    eyebrow: "CASE W3 · DISO",
    title: "Uma diretoria de TI externa apoiando uma operação logística sem equipe interna de tecnologia.",
    intro:
      "A Diso é uma empresa de logística sem TI interno. A W3 auxilia a companhia nos processos atuais de tecnologia, atuando de forma próxima ao papel de um diretor de TI externo.",
    context:
      "Sem uma estrutura interna dedicada de TI, decisões de tecnologia, fornecedores, prioridades e continuidade operacional precisam de uma referência técnica capaz de organizar e conduzir o cenário como parte do negócio.",
    role:
      "A W3 assume uma atuação ampla de CIO as a Service, apoiando a Diso nos processos de tecnologia e servindo como referência para decisões, organização e evolução da TI da empresa.",
    scope: [
      { title: "Direção de TI", text: "Apoio executivo e técnico para orientar prioridades, decisões e evolução da tecnologia." },
      { title: "Operação", text: "Acompanhamento dos processos atuais de TI necessários ao funcionamento cotidiano da empresa." },
      { title: "Visão de negócio", text: "Tecnologia tratada como parte da operação logística, e não como uma função isolada." },
    ],
    demonstrates: [
      "Modelo de CIO as a Service para empresas sem liderança interna de TI.",
      "Capacidade de conectar necessidades técnicas às prioridades do negócio.",
      "Atuação contínua como referência externa para a gestão de tecnologia.",
    ],
    architecture: [
      { label: "Negócio", icon: Route },
      { label: "Direção de TI", icon: Workflow },
      { label: "Operação", icon: Server },
    ],
    cta: "Olá! Vi o case Diso no site do Grupo W3 e gostaria de entender como funciona o CIO as a Service para uma empresa sem TI interno.",
  },
};

function CaseDetailPage({ caseKey }: { caseKey: CaseKey }) {
  const data = cases[caseKey];

  useEffect(() => {
    const previousTitle = document.title;
    document.title = `Case ${data.client} | Grupo W3`;
    return () => {
      document.title = previousTitle;
    };
  }, [data.client]);

  const contact = () => {
    window.open(`https://wa.me/5515988189999?text=${encodeURIComponent(data.cta)}`, "_blank");
  };

  return (
    <main className="w3-case-page">
      <section className="w3-case-page-hero">
        <div className="w3-case-page-grid" aria-hidden="true" />
        <div className="w3-container w3-case-page-hero-inner">
          <Link to="/" className="w3-case-page-back">
            <ArrowLeft size={17} /> Voltar para o site
          </Link>

          <div className="w3-case-page-heading">
            <span className="w3-section-eyebrow">{data.eyebrow}</span>
            <h1>{data.title}</h1>
            <p>{data.intro}</p>
            <div className="w3-case-page-meta">
              <span>{data.client}</span>
              <span>{data.segment}</span>
            </div>
          </div>

          <motion.div
            className="w3-case-page-architecture"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            aria-label={`Representação visual do case ${data.client}`}
          >
            <div className="w3-case-page-arch-line" />
            {data.architecture.map(({ label, icon: Icon }, index) => (
              <div className="w3-case-page-arch-node" key={label}>
                <div className="w3-case-page-arch-icon"><Icon size={24} /></div>
                <span>0{index + 1}</span>
                <strong>{label}</strong>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="w3-case-page-body">
        <div className="w3-container">
          <div className="w3-case-page-story-grid">
            <article>
              <span className="w3-case-page-label">CONTEXTO</span>
              <h2>O cenário</h2>
              <p>{data.context}</p>
            </article>
            <article>
              <span className="w3-case-page-label">ATUAÇÃO W3</span>
              <h2>Nosso papel</h2>
              <p>{data.role}</p>
            </article>
          </div>

          <div className="w3-case-page-scope">
            <div className="w3-case-page-section-head">
              <span className="w3-section-eyebrow">ESCOPO DO CASE</span>
              <h2>Onde a W3 atua neste projeto.</h2>
            </div>
            <div className="w3-case-page-scope-grid">
              {data.scope.map((item, index) => (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.42, delay: index * 0.06 }}
                >
                  <span>0{index + 1}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </motion.article>
              ))}
            </div>
          </div>

          <div className="w3-case-page-demonstrates">
            <div>
              <span className="w3-section-eyebrow">O QUE ESTE CASE DEMONSTRA</span>
              <h2>Capacidade aplicada em ambiente real.</h2>
              <p>
                Estes pontos resumem o tipo de competência que este projeto evidencia sobre a atuação da W3, sem atribuir métricas ou resultados além do escopo informado.
              </p>
            </div>
            <div className="w3-case-page-checks">
              {data.demonstrates.map((item) => (
                <div key={item}>
                  <CheckCircle2 size={19} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="w3-case-page-cta">
            <div>
              <span className="w3-section-eyebrow">FALE COM A W3</span>
              <h2>Quer aplicar uma abordagem semelhante na sua empresa?</h2>
              <p>Converse com nossa equipe e descreva seu cenário. A partir daí, avaliamos quais frentes fazem sentido para a sua operação.</p>
            </div>
            <button onClick={contact}>Conversar sobre este tipo de projeto <ArrowUpRight size={18} /></button>
          </div>
        </div>
      </section>
    </main>
  );
}

export function FazendaBoaVistaCasePage() {
  return <CaseDetailPage caseKey="fazenda" />;
}

export function AdimaxCasePage() {
  return <CaseDetailPage caseKey="adimax" />;
}

export function DisoCasePage() {
  return <CaseDetailPage caseKey="diso" />;
}
