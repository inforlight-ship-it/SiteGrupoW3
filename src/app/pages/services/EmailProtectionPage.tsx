import { Mail } from "lucide-react";
import { ServiceDetailPage } from "../../components/ServiceDetailPage";

export function EmailProtectionPage() {
  return (
    <ServiceDetailPage
      icon={Mail}
      title="Proteção de Email"
      subtitle="Segurança Completa com Acronis, Melhor Fabricante do Mercado"
      description="Garanta a proteção completa das comunicações por email da sua empresa com soluções Acronis, líder mundial em proteção de dados. Oferecemos proteção avançada contra phishing, malware, ransomware e ataques de engenharia social, além de backup e recuperação de emails para garantir continuidade do negócio."
      imageUrl="https://staticfiles.acronis.com/images/blog-cover/6ec60be731f346788958954e3d3f5ce0.webp"
      benefits={[
        "Proteção contra phishing e spear phishing",
        "Bloqueio de malware e ransomware",
        "Prevenção de vazamento de dados",
        "Conformidade com LGPD e regulamentações",
        "Backup automático de emails",
        "Recuperação rápida de mensagens",
        "Reputação e confiabilidade reforçadas",
      ]}
      features={[
        "Filtro avançado anti-spam e anti-phishing",
        "Análise de URLs e anexos em sandbox",
        "Proteção contra engenharia social",
        "Criptografia de emails sensíveis",
        "DLP (Data Loss Prevention)",
        "Backup contínuo de caixas de correio",
        "Arquivamento e retenção de emails",
        "Recuperação granular de mensagens",
        "Proteção para Microsoft 365 e Google Workspace",
      ]}
      technologies={[
        "Acronis Cyber Protect",
        "Acronis Email Security",
        "Microsoft 365 Integration",
        "Google Workspace Integration",
        "Advanced Threat Protection",
        "Cloud-based Security",
      ]}
      whatsappMessage="Olá! Gostaria de saber mais sobre a Proteção de Email com Acronis."
      color="from-rose-500 to-pink-500"
    />
  );
}