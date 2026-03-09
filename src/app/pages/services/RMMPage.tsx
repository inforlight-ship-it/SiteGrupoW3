import { Network } from "lucide-react";
import { ServiceDetailPage } from "../../components/ServiceDetailPage";

export function RMMPage() {
  return (
    <ServiceDetailPage
      icon={Network}
      title="RMM - Remote Monitoring and Management"
      subtitle="Monitoramento Proativo e Gestão Remota da Infraestrutura de TI"
      description="Mantenha sua infraestrutura de TI funcionando perfeitamente com nosso serviço de RMM (Remote Monitoring and Management). Oferecemos monitoramento proativo 24/7, gestão remota de dispositivos, automação de tarefas e resolução rápida de problemas antes que impactem suas operações."
      imageUrl="https://staticfiles.acronis.com/images/blog-cover/e5d9fec0289146637b4d02aab859e01b.png"
      benefits={[
        "Redução de downtime e interrupções",
        "Identificação proativa de problemas",
        "Aumento de produtividade da equipe de TI",
        "Redução de custos operacionais",
        "Visibilidade completa da infraestrutura",
        "Resolução remota rápida de incidentes",
        "Relatórios detalhados de performance",
      ]}
      features={[
        "Monitoramento 24/7 de servidores e estações",
        "Alertas automáticos de problemas",
        "Gestão remota de dispositivos",
        "Automação de patches e atualizações",
        "Gerenciamento de inventário de hardware/software",
        "Monitoramento de performance e recursos",
        "Scripts de automação personalizados",
        "Relatórios e dashboards customizáveis",
        "Integração com helpdesk",
      ]}
      technologies={[
        "N-able",
        "Datto RMM",
        "ConnectWise Automate",
        "NinjaRMM",
        "Kaseya",
        "PRTG",
        "PowerShell",
      ]}
      whatsappMessage="Olá! Gostaria de saber mais sobre o serviço de RMM (Remote Monitoring and Management)."
      color="from-cyan-500 to-blue-500"
    />
  );
}