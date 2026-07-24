import React from 'react';
import './CompanyMarquee.css';

export const CompanyMarquee: React.FC = () => {
  const companies = [
    "Google", "JPMorgan", "Walmart", "McKinsey", "Netflix", "OpenAI", "Tesla", "Deloitte", "Nike", "Stripe"
  ];

  return (
    <div className="company-marquee-wrapper">
      <p className="marquee-label">Hiring AI Talent Across All Domains</p>
      <div className="marquee-track">
        <div className="marquee-content">
          {companies.map((c, i) => <span key={`c1-${i}`}>{c}</span>)}
          {/* Duplicate set for infinite scroll loop */}
          {companies.map((c, i) => <span key={`c2-${i}`}>{c}</span>)}
        </div>
      </div>
    </div>
  );
};
