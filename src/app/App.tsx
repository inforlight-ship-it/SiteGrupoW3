import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";
import { HomePage } from "./pages/HomePage";
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
      <div className="min-h-screen bg-slate-950">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
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
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
