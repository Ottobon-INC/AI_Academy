import React from 'react';
import './StepEmotionalValidation.css';

export const StepEmotionalValidation: React.FC = () => {
  return (
    <section className="validation-section">
      <div className="validation-container">
        <div className="validation-header">
          <span className="validation-label">You're Understood Here</span>
          <h2>You're Not Alone in This</h2>
          <p>
            Whatever your background, wherever you're starting — there's a path that was built for someone exactly like you.
          </p>
        </div>

        <div className="validation-cards">

          {/* Persona 1 */}
          <div className="v-card">
            <span className="v-card-persona">🌱 Complete Beginner</span>
            <h3>You're Not Starting From Nothing</h3>
            <div className="v-card-body">
              <p>
                Right now, you might think everyone else in tech knows things you don't.<br />
                <span className="highlight">That's not true.</span>
              </p>
              <p>
                80% of our students had NO coding experience when they started. They weren't geniuses. They weren't self-taught prodigies. They just decided that learning AI was worth their time.
              </p>
              <p>And they did it.</p>
              <div className="v-card-stat">
                <div className="v-card-stat-number">80%</div>
                <div className="v-card-stat-text">of students started with zero coding experience</div>
              </div>
            </div>
            <p className="v-card-closing">"You just need someone to show you the path. That's us."</p>
          </div>

          {/* Persona 2 */}
          <div className="v-card">
            <span className="v-card-persona">🚀 Tech Professional</span>
            <h3>Your Experience Matters More Than You Think</h3>
            <div className="v-card-body">
              <p>
                You've been in tech for a few years. You know some AI concepts. But you feel like you're not "deep enough" yet.
              </p>
              <p>
                <span className="highlight">That feeling? It's actually YOUR ADVANTAGE.</span>
              </p>
              <p>
                You know how teams work. You know business problems. You know what "production" actually means. Most AI beginners don't.
              </p>
              <p>What you're missing isn't expertise. It's <span className="highlight">direction.</span></p>
            </div>
            <p className="v-card-closing">"How to go from 'I know some AI' to 'I can lead AI initiatives.' That's exactly what we built this for."</p>
          </div>

          {/* Persona 3 */}
          <div className="v-card">
            <span className="v-card-persona">⚡ AI Specialist</span>
            <h3>You're Ready For Something Different</h3>
            <div className="v-card-body">
              <p>You've been doing AI for a while. You know a lot. <span className="highlight">Most courses would bore you.</span></p>
              <p>
                This isn't about watching lectures about "What is Machine Learning." This is about going <span className="highlight">DEEP</span>.
              </p>
              <p>
                Choosing your specialty. Building something that matters. Getting recognized for what you know. Maybe even leading others.
              </p>
              <p>If you've ever thought "I know more than most people realize" —</p>
            </div>
            <p className="v-card-closing">"This is for you."</p>
          </div>

        </div>
      </div>
    </section>
  );
};
