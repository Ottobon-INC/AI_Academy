import React from 'react';
import './Section4HowItWorks.css';

export const Section4HowItWorks: React.FC = () => {
  return (
    <section className="sec-hiw-section">
      <div className="sec-hiw-container">

        <h2 className="sec-hiw-headline">Your Path In 3 Phases</h2>

        <div className="sec-hiw-phases">

          {/* Phase 1 */}
          <div className="sec-hiw-phase-card">
            <div className="sec-hiw-number-badge">1</div>
            <h3 className="sec-hiw-phase-title">Learn Your Foundations</h3>
            <p className="sec-hiw-phase-desc">
              You learn the concepts that matter for YOUR goal. Not everything. Just what's relevant.
            </p>
            <span className="sec-hiw-phase-timeline">4-8 weeks | Based on your starting point</span>
          </div>

          {/* Phase 2 */}
          <div className="sec-hiw-phase-card">
            <div className="sec-hiw-number-badge">2</div>
            <h3 className="sec-hiw-phase-title">Build Real Projects</h3>
            <p className="sec-hiw-phase-desc">
              You build 2-3 projects that solve real problems. Not toy exercises. Real complexity.
            </p>
            <span className="sec-hiw-phase-timeline">4-8 weeks</span>
          </div>

          {/* Phase 3 */}
          <div className="sec-hiw-phase-card">
            <div className="sec-hiw-number-badge">3</div>
            <h3 className="sec-hiw-phase-title">Land Your Role</h3>
            <p className="sec-hiw-phase-desc">
              Portfolio ready. Interview-prepared. Job board access. Network introductions.
            </p>
            <span className="sec-hiw-phase-timeline">4-12 weeks | Active search phase</span>
          </div>

        </div>

      </div>
    </section>
  );
};
