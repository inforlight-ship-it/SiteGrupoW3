import { useEffect, useRef } from "react";
import { Database, ShieldCheck, ServerCog } from "lucide-react";

export function Hero() {
  const pipelineRef = useRef<HTMLDivElement>(null);
  const nodeStackRef = useRef<HTMLDivElement>(null);
  const nodeCenterRef = useRef<HTMLDivElement>(null);
  const nodeShieldRef = useRef<HTMLDivElement>(null);
  const glowPathRef = useRef<SVGPathElement>(null);
  const corePathRef = useRef<SVGPathElement>(null);
  const gradientRef = useRef<SVGLinearGradientElement>(null);
  const splashRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame = 0;
    let state: "p1" | "splash" | "p2" | "idle" = "p1";
    let lastStateChange = performance.now();

    const updatePath = () => {
      const pipeline = pipelineRef.current;
      const stack = nodeStackRef.current;
      const center = nodeCenterRef.current;
      const shield = nodeShieldRef.current;
      if (!pipeline || !stack || !center || !shield) return;

      const pRect = pipeline.getBoundingClientRect();
      const sRect = stack.getBoundingClientRect();
      const cRect = center.getBoundingClientRect();
      const shRect = shield.getBoundingClientRect();

      const point = (rect: DOMRect) => ({
        x: rect.left + rect.width / 2 - pRect.left,
        y: rect.top + rect.height / 2 - pRect.top,
      });

      const a = point(sRect);
      const b = point(cRect);
      const c = point(shRect);
      const d = `M ${a.x},${a.y} L ${b.x},${b.y} L ${c.x},${c.y}`;
      glowPathRef.current?.setAttribute("d", d);
      corePathRef.current?.setAttribute("d", d);
    };

    const setBeam = (percentage: number) => {
      const gradient = gradientRef.current;
      if (!gradient) return;
      const center = percentage * 100;
      gradient.setAttribute("x1", `${center - 5}%`);
      gradient.setAttribute("x2", `${center + 5}%`);
      gradient.setAttribute("y1", "0%");
      gradient.setAttribute("y2", "0%");
    };

    const loop = (now: number) => {
      const elapsed = now - lastStateChange;
      const stack = nodeStackRef.current;
      const shield = nodeShieldRef.current;
      const splash = splashRef.current;
      const paths = [glowPathRef.current, corePathRef.current];

      if (state === "p1") {
        const p = Math.min(elapsed / 800, 1);
        setBeam(p * 0.5);
        stack?.classList.toggle("active", p < 0.4);
        if (p >= 1) {
          stack?.classList.remove("active");
          paths.forEach((path) => path && (path.style.opacity = "0"));
          splash?.classList.add("animate");
          state = "splash";
          lastStateChange = now;
        }
      } else if (state === "splash") {
        if (elapsed >= 800) {
          splash?.classList.remove("animate");
          paths.forEach((path) => path && (path.style.opacity = "1"));
          state = "p2";
          lastStateChange = now;
        }
      } else if (state === "p2") {
        const p = Math.min(elapsed / 800, 1);
        setBeam(0.5 + p * 0.5);
        shield?.classList.toggle("active", p > 0.6);
        if (p >= 1) {
          shield?.classList.remove("active");
          state = "idle";
          lastStateChange = now;
        }
      } else if (elapsed >= 1000) {
        state = "p1";
        lastStateChange = now;
      }

      frame = requestAnimationFrame(loop);
    };

    updatePath();
    window.addEventListener("resize", updatePath);
    frame = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("resize", updatePath);
      cancelAnimationFrame(frame);
    };
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="w3-hero-wrap" aria-labelledby="hero-title">
      <div className="w3-hero-card">
        <div className="w3-hero-grid" aria-hidden="true" />
        <div className="w3-hero-eyebrow">CIBERSEGURANÇA • INFRAESTRUTURA • OPERAÇÃO 24×7</div>

        <div className="w3-icon-pipeline" ref={pipelineRef} aria-hidden="true">
          <svg className="w3-beam-svg">
            <defs>
              <filter id="w3-glow">
                <feGaussianBlur stdDeviation="2" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
              <linearGradient id="w3-beam-gradient" ref={gradientRef} gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#1b77ff" stopOpacity="0" />
                <stop offset="20%" stopColor="#1b77ff" stopOpacity="0.85" />
                <stop offset="50%" stopColor="#ffffff" stopOpacity="1" />
                <stop offset="80%" stopColor="#64d8ff" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#64d8ff" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path ref={glowPathRef} stroke="url(#w3-beam-gradient)" strokeWidth="2" filter="url(#w3-glow)" opacity="0.6" fill="none" />
            <path ref={corePathRef} stroke="url(#w3-beam-gradient)" strokeWidth="0.8" fill="none" />
          </svg>

          <div ref={nodeStackRef} className="w3-icon-node w3-node-light-right">
            <Database size={20} />
          </div>
          <div className="w3-pipeline-line" />
          <div className="w3-center-wrap">
            <div ref={splashRef} className="w3-splash" />
            <div ref={nodeCenterRef} className="w3-icon-node-center">
              <ServerCog size={28} />
            </div>
          </div>
          <div className="w3-pipeline-line right" />
          <div ref={nodeShieldRef} className="w3-icon-node w3-node-light-left">
            <ShieldCheck size={20} />
          </div>
        </div>

        <div className="w3-hero-content">
          <h1 id="hero-title" className="w3-hero-heading">
            Tecnologia que mantém
            <strong>seu negócio protegido e disponível.</strong>
          </h1>
          <p className="w3-hero-sub">
            Segurança, infraestrutura e operação de TI integradas em uma única equipe — com SOC, NOC, proteção de endpoints, backup, redes e consultoria especializada.
          </p>
          <div className="w3-hero-actions">
            <button className="w3-btn-primary" onClick={() => scrollTo("diagnostico")}>Solicitar avaliação inicial</button>
            <button className="w3-btn-secondary" onClick={() => scrollTo("cases")}>Conhecer nossos cases</button>
          </div>

          <div className="w3-trust-row">
            <span><b>24×7</b> Monitoramento</span>
            <span><b>SOC + NOC</b> Operação integrada</span>
            <span><b>End-to-end</b> Segurança e infraestrutura</span>
          </div>
        </div>
      </div>
    </section>
  );
}
