import React from 'react';
import './V2Section9Push.css';

interface V2Section9PushProps {
  onStart: () => void;
}

const V2Section9Push: React.FC<V2Section9PushProps> = ({ onStart }) => {
  return (
    <section className="v2-push-section">
      {/* Animated background gradient orbs */}
      <div className="v2-push-orb v2-push-orb-1" />
      <div className="v2-push-orb v2-push-orb-2" />
      <div className="v2-push-orb v2-push-orb-3" />

      <div className="v2-push-container">
        <p className="v2-push-eyebrow">🚀 Limited Cohort Spots Available</p>

        <h2 className="v2-push-headline">
          Your Career In AI<br />
          <span className="v2-push-gradient">Isn't Waiting. You Are.</span>
        </h2>

        <p className="v2-push-subtext">
          5,000+ students have already made the leap. The AI skill gap is closing fast — 
          the engineers who start now will be the ones companies fight over in 12 months.
        </p>

        <div className="v2-push-actions">
          <button className="v2-push-cta-primary" onClick={onStart}>
            Get My Personalised AI Roadmap →
          </button>
          <p className="v2-push-note">Free 5-minute assessment. No credit card required.</p>
        </div>

        <div className="v2-push-trust">
          <div className="v2-push-trust-item">✅ Personalised curriculum</div>
          <div className="v2-push-trust-item">✅ Real projects, real portfolio</div>
          <div className="v2-push-trust-item">✅ Job placement support</div>
        </div>
      </div>
    </section>
  );
};

export default V2Section9Push;
