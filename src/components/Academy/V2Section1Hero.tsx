import React, { useEffect, useRef } from 'react';
import './V2Section1Hero.css';
import V2SectionLogos from './V2SectionLogos';

interface V2Section1HeroProps {
  onStart: () => void;
}

const floatingTags = [
  { text: '✦ Agentic Workflows', top: '18%', left: '12%', speed: '12s' },
  { text: '⚡ Vector RAG', top: '22%', right: '14%', speed: '15s' },
  { text: '🧠 Model Fine-Tuning', top: '58%', left: '10%', speed: '14s' },
  { text: '🚀 Production MLOps', top: '62%', right: '12%', speed: '16s' },
  { text: '⚙️ Scalable AI APIs', top: '38%', right: '8%', speed: '13s' },
  { text: '🎯 AI Strategy & PM', top: '42%', left: '8%', speed: '17s' },
];

const V2Section1Hero: React.FC<V2Section1HeroProps> = ({ onStart }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      height = canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // 3D Sine Wave Topology Mesh Parameters
    let step = 0;
    const rows = 28;
    const cols = 45;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      step += 0.015;

      const gridWidth = width * 1.2;
      const gridHeight = height * 0.7;
      const startX = (width - gridWidth) / 2;
      const startY = height * 0.35;

      const cellW = gridWidth / cols;
      const cellH = gridHeight / rows;

      // Draw horizontal 3D wave lines
      for (let r = 0; r < rows; r++) {
        ctx.beginPath();
        const yOffset = startY + r * cellH;

        for (let c = 0; c <= cols; c++) {
          const x = startX + c * cellW;
          // Math sine wave formula creating organic fluid 3D terrain
          const wave1 = Math.sin(c * 0.18 + step + r * 0.1) * 18;
          const wave2 = Math.cos(r * 0.25 - step * 0.8) * 12;
          const zY = yOffset + wave1 + wave2;

          if (c === 0) {
            ctx.moveTo(x, zY);
          } else {
            ctx.lineTo(x, zY);
          }
        }

        // Perspective fading: closer to top = fainter, closer to center = glowing gold
        const alpha = Math.min(0.22, Math.max(0.03, (r / rows) * 0.25));
        ctx.strokeStyle = `rgba(201, 168, 76, ${alpha})`;
        ctx.lineWidth = 1.2;
        ctx.stroke();
      }

      // Draw vertical 3D wave lines
      for (let c = 0; c <= cols; c += 2) {
        ctx.beginPath();
        const x = startX + c * cellW;

        for (let r = 0; r < rows; r++) {
          const yOffset = startY + r * cellH;
          const wave1 = Math.sin(c * 0.18 + step + r * 0.1) * 18;
          const wave2 = Math.cos(r * 0.25 - step * 0.8) * 12;
          const zY = yOffset + wave1 + wave2;

          if (r === 0) {
            ctx.moveTo(x, zY);
          } else {
            ctx.lineTo(x, zY);
          }
        }

        const alpha = Math.min(0.18, Math.max(0.02, (c / cols) * 0.2));
        ctx.strokeStyle = `rgba(201, 168, 76, ${alpha})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // Glowing intersection nodes on peak waves
      for (let r = 4; r < rows; r += 4) {
        for (let c = 4; c < cols; c += 5) {
          const x = startX + c * cellW;
          const yOffset = startY + r * cellH;
          const wave1 = Math.sin(c * 0.18 + step + r * 0.1) * 18;
          const wave2 = Math.cos(r * 0.25 - step * 0.8) * 12;
          const zY = yOffset + wave1 + wave2;

          ctx.beginPath();
          ctx.arc(x, zY, 2, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(201, 168, 76, 0.5)';
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="v2-hero-section">
      
      {/* 3D SINE WAVE TOPOLOGY CANVAS */}
      <canvas ref={canvasRef} className="v2-hero-3d-canvas" />

      {/* AMBIENT GLOW LIGHT BEAMS */}
      <div className="v2-hero-bg-anim">
        <div className="v2-bg-orb orb-gold-hero" />
        <div className="v2-bg-orb orb-navy-hero" />
        <div className="v2-bg-core-halo" />
      </div>

      {/* FLOATING HOLOGRAPHIC SKILL BADGES */}
      <div className="v2-hero-floating-tags">
        {floatingTags.map((tag, idx) => (
          <div
            key={idx}
            className="v2-floating-skill-pill"
            style={{
              top: tag.top,
              left: tag.left,
              right: tag.right,
              animationDuration: tag.speed,
            }}
          >
            {tag.text}
          </div>
        ))}
      </div>

      {/* HERO MAIN CONTENT */}
      <div className="v2-hero-content-center">
        <div className="v2-hero-badge">
          <span className="v2-badge-spark">✦</span>
          <span>Adaptive AI Career Academy</span>
        </div>

        <h1 className="v2-hero-headline">
          Start Your AI Career <span className="v2-headline-gold">Here.</span>
        </h1>
        
        <p className="v2-hero-subheading">
          Whether you're learning AI for the first time, leveling up your skills, or specializing deeper—we show you the exact path forward.
        </p>

        <div className="v2-hero-action">
          <button className="v2-hero-cta" onClick={onStart}>
            Find Your Path →
          </button>
        </div>

        <div className="v2-hero-stats">
          <div className="v2-hero-stat">
            <span className="stat-icon">⭐</span>
            <span className="stat-text">4.8/5 Rating</span>
          </div>
          <div className="v2-hero-stat">
            <span className="stat-icon">🎓</span>
            <span className="stat-text">5,000+ Graduates</span>
          </div>
          <div className="v2-hero-stat">
            <span className="stat-icon">💼</span>
            <span className="stat-text">85% Land AI Roles</span>
          </div>
        </div>
      </div>

      <V2SectionLogos />
    </section>
  );
};

export default V2Section1Hero;
