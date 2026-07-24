import React, { useState } from 'react';
import { Target, Clock, ArrowRight, AlertTriangle } from 'lucide-react';

export interface RecommendedTrack {
  id: string;
  title: string;
  recommendationLevel?: 'High' | 'Medium' | 'Low';
  description: string;
  matchReason: string;
  learningEffort: 'Very Short' | 'Short' | 'Moderate' | 'Significant';
  keySkills: string[];
  hiringCompanies: string;
}

interface Props {
  tracks: RecommendedTrack[];
  onSelectTrack: (trackId: string) => void;
}

export const TrackSelection: React.FC<Props> = ({ tracks, onSelectTrack }) => {
  const [selectedTrack, setSelectedTrack] = useState<string | null>(null);

  return (
    <div className="flex flex-col items-center p-8 max-w-[1200px] mx-auto opacity-0 animate-slide-up-fade font-['Inter']">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-slate-900 tracking-tight font-heading mb-3">Your Recommended AI Tracks</h2>
        <p className="text-slate-500 text-lg max-w-2xl mx-auto">
          Based on your profile, we have curated the following paths for you. Select the one that aligns best with your goals.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
        {tracks.map(track => {
          const isHigh = track.recommendationLevel === 'High';
          const isSelected = selectedTrack === track.id;
          
          return (
            <div 
              key={track.id} 
              className={`bg-white border rounded-2xl p-6 flex flex-col relative transition-all duration-300 cursor-pointer overflow-hidden
                ${isSelected 
                  ? 'border-indigo-500 shadow-[0_0_0_1px_rgba(99,102,241,1)] shadow-lg' 
                  : 'border-slate-200 shadow-sm hover:-translate-y-1 hover:border-slate-300 hover:shadow-md'
                }
                ${isHigh && !isSelected ? 'ring-2 ring-emerald-500/20' : ''}
              `}
              onClick={() => setSelectedTrack(track.id)}
            >
              {isHigh && (
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-teal-500"></div>
              )}
              
              <div className="flex flex-col items-start mb-4">
                {track.recommendationLevel && (
                  <span className={`text-[0.7rem] px-3 py-1 rounded-full font-bold uppercase tracking-wider mb-3 flex items-center
                    ${track.recommendationLevel === 'High' ? 'bg-emerald-50 text-emerald-600 border border-emerald-200' : ''}
                    ${track.recommendationLevel === 'Medium' ? 'bg-amber-50 text-amber-600 border border-amber-200' : ''}
                    ${track.recommendationLevel === 'Low' ? 'bg-red-50 text-red-600 border border-red-200' : ''}
                  `}>
                    {track.recommendationLevel === 'High' && '⭐ Highly Recommended'}
                    {track.recommendationLevel === 'Medium' && '⚠️ Think Twice'}
                    {track.recommendationLevel === 'Low' && '❌ Avoid'}
                  </span>
                )}
                <h3 className="text-xl font-bold text-slate-900 leading-tight pr-4 font-heading">{track.title}</h3>
              </div>
              
              <p className="text-slate-500 text-[0.95rem] leading-relaxed mb-6 flex-grow">{track.description}</p>
              
              <div className="flex flex-col gap-4 mb-6 pb-6 border-b border-slate-100">
                <div className="flex items-start gap-2.5 text-[0.9rem] text-slate-600">
                  {isHigh ? (
                    <Target size={18} className="text-emerald-500 shrink-0 mt-0.5" />
                  ) : (
                    <AlertTriangle size={18} className="text-red-500 shrink-0 mt-0.5" />
                  )}
                  <p className="leading-relaxed">
                    <strong className="text-slate-900 font-semibold">{isHigh ? 'Why it fits: ' : ''}</strong> 
                    <span className={!isHigh ? 'text-red-700 font-medium' : ''}>{track.matchReason}</span>
                  </p>
                </div>
                <div className="flex items-start gap-2.5 text-[0.9rem] text-slate-600">
                  <Clock size={18} className="text-indigo-500 shrink-0 mt-0.5" />
                  <p className="leading-relaxed">
                    <strong className="text-slate-900 font-semibold">Learning Effort: </strong> 
                    {track.learningEffort}
                  </p>
                </div>
              </div>

              <div className="mb-6">
                <strong className="block text-[0.9rem] text-slate-900 font-semibold mb-3">Key Skills to Learn:</strong>
                <div className="flex flex-wrap gap-2">
                  {track.keySkills.map(skill => (
                    <span key={skill} className="bg-slate-50 border border-slate-200 px-2.5 py-1 rounded-md text-[0.8rem] text-slate-600 font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-6 text-[0.9rem] text-slate-600">
                <strong className="text-slate-900 font-semibold">Who hires for this: </strong> {track.hiringCompanies}
              </div>
              
              <button 
                className={`w-full flex justify-center items-center gap-2 p-3.5 rounded-xl font-semibold transition-all mt-auto
                  ${isSelected 
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/20 hover:bg-indigo-700' 
                    : 'bg-slate-50 text-slate-600 border border-slate-200 hover:bg-slate-100 hover:text-slate-900'
                  }
                  ${isHigh && !isSelected ? 'bg-indigo-50 text-indigo-700 border-indigo-200 hover:bg-indigo-100' : ''}
                `}
                onClick={(e) => {
                  e.stopPropagation();
                  onSelectTrack(track.id);
                }}
              >
                {isSelected ? 'Continue with this Path' : 'Select Path'} <ArrowRight size={18} className={isSelected ? "animate-pulse" : ""} />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
