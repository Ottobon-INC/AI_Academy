import React, { useEffect, useRef } from 'react';
import './V2Section2Who.css';

const V2Section2Who: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="v2-who-section-dark" id="who" ref={sectionRef}>
      {/* Background Glow Effects */}
      <div className="v2-who-glow glow-left"></div>
      <div className="v2-who-glow glow-right"></div>

      <div className="v2-who-container">
        
        {/* HEADER */}
        <div className="v2-who-header">
          <p className="v2-who-eyebrow">WHO IT'S FOR</p>
          <h2 className="v2-who-headline">We Know Where You're Starting From</h2>
          <p className="v2-who-subtitle">
            No matter where you are, there's a path forward here.
          </p>
        </div>

        {/* INTERACTIVE CARDS */}
        <div className="v2-who-cards">
          
          {/* Card 1 */}
          <div className="v2-who-card card-1">
            <div className="v2-who-card-inner">
              <div className="v2-who-card-front">
                <div className="v2-who-icon-wrapper">
                  <span className="v2-who-icon">🌱</span>
                </div>
                <div className="v2-who-card-front-body">
                  <h3 className="v2-who-card-title">Zero AI Experience</h3>
                  <p className="v2-who-card-desc">No coding or AI background needed. We guide you step-by-step from scratch.</p>
                  <div className="v2-who-card-action">
                    <span>You're in the right place</span>
                    <span className="arrow">→</span>
                  </div>
                </div>
              </div>
              <div className="v2-who-card-back">
                <h3 className="v2-who-card-title">The Foundation Track</h3>
                <p className="v2-who-card-desc">Master AI fundamentals, prompt engineering, no-code workflows, and AI product strategy without needing prior programming experience.</p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="v2-who-card card-2">
            <div className="v2-who-card-inner">
              <div className="v2-who-card-front">
                <div className="v2-who-icon-wrapper">
                  <span className="v2-who-icon">🚀</span>
                </div>
                <div className="v2-who-card-front-body">
                  <h3 className="v2-who-card-title">Tech Background</h3>
                  <p className="v2-who-card-desc">Bring your developer skills and fast-track into production AI engineering.</p>
                  <div className="v2-who-card-action">
                    <span>You're in the right place</span>
                    <span className="arrow">→</span>
                  </div>
                </div>
              </div>
              <div className="v2-who-card-back">
                <h3 className="v2-who-card-title">The Accelerator Track</h3>
                <p className="v2-who-card-desc">Skip programming basics. Dive directly into multi-agent systems, vector retrieval databases, stateful memory, and API integrations.</p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="v2-who-card card-3">
            <div className="v2-who-card-inner">
              <div className="v2-who-card-front">
                <div className="v2-who-icon-wrapper">
                  <span className="v2-who-icon">⚡</span>
                </div>
                <div className="v2-who-card-front-body">
                  <h3 className="v2-who-card-title">Deep AI Knowledge</h3>
                  <p className="v2-who-card-desc">Already in tech or AI, mastering advanced model fine-tuning & scaling.</p>
                  <div className="v2-who-card-action">
                    <span>You're in the right place</span>
                    <span className="arrow">→</span>
                  </div>
                </div>
              </div>
              <div className="v2-who-card-back">
                <h3 className="v2-who-card-title">The Specialist Track</h3>
                <p className="v2-who-card-desc">Fine-tune open-source LLMs on custom datasets, optimize inference latency, apply quantization, and architect enterprise infrastructure.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default V2Section2Who;
