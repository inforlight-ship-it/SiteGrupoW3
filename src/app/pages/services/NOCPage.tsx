import { Eye } from "lucide-react";
import { ServiceDetailPage } from "../../components/ServiceDetailPage";

export function NOCPage() {
  return (
    <ServiceDetailPage
      icon={Eye}
      title="NOC - Network Operations Center"
      subtitle="Monitoramento Contínuo 24/7 da Infraestrutura de Rede"
      description="Garanta o funcionamento contínuo da sua infraestrutura de rede com nosso NOC (Network Operations Center) operando 24/7. Oferecemos monitoramento proativo, gestão de incidentes, manutenção preventiva e suporte técnico especializado para maximizar a disponibilidade e performance da sua rede."
      imageUrl="https://bdrive.ai/images/blog-img/noc/noc-guia-1.png"
      benefits={[
        "Monitoramento 24x7x365 da infraestrutura",
        "Redução de downtime e interrupções",
        "Resposta rápida a incidentes de rede",
        "Otimização de performance",
        "Custos reduzidos em comparação ao NOC interno",
        "Equipe especializada sempre disponível",
        "Relatórios detalhados de disponibilidade",
      ]}
      features={[
        "Monitoramento em tempo real 24/7",
        "Gestão de incidentes e problemas",
        "Alertas proativos de anomalias",
        "Gerenciamento de mudanças",
        "Análise de performance e capacidade",
        "Troubleshooting e resolução de problemas",
        "Manutenção preventiva programada",
        "Escalação de incidentes críticos",
        "Documentação de procedimentos",
      ]}
      technologies={[
        "SolarWinds",
        "PRTG",
        "Zabbix",
        "Nagios",
        "Grafana",
        "ServiceNow",
        "Splunk",
      ]}
      whatsappMessage="Olá! Gostaria de saber mais sobre o serviço de NOC (Network Operations Center)."
      color="from-teal-500 to-green-500"
    />
  );
}