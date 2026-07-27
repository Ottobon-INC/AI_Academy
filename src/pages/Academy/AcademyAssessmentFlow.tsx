import React, { useState, useEffect } from 'react';
import AssessmentLanding from '../../components/Academy/AssessmentLanding';
import { ResumeUploadCard } from '../../components/Academy/ResumeUploadCard';
import { AssessmentChat } from '../../components/Academy/Chat/AssessmentChat';
import { OtpModal } from '../../components/Academy/OtpModal';
import { TrackSelection } from '../../components/Academy/TrackSelection';
import type { RecommendedTrack } from '../../components/Academy/TrackSelection';
import { AIBlueprint } from '../../components/Academy/AIBlueprint';
import type { AIBlueprintData } from '../../components/Academy/AIBlueprint';
import { FinalCTA } from '../../components/Academy/FinalCTA';
import { academyApi } from '../../api/academyApi';

type AssessmentStep = 'landing' | 'resume' | 'otp' | 'chat' | 'tracks' | 'summary' | 'final-cta';

export const AcademyAssessmentFlow: React.FC = () => {
  const [step, setStep] = useState<AssessmentStep>('landing');
  const [resumeText, setResumeText] = useState<string | undefined>();
  const [summaryData, setSummaryData] = useState<AIBlueprintData | null>(null);
  const [sessionId, setSessionId] = useState<string | null>('test_session_123');
  const [recommendedTracks, setRecommendedTracks] = useState<RecommendedTrack[]>([]);
  const [wizardData, setWizardData] = useState<any>(null);
  const [learnerEmail, setLearnerEmail] = useState<string | null>(null);

  // Keep URL clean as aiacademy.ottobon.in while enabling browser back/forward button navigation
  useEffect(() => {
    // 1. Campaign Tracking Logic
    const urlParams = new URLSearchParams(window.location.search);
    const campaignParam = urlParams.get('campaign');
    if (campaignParam) {
      sessionStorage.setItem('ottobon_campaign_id', campaignParam);
    } else if (!sessionStorage.getItem('ottobon_campaign_id')) {
      sessionStorage.setItem('ottobon_campaign_id', 'DIRECT');
    }

    const initialStep: AssessmentStep = campaignParam ? 'resume' : 'landing';
    if (campaignParam) {
      setSessionId('test_session_123');
    }
    setStep(initialStep);

    // Clean URL bar and initialize history state object
    window.history.replaceState({ step: initialStep }, '', window.location.pathname);

    // Listen for browser Back / Forward buttons
    const handlePopState = (event: PopStateEvent) => {
      if (event.state && event.state.step) {
        setStep(event.state.step as AssessmentStep);
      } else {
        setStep('landing');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateToStep = (newStep: AssessmentStep) => {
    setStep(newStep);
    // Push state object without changing the address bar URL
    window.history.pushState({ step: newStep }, '', window.location.pathname);
  };

  const handleStart = () => {
    setSessionId(null);
    navigateToStep('otp');
  };

  const handleResumeNext = (text?: string) => {
    if (text) {
      setResumeText(text);
    }
    navigateToStep('chat');
  };

  const handleOtpVerified = (verifiedSessionId: string, finalReportData?: any) => {
    setSessionId(verifiedSessionId);
    // Extract the email from OTP modal — stored in sessionStorage by OtpModal
    const email = sessionStorage.getItem('ottobon_verified_email') || null;
    setLearnerEmail(email);
    if (finalReportData) {
      setSummaryData(finalReportData);
      navigateToStep('summary');
    } else {
      navigateToStep('resume');
    }
  };

  const handleOtpCancel = () => {
    navigateToStep('landing');
  };

  const handleTracksGenerated = (tracks: RecommendedTrack[], data: any) => {
    setRecommendedTracks(tracks);
    setWizardData(data);
    navigateToStep('tracks');
  };

  const handleTrackSelected = (trackId: string) => {
    navigateToStep('landing');
  };

  return (
    <div className="academy-flow-container">
      {step === 'landing' && (
        <AssessmentLanding 
          onStart={handleStart} 
        />
      )}
      {step === 'resume' && <ResumeUploadCard onNext={handleResumeNext} />}
      {step === 'otp' && <OtpModal onVerified={handleOtpVerified} onCancel={handleOtpCancel} />}
      {step === 'chat' && sessionId && <AssessmentChat sessionId={sessionId} initialResumeText={resumeText} onTracksGenerated={handleTracksGenerated} />}
      {step === 'tracks' && (
        <TrackSelection tracks={recommendedTracks} learnerEmail={learnerEmail} onSelectTrack={handleTrackSelected} />
      )}
      {step === 'summary' && summaryData && <AIBlueprint data={summaryData} />}
      {step === 'final-cta' && <FinalCTA sessionId={sessionId} learnerEmail={learnerEmail} />}
    </div>
  );
};
