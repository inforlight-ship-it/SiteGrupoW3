import { SEO, organizationSchema } from "../components/SEO";
import { Hero } from "../components/Hero";
import { SocialProof } from "../components/SocialProof";
import { CaseStudies } from "../components/CaseStudies";
import { Capabilities } from "../components/Capabilities";
import { BeforeAfter } from "../components/BeforeAfter";
import { Services } from "../components/Services";
import { SocNoc } from "../components/SocNoc";
import { SecurityOperations } from "../components/SecurityOperations";
import { ProblemLinks } from "../components/ProblemLinks";
import { DiagnosticCTA } from "../components/DiagnosticCTA";
import { About } from "../components/About";
import { Contact } from "../components/Contact";

export function HomePage() {
  return (
    <>
      <SEO
        title="Grupo W3 | Cibersegurança, SOC, NOC e Infraestrutura de TI"
        description="Cibersegurança, SOC e NOC 24×7, infraestrutura, backup, endpoints, redes e consultoria para empresas. Conheça a operação integrada do Grupo W3."
        path="/"
        schema={organizationSchema}
      />
      <Hero />
      <SocialProof />
      <CaseStudies />
      <Capabilities />
      <BeforeAfter />
      <Services />
      <SocNoc />
      <SecurityOperations />
      <ProblemLinks />
      <DiagnosticCTA />
      <About />
      <Contact />
    </>
  );
}
