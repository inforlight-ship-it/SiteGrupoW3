import { Database } from "lucide-react";
import { ServiceDetailPage } from "../../components/ServiceDetailPage";

export function DatacenterPage() {
  return (
    <ServiceDetailPage
      icon={Database}
      title="Gerenciamento de Datacenter"
      subtitle="Administração Completa da Infraestrutura Física e Virtual"
      description="Maximize a performance e disponibilidade da sua infraestrutura com nosso serviço completo de gerenciamento de datacenter. Oferecemos administração especializada de ambiente físico e virtual, garantindo operação contínua, segurança e otimização de recursos para suportar as operações críticas do seu negócio."
      imageUrl="https://images.unsplash.com/photo-1695668548342-c0c1ad479aee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhY2VudGVyJTIwc2VydmVyJTIwaW5mcmFzdHJ1Y3R1cmV8ZW58MXx8fHwxNzcyNzQyMzk5fDA&ixlib=rb-4.1.0&q=80&w=1080"
      benefits={[
        "Alta disponibilidade e uptime garantido",
        "Redução de custos operacionais",
        "Escalabilidade sob demanda",
        "Monitoramento 24/7 da infraestrutura",
        "Otimização de recursos e performance",
        "Segurança física e lógica reforçada",
        "Equipe especializada dedicada",
      ]}
      features={[
        "Gestão de servidores físicos e virtuais",
        "Monitoramento proativo de infraestrutura",
        "Gerenciamento de capacidade e recursos",
        "Administração de redes e conectividade",
        "Controle de acesso e segurança física",
        "Gerenciamento de energia e refrigeração",
        "Backup e disaster recovery",
        "Manutenção preventiva e corretiva",
        "Documentação completa da infraestrutura",
      ]}
      technologies={[
        "VMware",
        "Hyper-V",
        "Cisco",
        "Dell EMC",
        "HPE",
        "Veeam",
        "Zabbix",
        "DCIM Tools",
      ]}
      whatsappMessage="Olá! Gostaria de saber mais sobre o serviço de Gerenciamento de Datacenter."
      color="from-green-500 to-emerald-500"
    />
  );
}
