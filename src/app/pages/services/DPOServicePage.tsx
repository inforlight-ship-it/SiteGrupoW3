import { FileCheck } from "lucide-react";
import { ServiceDetailPage } from "../../components/ServiceDetailPage";

export function DPOServicePage() {
  return (
    <ServiceDetailPage
      icon={FileCheck}
      title="DPO as a Service"
      subtitle="Data Protection Officer Dedicado para Conformidade com LGPD"
      description="Garanta a conformidade da sua organização com a Lei Geral de Proteção de Dados (LGPD) com nosso serviço de DPO as a Service. Oferecemos um Data Protection Officer dedicado para proteger dados pessoais, implementar políticas de privacidade e garantir que sua empresa esteja em conformidade com todas as regulamentações de proteção de dados."
      imageUrl="https://truzzi.com.br/wp-content/uploads/2024/08/DPO-O-Profissional-Indispensavel-na-Era-da-Protecao-de-Dados.jpg"
      benefits={[
        "Conformidade total com LGPD e regulamentações internacionais",
        "Redução de riscos de multas e penalidades",
        "Proteção da reputação da empresa",
        "Aumento da confiança de clientes e parceiros",
        "Gestão adequada de incidentes de segurança",
        "Custo-benefício em relação à contratação interna",
        "Expertise especializada em proteção de dados",
      ]}
      features={[
        "Mapeamento e inventário de dados pessoais",
        "Elaboração de políticas de privacidade",
        "Implementação de processos de consentimento",
        "Gestão de direitos dos titulares de dados",
        "Análise de impacto à proteção de dados (DPIA)",
        "Treinamento e conscientização de equipes",
        "Resposta a incidentes e violações de dados",
        "Comunicação com autoridades reguladoras (ANPD)",
      ]}
      technologies={[
        "LGPD",
        "GDPR",
        "ISO 27701",
        "Privacy by Design",
        "Data Mapping Tools",
        "Compliance Management",
      ]}
      whatsappMessage="Olá! Gostaria de saber mais sobre o serviço de DPO as a Service e adequação à LGPD."
      color="from-purple-500 to-pink-500"
    />
  );
}