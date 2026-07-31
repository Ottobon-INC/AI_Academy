import React from 'react';
import { X, Briefcase, Building2, DollarSign, Sparkles, ArrowRight, CheckCircle, Flame } from 'lucide-react';
import type { RecommendedTrack } from './TrackSelection';

export interface JobRoleMapping {
  title: string;
  salary: string;
  demand: string;
  description: string;
  companies: string[];
  skills: string[];
}

interface Props {
  track: RecommendedTrack;
  onClose: () => void;
  onBookSession: () => void;
}

// Data mapping for the 3 core tracks
const TRACK_JOB_MAPPINGS: Record<string, JobRoleMapping[]> = {
  'native-ai-expert': [
    {
      title: 'Oracle AI Specialist',
      salary: '$140,000 - $185,000 / yr',
      demand: 'High Demand 🔥',
      description: 'Configure and deploy Oracle Native AI modules and enterprise automated agent workflows for global clients.',
      companies: ['Oracle', 'Accenture', 'Deloitte', 'PwC'],
      skills: ['Oracle Cloud AI', 'Enterprise Config', 'Workflow Automation', 'CRM AI Agents']
    },
    {
      title: 'Salesforce AI Agent Developer',
      salary: '$135,000 - $175,000 / yr',
      demand: 'Hot Role ⚡',
      description: 'Configure Salesforce Einstein 1 agents and native CRM AI tools to transform sales and service operations.',
      companies: ['Salesforce', 'EY', 'Capgemini', 'Cognizant'],
      skills: ['Salesforce Einstein', 'CRM Agentforce', 'Data Cloud', 'Flow Automation']
    },
    {
      title: 'SAP Enterprise AI Configurator',
      salary: '$130,000 - $170,000 / yr',
      demand: 'Scaling 📈',
      description: 'Manage SAP Joule native AI capabilities across enterprise ERP modules and supply chain workflows.',
      companies: ['SAP', 'Infosys', 'Wipro', 'TCS'],
      skills: ['SAP Joule AI', 'ERP Workflows', 'Business AI Suite', 'Process Automation']
    }
  ],
  'vibe-coding-developer': [
    {
      title: 'Vibe Coding Architect',
      salary: '$150,000 - $210,000 / yr',
      demand: 'Top Paid 🔥',
      description: 'Leverage AI coding agents (Cursor, Windsurf, Claude Engineer) to rapidly engineer production full-stack apps.',
      companies: ['Scale AI', 'Ramp', 'Vercel', 'Linear'],
      skills: ['AI Coding Agents', 'Prompt Architecture', 'Full-Stack React/Node', 'Rapid Prototyping']
    },
    {
      title: 'AI Full-Stack Developer',
      salary: '$140,000 - $195,000 / yr',
      demand: 'High Demand ⚡',
      description: 'Build modern AI-native applications from scratch and replace legacy enterprise SaaS platforms.',
      companies: ['OpenAI', 'Anthropic', 'Replit', 'Supabase'],
      skills: ['Next.js', 'TypeScript', 'LLM Integration', 'TailwindCSS', 'Vector DBs']
    },
    {
      title: 'SaaS Replacement Developer',
      salary: '$145,000 - $200,000 / yr',
      demand: 'Trending 🚀',
      description: 'Design custom internal software for enterprises that replaces expensive off-the-shelf SaaS subscriptions.',
      companies: ['Stripe', 'PostHog', 'Retool', 'Brex'],
      skills: ['Agentic Development', 'System Design', 'API Integration', 'Full-Stack Dev']
    }
  ],
  'agent-builder': [
    {
      title: 'Enterprise AI Agent Integrator',
      salary: '$160,000 - $220,000 / yr',
      demand: 'Top Demand 🔥',
      description: 'Write custom backend logic to plug frontier AI models (GPT-4, Claude) directly into enterprise software infrastructure.',
      companies: ['Palantir', 'Databricks', 'Snowflake', 'C3.ai'],
      skills: ['LangChain / LlamaIndex', 'Python / FastAPI', 'Vector DBs', 'Custom Tool Use']
    },
    {
      title: 'Autonomous Agent Engineer',
      salary: '$155,000 - $215,000 / yr',
      demand: 'Hot Role ⚡',
      description: 'Architect multi-agent autonomous systems using open-source models and custom orchestration frameworks.',
      companies: ['Cognition', 'Anyscale', 'Pinecone', 'AutoGPT'],
      skills: ['Multi-Agent Logic', 'State Management', 'Model Fine-tuning', 'Prompt Injection Defense']
    },
    {
      title: 'Custom LLM Logic Engineer',
      salary: '$150,000 - $205,000 / yr',
      demand: 'High Growth 📈',
      description: 'Develop backend microservices that route, evaluate, and orchestrate frontier LLMs for security & reliability.',
      companies: ['Weights & Biases', 'Helicone', 'LangSmith', 'CoHere'],
      skills: ['LLM Observability', 'RAG Pipelines', 'API Middleware', 'Python Architecture']
    }
  ]
};

export const ExploreTrackModal: React.FC<Props> = ({ track, onClose, onBookSession }) => {
  // Normalize track id to find key mappings
  const normalizedId = track.id.toLowerCase().includes('native') 
    ? 'native-ai-expert'
    : track.id.toLowerCase().includes('vibe') || track.id.toLowerCase().includes('qa') || track.id.toLowerCase().includes('full')
    ? 'vibe-coding-developer'
    : 'agent-builder';

  const jobRoles = TRACK_JOB_MAPPINGS[normalizedId] || TRACK_JOB_MAPPINGS['agent-builder'];

  return (
    <div className="fixed inset-0 z-[9999] bg-slate-900/60 backdrop-blur-md flex justify-center items-start pt-24 pb-8 px-4 overflow-y-auto animate-fade-in font-['Inter']">
      {/* Clickable backdrop overlay */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Centered Modal Card */}
      <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 w-full max-w-2xl overflow-hidden relative z-10 animate-scale-up my-auto flex flex-col max-h-[78vh]">
        {/* Modal Header */}
        <div className="p-6 border-b border-slate-100 bg-slate-50/90 flex items-start justify-between shrink-0">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-indigo-50 text-indigo-700 border border-indigo-200 mb-2">
              <Sparkles size={13} className="text-indigo-500" />
              Career Role Mapping & Salary Insights
            </div>
            <h2 className="text-2xl font-bold text-slate-900 font-heading">{track.title}</h2>
            <p className="text-slate-500 text-xs mt-1 leading-relaxed max-w-lg">{track.description}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 rounded-full transition-colors shrink-0 ml-4"
          >
            <X size={20} />
          </button>
        </div>

        {/* Scrollable Body: Job Roles */}
        <div className="p-6 overflow-y-auto space-y-4 flex-1">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider flex items-center gap-2">
              <Briefcase size={16} className="text-indigo-600" />
              Matching Real-World Roles & Market Demand
            </h3>
            <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
              Verified Hiring Data
            </span>
          </div>

          <div className="grid gap-4">
            {jobRoles.map((job, idx) => (
              <div 
                key={idx} 
                className="p-4 bg-white rounded-xl border border-slate-200 hover:border-indigo-300 hover:shadow-md transition-all group"
              >
                <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                  <div>
                    <h4 className="text-base font-bold text-slate-900 group-hover:text-indigo-600 transition-colors flex items-center gap-2">
                      {job.title}
                      {job.demand.includes('🔥') && <Flame size={15} className="text-amber-500" />}
                    </h4>
                    <span className="inline-block mt-0.5 text-xs font-semibold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-100">
                      {job.demand}
                    </span>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-extrabold text-emerald-700 flex items-center gap-1">
                      <DollarSign size={14} className="text-emerald-500" />
                      {job.salary}
                    </div>
                  </div>
                </div>

                <p className="text-slate-600 text-xs mb-3 leading-relaxed">
                  {job.description}
                </p>

                {/* Companies Hiring */}
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="text-xs font-semibold text-slate-400 flex items-center gap-1">
                    <Building2 size={12} /> Hiring Companies:
                  </span>
                  {job.companies.map((company, cIdx) => (
                    <span 
                      key={cIdx} 
                      className="text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 px-2 py-0.5 rounded transition-colors"
                    >
                      {company}
                    </span>
                  ))}
                </div>

                {/* Required Skills */}
                <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-100">
                  <span className="text-[11px] font-semibold text-slate-400">Skills:</span>
                  {job.skills.map((skill, sIdx) => (
                    <span key={sIdx} className="text-[11px] font-semibold text-indigo-900 bg-indigo-50/80 px-2 py-0.5 rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sticky Footer Action Bar */}
        <div className="p-5 bg-slate-50 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 shrink-0">
          <div className="text-xs text-slate-500 flex items-center gap-1.5">
            <CheckCircle size={15} className="text-emerald-500" />
            <span>Ready to transition? Book a free discovery session.</span>
          </div>
          <button
            onClick={() => {
              onClose();
              onBookSession();
            }}
            className="py-3 px-5 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm rounded-xl transition-all shadow-md flex items-center gap-2"
          >
            <span>Book 1-on-1 Session</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};
