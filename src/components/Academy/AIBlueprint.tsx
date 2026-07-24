import React from 'react';
import { Target, CheckCircle, Code, Layers, ShieldCheck, Briefcase, ChevronRight, Zap } from 'lucide-react';

export interface AIBlueprintData {
  summary: {
    trackTitle: string;
    strengths: string[];
    learningPriorities: string[];
    projectFocus: string;
    transitionStrategy: string;
    closingStatement: string;
  };
  phases: {
    phaseNumber: number;
    title: string;
    objective: string;
    whyItMatters: string;
    topics: string[];
    deliverables: string[];
    milestone: string;
    expectedOutcome: string;
  }[];
  optionalTopics: string[];
}

interface Props {
  data: AIBlueprintData;
}

export const AIBlueprint: React.FC<Props> = ({ data }) => {
  const getPhaseIcon = (num: number) => {
    switch (num) {
      case 1: return <Layers size={24} className="text-indigo-400" />;
      case 2: return <Code size={24} className="text-indigo-400" />;
      case 3: return <Zap size={24} className="text-indigo-400" />;
      case 4: return <ShieldCheck size={24} className="text-indigo-400" />;
      case 5: return <Briefcase size={24} className="text-indigo-400" />;
      case 6: return <Target size={24} className="text-indigo-400" />;
      default: return <ChevronRight size={24} className="text-indigo-400" />;
    }
  };

  return (
    <div className="w-full min-h-screen bg-slate-950 font-['Inter'] opacity-0 animate-slide-up-fade pb-32">
      
      {/* Glow Effects */}
      <div className="fixed top-[-20%] left-[-10%] w-[50%] h-[50%] bg-indigo-600/10 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 md:px-12 pt-16 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold !text-white tracking-tight font-heading mb-6">Your Personalized AI Blueprint</h1>
          <div className="inline-block bg-indigo-500/10 text-indigo-400 border border-indigo-500/30 px-5 py-2 rounded-full font-bold uppercase tracking-wider text-sm shadow-[0_0_15px_rgba(99,102,241,0.2)]">
            {data.summary.trackTitle}
          </div>
        </div>

        {/* Top Level Summary Card */}
        <div className="bg-slate-900/80 backdrop-blur-md border border-slate-700/80 rounded-3xl p-8 md:p-10 mb-16 shadow-2xl">
          <div className="mb-8 border-b border-slate-800 pb-8">
            <h3 className="text-2xl font-bold !text-white font-heading mb-4">Your Transition Strategy</h3>
            <p className="text-slate-400 text-lg leading-relaxed">{data.summary.transitionStrategy}</p>
          </div>
          <div>
            <h4 className="text-xl font-bold !text-white font-heading mb-4">Project Focus</h4>
            <p className="text-slate-400 text-lg leading-relaxed">{data.summary.projectFocus}</p>
          </div>
        </div>

        {/* The 6 Phases Timeline */}
        <div className="flex flex-col gap-12 md:gap-16 relative">
          {/* Vertical spine */}
          <div className="absolute left-[24px] md:left-[36px] top-0 bottom-0 w-1 bg-slate-800 rounded-full z-0"></div>

          {data.phases.map((phase, idx) => (
            <div key={idx} className="flex gap-6 md:gap-10 relative z-10">
              
              {/* Phase Indicator */}
              <div className="flex flex-col items-center shrink-0 w-[48px] md:w-[72px]">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-slate-900 border-[4px] border-indigo-500 text-white rounded-full flex items-center justify-center font-bold text-xl md:text-2xl z-20 shadow-[0_0_20px_rgba(99,102,241,0.3)]">
                  {phase.phaseNumber}
                </div>
              </div>
              
              {/* Phase Content */}
              <div className="bg-slate-900/70 backdrop-blur-sm border border-slate-700 rounded-3xl p-6 md:p-10 flex-grow shadow-xl transition-all hover:border-indigo-500/50 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] group">
                
                <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6 pb-6 border-b border-slate-800">
                  <div className="w-12 h-12 shrink-0 bg-indigo-500/10 rounded-2xl flex items-center justify-center border border-indigo-500/20 group-hover:bg-indigo-500/20 transition-colors">
                    {getPhaseIcon(phase.phaseNumber)}
                  </div>
                  <div>
                    <span className="block text-indigo-400 font-bold uppercase tracking-wider text-xs mb-1">Phase {phase.phaseNumber}</span>
                    <h2 className="text-2xl font-bold !text-white font-heading m-0">{phase.title}</h2>
                  </div>
                </div>

                <div className="mb-6">
                  <p className="text-slate-300 text-[1.05rem] leading-relaxed mb-4">
                    <strong className="text-white">Objective:</strong> {phase.objective}
                  </p>
                  <p className="text-slate-400 text-[0.95rem] leading-relaxed">
                    <strong className="text-slate-300">Why this matters:</strong> {phase.whyItMatters}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-slate-950/50 p-6 rounded-2xl border border-slate-800/80 mb-8">
                  <div>
                    <h4 className="text-white font-bold mb-4 font-heading">Topics to Learn</h4>
                    <div className="flex flex-wrap gap-2">
                      {phase.topics.map((topic, i) => (
                        <span key={i} className="bg-slate-800 text-slate-300 border border-slate-700 px-3 py-1 rounded-full text-sm font-medium">
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-4 font-heading">Hands-on Deliverables</h4>
                    <ul className="flex flex-col gap-3 m-0 p-0 list-none">
                      {phase.deliverables.map((del, i) => (
                        <li key={i} className="flex items-start gap-2 text-slate-400 text-sm leading-relaxed">
                          <CheckCircle size={16} className="text-emerald-500 shrink-0 mt-0.5" /> 
                          {del}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex flex-col gap-3 pt-6 border-t border-slate-800">
                  <div className="text-slate-400 text-sm">
                    <strong className="text-slate-200">Milestone:</strong> {phase.milestone}
                  </div>
                  <div className="text-slate-400 text-sm">
                    <strong className="text-slate-200">Outcome:</strong> {phase.expectedOutcome}
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Optional Learning */}
        {data.optionalTopics && data.optionalTopics.length > 0 && (
          <div className="mt-16 bg-slate-900/40 border border-slate-700 border-dashed rounded-3xl p-8 text-center">
            <h3 className="text-xl font-bold !text-white font-heading mb-3">Optional Advanced Topics</h3>
            <p className="text-slate-400 mb-6 text-sm max-w-2xl mx-auto">These are powerful concepts, but they should not block your employability. Explore these only after securing your foundation.</p>
            <div className="flex flex-wrap justify-center gap-2">
              {data.optionalTopics.map((topic, i) => (
                <span key={i} className="bg-slate-950 text-slate-500 border border-slate-800 border-dashed px-3 py-1 rounded-full text-sm">
                  {topic}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Final Summary Closing */}
        <div className="mt-16 text-center bg-gradient-to-r from-indigo-500/5 via-indigo-500/10 to-indigo-500/5 border border-indigo-500/20 rounded-3xl p-10 shadow-[0_0_30px_rgba(99,102,241,0.05)]">
          <p className="text-xl md:text-2xl font-bold text-white leading-relaxed font-heading">
            {data.summary.closingStatement}
          </p>
        </div>

      </div>
    </div>
  );
};
