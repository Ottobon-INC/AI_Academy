import React, { useState } from 'react';
import { Send } from 'lucide-react';
import type { QuestionMetadata } from '../../../types/academy';

interface Props {
  metadata?: QuestionMetadata;
  onSubmit: (answer: string) => void;
  disabled?: boolean;
}

export const DynamicQuestionInput: React.FC<Props> = ({ metadata, onSubmit, disabled }) => {
  const [textValue, setTextValue] = useState('');
  const [selectedMulti, setSelectedMulti] = useState<string[]>([]);
  const [showOtherInput, setShowOtherInput] = useState(false);

  // If no metadata, fallback to a standard text input
  const type = metadata?.type || 'text';
  let options: string[] = [];
  if (Array.isArray(metadata?.options)) {
    options = metadata.options;
  } else if (typeof metadata?.options === 'string' && (metadata.options as any).trim()) {
    options = (metadata.options as any).split(',').map((o: string) => o.trim());
  }
  const allowOther = metadata?.allowOther || false;

  const handleSingleSelect = (option: string) => {
    if (option === 'Other') {
      setShowOtherInput(true);
    } else {
      onSubmit(option);
    }
  };

  const toggleMultiSelect = (option: string) => {
    if (option === 'Other') {
      setShowOtherInput(true);
      return;
    }
    
    setSelectedMulti(prev => 
      prev.includes(option) 
        ? prev.filter(o => o !== option)
        : [...prev, option]
    );
  };

  const submitMultiSelect = () => {
    if (selectedMulti.length > 0) {
      onSubmit(selectedMulti.join(', '));
    }
  };

  const submitText = (e: React.FormEvent) => {
    e.preventDefault();
    if (textValue.trim()) {
      onSubmit(textValue.trim());
      setTextValue('');
      setShowOtherInput(false);
    }
  };

  if (type === 'single-select' && !showOtherInput) {
    return (
      <div className="flex flex-wrap gap-3 mt-4 opacity-0 animate-slide-up-fade">
        {options.map((opt, idx) => (
          <button 
            type="button"
            key={idx} 
            className="bg-[var(--surface-color)] border border-[var(--border-color)] rounded-lg py-2.5 px-5 transition-all duration-200 text-[var(--text-primary)] font-medium cursor-pointer hover:not(:disabled):bg-[var(--accent-color)] hover:not(:disabled):border-[var(--accent-color)] hover:not(:disabled):text-[#FAF7F2] hover:not(:disabled):scale-105 hover:not(:disabled):shadow-md active:not(:disabled):scale-95 disabled:opacity-50" 
            onClick={() => handleSingleSelect(opt)}
            disabled={disabled}
          >
            {opt}
          </button>
        ))}
        {allowOther && (
          <button 
            type="button"
            className="bg-transparent border border-dashed border-[var(--border-color)] rounded-lg py-2.5 px-5 transition-all duration-200 text-[var(--text-secondary)] font-medium cursor-pointer hover:not(:disabled):bg-[var(--bg-secondary)] hover:not(:disabled):border-[var(--accent-color)] hover:not(:disabled):text-[var(--text-primary)] hover:not(:disabled):scale-105 hover:not(:disabled):shadow-md active:not(:disabled):scale-95 disabled:opacity-50" 
            onClick={() => handleSingleSelect('Other')}
            disabled={disabled}
          >
            Other
          </button>
        )}
      </div>
    );
  }

  if (type === 'multi-select' && !showOtherInput) {
    return (
      <div className="flex flex-col items-start gap-4 mt-4 opacity-0 animate-slide-up-fade">
        <div className="flex flex-wrap gap-2.5">
          {options.map((opt, idx) => (
            <button 
              type="button"
              key={idx} 
              className={`border rounded-lg py-2 px-4 transition-all duration-200 text-[0.95rem] cursor-pointer hover:not(:disabled):scale-105 hover:not(:disabled):shadow-md active:not(:disabled):scale-95 disabled:opacity-50 ${
                selectedMulti.includes(opt) 
                  ? 'bg-[var(--accent-surface)] border-[var(--accent-color)] text-[var(--accent-color)] font-medium' 
                  : 'bg-[var(--surface-color)] border-[var(--border-color)] text-[var(--text-primary)] hover:not(:disabled):border-[var(--accent-color)]'
              }`}
              onClick={() => toggleMultiSelect(opt)}
              disabled={disabled}
            >
              {opt}
            </button>
          ))}
          {allowOther && (
            <button 
              type="button"
              className="bg-transparent border border-dashed border-[var(--border-color)] rounded-lg py-2 px-4 transition-all duration-200 text-[0.95rem] text-[var(--text-secondary)] cursor-pointer hover:not(:disabled):border-[var(--accent-color)] hover:not(:disabled):scale-105 hover:not(:disabled):shadow-md active:not(:disabled):scale-95 disabled:opacity-50" 
              onClick={() => toggleMultiSelect('Other')}
              disabled={disabled}
            >
              Other
            </button>
          )}
        </div>
        {selectedMulti.length > 0 && (
          <button 
            type="button" 
            className="self-end bg-[var(--accent-color)] text-[#FAF7F2] font-semibold py-2.5 px-5 rounded-lg border border-[var(--accent-color)] hover:bg-[var(--accent-hover)] transition-all shadow-md shadow-[var(--accent-color)]/20" 
            onClick={submitMultiSelect}
          >
            Submit Selected
          </button>
        )}
      </div>
    );
  }

  if (type === 'textarea') {
    return (
      <form className="flex gap-3 mt-4 items-end opacity-0 animate-slide-up-fade w-full" onSubmit={submitText}>
        <textarea 
          className="resize-none rounded-lg w-full bg-[var(--bg-primary)] border border-[var(--border-color)] px-4 py-3 text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-color)] focus:ring-[3px] focus:ring-[var(--accent-color)]/20 transition-all disabled:opacity-50 placeholder-[var(--text-tertiary)]" 
          value={textValue}
          onChange={e => setTextValue(e.target.value)}
          placeholder={metadata?.placeholder || "Type your answer..."}
          disabled={disabled}
          rows={3}
        />
        <button 
          type="submit" 
          className="flex items-center justify-center p-3 rounded-lg aspect-square bg-[var(--accent-color)] text-[#FAF7F2] hover:bg-[var(--accent-hover)] transition-all disabled:opacity-50 disabled:hover:bg-[var(--accent-color)]" 
          disabled={!textValue.trim() || disabled}
        >
          <Send size={18} />
        </button>
      </form>
    );
  }

  // Fallback / Text input / "Other" input
  return (
    <form className="flex gap-3 mt-4 items-end opacity-0 animate-slide-up-fade w-full" onSubmit={submitText}>
      <input 
        type="text" 
        className="rounded-lg w-full bg-[var(--bg-primary)] border border-[var(--border-color)] px-4 py-3 text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-color)] focus:ring-[3px] focus:ring-[var(--accent-color)]/20 transition-all disabled:opacity-50 placeholder-[var(--text-tertiary)]" 
        value={textValue}
        onChange={e => setTextValue(e.target.value)}
        placeholder={metadata?.placeholder || (showOtherInput ? "Please specify..." : "Type your answer...")}
        disabled={disabled}
        autoFocus={showOtherInput}
      />
      <button 
        type="submit" 
        className="flex items-center justify-center p-3 rounded-lg aspect-square bg-[var(--accent-color)] text-[#FAF7F2] hover:bg-[var(--accent-hover)] transition-all disabled:opacity-50 disabled:hover:bg-[var(--accent-color)]" 
        disabled={!textValue.trim() || disabled}
      >
        <Send size={18} />
      </button>
      {showOtherInput && (
        <button 
          type="button" 
          className="px-5 py-3 border-transparent hover:bg-[var(--bg-secondary)] transition-all rounded-lg text-[var(--text-secondary)] font-medium" 
          onClick={() => setShowOtherInput(false)}
        >
          Cancel
        </button>
      )}
    </form>
  );
};
