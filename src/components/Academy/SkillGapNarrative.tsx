import React from 'react';
import { ShieldCheck, ArrowRight, CheckCircle, Clock, Info, Target } from 'lucide-react';

export interface SkillGapData {
  reassurance: string;
  strengths: string[];
  transferable: { skill: string; reason: string }[];
  stages: {
    name: string;
    description: string;
    priority: 'Essential' | 'Can Wait' | 'Optional';
  }[];
  summary: string;
}

interface Props {
  data: SkillGapData;
  onContinue: () => void;
}

export const SkillGapNarrative: React.FC<Props> = ({ data, onContinue }) => {
  // Combine all items into a single chronological flow
  const allItems = [
    { type: 'start' as const },
    ...data.stages.map(s => ({ type: 'stage' as const, data: s })),
    { type: 'finish' as const }
  ];

  return (
    <div className="w-full min-h-[90vh] bg-slate-950 font-['Inter'] opacity-0 animate-slide-up-fade overflow-hidden pb-20 flex flex-col items-center">
      
      {/* Dynamic Background Glows */}
      <div className="fixed top-[-20%] left-[-10%] w-[50%] h-[50%] bg-indigo-600/10 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="fixed bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-emerald-600/10 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="w-full max-w-[1000px] mx-auto px-6 md:px-12 pt-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold !text-white tracking-tight font-heading mb-3">The Journey Ahead</h2>
          <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto">{data.reassurance}</p>
        </div>

        {/* Clean Vertical Timeline */}
        <div className="relative w-full max-w-4xl mx-auto">
          {/* Central spine */}
          <div className="absolute left-[24px] md:left-1/2 top-4 bottom-4 w-1 bg-slate-800 rounded-full md:-translate-x-1/2 shadow-[0_0_10px_rgba(0,0,0,0.5)] z-0">
            {/* Glowing inner line */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-indigo-500 via-indigo-600 to-emerald-500 rounded-full opacity-50"></div>
          </div>

          <div className="flex flex-col w-full relative z-10 gap-6">
            {allItems.map((item, index) => {
              const isEven = index % 2 === 0; // true = Left, false = Right
              
              return (
                <div key={index} className={`w-full flex ${isEven ? 'md:justify-start' : 'md:justify-end'} relative group pl-[60px] md:pl-0`}>
                  
                  {/* Container for the card (45% width on desktop to leave room for the center line) */}
                  <div className={`w-full md:w-[47%] relative flex flex-col transition-transform duration-300 hover:-translate-y-1`}>
                    
                    {/* The Waypoint Node (Desktop center, Mobile left) */}
                    <div className={`absolute top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-slate-900 border-[3px] shadow-lg flex items-center justify-center z-20
                      left-[-56px] md:left-auto
                      ${isEven ? 'md:right-[-32px]' : 'md:left-[-32px] md:-translate-x-1/2'}
                      ${isEven && 'md:translate-x-1/2'}
                      ${item.type === 'start' ? 'border-indigo-400 text-indigo-400' : 
                        item.type === 'finish' ? 'border-emerald-400 text-emerald-400' : 
                        (item.type === 'stage' && item.data.priority === 'Essential') ? 'border-indigo-400 text-indigo-400' :
                        (item.type === 'stage' && item.data.priority === 'Optional') ? 'border-slate-500 text-slate-500' : 'border-amber-400 text-amber-400'}
                    `}>
                      {item.type === 'start' && <ShieldCheck size={18} />}
                      {item.type === 'finish' && <Target size={18} />}
                      {item.type === 'stage' && item.data.priority === 'Essential' && <CheckCircle size={14} />}
                      {item.type === 'stage' && item.data.priority === 'Can Wait' && <Clock size={14} />}
                      {item.type === 'stage' && item.data.priority === 'Optional' && <Info size={14} />}
                    </div>

                    {/* Connector line from node to card (Desktop only) */}
                    <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 h-[2px] bg-slate-700 w-6 z-10
                      ${isEven ? 'right-[-20px]' : 'left-[-20px]'}
                    `}></div>

                    {/* --- CARD CONTENT --- */}
                    {item.type === 'start' && (
                      <div className="bg-slate-900/90 backdrop-blur-md border border-indigo-500/40 p-5 rounded-2xl w-full shadow-xl">
                        <h3 className="text-lg font-bold !text-white font-heading mb-3 flex items-center gap-2">
                          Starting Point
                        </h3>
                        <div className="mb-3">
                          <strong className="block text-slate-400 mb-1.5 text-[0.7rem] uppercase tracking-wider">Foundation</strong>
                          <div className="flex flex-wrap gap-1.5">
                            {data.strengths.slice(0, 3).map((strength, i) => (
                              <span key={i} className="bg-indigo-500/20 text-indigo-300 px-2 py-0.5 rounded text-[0.75rem] font-medium border border-indigo-500/20">
                                {strength}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div>
                          <strong className="block text-slate-400 mb-1.5 text-[0.7rem] uppercase tracking-wider">Transfers</strong>
                          <div className="flex flex-col gap-1.5">
                            {data.transferable.map((t, i) => (
                              <div key={i} className="bg-slate-950 px-3 py-2 rounded-lg border border-slate-800">
                                <h4 className="!text-slate-200 font-semibold text-[0.8rem] mb-0.5">{t.skill}</h4>
                                <p className="text-slate-500 text-[0.75rem] leading-tight line-clamp-2">{t.reason}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {item.type === 'stage' && (
                      <div className={`bg-slate-900/95 backdrop-blur-md p-5 rounded-2xl border w-full shadow-xl
                        ${item.data.priority === 'Essential' ? 'border-indigo-500/30' : 'border-slate-700/80'}
                      `}>
                        <div className="flex justify-between items-start mb-2">
                          <h4 className={`text-[1.05rem] font-bold font-heading pr-2 ${item.data.priority === 'Essential' ? '!text-indigo-200' : '!text-slate-200'}`}>
                            {item.data.name}
                          </h4>
                          <span className={`shrink-0 text-[0.6rem] px-1.5 py-0.5 rounded uppercase font-bold tracking-wider border
                            ${item.data.priority === 'Essential' ? 'bg-indigo-500/20 text-indigo-400 border-indigo-500/30' : 
                              item.data.priority === 'Optional' ? 'bg-slate-800 text-slate-400 border-slate-700' : 
                              'bg-amber-500/10 text-amber-500 border-amber-500/20'}
                          `}>
                            {item.data.priority}
                          </span>
                        </div>
                        <p className="text-slate-400 text-[0.85rem] leading-relaxed line-clamp-3">
                          {item.data.description}
                        </p>
                      </div>
                    )}

                    {item.type === 'finish' && (
                      <div className="bg-emerald-950/40 backdrop-blur-md border border-emerald-500/40 p-5 rounded-2xl w-full shadow-xl text-center">
                        <h3 className="text-xl font-bold !text-white font-heading mb-2">
                          The Finish Line
                        </h3>
                        <p className="text-emerald-100/70 text-[0.85rem] leading-relaxed mb-4">
                          {data.summary}
                        </p>
                        <button 
                          className="w-full flex items-center justify-center gap-2 bg-emerald-500 text-slate-950 font-bold py-2.5 px-4 rounded-xl hover:bg-emerald-400 transition-all shadow-lg group"
                          onClick={onContinue}
                        >
                          Build Roadmap 
                          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    )}
                    
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
};
