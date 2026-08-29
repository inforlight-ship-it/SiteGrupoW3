import { Activity, DatabaseBackup, Network, Radar, ShieldCheck, ServerCog } from "lucide-react";

const capabilities = [
  { icon: Radar, label: "SOC 24×7" },
  { icon: Activity, label: "NOC 24×7" },
  { icon: ShieldCheck, label: "EDR & Proteção" },
  { icon: Network, label: "Redes & Firewall" },
  { icon: DatabaseBackup, label: "Backup & Recuperação" },
  { icon: ServerCog, label: "Infraestrutura & RMM" },
];

export function Capabilities() {
  return (
    <section className="w3-capabilities" aria-label="Principais capacidades do Grupo W3">
      <div className="w3-capabilities-inner">
        <p className="w3-capabilities-label">COBERTURA INTEGRADA</p>
        <div className="w3-capabilities-list">
          {capabilities.map(({ icon: Icon, label }) => (
            <div className="w3-capability" key={label}>
              <Icon size={17} aria-hidden="true" />
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
