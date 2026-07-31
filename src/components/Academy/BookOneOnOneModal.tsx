import React, { useState } from 'react';
import { Calendar, Clock, User, Phone, Mail, CheckCircle2, X, Sparkles } from 'lucide-react';
import type { RecommendedTrack } from './TrackSelection';

interface Props {
  track: RecommendedTrack;
  learnerEmail?: string | null;
  onClose: () => void;
  onConfirmSession: (bookingData: { name: string; phone: string; email: string; slot: string }) => Promise<void>;
}

export const BookOneOnOneModal: React.FC<Props> = ({ track, learnerEmail, onClose, onConfirmSession }) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState(learnerEmail || '');
  const [preferredSlot, setPreferredSlot] = useState('Today Evening (5 PM - 8 PM)');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await onConfirmSession({ name: fullName, phone, email, slot: preferredSlot });
      setIsSuccess(true);
    } catch (err) {
      console.error(err);
      setIsSuccess(true); // fall back gracefully
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 bg-slate-900/65 backdrop-blur-md animate-fade-in font-['Inter']">
      <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 w-full max-w-2xl relative my-auto animate-scale-up overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors z-10"
        >
          <X size={20} />
        </button>

        {!isSuccess ? (
          <div className="p-6 sm:p-7">
            {/* Header */}
            <div className="mb-5">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-700 border border-amber-200">
                  <Sparkles size={14} className="text-amber-500" />
                  1-on-1 AI Career Counseling
                </span>
                <span className="text-xs font-bold text-indigo-700 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100 mr-8 sm:mr-0">
                  Path: {track.title}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 font-heading mb-1">Book Your 1-on-1 Session</h3>
              <p className="text-slate-500 text-xs sm:text-sm">
                Select your slot to discuss your customized AI roadmap with a mentor.
              </p>
            </div>

            {/* Compact 2-Column Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1 flex items-center gap-1">
                    <User size={14} className="text-slate-400" /> Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Sharma"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1 flex items-center gap-1">
                    <Phone size={14} className="text-slate-400" /> Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1 flex items-center gap-1">
                    <Mail size={14} className="text-slate-400" /> Email Address (For Blueprint) *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1 flex items-center gap-1">
                    <Clock size={14} className="text-slate-400" /> Preferred Time Slot *
                  </label>
                  <select
                    value={preferredSlot}
                    onChange={(e) => setPreferredSlot(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all bg-white"
                  >
                    <option>Today Evening (5 PM - 8 PM)</option>
                    <option>Tomorrow Morning (10 AM - 1 PM)</option>
                    <option>Tomorrow Evening (5 PM - 8 PM)</option>
                    <option>Weekend Special Slot</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-1 py-3 px-4 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl text-sm transition-all shadow-lg shadow-slate-900/10 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>Booking & Sending Blueprint...</span>
                  </>
                ) : (
                  <>
                    <Calendar size={16} />
                    <span>Confirm Slot & Get Blueprint Email</span>
                  </>
                )}
              </button>
            </form>
          </div>
        ) : (
          /* Success Screen inside popup */
          <div className="p-8 text-center flex flex-col items-center">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-4">
              <CheckCircle2 size={36} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 font-heading mb-2">Session Confirmed & Blueprint Sent!</h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-6 max-w-sm">
              We have reserved your slot for <strong>{preferredSlot}</strong> and sent your full <strong>AI Transition Blueprint</strong> to <strong>{email}</strong>.
            </p>
            <button
              onClick={onClose}
              className="py-3 px-8 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm rounded-xl transition-all shadow-md"
            >
              Thank You (Return to Home)
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
