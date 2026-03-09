import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card, CardContent } from "./ui/card";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    setIsSubmitting(true);
    
    // Simular delay de envio
    setTimeout(() => {
      // Criar mensagem formatada para WhatsApp
      const message = `*Nova Solicitação de Contato - Grupo W3*

*Nome:* ${formData.name}
*Email:* ${formData.email}
*Telefone:* ${formData.phone}
${formData.company ? `*Empresa:* ${formData.company}` : ''}

*Mensagem:*
${formData.message}`;
  
      const whatsappUrl = `https://wa.me/5515988189999?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
      
      setIsSubmitting(false);
      setShowSuccess(true);
      
      // Limpar formulário
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      });
      
      // Ocultar mensagem de sucesso após 3 segundos
      setTimeout(() => setShowSuccess(false), 3000);
    }, 500);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "contato@grupow3.com",
      link: "mailto:contato@grupow3.com",
    },
    {
      icon: Phone,
      title: "Telefone",
      value: "+55 (15) 98818-9999",
      link: "tel:+5515988189999",
    },
    {
      icon: MapPin,
      title: "Localização",
      value: "Sorocaba, SP - Brasil",
      link: "#",
    },
  ];

  return (
    <section id="contato" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      <motion.div
        className="absolute top-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Entre em <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Contato</span>
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Pronto para proteger sua empresa? Nossa equipe está disponível para atender suas necessidades.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Info Cards */}
          <div className="lg:col-span-1 space-y-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="bg-slate-800/50 border-slate-700 hover:border-blue-500/50 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="text-white font-semibold mb-1">{info.title}</h4>
                          <a
                            href={info.link}
                            className="text-blue-100/80 hover:text-blue-400 transition-colors text-sm"
                          >
                            {info.value}
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}

            {/* Business Hours */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card className="bg-gradient-to-br from-blue-900/50 to-cyan-900/50 border-blue-500/30">
                <CardContent className="p-6">
                  <h4 className="text-white font-semibold mb-3">Horário de Atendimento</h4>
                  <div className="space-y-2 text-blue-100/80 text-sm">
                    <div className="flex justify-between">
                      <span>Segunda - Sexta:</span>
                      <span>8h - 17h</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sábado e Domingo:</span>
                      <span className="text-red-400">Fechado</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Emergências:</span>
                      <span className="text-green-400">24/7</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-blue-100 mb-2 text-sm">
                        Nome Completo *
                      </label>
                      <Input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="bg-slate-900 border-slate-600 text-white focus:border-blue-500"
                        placeholder="Seu nome"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-blue-100 mb-2 text-sm">
                        Email *
                      </label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="bg-slate-900 border-slate-600 text-white focus:border-blue-500"
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-blue-100 mb-2 text-sm">
                        Telefone *
                      </label>
                      <Input
                        id="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="bg-slate-900 border-slate-600 text-white focus:border-blue-500"
                        placeholder="(11) 99999-9999"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-blue-100 mb-2 text-sm">
                        Empresa
                      </label>
                      <Input
                        id="company"
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="bg-slate-900 border-slate-600 text-white focus:border-blue-500"
                        placeholder="Nome da empresa"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-blue-100 mb-2 text-sm">
                      Mensagem *
                    </label>
                    <Textarea
                      id="message"
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="bg-slate-900 border-slate-600 text-white focus:border-blue-500 min-h-[150px]"
                      placeholder="Conte-nos sobre suas necessidades de cibersegurança..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white py-6 text-lg group"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <CheckCircle2 className="mr-2 w-5 h-5 animate-spin" />
                        Enviando...
                      </div>
                    ) : (
                      <div className="flex items-center">
                        <Send className="mr-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        Enviar Mensagem
                      </div>
                    )}
                  </Button>
                </form>
                
                {/* Success Message */}
                {showSuccess && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mt-4 bg-green-500/20 border border-green-500/50 rounded-lg p-4 flex items-center gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-green-400" />
                    <span className="text-green-400 font-medium">Mensagem enviada com sucesso!</span>
                  </motion.div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}