import React from 'react';
import './Section12FinalCTA.css';

interface Props {
  onStart: () => void;
}

export const Section12FinalCTA: React.FC<Props> = ({ onStart }) => {
  return (
    <section className="sec-cta-section">
      <div className="sec-cta-container">

        <h2 className="sec-cta-headline">Ready?</h2>

        <button className="sec-cta-btn" onClick={onStart}>
          Show Me My Path
        </button>

        <p className="sec-cta-sub">
          Takes 2 minutes. Completely free.<br />
          No credit card required &nbsp;•&nbsp; 30-day money-back guarantee &nbsp;•&nbsp; Totally risk-free.
        </p>

      </div>
    </section>
  );
};
