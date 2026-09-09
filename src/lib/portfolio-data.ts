export const contact = {
  email: "yjaltare@charlotte.edu",
  phone: "(704) 369-6586",
  phoneHref: "+17043696586",
  linkedin: "https://www.linkedin.com/in/yashodhan-jaltare-150a4b192/",
  github: "https://github.com/jaltareyr",
};

export const experience = [
  {
    company: "TheoremLabs.io",
    location: "United States",
    roles: [
      {
        title: "Programming Analyst",
        period: "Jun 2026 — Present",
        highlights: [
          "Own an HR technology platform supporting workflows tied to nearly $50M in business revenue across hiring, timekeeping, payroll, billing, and invoicing.",
          "Turn complex HR and payroll processes into standardized digital workflows, owning delivery from requirements and architecture through development and production.",
          "Build and operate the platform on Azure Container Apps, SQL Server, and GitHub CI/CD, including integrations with UKG and enterprise systems.",
          "Replaced fragmented manual processes with automated workflows that improved data integrity, security, and operational scale across payroll and invoicing.",
          "Develop Azure Document Intelligence workflows to extract structured data from business documents and automate downstream processing.",
          "Use automated testing and Codex-assisted development to shorten implementation and debugging cycles while maintaining production quality.",
        ],
      },
      {
        title: "AI Intern (Co-op)",
        period: "Jan 2026 — May 2026",
        highlights: [
          "Owned client-facing digitization work from workflow discovery through architecture, implementation, and production delivery.",
          "Built an AI voice agent with ElevenLabs, Twilio, and GPT-5.2 to handle routine customer requests through natural phone conversations.",
        ],
      },
    ],
  },
  {
    company: "Discovery Education",
    location: "United States",
    roles: [
      {
        title: "Software Engineering Intern",
        period: "May 2025 — Aug 2025",
        highlights: [
          "Built full-stack product APIs connecting Vue.js workflows to serverless AWS services, with authentication and validation designed for production use.",
          "Moved backend workflows to AWS Lambda and API Gateway with infrastructure managed through Terraform, reducing backend infrastructure costs by 25%.",
        ],
      },
    ],
  },
  {
    company: "Bajaj Finserv",
    location: "India",
    roles: [
      {
        title: "Data Engineer",
        period: "Jul 2022 — Jul 2024",
        highlights: [
          "Built Azure Data Factory and PySpark pipelines on Databricks to process and standardize more than 80 million customer records.",
          "Built event-driven merchant-risk pipelines using Event Hubs and AWS Glue, contributing to a 0.18% reduction in UPI transaction fraud.",
          "Reworked EMI data pipelines and storage, cutting loan processing time by 10% and storage costs by 25%.",
          "Owned GitLab CI/CD workflows for data pipelines and production releases, reducing delivery time by 25%.",
          "Tuned analytical workloads across Azure Data Warehouse and Athena to process more than 200 TB of transactional data.",
        ],
      },
    ],
  },
] as const;

export const skillGroups = [
  {
    title: "Languages",
    items: [
      "Python",
      "SQL",
      "JavaScript",
      "TypeScript",
      "Scala",
      "Shell / Bash",
    ],
  },
  {
    title: "Cloud & data engineering",
    items: [
      "Amazon S3",
      "Azure Data Factory",
      "AWS Lambda",
      "Step Functions",
      "Kinesis",
      "Athena",
      "EventBridge",
      "Azure Databricks",
    ],
  },
  {
    title: "AI",
    items: ["GPT-5", "LLMs", "Pinecone", "pgvector", "Azure AI tools"],
  },
  {
    title: "Data & storage",
    items: [
      "PostgreSQL",
      "SQL Server",
      "Delta Lake",
      "Lakehouse Architecture",
      "Data Warehousing",
    ],
  },
  {
    title: "Backend & APIs",
    items: [
      "Node.js",
      "Express.js",
      "Django",
      "FastAPI",
      "REST APIs",
      "WebSockets",
      "Auth0",
    ],
  },
  {
    title: "DevOps & infrastructure",
    items: ["Terraform", "Docker", "CI/CD Pipelines", "Git", "Azure CLI"],
  },
] as const;

export const projects = [
  {
    title: "MetricCV",
    date: "Dec 2025",
    type: "Agentic AI",
    description:
      "An agentic resume-writing platform that turns job descriptions and candidate experience into tailored, ATS-focused resumes with less manual rewriting.",
    technologies: ["LangChain", "LangGraph", "LLMs", "Python"],
  },
  {
    title: "CuraRx",
    date: "Sep 2025",
    type: "Healthcare AI",
    description:
      "An AI-assisted drug research workflow that helps healthcare providers navigate medication information and insurance coverage when evaluating prescribing options.",
    technologies: ["AI agents", "GPT-4", "Document processing", "RAG"],
  },
  {
    title: "EduMind",
    date: "Jan 2025",
    type: "EdTech",
    description:
      "An assessment-generation platform that turns Canvas course materials into instructor-ready questions using a knowledge-graph RAG pipeline, improving educator productivity by 45%.",
    technologies: ["Knowledge graphs", "RAG", "Canvas", "LLMs"],
  },
] as const;

export const education = [
  {
    school: "University of North Carolina at Charlotte",
    degree: "Master of Science in Computer Science",
    detail: "Concentration in Data Science",
    period: "2024 — 2026",
    logo: "/uncc_logo.png",
  },
  {
    school: "College of Engineering Pune (COEP)",
    degree: "Bachelor of Technology in Electrical Engineering",
    detail: "",
    period: "2018 — 2022",
    logo: "/coep_logo.jpeg",
  },
] as const;
