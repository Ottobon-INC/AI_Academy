import React, { useState } from 'react';
import { Target, Clock, ArrowRight, AlertTriangle, Eye, RotateCcw } from 'lucide-react';
import { BookOneOnOneModal } from './BookOneOnOneModal';
import { academyApi } from '../../api/academyApi';
import './TrackSelection.css';

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
  learnerEmail?: string | null;
  onSelectTrack: (trackId: string) => void;
}

export const TrackSelection: React.FC<Props> = ({ tracks, learnerEmail, onSelectTrack }) => {
  const [selectedTrack, setSelectedTrack] = useState<string | null>(null);
  const [flippedCards, setFlippedCards] = useState<Record<string, boolean>>({});
  const [bookingTrack, setBookingTrack] = useState<RecommendedTrack | null>(null);

  const toggleFlip = (e: React.MouseEvent, trackId: string) => {
    e.stopPropagation();
    setFlippedCards(prev => ({
      ...prev,
      [trackId]: !prev[trackId]
    }));
  };

  const handleOpenBooking = (e: React.MouseEvent, track: RecommendedTrack) => {
    e.stopPropagation();
    setSelectedTrack(track.id);
    setBookingTrack(track);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center py-12 px-8 max-w-[1200px] mx-auto opacity-0 animate-slide-up-fade font-['Inter']">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-slate-900 tracking-tight font-heading mb-3">Your Recommended AI Tracks</h2>
        <p className="text-slate-500 text-lg max-w-2xl mx-auto">
          Based on your profile, we have curated the following paths for you. Select the one that aligns best with your goals.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full items-stretch">
        {tracks.map(track => {
          const isHigh = track.recommendationLevel === 'High';
          const isMedium = track.recommendationLevel === 'Medium';
          const isSelected = selectedTrack === track.id;
          const isFlipped = !!flippedCards[track.id];
          
          // Theme matched border and button colors based on status & brand palette
          const selectedBorderClass = isHigh
            ? 'border-4 border-emerald-500 shadow-2xl shadow-emerald-500/20 ring-4 ring-emerald-500/20 -translate-y-1'
            : isMedium
            ? 'border-4 border-amber-500 shadow-2xl shadow-amber-500/20 ring-4 ring-amber-500/20 -translate-y-1'
            : 'border-4 border-red-500 shadow-2xl shadow-red-500/20 ring-4 ring-red-500/20 -translate-y-1';

          const selectedBtnClass = isHigh
            ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/20 hover:bg-emerald-700'
            : isMedium
            ? 'bg-amber-600 text-white shadow-lg shadow-amber-600/20 hover:bg-amber-700'
            : 'bg-red-600 text-white shadow-lg shadow-red-600/20 hover:bg-red-700';

          return (
            <div key={track.id} className="card-flip-container">
              <div className={`card-flipper ${isFlipped ? 'is-flipped' : ''}`}>
                
                {/* --- FRONT OF CARD --- */}
                <div 
                  className={`card-face card-face-front bg-white rounded-2xl p-6 flex flex-col justify-between relative transition-all duration-300 cursor-pointer overflow-hidden
                    ${isSelected 
                      ? selectedBorderClass 
                      : 'border border-slate-200 shadow-sm hover:-translate-y-1 hover:border-slate-300 hover:shadow-md'
                    }
                  `}
                  onClick={() => setSelectedTrack(track.id)}
                >
                  {isHigh && (
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-teal-500"></div>
                  )}
                  
                  <div>
                    {/* Header Badge & Title */}
                    <div className="flex flex-col items-start mb-3">
                      {track.recommendationLevel && (
                        <span className={`text-[0.7rem] px-3 py-1 rounded-full font-bold uppercase tracking-wider mb-2.5 flex items-center gap-1
                          ${isHigh ? 'bg-emerald-50 text-emerald-600 border border-emerald-200' : ''}
                          ${isMedium ? 'bg-amber-50 text-amber-600 border border-amber-200' : ''}
                          ${track.recommendationLevel === 'Low' ? 'bg-red-50 text-red-600 border border-red-200' : ''}
                        `}>
                          {isHigh && '⭐ Highly Recommended'}
                          {isMedium && '⚠️ Think Twice'}
                          {track.recommendationLevel === 'Low' && '❌ Avoid'}
                        </span>
                      )}
                      <h3 className="text-xl font-bold text-slate-900 leading-tight pr-4 font-heading">{track.title}</h3>
                    </div>
                    
                    <p className="text-slate-500 text-[0.925rem] leading-relaxed mb-4">{track.description}</p>
                  </div>

                  <div>
                    {/* Effort + View Details inline row */}
                    <div className="flex items-center justify-between gap-2 text-[0.85rem] text-slate-600 mb-5 pt-3 border-t border-slate-100">
                      <div className="flex items-center gap-1.5">
                        <Clock size={15} className={isHigh ? "text-emerald-600 shrink-0" : isMedium ? "text-amber-600 shrink-0" : "text-red-500 shrink-0"} />
                        <span><strong className="text-slate-900 font-semibold">Effort:</strong> {track.learningEffort}</span>
                      </div>

                      <button
                        type="button"
                        onClick={(e) => toggleFlip(e, track.id)}
                        className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-lg transition-colors border bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 hover:text-slate-900"
                      >
                        <Eye size={13} />
                        <span>View Details 🔄</span>
                      </button>
                    </div>
                    
                    {/* Select Button -> Opens 1-on-1 Popup */}
                    <button 
                      className={`w-full flex justify-center items-center gap-2 p-3.5 rounded-xl font-semibold transition-all
                        ${isSelected 
                          ? selectedBtnClass 
                          : 'bg-slate-50 text-slate-700 border border-slate-200 hover:bg-slate-100 hover:text-slate-900'
                        }
                      `}
                      onClick={(e) => handleOpenBooking(e, track)}
                    >
                      <span>Book 1-on-1 Session</span> <ArrowRight size={18} />
                    </button>
                  </div>
                </div>

                {/* --- BACK OF CARD (LIGHT THEME) --- */}
                <div 
                  className={`card-face card-face-back bg-white rounded-2xl p-6 flex flex-col justify-between relative text-slate-900 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300
                    ${isSelected 
                      ? selectedBorderClass 
                      : 'border border-slate-200'
                    }
                  `}
                  onClick={() => setSelectedTrack(track.id)}
                >
                  {isHigh && (
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-teal-500"></div>
                  )}

                  <div>
                    <div className="flex items-center justify-between mb-3 border-b border-slate-100 pb-2.5">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Track Details</h4>
                      <button
                        type="button"
                        onClick={(e) => toggleFlip(e, track.id)}
                        className="inline-flex items-center gap-1 text-xs font-semibold text-slate-500 hover:text-slate-900 transition-colors"
                      >
                        <RotateCcw size={12} />
                        <span>Back 🔄</span>
                      </button>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 mb-2.5 font-heading">{track.title}</h3>

                    {/* Fit Explanation */}
                    <div className={`p-3 rounded-xl border text-[0.825rem] mb-3
                      ${isHigh ? 'bg-emerald-50/70 border-emerald-200/80 text-emerald-950' : ''}
                      ${isMedium ? 'bg-amber-50/70 border-amber-200/80 text-amber-950' : ''}
                      ${!isHigh && !isMedium ? 'bg-red-50/70 border-red-200/80 text-red-950' : ''}
                    `}>
                      <div className="flex items-start gap-2">
                        {isHigh ? (
                          <Target size={15} className="text-emerald-600 shrink-0 mt-0.5" />
                        ) : (
                          <AlertTriangle size={15} className={isMedium ? "text-amber-600 shrink-0 mt-0.5" : "text-red-600 shrink-0 mt-0.5"} />
                        )}
                        <p className="leading-relaxed">
                          <strong className="font-semibold">
                            {isHigh ? 'Why it fits: ' : isMedium ? "Why to be cautious: " : "Why it's a BAD fit: "}
                          </strong> 
                          <span>
                            {track.matchReason}
                          </span>
                        </p>
                      </div>
                    </div>

                    {/* Key Skills */}
                    <div>
                      <strong className="block text-[0.78rem] text-slate-500 font-semibold mb-1.5">Key Skills:</strong>
                      <div className="flex flex-wrap gap-1.5">
                        {track.keySkills.map(skill => (
                          <span key={skill} className="bg-slate-50 border border-slate-200 px-2 py-0.5 rounded text-[0.725rem] text-slate-700 font-medium">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div>
                    {/* Flip back button */}
                    <div className="mb-2.5">
                      <button
                        type="button"
                        onClick={(e) => toggleFlip(e, track.id)}
                        className="w-full py-1.5 px-3 rounded-lg text-xs font-semibold bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-slate-200 transition-colors flex items-center justify-center gap-1.5"
                      >
                        <RotateCcw size={12} />
                        <span>Flip Back to Overview</span>
                      </button>
                    </div>

                    {/* Select Button -> Opens 1-on-1 Popup */}
                    <button 
                      className={`w-full flex justify-center items-center gap-2 p-3.5 rounded-xl font-semibold transition-all text-sm
                        ${isSelected 
                          ? selectedBtnClass 
                          : 'bg-slate-50 text-slate-700 border border-slate-200 hover:bg-slate-100 hover:text-slate-900'
                        }
                      `}
                      onClick={(e) => handleOpenBooking(e, track)}
                    >
                      <span>Book 1-on-1 Session</span> <ArrowRight size={16} />
                    </button>
                  </div>
                </div>

              </div>
            </div>
          );
        })}
      </div>

      {/* 1-on-1 Booking Popup Modal */}
      {bookingTrack && (
        <BookOneOnOneModal
          track={bookingTrack}
          learnerEmail={learnerEmail}
          onClose={() => {
            const trackId = bookingTrack.id;
            setBookingTrack(null);
            if (onSelectTrack) onSelectTrack(trackId);
          }}
          onConfirmSession={async (bookingData) => {
            await academyApi.triggerSyllabusEmail('session_' + Date.now(), bookingTrack.id, {
              email: bookingData.email,
              name: bookingData.name,
              phone: bookingData.phone,
              slot: bookingData.slot,
              trackTitle: bookingTrack.title,
              description: bookingTrack.description,
              matchReason: bookingTrack.matchReason,
              keySkills: bookingTrack.keySkills,
              learningEffort: bookingTrack.learningEffort
            });
          }}
        />
      )}
    </div>
  );
};
