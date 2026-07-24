import React from 'react';
import './StepCTA.css';

interface Props {
  onStart?: () => void;
}

export const StepCTA: React.FC<Props> = ({ onStart }) => {
  return (
    <section className="cta-section">
      <div className="cta-bg-glow" />
      <div className="cta-container">

        <div className="cta-eyebrow">Your Move</div>
        <h2>The AI Career You Want<br />Is Closer Than You Think</h2>
        <p>Takes 2 minutes. Completely free. See your personalized path to an AI role — based on exactly where you're starting.</p>

        <div className="cta-button-group">
          <button className="cta-button" onClick={onStart}>
            Show Me My Path
          </button>
          <p className="cta-subtext">Takes 2 minutes. Completely free to explore.</p>
        </div>

        {/* Trust stats row */}
        <div className="cta-stats-row">
          <div className="cta-stat">
            <span className="cta-stat-value">⭐ 4.8/5</span>
            <span className="cta-stat-label">from 300+ reviews</span>
          </div>
          <div className="cta-stat-divider" />
          <div className="cta-stat">
            <span className="cta-stat-value">5,000+</span>
            <span className="cta-stat-label">students learning</span>
          </div>
          <div className="cta-stat-divider" />
          <div className="cta-stat">
            <span className="cta-stat-value">85%</span>
            <span className="cta-stat-label">job placement rate</span>
          </div>
          <div className="cta-stat-divider" />
          <div className="cta-stat">
            <span className="cta-stat-value">4-6 months</span>
            <span className="cta-stat-label">average to AI career</span>
          </div>
        </div>

        {/* Persona-tailored sub-messages */}
        <div className="cta-persona-messages">
          <div className="cta-persona-msg">
            <span className="cta-pm-label">🌱 New to AI?</span>
            <span className="cta-pm-text">See your personalized roadmap. Get a timeline to your first AI job.</span>
          </div>
          <div className="cta-persona-msg">
            <span className="cta-pm-label">🚀 Already in tech?</span>
            <span className="cta-pm-text">Get your accelerated path. See how fast you can transition.</span>
          </div>
          <div className="cta-persona-msg">
            <span className="cta-pm-label">⚡ Deep in AI?</span>
            <span className="cta-pm-text">Explore your specialization. Join serious practitioners. Build toward leadership.</span>
          </div>
        </div>

        <p className="cta-guarantee">No credit card required to explore your path · 30-day money-back guarantee · Completely risk-free</p>
      </div>
    </section>
  );
};
