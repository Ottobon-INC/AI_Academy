import React, { useState } from 'react';
import './Section13Footer.css';

export const Section13Footer: React.FC = () => {
  const [email, setEmail] = useState('');

  return (
    <footer className="sec-foot-section">
      <div className="sec-foot-container">

        <div className="sec-foot-grid">

          {/* Column 1 */}
          <div className="sec-foot-brand">
            <div className="sec-foot-logo">AI Academy</div>
            <p className="sec-foot-desc">Build your career in AI</p>
          </div>

          {/* Column 2 */}
          <div className="sec-foot-col">
            <div className="sec-foot-title">Company</div>
            <div className="sec-foot-links">
              <a href="#">About</a>
              <a href="#">Curriculum</a>
              <a href="#">Student Stories</a>
              <a href="#">Blog</a>
              <a href="#">How It Works</a>
            </div>
          </div>

          {/* Column 3 */}
          <div className="sec-foot-col">
            <div className="sec-foot-title">Legal</div>
            <div className="sec-foot-links">
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
              <a href="#">Refund Policy</a>
              <a href="#">Contact</a>
            </div>
          </div>

          {/* Column 4 */}
          <div className="sec-foot-col">
            <div className="sec-foot-title">Social</div>
            <div className="sec-foot-links">
              <a href="#">LinkedIn</a>
              <a href="#">Twitter / X</a>
              <a href="#">YouTube</a>
            </div>
          </div>

          {/* Column 5 */}
          <div className="sec-foot-nl">
            <div className="sec-foot-title">Get Weekly AI Insights</div>
            <div className="sec-foot-nl-form">
              <input
                type="email"
                className="sec-foot-nl-input"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button className="sec-foot-nl-btn">Subscribe</button>
            </div>
            <p className="sec-foot-desc">We don't spam.</p>
          </div>

        </div>

        <div className="sec-foot-bottom">
          <span>© 2025 AI Academy. All rights reserved.</span>
          <span>Build your AI career with confidence.</span>
        </div>

      </div>
    </footer>
  );
};
