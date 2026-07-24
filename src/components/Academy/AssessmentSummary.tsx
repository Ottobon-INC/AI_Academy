import React, { useRef, useState, useEffect } from 'react';
import type { FinalAssessment } from '../../types/academy';
import { 
  Link2, User, Target, BarChart2, CheckCircle, 
  Route, Briefcase, Zap, Info 
} from 'lucide-react';
import html2canvas from 'html2canvas';
import './AssessmentSummary.css';

const LinkedinIcon = ({ size = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const TwitterIcon = ({ size = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
  </svg>
);



interface Props {
  data: FinalAssessment;
}

export const AssessmentSummary: React.FC<Props> = ({ data }) => {
  const documentRef = useRef<HTMLDivElement>(null);
  const [isDownloadingPdf, setIsDownloadingPdf] = useState(false);
  
  // Animate the radial score
  const [scoreDisplay, setScoreDisplay] = useState(0);

  useEffect(() => {
    const target = data?.readinessScore?.overall || 0;
    let current = 0;
    const interval = setInterval(() => {
      current += 2;
      if (current >= target) {
        setScoreDisplay(target);
        clearInterval(interval);
      } else {
        setScoreDisplay(current);
      }
    }, 20);
    return () => clearInterval(interval);
  }, [data]);

  if (!data || !data.candidate) {
    return <div style={{ padding: '2rem', color: 'var(--text-primary)' }}>Error: Invalid assessment data format received.</div>;
  }

  const handlePrint = async () => {
    try {
      setIsDownloadingPdf(true);
      if (!documentRef.current) return;
      
      const { default: jsPDF } = await import('jspdf');
      
      const element = documentRef.current;
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        backgroundColor: '#FFFFFF'
      });
      
      const imgData = canvas.toDataURL('image/jpeg', 0.98);
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
      });
      
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      const pageHeight = pdf.internal.pageSize.getHeight();
      let heightLeft = pdfHeight;
      let position = 0;
      
      pdf.addImage(imgData, 'JPEG', 0, position, pdfWidth, pdfHeight);
      heightLeft -= pageHeight;
      
      while (heightLeft >= 0) {
        position = heightLeft - pdfHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'JPEG', 0, position, pdfWidth, pdfHeight);
        heightLeft -= pageHeight;
      }
      
      pdf.save(`Ottobon_AI_Assessment_${data.candidate.name.replace(/\s+/g, '_')}.pdf`);
    } catch (err) {
      console.error("Failed to generate PDF locally", err);
      alert("Failed to generate PDF. Please try again.");
    } finally {
      setIsDownloadingPdf(false);
    }
  };

  const shareUrl = 'https://jobs.ottobon.cloud/academy';
  const shareText = `I just scored a ${data.readinessScore.overall}% on the Ottobon AI Readiness Assessment! My level is ${data.maturityLevel}. See how you stack up!`;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(`${shareText} ${shareUrl}`);
    alert("Share text copied to clipboard!");
  };

  return (
    <div className="report-container fade-in">
      {/* Header Actions */}
      <div className="report-actions no-print">
        <span style={{ color: 'var(--text-secondary)', fontWeight: 500 }}>Share Result:</span>
        <button className="btn-icon" onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`, '_blank')} title="Share on LinkedIn"><LinkedinIcon size={18} /></button>
        <button className="btn-icon" onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`, '_blank')} title="Share on Twitter"><TwitterIcon size={18} /></button>
        <button className="btn-icon" onClick={handleCopyLink} title="Copy text to clipboard"><Link2 size={18} /></button>
        
        <button 
          className="btn btn-primary" 
          onClick={handlePrint} 
          disabled={isDownloadingPdf}
          style={{ marginLeft: '1rem' }}
        >
          {isDownloadingPdf ? 'Generating PDF...' : 'Download PDF Report'}
        </button>
        <button 
          className="btn btn-secondary" 
          onClick={() => window.open('https://learn.ottobon.in/our-courses/cohort', '_blank')} 
          style={{ background: '#334155', color: 'white', border: 'none' }}
        >
          View Live Cohorts
        </button>
      </div>

      <div className="report-document" ref={documentRef}>
        
        {/* Bento Grid */}
        <div className="bento-grid">

          {/* 1. HERO WIDGET (Span 12) */}
          <div className="bento-card hero-score-card span-12">
            <div className="hero-info">
              <h1>Ottobon AI Academy</h1>
              <p>Enterprise AI Readiness Dashboard</p>
              <div className="maturity-badge">{data.maturityLevel}</div>
            </div>
            
            <div 
              className="circular-score" 
              style={{ '--score': `${scoreDisplay}%` } as React.CSSProperties}
            >
              <span className="circular-score-val">{scoreDisplay}%</span>
            </div>
          </div>

          {/* 2. CANDIDATE PROFILE (Span 4) */}
          <div className="bento-card span-4">
            <div className="card-header">
              <h3 className="card-title"><User size={20} className="card-title-icon" /> Professional Profile</h3>
            </div>
            <div className="profile-list">
              <div className="profile-row">
                <span className="profile-label">Name</span>
                <span className="profile-value">{data.candidate.name}</span>
              </div>
              <div className="profile-row">
                <span className="profile-label">Current Role</span>
                <span className="profile-value">{data.professionalProfile.currentRole}</span>
              </div>
              <div className="profile-row">
                <span className="profile-label">Industry</span>
                <span className="profile-value">{data.professionalProfile.industry}</span>
              </div>
              <div className="profile-row">
                <span className="profile-label">Experience</span>
                <span className="profile-value">{data.professionalProfile.yearsOfExperience}</span>
              </div>
            </div>
          </div>

          {/* 3. CAREER TRANSITION GOAL (Span 8) */}
          <div className="bento-card span-8" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div className="card-header">
              <h3 className="card-title"><Target size={20} className="card-title-icon" /> AI Career Transition Goal</h3>
            </div>
            
            <div className="transition-container">
              <div className="transition-role">
                <span>Current</span>
                <h4>{data.careerTransition.currentRole}</h4>
              </div>
              <div className="transition-arrow">→</div>
              <div className="transition-role highlight">
                <span>Target AI Role</span>
                <h4>{data.careerTransition.recommendedFutureRole}</h4>
              </div>
            </div>
            
            <div className="transition-meta">
              <div className="meta-item">
                <span>Difficulty</span>
                <strong>{data.careerTransition.transitionDifficulty}</strong>
              </div>
              <div className="meta-item">
                <span>Estimated Time</span>
                <strong>{data.careerTransition.estimatedLearningDuration}</strong>
              </div>
            </div>
          </div>

          {/* 4. SKILL GAP ANALYSIS (Span 6) */}
          <div className="bento-card span-6">
            <div className="card-header">
              <h3 className="card-title"><BarChart2 size={20} className="card-title-icon" /> Skill Gap Analysis</h3>
            </div>
            <div className="skill-gap-list">
              {data.skillGapAnalysis.map((gap, i) => (
                <div key={i}>
                  <div className="skill-gap-header">
                    <span>{gap.skill}</span>
                    <span style={{ color: 'var(--text-muted)' }}>{gap.current} / {gap.target} Target</span>
                  </div>
                  <div className="skill-gap-track">
                    <div className="skill-gap-target" style={{ width: `${(gap.target / 5) * 100}%` }}></div>
                    <div className="skill-gap-current" style={{ width: `${(gap.current / 5) * 100}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 5. STRENGTHS & IMPROVEMENTS (Span 6) */}
          <div className="bento-card span-6">
            <div className="card-header" style={{ marginBottom: '1rem' }}>
              <h3 className="card-title"><Zap size={20} className="card-title-icon" /> Capabilities</h3>
            </div>
            
            <span className="profile-label" style={{ marginBottom: '0.5rem', display: 'block' }}>Key Strengths</span>
            <div className="tags-wrapper" style={{ marginBottom: '1.5rem' }}>
              {data.strengths.map((str, i) => (
                <span key={i} className="bento-tag tag-strength">{str}</span>
              ))}
            </div>

            <span className="profile-label" style={{ marginBottom: '0.5rem', display: 'block' }}>Areas to Improve</span>
            <div className="tags-wrapper">
              {data.improvementAreas.map((imp, i) => (
                <span key={i} className="bento-tag tag-improvement">{imp}</span>
              ))}
            </div>
          </div>

          {/* 6. LEARNING ROADMAP (Span 12) */}
          {data.recommendedLearningPath && data.recommendedLearningPath.length > 0 && (
            <div className="bento-card span-12">
              <div className="card-header">
                <h3 className="card-title"><Route size={20} className="card-title-icon" /> Recommended Learning Roadmap</h3>
              </div>
              <div className="roadmap-bento-list">
                {data.recommendedLearningPath.map((mod, i) => (
                  <div key={i} className="roadmap-bento-item">
                    <div className="roadmap-bento-num">{mod.priority}</div>
                    <div className="roadmap-bento-content">
                      <h4>{mod.module}</h4>
                      {mod.focus && mod.focus !== "Not specified" && <p>{mod.focus}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 7. SCENARIO EVALUATIONS (Span 12) */}
          <div className="bento-card span-12">
            <div className="card-header">
              <h3 className="card-title"><Briefcase size={20} className="card-title-icon" /> Practical Scenario Evaluation</h3>
            </div>
            <div className="scenario-list">
              {data.scenarioEvaluations.map((scenario, i) => (
                <div key={i} className="scenario-item">
                  <div className="scenario-q">{i+1}. {scenario.question}</div>
                  <div className="scenario-a" style={{ marginBottom: '0.5rem' }}>
                    <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>Your Response:</span> {scenario.candidateResponse}
                  </div>
                  
                  {scenario.suggestedResponse && scenario.suggestedResponse !== "Not specified" && (
                    <div className="scenario-a" style={{ borderLeftColor: 'var(--accent-secondary)' }}>
                      <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>Ideal Approach:</span> {scenario.suggestedResponse}
                    </div>
                  )}
                  
                  <div className="scenario-eval" style={{ marginTop: '1rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <strong style={{ color: 'var(--accent-color)' }}>AI Evaluation Feedback:</strong>
                      <span className="bento-tag" style={{ background: 'white', fontSize: '0.8rem' }}>Score: {scenario.score}</span>
                    </div>
                    <ul>
                      {scenario.aiEvaluation.map((point, j) => (
                        <li key={j}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 8. PERSONALIZED RECOMMENDATIONS (Span 12) */}
          {data.personalizedRecommendations && data.personalizedRecommendations.length > 0 && (
            <div className="bento-card span-12">
              <div className="card-header">
                <h3 className="card-title"><CheckCircle size={20} className="card-title-icon" /> Personalized Recommendations</h3>
              </div>
              <div className="report-text-content" style={{ paddingLeft: '1rem' }}>
                <ul style={{ margin: 0 }}>
                  {data.personalizedRecommendations.map((rec, i) => (
                    <li key={i} style={{ marginBottom: '0.8rem', color: 'var(--text-secondary)' }}>{rec}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* 9. DISCLAIMER (Span 12) */}
          <div className="bento-card span-12" style={{ background: 'transparent', boxShadow: 'none', border: '1px dashed var(--border-color)', textAlign: 'center', padding: '1.5rem' }}>
            <div className="card-header" style={{ justifyContent: 'center', marginBottom: '0.5rem' }}>
              <h3 className="card-title" style={{ fontSize: '1rem', color: 'var(--text-muted)' }}><Info size={16} /> Disclaimer</h3>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', margin: 0 }}>{data.disclaimer}</p>
          </div>

        </div> {/* End Bento Grid */}
        
      </div>
    </div>
  );
};
