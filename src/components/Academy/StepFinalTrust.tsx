import React from 'react';
import './StepFinalTrust.css';

export const StepFinalTrust: React.FC = () => {
  return (
    <section className="final-trust-section">
      <div className="ft-container">

        <div className="ft-header">
          <span className="ft-label">Track Record</span>
          <h2>Real Results. Real Careers. Real Support.</h2>
        </div>

        <div className="ft-proof-grid">

          {/* Proof Point 1: Persona 1 */}
          <div className="ft-proof-card">
            <div className="ft-proof-card-accent" />
            <div className="ft-proof-icon">🌱</div>
            <div className="ft-proof-persona">Complete Beginners</div>
            <h3 className="ft-proof-headline">1,000+ Career Switchers Now In AI Roles</h3>
            <p className="ft-proof-body">
              People with zero tech background didn't become AI engineers on accident. They were guided through a clear, structured path. That path works. We've proven it thousands of times.
            </p>
            <div className="ft-proof-stats">
              <div className="ft-stat-row">85% job placement within 6 months</div>
              <div className="ft-stat-row">40% increased salary vs. previous role</div>
              <div className="ft-stat-row">Average starting AI role: $70K–$85K</div>
              <div className="ft-stat-row">Most find jobs within 4-6 months</div>
            </div>
            <p className="ft-proof-closing">"You don't need to be special. You just need structure."</p>
          </div>

          {/* Proof Point 2: Persona 2 */}
          <div className="ft-proof-card">
            <div className="ft-proof-card-accent" />
            <div className="ft-proof-icon">🚀</div>
            <div className="ft-proof-persona">Tech Professionals</div>
            <h3 className="ft-proof-headline">500+ Experienced Professionals Accelerated Into AI</h3>
            <p className="ft-proof-body">
              You don't need 5 more years of learning. You need direction. We've accelerated 500+ working professionals into AI roles. They had your background. They had your constraints (full-time job). They made the transition.
            </p>
            <div className="ft-proof-stats">
              <div className="ft-stat-row">90% job placement within 4 months</div>
              <div className="ft-stat-row">Average salary increase: +35%</div>
              <div className="ft-stat-row">80% landed at senior/mid-level (not junior)</div>
              <div className="ft-stat-row">Average time to new role: 3-5 months</div>
            </div>
            <p className="ft-proof-closing">"Your experience counts. We just need to reposition it."</p>
          </div>

          {/* Proof Point 3: Persona 3 */}
          <div className="ft-proof-card">
            <div className="ft-proof-card-accent" />
            <div className="ft-proof-icon">⚡</div>
            <div className="ft-proof-persona">AI Specialists</div>
            <h3 className="ft-proof-headline">200+ Practitioners Moved Into Leadership</h3>
            <p className="ft-proof-body">
              You're not looking for just "another job." You're looking to lead, influence, and own your domain. 200+ of our graduates did exactly that.
            </p>
            <div className="ft-proof-stats">
              <div className="ft-stat-row">70% moved to senior/leadership roles</div>
              <div className="ft-stat-row">50+ published papers from their projects</div>
              <div className="ft-stat-row">40+ spoke at major conferences</div>
              <div className="ft-stat-row">Building careers, not just landing jobs</div>
            </div>
            <p className="ft-proof-closing">"This community is where the serious people are."</p>
          </div>

        </div>
      </div>
    </section>
  );
};
