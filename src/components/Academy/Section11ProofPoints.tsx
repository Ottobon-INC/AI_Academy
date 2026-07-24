import React from 'react';
import './Section11ProofPoints.css';

export const Section11ProofPoints: React.FC = () => {
  return (
    <section className="sec-pp-section">
      <div className="sec-pp-container">

        <h2 className="sec-pp-headline">Real Results. Real Careers.</h2>

        <div className="sec-pp-grid">

          {/* Card 1 */}
          <div className="sec-pp-card blue">
            <div className="sec-pp-number">5,000+</div>
            <div className="sec-pp-label">Students learning</div>
          </div>

          {/* Card 2 */}
          <div className="sec-pp-card green">
            <div className="sec-pp-number">85%</div>
            <div className="sec-pp-label">Land AI roles within 6 months</div>
          </div>

          {/* Card 3 */}
          <div className="sec-pp-card orange">
            <div className="sec-pp-number">+35%</div>
            <div className="sec-pp-label">Average salary increase</div>
          </div>

          {/* Card 4 */}
          <div className="sec-pp-card purple">
            <div className="sec-pp-number">4-5</div>
            <div className="sec-pp-label">Average months to new role</div>
          </div>

        </div>

      </div>
    </section>
  );
};
