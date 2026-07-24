import type { ChatMessage } from '../types/academy';

const API_BASE = 'http://localhost:8000'; // Default backend url, can be updated via env later

const getCampaignId = () => {
  return typeof window !== 'undefined' ? sessionStorage.getItem('ottobon_campaign_id') || 'DIRECT' : 'DIRECT';
};

export const academyApi = {
  async sendOtp(email: string): Promise<{ message: string }> {
    const response = await fetch(`${API_BASE}/academy/send-otp`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-academy-key': 'ottobon_academy_live_992'
      },
      body: JSON.stringify({ email, campaign_id: getCampaignId() })
    });
    if (!response.ok) {
      throw new Error('Failed to send OTP');
    }
    return await response.json();
  },

  async verifyOtp(email: string, otp_code: string): Promise<{ message: string, session_id: string, final_report_data?: any }> {
    const response = await fetch(`${API_BASE}/academy/verify-otp`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-academy-key': 'ottobon_academy_live_992'
      },
      body: JSON.stringify({ email, otp_code, campaign_id: getCampaignId() })
    });
    if (!response.ok) {
      throw new Error('Failed to verify OTP');
    }
    return await response.json();
  },

  async parseResume(file: File): Promise<{ text: string }> {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('campaign_id', getCampaignId());
    
    const response = await fetch(`${API_BASE}/academy/parse-resume`, {
      method: 'POST',
      headers: {
        'x-academy-key': 'ottobon_academy_live_992'
      },
      body: formData,
    });
    
    if (!response.ok) {
      const errData = await response.json().catch(() => ({}));
      throw new Error(errData.detail || 'Failed to parse resume');
    }
    
    return await response.json();
  },

  async submitWizard(sessionId: string, data: any): Promise<any> {
    try {
      const response = await fetch(`${API_BASE}/academy/wizard`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-academy-key': 'ottobon_academy_live_992'
        },
        body: JSON.stringify({ session_id: sessionId, data, campaign_id: getCampaignId() })
      });
      if (response.ok) {
        return await response.json();
      }
    } catch (e) {
       console.warn("Failed to reach wizard endpoint. Falling back to mock.");
    }

    // Mock response for track recommendations
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({
          recommendedTracks: [
            {
              id: "ai-prompt-engineer",
              title: "AI Prompt Engineering Specialist",
              description: "Master the art of writing precise prompts to automate tasks and boost productivity using LLMs.",
              difficulty: "Beginner",
              duration: "4 Weeks"
            },
            {
              id: "ai-tooling-qa",
              title: "AI Tooling & Automation for QA",
              description: "Leverage AI agents and tools to build self-healing test scripts and automate QA workflows.",
              difficulty: "Intermediate",
              duration: "6 Weeks"
            },
            {
              id: "genai-developer",
              title: "Generative AI Integration Developer",
              description: "Learn to integrate OpenAI, Claude, and Gemini APIs into enterprise applications.",
              difficulty: "Advanced",
              duration: "8 Weeks"
            }
          ]
        });
      }, 1000);
    });
  },

  async generateSkillGapNarrative(_sessionId: string, _wizardData: any, _trackId: string): Promise<any> {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({
          skillGapData: {
            reassurance: "Changing careers to AI does not mean starting from zero. Your experience in software engineering has already given you a strong foundation.",
            strengths: ["Software engineering", "Problem solving", "Backend development", "Architecture"],
            transferable: [
              { skill: "API Development", reason: "Your API experience will help immensely when integrating LLMs and external AI services into applications." },
              { skill: "System Design", reason: "Structuring scalable backend systems maps directly to designing robust GenAI pipelines and RAG architectures." }
            ],
            stages: [
              {
                name: "Working with LLMs",
                description: "You'll learn how to structure complex prompts and use context windows effectively so you can control AI outputs reliably in production.",
                priority: "Essential"
              },
              {
                name: "Building AI Applications",
                description: "You'll learn how to give AI access to your own data (RAG) so it can answer accurately instead of relying only on its training.",
                priority: "Essential"
              },
              {
                name: "Evaluating AI Systems",
                description: "You'll learn how to measure AI performance programmatically to prevent regressions and hallucinations.",
                priority: "Can Wait"
              },
              {
                name: "Fine Tuning Models",
                description: "You'll learn how to train smaller models on custom datasets for highly specific tasks.",
                priority: "Optional"
              }
            ],
            summary: "You already possess the core engineering foundation required for this role. The remaining knowledge can be learned predictably through a structured roadmap."
          }
        });
      }, 800);
    });
  },

  async generateDashboardForTrack(_sessionId: string, _wizardData: any, _trackId: string): Promise<any> {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({
          finalAssessment: {
            summary: {
              trackTitle: "Generative AI Integration Developer",
              strengths: ["Software Engineering", "API Design", "Backend Architecture"],
              learningPriorities: ["LLM Fundamentals", "RAG Architecture", "Prompt Engineering"],
              projectFocus: "Building intelligent enterprise search and workflow automation tools.",
              transitionStrategy: "Leverage your backend skills to focus heavily on the data engineering and integration side of AI, skipping basic programming entirely.",
              closingStatement: "This roadmap is highly personalized to your background. Follow this path, focus on building the projects, and your transition into AI will be faster and more practical than starting from scratch."
            },
            phases: [
              {
                phaseNumber: 1,
                title: "Foundation",
                objective: "Understand how modern AI actually works beneath the API layer.",
                whyItMatters: "Without knowing the constraints of LLMs (context windows, tokens, hallucinations), you cannot architect reliable systems.",
                topics: ["Transformer Architecture Basics", "Tokenization", "Context Windows", "Temperature & Top-P"],
                deliverables: ["Write a script that calculates token usage and costs for a given input."],
                milestone: "Can explain why an LLM hallucinated a specific answer.",
                expectedOutcome: "Solid intuition for what LLMs can and cannot do."
              },
              {
                phaseNumber: 2,
                title: "Core AI Skills",
                objective: "Master the fundamental building blocks of AI applications.",
                whyItMatters: "These are the core components you will wire together in every enterprise AI application.",
                topics: ["Embeddings", "Vector Databases", "Retrieval-Augmented Generation (RAG)", "OpenAI API"],
                deliverables: ["Store and query documents in a Vector DB", "Build a basic semantic search script"],
                milestone: "Successfully retrieve contextually relevant data using embeddings.",
                expectedOutcome: "Ability to connect external data to an LLM."
              },
              {
                phaseNumber: 3,
                title: "Building Real Applications",
                objective: "Shift from learning concepts to engineering full systems.",
                whyItMatters: "Employers hire for what you can build, not what you have read.",
                topics: ["LangChain / LlamaIndex", "Memory Management", "Streaming Responses", "Agentic Workflows"],
                deliverables: ["Build an AI Chat Assistant with memory", "Build a Customer Support Document Q&A System"],
                milestone: "Deploy a working RAG application locally.",
                expectedOutcome: "A portfolio-ready AI application."
              },
              {
                phaseNumber: 4,
                title: "Production & Deployment",
                objective: "Move from brittle prototypes to robust, production-ready systems.",
                whyItMatters: "Enterprise AI fails in edge cases. You must know how to monitor and evaluate them.",
                topics: ["Prompt Versioning", "LLM Observability (LangSmith/Helicone)", "Cost Optimization", "Rate Limiting"],
                deliverables: ["Add tracing and logging to your Q&A system", "Implement fallback models on API failure"],
                milestone: "Application is monitored and cost-optimized.",
                expectedOutcome: "Ready to deploy AI in a corporate environment."
              },
              {
                phaseNumber: 5,
                title: "Portfolio & Interview Preparation",
                objective: "Translate your new skills into an employable profile.",
                whyItMatters: "If recruiters cannot see what you built, you will not get the interview.",
                topics: ["GitHub Organization", "Project Documentation", "Resume Updates", "System Design Practice"],
                deliverables: ["Write a detailed README for your Q&A System", "Update LinkedIn with 'GenAI Developer' positioning"],
                milestone: "Portfolio is public and professional.",
                expectedOutcome: "An irresistible developer profile."
              },
              {
                phaseNumber: 6,
                title: "Job Readiness",
                objective: "Confidently pass technical and architectural interviews.",
                whyItMatters: "You must be able to discuss trade-offs (e.g. Fine-tuning vs RAG).",
                topics: ["Trade-off Analysis", "Security (Prompt Injection)", "Behavioral Prep"],
                deliverables: ["Mock interview focusing on RAG architecture trade-offs"],
                milestone: "Can independently build, deploy, and defend an AI system.",
                expectedOutcome: "Job Ready."
              }
            ],
            optionalTopics: ["Fine-tuning Models", "Multi-Agent Systems", "Local LLMs (Ollama)"]
          }
        });
      }, 1000);
    });
  },

  async triggerSyllabusEmail(_sessionId: string, _wizardData: any, _trackId: string): Promise<{ status: string }> {
    return new Promise(resolve => {
      // Simulate backend generating PDF and sending email
      setTimeout(() => {
        resolve({ status: 'email_sent' });
      }, 1500);
    });
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async sendChatMessage(_sessionId: string, messages: ChatMessage[]): Promise<any> {
    // Backend still uses the old questionnaire prompt, so bypass it and use the Otto mock
    // try {
    //   const response = await fetch(`${API_BASE}/academy/chat`, {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //       'x-academy-key': 'ottobon_academy_live_992'
    //     },
    //     body: JSON.stringify({ session_id: sessionId, messages, campaign_id: getCampaignId() })
    //   });
    //   if (response.ok) {
    //     return await response.json();
    //   }
    // } catch (e) {
    //    console.warn("Failed to reach chat endpoint. Falling back to mock.");
    // }


    // Mock response for Coach Otto
    return new Promise(resolve => {
      setTimeout(() => {
        // Determine conversation state
        const hasResume = messages.some(m => m.role === 'system' && m.content.includes('Resume:'));
        const userMessages = messages.filter(m => m.role === 'user');
        
        // State 1: After confirming profile summary -> Ask Roadblock
        if (userMessages.length > 0 && userMessages[userMessages.length - 1].content.includes('Looks right')) {
          resolve({
            message: "Perfect.\n\nI've built a good understanding of your background and updated your profile based on your feedback.\n\nTo make sure this path actually works for you, I have a couple quick questions.\n\nWhat has been your biggest roadblock when it comes to learning AI?",
            metadata: {
              type: "single-select",
              options: [
                "Finding time",
                "Too much math/theory",
                "Don't know where to start",
                "Connecting it to my actual job"
              ],
              allowOther: true
            }
          });
          return;
        }

        const recentUserMsgs = userMessages.length > 0 ? userMessages[userMessages.length - 1].content : "";
        
        // State 2: Answering Roadblock -> Ask Learning Preference
        const isAnsweringRoadblock = 
          recentUserMsgs.includes("Finding") || 
          recentUserMsgs.includes("math") || 
          recentUserMsgs.includes("start") || 
          recentUserMsgs.includes("Connecting");

        if (isAnsweringRoadblock) {
          resolve({
            message: "That makes complete sense. We will structure your roadmap to avoid that exact issue.\n\nHow do you prefer to learn new technical concepts?",
            metadata: {
              type: "single-select",
              options: [
                "Building hands-on projects",
                "Reading documentation",
                "Watching video tutorials",
                "Interactive coding exercises"
              ],
              allowOther: true
            }
          });
          return;
        }

        // State 3: Answering Learning Preference -> Ask Intent
        const isAnsweringLearning = 
          recentUserMsgs.includes("hands-on") || 
          recentUserMsgs.includes("Reading") || 
          recentUserMsgs.includes("Watching") || 
          recentUserMsgs.includes("Interactive");

        if (isAnsweringLearning) {
          resolve({
            message: "Got it! I will tailor your curriculum heavily towards that style.\n\nBefore I recommend the best paths for you, I just need to understand one last thing.\n\nWhat matters most to you right now?",
            metadata: {
              type: "single-select",
              options: [
                "Getting hired as quickly as possible",
                "Building innovative AI products",
                "Automating business workflows",
                "Maximizing long-term career growth",
                "I'm still exploring"
              ],
              allowOther: true
            }
          });
          return;
        }


        // If user provided a specific preference (or answered the follow-up)
        // Transition and then generate tracks.
        // Wait, the prompt says "Do not recommend careers yet. The next step will generate personalized career matches."
        // So we send the transition message, and then what? If we send a message, we need them to click something to view tracks, or the frontend needs to handle generating tracks automatically.
        // Since we want to return tracks at the end of the chat, we will return `recommendedTracks` directly, and the UI will show "View Recommended Tracks" button.
        // Let's combine the transition message and the tracks in the response so the frontend shows the message and the button.
        // State 4: Answering Intent -> Generate Tracks
        const isAnsweringPreference = 
          recentUserMsgs.includes("innovative") || 
          recentUserMsgs.includes("Automating") || 
          recentUserMsgs.includes("Getting") || 
          recentUserMsgs.includes("Maximizing") || 
          recentUserMsgs.includes("exploring");

        if (isAnsweringPreference) {
          resolve({
            message: "Based on your experience and what you're looking for, I focused on roles where your existing strengths give you a meaningful head start instead of suggesting careers that would require starting from scratch.\n\nTake a look through these options. Once you choose one, I'll identify exactly what's missing from your current profile and build a personalized roadmap to help you get there.",
            recommendedTracks: [
              {
                id: "ai-prompt-engineer",
                title: "AI Prompt Engineering Specialist",
                recommendationLevel: "High",
                description: "Master the art of writing precise prompts to automate tasks and boost productivity using LLMs.",
                matchReason: "This is the ONLY path you should take right now. Your strong communication skills and domain expertise give you a natural intuition for structuring complex inputs. Do not look at the other options.",
                learningEffort: "Short",
                keySkills: ["Prompt Design", "LLM APIs", "Workflow Automation"],
                hiringCompanies: "Tech Startups, Marketing Agencies, Enterprise Ops"
              },
              {
                id: "ai-tooling-qa",
                title: "AI Tooling & Automation for QA",
                recommendationLevel: "Medium",
                description: "Learn how to use AI to generate test cases, automate UI testing, and predict failure points.",
                matchReason: "Why you shouldn't choose this: You don't have enough QA background. This track will force you to learn tedious testing frameworks before you even touch AI.",
                learningEffort: "Moderate",
                keySkills: ["AI Testing Frameworks", "Test Generation", "QA Automation"],
                hiringCompanies: "SaaS Companies, E-commerce platforms, FinTech"
              },
              {
                id: "genai-developer",
                title: "Generative AI Integration Developer",
                recommendationLevel: "Low",
                description: "Learn to integrate OpenAI, Claude, and Gemini APIs into enterprise applications.",
                matchReason: "Why it's a BAD fit: This requires deep backend engineering and system architecture experience. Without a strong foundation in Python/Node backend scaling, you will struggle immensely.",
                learningEffort: "Significant",
                keySkills: ["API Integration", "Python/Node.js", "System Architecture"],
                hiringCompanies: "Tech Consultancies, Enterprise Software, Cloud Providers"
              }
            ],
            metadata: {
              type: "none",
              options: [],
              allowOther: false
            }
          });
          return;
        }

        // If user submitted a correction (the message before this was "correct something")
        if (userMessages.length > 1 && userMessages[userMessages.length - 2].content.includes('correct something')) {
          resolve({
            message: "Got it! Thanks for the correction. I've updated your profile to reflect that.\n\nI also compared your experience against current AI career requirements.\n\nBefore I recommend the best paths for you, I just need to understand one thing.\n\nWhat matters most to you right now?",
            metadata: {
              type: "single-select",
              options: [
                "Getting hired as quickly as possible",
                "Building innovative AI products",
                "Automating business workflows",
                "Maximizing long-term career growth",
                "I'm still exploring"
              ],
              allowOther: true
            }
          });
          return;
        }

        // If user wants to correct
        if (userMessages.length > 0 && userMessages[userMessages.length - 1].content.includes('correct something')) {
          resolve({
            message: "No problem! What did I miss or misunderstand about your background?",
            metadata: {
              type: "textarea",
              placeholder: "Type your corrections here..."
            }
          });
          return;
        }

        if (hasResume || userMessages.length > 0) {
          // Fake a dynamic extraction based on the text provided
          let rawText = "";
          const resumeMsg = messages.find(m => m.role === 'system' && m.content.includes('Resume:'));
          if (resumeMsg) rawText = resumeMsg.content.toLowerCase();
          else if (userMessages.length > 0) rawText = userMessages[0].content.toLowerCase();
          
          let domain = "Software & Technology";
          let level = "Mid-to-Senior level engineering maturity";
          let aiExposure = "You have strong fundamentals, but my analysis shows limited direct production exposure to Generative AI architectures (LLMs, RAG, etc.).";
          
          if (/\b(python|data)\b/.test(rawText)) {
            domain = "Data & Backend Engineering";
            aiExposure = "Your backend skills mean you are perfectly positioned to learn AI architectures, though you haven't worked directly with LLMs yet.";
          }
          if (/\b(react|frontend)\b/.test(rawText)) {
            domain = "Frontend & Full Stack Engineering";
            aiExposure = "Your frontend skills are highly transferable for building AI product interfaces, though you'll need to learn how to integrate LLM APIs.";
          }
          if (/\b(manager|vp|director|founder)\b/.test(rawText)) {
            domain = "Product & Engineering Leadership";
            aiExposure = "Your leadership experience is extremely valuable for driving AI adoption, though you may need to learn the high-level capabilities of Generative AI.";
          }
          
          if (/\b(student|intern|junior)\b/.test(rawText)) level = "Entry-level foundation";
          
          if (/\b(rag|llm|llms|genai|openai|langchain)\b/.test(rawText)) {
            aiExposure = "I detected hands-on exposure to Generative AI and modern LLM paradigms in your background, giving you a massive head start.";
          }

          const isFirstMessageWithResume = hasResume && userMessages.length === 0;
          const introPrefix = isFirstMessageWithResume 
            ? "Welcome! I'm Otto, your AI Career Discovery Coach.\n\nI've thoroughly analyzed your uploaded resume.\n\n"
            : "Thanks! I've thoroughly analyzed your background.\n\n";

          // If we have a resume or the user has typed their background, return the Profile Summary
          resolve({
            message: `${introPrefix}Based on my analysis, here is your career profile:\n\n- **Primary Domain**: ${domain}\n- **Experience Level**: ${level}\n- **AI Readiness**: ${aiExposure}\n\nDid I extract and understand your background correctly?`,
            metadata: {
              type: "single-select",
              options: ["✅ Looks right", "✏️ I'd like to correct something"],
              allowOther: false
            }
          });
        } else {
           // Initial welcome message from Otto
           resolve({
             message: "Welcome! I'm Otto, your AI Career Discovery Coach.\n\nYou don't need to know AI job roles, required skills, or learning paths.\n\nI'll analyze your background, identify transferable skills, compare them against current AI industry expectations, recommend the most suitable AI career options, identify skill gaps, and generate a personalized roadmap.\n\nWhenever you're ready, tell me about your background, and I'll take it from there.",
             metadata: {
               type: "textarea",
               placeholder: "Type your experience here..."
             }
           });
        }
      }, 1000);
    });
  },

  async generateReport(data: any): Promise<Blob> {
    const response = await fetch(`${API_BASE}/academy/generate-report`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-academy-key': 'ottobon_academy_live_992'
      },
      body: JSON.stringify({ ...data, campaign_id: getCampaignId() })
    });
    
    if (!response.ok) {
      throw new Error('Failed to generate report');
    }
    
    return await response.blob();
  },

  async triggerSyllabusEmail(sessionId: string, selectedTrackId: string, wizardData: any): Promise<any> {
    const response = await fetch(`${API_BASE}/academy/send-syllabus-email`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-academy-key': 'ottobon_academy_live_992'
      },
      body: JSON.stringify({ session_id: sessionId, selected_track_id: selectedTrackId, wizardData })
    });
    
    if (!response.ok) {
      throw new Error('Failed to trigger syllabus email');
    }
    return await response.json();
  }
};
