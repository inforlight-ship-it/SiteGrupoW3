export type ArticleSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type Article = {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  category: string;
  readingTime: string;
  intro: string;
  sections: ArticleSection[];
  related: { label: string; to: string }[];
};

export const articles: Article[] = [
  {
    slug: "o-que-e-soc",
    title: "O que é SOC e qual o papel de um Security Operations Center?",
    seoTitle: "O que é SOC? Entenda o Security Operations Center | Grupo W3",
    description: "Entenda o que é SOC, como funciona o monitoramento de segurança e por que contexto, priorização e resposta importam para empresas.",
    category: "SOC",
    readingTime: "6 min",
    intro: "Um SOC não é apenas uma tela com alertas. Ele é uma função operacional que conecta telemetria, análise, priorização e resposta para que sinais de segurança não permaneçam dispersos entre ferramentas.",
    sections: [
      {
        heading: "O que significa SOC",
        paragraphs: ["SOC é a sigla para Security Operations Center. Na prática, representa uma operação dedicada a acompanhar eventos de segurança, identificar situações que merecem investigação e coordenar o fluxo de resposta conforme o contexto de cada ambiente."],
      },
      {
        heading: "Por que ferramentas sozinhas não resolvem",
        paragraphs: ["Firewall, EDR, e-mail, identidade e outros controles podem gerar grande volume de eventos. Sem processo e responsabilidade definidos, alertas importantes podem disputar atenção com ruído operacional."],
        bullets: ["Centralização de sinais", "Triagem e priorização", "Investigação com contexto", "Comunicação e escalonamento", "Registro para melhoria contínua"],
      },
      {
        heading: "O que pode ser monitorado",
        paragraphs: ["As fontes dependem do ambiente e do escopo contratado. Endpoints, identidade, rede, servidores, e-mail e aplicações podem contribuir com telemetria. O objetivo não é conectar tudo indiscriminadamente, mas selecionar fontes que aumentem capacidade de detecção e resposta."],
      },
      {
        heading: "SOC 24x7 faz sentido para toda empresa?",
        paragraphs: ["A necessidade depende do risco, criticidade, tamanho do ambiente, obrigações de negócio e capacidade interna de resposta. Empresas que não conseguem acompanhar eventos fora do horário comercial ou que possuem infraestrutura crítica podem se beneficiar de uma operação contínua."],
      },
    ],
    related: [{ label: "Conhecer o SOC da W3", to: "/servicos/soc" }, { label: "SOC para empresas", to: "/soc-para-empresas" }],
  },
  {
    slug: "soc-vs-noc",
    title: "SOC x NOC: qual a diferença e por que as duas operações se complementam?",
    seoTitle: "SOC x NOC: Entenda as Diferenças | Grupo W3",
    description: "SOC e NOC monitoram sinais diferentes do ambiente. Entenda segurança, disponibilidade, performance e onde as operações se conectam.",
    category: "SOC + NOC",
    readingTime: "6 min",
    intro: "SOC e NOC observam o mesmo negócio por perspectivas diferentes. Enquanto o SOC concentra atenção em segurança, o NOC acompanha disponibilidade, performance e continuidade da infraestrutura.",
    sections: [
      {
        heading: "O foco do SOC",
        paragraphs: ["O SOC procura identificar eventos que indiquem ameaça, comprometimento, abuso de credenciais ou outros riscos de segurança. A operação precisa transformar telemetria em investigação e resposta."],
      },
      {
        heading: "O foco do NOC",
        paragraphs: ["O NOC acompanha saúde e disponibilidade de redes, servidores, links, serviços e demais componentes operacionais. Seu objetivo é reduzir o tempo entre uma degradação e a atuação técnica."],
      },
      {
        heading: "Onde SOC e NOC se encontram",
        paragraphs: ["Um incidente de segurança pode provocar indisponibilidade. Da mesma forma, uma anomalia de infraestrutura pode parecer um evento de segurança até que exista contexto suficiente. A integração entre equipes reduz lacunas de responsabilidade e acelera a compreensão do cenário."],
        bullets: ["Compartilhamento de contexto", "Escalonamento coordenado", "Visão de ativos críticos", "Continuidade durante incidentes", "Histórico operacional comum"],
      },
      {
        heading: "Qual contratar primeiro?",
        paragraphs: ["Não existe uma resposta universal. A prioridade deve considerar as dores atuais: indisponibilidade recorrente, falta de visibilidade, risco cibernético, ausência de equipe fora do horário ou necessidade de governança operacional."],
      },
    ],
    related: [{ label: "Conhecer o SOC", to: "/servicos/soc" }, { label: "Conhecer o NOC", to: "/servicos/noc" }, { label: "Monitoramento 24x7", to: "/monitoramento-ti-24x7" }],
  },
  {
    slug: "como-proteger-empresa-contra-ransomware",
    title: "Como proteger uma empresa contra ransomware com múltiplas camadas",
    seoTitle: "Como Proteger sua Empresa Contra Ransomware | Grupo W3",
    description: "Ransomware exige prevenção, detecção, contenção e recuperação. Veja as principais camadas de uma estratégia empresarial de proteção.",
    category: "Ransomware",
    readingTime: "7 min",
    intro: "Ransomware não deve ser tratado como um problema de antivírus. Uma estratégia mais resiliente combina controles de identidade, endpoint, rede, monitoramento, backup e capacidade de recuperação.",
    sections: [
      {
        heading: "Reduzir a superfície de ataque",
        paragraphs: ["Controles de acesso, atualização de sistemas, segmentação, proteção de e-mail e gestão de privilégios ajudam a reduzir oportunidades de comprometimento. Nenhuma camada elimina isoladamente todo o risco."],
      },
      {
        heading: "Detectar antes que o impacto se espalhe",
        paragraphs: ["EDR, firewall e outras fontes podem produzir sinais úteis, mas detecção depende de acompanhamento. Monitorar eventos e conhecer o comportamento esperado do ambiente aumenta a capacidade de perceber anomalias."],
      },
      {
        heading: "Conter e responder",
        paragraphs: ["Quando um evento relevante é identificado, a organização precisa saber quem decide, quem executa ações técnicas e como o negócio será comunicado. Processos improvisados durante uma crise tendem a aumentar incerteza."],
        bullets: ["Papéis e contatos definidos", "Procedimento de isolamento", "Preservação de evidências quando necessário", "Comunicação interna", "Critérios de recuperação"],
      },
      {
        heading: "Recuperar com segurança",
        paragraphs: ["Backup é uma parte fundamental, mas a organização precisa saber se consegue restaurar dados e serviços dentro das necessidades do negócio. Cópias protegidas e testes de recuperação tornam a estratégia mais confiável."],
      },
    ],
    related: [{ label: "Proteção contra ransomware", to: "/protecao-contra-ransomware" }, { label: "EDR", to: "/servicos/protecoes-edr" }, { label: "Backup", to: "/backup-e-recuperacao" }],
  },
  {
    slug: "backup-e-suficiente-contra-ransomware",
    title: "Backup é suficiente contra ransomware?",
    seoTitle: "Backup é Suficiente Contra Ransomware? | Grupo W3",
    description: "Backup é essencial para resiliência, mas não substitui prevenção, detecção e resposta. Entenda como integrar recuperação à cibersegurança.",
    category: "Backup",
    readingTime: "5 min",
    intro: "Backup pode ser decisivo para recuperação, mas não impede por si só que uma invasão ocorra, que credenciais sejam comprometidas ou que sistemas fiquem indisponíveis durante um incidente.",
    sections: [
      {
        heading: "O papel correto do backup",
        paragraphs: ["Backup reduz dependência de uma única cópia dos dados e cria alternativas de recuperação. Em uma estratégia contra ransomware, ele deve ser tratado como camada de resiliência, não como única barreira de segurança."],
      },
      {
        heading: "Por que cópias também precisam ser protegidas",
        paragraphs: ["Ambientes de backup acessíveis pelas mesmas credenciais ou caminhos da produção podem aumentar a exposição. Separação, controle de acesso e mecanismos de proteção devem ser considerados conforme a tecnologia utilizada."],
      },
      {
        heading: "Restaurar é diferente de ter backup",
        paragraphs: ["Uma rotina pode concluir cópias todos os dias sem que a empresa tenha clareza sobre ordem de recuperação, dependências entre sistemas ou tempo necessário para restaurar serviços essenciais."],
        bullets: ["Definir prioridades de restauração", "Testar periodicamente", "Documentar dependências", "Acompanhar falhas de rotina", "Revisar retenção conforme necessidade do negócio"],
      },
      {
        heading: "Combine backup com outras camadas",
        paragraphs: ["EDR, firewall, identidade, segmentação, SOC e processos de resposta ajudam a atuar antes e durante o incidente. Backup entra no momento em que continuidade e recuperação precisam ser executadas com segurança."],
      },
    ],
    related: [{ label: "Backup e recuperação", to: "/backup-e-recuperacao" }, { label: "Backup as a Service", to: "/servicos/backup-as-a-service" }],
  },
  {
    slug: "o-que-e-edr",
    title: "O que é EDR e como ele se diferencia de uma proteção tradicional de endpoint?",
    seoTitle: "O que é EDR? Proteção de Endpoint Explicada | Grupo W3",
    description: "Entenda o conceito de EDR, telemetria de endpoint, investigação e resposta, e como essa camada se integra a uma estratégia de segurança.",
    category: "Endpoints",
    readingTime: "5 min",
    intro: "EDR significa Endpoint Detection and Response. A ideia central é ampliar a visibilidade sobre o comportamento dos endpoints e apoiar investigação e resposta quando surgem sinais relevantes.",
    sections: [
      {
        heading: "Por que o endpoint importa",
        paragraphs: ["Notebooks, desktops e servidores executam processos, acessam dados e utilizam credenciais. Por isso, comportamento nesses ativos pode oferecer sinais importantes para detectar uma tentativa de comprometimento."],
      },
      {
        heading: "Detecção e resposta",
        paragraphs: ["Soluções EDR podem registrar telemetria, aplicar mecanismos de detecção e oferecer recursos de investigação ou contenção. As capacidades exatas variam entre fabricantes e configurações."],
      },
      {
        heading: "EDR não substitui todas as outras camadas",
        paragraphs: ["Endpoints fazem parte de uma arquitetura maior. Identidade, firewall, e-mail, backup, segmentação e monitoramento continuam relevantes. O valor aumenta quando sinais podem ser contextualizados com outras fontes."],
      },
      {
        heading: "O componente operacional",
        paragraphs: ["Ter EDR instalado não significa que todos os eventos serão automaticamente compreendidos. É necessário definir quem acompanha alertas, como investigar e quais ações podem ser tomadas diante de uma ocorrência."],
      },
    ],
    related: [{ label: "Proteções EDR", to: "/servicos/protecoes-edr" }, { label: "SOC", to: "/servicos/soc" }],
  },
  {
    slug: "como-escolher-firewall-empresarial",
    title: "Como pensar na escolha e gestão de um firewall empresarial",
    seoTitle: "Firewall Empresarial: Como Escolher e Gerenciar | Grupo W3",
    description: "Firewall empresarial envolve capacidade, arquitetura, políticas, VPN, segmentação e gestão recorrente. Veja o que avaliar além do equipamento.",
    category: "Firewall",
    readingTime: "6 min",
    intro: "A escolha de um firewall não deve começar somente pelo modelo do equipamento. Topologia, volume de tráfego, serviços de segurança, VPN, redundância e capacidade de gestão influenciam o projeto.",
    sections: [
      {
        heading: "Entenda o ambiente antes do dimensionamento",
        paragraphs: ["Quantidade de usuários, links, aplicações, filiais, túneis VPN, serviços publicados e necessidades de inspeção ajudam a definir capacidade. Um equipamento subdimensionado pode se tornar gargalo quando recursos de segurança são ativados."],
      },
      {
        heading: "Política é tão importante quanto hardware",
        paragraphs: ["Regras acumuladas sem revisão, objetos duplicados e acessos amplos aumentam complexidade. A gestão precisa acompanhar mudanças de negócio e remover permissões que perderam finalidade."],
        bullets: ["Inventário de regras", "Segmentação", "Acesso remoto", "Registros e monitoramento", "Revisões periódicas"],
      },
      {
        heading: "Pense em disponibilidade",
        paragraphs: ["Para ambientes críticos, a arquitetura deve considerar o impacto da indisponibilidade do firewall, dos links e dos serviços que dependem deles. Redundância precisa ser projetada e testada conforme a necessidade do negócio."],
      },
      {
        heading: "Integre o firewall ao monitoramento",
        paragraphs: ["Logs e eventos de borda podem contribuir com contexto para SOC e NOC. A gestão não termina quando o equipamento é instalado; acompanhamento e ajuste fazem parte do ciclo operacional."],
      },
    ],
    related: [{ label: "Firewall", to: "/servicos/firewall" }, { label: "Segurança para empresas", to: "/seguranca-para-empresas" }],
  },
  {
    slug: "plano-resposta-incidentes",
    title: "O que um plano de resposta a incidentes precisa organizar?",
    seoTitle: "Plano de Resposta a Incidentes: O que Organizar | Grupo W3",
    description: "Um plano de resposta organiza papéis, comunicação, contenção, recuperação e registro antes da crise. Veja os elementos fundamentais.",
    category: "Resposta a Incidentes",
    readingTime: "7 min",
    intro: "Durante um incidente sério, decisões precisam acontecer com informação incompleta e pressão operacional. Um plano não elimina a crise, mas reduz a quantidade de decisões que precisam ser inventadas naquele momento.",
    sections: [
      {
        heading: "Defina papéis e contatos",
        paragraphs: ["A organização precisa saber quem lidera o fluxo técnico, quem representa o negócio, quem pode aprovar ações de contenção e como fornecedores críticos serão acionados."],
      },
      {
        heading: "Organize detecção e classificação",
        paragraphs: ["Nem todo alerta é incidente. Critérios de triagem ajudam a diferenciar evento, suspeita e ocorrência que exige resposta. A classificação pode considerar ativos, impacto, abrangência e evidências disponíveis."],
      },
      {
        heading: "Planeje contenção e recuperação",
        paragraphs: ["Ações como isolamento de ativos, bloqueio de acessos ou restauração podem afetar o negócio. Procedimentos devem considerar dependências, autoridade para execução e critérios para retorno à operação."],
        bullets: ["Contenção imediata", "Investigação", "Erradicação da causa quando identificada", "Recuperação controlada", "Monitoramento após normalização"],
      },
      {
        heading: "Comunicação e registro",
        paragraphs: ["Registros ajudam a reconstruir decisões, melhorar processos e apoiar obrigações aplicáveis. A comunicação deve ser coordenada para evitar mensagens conflitantes entre equipes técnicas, liderança, clientes ou terceiros."],
      },
      {
        heading: "Teste antes de precisar",
        paragraphs: ["Exercícios de mesa e simulações permitem descobrir contatos desatualizados, dependências desconhecidas e pontos de decisão pouco claros sem esperar um incidente real."],
      },
    ],
    related: [{ label: "SOC", to: "/servicos/soc" }, { label: "Consultoria em cibersegurança", to: "/consultoria-ciberseguranca" }],
  },
];

export function getArticle(slug: string | undefined) {
  return articles.find((article) => article.slug === slug);
}
