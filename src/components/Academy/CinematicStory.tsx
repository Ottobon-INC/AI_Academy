import React, { useState, useEffect, useRef } from 'react';
import './CinematicStory.css';

const features = [
  {
    id: 'path',
    title: 'Instantly discover your highest-paying path.',
    description: "Stop guessing which role fits. See exactly which AI career pays the most for your specific background and existing skills."
  },
  {
    id: 'links',
    title: 'Find your exact missing links.',
    description: "Don't learn everything. Find out exactly which 2-3 specific skills you are missing to land a top-tier role."
  },
  {
    id: 'time',
    title: 'Never waste time learning what you already know.',
    description: "Skip the basics. Start directly at advanced AI application."
  }
];

export const CinematicStory: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeFeature, setActiveFeature] = useState(features[0].id);
  const [autoPlay, setAutoPlay] = useState(true);

  // Intersection observer to fade elements in as they scroll into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = sectionRef.current?.querySelectorAll('.fade-up');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Auto-rotate features if user hasn't interacted
  useEffect(() => {
    if (!autoPlay) return;
    
    const interval = setInterval(() => {
      setActiveFeature(current => {
        const currentIndex = features.findIndex(f => f.id === current);
        const nextIndex = (currentIndex + 1) % features.length;
        return features[nextIndex].id;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [autoPlay]);

  return (
    <section className="story-section-framework" ref={sectionRef}>
      
      <div className="framework-header fade-up">
        <h2>How you get there.</h2>
        <p>The AI Academy Discovery Framework doesn't just evaluate you.<br/>It gives you an unfair advantage.</p>
      </div>

      <div className="interactive-stage-container fade-up">
        
        {/* Left Column: Interactive Tabs */}
        <div className="stage-navigation">
          {features.map((feature) => (
            <div 
              key={feature.id}
              className={`stage-tab ${activeFeature === feature.id ? 'active' : ''}`}
              onMouseEnter={() => {
                setActiveFeature(feature.id);
                setAutoPlay(false);
              }}
              onClick={() => {
                setActiveFeature(feature.id);
                setAutoPlay(false);
              }}
            >
              <div className="tab-indicator"></div>
              <div className="tab-content">
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Column: The Dynamic Stage */}
        <div className="stage-visual-area">
          <div className="stage-viewport">
            
            {/* Stage 1: The Path Scanner */}
            <div className={`stage-scene ${activeFeature === 'path' ? 'active' : ''}`}>
              <div className="scene-scanner">
                <div className="profile-card">
                  <div className="profile-header">
                    <span className="profile-tag">Current</span>
                  </div>
                  <div className="profile-title">Frontend Engineer</div>
                  <div className="profile-detail">React, TypeScript, Node</div>
                </div>

                <div className="translation-engine">
                  <div className="engine-line animated"></div>
                  <div className="engine-node pulse">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>
                  </div>
                  <div className="engine-line animated"></div>
                </div>

                <div className="profile-card target-profile highlight">
                  <div className="profile-header">
                    <span className="profile-tag accent">Top Match</span>
                    <span className="salary-bump">+$45k/yr</span>
                  </div>
                  <div className="profile-title">AI App Developer</div>
                  <div className="profile-detail">RAG, LangChain, Vercel AI</div>
                </div>
              </div>
            </div>

            {/* Stage 2: Missing Links */}
            <div className={`stage-scene ${activeFeature === 'links' ? 'active' : ''}`}>
              <div className="scene-analyzer">
                <div className="radar-grid">
                  <div className="analysis-node verified">
                    <div className="node-icon">✓</div>
                    <div className="node-label">React / TS</div>
                  </div>
                  <div className="connection-line solid"></div>
                  <div className="analysis-node verified">
                    <div className="node-icon">✓</div>
                    <div className="node-label">API Integration</div>
                  </div>
                  <div className="connection-line dashed"></div>
                  <div className="analysis-node missing pulse-warning">
                    <div className="node-icon">!</div>
                    <div className="node-label">Vector DBs</div>
                  </div>
                  <div className="connection-line dashed"></div>
                  <div className="analysis-node missing pulse-warning">
                    <div className="node-icon">!</div>
                    <div className="node-label">RAG Arch</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stage 3: Syllabus */}
            <div className={`stage-scene ${activeFeature === 'time' ? 'active' : ''}`}>
              <div className="scene-syllabus">
                <div className="timeline-track">
                  
                  <div className="timeline-item bypassed">
                    <div className="item-marker">✓</div>
                    <div className="item-content">
                      <span className="item-week">Week 1-2</span>
                      <span className="item-title">Python & Data Basics</span>
                      <span className="item-status">Skipped: Already Mastered</span>
                    </div>
                  </div>

                  <div className="timeline-item active glow">
                    <div className="item-marker pulse-blue"></div>
                    <div className="item-content">
                      <span className="item-week highlight">Week 1 (Your Start)</span>
                      <span className="item-title">Advanced Prompting & Agents</span>
                      <span className="item-status highlight">Custom Starting Point</span>
                    </div>
                  </div>

                  <div className="timeline-item future">
                    <div className="item-marker outline"></div>
                    <div className="item-content">
                      <span className="item-week">Week 2</span>
                      <span className="item-title">Vector Databases & RAG Architecture</span>
                    </div>
                  </div>

                  <div className="timeline-item future">
                    <div className="item-marker outline"></div>
                    <div className="item-content">
                      <span className="item-week">Week 3</span>
                      <span className="item-title">Fine-Tuning & Enterprise Deployment</span>
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
