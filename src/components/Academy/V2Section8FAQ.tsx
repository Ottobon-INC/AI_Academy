import React, { useState } from 'react';
import './V2Section8FAQ.css';

const faqs = [
  {
    q: 'Do I need a technical background to join?',
    a: 'Not at all. Our assessment identifies your starting point and builds a personalised path. Non-technical students follow an AI strategy and no-code tools track. Technical students go straight into agents, fine-tuning, and ML engineering.',
  },
  {
    q: 'How much time do I need each week?',
    a: 'Most students spend 5–10 hours a week and complete their track in 4–6 months. Everything is self-paced so you can go faster or slower depending on your schedule.',
  },
  {
    q: 'Is this just about ChatGPT and prompt engineering?',
    a: 'Absolutely not. While we cover prompting, you will build autonomous AI agents, RAG pipelines, fine-tuned LLMs, and full AI-powered applications using the exact tools companies are hiring for — LangChain, Hugging Face, LlamaIndex, Pinecone, and more.',
  },
  {
    q: 'Will this actually get me a job in AI?',
    a: '85% of our graduates land an AI role within 6 months. We do not just hand you a certificate. You leave with 5+ real portfolio projects, a polished resume, mock interview prep, and direct referrals into our 300+ hiring partner network.',
  },
  {
    q: 'I am already a developer — is this too basic for me?',
    a: 'We have a dedicated advanced track. You will skip fundamentals and dive straight into fine-tuning open-source models (LLaMA, Mistral), building multi-agent systems, optimising for production inference, and architecting enterprise AI systems.',
  },
  {
    q: 'What makes this different from a Udemy or Coursera course?',
    a: 'Generic courses give you videos. We give you a personalised roadmap, hands-on projects, a community, career coaches, and direct access to hiring partners. The difference is whether you watch AI or build it.',
  },
];

const V2Section8FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setActiveIndex(activeIndex === i ? null : i);
  };

  return (
    <section className="v2-faq-section" id="faq">
      <div className="v2-faq-glow" />

      <div className="v2-faq-container">
        <div className="v2-faq-header">
          <p className="v2-faq-eyebrow">FAQ</p>
          <h2 className="v2-faq-headline">Got Questions? We've Got Answers.</h2>
          <p className="v2-faq-subtitle">Everything you need to know before you start.</p>
        </div>

        <div className="v2-faq-list">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`v2-faq-item ${activeIndex === i ? 'active' : ''}`}
            >
              <button className="v2-faq-question" onClick={() => toggle(i)}>
                <span>{faq.q}</span>
                <span className="v2-faq-chevron">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </button>
              <div className="v2-faq-answer-wrapper">
                <p className="v2-faq-answer">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default V2Section8FAQ;
