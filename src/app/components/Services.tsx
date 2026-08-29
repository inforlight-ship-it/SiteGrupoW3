import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Database, FileCheck, HardDrive, Lock, Mail, Network, Radar, ScanFace, Server, Shield, Video } from "lucide-react";

const services = [
  { icon: Radar, title: "SOC", category: "Operação 24×7", description: "Detecção, análise e resposta a incidentes para reduzir o tempo entre ameaça e contenção.", link: "/servicos/soc" },
  { icon: Network, title: "NOC", category: "Operação 24×7", description: "Monitoramento contínuo da disponibilidade e performance da infraestrutura de rede.", link: "/servicos/noc" },
  { icon: Server, title: "RMM", category: "Operação 24×7", description: "Gestão remota e proativa de servidores, estações e ativos críticos de TI.", link: "/servicos/rmm" },
  { icon: Shield, title: "Proteções EDR", category: "Proteção", description: "Visibilidade e resposta avançada a ameaças nos endpoints da organização.", link: "/servicos/protecoes-edr" },
  { icon: Lock, title: "Firewall", category: "Proteção", description: "Controle perimetral, segmentação e políticas de segurança para o tráfego corporativo.", link: "/servicos/firewall" },
  { icon: Mail, title: "Proteção de Email", category: "Proteção", description: "Camada adicional de segurança para reduzir phishing, malware e riscos nas comunicações.", link: "/servicos/protecao-email" },
  { icon: HardDrive, title: "Backup as a Service", category: "Resiliência", description: "Proteção de dados e recuperação para reduzir impacto operacional em falhas ou incidentes.", link: "/servicos/backup-as-a-service" },
  { icon: Database, title: "Gerenciamento de Datacenter", category: "Infraestrutura", description: "Administração de ambientes físicos e virtuais com foco em disponibilidade e desempenho.", link: "/servicos/gerenciamento-datacenter" },
  { icon: Server, title: "CIO as a Service", category: "Estratégia", description: "Gestão executiva de TI alinhando investimento, risco, operação e objetivos do negócio.", link: "/servicos/cio-as-a-service" },
  { icon: FileCheck, title: "DPO as a Service", category: "Governança", description: "Apoio especializado à conformidade com LGPD e à governança de dados pessoais.", link: "/servicos/dpo-as-a-service" },
  { icon: ScanFace, title: "Controle de Acesso", category: "Segurança Física", description: "Identificação e controle de acesso com tecnologias de biometria e inteligência aplicada.", link: "/servicos/controle-acesso" },
  { icon: Video, title: "Segurança CFTV", category: "Segurança Física", description: "Videomonitoramento integrado para ampliar visibilidade e proteção do ambiente físico.", link: "/servicos/seguranca-cftv" },
];

export function Services() {
  const contact = () => {
    const message = encodeURIComponent("Olá! Gostaria de entender quais soluções do Grupo W3 fazem sentido para o meu ambiente.");
    window.open(`https://wa.me/5515988189999?text=${message}`, "_blank");
  };

  return (
    <section id="servicos" className="w3-section w3-services-section">
      <div className="w3-container">
        <div className="w3-section-head w3-section-head-split">
          <div>
            <span className="w3-section-eyebrow">PORTFÓLIO DE SOLUÇÕES</span>
            <h2 className="w3-section-title">Uma camada de segurança <strong>para cada ponto crítico.</strong></h2>
          </div>
          <p className="w3-section-lead">Da estratégia à operação 24×7, a W3 conecta segurança, infraestrutura, dados e governança em uma arquitetura mais simples de administrar.</p>
        </div>

        <div className="w3-service-grid">
          {services.map(({ icon: Icon, title, category, description, link }, index) => (
            <motion.article key={title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.4, delay: (index % 4) * 0.04 }}>
              <Link to={link} className="w3-service-card">
                <div className="w3-service-card-top">
                  <div className="w3-service-icon"><Icon size={21} /></div>
                  <span className="w3-service-index">{String(index + 1).padStart(2, "0")}</span>
                </div>
                <span className="w3-service-category">{category}</span>
                <h3>{title}</h3>
                <p>{description}</p>
                <div className="w3-service-link">Conhecer solução <ArrowUpRight size={16} /></div>
              </Link>
            </motion.article>
          ))}
        </div>

        <div className="w3-services-cta">
          <div>
            <span className="w3-section-eyebrow">NÃO SABE POR ONDE COMEÇAR?</span>
            <h3>Mapeamos o cenário e ajudamos a priorizar o que realmente reduz risco.</h3>
          </div>
          <button className="w3-btn-primary" onClick={contact}>Conversar com um especialista</button>
        </div>
      </div>
    </section>
  );
}
