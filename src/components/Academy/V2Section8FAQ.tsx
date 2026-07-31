import React, { useState } from 'react';
import './V2Section8FAQ.css';

interface FAQItem {
  q: string;
  a: string;
  category?: string;
}

const faqs: FAQItem[] = [
  {
    category: 'Program Overview',
    q: 'What is Ottobon AI Academy and who is this program for?',
    a: 'Ottobon AI Academy is an intensive 12-week program specifically structured to help QA Engineers, Software Testers, and Developers transition into high-paying AI Engineering roles. You will learn to build production-grade AI agents, LLM applications, and RAG systems with 1-on-1 expert mentorship.',
  },
  {
    category: 'Program Overview',
    q: 'What exactly do I get when I enroll in the program?',
    a: 'You get full access to our 12-week AI Engineering curriculum, weekly 1-on-1 live mentorship sessions with a Senior AI Engineer, 5+ production-grade portfolio projects for your GitHub, AI resume overhaul, mock technical interview prep, and direct referrals through our hiring partner network.',
  },
  {
    category: 'Mentorship & Learning',
    q: 'How does the 1-on-1 mentorship work?',
    a: 'Every student is paired with a practicing Senior AI Engineer. You get weekly live 1-on-1 sessions via Microsoft Teams/Google Meet to review your code, debug complex AI architectures, get direct feedback on your portfolio projects, and receive personalized career guidance.',
  },
  {
    category: 'Prerequisites & Eligibility',
    q: 'Do I need prior AI, Machine Learning, or a CS degree to join?',
    a: 'No prior AI/ML experience or advanced math degree is required. If you have a background in QA testing, software automation, or basic programming (Python/JavaScript), our curriculum bridges the gap to Applied AI Engineering — focusing on building, evaluating, and deploying real AI applications.',
  },
  {
    category: 'Time & Schedule',
    q: 'How much time do I need to commit each week?',
    a: 'The program requires approximately 8–12 hours per week. It is built specifically for working professionals, featuring flexible study hours, structured asynchronous modules, and scheduled 1-on-1 live mentoring sessions.',
  },
  {
    category: 'Curriculum & Tech Stack',
    q: 'What tech stack and tools will I master in 12 weeks?',
    a: 'You will master Python, OpenAI API, Anthropic Claude API, LangChain, LlamaIndex, Vector Databases (Pinecone, ChromaDB), Open-Source LLM Fine-Tuning (LLaMA 3, Mistral via Hugging Face/Ollama), FastAPI, Docker, and AI System Evaluation frameworks.',
  },
  {
    category: 'Portfolio & Projects',
    q: 'What real-world projects will I build for my portfolio?',
    a: 'You will build 5+ production-grade projects: an Enterprise RAG Knowledge Base, Autonomous Multi-Agent Workflows, a Fine-Tuned Domain-Specific LLM, an AI Test & Evaluation Suite, and a Full-Stack AI Microservice deployed to cloud.',
  },
  {
    category: 'Career & Support',
    q: 'How does career transition and job search support work?',
    a: 'Starting from week 8, our career team works directly with you to rewrite your resume and LinkedIn for AI roles, train you for AI technical & system design interviews, and connect you with recruiters across tech companies hiring AI talent.',
  },
];

const V2Section8FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setActiveIndex(activeIndex === i ? null : i);
  };

  return (
    <section className="v2-faq-section" id="faq" itemScope itemType="https://schema.org/FAQPage">
      <div className="v2-faq-glow" />

      <div className="v2-faq-container">
        <div className="v2-faq-header">
          <p className="v2-faq-eyebrow">FREQUENTLY ASKED QUESTIONS</p>
          <h2 className="v2-faq-headline">Everything You Need to Know</h2>
          <p className="v2-faq-subtitle">Clear answers about our 12-week program, 1-on-1 mentorship, and AI career transition.</p>
        </div>

        <div className="v2-faq-list">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`v2-faq-item ${activeIndex === i ? 'active' : ''}`}
              itemScope itemProp="mainEntity" itemType="https://schema.org/Question"
            >
              <button className="v2-faq-question" onClick={() => toggle(i)}>
                <span itemProp="name">{faq.q}</span>
                <span className="v2-faq-chevron">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </button>
              <div className="v2-faq-answer-wrapper" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p className="v2-faq-answer" itemProp="text">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default V2Section8FAQ;
