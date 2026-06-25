export const featuredProjects = [
  {
    slug: "taiwan-stock-simulator",
    title: "Taiwan Stock Virtual Investment Platform",
    category: "Fintech AI",
    summary:
      "A full-stack virtual investment and strategy backtesting platform for Taiwan stocks, built for simulation, education, and portfolio analytics.",
    bullets: [
      "Simulated buy/sell trading with cash, holdings, fees, tax, average cost, and P/L calculation.",
      "Backtesting with configurable stock, date range, initial capital, and strategy type.",
      "Dashboard for total assets, drawdown, daily P/L, allocation, and performance metrics.",
    ],
    stack: ["Next.js", "TypeScript", "Prisma", "Recharts", "Vitest"],
    accent: "green",
  },
  {
    slug: "knowledge-assistant",
    title: "Enterprise Knowledge AI Assistant",
    category: "RAG AI",
    summary:
      "A retrieval-augmented assistant that helps teams ask questions over documents, policies, FAQs, and internal workflows.",
    bullets: [
      "Document ingestion, chunking, embedding generation, and semantic search workflow.",
      "Answer generation with source references for trust and auditability.",
      "Clean UI for upload, question input, answer review, and citation inspection.",
    ],
    stack: ["OpenAI API", "RAG", "Vector DB", "PostgreSQL", "Next.js"],
    accent: "cyan",
  },
  {
    slug: "resume-screening",
    title: "AI Resume Screening and Job Matching Tool",
    category: "HR AI",
    summary:
      "An AI-powered hiring tool that compares resumes against job descriptions and creates explainable match reports.",
    bullets: [
      "Extracted skills, seniority, domain keywords, and experience signals.",
      "Generated match scores, strengths, gaps, risk flags, and interview questions.",
      "Designed recruiter-friendly candidate review and comparison workflows.",
    ],
    stack: ["PDF Parsing", "OpenAI API", "Prisma", "PostgreSQL", "React"],
    accent: "coral",
  },
  {
    slug: "support-copilot",
    title: "Customer Support Copilot",
    category: "Support AI",
    summary:
      "A support workflow assistant that drafts replies, summarizes tickets, and recommends next actions with human approval.",
    bullets: [
      "Conversation summarization, tone control, and knowledge-grounded reply drafts.",
      "Agent review flow before any customer-facing response is sent.",
      "Reusable components for SaaS and e-commerce support teams.",
    ],
    stack: ["Next.js", "Prompt Design", "RAG", "TypeScript"],
    accent: "yellow",
  },
  {
    slug: "analytics-dashboard",
    title: "AI Data Analytics Dashboard",
    category: "Data AI",
    summary:
      "A business analytics dashboard that converts data into charts, trend explanations, anomaly alerts, and report summaries.",
    bullets: [
      "Generated natural-language insights from chart and KPI data.",
      "Surfaced anomalies, trend changes, and business questions for follow-up.",
      "Created exportable summary sections for stakeholder reporting.",
    ],
    stack: ["Charts", "Analytics", "LLM", "TypeScript"],
    accent: "blue",
  },
  {
    slug: "content-workbench",
    title: "AI Content Generation Workbench",
    category: "Creative AI",
    summary:
      "A content workflow tool for producing marketing copy, article outlines, social posts, and controlled rewrite variants.",
    bullets: [
      "Template-based generation for repeatable content workflows.",
      "Tone, format, and audience controls for better output quality.",
      "Version comparison and content review flow for human editors.",
    ],
    stack: ["Prompt Design", "Next.js", "Content Ops", "UX"],
    accent: "purple",
  },
];

export const skills = [
  "Next.js",
  "TypeScript",
  "React",
  "Prisma",
  "PostgreSQL",
  "Tailwind CSS",
  "OpenAI API",
  "RAG",
  "Prompt Design",
  "Recharts",
  "Vitest",
  "Vercel",
];

export const processSteps = [
  {
    number: "01",
    title: "Define",
    text: "Clarify the user, workflow, data inputs, output format, and success metrics before building.",
  },
  {
    number: "02",
    title: "Prototype",
    text: "Create a usable interface quickly so the model, data flow, and product logic can be tested together.",
  },
  {
    number: "03",
    title: "Validate",
    text: "Test edge cases, explainability, prompt behavior, and business rules before presenting the project.",
  },
  {
    number: "04",
    title: "Ship",
    text: "Prepare deployment, documentation, environment variables, and a clear demo path for reviewers.",
  },
];
