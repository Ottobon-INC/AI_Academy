import React from 'react';
import './StepHowItWorks.css';

export const StepHowItWorks: React.FC = () => {
  return (
    <section className="how-it-works-section">
      <div className="how-it-works-container">
        <div className="how-it-works-header">
          <h2>How it Works</h2>
          <p>Stop guessing. Let our AI build a custom path based on your unique background.</p>
        </div>
        
        <div className="steps-grid">
          {/* Step 1 */}
          <div className="hiw-step">
            <div className="step-number">01</div>
            <div className="step-icon">📄</div>
            <h3>Upload Your Resume</h3>
            <p>Upload your resume or LinkedIn profile. Our AI instantly parses your domain expertise, industry experience, and unique strengths.</p>
          </div>
          
          {/* Step 2 */}
          <div className="hiw-step">
            <div className="step-number">02</div>
            <div className="step-icon">🎯</div>
            <h3>The Skill Gap Analysis</h3>
            <p>We map your current skills against top-tier AI roles to find your highest-leverage path and highlight the exact gaps you need to close.</p>
          </div>
          
          {/* Step 3 */}
          <div className="hiw-step">
            <div className="step-number">03</div>
            <div className="step-icon">🗺️</div>
            <h3>The Custom Blueprint</h3>
            <p>Get a personalized curriculum that skips what you already know and focuses strictly on what you need to land a high-paying AI role.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
