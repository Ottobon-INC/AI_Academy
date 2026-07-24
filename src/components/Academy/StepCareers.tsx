import React from 'react';
import './StepCareers.css';

export const StepCareers: React.FC = () => {
  const domains = [
    {
      title: "Marketing & Sales",
      icon: "📈",
      description: "Multiply your output by automating outreach, building predictive lead models, and personalizing campaigns at an unprecedented scale."
    },
    {
      title: "Product & Design",
      icon: "🎨",
      description: "Accelerate your workflow with rapid AI prototyping, intelligent feature generation, and automated user research synthesis."
    },
    {
      title: "Operations & Finance",
      icon: "⚙️",
      description: "Drastically reduce overhead through workflow automation, intelligent risk modeling, and AI-driven data extraction."
    },
    {
      title: "Engineering & IT",
      icon: "💻",
      description: "Go beyond basic coding. Learn to integrate LLM APIs, leverage AI copilots, and architect scalable intelligent systems."
    }
  ];

  return (
    <section className="careers-section">
      <div className="careers-container">
        <div className="careers-header">
          <h2>AI Across Every Domain</h2>
          <p>You don't need to change your career to leverage AI. You just need to upgrade your existing domain expertise.</p>
        </div>
        
        <div className="roles-grid">
          {domains.map((domain, index) => (
            <div className="role-card" key={index}>
              <div className="role-icon">{domain.icon}</div>
              <h3>{domain.title}</h3>
              <p>{domain.description}</p>
              <button className="role-learn-more">Explore this path →</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
