import { Server } from "lucide-react";
import { ServiceDetailPage } from "../../components/ServiceDetailPage";

export function CIOServicePage() {
  return (
    <ServiceDetailPage
      icon={Server}
      title="CIO as a Service"
      subtitle="Gestão Estratégica de TI com Expertise Executiva"
      description="Transforme sua área de tecnologia com a liderança estratégica de um CIO experiente, sem os custos de uma contratação em tempo integral. Nosso serviço de CIO as a Service oferece expertise executiva de alto nível para otimizar recursos, alinhar tecnologia aos objetivos de negócio e impulsionar a transformação digital da sua organização."
      imageUrl="https://it-scale.ch/wp-content/uploads/2025/04/Datenverwaltung-2048x1365-1-1024x683.webp"
      benefits={[
        "Redução de custos com contratação de executivo em tempo integral",
        "Acesso a expertise e melhores práticas do mercado",
        "Visão estratégica externa e imparcial",
        "Alinhamento entre TI e objetivos de negócio",
        "Governança de TI estruturada e eficiente",
        "Otimização de investimentos em tecnologia",
        "Gestão de mudanças e transformação digital",
      ]}
      features={[
        "Planejamento estratégico de TI alinhado ao negócio",
        "Governança e compliance tecnológico",
        "Gestão de orçamento e investimentos em TI",
        "Seleção e gestão de fornecedores",
        "Liderança de projetos de transformação digital",
        "Definição de políticas e processos de TI",
        "Análise de riscos e continuidade de negócios",
        "Desenvolvimento de roadmap tecnológico",
      ]}
      technologies={[
        "ITIL",
        "COBIT",
        "ISO 27001",
        "PMI",
        "Agile & DevOps",
        "Cloud Computing",
      ]}
      whatsappMessage="Olá! Gostaria de saber mais sobre o serviço de CIO as a Service e como pode ajudar minha empresa."
      color="from-blue-500 to-cyan-500"
    />
  );
}