import { useState } from "react";
import { motion } from "motion/react";
import { ArrowUpRight, CheckCircle2, Mail, MapPin, MessageCircle, Phone, ShieldCheck } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({ name: "", company: "", phone: "", email: "", message: "" });
  const [opened, setOpened] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const message = `*Contato pelo site Grupo W3*\n\n*Nome:* ${formData.name}\n*Empresa:* ${formData.company || "Não informado"}\n*Telefone:* ${formData.phone}\n*Email:* ${formData.email}\n\n*Contexto:*\n${formData.message}`;
    window.open(`https://wa.me/5515988189999?text=${encodeURIComponent(message)}`, "_blank");
    setOpened(true);
  };

  return (
    <section id="contato" className="w3-section w3-contact-section">
      <div className="w3-container">
        <div className="w3-contact-shell">
          <motion.div className="w3-contact-copy" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="w3-section-eyebrow">FALE COM A W3</span>
            <h2 className="w3-section-title">Seu ambiente não precisa esperar <strong>o próximo incidente.</strong></h2>
            <p className="w3-section-lead">Conte brevemente como sua empresa opera hoje. A conversa começa pelo contexto, não pela venda de uma ferramenta.</p>

            <div className="w3-contact-points">
              <a href="mailto:contato@grupow3.com"><Mail size={18} /><div><span>Email</span><strong>contato@grupow3.com</strong></div><ArrowUpRight size={16} /></a>
              <a href="tel:+5515988189999"><Phone size={18} /><div><span>Telefone / WhatsApp</span><strong>+55 (15) 98818-9999</strong></div><ArrowUpRight size={16} /></a>
              <div><MapPin size={18} /><div><span>Base operacional</span><strong>Sorocaba, SP</strong></div></div>
            </div>

            <div className="w3-contact-note"><ShieldCheck size={19} /><p><strong>Operação crítica:</strong> clientes com serviços contratados contam com os fluxos de atendimento definidos em cada operação.</p></div>
          </motion.div>

          <motion.form className="w3-contact-form" onSubmit={handleSubmit} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="w3-form-head">
              <div className="w3-form-icon"><MessageCircle size={20} /></div>
              <div><span>CONVERSA INICIAL</span><h3>Fale com um especialista</h3></div>
            </div>

            <div className="w3-form-grid">
              <label><span>Nome *</span><input required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Seu nome" /></label>
              <label><span>Empresa</span><input value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} placeholder="Nome da empresa" /></label>
              <label><span>Telefone *</span><input required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} placeholder="(15) 99999-9999" /></label>
              <label><span>Email *</span><input required type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="voce@empresa.com.br" /></label>
            </div>
            <label className="w3-form-message"><span>O que você precisa proteger ou melhorar? *</span><textarea required value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder="Ex.: precisamos estruturar monitoramento, revisar backup, reduzir riscos de endpoint..." /></label>

            <button type="submit" className="w3-form-submit">Continuar pelo WhatsApp <ArrowUpRight size={17} /></button>
            <p className="w3-form-disclaimer">Ao continuar, uma conversa será aberta no WhatsApp com as informações preenchidas. Nenhum dado é enviado automaticamente por este formulário.</p>

            {opened && <div className="w3-form-feedback"><CheckCircle2 size={17} /> WhatsApp aberto. Se a nova aba foi bloqueada, tente novamente.</div>}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
