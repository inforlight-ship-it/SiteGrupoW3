export function Logo({ className = "" }: { className?: string }) {
  return (
    <img
      src="/grupo-w3-logo.svg"
      alt="Grupo W3 Cibersegurança"
      className={className}
      style={{ height: '60px', width: 'auto', objectFit: 'contain' }}
    />
  );
}
