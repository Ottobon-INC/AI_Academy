import React from 'react';
import './V2Section1Hero.css';
import V2SectionLogos from './V2SectionLogos';

interface V2Section1HeroProps {
  onStart: () => void;
}

const V2Section1Hero: React.FC<V2Section1HeroProps> = ({ onStart }) => {
  const scrollToTracks = () => {
    const tracksSection = document.getElementById('ai-tracks');
    if (tracksSection) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = tracksSection.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="v2-hero-section">
      {/* AMBIENT LUXURY GLOW */}
      <div className="v2-hero-ambient-glow">
        <div className="v2-glow-spot v2-glow-gold" />
        <div className="v2-glow-spot v2-glow-cream" />
      </div>

      <div className="v2-hero-container max-w-[1240px] mx-auto px-6 pt-24 pb-12">
        {/* TOP HERO CONTENT */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#C9A84C]/10 text-[#C9A84C] border border-[#C9A84C]/25 mb-4 shadow-sm">
            <span>✦</span>
            <span>Adaptive AI Career Gateway</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#1A1A2E] tracking-tight font-heading leading-tight mb-5">
            Step Into Your High-Paying <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9A84C] via-[#B38F36] to-[#997321]">
              AI Career.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed mb-8">
            Our adaptive diagnostic skips what you already know and maps your direct path into real-world AI roles — with zero fluff.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <button 
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#1A1A2E] text-white font-bold text-base hover:bg-[#C9A84C] hover:text-[#1A1A2E] transition-all duration-300 shadow-lg shadow-[#1A1A2E]/15 hover:-translate-y-0.5"
              onClick={onStart}
            >
              Find Your AI Career Path →
            </button>
            <button 
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-white text-[#1A1A2E] font-bold text-base border border-slate-200 hover:border-[#C9A84C] hover:bg-slate-50 transition-all duration-300 shadow-sm"
              onClick={scrollToTracks}
            >
              Explore 3 Specialization Tracks 🔍
            </button>
          </div>

          {/* PROOF STATS STRIP */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm font-bold text-[#1A1A2E] border-y border-slate-300/80 py-3.5">
            <div className="flex items-center gap-1.5">
              <span className="text-amber-500">⭐</span>
              <span className="text-[#1A1A2E] font-bold">4.8/5 Rated Program</span>
            </div>
            <span className="text-slate-400 hidden sm:inline">•</span>
            <div className="flex items-center gap-1.5">
              <span className="text-amber-500">🎓</span>
              <span className="text-[#1A1A2E] font-bold">5,000+ Career Transitions</span>
            </div>
            <span className="text-slate-400 hidden sm:inline">•</span>
            <div className="flex items-center gap-1.5">
              <span className="text-amber-500">💼</span>
              <span className="text-[#1A1A2E] font-bold">85% Landed AI Roles</span>
            </div>
          </div>
        </div>

        {/* ELEGANT EXECUTIVE GATEWAY BANNER CARD */}
        <div className="relative w-full rounded-2xl p-6 sm:p-8 border border-[#C9A84C]/40 bg-gradient-to-r from-[#141426] via-[#1E1E36] to-[#141426] shadow-2xl text-white mb-8 overflow-hidden">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-[#C9A84C]/15 blur-3xl pointer-events-none" />
          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-left">
              <span className="text-xs font-extrabold uppercase tracking-wider block mb-1.5" style={{ color: '#F3C64F' }}>
                ✦ 3 Outcome-Driven AI Specializations
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold font-heading mb-1" style={{ color: '#FFFFFF' }}>
                Native AI Expert • Vibe Coding Developer • Agent Builder
              </h3>
              <p className="text-xs sm:text-sm mt-1 max-w-xl font-medium" style={{ color: '#E2DCD2' }}>
                Average salary ranges from $130,000 to $220,000 / yr across premier AI employers.
              </p>
            </div>
            <button 
              onClick={onStart}
              className="px-6 py-3.5 rounded-xl bg-[#C9A84C] text-[#1A1A2E] font-bold text-sm whitespace-nowrap hover:bg-white transition-all shadow-lg shadow-[#C9A84C]/20 hover:-translate-y-0.5 shrink-0"
            >
              Start Free Assessment →
            </button>
          </div>
        </div>
      </div>

      {/* MOVING LOGO BANNER */}
      <V2SectionLogos />
    </section>
  );
};

export default V2Section1Hero;
