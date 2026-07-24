import React, { useEffect, useRef, useState } from 'react';
import './V2Section6WhyNow.css';

const stats = [
  { value: 97, suffix: '%', label: 'of companies plan to use AI in the next 2 years', source: 'IBM 2025' },
  { value: 40, suffix: '%', label: 'average salary increase for AI-skilled professionals', source: 'LinkedIn Insights' },
  { value: 1, suffix: 'M+', label: 'new AI jobs opening globally by end of 2025', source: 'World Economic Forum' },
  { value: 6, suffix: 'months', label: 'average time to land an AI role after structured training', source: 'Academy Data' },
];

const urgencyPoints = [
  { icon: '⚡', text: 'AI engineering demand is accelerating 3x faster than traditional tech roles' },
  { icon: '💸', text: 'AI-skilled professionals command 35–60% higher compensation premiums' },
  { icon: '🏢', text: 'Leading tech firms & enterprises are aggressively building dedicated AI units' },
  { icon: '⏳', text: 'The global AI talent gap is widening — early practitioners capture prime roles' },
];

function useCountUp(target: number, isVisible: boolean, duration = 1800) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [isVisible, target, duration]);
  return count;
}

const StatCard: React.FC<{ value: number; suffix: string; label: string; source: string; isVisible: boolean; delay: number }> = ({ value, suffix, label, source, isVisible, delay }) => {
  const count = useCountUp(value, isVisible);
  return (
    <div className="v2-why-stat" style={{ transitionDelay: `${delay}ms` }}>
      <div className="v2-why-stat-number">
        {isVisible ? count : 0}<span>{suffix}</span>
      </div>
      <div className="v2-why-stat-label">{label}</div>
      <div className="v2-why-stat-source">{source}</div>
    </div>
  );
};

const V2Section6WhyNow: React.FC = () => {
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
    <section className="v2-why-section" id="why-now" ref={sectionRef}>
      {/* Ambient bg */}
      <div className="v2-why-glow-top" />
      <div className="v2-why-glow-bottom" />

      <div className="v2-why-container">

        {/* Header */}
        <div className={`v2-why-header ${isVisible ? 'is-visible' : ''}`}>
          <p className="v2-why-eyebrow">WHY NOW</p>
          <h2 className="v2-why-headline">
            The AI Market Is Growing.<br />
            <span className="v2-why-headline-accent">The Question Is: Are You?</span>
          </h2>
          <p className="v2-why-subtitle">
            AI is reshaping every industry, company, and salary standard.<br />
            You can either watch the market transform—or step up and grow with it.
          </p>
        </div>

        {/* Stat counters */}
        <div className={`v2-why-stats ${isVisible ? 'is-visible' : ''}`}>
          {stats.map((s, i) => (
            <StatCard key={i} {...s} isVisible={isVisible} delay={i * 150} />
          ))}
        </div>

        {/* Urgency bullets */}
        <div className={`v2-why-urgency ${isVisible ? 'is-visible' : ''}`}>
          <div className="v2-why-urgency-inner">
            <p className="v2-why-urgency-heading">The market isn't waiting. Here's where it's going:</p>
            <div className="v2-why-urgency-list">
              {urgencyPoints.map((p, i) => (
                <div key={i} className="v2-why-urgency-item" style={{ transitionDelay: `${600 + i * 100}ms` }}>
                  <span className="v2-why-urgency-icon">{p.icon}</span>
                  <span>{p.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="v2-why-cta-block">
            <p className="v2-why-cta-text">
              The market is moving forward with or without you.<br />Choose to grow today.
            </p>
            <button className="v2-why-cta-btn">
              Start Your Free Assessment →
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default V2Section6WhyNow;
