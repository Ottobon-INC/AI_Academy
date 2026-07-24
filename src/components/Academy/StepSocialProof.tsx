import React from 'react';
import './StepSocialProof.css';

export const StepSocialProof: React.FC = () => {
  return (
    <section className="social-proof-section">
      <div className="sp-container">
        <div className="sp-header">
          <span className="sp-label">Real People, Real Results</span>
          <h2>This Isn't Theory. Real People Did This.</h2>
        </div>

        <div className="sp-cases">

          {/* Case Study 1: Sarah - Persona 1 (Complete Beginner) */}
          <div className="sp-case">
            <div className="sp-case-accent" />
            <div className="sp-person">
              <span className="sp-persona-tag">🌱 Complete Beginner</span>
              <p className="sp-person-name">Sarah</p>
              <div className="sp-journey">
                <span className="sp-role-from">📌 Marketing Manager</span>
                <span className="sp-role-arrow">↓</span>
                <span className="sp-role-to">⚡ AI Marketing Specialist</span>
              </div>
              <div className="sp-stats">
                <div className="sp-stat">
                  <span className="sp-stat-number">+40%</span>
                  <span className="sp-stat-label">salary increase</span>
                </div>
                <div className="sp-stat">
                  <span className="sp-stat-number">4 mo</span>
                  <span className="sp-stat-label">to land the role</span>
                </div>
              </div>
            </div>
            <div className="sp-story">
              <div className="sp-quote">
                <p>"I thought AI was for people with PhDs. Turns out, it's for people who want to learn. I went from being terrified of code to building actual AI projects. The structure made all the difference."</p>
              </div>
              <div className="sp-narrative">
                <p>I was that person who changed the song when coding came up in conversations. AI felt like it was for "other people."</p>
                <p>But I was tired of my marketing role. Every day I'd see AI tools doing things we used to do manually. I wanted to understand it. Better yet, <span className="sp-highlight">I wanted to BUILD it.</span></p>
                <p>I tried online tutorials. Too scattered. YouTube videos. Too random. Nothing stuck because I didn't have a map.</p>
                <p>The first month felt hard. Not because it was complicated, but because I was learning a new language. But by Month 2, things clicked. I went from "I don't understand this" to "Oh wait, I can BUILD this?"</p>
                <p><span className="sp-highlight">Month 4, I landed a role as an AI Marketing Specialist at a tech company.</span> Not because I'm a genius coder. But because I showed up, followed the structure, and built projects that proved I could do this.</p>
              </div>
              <div className="sp-outcome">
                <span className="sp-outcome-icon">✨</span>
                <p><strong>The real win?</strong> No longer feeling behind. My salary jumped 40%. But honestly? The best part is knowing I can do this work.</p>
              </div>
            </div>
          </div>

          {/* Case Study 2: Raj - Persona 2 (Bridge Builder) */}
          <div className="sp-case">
            <div className="sp-case-accent" />
            <div className="sp-person">
              <span className="sp-persona-tag">🚀 Tech Professional</span>
              <p className="sp-person-name">Raj</p>
              <div className="sp-journey">
                <span className="sp-role-from">📌 Data Analyst (5 yrs)</span>
                <span className="sp-role-arrow">↓</span>
                <span className="sp-role-to">⚡ ML Engineer</span>
              </div>
              <div className="sp-stats">
                <div className="sp-stat">
                  <span className="sp-stat-number">+35%</span>
                  <span className="sp-stat-label">salary from previous role</span>
                </div>
                <div className="sp-stat">
                  <span className="sp-stat-number">4 mo</span>
                  <span className="sp-stat-label">targeted acceleration</span>
                </div>
              </div>
            </div>
            <div className="sp-story">
              <div className="sp-quote">
                <p>"I knew I was capable of more. My background in analytics was valuable, but I felt stuck. The academy showed me how to leverage what I already knew and fill the gaps. I didn't waste time on basics. I got straight to building."</p>
              </div>
              <div className="sp-narrative">
                <p>I had 5 years as a data analyst. I knew Python, SQL, statistics. But I'd see ML Engineers doing things I couldn't do, making more money.</p>
                <p>The gap wasn't huge — it wasn't like I was starting from zero. <span className="sp-highlight">But it was enough that hiring managers wouldn't take me seriously for ML roles.</span></p>
                <p>I tried a few online courses. But they started with "What is Machine Learning?" That felt insulting. I didn't need to relearn basics. I needed to leap.</p>
                <p>The academy figured out exactly what I was missing: ML systems design, how models go from laptop to production, handling real data problems — not toy datasets.</p>
                <p><span className="sp-highlight">I spent 4 months on targeted learning. Built 2 real projects. That was enough.</span></p>
              </div>
              <div className="sp-outcome">
                <span className="sp-outcome-icon">🎯</span>
                <p><strong>What shocked me?</strong> The respect. Hiring managers saw my projects and took me seriously. If I'd done a beginner course, I'd have wasted 6 months.</p>
              </div>
            </div>
          </div>

          {/* Case Study 3: Maria - Persona 3 (Specialist) */}
          <div className="sp-case">
            <div className="sp-case-accent" />
            <div className="sp-person">
              <span className="sp-persona-tag">⚡ AI Specialist</span>
              <p className="sp-person-name">Maria</p>
              <div className="sp-journey">
                <span className="sp-role-from">📌 ML Engineer (3 yrs)</span>
                <span className="sp-role-arrow">↓</span>
                <span className="sp-role-to">⚡ AI Tech Lead, LLM Expert</span>
              </div>
              <div className="sp-stats">
                <div className="sp-stat">
                  <span className="sp-stat-number">1</span>
                  <span className="sp-stat-label">published LLM paper</span>
                </div>
                <div className="sp-stat">
                  <span className="sp-stat-number">3+</span>
                  <span className="sp-stat-label">conference speaking invitations</span>
                </div>
              </div>
            </div>
            <div className="sp-story">
              <div className="sp-quote">
                <p>"Most 'expert' courses are just advanced beginner content. This was different. It pushed me to actually specialize, to build something meaningful. I went from 'knowing a lot' to being recognized in the field."</p>
              </div>
              <div className="sp-narrative">
                <p>I was 3 years into ML engineering. I could code. I could train models. But I felt like I was just... doing the same projects over and over.</p>
                <p>I looked at engineers I respected — people getting speaking invitations, writing papers, leading initiatives. <span className="sp-highlight">What did they have that I didn't? It wasn't more years of experience. It was specialization.</span></p>
                <p>I tried going deep alone. Took random courses. Read papers. Watched conference talks. But it felt scattered.</p>
                <p>The academy's specialization track for LLMs was exactly what I needed: not beginner content, deep dives into specific areas, but structured — not just "here are 100 resources, figure it out."</p>
                <p><span className="sp-highlight">6 months later: I published a paper on LLM optimizations. Spoke at a conference. Got recruited for a Tech Lead role at an AI company.</span></p>
              </div>
              <div className="sp-outcome">
                <span className="sp-outcome-icon">🏆</span>
                <p><strong>The real win?</strong> I'm now known for something. When people talk about LLMs at my company, they ask me. That's a different level.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
