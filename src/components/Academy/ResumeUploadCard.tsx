import React, { useState } from 'react';
import { UploadCloud, ArrowRight, FileText } from 'lucide-react';
import { academyApi } from '../../api/academyApi';

interface Props {
  onNext: (resumeText?: string) => void;
}

export const ResumeUploadCard: React.FC<Props> = ({ onNext }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [profileUrl, setProfileUrl] = useState('');
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      await processFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      await processFile(e.target.files[0]);
    }
  };

  const processFile = async (file: File) => {
    setIsUploading(true);
    setErrorMsg(null);
    try {
      const result = await academyApi.parseResume(file);
      setIsUploading(false);
      onNext(result.text);
    } catch (e: any) {
      setIsUploading(false);
      setErrorMsg(e.message || "Failed to analyze document. Please try again.");
    }
  };

  const handleUrlSubmit = () => {
    if (!profileUrl.trim()) return;
    setIsUploading(true);
    // Simulate analyzing the URL
    setTimeout(() => {
      setIsUploading(false);
      onNext(`Profile URL: ${profileUrl}`);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-[var(--bg-primary)] text-[var(--text-primary)] fade-in font-['Inter']">
      <div className="max-w-2xl w-full bg-[var(--surface-color)] backdrop-blur-xl border border-[var(--border-color)] rounded-2xl p-6 md:p-8 shadow-2xl relative overflow-hidden">
        {/* Glow Effect */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#C9A84C]/20 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#1A1A2E]/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="relative z-10 text-center mb-6">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[var(--accent-surface)] text-[var(--accent-color)] mb-3 border border-[var(--accent-color)]/20">
            <FileText size={24} />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-2 tracking-tight">AI Background Analysis</h2>
          <p className="text-[var(--text-secondary)] text-base max-w-lg mx-auto leading-relaxed">
            Upload your resume to instantly personalize your assessment and receive targeted career recommendations.
          </p>
        </div>
        
        <label 
          className={`relative flex flex-col items-center justify-center w-full min-h-[200px] p-6 border-2 border-dashed rounded-xl transition-all duration-300 cursor-pointer group ${
            isDragging 
              ? 'border-[var(--accent-color)] bg-[var(--accent-surface)] scale-[1.02]' 
              : isUploading 
                ? 'border-[var(--border-color)] bg-black/5 cursor-wait' 
                : 'border-[var(--border-color)] hover:border-[var(--accent-color)]/50 hover:bg-black/5'
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          {isUploading ? (
            <div className="flex flex-col items-center justify-center animate-pulse">
              <div className="w-12 h-12 border-4 border-[var(--border-color)] border-t-[var(--accent-color)] rounded-full animate-spin mb-6"></div>
              <p className="text-[var(--accent-color)] font-medium text-lg">Analyzing your background...</p>
            </div>
          ) : (
            <div className="flex flex-col items-center text-center">
              <div className="p-3 bg-[var(--bg-primary)] rounded-full mb-4 group-hover:scale-110 transition-transform duration-300 border border-[var(--border-color)]">
                <UploadCloud size={32} className="text-[var(--text-secondary)] group-hover:text-[var(--accent-color)] transition-colors" />
              </div>
              <p className="text-lg font-semibold text-[var(--text-primary)] mb-1">Drag & drop your resume</p>
              <p className="text-[var(--text-tertiary)] text-sm mb-5">Supported formats: PDF, DOCX (Max 5MB)</p>
              <div className="px-5 py-2.5 bg-[var(--accent-color)] hover:bg-[var(--accent-hover)] text-[#FAF7F2] rounded-lg font-medium transition-all duration-300 shadow-lg shadow-[#C9A84C]/25">
                Browse Files
                <input type="file" hidden accept=".pdf,.doc,.docx,.txt" onChange={handleFileChange} />
              </div>
              {errorMsg && (
                <div className="mt-6 px-4 py-3 bg-red-50 border border-red-200 text-red-600 text-sm font-medium rounded-lg">
                  {errorMsg}
                </div>
              )}
            </div>
          )}
        </label>

        <div className="relative my-6 flex items-center justify-center">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-[var(--border-color)]"></div>
          </div>
          <span className="relative px-4 bg-transparent text-[var(--text-secondary)] text-sm font-medium">
            <span className="bg-[var(--surface-color)] px-4 rounded-full">OR</span>
          </span>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <input 
            type="url" 
            className="flex-1 bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-lg px-4 py-2.5 text-[var(--text-primary)] placeholder-[var(--text-tertiary)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)]/50 transition-all text-sm" 
            placeholder="Paste LinkedIn or Portfolio URL..."
            value={profileUrl}
            onChange={(e) => setProfileUrl(e.target.value)}
            disabled={isUploading}
          />
          <button 
            className="px-6 py-2.5 bg-[var(--bg-secondary)] hover:bg-white border border-[var(--border-color)] text-[var(--text-primary)] rounded-lg font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
            onClick={handleUrlSubmit}
            disabled={!profileUrl.trim() || isUploading}
          >
            Analyze URL
          </button>
        </div>

        <div className="mt-6 flex justify-center">
          <button 
            className="group flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] font-medium transition-colors text-sm" 
            onClick={() => onNext()} 
            disabled={isUploading}
          >
            Skip this step 
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};
