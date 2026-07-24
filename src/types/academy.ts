export interface ChatMessage {
  role: 'system' | 'assistant' | 'user';
  content: string;
  metadata?: QuestionMetadata;
  contextData?: any;
}

export interface QuestionMetadata {
  type?: 'single-select' | 'multi-select' | 'text' | 'textarea';
  options?: string[];
  allowOther?: boolean;
  allowMultiple?: boolean;
  placeholder?: string;
}

export interface AssessmentCandidate {
  assessmentId: string;
  name: string;
  email: string;
  currentProfession: string;
  currentSpecialization: string;
  industry: string;
  yearsOfExperience: string;
  assessmentDate: string;
  resumeUploaded: string;
}

export interface AssessmentProfessionalProfile {
  currentRole: string;
  specialization: string;
  industry: string;
  yearsOfExperience: string;
  currentResponsibilities: string[];
}

export interface AssessmentReadinessScore {
  overall: number;
  technical: number;
  adoption: number;
  promptEngineering: number;
  workflowAutomation: number;
  agenticAi: number;
  governance: number;
  verification: number;
}

export interface AssessmentSummaryData {
  profession: string;
  aiUsageFrequency: string;
  aiToolsUsed: string[];
  confidenceLevel: string;
  preferredLearningStyle: string;
  weeklyAvailability: string;
}

export interface AssessmentTechnicalEvaluation {
  skillArea: string;
  rating: string;
  comments: string;
}

export interface AssessmentScenarioEvaluation {
  scenario: string;
  question: string;
  candidateResponse: string;
  suggestedResponse?: string;
  aiEvaluation: string[];
  score: string;
}

export interface AssessmentSkillGap {
  skill: string;
  current: number;
  target: number;
}

export interface AssessmentCareerTransition {
  currentRole: string;
  recommendedFutureRole: string;
  aiReadiness: string;
  transitionDifficulty: string;
  estimatedLearningDuration: string;
}

export interface AssessmentLearningModule {
  priority: number;
  module: string;
  focus?: string;
}

export interface AssessmentMetadata {
  assessmentVersion: string;
  assessmentType: string;
  totalQuestions: number;
  questionsAttempted: number;
  completionTime: string;
  resumeParsed: string;
  aiModel: string;
  generatedOn: string;
}

export interface FinalAssessment {
  candidate: AssessmentCandidate;
  executiveSummary: string;
  professionalProfile: AssessmentProfessionalProfile;
  readinessScore: AssessmentReadinessScore;
  maturityLevel: string;
  assessmentSummary: AssessmentSummaryData;
  technicalEvaluation: AssessmentTechnicalEvaluation[];
  scenarioEvaluations: AssessmentScenarioEvaluation[];
  strengths: string[];
  improvementAreas: string[];
  skillGapAnalysis: AssessmentSkillGap[];
  careerTransition: AssessmentCareerTransition;
  recommendedLearningPath: AssessmentLearningModule[];
  personalizedRecommendations: string[];
  metadata: AssessmentMetadata;
  disclaimer: string;
}
