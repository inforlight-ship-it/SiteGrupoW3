import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { SEO } from "../components/SEO";

type LegalSection = { title: string; paragraphs?: string[]; items?: string[] };

type LegalPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  path: string;
  sections: LegalSection[];
};

function LegalPage({ eyebrow, title, description, path, sections }: LegalPageProps) {
  return (
    <main className="w3-legal-page">
      <SEO title={`${title} | Grupo W3`} description={description} path={path} />
      <div className="w3-container w3-legal-container">
        <Link to="/" className="w3-legal-back"><ArrowLeft size={16} /> Voltar para o site</Link>
        <header className="w3-legal-head">
          <span className="w3-section-eyebrow">{eyebrow}</span>
          <h1>{title}</h1>
          <p>{description}</p>
          <small>Última atualização: 29 de agosto de 2026</small>
        </header>
        <div className="w3-legal-content">
          {sections.map((section) => (
            <section key={section.title}>
              <h2>{section.title}</h2>
              {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              {section.items && <ul>{section.items.map((item) => <li key={item}>{item}</li>)}</ul>}
            </section>
          ))}
        </div>
        <aside className="w3-legal-note">
          Este conteúdo descreve as práticas operacionais do site e deve ser revisado periodicamente quando ferramentas, fornecedores ou fluxos de dados forem alterados. Ele não substitui assessoria jurídica específica.
        </aside>
      </div>
    </main>
  );
}

export function PrivacyPage() {
  return <LegalPage
    eyebrow="PRIVACIDADE E LGPD"
    title="Política de Privacidade"
    description="Como o site do Grupo W3 trata informações fornecidas por visitantes, contatos comerciais e dados de navegação."
    path="/privacidade"
    sections={[
      {
        title: "1. Quem é responsável pelo site",
        paragraphs: ["O Grupo W3 é responsável pelo conteúdo e pelos fluxos de contato deste site. Dúvidas sobre privacidade podem ser encaminhadas para contato@grupow3.com."],
      },
      {
        title: "2. Dados fornecidos pelo visitante",
        paragraphs: ["O formulário de contato coleta os campos preenchidos somente para preparar uma mensagem. Ao clicar em continuar, o navegador abre o WhatsApp com essas informações; o site não envia automaticamente o conteúdo do formulário para um banco de dados próprio."],
        items: ["Nome", "Empresa, quando informado", "Telefone", "E-mail", "Contexto ou mensagem digitada pelo visitante"],
      },
      {
        title: "3. Diagnóstico preliminar de segurança",
        paragraphs: ["As respostas do Security Posture Check são calculadas localmente no navegador e não são transmitidas ao Grupo W3. Se o visitante decidir iniciar uma conversa pelo WhatsApp, somente a pontuação e a faixa de resultado são incluídas na mensagem preparada."],
      },
      {
        title: "4. Analytics e cookies",
        paragraphs: ["O site está preparado para utilizar Google Analytics/Google Tag Manager mediante configuração e consentimento. A configuração padrão do código nega armazenamento analítico e publicitário até que a plataforma de consentimento registre uma escolha aplicável."],
      },
      {
        title: "5. Serviços de terceiros",
        paragraphs: ["Ao usar links para WhatsApp, Instagram, e-mail ou outros serviços externos, o visitante passa a interagir com plataformas sujeitas às políticas de privacidade dos respectivos fornecedores."],
      },
      {
        title: "6. Finalidades",
        items: ["Responder solicitações comerciais e técnicas iniciadas pelo visitante", "Entender interesse em soluções e conteúdo do site quando analytics estiver habilitado com consentimento", "Manter segurança, disponibilidade e funcionamento técnico da aplicação", "Atender obrigações legais quando aplicáveis"],
      },
      {
        title: "7. Direitos do titular",
        paragraphs: ["Solicitações relacionadas a acesso, correção, informação, oposição ou outros direitos aplicáveis podem ser encaminhadas para contato@grupow3.com. A análise dependerá do contexto e da base legal aplicável ao tratamento."],
      },
      {
        title: "8. Retenção e segurança",
        paragraphs: ["O site procura limitar coleta ao necessário e aplicar medidas técnicas compatíveis com sua arquitetura. Informações que passam a ser tratadas em plataformas externas, como WhatsApp ou e-mail, seguem também os controles e políticas desses ambientes."],
      },
    ]}
  />;
}

export function CookiesPage() {
  return <LegalPage
    eyebrow="COOKIES E PREFERÊNCIAS"
    title="Política de Cookies"
    description="Entenda quais categorias podem ser utilizadas no site e como suas preferências de consentimento são tratadas."
    path="/cookies"
    sections={[
      {
        title: "1. O que são cookies",
        paragraphs: ["Cookies e tecnologias semelhantes podem armazenar pequenas informações no navegador para viabilizar funcionalidades, lembrar preferências ou medir utilização do site."],
      },
      {
        title: "2. Categorias utilizadas",
        items: ["Necessários: recursos essenciais para funcionamento, segurança e preferências de consentimento", "Analíticos: medição de páginas e conversões quando a configuração de analytics estiver ativa e houver consentimento aplicável", "Publicitários: o código do site não concede armazenamento publicitário por padrão; eventuais tecnologias dessa categoria devem respeitar as preferências registradas na CMP"],
      },
      {
        title: "3. Gestão de consentimento",
        paragraphs: ["O site utiliza a AdOpt como plataforma de gestão de consentimento. O visitante pode aceitar, recusar ou configurar categorias disponibilizadas pelo banner de privacidade. As preferências registradas devem ser respeitadas pelas tags configuradas no ambiente."],
      },
      {
        title: "4. Google Consent Mode",
        paragraphs: ["A camada de analytics do site inicia com sinais de armazenamento analítico e publicitário negados. Quando GTM/GA4 forem ativados, a integração deve ser validada para que o Consent Mode reflita a escolha registrada na AdOpt."],
      },
      {
        title: "5. Navegador",
        paragraphs: ["O visitante também pode excluir ou bloquear cookies nas configurações do navegador. Dependendo do bloqueio, determinadas funções ou preferências podem não persistir entre visitas."],
      },
    ]}
  />;
}

export function TermsPage() {
  return <LegalPage
    eyebrow="CONDIÇÕES DE USO"
    title="Termos de Uso"
    description="Condições gerais para utilização do site institucional e de seus recursos informativos."
    path="/termos-de-uso"
    sections={[
      {
        title: "1. Finalidade do site",
        paragraphs: ["O site apresenta informações institucionais, serviços, cases, materiais educativos e formas de contato com o Grupo W3. A navegação não cria, por si só, relação contratual ou obrigação de prestação de serviço."],
      },
      {
        title: "2. Conteúdo técnico",
        paragraphs: ["Informações sobre cibersegurança e infraestrutura possuem caráter geral e não substituem análise do ambiente, escopo contratado, assessment, auditoria, pentest ou orientação profissional específica."],
      },
      {
        title: "3. Security Posture Check",
        paragraphs: ["A pontuação do diagnóstico preliminar depende exclusivamente das respostas fornecidas pelo visitante e serve como triagem educacional. O resultado não certifica conformidade, segurança, ausência de vulnerabilidades ou nível formal de maturidade."],
      },
      {
        title: "4. Cases e marcas",
        paragraphs: ["Cases descrevem escopos de atuação informados pelo Grupo W3. Marcas e nomes de terceiros pertencem aos respectivos titulares e sua menção não implica endosso além do contexto explicitamente apresentado."],
      },
      {
        title: "5. Links externos",
        paragraphs: ["Links para WhatsApp, redes sociais e outros serviços levam a ambientes de terceiros. O Grupo W3 não controla disponibilidade, políticas ou conteúdo desses serviços externos."],
      },
      {
        title: "6. Propriedade intelectual",
        paragraphs: ["Textos, identidade visual, componentes e materiais próprios do site são protegidos pela legislação aplicável, ressalvados elementos de terceiros e licenças indicadas no projeto."],
      },
      {
        title: "7. Atualizações",
        paragraphs: ["Conteúdos, funcionalidades e estes termos podem ser atualizados para refletir mudanças técnicas, legais ou operacionais."],
      },
    ]}
  />;
}
