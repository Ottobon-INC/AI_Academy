import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import './V2Section5What.css';

interface FlowPersona {
  id: string;
  role: string;
  avatarIcon: string;
  skills: string[];
  targetRole: string;
  savedTime: string;
  milestones: {
    step: string;
    title: string;
    icon: string;
  }[];
}

const personas: FlowPersona[] = [
  {
    id: 'non-tech',
    role: 'Marketing & Biz',
    avatarIcon: '🎯',
    skills: ['Strategy', 'Campaigns', 'Analytics'],
    targetRole: 'AI Product Manager',
    savedTime: 'Saves 4 Weeks of Basics',
    milestones: [
      { step: 'Step 1', title: 'AI Automation & Tooling', icon: '⚡' },
      { step: 'Step 2', title: 'Agent & RAG Systems', icon: '🧠' },
      { step: 'Step 3', title: 'AI SaaS Product Launch', icon: '🚀' },
    ]
  },
  {
    id: 'developer',
    role: 'Software Developer',
    avatarIcon: '💻',
    skills: ['Python', 'APIs', 'Databases'],
    targetRole: 'AI Systems Engineer',
    savedTime: 'Saves 6 Weeks (Skips Coding Intro)',
    milestones: [
      { step: 'Step 1', title: 'Autonomous Multi-Agent Loops', icon: '🤖' },
      { step: 'Step 2', title: 'Vector Stores & Custom Tuning', icon: '🔍' },
      { step: 'Step 3', title: 'High-Throughput Production MLOps', icon: '⚙️' },
    ]
  },
  {
    id: 'analyst',
    role: 'Data Analyst',
    avatarIcon: '📊',
    skills: ['SQL', 'Data Wrangling', 'Stats'],
    targetRole: 'Machine Learning Specialist',
    savedTime: 'Saves 5 Weeks (Skips Data Basics)',
    milestones: [
      { step: 'Step 1', title: 'Model Fine-Tuning & Quantization', icon: '🧬' },
      { step: 'Step 2', title: 'Enterprise Knowledge RAG', icon: '📂' },
      { step: 'Step 3', title: 'Predictive Endpoint Deployment', icon: '🌐' },
    ]
  }
];

const V2Section5What: React.FC = () => {
  const [activeId, setActiveId] = useState<string>('non-tech');
  const [isProcessing, setIsProcessing] = useState<boolean>(false);

  const activePersona = personas.find(p => p.id === activeId) || personas[0];

  const handleSwitch = (id: string) => {
    if (id === activeId) return;
    setIsProcessing(true);
    setActiveId(id);
    setTimeout(() => setIsProcessing(false), 500);
  };

  return (
    <section className="v2-what-section" id="ai-engine">
      <div className="v2-what-container">
        
        {/* HEADER */}
        <div className="v2-what-header">
          <span className="v2-what-eyebrow">Personalized AI Engine</span>
          <h2 className="v2-what-headline">
            Your Background → AI Engine → Your Custom Roadmap
          </h2>
          <p className="v2-what-subtext">
            We analyze what you already know, skip redundant basics, and map your direct path to AI.
          </p>
        </div>

        {/* ROLE TABS */}
        <div className="v2-flow-tabs">
          <span className="v2-tab-label">Select Starting Point:</span>
          <div className="v2-tab-list">
            {personas.map(p => (
              <button
                key={p.id}
                className={`v2-tab-btn ${p.id === activeId ? 'active' : ''}`}
                onClick={() => handleSwitch(p.id)}
                type="button"
              >
                <span>{p.avatarIcon}</span>
                <span>{p.role}</span>
              </button>
            ))}
          </div>
        </div>

        {/* ULTRA-CLEAN VISUAL PIPELINE FLOW */}
        <div className="v2-flow-pipeline">
          
          {/* NODE 1: YOUR STARTING POINT */}
          <div className="v2-flow-node v2-node-input">
            <div className="v2-node-header">
              <span className="v2-node-tag">1. Your Profile</span>
              <span className="v2-node-icon">{activePersona.avatarIcon}</span>
            </div>
            
            <h3 className="v2-node-title">{activePersona.role}</h3>
            
            <div className="v2-skills-mini">
              {activePersona.skills.map((skill, i) => (
                <span key={i} className="v2-skill-pill">✓ {skill}</span>
              ))}
            </div>

            <div className="v2-target-mini">
              <span>Goal:</span> <strong>{activePersona.targetRole}</strong>
            </div>
          </div>

          {/* CONNECTOR & AI ENGINE NODE */}
          <div className="v2-flow-center">
            <div className="v2-connector-line">
              <div className={`v2-connector-pulse ${isProcessing ? 'animating' : ''}`} />
            </div>

            <div className="v2-engine-badge">
              <div className="v2-engine-icon-wrap">
                <span className="v2-engine-spark">✦</span>
              </div>
              <span className="v2-engine-text">AI Diagnostic Engine</span>
              <span className="v2-time-saved">{activePersona.savedTime}</span>
            </div>

            <div className="v2-connector-line">
              <div className={`v2-connector-pulse ${isProcessing ? 'animating' : ''}`} />
            </div>
          </div>

          {/* NODE 3: YOUR CUSTOM ROADMAP */}
          <div className="v2-flow-node v2-node-output">
            <div className="v2-node-header">
              <span className="v2-node-tag v2-tag-gold">2. Your Personalized Roadmap</span>
              <span className="v2-node-icon">✨</span>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activePersona.id}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.3 }}
                className="v2-milestones-stack"
              >
                {activePersona.milestones.map((m, idx) => (
                  <div key={idx} className="v2-milestone-row">
                    <span className="v2-m-icon">{m.icon}</span>
                    <div className="v2-m-info">
                      <span className="v2-m-step">{m.step}</span>
                      <span className="v2-m-title">{m.title}</span>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        {/* MINIMAL BOTTOM CTA */}
        <div className="v2-flow-bottom">
          <button 
            className="v2-flow-cta-btn" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Build My Personalized Roadmap →
          </button>
        </div>

      </div>
    </section>
  );
};

export default V2Section5What;
