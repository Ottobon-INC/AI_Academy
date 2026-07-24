import React from 'react';
import './Section3SocialProof.css';

export const Section3SocialProof: React.FC = () => {
  return (
    <section className="sec-sp-section">
      <div className="sec-sp-container">

        <h2 className="sec-sp-headline">This Isn't Theory. Real People Did This.</h2>

        <div className="sec-sp-cards">

          {/* Card 1: Sarah */}
          <div className="sec-sp-card">
            <div className="sec-sp-avatar">S</div>
            <h3 className="sec-sp-name">Sarah</h3>
            <div className="sec-sp-role-journey">
              <span>Marketing Manager</span>
              <span>→</span>
              <span>AI Marketing Specialist</span>
            </div>
            <div className="sec-sp-quote-box">
              <p>"I thought AI was for people with PhDs. I had zero coding experience. But I was tired of doing things manually. Once I had structure, everything clicked. By Month 4, I landed a role. Now I'm teaching others."</p>
            </div>
            <span className="sec-sp-tag">⚡ +40% salary jump | 4 months to role</span>
          </div>

          {/* Card 2: Raj */}
          <div className="sec-sp-card">
            <div className="sec-sp-avatar">R</div>
            <h3 className="sec-sp-name">Raj</h3>
            <div className="sec-sp-role-journey">
              <span>Data Analyst</span>
              <span>→</span>
              <span>ML Engineer</span>
            </div>
            <div className="sec-sp-quote-box">
              <p>"I knew Python and SQL. But there was a gap between 'knowing some things' and being hired as an ML engineer. 4 months of focused learning later, I was interviewing. Now I'm building production ML systems."</p>
            </div>
            <span className="sec-sp-tag">⚡ +35% salary jump | 4 months to role</span>
          </div>

          {/* Card 3: Maria */}
          <div className="sec-sp-card">
            <div className="sec-sp-avatar">M</div>
            <h3 className="sec-sp-name">Maria</h3>
            <div className="sec-sp-role-journey">
              <span>ML Engineer</span>
              <span>→</span>
              <span>AI Tech Lead</span>
            </div>
            <div className="sec-sp-quote-box">
              <p>"I wanted to specialize, not just be another ML engineer. 6 months of deep learning, and I was published. Got speaking invitations. Got recruited for a leadership role. The job was great. Being known for something? That changed everything."</p>
            </div>
            <span className="sec-sp-tag">🏆 Moved to Tech Lead | Published</span>
          </div>

        </div>

      </div>
    </section>
  );
};
