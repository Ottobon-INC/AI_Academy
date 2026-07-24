import React, { useState } from 'react';
import './V2Section10Footer.css';

const V2Section10Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="v2-footer-section">
      <div className="v2-footer-glow" />

      <div className="v2-footer-container">
        {/* Top grid */}
        <div className="v2-footer-top">

          {/* Brand */}
          <div className="v2-footer-brand">
            <div className="v2-footer-logo">
              <span className="v2-footer-logo-icon">⚡</span>
              <span className="v2-footer-logo-text">AI Academy</span>
            </div>
            <p className="v2-footer-tagline">
              The fastest path from where you are<br />to where AI can take you.
            </p>
            <div className="v2-footer-socials">
              <a href="#" className="v2-footer-social-link" aria-label="Twitter">
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="#" className="v2-footer-social-link" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="#" className="v2-footer-social-link" aria-label="YouTube">
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
            </div>
          </div>

          {/* Programs */}
          <div className="v2-footer-column">
            <h4 className="v2-footer-col-title">Programs</h4>
            <a href="#" className="v2-footer-link">AI Foundations</a>
            <a href="#" className="v2-footer-link">Machine Learning Track</a>
            <a href="#" className="v2-footer-link">AI Agents & LLMs</a>
            <a href="#" className="v2-footer-link">AI for Product Managers</a>
            <a href="#" className="v2-footer-link">No-Code AI Tools</a>
          </div>

          {/* Company */}
          <div className="v2-footer-column">
            <h4 className="v2-footer-col-title">Company</h4>
            <a href="#" className="v2-footer-link">About Us</a>
            <a href="#" className="v2-footer-link">Hiring Partners</a>
            <a href="#" className="v2-footer-link">Blog</a>
            <a href="#" className="v2-footer-link">Careers</a>
            <a href="#" className="v2-footer-link">Contact</a>
          </div>

          {/* Newsletter */}
          <div className="v2-footer-newsletter">
            <h4 className="v2-footer-col-title">Stay Ahead of AI</h4>
            <p className="v2-footer-newsletter-desc">Weekly AI industry insights, job opportunities, and course updates. No spam.</p>
            {subscribed ? (
              <div className="v2-footer-subscribed">✅ You're on the list!</div>
            ) : (
              <form className="v2-footer-form" onSubmit={handleSubscribe}>
                <input
                  type="email"
                  className="v2-footer-input"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit" className="v2-footer-subscribe-btn">Subscribe</button>
              </form>
            )}
          </div>
        </div>

        {/* Divider */}
        <div className="v2-footer-divider" />

        {/* Bottom bar */}
        <div className="v2-footer-bottom">
          <p className="v2-footer-copyright">
            © {new Date().getFullYear()} AI Academy. All rights reserved.
          </p>
          <div className="v2-footer-legal">
            <a href="#" className="v2-footer-legal-link">Privacy Policy</a>
            <a href="#" className="v2-footer-legal-link">Terms of Service</a>
            <a href="#" className="v2-footer-legal-link">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default V2Section10Footer;
