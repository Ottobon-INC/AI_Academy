import React from 'react';
import './Section7JobSupport.css';

export const Section7JobSupport: React.FC = () => {
  return (
    <section className="sec-js-section">
      <div className="sec-js-container">

        <h2 className="sec-js-headline">We Help You Land The Role (Learning Is Only Half)</h2>

        <p className="sec-js-subtext">After you finish learning, we don't disappear.</p>

        <div className="sec-js-grid">

          {/* Card 1 */}
          <div className="sec-js-card">
            <div className="sec-js-icon">📄</div>
            <div className="sec-js-content">
              <h3>Resume Strategy</h3>
              <p>Position your background. Show why you're perfect for AI roles.</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="sec-js-card">
            <div className="sec-js-icon">💬</div>
            <div className="sec-js-content">
              <h3>Interview Preparation</h3>
              <p>Technical + behavioral prep. Mock interviews. Real feedback.</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="sec-js-card">
            <div className="sec-js-icon">🌐</div>
            <div className="sec-js-content">
              <h3>Network Access</h3>
              <p>Job board access. Recruiter introductions. Graduate network.</p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="sec-js-card">
            <div className="sec-js-icon">✓</div>
            <div className="sec-js-content">
              <h3>Portfolio Review</h3>
              <p>We review your projects. Make sure they're hire-worthy.</p>
            </div>
          </div>

          {/* Card 5 (Full Width) */}
          <div className="sec-js-card full-width">
            <div className="sec-js-icon">🤝</div>
            <div className="sec-js-content">
              <h3>Ongoing Support</h3>
              <p>Didn't land yet? We figure out why. We fix it. Your success = our success.</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
