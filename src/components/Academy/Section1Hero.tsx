import React from 'react';
import './Section1Hero.css';

interface Props {
  onStart: () => void;
}

export const Section1Hero: React.FC<Props> = ({ onStart }) => {
  return (
    <section className="sec-hero-section">
      <div className="sec-hero-ambient" />
      <div className="sec-hero-container">

        <h1 className="sec-hero-headline">
          The AI Career You Want Is Closer Than You Think
        </h1>

        <p className="sec-hero-subheading">
          You're not too late. You don't need a CS degree.<br />
          Get your personalized path to your next AI role.
        </p>

        <button className="sec-hero-cta" onClick={onStart}>
          Show Me My Path
        </button>

        <div className="sec-hero-stats">
          <span className="sec-hero-stat">⭐ 4.8/5 from 300+ reviews</span>
          <span className="sec-hero-stat">🎓 5,000+ students learning</span>
          <span className="sec-hero-stat">💼 85% land roles within 6 months</span>
        </div>

      </div>
    </section>
  );
};
