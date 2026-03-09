import { HardDrive } from "lucide-react";
import { ServiceDetailPage } from "../../components/ServiceDetailPage";

export function BackupServicePage() {
  return (
    <ServiceDetailPage
      icon={HardDrive}
      title="Backup as a Service"
      subtitle="Proteção Automática e Redundante dos Seus Dados Críticos"
      description="Proteja os ativos mais importantes da sua empresa com nosso serviço de Backup as a Service. Oferecemos solução completa de backup automático, redundante e seguro, com recuperação rápida em casos de emergência, garantindo a continuidade do seu negócio e proteção contra perda de dados."
      imageUrl="https://blog.datasafer.com.br/wp-content/uploads/2023/12/backup-em-nuvem.webp"
      benefits={[
        "Proteção contra perda de dados e ransomware",
        "Recuperação rápida de desastres (RTO/RPO otimizado)",
        "Custos previsíveis sem investimento em infraestrutura",
        "Conformidade com regulamentações de retenção",
        "Redundância geográfica dos dados",
        "Automação completa de backup",
        "Paz de espírito para gestores e proprietários",
      ]}
      features={[
        "Backup automático agendado",
        "Múltiplas cópias em locais diferentes",
        "Criptografia de dados em trânsito e repouso",
        "Backup incremental e diferencial",
        "Recuperação granular de arquivos",
        "Teste periódico de restauração",
        "Dashboard de monitoramento em tempo real",
        "Retenção personalizável de dados",
        "Backup de VMs, banco de dados e aplicações",
      ]}
      technologies={[
        "Veeam",
        "Acronis",
        "Commvault",
        "AWS S3",
        "Azure Backup",
        "Immutable Storage",
      ]}
      whatsappMessage="Olá! Gostaria de saber mais sobre o serviço de Backup as a Service."
      color="from-orange-500 to-red-500"
    />
  );
}