import React, { useEffect, useRef, useState } from 'react';
import './V2Section7Proof.css';

const stats = [
  { number: '5,000+', label: 'Students Trained', icon: '🎓' },
  { number: '85%', label: 'Land AI Roles Within 6 Months', icon: '🚀' },
  { number: '+35%', label: 'Average Salary Increase', icon: '💰' },
  { number: '300+', label: 'Hiring Partner Companies', icon: '🏢' },
];

const V2Section7Proof: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={`v2-proof-section ${isVisible ? 'is-visible' : ''}`} id="impact" ref={sectionRef}>
      <div className="v2-proof-glow" />

      <div className="v2-proof-container">
        <p className="v2-proof-eyebrow">OUR IMPACT</p>
        <h2 className="v2-proof-headline">Results That Speak For Themselves</h2>

        <div className="v2-proof-grid">
          {stats.map((s, i) => (
            <div
              key={i}
              className="v2-proof-stat"
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              <div className="v2-proof-icon">{s.icon}</div>
              <div className="v2-proof-number">{s.number}</div>
              <div className="v2-proof-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default V2Section7Proof;
