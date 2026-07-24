export const PROFESSION_CONTEXTS: Record<string, any> = {
  "Software Developer": {
    description: "Designs, develops, tests and maintains software applications.",
    primary_skills: ["Programming", "Problem Solving", "System Design", "Debugging"],
    transferable_skills: ["Analytical Thinking", "Logical Reasoning", "Software Architecture"],
    ai_readiness: "High",
    recommended_ai_paths: ["AI Engineer", "ML Engineer", "LLM Application Developer"]
  },
  "Oracle Professional": {
    description: "Implements, manages, and optimizes Oracle database and enterprise solutions.",
    primary_skills: ["SQL", "Database Administration", "Oracle ERP", "Data Modeling"],
    transferable_skills: ["Data Management", "System Architecture", "Business Process Optimization"],
    ai_readiness: "Medium-High",
    recommended_ai_paths: ["AI Data Engineer", "Enterprise AI Architect", "Predictive Analytics Specialist"]
  },
  "Salesforce Professional": {
    description: "Develops, configures, and manages Salesforce CRM environments.",
    primary_skills: ["Apex", "CRM Configuration", "Business Workflows", "Integration"],
    transferable_skills: ["Workflow Automation", "Business Process Understanding", "Customer Intelligence"],
    ai_readiness: "High",
    recommended_ai_paths: ["AI CRM Consultant", "AI Workflow Engineer", "Revenue Intelligence Specialist"]
  },
  "QA Engineer": {
    description: "Ensures software quality through manual and automated testing.",
    primary_skills: ["Automated Testing", "Test Planning", "Debugging", "Quality Assurance"],
    transferable_skills: ["Attention to Detail", "Edge Case Analysis", "Process Validation"],
    ai_readiness: "Medium-High",
    recommended_ai_paths: ["AI Quality Assurance Specialist", "ML Model Evaluator", "AI Safety Engineer"]
  },
  "Project Manager": {
    description: "Plans, executes, and closes software or business projects.",
    primary_skills: ["Agile/Scrum", "Risk Management", "Stakeholder Communication", "Resource Allocation"],
    transferable_skills: ["Leadership", "Strategic Planning", "Cross-functional Coordination"],
    ai_readiness: "High",
    recommended_ai_paths: ["AI Product Manager", "AI Transformation Lead", "AI Implementation Consultant"]
  },
  "Business Analyst": {
    description: "Bridges the gap between IT and the business using data analytics.",
    primary_skills: ["Requirements Gathering", "Process Modeling", "Data Analysis", "Reporting"],
    transferable_skills: ["Analytical Thinking", "Problem Solving", "Business Strategy"],
    ai_readiness: "High",
    recommended_ai_paths: ["AI Business Strategist", "AI Solutions Architect", "Data Analytics Lead"]
  }
};

export const EXPERIENCE_CONTEXTS: Record<string, any> = {
  "0-2": {
    career_stage: "Entry-Level",
    expected_expertise: "Foundational knowledge, requiring supervision.",
    transition_difficulty: "Low",
    learning_recommendation: "Focus on AI fundamentals and core engineering skills."
  },
  "3-5": {
    career_stage: "Mid-Level Professional",
    expected_expertise: "Strong functional expertise.",
    transition_difficulty: "Moderate",
    learning_recommendation: "Upskill using practical AI projects and workflow automation."
  },
  "5-8": {
    career_stage: "Senior Professional",
    expected_expertise: "Advanced expertise, capable of leading small teams or projects.",
    transition_difficulty: "Moderate-High",
    learning_recommendation: "Focus on AI architecture, system integration, and advanced ML concepts."
  },
  "8+": {
    career_stage: "Lead/Principal Professional",
    expected_expertise: "Deep domain knowledge, strategic leadership.",
    transition_difficulty: "High",
    learning_recommendation: "Focus on AI strategy, enterprise AI transformation, and team enablement."
  }
};

export const TECHNOLOGY_CONTEXTS: Record<string, any> = {
  "Java": {
    category: "Programming Language",
    ai_relevance: "Medium",
    supports: ["Backend Development", "Enterprise AI Applications", "Spring AI"]
  },
  ".NET": {
    category: "Programming Language / Framework",
    ai_relevance: "Medium",
    supports: ["Enterprise Backends", "Microsoft AI Ecosystem", "Semantic Kernel"]
  },
  "Python": {
    category: "Programming Language",
    ai_relevance: "Very High",
    supports: ["Machine Learning", "Data Science", "LLM Development", "AI Scripting"]
  },
  "Node": {
    category: "Runtime Environment",
    ai_relevance: "High",
    supports: ["AI API Integration", "Serverless AI Functions", "Real-time AI Chat"]
  },
  "React": {
    category: "Frontend Framework",
    ai_relevance: "High",
    supports: ["AI Chat Interfaces", "LLM Applications", "Dashboards"]
  },
  "Angular": {
    category: "Frontend Framework",
    ai_relevance: "Medium-High",
    supports: ["Enterprise AI Interfaces", "Complex Dashboards", "AI-driven Web Apps"]
  }
};

export const PROJECT_TYPE_CONTEXTS: Record<string, any> = {
  "CRM": {
    description: "Customer relationship management applications.",
    business_focus: "Sales and customer engagement.",
    transferable_skills: ["Business Process Understanding", "Workflow Automation"],
    ai_opportunities: ["AI Sales Assistant", "Customer Intelligence", "Predictive CRM"]
  },
  "ERP": {
    description: "Enterprise resource planning systems.",
    business_focus: "Core business operations and supply chain.",
    transferable_skills: ["Process Optimization", "Data Modeling", "Enterprise Architecture"],
    ai_opportunities: ["Demand Forecasting", "Automated Resource Allocation", "Supply Chain AI"]
  },
  "Enterprise Apps": {
    description: "Large-scale internal corporate applications.",
    business_focus: "Internal efficiency and process management.",
    transferable_skills: ["System Integration", "Security Compliance", "Scalability"],
    ai_opportunities: ["Internal Knowledge Bases (RAG)", "Automated Reporting", "Workflow Copilots"]
  },
  "Cloud": {
    description: "Cloud-native distributed systems and infrastructure.",
    business_focus: "Scalability, reliability, and deployment.",
    transferable_skills: ["DevOps", "Infrastructure as Code", "Distributed Systems"],
    ai_opportunities: ["MLOps", "AI Infrastructure Scaling", "Cloud-native AI APIs"]
  },
  "Embedded": {
    description: "Software running on specialized hardware devices.",
    business_focus: "Hardware control and edge computing.",
    transferable_skills: ["Resource Constraint Optimization", "Low-level Programming"],
    ai_opportunities: ["Edge AI", "IoT Predictive Maintenance", "TinyML"]
  },
  "Data": {
    description: "Data pipelines, warehouses, and analytics platforms.",
    business_focus: "Business intelligence and data engineering.",
    transferable_skills: ["Data Wrangling", "ETL", "Statistical Analysis"],
    ai_opportunities: ["Machine Learning Pipelines", "Data Preprocessing for LLMs", "Advanced Analytics"]
  }
};

export const AI_USAGE_CONTEXTS: Record<string, any> = {
  "Never": {
    maturity: "Beginner",
    confidence: "Low",
    recommendation_bias: "Requires AI fundamentals and basic prompt engineering."
  },
  "Sometimes": {
    maturity: "Beginner-Intermediate",
    confidence: "Moderate",
    recommendation_bias: "Teach practical AI workflows before advanced concepts."
  },
  "Daily": {
    maturity: "Intermediate",
    confidence: "High",
    recommendation_bias: "Comfortable using AI in workflows. Ready for API integration or agentic workflows."
  },
  "Every Task": {
    maturity: "Advanced",
    confidence: "Very High",
    recommendation_bias: "Ready for advanced AI engineering or AI leadership recommendations."
  }
};

export const AI_TOOLS_CONTEXTS: Record<string, any> = {
  "ChatGPT": {
    category: "General Purpose LLM",
    experience_level: "Conversational AI",
    strength: ["Content Generation", "Research", "Problem Solving"]
  },
  "Claude": {
    category: "General Purpose LLM",
    experience_level: "Conversational AI / Analysis",
    strength: ["Large Context Reasoning", "Coding", "Writing"]
  },
  "Gemini": {
    category: "General Purpose LLM",
    experience_level: "Conversational AI / Ecosystem Integration",
    strength: ["Multimodal Analysis", "Google Workspace Integration", "Reasoning"]
  },
  "Cursor": {
    category: "AI Coding Assistant",
    experience_level: "AI-assisted Software Development",
    strength: ["Code Generation", "Refactoring", "Debugging"]
  },
  "GitHub Copilot": {
    category: "AI Coding Assistant",
    experience_level: "AI-assisted Software Development",
    strength: ["Inline Code Suggestions", "Boilerplate Generation", "IDE Integration"]
  },
  "None": {
    category: "N/A",
    experience_level: "None",
    strength: []
  }
};
