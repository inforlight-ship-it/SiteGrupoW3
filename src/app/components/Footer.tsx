import { Mail, Phone, Instagram } from "lucide-react";
import { motion } from "motion/react";
import logo from "figma:asset/96893c2262096798f2da3e9878a6f5823b57294c.png";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <motion.div 
            className="md:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Grupo W3" className="h-10 w-auto" />
            </div>
            <p className="text-blue-100/70 mb-4 max-w-md">
              Protegendo empresas com soluções avançadas de cibersegurança e consultoria em TI. 
              Sua segurança digital é nossa prioridade.
            </p>
            <div className="flex gap-4">
              <motion.a
                href="https://www.instagram.com/grupow3"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-blue-600 flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Instagram className="w-5 h-5 text-blue-100" />
              </motion.a>
              <motion.a
                href="mailto:contato@grupow3.com"
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-blue-600 flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Email"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-5 h-5 text-blue-100" />
              </motion.a>
              <motion.a
                href="tel:+5515988189999"
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-blue-600 flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Telefone"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="w-5 h-5 text-blue-100" />
              </motion.a>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-white font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2 text-blue-100/70 text-sm">
              <li><a href="#servicos" className="hover:text-blue-400 transition-colors">CIO as a Service</a></li>
              <li><a href="#servicos" className="hover:text-blue-400 transition-colors">DPO as a Service</a></li>
              <li><a href="#servicos" className="hover:text-blue-400 transition-colors">Gerenciamento Datacenter</a></li>
              <li><a href="#servicos" className="hover:text-blue-400 transition-colors">Backup as a Service</a></li>
              <li><a href="#servicos" className="hover:text-blue-400 transition-colors">NOC / SOC</a></li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-white font-semibold mb-4">Contato</h3>
            <ul className="space-y-2 text-blue-100/70 text-sm">
              <li>contato@grupow3.com</li>
              <li>+55 (15) 98818-9999</li>
              <li>Sorocaba, SP</li>
              <li>www.grupow3.com</li>
              <li className="pt-2">
                <span className="text-green-400">• </span>
                Suporte 24/7
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div 
          className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-blue-100/50 text-sm">
            © {currentYear} Grupo W3 Cibersegurança. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-blue-100/50 text-sm">
            <a 
              href="https://adoptprodstorage.blob.core.windows.net/adopt-prod/organization/d8ea0707-2885-49e2-a1f4-6866e04dda10/disclaimer/0bfba439-4614-4ca8-b179-6dad57241850/policy/01GE2Q4G1RYF8VQ5T1DCXVVY6D.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              Política de Privacidade
            </a>
            <a 
              href="https://adoptprodstorage.blob.core.windows.net/adopt-prod/organization/d8ea0707-2885-49e2-a1f4-6866e04dda10/disclaimer/0bfba439-4614-4ca8-b179-6dad57241850/terms/01GE2PV28C1BDNZ95QGMJSP1YC.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              Termos de Uso
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}