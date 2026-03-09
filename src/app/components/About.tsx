import { motion } from "motion/react";
import { CheckCircle, Shield, Users, Zap } from "lucide-react";

export function About() {
  const values = [
    {
      icon: Shield,
      title: "Segurança em Primeiro Lugar",
      description: "Proteção robusta e multicamada para sua infraestrutura digital",
    },
    {
      icon: Users,
      title: "Equipe Especializada",
      description: "Profissionais certificados e experientes em cibersegurança",
    },
    {
      icon: Zap,
      title: "Resposta Rápida",
      description: "Monitoramento 24/7 com time de resposta a incidentes",
    },
  ];

  const features = [
    "Conformidade com LGPD e regulamentações internacionais",
    "Infraestrutura redundante e altamente disponível",
    "Suporte técnico especializado 24/7",
    "Relatórios detalhados e transparentes",
    "Tecnologia de ponta em cibersegurança",
    "Planos personalizados para cada negócio",
  ];

  return (
    <section id="sobre" className="py-24 bg-gradient-to-b from-slate-900 to-slate-950 relative overflow-hidden">
      {/* Glowing Background */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://aattecnologia.com.br/wp-content/uploads/2023/05/consultoria-de-ti-1.jpg"
                alt="Cibersegurança e Proteção de Dados"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
            </div>

            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -bottom-6 -right-6 bg-slate-800 border border-blue-500/30 rounded-xl p-6 shadow-xl backdrop-blur-sm"
            >
              <div className="text-4xl font-bold text-blue-400 mb-1">25+</div>
              <div className="text-blue-100">Anos de Experiência</div>
            </motion.div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Sobre o <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Grupo W3</span>
            </h2>
            <p className="text-lg text-blue-100 mb-8">
              Somos uma empresa especializada em cibersegurança e consultoria em Tecnologia da Informação, 
              comprometida em proteger ativos digitais e otimizar a infraestrutura de TI das organizações.
            </p>
            <p className="text-lg text-blue-100 mb-8">
              Com uma equipe de profissionais altamente qualificados e certificados, oferecemos soluções 
              completas que vão desde a gestão estratégica até a proteção avançada contra ameaças cibernéticas.
            </p>

            {/* Features List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-2"
                >
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-blue-100 text-sm">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* Values */}
            <div className="grid grid-cols-1 gap-4">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-4 bg-slate-800/50 border border-slate-700 rounded-lg p-4"
                  >
                    <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">{value.title}</h4>
                      <p className="text-blue-100/80 text-sm">{value.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}