import React, { useState } from 'react';
import './StepFAQ.css';

type PersonaKey = 'p1' | 'p2' | 'p3';

interface FaqItem {
  question: string;
  answers: Record<PersonaKey, string>;
}

const faqs: FaqItem[] = [
  {
    question: "Do I need a CS degree or tech background?",
    answers: {
      p1: "NO.\n\n30% of our students came from completely non-tech backgrounds. 60% came from adjacent fields (product, data, business). Only 10% had formal CS training.\n\nThe degree doesn't matter. The determination does. Many of our highest-performing students have zero tech background — they just followed the structure and put in the work. No talent required. Just time + focus.",
      p2: "Your background is actually valuable. You have context most new engineers don't. The gap isn't big. We close it. Your domain expertise is your advantage — most beginners don't have that.",
      p3: "Obviously not. You wouldn't be considering this if you weren't already deeply technical. This question doesn't apply to you."
    }
  },
  {
    question: "How long will this take?",
    answers: {
      p1: "4-6 months part-time (3-5 hours per week), or 2-3 months full-time (20+ hours per week).\n\nMost people do part-time while working their current job. Week 1: 'Oh, I can actually understand this.' Month 1: First real project done. Month 4-6: Job applications and offers.",
      p2: "3-4 months part-time (5-10 hours per week), or 6-8 weeks full-time.\n\nIt's faster because we skip basics. By Month 2 you'll be operating at mid-level. By Month 3-4 you'll be interview-ready for senior roles.",
      p3: "3-6 months depending on your specialization. Cohort-based, so paced with a group (not self-paced). 8-12 hours per week commitment.\n\nMonth 1-2: Deep specialization feels right. Month 2-3: Signature project taking shape. Month 4+: Publishing, speaking, opportunities."
    }
  },
  {
    question: "Can I do this while working my current job?",
    answers: {
      p1: "YES. Most of our students do.\n\nYou need to be serious about 3-5 hours weekly. It's not 'watch videos on the weekend.' It's actual learning time. Most people find morning time before work or evenings work best.",
      p2: "Yes. The pace is designed for working professionals. You're not watching 20 hours of lectures — you're doing targeted learning + projects. Busy people get through faster than full-time students sometimes.",
      p3: "Yes, but cohort schedule matters (cohorts meet at set times). You need to commit to that schedule. Most cohort members are working full-time. It's designed for that."
    }
  },
  {
    question: "What's the job placement rate?",
    answers: {
      p1: "85% of our graduates land AI-related roles within 6 months.\n\nWhere do people land? Junior roles. AI Assistant roles. Junior ML positions. Average starting salary: $65K-$85K. Most land within 4-6 months.\n\nIf someone isn't landing, we dig into why and help fix it.",
      p2: "90% job placement within 4 months for our bridge-builder track.\n\nWhere do people land? Mid-level ML Engineer, AI Product roles, Strategy roles. Average salary increase: +30-40% from previous role. Many get multiple offers and choose the best one.",
      p3: "Our specialists don't fail at placement — because expectations are different. You're not looking for 'any job.' You're looking for the right role.\n\nWhere do they land? Senior Engineer, Tech Lead, Specialist roles at companies doing cutting-edge AI. 70% moved to senior/leadership roles. 50+ published papers. 40+ spoke at major conferences."
    }
  },
  {
    question: "What if I don't land a job?",
    answers: {
      p1: "We have a clear process:\n\n1. First, we figure out what's blocking you (portfolio? interviews? application strategy?)\n2. We fix that specific thing\n3. We work with you until you land something\n\nWe don't just disappear after you graduate. AND: We have a 30-day money-back guarantee.",
      p2: "Our students land jobs faster than the average bootcamp. Why? Because you're already experienced. Companies want experienced people trying to transition.\n\nBut again: You have to do the work. We provide the path. You walk it.",
      p3: "You're more selective. That takes longer. But we provide network access forever — graduate community, thought leadership opportunities, and executive coaching for director/leadership transitions."
    }
  },
  {
    question: "What's the ROI? Is this worth the investment?",
    answers: {
      p1: "From $0 in AI to $70K+ AI salary — that's the financial gain. Timeline to break even: ~2 years of salary.\n\nBut financial ROI isn't the only thing. Career options. Confidence. Never feeling behind again. That's worth something too.",
      p2: "Salary increase: +30-40% from current role. Timeline to break even: 12-18 months.\n\nPlus: Faster career progression. Better job security. More opportunities. One good job pays for years of learning.",
      p3: "The career trajectory to leadership/specialization is the real ROI. Speaking, publishing, recognition.\n\nFinancial benefit is real, but the career acceleration matters more at your level."
    }
  },
  {
    question: "Who actually teaches this? Are they credible?",
    answers: {
      p1: "Your instructors currently work at tech/AI companies, deal with real production problems, and know what actually gets you hired. They're not full-time instructors — they're practitioners who teach. Content is updated quarterly.",
      p2: "All instructors are active ML Engineers, AI Product Managers, or AI Research Leads at real companies. They bring real industry problems. When they teach, they're teaching what they did this week — not what they learned 5 years ago.",
      p3: "They're active at the cutting edge — leading LLM research, building production AI systems, writing papers. This is by design: we want current knowledge, not archived lectures. They update content quarterly and bring real problems."
    }
  },
  {
    question: "What's the community like? Will I fit in?",
    answers: {
      p1: "Mostly people like you — career switchers, non-tech backgrounds, determined to learn. You won't feel stupid. Everyone's learning. Peer support matters. People help each other.",
      p2: "Mix of people from tech/adjacent fields trying to level up. Shared understanding of business context. People become friends and often refer each other for jobs.",
      p3: "Serious practitioners from various backgrounds. High-level conversations. Peer learning is valuable. Many graduates stay connected and create opportunities together. This community is where the serious people are."
    }
  }
];

const personaLabels: Record<PersonaKey, string> = {
  p1: '🌱 Complete Beginner',
  p2: '🚀 Tech Professional',
  p3: '⚡ AI Specialist',
};

export const StepFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activePersona, setActivePersona] = useState<PersonaKey>('p1');

  return (
    <section className="faq-section">
      <div className="faq-container">
        <div className="faq-header">
          <span className="faq-label">The Real Questions</span>
          <h2>Got Questions? We Have Honest Answers.</h2>
          <p>Select your stage to see answers tailored to exactly where you are.</p>
          <div className="faq-persona-tabs">
            {(Object.keys(personaLabels) as PersonaKey[]).map((key) => (
              <button
                key={key}
                className={`faq-persona-tab ${activePersona === key ? 'active' : ''}`}
                onClick={() => setActivePersona(key)}
              >
                {personaLabels[key]}
              </button>
            ))}
          </div>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${openIndex === index ? 'active open' : ''}`}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <div className="faq-question">
                <h3>{faq.question}</h3>
                <span className="faq-icon">{openIndex === index ? '−' : '+'}</span>
              </div>
              <div className="faq-answer">
                <p style={{ whiteSpace: 'pre-line' }}>{faq.answers[activePersona]}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
