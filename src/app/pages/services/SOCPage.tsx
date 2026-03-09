import { AlertTriangle } from "lucide-react";
import { ServiceDetailPage } from "../../components/ServiceDetailPage";

export function SOCPage() {
  return (
    <ServiceDetailPage
      icon={AlertTriangle}
      title="SOC - Security Operations Center"
      subtitle="Detecção, Análise e Resposta Dedicada a Incidentes de Segurança"
      description="Proteja sua organização contra ameaças cibernéticas com nosso SOC (Security Operations Center) dedicado. Oferecemos monitoramento contínuo de segurança 24/7, detecção avançada de ameaças, análise forense, resposta a incidentes e threat hunting proativo para manter sua empresa protegida."
      imageUrl="https://www.netsecurity.com/wp-content/uploads/2022/07/security.jpg"
      benefits={[
        "Detecção precoce de ameaças e ataques",
        "Resposta rápida a incidentes de segurança",
        "Redução do tempo de exposição a ameaças",
        "Visibilidade completa do ambiente",
        "Expertise em segurança cibernética",
        "Conformidade com regulamentações",
        "Proteção contínua 24x7x365",
      ]}
      features={[
        "Monitoramento de segurança 24/7",
        "Correlação de eventos com SIEM",
        "Threat intelligence integrado",
        "Análise comportamental de ameaças",
        "Resposta automatizada a incidentes",
        "Threat hunting proativo",
        "Análise forense de incidentes",
        "Gestão de vulnerabilidades",
        "Relatórios de compliance e auditoria",
      ]}
      technologies={[
        "Splunk",
        "IBM QRadar",
        "Microsoft Sentinel",
        "AlienVault",
        "Elastic SIEM",
        "MITRE ATT&CK",
        "SOAR Platforms",
      ]}
      whatsappMessage="Olá! Gostaria de saber mais sobre o serviço de SOC (Security Operations Center)."
      color="from-yellow-500 to-orange-500"
    />
  );
}