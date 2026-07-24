import React, { useState } from 'react';
import './StepFooter.css';

export const StepFooter: React.FC = () => {
  const [email, setEmail] = useState('');

  return (
    <footer className="footer-section">
      <div className="footer-container">

        {/* Newsletter */}
        <div className="footer-newsletter">
          <h3>Get Weekly AI Insights</h3>
          <p>Only 1 email per week. No spam. No fluff. Just the good stuff.</p>
          <div className="footer-nl-form">
            <input
              type="email"
              className="footer-nl-input"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className="footer-nl-btn">Subscribe</button>
          </div>
          <p className="footer-nl-disclaimer">We won't spam. We won't sell your data. Just insights.</p>
        </div>

        {/* Links Row */}
        <div className="footer-links-row">
          <div className="footer-brand">
            <div className="footer-logo">AI Academy</div>
            <p className="footer-brand-tagline">From where you are, to where you want to be.</p>
          </div>

          <div className="footer-nav-group">
            <div className="footer-nav-title">Platform</div>
            <div className="footer-nav-links">
              <a href="#">About Us</a>
              <a href="#">How It Works</a>
              <a href="#">Curriculum</a>
              <a href="#">Student Stories</a>
            </div>
          </div>

          <div className="footer-nav-group">
            <div className="footer-nav-title">Resources</div>
            <div className="footer-nav-links">
              <a href="#">Blog</a>
              <a href="#">Career Guide</a>
              <a href="#">AI Glossary</a>
              <a href="#">Contact</a>
            </div>
          </div>

          <div className="footer-nav-group">
            <div className="footer-nav-title">Follow Us</div>
            <div className="footer-nav-links">
              <a href="#">LinkedIn</a>
              <a href="#">Twitter / X</a>
              <a href="#">YouTube</a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p className="footer-copyright">© 2025 AI Academy. All rights reserved.</p>
          <div className="footer-legal-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Refund Policy</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
