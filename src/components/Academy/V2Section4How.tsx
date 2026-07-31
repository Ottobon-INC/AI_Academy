import React, { useEffect, useRef } from 'react';
import './V2Section4How.css';

const steps = [
  {
    number: '01',
    icon: '🧭',
    title: 'Profile Diagnostic',
    desc: 'A 3-minute assessment maps your background and identifies your exact skill gap to your target track.',
  },
  {
    number: '02',
    icon: '🛠️',
    title: 'Hands-On Specialization',
    desc: 'Build real-world projects — native enterprise configs, vibe-coded full-stack apps, or custom AI agents.',
  },
  {
    number: '03',
    icon: '🎯',
    title: '1-on-1 Career & Hiring',
    desc: 'Refine your portfolio, undergo 1-on-1 counseling, and connect with companies actively hiring AI talent.',
  },
];

const V2Section4How: React.FC = () => {
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
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="v2-how-section" id="path" ref={sectionRef}>
      <div className="v2-how-container">

        {/* Header */}
        <div className="v2-how-header">
          <p className="v2-how-eyebrow">The Path</p>
          <h2 className="v2-how-headline">Simple Path. Real Results.</h2>
        </div>

        {/* Horizontal steps with connecting line */}
        <div className="v2-how-track">

          {/* The animated connecting line */}
          <div className="v2-how-line-track">
            <div className="v2-how-line-fill" />
          </div>

          {steps.map((step, i) => (
            <div className="v2-how-step" key={i} style={{ '--delay': `${i * 0.25}s` } as React.CSSProperties}>
              {/* Dot node */}
              <div className="v2-how-node">
                <div className="v2-how-dot">
                  <span className="v2-how-dot-icon">{step.icon}</span>
                </div>
                <div className="v2-how-dot-ring" />
              </div>

              {/* Card below the dot */}
              <div className="v2-how-card">
                <div className="v2-how-step-num">{step.number}</div>
                <div className="v2-how-step-title">{step.title}</div>
                <div className="v2-how-step-desc">{step.desc}</div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default V2Section4How;
