export function Logo({ className = "" }: { className?: string }) {
  return (
    <img 
      src="https://grupow3.com/assets/icone.png" 
      alt="Grupo W3 Cibersegurança" 
      className={className}
      style={{ height: '60px', width: 'auto' }}
    />
  );
}