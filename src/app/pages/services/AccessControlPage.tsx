import { ScanFace } from "lucide-react";
import { ServiceDetailPage } from "../../components/ServiceDetailPage";

export function AccessControlPage() {
  return (
    <ServiceDetailPage
      icon={ScanFace}
      title="Controle de Acesso"
      subtitle="Tecnologias Avançadas com IA e Paravision para Identificação Precisa"
      description="Revolucione a segurança física da sua organização com nossas soluções avançadas de controle de acesso. Utilizamos tecnologias de ponta com inteligência artificial e a plataforma Paravision para reconhecimento facial preciso e seguro, garantindo identificação confiável e gestão eficiente de acessos."
      imageUrl="https://securitybusiness.com.br/wp-content/uploads/2025/12/controledeacesso-hidinvenzi-securitybusiness.jpeg"
      benefits={[
        "Identificação facial precisa e segura",
        "Eliminação de cartões e senhas perdidos",
        "Registro completo de acessos em tempo real",
        "Integração com sistemas de segurança existentes",
        "Controle granular de permissões",
        "Redução de fraudes e acessos não autorizados",
        "Conformidade com LGPD e privacidade",
      ]}
      features={[
        "Reconhecimento facial com IA avançada",
        "Tecnologia Paravision de alta precisão",
        "Múltiplos fatores de autenticação",
        "Controle de acesso baseado em funções",
        "Integração com catracas e portas",
        "Dashboard de monitoramento em tempo real",
        "Alertas de tentativas não autorizadas",
        "Relatórios detalhados de acessos",
        "Gestão centralizada de credenciais",
      ]}
      technologies={[
        "Paravision AI",
        "Biometria Facial",
        "Machine Learning",
        "RFID/NFC",
        "HID Global",
        "Honeywell",
        "Intelbras",
      ]}
      whatsappMessage="Olá! Gostaria de saber mais sobre as soluções de Controle de Acesso com IA e Paravision."
      color="from-violet-500 to-fuchsia-500"
    />
  );
}