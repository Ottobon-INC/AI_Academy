import React, { useEffect, useRef, useState } from 'react';
import type { ChatMessage } from '../../../types/academy';
import { academyApi } from '../../../api/academyApi';
import { MessageBubble } from './MessageBubble';
import { DynamicQuestionInput } from './DynamicQuestionInput';
import type { RecommendedTrack } from '../TrackSelection';
import { 
  PROFESSION_CONTEXTS, 
  EXPERIENCE_CONTEXTS, 
  TECHNOLOGY_CONTEXTS, 
  PROJECT_TYPE_CONTEXTS, 
  AI_USAGE_CONTEXTS, 
  AI_TOOLS_CONTEXTS 
} from '../../../constants/assessmentContexts';

interface Props {
  sessionId: string;
  initialResumeText?: string;
  onTracksGenerated: (tracks: RecommendedTrack[], chatData: any) => void;
}

export const AssessmentChat: React.FC<Props> = ({ sessionId, initialResumeText, onTracksGenerated }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const endOfMessagesRef = useRef<HTMLDivElement>(null);

  const [recommendedTracks, setRecommendedTracks] = useState<RecommendedTrack[] | null>(null);
  const hasStartedRef = useRef(false);

  useEffect(() => {
    if (hasStartedRef.current) return;
    hasStartedRef.current = true;

    // Initial fetch to start the conversation
    const startConversation = async () => {
      setIsLoading(true);
      const initialMessages: ChatMessage[] = [];
      if (initialResumeText) {
        initialMessages.push({
          role: 'system',
          content: `Resume:\n${initialResumeText}`
        });
      }
      
      const response = await academyApi.sendChatMessage(sessionId, initialMessages);
      handleBackendResponse(response);
    };

    startConversation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleBackendResponse = (response: any) => {
    setIsLoading(false);
    
    if (response.recommendedTracks) {
      setRecommendedTracks(response.recommendedTracks);
    }

const inferMetadata = (message: string, backendMeta: any) => {
  // If backend provided valid options array with items, use it
  if (backendMeta?.options && Array.isArray(backendMeta.options) && backendMeta.options.length > 0) {
    return backendMeta;
  }

  const msgLower = message.toLowerCase();
  
  // Use stricter regex to match the actual question at the end of the message
  if (/(which|what).*(profession|role)/i.test(msgLower) && msgLower.includes('best describes')) {
    return { type: 'single-select', options: ["Oracle Professional", "Salesforce Professional", "Software Developer", "QA Engineer", "Project Manager", "Business Analyst"], allowOther: true };
  }
  if (/(how many years|what is your).*experience/i.test(msgLower)) {
    return { type: 'single-select', options: ["0-2", "3-5", "5-8", "8+"], allowOther: true };
  }
  if (/(which|what) technologies/i.test(msgLower)) {
    return { type: 'multi-select', options: ["Java", ".NET", "Python", "Node", "React", "Angular"], allowOther: true };
  }
  if (/(what kind of|which).*projects/i.test(msgLower)) {
    return { type: 'single-select', options: ["Enterprise Apps", "CRM", "ERP", "Cloud", "Embedded", "Data"], allowOther: true };
  }
  if (/how often.*use ai/i.test(msgLower)) {
    return { type: 'single-select', options: ["Never", "Sometimes", "Daily", "Every Task"], allowOther: false };
  }
  if (/(which|what) ai tools/i.test(msgLower)) {
    return { type: 'multi-select', options: ["ChatGPT", "Claude", "Gemini", "Cursor", "GitHub Copilot", "None"], allowOther: true };
  }

  // Default to what backend provided or text
  return {
    type: backendMeta?.type || 'textarea',
    options: [],
    allowMultiple: backendMeta?.allowMultiple || false,
    allowOther: backendMeta?.allowOther || false,
    placeholder: backendMeta?.placeholder || "Type your answer..."
  };
};

    if (response.message) {
      setMessages(prev => [
        ...prev,
        {
          role: 'assistant',
          content: response.message,
          metadata: inferMetadata(response.message, response.metadata || {
            type: response.type,
            options: response.options,
            allowMultiple: response.allowMultiple,
            allowOther: response.allowOther,
            placeholder: response.placeholder
          })
        }
      ]);
    }
  };

  const handleUserSubmit = async (answer: string) => {
    try {
      const lastMsg = messages[messages.length - 1];
      let contextData: any = undefined;

      if (lastMsg && lastMsg.role === 'assistant') {
        const msgLower = lastMsg.content.toLowerCase();
        
        if (/(which|what).*(profession|role)/i.test(msgLower) && msgLower.includes('best describes')) {
          if (PROFESSION_CONTEXTS[answer]) {
            contextData = { selected: answer, context: PROFESSION_CONTEXTS[answer] };
          }
        } else if (/(how many years|what is your).*experience/i.test(msgLower)) {
          if (EXPERIENCE_CONTEXTS[answer]) {
            contextData = { selected: answer, context: EXPERIENCE_CONTEXTS[answer] };
          }
        } else if (/(which|what) technologies/i.test(msgLower)) {
          const selectedTechs = answer.split(',').map(s => s.trim());
          contextData = selectedTechs.map(tech => 
            TECHNOLOGY_CONTEXTS[tech] 
              ? { selected: tech, context: TECHNOLOGY_CONTEXTS[tech] } 
              : { selected: tech }
          );
        } else if (/(what kind of|which).*projects/i.test(msgLower)) {
          const selectedProjects = answer.split(',').map(s => s.trim());
          contextData = selectedProjects.map(proj => 
            PROJECT_TYPE_CONTEXTS[proj] 
              ? { selected: proj, context: PROJECT_TYPE_CONTEXTS[proj] } 
              : { selected: proj }
          );
        } else if (/how often.*use ai/i.test(msgLower)) {
          if (AI_USAGE_CONTEXTS[answer]) {
            contextData = { selected: answer, context: AI_USAGE_CONTEXTS[answer] };
          }
        } else if (/(which|what) ai tools/i.test(msgLower)) {
          const selectedTools = answer.split(',').map(s => s.trim());
          contextData = selectedTools.map(tool => 
            AI_TOOLS_CONTEXTS[tool] 
              ? { selected: tool, context: AI_TOOLS_CONTEXTS[tool] } 
              : { selected: tool }
          );
        }
      }

      const newUserMsg: ChatMessage = {
        role: 'user',
        content: answer,
        contextData
      };
      
      const updatedMessages = [...messages, newUserMsg];
      setMessages(updatedMessages);
      setIsLoading(true);
      setError(null);
      
      const response = await academyApi.sendChatMessage(sessionId, updatedMessages);
      handleBackendResponse(response);
    } catch (err: any) {
      console.error(err);
      setError(err.message || 'An error occurred during submission');
      setIsLoading(false);
    }
  };

  useEffect(() => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const lastMessage = messages[messages.length - 1];
  const isWaitingForUser = !isLoading && lastMessage?.role === 'assistant';

  return (
    <div className="flex justify-center h-[100dvh] w-full opacity-0 animate-slide-up-fade bg-[var(--bg-primary)] font-['Inter']">
      <div className="w-full max-w-4xl h-full flex flex-col overflow-hidden relative">
        {/* Glow effects - toned down for cleaner look */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[var(--accent-color)]/20 to-transparent z-20"></div>

        <div className="px-4 md:px-8 py-4 border-b border-[var(--border-color)] flex justify-between items-center bg-[var(--bg-primary)]/80 backdrop-blur-md z-20 sticky top-0">
          <h2 className="m-0 text-xl font-bold text-[var(--text-primary)] tracking-tight font-heading">AI Career Coach</h2>
          <div className="flex items-center gap-2.5 text-sm font-medium text-[var(--text-secondary)]">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            Online
          </div>
        </div>
        {error && (
          <div className="p-4 bg-red-50 text-red-600 text-center font-medium border-b border-red-100 z-10">
            Error: {error}
          </div>
        )}
        
        <div className="flex-1 overflow-y-auto px-4 md:px-8 py-6 flex flex-col z-10 relative scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-transparent">
          {messages.map((msg, idx) => (
            // Skip rendering system messages in the UI
            msg.role !== 'system' && <MessageBubble key={idx} message={msg} />
          ))}
          
          {isLoading && (
            <div className="flex gap-4 w-full mb-6 opacity-0 animate-slide-up-fade flex-row">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center shrink-0 shadow-sm border bg-[var(--bg-primary)] border-[var(--border-color)] text-[var(--accent-color)] mt-1">
                <div className="w-5 h-5 rounded-full border-2 border-[var(--accent-color)] border-t-transparent animate-spin"></div>
              </div>
              <div className="flex flex-col max-w-[85%] items-start">
                <div className="text-xs md:text-sm text-[var(--text-secondary)] mb-1 font-medium tracking-wide">Ottobon AI</div>
                <div className="px-4 py-3 md:px-5 md:py-4 shadow-sm text-[0.95rem] leading-relaxed bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-2xl rounded-tl-sm text-[var(--text-primary)]">
                  <div className="flex gap-1.5 py-1">
                    <span className="w-2 h-2 bg-[var(--accent-color)]/70 rounded-full animate-bounce" style={{ animationDelay: '-0.32s' }}></span>
                    <span className="w-2 h-2 bg-[var(--accent-color)]/70 rounded-full animate-bounce" style={{ animationDelay: '-0.16s' }}></span>
                    <span className="w-2 h-2 bg-[var(--accent-color)]/70 rounded-full animate-bounce"></span>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div ref={endOfMessagesRef} />
        </div>

        <div className="px-4 md:px-8 py-4 border-t border-[var(--border-color)] bg-[var(--bg-primary)]/90 min-h-[80px] flex flex-col justify-center z-20 backdrop-blur-xl">
          {recommendedTracks ? (
            <button 
              className="w-full p-4 text-[1.1rem] bg-[var(--accent-color)] text-[#FAF7F2] font-semibold rounded-xl shadow-lg shadow-[#C9A84C]/20 hover:bg-[var(--accent-hover)] transition-all opacity-0 animate-slide-up-fade flex items-center justify-center gap-3" 
              onClick={() => onTracksGenerated(recommendedTracks, { chatHistory: messages })}
            >
              View Recommended Tracks
              <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-1 transition-transform">→</div>
            </button>
          ) : isWaitingForUser ? (
            <DynamicQuestionInput 
              metadata={lastMessage.metadata} 
              onSubmit={handleUserSubmit} 
              disabled={isLoading}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
};
