import { Video } from "lucide-react";
import { ServiceDetailPage } from "../../components/ServiceDetailPage";

export function CCTVPage() {
  return (
    <ServiceDetailPage
      icon={Video}
      title="Segurança CFTV"
      subtitle="Videomonitoramento com Melhores Players e Tecnologias de Última Geração"
      description="Proteja seu patrimônio com nossas soluções completas de CFTV (Circuito Fechado de TV). Trabalhamos com os melhores fabricantes do mercado e oferecemos tecnologias de ponta com câmeras de alta resolução, analytics com inteligência artificial, armazenamento redundante e monitoramento remoto 24/7."
      imageUrl="https://www.icseecam.com/wp-content/uploads/2025/01/Bosch-Sicherheitssysteme-GmbH.jpg"
      benefits={[
        "Monitoramento 24/7 em alta resolução",
        "Deterrência de crimes e vandalismo",
        "Evidências visuais para investigações",
        "Integração com sistemas de alarme",
        "Acesso remoto via smartphone",
        "Análise inteligente com IA",
        "Redução de perdas e sinistros",
      ]}
      features={[
        "Câmeras IP de alta resolução (4K/8K)",
        "Visão noturna avançada (Starlight)",
        "Analytics com inteligência artificial",
        "Detecção de pessoas e veículos",
        "Reconhecimento facial integrado",
        "Armazenamento local e em nuvem",
        "Gravação contínua e por evento",
        "Acesso remoto multiplataforma",
        "Integração com controle de acesso",
      ]}
      technologies={[
        "Hikvision",
        "Dahua",
        "Axis Communications",
        "Hanwha Vision",
        "Bosch",
        "Intelbras",
        "Milestone XProtect",
        "Genetec",
      ]}
      whatsappMessage="Olá! Gostaria de saber mais sobre as soluções de Segurança CFTV de última geração."
      color="from-sky-500 to-indigo-500"
    />
  );
}