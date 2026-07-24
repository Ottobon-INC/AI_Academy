import React from 'react';
import './Section2Validation.css';

export const Section2Validation: React.FC = () => {
  return (
    <section className="sec-val-section">
      <div className="sec-val-container">

        <h2 className="sec-val-headline">You're Not Alone In This</h2>

        <div className="sec-val-icons">
          <div className="sec-val-icon-box" title="Compass — Direction">🧭</div>
          <div className="sec-val-icon-box" title="Chart — Progression">📈</div>
          <div className="sec-val-icon-box" title="Star — Mastery">⭐</div>
        </div>

        <div className="sec-val-card">
          <p className="sec-val-intro">Right now, you might be thinking one of these:</p>

          <div className="sec-val-quotes">
            <p className="sec-val-quote">"I want to learn AI but don't know where to start."</p>
            <p className="sec-val-quote">"I know some AI but need to go deeper."</p>
            <p className="sec-val-quote">"I know a lot. I need to specialize."</p>
          </div>

          <div className="sec-val-body">
            <p><strong>All valid. All lead to AI careers.</strong></p>
            <p>The difference isn't talent. <span className="sec-val-highlight">It's direction.</span></p>
            <div className="sec-val-wants">
              We built this for people who want: <br />
              ✨ A clear path &nbsp;•&nbsp; 🤝 Real guidance &nbsp;•&nbsp; 🎯 Actual results.
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
