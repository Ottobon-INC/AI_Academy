import React, { useState } from 'react';
import { academyApi } from '../../api/academyApi';
import './OtpModal.css';

interface Props {
  onVerified: (sessionId: string, finalReportData?: any) => void;
  onCancel: () => void;
}

export const OtpModal: React.FC<Props> = ({ onVerified, onCancel }) => {
  const [email, setEmail] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otpCode, setOtpCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSendOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    setError(null);
    try {
      await academyApi.sendOtp(email);
      setOtpSent(true);
    } catch (err: any) {
      setError(err.message || 'Failed to send OTP');
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!otpCode) return;
    setLoading(true);
    setError(null);
    try {
      const res = await academyApi.verifyOtp(email, otpCode);
      onVerified(res.session_id, res.final_report_data);
    } catch (err: any) {
      setError(err.message || 'Invalid OTP');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="otp-modal-overlay fade-in">
      <div className="otp-modal-content glass-panel">
        <h2>Verify Your Email</h2>
        <p>Before we start the assessment, please verify your email address.</p>
        
        {error && <div className="otp-error">{error}</div>}

        {!otpSent ? (
          <form onSubmit={handleSendOtp} className="otp-form">
            <input 
              type="email" 
              placeholder="Enter your email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={loading}
              className="otp-input"
            />
            <div className="otp-actions">
              <button type="button" onClick={onCancel} className="btn btn-secondary" disabled={loading}>Cancel</button>
              <button type="submit" className="btn btn-primary" disabled={loading}>
                {loading ? 'Sending...' : 'Send OTP'}
              </button>
            </div>
          </form>
        ) : (
          <form onSubmit={handleVerifyOtp} className="otp-form">
            <p className="otp-sent-msg">OTP sent to <strong>{email}</strong></p>
            <input 
              type="text" 
              placeholder="Enter 6-digit OTP" 
              value={otpCode}
              onChange={(e) => setOtpCode(e.target.value)}
              required
              disabled={loading}
              className="otp-input"
              maxLength={6}
            />
            <div className="otp-actions">
              <button type="button" onClick={() => setOtpSent(false)} className="btn btn-secondary" disabled={loading}>Change Email</button>
              <button type="submit" className="btn btn-primary" disabled={loading}>
                {loading ? 'Verifying...' : 'Verify & Start'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
