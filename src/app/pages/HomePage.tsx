import { Hero } from "../components/Hero";
import { SocialProof } from "../components/SocialProof";
import { CaseStudies } from "../components/CaseStudies";
import { Capabilities } from "../components/Capabilities";
import { Services } from "../components/Services";
import { SocNoc } from "../components/SocNoc";
import { SecurityOperations } from "../components/SecurityOperations";
import { DiagnosticCTA } from "../components/DiagnosticCTA";
import { About } from "../components/About";
import { Contact } from "../components/Contact";

export function HomePage() {
  return (
    <>
      <Hero />
      <SocialProof />
      <CaseStudies />
      <Capabilities />
      <Services />
      <SocNoc />
      <SecurityOperations />
      <DiagnosticCTA />
      <About />
      <Contact />
    </>
  );
}
