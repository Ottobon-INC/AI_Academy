import React from 'react';
import './Section8WhyThisWorks.css';

export const Section8WhyThisWorks: React.FC = () => {
  return (
    <section className="sec-wtw-section">
      <div className="sec-wtw-container">

        {/* Left Column */}
        <div className="sec-wtw-left">
          <h2 className="sec-wtw-headline">You're Learning From People Actually Doing This</h2>

          <p className="sec-wtw-sub">Most courses are recorded lectures from people who "used to work" in AI.</p>

          <ul className="sec-wtw-bullets">
            <li><span>✓</span> Work at tech companies RIGHT NOW</li>
            <li><span>✓</span> Deal with production problems EVERY DAY</li>
            <li><span>✓</span> Know what actually gets you hired</li>
            <li><span>✓</span> Update content quarterly</li>
            <li><span>✓</span> Teach what they did this week</li>
          </ul>

          <div className="sec-wtw-closing">
            When they say "here's production optimization," they did it yesterday.<br />
            When they give interview tips, they're the ones hiring.
          </div>
        </div>

        {/* Right Column */}
        <div className="sec-wtw-card">
          <span className="sec-wtw-badge">🟢 Active Practitioners</span>
          <h3 className="sec-wtw-card-title">Updated Quarterly. Never Outdated.</h3>
          <p className="sec-wtw-card-desc">
            AI tools and architectures evolve every month. Our curriculum is updated continuously by active ML leads so you learn what's being deployed in production today.
          </p>
        </div>

      </div>
    </section>
  );
};
