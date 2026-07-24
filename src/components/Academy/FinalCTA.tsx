import React from 'react';
import { MailCheck, Calendar, ArrowRight, ShieldCheck } from 'lucide-react';

export const FinalCTA: React.FC = () => {
  const handleBooking = () => {
    // Placeholder for Calendly or other booking system
    window.alert("This will open the Calendly booking widget!");
  };

  return (
    <div className="w-full min-h-[90vh] bg-slate-950 font-['Inter'] opacity-0 animate-slide-up-fade overflow-hidden pb-20 flex flex-col items-center justify-center pt-24">
      
      {/* Dynamic Background Glows */}
      <div className="fixed top-[-20%] left-[-10%] w-[50%] h-[50%] bg-indigo-600/10 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="fixed bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-emerald-600/10 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="w-full max-w-3xl mx-auto px-6 relative z-10 text-center flex flex-col items-center">
        
        {/* Success Icon */}
        <div className="w-20 h-20 bg-emerald-500/10 rounded-full border border-emerald-500/30 flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(16,185,129,0.2)]">
          <MailCheck size={36} className="text-emerald-400" />
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl md:text-5xl font-bold !text-white tracking-tight font-heading mb-6">
          Your Transition Strategy is Ready.
        </h1>
        
        <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto mb-12">
          We have successfully mapped out your personalized roadmap. The complete 6-week curriculum, project requirements, and pricing details have just been sent to your inbox.
        </p>

        {/* Action Card */}
        <div className="w-full bg-slate-900/80 backdrop-blur-md border border-slate-700/80 rounded-3xl p-8 md:p-12 shadow-2xl transition-all hover:border-indigo-500/30 hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)]">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-indigo-500/10 rounded-2xl border border-indigo-500/20 flex items-center justify-center">
              <Calendar size={32} className="text-indigo-400" />
            </div>
          </div>
          
          <h2 className="text-2xl font-bold !text-white font-heading mb-4">
            Got doubts about how this fits your specific background?
          </h2>
          
          <p className="text-slate-400 text-[1.05rem] leading-relaxed mb-8 max-w-lg mx-auto">
            Making a career transition is a big decision. Book a free 1-on-1 discovery session with our technical advisors to review your background and ensure this is the right path for you.
          </p>

          <button 
            onClick={handleBooking}
            className="w-full md:w-auto inline-flex items-center justify-center gap-3 bg-indigo-600 text-white font-bold text-lg py-4 px-8 rounded-xl hover:bg-indigo-500 transition-all shadow-[0_0_20px_rgba(99,102,241,0.4)] hover:shadow-[0_0_30px_rgba(99,102,241,0.6)] group"
          >
            Book your 1-on-1 session
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
          
          <div className="mt-6 flex items-center justify-center gap-2 text-sm text-slate-500">
            <ShieldCheck size={16} className="text-emerald-500/70" />
            <span>No pressure. No commitment. Just clarity.</span>
          </div>
        </div>

      </div>
    </div>
  );
};
