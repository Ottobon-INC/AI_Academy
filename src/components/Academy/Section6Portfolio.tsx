import React from 'react';
import './Section6Portfolio.css';

export const Section6Portfolio: React.FC = () => {
  return (
    <section className="sec-port-section">
      <div className="sec-port-container">

        {/* Left Column */}
        <div className="sec-port-left">
          <h2 className="sec-port-headline">Not Certificates. Projects.</h2>

          <p className="sec-port-sub">Certificates look good on a shelf. Projects get you hired.</p>

          <p className="sec-port-body">
            You'll build 2-3 real projects. Real complexity. Publishable quality.
            When you interview, you show what you built. That's what gets you hired.
          </p>

          <div className="sec-port-examples-header">Example Projects You'll Build:</div>

          <ul className="sec-port-list">
            <li>Customer Churn Prediction</li>
            <li>Recommendation Engines</li>
            <li>Sentiment Analysis at Scale</li>
            <li>LLM Fine-Tuning Pipelines</li>
            <li>Computer Vision Applications</li>
            <li>Time Series Forecasting</li>
          </ul>
        </div>

        {/* Right Column: Code/Project Visual */}
        <div className="sec-port-visual">
          <div className="sec-port-code-header">
            <div className="sec-port-dots">
              <div className="sec-port-dot red" />
              <div className="sec-port-dot yellow" />
              <div className="sec-port-dot green" />
            </div>
            <span className="sec-port-code-title">production_rag_pipeline.py</span>
          </div>
          <div className="sec-port-code-body">
            <span className="cm"># Production LLM RAG & Fine-Tuning System</span><br />
            <span className="kw">from</span> ai_academy.models <span className="kw">import</span> ProductionPipeline<br /><br />
            pipeline = <span className="fn">ProductionPipeline</span>(<br />
            &nbsp;&nbsp;model=<span className="str">"llama-3-specialized"</span>,<br />
            &nbsp;&nbsp;vector_db=<span className="str">"qdrant_cluster"</span>,<br />
            &nbsp;&nbsp;eval_metric=<span className="str">"latency_and_accuracy"</span><br />
            )<br /><br />
            <span className="cm"># Output: 99.4% accuracy, 45ms response time</span><br />
            metrics = pipeline.<span className="fn">deploy_and_evaluate</span>()<br />
            <span className="fn">print</span>(f<span className="str">"Status: Live Production Ready ✓"</span>)
          </div>
        </div>

      </div>
    </section>
  );
};
