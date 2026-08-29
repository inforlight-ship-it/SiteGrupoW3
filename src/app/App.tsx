import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";
import { Analytics } from "./components/Analytics";
import { WhatsAppFloating } from "./components/WhatsAppFloating";
import { HomePage } from "./pages/HomePage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { SecurityPostureCheckPage } from "./pages/SecurityPostureCheckPage";
import {
  FazendaBoaVistaCasePage,
  AdimaxCasePage,
  DisoCasePage,
} from "./pages/cases/CaseDetailPage";
import {
  SecurityForCompaniesPage,
  Monitoring24x7Page,
  RansomwareProtectionPage,
  BackupRecoveryPage,
  SocForCompaniesPage,
  NocForCompaniesPage,
  ITOutsourcingPage,
  CybersecurityConsultingPage,
} from "./pages/problems/ProblemPage";
import {
  CIOServicePage,
  DPOServicePage,
  DatacenterPage,
  BackupServicePage,
  RMMPage,
  EDRPage,
  FirewallPage,
  NOCPage,
  SOCPage,
  AccessControlPage,
  CCTVPage,
  EmailProtectionPage,
} from "./pages/services";

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Analytics />
      <div className="min-h-screen bg-slate-950">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/diagnostico-seguranca" element={<SecurityPostureCheckPage />} />
          <Route path="/cases/fazenda-boa-vista" element={<FazendaBoaVistaCasePage />} />
          <Route path="/cases/adimax" element={<AdimaxCasePage />} />
          <Route path="/cases/diso" element={<DisoCasePage />} />
          <Route path="/seguranca-para-empresas" element={<SecurityForCompaniesPage />} />
          <Route path="/monitoramento-ti-24x7" element={<Monitoring24x7Page />} />
          <Route path="/protecao-contra-ransomware" element={<RansomwareProtectionPage />} />
          <Route path="/backup-e-recuperacao" element={<BackupRecoveryPage />} />
          <Route path="/soc-para-empresas" element={<SocForCompaniesPage />} />
          <Route path="/noc-para-empresas" element={<NocForCompaniesPage />} />
          <Route path="/terceirizacao-de-ti" element={<ITOutsourcingPage />} />
          <Route path="/consultoria-ciberseguranca" element={<CybersecurityConsultingPage />} />
          <Route path="/servicos/cio-as-a-service" element={<CIOServicePage />} />
          <Route path="/servicos/dpo-as-a-service" element={<DPOServicePage />} />
          <Route path="/servicos/gerenciamento-datacenter" element={<DatacenterPage />} />
          <Route path="/servicos/backup-as-a-service" element={<BackupServicePage />} />
          <Route path="/servicos/rmm" element={<RMMPage />} />
          <Route path="/servicos/protecoes-edr" element={<EDRPage />} />
          <Route path="/servicos/firewall" element={<FirewallPage />} />
          <Route path="/servicos/noc" element={<NOCPage />} />
          <Route path="/servicos/soc" element={<SOCPage />} />
          <Route path="/servicos/controle-acesso" element={<AccessControlPage />} />
          <Route path="/servicos/seguranca-cftv" element={<CCTVPage />} />
          <Route path="/servicos/protecao-email" element={<EmailProtectionPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
        <WhatsAppFloating />
      </div>
    </Router>
  );
}
