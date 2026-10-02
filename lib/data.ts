export const profile = {
  name: "Afaq Ul Islam",
  role: "Full-Stack & AI Engineer",
  roleSecondary: "Co-Founder & COO, Neofyx",
  timezoneLabel: "PKT (UTC+05:00)",
  location: "Karachi, Pakistan",
  email: "afaqulislam707@gmail.com",
  phone: "0346-1863082",
  summary:
    "Full-stack and AI engineer building web applications, AI-powered automation, and SaaS products end to end. Co-Founder & COO at Neofyx, where I lead product engineering and client delivery.",
  site: {
    url: "https://portfolio-landingpage-aui.vercel.app",
  },
} as const;

export const nav = [
  { label: "Work", href: "#work", index: "01" },
  { label: "About", href: "#about", index: "02" },
  { label: "Stack", href: "#stack", index: "03" },
  { label: "Track", href: "#experience", index: "04" },
  { label: "Awards", href: "#recognition", index: "05" },
  { label: "Contact", href: "#contact", index: "06" },
] as const;

export const heroFacts = [
  { term: "Role", value: "Full-Stack & AI Engineer" },
  { term: "Building", value: "Neofyx — AI automation & SaaS" },
  { term: "Focus", value: "Agents, APIs, interface systems" },
  { term: "Based in", value: "Karachi, Pakistan" },
] as const;

export const ticker = [
  "TypeScript",
  "Python",
  "Next.js",
  "React",
  "FastAPI",
  "Tailwind",
  "OpenAI Agents SDK",
  "Groq",
  "Gemini",
  "n8n",
  "Sanity",
  "Clerk",
  "Docker",
  "Cloud Run",
  "Vercel",
  "Framer Motion",
] as const;

export type Project = {
  index: string;
  title: string;
  period: string;
  blurb: string;
  stack: readonly string[];
  metric: string;
  href?: string;
};

export const projects: readonly Project[] = [
  {
    index: "01",
    title: "Kisaan Dost AI",
    period: "2026",
    blurb:
      "A crop disease detector for Pakistani farmers, built on Google Gemini Vision and deployed to Google Cloud Run. Photograph a leaf, get a diagnosis and a treatment note — aimed at growers who have never opened a farming app before.",
    stack: ["Gemini Vision", "Google Cloud Run", "Python"],
    metric: "Silver Tier · AI Seekho 2026",
  },
  {
    index: "02",
    title: "TaskSnap AI",
    period: "2026",
    blurb:
      "Paste a screenshot of any conversation and get back a prioritised, deadline-aware task list. Groq does the extraction with Gemini as fallback, so a slow provider degrades the answer instead of breaking the flow.",
    stack: ["Next.js 16", "React 19", "TypeScript", "Groq", "Tailwind v4"],
    metric: "Chai aur Code · GDG Live Pakistan",
  },
  {
    index: "03",
    title: "CIRO AI",
    period: "2026",
    blurb:
      "A multi-agent crisis response system where specialised agents coordinate triage, communication, and resource routing instead of one model trying to do everything. Built with a team for AI Seekho Phase 2.",
    stack: ["Multi-agent", "OpenAI Agents SDK", "Python"],
    metric: "Phase 2 finalist",
  },
  {
    index: "04",
    title: "AURELIA",
    period: "2026",
    blurb:
      "A luxury fashion e-commerce platform built for the Google Build with AI 2026 workshop, deployed on Google Cloud Run.",
    stack: ["Google Cloud Run", "Build with AI"],
    metric: "Workshop build",
  },
  {
    index: "05",
    title: "Personal AI Employee",
    period: "2025",
    blurb:
      "An agentic personal assistant that actually persists: Obsidian for long-term memory, Python watchers for triggers, and a CLI reasoning engine on top. Gmail, WhatsApp, LinkedIn and social posting each run at a defined autonomy tier.",
    stack: ["Python", "Obsidian", "Agentic workflows"],
    metric: "GIAIC Hackathon 0",
  },
  {
    index: "06",
    title: "MORENT",
    period: "2025",
    blurb:
      "A car rental marketplace with smart filters, a booking calendar, and interactive charts. Next.js on the front, Sanity for content, Clerk for auth.",
    stack: ["Next.js", "Sanity CMS", "Clerk", "shadcn/ui"],
    metric: "GIAIC Hackathon 2025",
  },
  {
    index: "07",
    title: "Taskory",
    period: "2025",
    blurb:
      "A task manager that accepts natural language instead of a form. Python backend with JWT authentication, real-time task updates, and pluggable AI providers.",
    stack: ["Python", "REST API", "JWT", "NLP"],
    metric: "Multi-provider AI",
  },
  {
    index: "08",
    title: "AUI Blogo",
    period: "2025",
    blurb:
      "A production dev blog with incremental static regeneration, a Sanity CMS back end, automatic table of contents, per-post SEO, and dark mode.",
    stack: ["Next.js 14", "ISR", "Sanity CMS", "Vercel"],
    metric: "Live on Vercel",
  },
  {
    index: "09",
    title: "ChatAUI",
    period: "2025",
    blurb:
      "An enterprise-style conversational assistant built on Chainlit with the OpenAI Agents SDK, and OAuth 2.0 handled on the Python backend.",
    stack: ["Chainlit", "OpenAI Agents SDK", "OAuth 2.0"],
    metric: "Agents SDK · OAuth 2.0",
  },
  {
    index: "10",
    title: "25 Python Projects",
    period: "2025",
    blurb:
      "Twenty-five production-ready Python builds — socket games, computer vision, assistants, REST APIs, full-stack integrations. Each one a standalone repository rather than a tutorial fork.",
    stack: ["Python", "Sockets", "OpenCV", "REST"],
    metric: "25 repositories",
  },
] as const;

export const about = {
  heading: "I ship working software, not slide decks.",
  body: [
    "I build full-stack and AI systems end to end — the API, the agent workflow, the interface, and the deployment that makes it survive contact with real users. At Neofyx I co-founded an AI automation and SaaS company in Karachi and run both the technical execution and the client delivery side of it.",
    "My default is to scope a problem down to what actually needs to exist, pick the boring technology where it will not matter, and the interesting one where it will. Specs before code, because changing a document is cheaper than changing a deployed system.",
    "Right now that means agentic AI and workflow automation on one side, and real product engineering on the other — plus a first-year BS in Computational Mathematics at the University of Karachi, which turns out to be excellent training for breaking large systems into smaller correct ones.",
  ],
  facts: [
    { term: "Based in", value: "Karachi, Pakistan" },
    { term: "Currently", value: "Co-Founder & COO, Neofyx" },
    { term: "Studying", value: "BS Computational Mathematics" },
    { term: "Open source", value: "70+ public repositories" },
  ],
  markers: [
    "Scope before building",
    "Spec-driven development",
    "Agents & automation workflows",
    "Interfaces that stay fast",
  ],
} as const;

export type CapabilityGroup = {
  title: string;
  items: readonly string[];
};

export const capabilityGroups: readonly CapabilityGroup[] = [
  {
    title: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "HTML5", "CSS3"],
  },
  {
    title: "Frontend",
    items: [
      "React",
      "Next.js 14 / 16",
      "App Router · ISR",
      "Turbopack",
      "Tailwind CSS",
      "Framer Motion",
      "shadcn/ui",
    ],
  },
  {
    title: "Backend & AI",
    items: [
      "FastAPI",
      "Node tooling",
      "REST API design",
      "JWT · OAuth 2.0",
      "OpenAI Agents SDK",
      "Groq · Gemini · Claude",
      "n8n automation",
      "Multi-agent systems",
    ],
  },
  {
    title: "Platform",
    items: [
      "Google Cloud Run",
      "Docker · Compose",
      "CI/CD",
      "Vercel",
      "Sanity CMS",
      "Clerk",
      "Hugging Face",
      "Database architecture",
    ],
  },
] as const;

export type Role = {
  period: string;
  company: string;
  title: string;
  note: string;
};

export const roles: readonly Role[] = [
  {
    period: "Dec 2025 — Present",
    company: "Neofyx",
    title: "Co-Founder & Chief Operating Officer",
    note: "An AI automation and SaaS startup in Karachi. I lead product engineering and client delivery — structuring workflows, setting technical direction, and building full-stack features with AI-powered functionality end to end, from first spec to deployed client work.",
  },
  {
    period: "Ongoing",
    company: "Independent",
    title: "Full-Stack Developer",
    note: "Project-based work across web and AI. Recent builds include this portfolio, and an n8n automation workflow that generates AI video content and publishes it across YouTube and TikTok using Groq LLMs and the Veo3 API.",
  },
  {
    period: "Sep 2024",
    company: "CodeAlpha",
    title: "Frontend Development Intern",
    note: "A one-month remote internship. Independently designed, built, and deployed three responsive web projects in vanilla HTML, CSS, and JavaScript — an audio player, a calculator, and an image gallery — covering DOM manipulation, responsive layout, and interactive component construction.",
  },
] as const;

export type Qualification = {
  period: string;
  school: string;
  degree: string;
  note?: string;
};

export const education: readonly Qualification[] = [
  {
    period: "In Progress",
    school: "University of Karachi",
    degree: "BS Computational Mathematics",
    note: "First year. Applied mathematics and rigorous problem decomposition.",
  },
  {
    period: "Feb 2024 — Sep 2026",
    school: "GIAIC",
    degree: "Certificate — Full-Stack Development & AI",
    note: "Governor Sindh Initiative for GenAI, Web3 & Metaverse. Batch 1; top 10% performer, 90–95th percentile across three quarters. Agent-based workflows, scalable system design, context engineering.",
  },
  {
    period: "Aug 2022 — Aug 2024",
    school: "Aisha Bawany Government College",
    degree: "Intermediate, Pre-Engineering",
    note: "Grade A. Mathematics, Physics, Chemistry.",
  },
  {
    period: "May 2020 — May 2022",
    school: "Sadiq Public School",
    degree: "SSC, Science",
    note: "Grade A1.",
  },
] as const;

export const recognition: readonly { award: string; detail: string; year: string }[] = [
  {
    award: "Silver Tier Winner",
    detail: "Google AI Seekho 2026 — for Kisaan Dost AI",
    year: "2026",
  },
  {
    award: "Startup Challenge Winner",
    detail: "Neofyx — AI automation & SaaS, Karachi",
    year: "2025",
  },
  {
    award: "Top 10% Performer",
    detail: "GIAIC Batch 1 — 90–95th percentile, three quarters",
    year: "2026",
  },
] as const;

export const socials = [
  { label: "GitHub", href: "https://github.com/afaqulislam" },
  { label: "LinkedIn", href: "https://linkedin.com/in/afaqulislam" },
  { label: "X", href: "https://x.com/afaqulislam708" },
  { label: "Live site", href: "https://portfolio-landingpage-aui.vercel.app" },
] as const;

export const contact = {
  heading: "Building something, or need hands on it?",
  note: "Freelance, contract, or a full-time role — all three are fine. I read every message and reply within two working days.",
  expect: "Useful details: what you are building, roughly when, and whether there is an existing codebase or we are starting from an empty repo.",
} as const;
