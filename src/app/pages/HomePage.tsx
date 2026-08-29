import { Hero } from "../components/Hero";
import { Capabilities } from "../components/Capabilities";
import { Services } from "../components/Services";
import { SecurityOperations } from "../components/SecurityOperations";
import { About } from "../components/About";
import { Contact } from "../components/Contact";

export function HomePage() {
  return (
    <>
      <Hero />
      <Capabilities />
      <Services />
      <SecurityOperations />
      <About />
      <Contact />
    </>
  );
}
