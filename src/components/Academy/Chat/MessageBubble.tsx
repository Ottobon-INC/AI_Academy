import React from 'react';
import { Bot, User } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import type { ChatMessage } from '../../../types/academy';

interface Props {
  message: ChatMessage;
}

export const MessageBubble: React.FC<Props> = ({ message }) => {
  const isAI = message.role === 'assistant' || message.role === 'system';

  return (
    <div
      className={`flex gap-3 md:gap-4 w-full mb-6 opacity-0 animate-slide-up-fade ${
        isAI ? 'flex-row' : 'flex-row-reverse'
      }`}
    >
      <div
        className={`w-8 h-8 md:w-10 md:h-10 mt-1 rounded-full flex items-center justify-center shrink-0 shadow-sm border ${
          isAI
            ? 'bg-[var(--surface-color)] text-[var(--accent-color)] border-[var(--border-color)]'
            : 'bg-[var(--accent-color)] text-[#FAF7F2] border-[var(--accent-color)]'
        }`}
      >
        {isAI ? <Bot size={20} /> : <User size={20} />}
      </div>
      <div
        className={`flex flex-col max-w-[85%] ${
          isAI ? 'items-start' : 'items-end'
        }`}
      >
        <div className="text-xs md:text-sm text-[var(--text-secondary)] mb-1 font-medium tracking-wide">
          {isAI ? 'Ottobon AI' : 'You'}
        </div>
        <div
          className={`px-4 py-3 md:px-5 md:py-4 shadow-sm text-[0.95rem] leading-relaxed rounded-2xl ${
            isAI
              ? 'bg-[var(--surface-color)] border border-[var(--border-color)] rounded-tl-sm text-[var(--text-primary)]'
              : 'bg-[var(--accent-color)] text-[#FAF7F2] border border-[var(--accent-color)] rounded-tr-sm whitespace-pre-wrap'
          }`}
        >
          {isAI ? (
            <div className="prose prose-slate prose-p:my-2 prose-ul:my-2 prose-li:my-0.5 max-w-none">
              <ReactMarkdown>{message.content}</ReactMarkdown>
            </div>
          ) : (
            message.content
          )}
        </div>
      </div>
    </div>
  );
};
