export function Logo({ className = "" }: { className?: string }) {
  return (
    <img 
      src="/icone.jpg" 
      alt="Grupo W3 Cibersegurança" 
      className={className}
      style={{ height: '60px', width: 'auto' }}
    />
  );
}