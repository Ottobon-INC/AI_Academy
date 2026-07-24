import React from 'react';
import './V2Section3Results.css';

const V2Section3Results: React.FC = () => {
  return (
    <section className="v2-results-section" id="results">
      <div className="v2-results-container">
        
        {/* HEADER */}
        <div className="v2-results-header">
          <span className="v2-results-eyebrow">PROVED RESULTS</span>
          <h2 className="v2-results-headline">Real Career Outcomes</h2>
        </div>

        {/* ULTRA-CLEAN 3 COLUMN STAT DISPLAY */}
        <div className="v2-results-minimal-grid">
          
          <div className="v2-minimal-col">
            <span className="v2-min-stat">+62%</span>
            <span className="v2-min-label">Salary Growth</span>
            <div className="v2-min-path">
              <span>Marketing</span>
              <span className="v2-min-arrow">➔</span>
              <strong>AI PM</strong>
            </div>
          </div>

          <div className="v2-minimal-col">
            <span className="v2-min-stat">+95%</span>
            <span className="v2-min-label">Salary Growth</span>
            <div className="v2-min-path">
              <span>Dev</span>
              <span className="v2-min-arrow">➔</span>
              <strong>ML Engineer</strong>
            </div>
          </div>

          <div className="v2-minimal-col">
            <span className="v2-min-stat">3x</span>
            <span className="v2-min-label">Revenue Growth</span>
            <div className="v2-min-path">
              <span>Analyst</span>
              <span className="v2-min-arrow">➔</span>
              <strong>AI Specialist</strong>
            </div>
          </div>

        </div>

        {/* BOTTOM MINIMAL PROOF STRIP */}
        <div className="v2-results-minimal-strip">
          <div className="v2-strip-item">
            <strong>85%</strong>
            <span>Hired in 90 Days</span>
          </div>
          <span className="v2-strip-dot">•</span>
          <div className="v2-strip-item">
            <strong>+48%</strong>
            <span>Avg. Salary Uplift</span>
          </div>
          <span className="v2-strip-dot">•</span>
          <div className="v2-strip-item">
            <strong>300+</strong>
            <span>Hiring Partners</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default V2Section3Results;
