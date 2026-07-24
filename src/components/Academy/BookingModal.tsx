import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, CheckCircle, Loader2, ChevronLeft, ChevronRight } from 'lucide-react';
import { academyApi } from '../../api/academyApi';
import './BookingModal.css';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  sessionId?: string | null;
  learnerEmail?: string | null;
}

type ModalStep = 'details' | 'slots' | 'confirmed';

interface Slot {
  start: string;
  end: string;
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-IN', {
    weekday: 'short', day: 'numeric', month: 'short'
  });
}

function formatTime(iso: string) {
  return new Date(iso).toLocaleTimeString('en-IN', {
    hour: '2-digit', minute: '2-digit', hour12: true, timeZone: 'Asia/Kolkata'
  });
}

function getDateRange(offsetDays: number) {
  const from = new Date();
  from.setDate(from.getDate() + offsetDays);
  const to = new Date(from);
  to.setDate(to.getDate() + 6);
  const fmt = (d: Date) => d.toISOString().split('T')[0];
  return { from: fmt(from), to: fmt(to) };
}

export const BookingModal: React.FC<Props> = ({ isOpen, onClose, sessionId, learnerEmail }) => {
  const [step, setStep] = useState<ModalStep>('details');
  const [name, setName] = useState('');
  const [email, setEmail] = useState(learnerEmail || '');
  const [notes, setNotes] = useState('');
  const [slots, setSlots] = useState<Slot[]>([]);
  const [selectedSlot, setSelectedSlot] = useState<Slot | null>(null);
  const [loadingSlots, setLoadingSlots] = useState(false);
  const [booking, setBooking] = useState(false);
  const [confirmedUrl, setConfirmedUrl] = useState('');
  const [confirmedTime, setConfirmedTime] = useState('');
  const [error, setError] = useState('');
  const [weekOffset, setWeekOffset] = useState(1); // start from tomorrow's week

  useEffect(() => {
    if (learnerEmail) setEmail(learnerEmail);
  }, [learnerEmail]);

  useEffect(() => {
    if (!isOpen) {
      // Reset on close
      setStep('details');
      setSelectedSlot(null);
      setError('');
      setSlots([]);
    }
  }, [isOpen]);

  const fetchSlots = async (offset: number) => {
    setLoadingSlots(true);
    setError('');
    try {
      const { from, to } = getDateRange(offset);
      const data = await academyApi.getMentorAvailability(from, to);
      setSlots(data.slots);
      if (data.slots.length === 0) setError('No slots available this week. Try next week.');
    } catch {
      setError('Could not load available slots. Please try again.');
    } finally {
      setLoadingSlots(false);
    }
  };

  const handleDetailsNext = async () => {
    if (!name.trim() || !email.trim()) {
      setError('Please fill in your name and email.');
      return;
    }
    setError('');
    setStep('slots');
    await fetchSlots(weekOffset);
  };

  const handleWeekChange = async (dir: number) => {
    const newOffset = weekOffset + dir * 7;
    setWeekOffset(newOffset);
    setSelectedSlot(null);
    await fetchSlots(newOffset);
  };

  const handleConfirm = async () => {
    if (!selectedSlot) return;
    setBooking(true);
    setError('');
    try {
      const result = await academyApi.bookMentorSession({
        learner_name: name,
        learner_email: email,
        learner_notes: notes,
        start_time: selectedSlot.start,
        session_id: sessionId || undefined,
      });
      setConfirmedUrl(result.teams_meeting_url);
      setConfirmedTime(result.start_time);
      setStep('confirmed');
    } catch (e: any) {
      setError(e.message || 'Booking failed. Please try again.');
    } finally {
      setBooking(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="bm-overlay" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="bm-modal">

        {/* Close */}
        <button className="bm-close" onClick={onClose}><X size={20} /></button>

        {/* ── STEP 1: Details ── */}
        {step === 'details' && (
          <div className="bm-body">
            <div className="bm-icon-wrap">
              <Calendar size={28} className="bm-icon" />
            </div>
            <h2 className="bm-title">Book a 1-on-1 Session</h2>
            <p className="bm-subtitle">45 minutes · Free · Microsoft Teams</p>

            <div className="bm-fields">
              <div className="bm-field">
                <label>Your Name</label>
                <input
                  type="text"
                  placeholder="Full name"
                  value={name}
                  onChange={e => setName(e.target.value)}
                />
              </div>
              <div className="bm-field">
                <label>Your Email</label>
                <input
                  type="email"
                  placeholder="you@email.com"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </div>
              <div className="bm-field">
                <label>What do you want to discuss? <span className="bm-optional">(optional)</span></label>
                <textarea
                  placeholder="e.g. I want guidance on transitioning from QA to AI Engineering..."
                  value={notes}
                  onChange={e => setNotes(e.target.value)}
                  rows={3}
                />
              </div>
            </div>

            {error && <p className="bm-error">{error}</p>}

            <button className="bm-btn-primary" onClick={handleDetailsNext}>
              Choose a Time Slot →
            </button>
          </div>
        )}

        {/* ── STEP 2: Slot Picker ── */}
        {step === 'slots' && (
          <div className="bm-body">
            <button className="bm-back" onClick={() => setStep('details')}>
              <ChevronLeft size={16} /> Back
            </button>
            <h2 className="bm-title">Pick a Time</h2>
            <p className="bm-subtitle">All times shown in IST (India Standard Time)</p>

            <div className="bm-week-nav">
              <button onClick={() => handleWeekChange(-1)} disabled={weekOffset <= 1}>
                <ChevronLeft size={18} />
              </button>
              <span>
                {(() => { const { from, to } = getDateRange(weekOffset); return `${formatDate(from + 'T00:00:00')} – ${formatDate(to + 'T00:00:00')}`; })()}
              </span>
              <button onClick={() => handleWeekChange(1)}>
                <ChevronRight size={18} />
              </button>
            </div>

            {loadingSlots ? (
              <div className="bm-loading">
                <Loader2 size={28} className="bm-spin" />
                <p>Loading available slots...</p>
              </div>
            ) : error ? (
              <div className="bm-empty">
                <p>{error}</p>
                <button className="bm-btn-ghost" onClick={() => handleWeekChange(1)}>Try Next Week</button>
              </div>
            ) : slots.length === 0 ? (
              <div className="bm-empty">
                <p>No slots available this week.</p>
                <button className="bm-btn-ghost" onClick={() => handleWeekChange(1)}>Try Next Week</button>
              </div>
            ) : (
              <div className="bm-slots">
                {slots.map((slot, i) => (
                  <button
                    key={i}
                    className={`bm-slot ${selectedSlot?.start === slot.start ? 'bm-slot--selected' : ''}`}
                    onClick={() => setSelectedSlot(slot)}
                  >
                    <span className="bm-slot-date">{formatDate(slot.start)}</span>
                    <span className="bm-slot-time">
                      <Clock size={13} /> {formatTime(slot.start)} – {formatTime(slot.end)}
                    </span>
                  </button>
                ))}
              </div>
            )}

            {error && !loadingSlots && <p className="bm-error">{error}</p>}

            <button
              className="bm-btn-primary"
              onClick={handleConfirm}
              disabled={!selectedSlot || booking}
            >
              {booking ? (
                <><Loader2 size={18} className="bm-spin" /> Booking...</>
              ) : 'Confirm Booking →'}
            </button>
          </div>
        )}

        {/* ── STEP 3: Confirmed ── */}
        {step === 'confirmed' && (
          <div className="bm-body bm-confirmed">
            <div className="bm-success-icon">
              <CheckCircle size={48} />
            </div>
            <h2 className="bm-title">You're Booked! 🎉</h2>
            <p className="bm-subtitle">
              Your session is confirmed for <strong>{formatDate(confirmedTime)} at {formatTime(confirmedTime)} IST</strong>.<br />
              A confirmation email with the Teams link has been sent to <strong>{email}</strong>.
            </p>

            {confirmedUrl && (
              <a
                href={confirmedUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bm-btn-primary bm-teams-link"
              >
                Join Teams Meeting
              </a>
            )}

            <button className="bm-btn-ghost" onClick={onClose}>Close</button>
          </div>
        )}

      </div>
    </div>
  );
};
