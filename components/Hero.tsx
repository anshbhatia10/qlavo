import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

/* ─── Particle Neural Network Canvas ─── */
const ParticleCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -999, y: -999 });
  const particlesRef = useRef<Array<{
    x: number; y: number; vx: number; vy: number;
    radius: number; opacity: number;
  }>>([]);
  const animRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resize();
    window.addEventListener('resize', resize);

    // Initialize particles
    const count = Math.min(80, Math.floor(window.innerWidth / 15));
    particlesRef.current = Array.from({ length: count }, () => ({
      x: Math.random() * canvas.offsetWidth,
      y: Math.random() * canvas.offsetHeight,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      radius: Math.random() * 2 + 0.5,
      opacity: Math.random() * 0.5 + 0.2,
    }));

    const onMouse = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    canvas.addEventListener('mousemove', onMouse);
    canvas.addEventListener('mouseleave', () => { mouseRef.current = { x: -999, y: -999 }; });

    const CONNECTION_DIST = 150;
    const MOUSE_DIST = 200;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
      const particles = particlesRef.current;
      const mouse = mouseRef.current;

      // Update + draw particles
      particles.forEach((p) => {
        // Mouse repulsion
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < MOUSE_DIST && dist > 0) {
          const force = (MOUSE_DIST - dist) / MOUSE_DIST * 0.02;
          p.vx += (dx / dist) * force;
          p.vy += (dy / dist) * force;
        }

        p.x += p.vx;
        p.y += p.vy;

        // Bounce off edges
        if (p.x < 0 || p.x > canvas.offsetWidth) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.offsetHeight) p.vy *= -1;

        // Dampen velocity
        p.vx *= 0.99;
        p.vy *= 0.99;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(52, 211, 153, ${p.opacity})`;
        ctx.fill();
      });

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < CONNECTION_DIST) {
            const opacity = (1 - dist / CONNECTION_DIST) * 0.15;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(52, 211, 153, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('mousemove', onMouse);
    };
  }, []);

  return <canvas ref={canvasRef} id="particle-canvas" />;
};

/* ─── Animated Counter ─── */
const AnimatedNumber: React.FC<{ target: number; suffix?: string; duration?: number }> = ({
  target, suffix = '', duration = 2000
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasAnimated.current) {
        hasAnimated.current = true;
        const start = performance.now();
        const step = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          el.textContent = Math.floor(eased * target) + suffix;
          if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      }
    }, { threshold: 0.5 });

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, suffix, duration]);

  return <span ref={ref}>0{suffix}</span>;
};

/* ─── Hero Component ─── */
const Hero: React.FC = () => {
  return (
    <section className="relative min-h-dvh flex flex-col items-center justify-center overflow-hidden">
      {/* Particle Canvas Background */}
      <ParticleCanvas />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#030303] z-[1]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[700px] z-[1]">
        <div className="glow-orb w-[400px] h-[400px] bg-emerald-500/10 top-[10%] left-[20%]" />
        <div className="glow-orb w-[300px] h-[300px] bg-emerald-400/8 top-[30%] right-[15%]" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-5xl mx-auto px-6 text-center z-10 flex flex-col items-center justify-center h-full pt-28 pb-16">
        {/* Floating badge */}
        <div
          className="floating-badge inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-8 animate-fade-in-up"
          style={{ animationDelay: '0.05s', opacity: 0 }}
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs sm:text-sm font-medium text-emerald-400 tracking-widest uppercase">
            India's Only GEO Agency
          </span>
        </div>

        {/* Headline */}
        <h1
          className="font-grotesk text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tighter text-white mb-6 leading-[1.05] animate-fade-in-up"
          style={{ animationDelay: '0.1s', opacity: 0 }}
        >
          100M people search
          <br />
          with AI every day.{' '}
          <span className="text-gradient-emerald">Are you in{' '}
          <br className="hidden sm:block" />
          their answers?</span>
        </h1>

        {/* Subheadline */}
        <p
          className="text-base sm:text-lg md:text-xl text-zinc-400 font-light max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up"
          style={{ animationDelay: '0.2s', opacity: 0 }}
        >
          When customers ask ChatGPT, Gemini, or Perplexity to recommend a business like yours —
          you should be the answer. We make sure you are.
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8 animate-fade-in-up"
          style={{ animationDelay: '0.35s', opacity: 0 }}
        >
          <Link
            to="/geo-calculator"
            className="btn-primary inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold"
          >
            Get a Free Audit <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-medium text-zinc-400 border border-white/10 rounded-2xl hover:border-emerald-500/30 hover:text-white hover:bg-emerald-500/5 transition-all duration-300"
          >
            Book a Call
          </Link>
        </div>

        {/* Featured on + mini stats */}
        <div
          className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 animate-fade-in-up"
          style={{ animationDelay: '0.5s', opacity: 0 }}
        >
          <p className="text-xs text-zinc-500 font-light tracking-wide">
            Featured on Product Hunt
          </p>
          <div className="flex items-center gap-6">
            <div className="text-center">
              <span className="text-emerald-400 font-grotesk font-bold text-sm">
                <AnimatedNumber target={40} suffix="+" />
              </span>
              <p className="text-[10px] text-zinc-600 uppercase tracking-wider">Brands Audited</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-fade-in" style={{ animationDelay: '1s', opacity: 0 }}>
        <div className="w-6 h-10 rounded-full border-2 border-white/10 flex justify-center pt-2">
          <div className="w-1 h-2 rounded-full bg-emerald-400 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
