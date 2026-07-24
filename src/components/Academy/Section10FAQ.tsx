import React, { useState } from 'react';
import './Section10FAQ.css';

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "Do I need a CS degree or tech background?",
    answer: "No.\n\n30% of our students have zero tech background. They're now working in AI roles.\n\nThe degree doesn't matter. The determination does."
  },
  {
    question: "How long does this actually take?",
    answer: "Depends on your starting point and available time.\n\nStarting from basics: 4-6 months part-time OR 2-3 months full-time\nAccelerating from tech knowledge: 3-4 months part-time OR 6-8 weeks full-time\nSpecializing from AI knowledge: 3-6 months (cohort-based)\n\nMost students keep their current job while learning."
  },
  {
    question: "Will I actually get a job?",
    answer: "85% of our graduates land AI roles within 6 months.\n\nWe help with:\n• Portfolio review\n• Resume strategy\n• Interview prep\n• Network connections\n• Ongoing support\n\nIf you do the work, we do our part.\n\nAnd if it's not working? 30-day money-back guarantee."
  },
  {
    question: "Can I do this while working full-time?",
    answer: "Yes. Most of our students do.\n\nYou don't need to quit your job. Part-time tracks are designed for busy professionals.\n\nIf you're serious about 3-5 hours per week, it works."
  },
  {
    question: "What if I don't like it?",
    answer: "You can change tracks (within first month).\n\nFinish and not for you? 30-day money-back guarantee. No questions asked."
  },
  {
    question: "Why should I trust this over other courses?",
    answer: "1. Personalized, not one-size-fits-all\n2. Instructors are active practitioners\n3. Real outcomes + specific timelines\n4. Community matters\n5. Job support included\n\nNot everyone needs all of this. But if you're serious, this covers everything."
  }
];

export const Section10FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="sec-faq-section">
      <div className="sec-faq-container">

        <h2 className="sec-faq-headline">Questions We Hear All The Time</h2>

        <div className="sec-faq-list">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`sec-faq-item ${openIndex === index ? 'open' : ''}`}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <div className="sec-faq-question">
                <h3>{faq.question}</h3>
                <span className="sec-faq-chevron">▾</span>
              </div>
              <div className="sec-faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
