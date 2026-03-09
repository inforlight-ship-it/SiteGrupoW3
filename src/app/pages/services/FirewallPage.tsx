import { Lock } from "lucide-react";
import { ServiceDetailPage } from "../../components/ServiceDetailPage";

export function FirewallPage() {
  return (
    <ServiceDetailPage
      icon={Lock}
      title="Firewall"
      subtitle="Soluções de Firewall de Próxima Geração para Proteção Perimetral"
      description="Proteja o perímetro da sua rede com nossas soluções de firewall de próxima geração (NGFW). Oferecemos proteção avançada com inspeção profunda de pacotes, prevenção de intrusões, filtragem de conteúdo e controle granular de aplicações para manter sua rede segura contra ameaças externas e internas."
      imageUrl="https://securitybrief.com.au/uploads/story/2025/08/14/detailed-digital-illustration-modern-firewall-with-glowing-digital-shield-and-cyber-threats-blocked-on-network-backdrop.webp"
      benefits={[
        "Proteção perimetral robusta da rede",
        "Prevenção de ataques e intrusões",
        "Controle granular de tráfego",
        "Visibilidade completa de aplicações",
        "Proteção contra malware e ransomware",
        "Filtragem de conteúdo web",
        "Conformidade com políticas de segurança",
      ]}
      features={[
        "Firewall de próxima geração (NGFW)",
        "Sistema de prevenção de intrusões (IPS)",
        "Inspeção profunda de pacotes (DPI)",
        "Controle de aplicações e usuários",
        "VPN site-to-site e remote access",
        "Filtragem de URLs e proteção web",
        "Proteção contra ameaças avançadas",
        "Alta disponibilidade e redundância",
        "Logs e relatórios detalhados",
      ]}
      technologies={[
        "Fortinet FortiGate",
        "Palo Alto Networks",
        "Cisco Firepower",
        "pfSense",
        "Sophos XG",
        "WatchGuard",
      ]}
      whatsappMessage="Olá! Gostaria de saber mais sobre as soluções de Firewall de próxima geração."
      color="from-red-500 to-orange-500"
    />
  );
}