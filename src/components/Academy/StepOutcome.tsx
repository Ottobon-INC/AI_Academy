import React from 'react';
import './StepOutcome.css';

export const StepOutcome: React.FC = () => {
  return (
    <section className="outcome-section">
      
      {/* Step 6: The AI Blueprint */}
      <div className="blueprint-container">
        <div className="blueprint-header">
          <h2>Your AI Blueprint.</h2>
          <p>This is what you get. A surgical, personalized roadmap.</p>
        </div>
        
        {/* Beautiful Mock UI of the dashboard */}
        <div className="blueprint-mock-ui">
          <div className="mock-sidebar">
            <div className="mock-avatar"></div>
            <div className="mock-nav-item active"></div>
            <div className="mock-nav-item"></div>
            <div className="mock-nav-item"></div>
          </div>
          
          <div className="mock-content">
            <div className="mock-top-bar">
              <div className="mock-score-card">
                <span className="mock-score">92%</span>
                <span className="mock-label">AI Readiness</span>
              </div>
              <div className="mock-match-card">
                <span className="mock-title">Top Match: AI Product Manager</span>
                <div className="mock-progress-bar"><div className="mock-fill" style={{width: '85%'}}></div></div>
              </div>
            </div>

            <div className="mock-timeline">
              <h4>Your Custom Learning Path</h4>
              <div className="mock-step done"><span className="mock-dot"></span>Module 1: LLM Fundamentals (Bypassed)</div>
              <div className="mock-step active"><span className="mock-dot"></span>Module 2: AI Agent Orchestration</div>
              <div className="mock-step"><span className="mock-dot"></span>Module 3: Enterprise RAG Systems</div>
              <div className="mock-step"><span className="mock-dot"></span>Module 4: Capstone Project</div>
            </div>
          </div>
        </div>
      </div>

      {/* Step 7: Career Opportunities */}
      <div className="opportunities-container">
        <h3 className="opp-headline">There is a path for your background.</h3>
        
        <div className="opp-carousel">
          <div className="opp-card">
            <div className="opp-icon">🛠️</div>
            <h4>AI Engineer</h4>
            <p>Build the core infrastructure and fine-tune models.</p>
          </div>
          <div className="opp-card highlight">
            <div className="opp-icon">📈</div>
            <h4>AI Product Manager</h4>
            <p>Define the strategy and bridge tech with business.</p>
          </div>
          <div className="opp-card">
            <div className="opp-icon">📊</div>
            <h4>AI Data Analyst</h4>
            <p>Leverage predictive models for business intelligence.</p>
          </div>
          <div className="opp-card">
            <div className="opp-icon">🎨</div>
            <h4>AI UX Designer</h4>
            <p>Design conversational and generative interfaces.</p>
          </div>
        </div>
      </div>

    </section>
  );
};
