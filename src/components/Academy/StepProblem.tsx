import React, { useEffect, useRef } from 'react';
import './StepProblem.css';

export const StepProblem: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.5 } // Trigger when the item is halfway visible
    );

    const steps = document.querySelectorAll('.story-step, .story-final-statement, .story-transition');
    steps.forEach((step) => observer.observe(step));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="story-section" ref={containerRef}>
      
      {/* 1. The Opening Hook */}
      <div className="story-hook">
        <h2 className="story-headline">You're closer than you think.<br/>Whatever your background.</h2>
        <p className="story-subtext">
          The fastest path to an AI career isn't the longest one. It's the one built specifically for where you're starting.
        </p>
      </div>

      {/* 2. The 3-Step Journey */}
      <div className="story-timeline">
        <div className="timeline-line"></div>

        <div className="story-step">
          <div className="step-node"></div>
          <div className="step-content">
            <h3>You already have experience.</h3>
            <p>
              Not a resume. Not a job title. Years of solving problems. 
              Making decisions. Learning. Growing.
            </p>
          </div>
        </div>

        <div className="story-step">
          <div className="step-node"></div>
          <div className="step-content">
            <h3>AI Academy understands it.</h3>
            <p>
              It looks beyond your job title. It identifies your strengths, 
              transferable skills, interests, and potential.
            </p>
          </div>
        </div>

        <div className="story-step">
          <div className="step-node"></div>
          <div className="step-content">
            <h3>It reveals where your experience creates the greatest impact with AI.</h3>
            <p>
              Instead of guessing which AI career fits you, you receive 
              recommendations built around your unique background.
            </p>
          </div>
        </div>
      </div>

      {/* 3. The Climax & Handoff */}
      <div className="story-final-statement">
        <h2>
          Because the best AI path isn't the most popular one.<br/>
          It's the one that's right for you.
        </h2>
      </div>

      <div className="story-transition">
        <p>So how does AI Academy understand you?</p>
        <div className="transition-arrow">↓</div>
      </div>

    </section>
  );
};
