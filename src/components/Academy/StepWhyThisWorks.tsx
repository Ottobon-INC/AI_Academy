import React from 'react';
import './StepWhyThisWorks.css';

export const StepWhyThisWorks: React.FC = () => {
  return (
    <section className="wtw-section">
      <div className="wtw-container">

        <div className="wtw-header">
          <span className="wtw-label">Credibility + Differentiation</span>
          <h2>This Isn't Theory. This Is From People Actually Doing The Work.</h2>
          <p>Three reasons this approach works — and why it's different from everything else you've tried.</p>
        </div>

        <div className="wtw-reasons">

          {/* Reason 1 */}
          <div className="wtw-reason">
            <div className="wtw-reason-number">01</div>
            <div className="wtw-reason-left">
              <div className="wtw-reason-icon">🎯</div>
              <h3>You Learn What Matters. Not Everything.</h3>
            </div>
            <div className="wtw-reason-right">
              <p>
                Most AI courses try to teach <strong>EVERYTHING</strong>. That's why they take 12 months and still feel incomplete.
              </p>
              <p>We do the opposite.</p>
              <p>
                We figure out what you NEED based on your goal and your starting point. You learn that. You master that. You move on.
              </p>
              <p>No waste. No "I'll never use this" sections. Just the path to your role.</p>
              <div className="wtw-reason-result">
                Result: Faster learning. Better retention. Actual job readiness.
              </div>
              <div className="wtw-persona-notes">
                <div className="wtw-pnote"><strong>Beginner</strong>"Not everything" = less overwhelming</div>
                <div className="wtw-pnote"><strong>Professional</strong>"Learn what matters" = efficient</div>
                <div className="wtw-pnote"><strong>Specialist</strong>"Curated" = respects your time</div>
              </div>
            </div>
          </div>

          {/* Reason 2 */}
          <div className="wtw-reason">
            <div className="wtw-reason-number">02</div>
            <div className="wtw-reason-left">
              <div className="wtw-reason-icon">👥</div>
              <h3>Your Teachers Are Doing This Work Right Now</h3>
            </div>
            <div className="wtw-reason-right">
              <p>You won't learn from someone who "used to work in AI." You won't watch lectures recorded 3 years ago about outdated tools.</p>
              <ul className="wtw-reason-bullets">
                <li>Your instructors currently work at tech/AI companies</li>
                <li>They deal with real production problems</li>
                <li>They know what actually gets you hired</li>
                <li>Content is updated quarterly — not yearly or never</li>
              </ul>
              <p>
                When they say "here's how you optimize models in production," they're teaching what they did <strong>this week</strong>.
              </p>
              <p>When they give interview tips, they're the ones hiring.</p>
            </div>
          </div>

          {/* Reason 3 */}
          <div className="wtw-reason">
            <div className="wtw-reason-number">03</div>
            <div className="wtw-reason-left">
              <div className="wtw-reason-icon">🤝</div>
              <h3>Community Over Isolation</h3>
            </div>
            <div className="wtw-reason-right">
              <p>
                You're not alone in some giant MOOC with 10,000 people and zero interaction.
              </p>
              <p>You're learning with people at <strong>your level</strong>:</p>
              <div className="wtw-persona-notes">
                <div className="wtw-pnote"><strong>Beginner</strong>Learn with other beginners — relatable, not intimidating</div>
                <div className="wtw-pnote"><strong>Professional</strong>Learn with bridge-builders — shared challenges</div>
                <div className="wtw-pnote"><strong>Specialist</strong>Learn with serious practitioners — peer learning</div>
              </div>
              <p>
                You can ask questions. Get feedback on projects. Build relationships.
              </p>
              <p><strong>Many of our best opportunities come from the community — not just instructors.</strong></p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
