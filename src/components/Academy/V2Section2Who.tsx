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
          <p className="v2-who-eyebrow">LEARNER PROFILE MAPPING</p>
          <h2 className="v2-who-headline">Where Do You Start From?</h2>
          <p className="v2-who-subtitle">
            Select your background. Our adaptive engine skips what you already know and connects you directly to the right AI specialization track.
          </p>
        </div>

        {/* INTERACTIVE CARDS */}
        <div className="v2-who-cards">
          
          {/* Card 1 */}
          <div className="v2-who-card card-1">
            <div className="v2-who-card-inner">
              <div className="v2-who-card-front">
                <div className="v2-who-icon-wrapper">
                  <span className="v2-who-icon">💼</span>
                </div>
                <div className="v2-who-card-front-body">
                  <h3 className="v2-who-card-title">Business & Non-Tech</h3>
                  <p className="v2-who-card-desc">Marketing, Product, Sales & Ops. No coding needed. Learn AI automation & enterprise tool configuration.</p>
                  <div className="v2-who-card-action">
                    <span>Recommended: Native AI Expert</span>
                    <span className="arrow">→</span>
                  </div>
                </div>
              </div>
              <div className="v2-who-card-back">
                <h3 className="v2-who-card-title">Native AI Expert Pathway</h3>
                <p className="v2-who-card-desc">Configure pre-built enterprise AI platforms (Salesforce Einstein, Oracle AI, SAP Joule) to automate business workflows without traditional programming.</p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="v2-who-card card-2">
            <div className="v2-who-card-inner">
              <div className="v2-who-card-front">
                <div className="v2-who-icon-wrapper">
                  <span className="v2-who-icon">💻</span>
                </div>
                <div className="v2-who-card-front-body">
                  <h3 className="v2-who-card-title">Software & Web Developer</h3>
                  <p className="v2-who-card-desc">Frontend, Web & Mobile Devs. Skip coding 101. Master AI coding agents to build full-stack apps at 10x speed.</p>
                  <div className="v2-who-card-action">
                    <span>Recommended: Vibe Coding Developer</span>
                    <span className="arrow">→</span>
                  </div>
                </div>
              </div>
              <div className="v2-who-card-back">
                <h3 className="v2-who-card-title">Vibe Coding Pathway</h3>
                <p className="v2-who-card-desc">Master AI coding agents (Cursor, Windsurf, Claude) to rapidly engineer production full-stack apps from scratch or replace legacy SaaS platforms.</p>
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
                  <h3 className="v2-who-card-title">Backend & Data Engineer</h3>
                  <p className="v2-who-card-desc">Backend APIs, Data Pipelines & ML. Skip basic scripting. Architect custom autonomous AI agents & vector DBs.</p>
                  <div className="v2-who-card-action">
                    <span>Recommended: Agent Builder</span>
                    <span className="arrow">→</span>
                  </div>
                </div>
              </div>
              <div className="v2-who-card-back">
                <h3 className="v2-who-card-title">Agent Builder Pathway</h3>
                <p className="v2-who-card-desc">Build custom independent AI agents using frontier models (GPT-4, Claude) or open-source LLMs, and connect them into enterprise backends.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default V2Section2Who;
