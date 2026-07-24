import React from 'react';
import './StepWhatYouGet.css';

export const StepWhatYouGet: React.FC = () => {
  return (
    <section className="wyg-section">
      <div className="wyg-container">

        {/* Header */}
        <div className="wyg-header">
          <span className="wyg-label">The Promise</span>
          <h2>You Won't Just Learn. You'll Build. You'll Get Hired.</h2>
        </div>

        {/* Subsection 1: Personalized Roadmap */}
        <div className="wyg-subsection">
          <div className="wyg-subsection-header">
            <h3>Your Roadmap Is Built For Your Starting Point</h3>
            <p>Your path is determined by where you are today — not a generic one-size-fits-all syllabus.</p>
          </div>
          <div className="wyg-roadmap-cards">
            <div className="wyg-roadmap-card">
              <div className="wyg-card-icon">🌱</div>
              <div className="wyg-card-persona">Complete Beginner</div>
              <h4 className="wyg-card-title">Start With Foundations — Not Complicated, Just Clear</h4>
              <p className="wyg-card-body">
                You'll learn the concepts. You'll practice with real data. You'll build small projects to prove to yourself you can do this.
                <br /><br />
                <strong>By Month 2</strong>, you'll understand how ML actually works.<br />
                <strong>By Month 3</strong>, you'll be building real projects.<br />
                <strong>By Month 4-6</strong>, you'll be interview-ready.
              </p>
              <div className="wyg-card-meta">
                <div className="wyg-meta-item">⏱️ <span>4-6 months part-time (3-5 hrs/week)</span></div>
                <div className="wyg-meta-item">🎯 <span>Junior AI roles: AI Assistant, Junior ML, Data Analyst + AI</span></div>
              </div>
            </div>

            <div className="wyg-roadmap-card highlight">
              <div className="wyg-card-icon">🚀</div>
              <div className="wyg-card-persona">Tech Professional</div>
              <h4 className="wyg-card-title">Skip What You Know. Jump Straight to the Gaps</h4>
              <p className="wyg-card-body">
                We skip everything you already know. You won't waste time on Python basics or "What is Machine Learning?"
                <br /><br />
                You'll jump straight to: Advanced systems design. Production ML. Real engineering problems.
                <br /><br />
                <strong>By Month 2</strong>, you'll be operating at mid-level.<br />
                <strong>By Month 4</strong>, you'll be interview-ready for senior roles.
              </p>
              <div className="wyg-card-meta">
                <div className="wyg-meta-item">⏱️ <span>3-4 months part-time (5-10 hrs/week)</span></div>
                <div className="wyg-meta-item">🎯 <span>Mid-level roles: ML Engineer, AI Product Manager, AI Strategy</span></div>
              </div>
            </div>

            <div className="wyg-roadmap-card">
              <div className="wyg-card-icon">⚡</div>
              <div className="wyg-card-persona">AI Specialist</div>
              <h4 className="wyg-card-title">Choose Your Specialization. Go Deep.</h4>
              <p className="wyg-card-body">
                LLMs. Computer Vision. Reinforcement Learning. Prompt Engineering. AI Systems Architecture.
                <br /><br />
                Then you go DEEP: Not breadth. Not "Overview of AI." Your chosen field. The cutting-edge. The research.
                <br /><br />
                You'll build a signature project — something meaningful enough to publish or speak about.
              </p>
              <div className="wyg-card-meta">
                <div className="wyg-meta-item">⏱️ <span>3-6 months cohort-based (8-12 hrs/week)</span></div>
                <div className="wyg-meta-item">🎯 <span>Senior roles: Tech Lead, Specialist, Research positions</span></div>
              </div>
            </div>
          </div>
        </div>

        {/* Subsection 2: Build Real Projects */}
        <div className="wyg-subsection">
          <div className="wyg-subsection-header">
            <h3>You'll Build a Portfolio Employers Actually Care About</h3>
            <p>Not certificates. Not toy datasets. Real projects that show you can do the work.</p>
          </div>
          <div className="wyg-projects-grid">
            <div className="wyg-project-card">
              <div className="wyg-project-icon">🔨</div>
              <div className="wyg-project-persona">Complete Beginner</div>
              <h4 className="wyg-project-title">Build 2-3 Projects From Scratch</h4>
              <p className="wyg-project-body">
                Real data. Real problems. Real solutions.<br /><br />
                Not toy projects. Real projects that show you understand the fundamentals. By the time you finish, you'll have a portfolio that proves you can do this work.<br /><br />
                <strong>When you interview, you won't just talk about concepts. You'll show what you built.</strong>
              </p>
            </div>

            <div className="wyg-project-card">
              <div className="wyg-project-icon">⚙️</div>
              <div className="wyg-project-persona">Tech Professional</div>
              <h4 className="wyg-project-title">Build Like You're Already at Your Job</h4>
              <p className="wyg-project-body">
                Production considerations. Real performance requirements. Actual data challenges.<br /><br />
                These aren't textbook problems. They're problems you'll actually face.<br /><br />
                <strong>When you interview, you'll have projects that show you're ready to contribute immediately. No "junior" treatment. No training wheels.</strong>
              </p>
            </div>

            <div className="wyg-project-card">
              <div className="wyg-project-icon">🏆</div>
              <div className="wyg-project-persona">AI Specialist</div>
              <h4 className="wyg-project-title">Build Your Signature Project</h4>
              <p className="wyg-project-body">
                Something you can be proud of. Something substantial.<br /><br />
                Your peers will review it. You'll refine it. This isn't a portfolio piece. This is your calling card in the field.<br /><br />
                <strong>Some of our graduates publish papers from their projects. Some speak at conferences about their work. This is that level of quality.</strong>
              </p>
            </div>
          </div>
        </div>

        {/* Subsection 3: Job Support */}
        <div className="wyg-subsection">
          <div className="wyg-subsection-header">
            <h3>We Help You Land Your Role (It's Not Just Courses)</h3>
            <p>After you finish, we don't disappear. Your success is our success.</p>
          </div>
          <div className="wyg-support-grid">
            <div className="wyg-support-card">
              <div className="wyg-support-persona">🌱 Complete Beginner</div>
              <h4 className="wyg-support-title">You Won't Be Alone in the Job Search</h4>
              <ul className="wyg-support-items">
                <li>We review your portfolio and projects</li>
                <li>Help you build a resume that gets interviews</li>
                <li>Prep you for technical interviews</li>
                <li>Access to our job board (companies actively hire from us)</li>
                <li>Negotiation coaching for your first offer</li>
              </ul>
              <p className="wyg-support-closing">"We'll be there every step of the way."</p>
            </div>

            <div className="wyg-support-card">
              <div className="wyg-support-persona">🚀 Tech Professional</div>
              <h4 className="wyg-support-title">Targeted Matching — Not Just "Apply Everywhere"</h4>
              <ul className="wyg-support-items">
                <li>We match you with specific roles for your background</li>
                <li>Introduce you to hiring managers in our network</li>
                <li>Help position your background uniquely</li>
                <li>Negotiation coaching (your salary jump matters)</li>
                <li>Ongoing support until you land</li>
              </ul>
              <p className="wyg-support-closing">"Many of our students get multiple offers. We help you choose the best one."</p>
            </div>

            <div className="wyg-support-card">
              <div className="wyg-support-persona">⚡ AI Specialist</div>
              <h4 className="wyg-support-title">Build Your Career Trajectory, Not Just Your Next Role</h4>
              <ul className="wyg-support-items">
                <li>Access to our community of hiring decision-makers</li>
                <li>Introductions to companies doing cutting-edge work</li>
                <li>Thought leadership support (publishing, speaking, conferences)</li>
                <li>Executive coaching for director/leadership transition</li>
                <li>Network access forever (graduate community is your advantage)</li>
              </ul>
              <p className="wyg-support-closing">"Your next role isn't your last. We help you build your trajectory."</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
