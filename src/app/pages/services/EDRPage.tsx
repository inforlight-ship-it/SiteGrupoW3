import { Shield } from "lucide-react";
import { ServiceDetailPage } from "../../components/ServiceDetailPage";

export function EDRPage() {
  return (
    <ServiceDetailPage
      icon={Shield}
      title="Proteções EDR"
      subtitle="Endpoint Detection and Response Avançado em Tempo Real"
      description="Proteja seus endpoints contra ameaças avançadas com nossa solução de EDR (Endpoint Detection and Response). Oferecemos detecção comportamental, resposta automática a incidentes e proteção em tempo real contra malware, ransomware e ataques zero-day, mantendo seus dispositivos seguros 24/7."
      imageUrl="https://itsocial.fr/wp-content/uploads/2024/01/acronisporylelentye.jpg"
      benefits={[
        "Proteção avançada contra ransomware e malware",
        "Detecção de ameaças zero-day",
        "Resposta automática a incidentes",
        "Visibilidade completa de endpoints",
        "Redução do tempo de resposta a incidentes",
        "Proteção de dados sensíveis",
        "Conformidade com requisitos de segurança",
      ]}
      features={[
        "Detecção comportamental de ameaças",
        "Machine Learning e IA para análise",
        "Resposta automática a incidentes",
        "Isolamento de dispositivos comprometidos",
        "Análise forense de ataques",
        "Proteção contra exploits e scripts maliciosos",
        "Rollback de ransomware",
        "Integração com SOC e SIEM",
        "Dashboard centralizado de ameaças",
      ]}
      technologies={[
        "CrowdStrike",
        "SentinelOne",
        "Microsoft Defender",
        "Carbon Black",
        "Sophos Intercept X",
        "Trend Micro",
      ]}
      whatsappMessage="Olá! Gostaria de saber mais sobre o serviço de Proteções EDR para endpoints."
      color="from-indigo-500 to-purple-500"
    />
  );
}