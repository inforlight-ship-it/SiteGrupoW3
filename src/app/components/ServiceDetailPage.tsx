import { motion } from "motion/react";
import { ArrowLeft, CheckCircle, LucideIcon, Home, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

interface ServiceDetailPageProps {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  benefits: string[];
  features: string[];
  technologies?: string[];
  whatsappMessage: string;
  color: string;
}

export function ServiceDetailPage({
  icon: Icon,
  title,
  subtitle,
  description,
  imageUrl,
  benefits,
  features,
  technologies,
  whatsappMessage,
  color,
}: ServiceDetailPageProps) {
  const handleContact = () => {
    const message = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/5515988189999?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-slate-950 pt-24 pb-16">
      <div className="container mx-auto px-6">
        {/* Breadcrumbs */}
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-2 text-sm text-blue-300/70 mb-6"
          aria-label="Breadcrumb"
        >
          <Link to="/" className="hover:text-blue-400 transition-colors flex items-center gap-1">
            <Home className="w-4 h-4" />
            Início
          </Link>
          <ChevronRight className="w-4 h-4" />
          <Link to="/#servicos" className="hover:text-blue-400 transition-colors">
            Serviços
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-blue-100">{title}</span>
        </motion.nav>

        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors mb-8 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Voltar para Home
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex justify-center mb-6">
            <motion.div 
              className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${color} p-5 shadow-2xl`}
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Icon className="w-full h-full text-white" />
            </motion.div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-blue-200 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </motion.div>

        {/* Hero Image with Parallax Effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16 rounded-2xl overflow-hidden shadow-2xl shadow-blue-500/10 group"
        >
          <div className="relative overflow-hidden">
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-[400px] md:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 to-transparent" />
          </div>
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 md:p-12 mb-12"
        >
          <p className="text-lg md:text-xl text-blue-100 leading-relaxed">
            {description}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Benefícios
            </h2>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <span className="text-blue-100">{benefit}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Funcionalidades
            </h2>
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                  <span className="text-blue-100">{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Technologies */}
        {technologies && technologies.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-gradient-to-r from-blue-900/30 to-cyan-900/30 border border-blue-500/30 rounded-2xl p-8 md:p-12 mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
              Tecnologias e Parceiros
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className="bg-slate-900/50 border border-slate-700 rounded-lg px-6 py-3"
                >
                  <span className="text-blue-200 font-medium">{tech}</span>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="bg-gradient-to-r from-blue-900/50 to-cyan-900/50 border border-blue-500/30 rounded-2xl p-8 md:p-12 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Pronto para implementar esta solução?
          </h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Nossa equipe de especialistas está pronta para desenvolver uma estratégia personalizada para sua empresa.
          </p>
          <button
            onClick={handleContact}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg transition-colors text-lg font-medium"
          >
            Falar com um Especialista
          </button>
        </motion.div>
      </div>
    </div>
  );
}