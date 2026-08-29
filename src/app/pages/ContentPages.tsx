import { ArrowLeft, ArrowRight, Clock } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { SEO } from "../components/SEO";
import { articles, getArticle } from "../content/articles";

export function ContentCenterPage() {
  return (
    <main className="w3-content-page">
      <SEO title="Conteúdos de Cibersegurança e TI | Grupo W3" description="Conteúdos práticos sobre SOC, NOC, ransomware, EDR, firewall, backup e resposta a incidentes para empresas." path="/conteudos" />
      <div className="w3-container">
        <header className="w3-content-head">
          <span className="w3-section-eyebrow">CENTRO DE CONTEÚDO</span>
          <h1>Segurança e infraestrutura <strong>explicadas sem ruído.</strong></h1>
          <p>Materiais para ajudar gestores e equipes de TI a entender conceitos, riscos e decisões antes de escolher uma ferramenta ou serviço.</p>
        </header>
        <div className="w3-content-grid">
          {articles.map((article, index) => (
            <Link to={`/conteudos/${article.slug}`} className="w3-content-card" key={article.slug}>
              <div><span>{article.category}</span><small>{String(index + 1).padStart(2, "0")}</small></div>
              <h2>{article.title}</h2>
              <p>{article.description}</p>
              <footer><span><Clock size={14} /> {article.readingTime}</span><span>Ler artigo <ArrowRight size={15} /></span></footer>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}

export function ArticlePage() {
  const { slug } = useParams();
  const article = getArticle(slug);

  if (!article) {
    return (
      <main className="w3-content-page"><div className="w3-container w3-article-missing"><h1>Conteúdo não encontrado.</h1><Link to="/conteudos">Voltar aos conteúdos</Link></div></main>
    );
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    author: { "@type": "Organization", name: "Grupo W3" },
    publisher: { "@type": "Organization", name: "Grupo W3", url: "https://grupow3.com" },
    datePublished: "2026-08-29",
    dateModified: "2026-08-29",
    mainEntityOfPage: `https://grupow3.com/conteudos/${article.slug}`,
  };

  return (
    <main className="w3-article-page">
      <SEO title={article.seoTitle} description={article.description} path={`/conteudos/${article.slug}`} type="article" schema={schema} />
      <div className="w3-container w3-article-container">
        <Link to="/conteudos" className="w3-content-back"><ArrowLeft size={16} /> Centro de conteúdo</Link>
        <header className="w3-article-head">
          <div className="w3-article-meta"><span>{article.category}</span><span><Clock size={14} /> {article.readingTime}</span></div>
          <h1>{article.title}</h1>
          <p>{article.intro}</p>
        </header>
        <article className="w3-article-body">
          {article.sections.map((section) => (
            <section key={section.heading}>
              <h2>{section.heading}</h2>
              {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              {section.bullets && <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>}
            </section>
          ))}
        </article>
        <aside className="w3-article-related">
          <span className="w3-section-eyebrow">PRÓXIMOS PASSOS</span>
          <h2>Continue pelo tema que faz sentido para o seu cenário.</h2>
          <div>{article.related.map((item) => <Link key={item.to} to={item.to}>{item.label}<ArrowRight size={16} /></Link>)}</div>
        </aside>
      </div>
    </main>
  );
}
