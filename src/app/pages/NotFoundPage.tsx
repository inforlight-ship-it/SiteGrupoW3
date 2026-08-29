import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { SEO } from "../components/SEO";

export function NotFoundPage() {
  return (
    <main className="w3-not-found">
      <SEO title="Página não encontrada | Grupo W3" description="A página que você tentou acessar não foi encontrada." path="/404" noindex />
      <div className="w3-container">
        <span>404</span>
        <h1>Esta rota não faz parte da operação.</h1>
        <p>Volte para o site principal e encontre nossas soluções, cases e conteúdos sobre cibersegurança e infraestrutura.</p>
        <Link to="/"><ArrowLeft size={17} /> Voltar para o Grupo W3</Link>
      </div>
    </main>
  );
}
