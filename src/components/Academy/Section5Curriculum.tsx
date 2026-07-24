import React from 'react';
import './Section5Curriculum.css';

export const Section5Curriculum: React.FC = () => {
  return (
    <section className="sec-curr-section">
      <div className="sec-curr-container">

        <h2 className="sec-curr-headline">Curriculum Built For Your Starting Point</h2>

        <div className="sec-curr-cards">

          {/* Track 1 */}
          <div className="sec-curr-card">
            <div className="sec-curr-card-header warm">
              Foundations Track
            </div>
            <div className="sec-curr-card-body">
              <ul className="sec-curr-bullets">
                <li><span>✓</span> Core concepts (ML, why it matters)</li>
                <li><span>✓</span> Python + essential tools</li>
                <li><span>✓</span> Supervised & unsupervised learning</li>
                <li><span>✓</span> Build 2-3 real projects</li>
                <li><span>✓</span> Choose your specialization</li>
              </ul>
              <div className="sec-curr-meta">
                <div className="sec-curr-timeline">⏱️ 12-18 weeks part-time / 6-8 weeks full-time</div>
                <div className="sec-curr-outcome">→ Ready for junior AI roles</div>
              </div>
            </div>
          </div>

          {/* Track 2 */}
          <div className="sec-curr-card">
            <div className="sec-curr-card-header blue">
              Accelerated Track
            </div>
            <div className="sec-curr-card-body">
              <ul className="sec-curr-bullets">
                <li><span>✓</span> Advanced ML concepts (skip basics)</li>
                <li><span>✓</span> Systems design + production ML</li>
                <li><span>✓</span> Your chosen specialization</li>
                <li><span>✓</span> Build 2-3 advanced projects</li>
                <li><span>✓</span> Portfolio that proves depth</li>
              </ul>
              <div className="sec-curr-meta">
                <div className="sec-curr-timeline">⏱️ 10-14 weeks part-time / 4-6 weeks full-time</div>
                <div className="sec-curr-outcome">→ Ready for mid-level ML/AI roles</div>
              </div>
            </div>
          </div>

          {/* Track 3 */}
          <div className="sec-curr-card">
            <div className="sec-curr-card-header purple">
              Specialization Track
            </div>
            <div className="sec-curr-card-body">
              <ul className="sec-curr-bullets">
                <li><span>✓</span> Master your chosen area (LLMs, CV, NLP, etc.)</li>
                <li><span>✓</span> Advanced research + cutting-edge work</li>
                <li><span>✓</span> Build signature project</li>
                <li><span>✓</span> Thought leadership (writing, speaking)</li>
                <li><span>✓</span> Cohort-based learning</li>
              </ul>
              <div className="sec-curr-meta">
                <div className="sec-curr-timeline">⏱️ 12-20 weeks (8-12 hours per week)</div>
                <div className="sec-curr-outcome">→ Ready for senior/leadership roles</div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
