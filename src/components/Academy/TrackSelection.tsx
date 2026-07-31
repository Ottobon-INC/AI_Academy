import React, { useState } from 'react';
import { Target, Search, Sparkles, ChevronDown } from 'lucide-react';
import { BookOneOnOneModal } from './BookOneOnOneModal';
import { ExploreTrackModal } from './ExploreTrackModal';
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

const DEFAULT_3_TRACKS: RecommendedTrack[] = [
  {
    id: 'native-ai-expert',
    title: 'Native AI Expert',
    recommendationLevel: 'High',
    description: 'Large enterprise platforms (Salesforce, Oracle, SAP) are embedding native AI tools. Learn to configure, customize, and manage these pre-built enterprise AI systems for enterprise clients.',
    matchReason: 'Fits 95% of enterprise software & CRM/ERP implementation backgrounds. Immediate high market demand.',
    learningEffort: 'Short',
    keySkills: ['Salesforce Einstein 1', 'Oracle Cloud AI', 'SAP Joule AI', 'Enterprise Config'],
    hiringCompanies: 'Oracle, Salesforce, Accenture, Deloitte, SAP'
  },
  {
    id: 'vibe-coding-developer',
    title: 'Vibe Coding AI Developer',
    recommendationLevel: 'High',
    description: 'Rapid, AI-assisted full-stack development. Master AI coding agents (Cursor, Windsurf, Claude) to build full-stack apps from scratch or completely replace legacy enterprise SaaS subscriptions.',
    matchReason: 'Empowers developers with 10x building speed for full-stack applications and SaaS replacement.',
    learningEffort: 'Moderate',
    keySkills: ['AI Coding Agents', 'Full-Stack React/Node', 'Prompt Engineering', 'Rapid SaaS Building'],
    hiringCompanies: 'Scale AI, Ramp, Vercel, OpenAI, Anthropic'
  },
  {
    id: 'agent-builder',
    title: 'Agent Builder',
    recommendationLevel: 'High',
    description: 'Focuses on custom integrations. Build independent AI agents using frontier models (GPT-4, Claude) or open-source LLMs, and write backend logic to plug them directly into company architectures.',
    matchReason: 'Best for backend engineers and AI integration specialists building custom autonomous systems.',
    learningEffort: 'Significant',
    keySkills: ['LangChain / LlamaIndex', 'Python / FastAPI', 'Custom Tool Use', 'Vector DBs'],
    hiringCompanies: 'Palantir, Databricks, Snowflake, Cognition, Anyscale'
  }
];

export const TrackSelection: React.FC<Props> = ({ tracks, learnerEmail, onSelectTrack }) => {
  const displayTracks = (tracks && tracks.length > 0) ? tracks : DEFAULT_3_TRACKS;

  const [activeTrackId, setActiveTrackId] = useState<string>('vibe-coding-developer');
  const [bookingTrack, setBookingTrack] = useState<RecommendedTrack | null>(null);
  const [exploringTrack, setExploringTrack] = useState<RecommendedTrack | null>(null);

  const activeTrack = displayTracks.find(t => t.id === activeTrackId) || displayTracks[0];

  const handleOpenBooking = (e: React.MouseEvent, track: RecommendedTrack) => {
    e.stopPropagation();
    onSelectTrack(track.id);
    setBookingTrack(track);
  };

  const handleOpenExplore = (e: React.MouseEvent, track: RecommendedTrack) => {
    e.stopPropagation();
    setExploringTrack(track);
  };

  const getTrackMeta = (id: string) => {
    if (id === 'native-ai-expert') {
      return {
        badge: '🏢 ENTERPRISE AI',
        color: 'indigo',
        salary: '$130,000 - $185,000 / yr',
        bgGlow: 'from-indigo-500/10 via-purple-500/5 to-transparent',
        border: 'border-indigo-500',
        activeBtn: 'bg-indigo-600 hover:bg-indigo-700 text-white',
        nodeBg: 'bg-indigo-50 text-indigo-700 border-indigo-300 shadow-indigo-500/20',
        activeX: '20%',
      };
    }
    if (id === 'vibe-coding-developer') {
      return {
        badge: '⚡ RAPID BUILDER',
        color: 'amber',
        salary: '$140,000 - $210,000 / yr',
        bgGlow: 'from-amber-500/10 via-yellow-500/5 to-transparent',
        border: 'border-amber-500',
        activeBtn: 'bg-amber-600 hover:bg-amber-700 text-white',
        nodeBg: 'bg-amber-50 text-amber-800 border-amber-300 shadow-amber-500/20',
        activeX: '50%',
      };
    }
    return {
      badge: '🤖 CUSTOM AGENTS',
      color: 'emerald',
      salary: '$150,000 - $220,000 / yr',
      bgGlow: 'from-emerald-500/10 via-teal-500/5 to-transparent',
      border: 'border-emerald-500',
      activeBtn: 'bg-emerald-600 hover:bg-emerald-700 text-white',
      nodeBg: 'bg-emerald-50 text-emerald-800 border-emerald-300 shadow-emerald-500/20',
      activeX: '80%',
    };
  };

  const activeMeta = getTrackMeta(activeTrack.id);

  return (
    <div className="w-full max-w-[1240px] mx-auto py-12 px-4 sm:px-8 font-['Inter']">
      <div className="text-center mb-10">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#C9A84C]/10 text-[#C9A84C] border border-[#C9A84C]/25 mb-3 shadow-sm">
          <Sparkles size={13} className="text-[#C9A84C]" />
          Interactive AI Career Constellation
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight font-heading mb-3">
          Explore AI Specialization Pathways
        </h2>
        <p className="text-slate-500 text-base md:text-lg max-w-2xl mx-auto">
          Click any specialization node below to light up matching hiring companies, real-world job roles, and salary bands.
        </p>
      </div>

      {/* INTERACTIVE GRAPH CONSTELLATION STAGE (LIGHT WARM THEME) */}
      <div className="relative w-full rounded-3xl bg-[#FAF7F2] p-6 sm:p-10 border border-[#C9A84C]/35 shadow-xl overflow-hidden mb-8">
        
        {/* SVG NETWORK CONNECTOR LINES WITH PHYSICAL TRAVELING PARTICLES */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <marker id="goldArrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#C9A84C" />
            </marker>
          </defs>

          {/* Inactive background dashed lines */}
          <line x1="20%" y1="46%" x2="35%" y2="58%" stroke="#C9A84C" strokeWidth="2" strokeOpacity="0.25" strokeDasharray="5 5" />
          <line x1="50%" y1="46%" x2="50%" y2="58%" stroke="#C9A84C" strokeWidth="2" strokeOpacity="0.25" strokeDasharray="5 5" />
          <line x1="80%" y1="46%" x2="65%" y2="58%" stroke="#C9A84C" strokeWidth="2" strokeOpacity="0.25" strokeDasharray="5 5" />

          {/* ACTIVE BRIGHT DOTTED FLOW LINE & ARROWHEAD FOR SELECTED NODE */}
          {activeTrackId === 'native-ai-expert' && (
            <g>
              <line x1="20%" y1="46%" x2="35%" y2="58%" stroke="#C9A84C" strokeWidth="4" strokeDasharray="8 5" className="animate-dash-flow" markerEnd="url(#goldArrow)" />
              <circle r="6" fill="#C9A84C">
                <animate attributeName="cx" values="20%; 35%" dur="0.9s" repeatCount="indefinite" />
                <animate attributeName="cy" values="46%; 58%" dur="0.9s" repeatCount="indefinite" />
              </circle>
            </g>
          )}

          {activeTrackId === 'vibe-coding-developer' && (
            <g>
              <line x1="50%" y1="46%" x2="50%" y2="58%" stroke="#C9A84C" strokeWidth="4" strokeDasharray="8 5" className="animate-dash-flow" markerEnd="url(#goldArrow)" />
              <circle r="6" fill="#C9A84C">
                <animate attributeName="cx" values="50%; 50%" dur="0.9s" repeatCount="indefinite" />
                <animate attributeName="cy" values="46%; 58%" dur="0.9s" repeatCount="indefinite" />
              </circle>
            </g>
          )}

          {activeTrackId === 'agent-builder' && (
            <g>
              <line x1="80%" y1="46%" x2="65%" y2="58%" stroke="#C9A84C" strokeWidth="4" strokeDasharray="8 5" className="animate-dash-flow" markerEnd="url(#goldArrow)" />
              <circle r="6" fill="#C9A84C">
                <animate attributeName="cx" values="80%; 65%" dur="0.9s" repeatCount="indefinite" />
                <animate attributeName="cy" values="46%; 58%" dur="0.9s" repeatCount="indefinite" />
              </circle>
            </g>
          )}
        </svg>

        {/* TOP CENTER HUB NODE */}
        <div className="flex justify-center mb-8 relative z-10">
          <div className="px-5 py-2 rounded-2xl bg-white border border-[#C9A84C]/40 text-[#8B6914] font-bold text-xs tracking-wider uppercase flex items-center gap-2 shadow-sm backdrop-blur-md">
            <span className="w-2.5 h-2.5 rounded-full bg-[#C9A84C] animate-ping" />
            <span>AI Academy Career Core Engine</span>
          </div>
        </div>

        {/* 3 RADIATING SPECIALIZATION ORBIT NODES */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 relative z-10 mb-8">
          {displayTracks.map((track) => {
            const meta = getTrackMeta(track.id);
            const isActive = activeTrackId === track.id;

            return (
              <button
                key={track.id}
                type="button"
                onClick={() => setActiveTrackId(track.id)}
                className={`p-5 sm:p-6 rounded-2xl text-left transition-all duration-300 cursor-pointer relative overflow-hidden flex flex-col justify-between
                  ${isActive 
                    ? 'bg-white border-2 border-[#C9A84C] shadow-xl shadow-[#C9A84C]/20 scale-[1.03] ring-4 ring-[#C9A84C]/15 node-active-pulse' 
                    : 'bg-white/80 backdrop-blur-md border border-slate-200 hover:border-[#C9A84C]/60 hover:bg-white shadow-sm hover:scale-[1.01]'
                  }
                `}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full border ${meta.nodeBg}`}>
                      {meta.badge}
                    </span>
                    {isActive && (
                      <span className="text-xs font-bold text-[#8B6914] flex items-center gap-1 bg-[#C9A84C]/20 px-2.5 py-1 rounded-full border border-[#C9A84C]/40 animate-pulse">
                        Active Node ✦
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-extrabold text-[#1A1A2E] mb-2 font-heading">
                    {track.title}
                  </h3>

                  <p className="text-slate-600 text-xs leading-relaxed line-clamp-3 mb-4">
                    {track.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200/80 flex items-center justify-between">
                  <span className="text-xs font-extrabold text-[#8B6914]">
                    {meta.salary}
                  </span>
                  <div className={`text-xs font-bold flex items-center gap-1.5 px-2.5 py-1 rounded-full ${isActive ? 'bg-[#1A1A2E] text-white' : 'text-slate-500 bg-slate-100'}`}>
                    <span>{isActive ? 'Active Below' : 'Select'}</span>
                    <ChevronDown size={14} className={isActive ? 'animate-bounce text-[#C9A84C]' : ''} />
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* ACTIVE NODE INTERACTIVE SHOWCASE PANEL WITH ANIMATED SLIDE FADE */}
        <div 
          key={activeTrack.id}
          className="relative z-10 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 text-slate-900 shadow-xl animate-panel-slide-in"
        >
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b border-slate-100">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-indigo-50 text-indigo-700 border border-indigo-200">
                  {activeMeta.badge}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-200 flex items-center gap-1">
                  💰 {activeMeta.salary}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1A1A2E] font-heading">
                {activeTrack.title}
              </h3>
              <p className="text-slate-600 text-sm mt-2 max-w-3xl leading-relaxed">
                {activeTrack.description}
              </p>
            </div>

            {/* ACTION BUTTONS */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto shrink-0">
              <button
                type="button"
                onClick={(e) => handleOpenExplore(e, activeTrack)}
                className="px-6 py-3 rounded-xl bg-[#1A1A2E] text-white font-bold text-sm hover:bg-[#C9A84C] hover:text-[#1A1A2E] transition-all duration-200 shadow-md flex items-center justify-center gap-2"
              >
                <Search size={16} />
                <span>Explore Job Roles 🔍</span>
              </button>

              <button
                type="button"
                onClick={(e) => handleOpenBooking(e, activeTrack)}
                className="px-6 py-3 rounded-xl bg-[#C9A84C] text-[#1A1A2E] font-bold text-sm hover:bg-amber-400 transition-all duration-200 shadow-md flex items-center justify-center gap-2"
              >
                <Target size={16} />
                <span>Book 1-on-1 Session 📅</span>
              </button>
            </div>
          </div>

          {/* CONNECTED COMPANIES & REQUIRED SKILLS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
            {/* Key Companies Hiring */}
            <div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">
                Hiring Enterprise Companies:
              </span>
              <div className="flex flex-wrap gap-2">
                {activeTrack.hiringCompanies.split(',').map((company, cIdx) => (
                  <span
                    key={cIdx}
                    className="px-3 py-1 rounded-lg bg-slate-100 text-slate-800 font-semibold text-xs border border-slate-200 hover:bg-slate-200 transition-colors"
                  >
                    🏢 {company.trim()}
                  </span>
                ))}
              </div>
            </div>

            {/* Required Core Skills */}
            <div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">
                Key Skills You Master:
              </span>
              <div className="flex flex-wrap gap-2">
                {activeTrack.keySkills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-3 py-1 rounded-full bg-indigo-50 text-indigo-800 font-semibold text-xs border border-indigo-100"
                  >
                    ✓ {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* POPUP MODALS */}
      {exploringTrack && (
        <ExploreTrackModal
          track={exploringTrack}
          onClose={() => setExploringTrack(null)}
          onBookSession={() => {
            setBookingTrack(exploringTrack);
            setExploringTrack(null);
          }}
        />
      )}

      {bookingTrack && (
        <BookOneOnOneModal
          track={bookingTrack}
          learnerEmail={learnerEmail}
          onClose={() => setBookingTrack(null)}
          onConfirmSession={async (bookingData) => {
            try {
              await academyApi.triggerSyllabusEmail('session_' + Date.now(), bookingTrack.id, {
                email: bookingData.email,
                userName: bookingData.name,
                userPhone: bookingData.phone,
                preferredSlot: bookingData.slot,
                selectedTrackId: bookingTrack.id
              });
            } catch (e) {
              console.warn('Booking session email fallback:', e);
            }
          }}
        />
      )}
    </div>
  );
};
