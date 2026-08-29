import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";
import { Analytics } from "./components/Analytics";
import { WhatsAppFloating } from "./components/WhatsAppFloating";
import { HomePage } from "./pages/HomePage";
import { NotFoundPage } from "./pages/NotFoundPage";

const SecurityPostureCheckPage = lazy(() => import("./pages/SecurityPostureCheckPage").then((module) => ({ default: module.SecurityPostureCheckPage })));
const PrivacyPage = lazy(() => import("./pages/LegalPages").then((module) => ({ default: module.PrivacyPage })));
const CookiesPage = lazy(() => import("./pages/LegalPages").then((module) => ({ default: module.CookiesPage })));
const TermsPage = lazy(() => import("./pages/LegalPages").then((module) => ({ default: module.TermsPage })));

const FazendaBoaVistaCasePage = lazy(() => import("./pages/cases/CaseDetailPage").then((module) => ({ default: module.FazendaBoaVistaCasePage })));
const AdimaxCasePage = lazy(() => import("./pages/cases/CaseDetailPage").then((module) => ({ default: module.AdimaxCasePage })));
const DisoCasePage = lazy(() => import("./pages/cases/CaseDetailPage").then((module) => ({ default: module.DisoCasePage })));

const SecurityForCompaniesPage = lazy(() => import("./pages/problems/ProblemPage").then((module) => ({ default: module.SecurityForCompaniesPage })));
const Monitoring24x7Page = lazy(() => import("./pages/problems/ProblemPage").then((module) => ({ default: module.Monitoring24x7Page })));
const RansomwareProtectionPage = lazy(() => import("./pages/problems/ProblemPage").then((module) => ({ default: module.RansomwareProtectionPage })));
const BackupRecoveryPage = lazy(() => import("./pages/problems/ProblemPage").then((module) => ({ default: module.BackupRecoveryPage })));
const SocForCompaniesPage = lazy(() => import("./pages/problems/ProblemPage").then((module) => ({ default: module.SocForCompaniesPage })));
const NocForCompaniesPage = lazy(() => import("./pages/problems/ProblemPage").then((module) => ({ default: module.NocForCompaniesPage })));
const ITOutsourcingPage = lazy(() => import("./pages/problems/ProblemPage").then((module) => ({ default: module.ITOutsourcingPage })));
const CybersecurityConsultingPage = lazy(() => import("./pages/problems/ProblemPage").then((module) => ({ default: module.CybersecurityConsultingPage })));

const CIOServicePage = lazy(() => import("./pages/services").then((module) => ({ default: module.CIOServicePage })));
const DPOServicePage = lazy(() => import("./pages/services").then((module) => ({ default: module.DPOServicePage })));
const DatacenterPage = lazy(() => import("./pages/services").then((module) => ({ default: module.DatacenterPage })));
const BackupServicePage = lazy(() => import("./pages/services").then((module) => ({ default: module.BackupServicePage })));
const RMMPage = lazy(() => import("./pages/services").then((module) => ({ default: module.RMMPage })));
const EDRPage = lazy(() => import("./pages/services").then((module) => ({ default: module.EDRPage })));
const FirewallPage = lazy(() => import("./pages/services").then((module) => ({ default: module.FirewallPage })));
const NOCPage = lazy(() => import("./pages/services").then((module) => ({ default: module.NOCPage })));
const SOCPage = lazy(() => import("./pages/services").then((module) => ({ default: module.SOCPage })));
const AccessControlPage = lazy(() => import("./pages/services").then((module) => ({ default: module.AccessControlPage })));
const CCTVPage = lazy(() => import("./pages/services").then((module) => ({ default: module.CCTVPage })));
const EmailProtectionPage = lazy(() => import("./pages/services").then((module) => ({ default: module.EmailProtectionPage })));

function RouteLoading() {
  return <div className="w3-route-loading" role="status" aria-live="polite">Carregando conteúdo…</div>;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Analytics />
      <div className="min-h-screen bg-slate-950">
        <Navbar />
        <Suspense fallback={<RouteLoading />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/diagnostico-seguranca" element={<SecurityPostureCheckPage />} />
            <Route path="/privacidade" element={<PrivacyPage />} />
            <Route path="/cookies" element={<CookiesPage />} />
            <Route path="/termos-de-uso" element={<TermsPage />} />
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
        </Suspense>
        <Footer />
        <WhatsAppFloating />
      </div>
    </Router>
  );
}
