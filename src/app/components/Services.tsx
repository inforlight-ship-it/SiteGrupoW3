import { motion } from "motion/react";
import { Link } from "react-router-dom";
import {
  Shield,
  Server,
  Database,
  Lock,
  Eye,
  Network,
  HardDrive,
  AlertTriangle,
  FileCheck,
  ScanFace,
  Video,
  Mail,
  ArrowRight,
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

const services = [
  {
    icon: Server,
    title: "CIO as a Service",
    description:
      "Gestão estratégica de TI com expertise executiva, otimizando recursos e alinhando tecnologia aos objetivos do negócio.",
    color: "from-blue-500 to-cyan-500",
    link: "/servicos/cio-as-a-service",
  },
  {
    icon: FileCheck,
    title: "DPO as a Service",
    description:
      "Data Protection Officer dedicado para conformidade com LGPD e proteção de dados pessoais da sua organização.",
    color: "from-purple-500 to-pink-500",
    link: "/servicos/dpo-as-a-service",
  },
  {
    icon: Database,
    title: "Gerenciamento de Datacenter",
    description:
      "Administração completa da infraestrutura física e virtual, garantindo performance e disponibilidade.",
    color: "from-green-500 to-emerald-500",
    link: "/servicos/gerenciamento-datacenter",
  },
  {
    icon: HardDrive,
    title: "Backup as a Service",
    description:
      "Proteção automática e redundante dos seus dados críticos com recuperação rápida em casos de emergência.",
    color: "from-orange-500 to-red-500",
    link: "/servicos/backup-as-a-service",
  },
  {
    icon: Network,
    title: "RMM",
    description:
      "Remote Monitoring and Management para monitoramento proativo e gestão remota de toda infraestrutura de TI.",
    color: "from-cyan-500 to-blue-500",
    link: "/servicos/rmm",
  },
  {
    icon: Shield,
    title: "Proteções EDR",
    description:
      "Endpoint Detection and Response avançado para detectar e responder a ameaças em tempo real nos endpoints.",
    color: "from-indigo-500 to-purple-500",
    link: "/servicos/protecoes-edr",
  },
  {
    icon: Lock,
    title: "Firewall",
    description:
      "Soluções de firewall de próxima geração para proteção perimetral e controle granular de tráfego de rede.",
    color: "from-red-500 to-orange-500",
    link: "/servicos/firewall",
  },
  {
    icon: Eye,
    title: "NOC",
    description:
      "Network Operations Center 24/7 para monitoramento contínuo e gestão proativa da infraestrutura de rede.",
    color: "from-teal-500 to-green-500",
    link: "/servicos/noc",
  },
  {
    icon: AlertTriangle,
    title: "SOC",
    description:
      "Security Operations Center dedicado à detecção, análise e resposta a incidentes de segurança.",
    color: "from-yellow-500 to-orange-500",
    link: "/servicos/soc",
  },
  {
    icon: ScanFace,
    title: "Controle de Acesso",
    description:
      "Tecnologias avançadas com inteligência artificial e Paravision para identificação precisa e segura de pessoas.",
    color: "from-violet-500 to-fuchsia-500",
    link: "/servicos/controle-acesso",
  },
  {
    icon: Video,
    title: "Segurança CFTV",
    description:
      "Trabalhando com os melhores players do mercado, oferecemos tecnologias de ponta e última geração em videomonitoramento.",
    color: "from-sky-500 to-indigo-500",
    link: "/servicos/seguranca-cftv",
  },
  {
    icon: Mail,
    title: "Proteção de Email",
    description:
      "Garantindo a proteção de email com o melhor fabricante do mercado, Acronis, para segurança completa das comunicações.",
    color: "from-rose-500 to-pink-500",
    link: "/servicos/protecao-email",
  },
];

export function Services() {
  return (
    <section id="servicos" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.5)_1px,transparent_1px)] bg-[size:30px_30px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Nossos <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Serviços</span>
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Soluções completas de cibersegurança e consultoria em TI para proteger e otimizar sua infraestrutura digital
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group perspective-1000"
              >
                <Link to={service.link} className="block h-full">
                  <Card className="bg-slate-800/50 border-slate-700 hover:border-blue-500/50 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-blue-500/20 h-full cursor-pointer overflow-hidden relative group-hover:-translate-y-2 group-hover:scale-[1.02]">
                    {/* Gradient overlay on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                    
                    <CardHeader className="relative z-10">
                      <div className="mb-4">
                        <div
                          className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} p-3 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}
                        >
                          <Icon className="w-full h-full text-white" />
                        </div>
                      </div>
                      <CardTitle className="text-white text-xl group-hover:text-blue-300 transition-colors">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="relative z-10">
                      <CardDescription className="text-blue-100/80 text-base mb-4">
                        {service.description}
                      </CardDescription>
                      <div className="flex items-center gap-2 text-blue-400 group-hover:text-blue-300 transition-colors">
                        <span className="text-sm font-medium">Saiba mais</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-900/50 to-cyan-900/50 border border-blue-500/30 rounded-2xl p-8 md:p-12 backdrop-blur-sm">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Precisa de uma solução personalizada?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Nossa equipe de especialistas está pronta para desenvolver uma estratégia de cibersegurança sob medida para sua empresa.
            </p>
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-colors"
              onClick={() => {
                const message = encodeURIComponent("Olá! Gostaria de falar com um especialista sobre soluções de cibersegurança para minha empresa.");
                window.open(`https://wa.me/5515988189999?text=${message}`, '_blank');
              }}
            >
              Entre em Contato com um Especialista
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}