import React from 'react';
import './Section9Community.css';

export const Section9Community: React.FC = () => {
  return (
    <section className="sec-com-section">
      <div className="sec-com-container">

        <h2 className="sec-com-headline">You're Not Learning Alone</h2>

        <p className="sec-com-sub">You're learning with people on a similar path. What that means:</p>

        <div className="sec-com-card">
          <ul className="sec-com-bullets">
            <li><span>✓</span> Real questions get real answers</li>
            <li><span>✓</span> Project feedback from peers + instructors</li>
            <li><span>✓</span> Shared struggles become shared solutions</li>
            <li><span>✓</span> Genuine relationships & collaborations</li>
            <li><span>✓</span> Job opportunities from the community</li>
          </ul>

          <p className="sec-com-closing">The network matters as much as the learning.</p>
        </div>

      </div>
    </section>
  );
};
