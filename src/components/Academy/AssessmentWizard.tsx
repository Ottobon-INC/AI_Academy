import React, { useState } from 'react';

import { academyApi } from '../../api/academyApi';
import './AssessmentWizard.css';

interface Props {
  sessionId: string;
  initialResumeText?: string;
  onTracksGenerated: (tracks: any[], wizardData: any) => void;
}

export const AssessmentWizard: React.FC<Props> = ({ sessionId, initialResumeText, onTracksGenerated }) => {
  const [step, setStep] = useState(1);
  const [role, setRole] = useState<string>('');
  const [experience, setExperience] = useState<string>('');
  const [goal, setGoal] = useState<string>('');
  const [aiUsage, setAiUsage] = useState<string>('');
  const [time, setTime] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (finalTime: string) => {
    setIsLoading(true);
    try {
      // Mocking the backend call
      const wizardData = {
        role,
        experience,
        goal,
        aiUsage,
        time: finalTime,
        resumeText: initialResumeText
      };
      
      const response = await academyApi.submitWizard(sessionId, wizardData);
      
      if (response.recommendedTracks) {
        onTracksGenerated(response.recommendedTracks, wizardData);
      }
    } catch (e) {
      console.error(e);
      setIsLoading(false);
    }
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  return (
    <div className="wizard-container fade-in">
      <div className="wizard-card">
        {isLoading ? (
          <div className="spinner-container" style={{ padding: '3rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div className="spinner"></div>
            <p className="spinner-text" style={{ marginTop: '1.5rem', textAlign: 'center' }}>Curating your ideal AI tracks...</p>
          </div>
        ) : (
          <>
            <div className="wizard-progress">
              <div className="progress-bar" style={{ width: `${(step / 4) * 100}%` }}></div>
            </div>
            
            {step === 1 && (
              <div className="wizard-step fade-in">
                <h2>What is your current role & experience?</h2>
                <div className="input-group">
                  <label>Current Role</label>
                  <div className="pill-grid">
                    {['Software Developer', 'Manager', 'QA', 'Data Analyst', 'Other'].map(opt => (
                      <button 
                        key={opt} 
                        className={`pill-btn ${role === opt ? 'selected' : ''}`}
                        onClick={() => setRole(opt)}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="input-group" style={{ marginTop: '1.5rem' }}>
                  <label>Years of Experience</label>
                  <div className="pill-grid">
                    {['0-2 yrs', '3-5 yrs', '5+ yrs'].map(opt => (
                      <button 
                        key={opt} 
                        className={`pill-btn ${experience === opt ? 'selected' : ''}`}
                        onClick={() => setExperience(opt)}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>
                <button 
                  className="btn btn-primary" 
                  style={{ marginTop: '2rem', width: '100%', padding: '1rem', fontSize: '1.05rem' }}
                  disabled={!role || !experience}
                  onClick={nextStep}
                >
                  Continue
                </button>
              </div>
            )}

            {step === 2 && (
              <div className="wizard-step fade-in">
                <h2>What is your target AI goal?</h2>
                <p>Select the option that best describes what you want to achieve.</p>
                <div className="pill-grid">
                  {['Automate my daily tasks', 'Transition to an AI role', 'Build AI apps', 'Learn the basics', 'I\'m not sure yet (Skip)'].map(opt => (
                    <button 
                      key={opt} 
                      className={`pill-btn ${goal === opt ? 'selected' : ''}`}
                      onClick={() => { setGoal(opt); nextStep(); }}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="wizard-step fade-in">
                <h2>How often do you currently use AI tools?</h2>
                <p>This helps us calibrate the difficulty of your roadmap.</p>
                <div className="pill-grid">
                  {['Never used them', 'Occasionally (ChatGPT etc.)', 'Daily for work', 'I build with AI APIs'].map(opt => (
                    <button 
                      key={opt} 
                      className={`pill-btn ${aiUsage === opt ? 'selected' : ''}`}
                      onClick={() => { setAiUsage(opt); nextStep(); }}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="wizard-step fade-in">
                <h2>How much time can you invest in learning?</h2>
                <p>Be realistic about your weekly bandwidth.</p>
                <div className="pill-grid">
                  {['1-2 hours/week', '5+ hours/week', 'Looking for an intensive bootcamp', 'Not sure (Skip)'].map(opt => (
                    <button 
                      key={opt} 
                      className={`pill-btn ${time === opt ? 'selected' : ''}`}
                      onClick={() => { setTime(opt); handleSubmit(opt); }}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};
