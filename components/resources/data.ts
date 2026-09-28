// Shared tokens + content for the Resources page
// (Figma "1440w light" Resources design).

export const FONT_INTER = "var(--font-inter), 'Inter', sans-serif";

export type GoalCard = { eyebrow: string; title: string; body: string };

export const GOAL_CARDS: GoalCard[] = [
  {
    eyebrow: "EVALUATE",
    title: "Evaluate",
    body: "Understand the platform,\narchitecture, operating\nmodel, Trust posture, and\nenterprise case.",
  },
  {
    eyebrow: "IMPLEMENT",
    title: "Implement",
    body: "Plan integration, migration,\nconfiguration, and rollout\nwith technical guidance.",
  },
  {
    eyebrow: "LEARN",
    title: "Learn",
    body: "Build product and\ngovernance knowledge\nthrough structured training\nand expert sessions.",
  },
  {
    eyebrow: "TROUBLESHOOT",
    title: "Troubleshoot",
    body: "Find task-based answers,\nknown guidance, and\nescalation routes.",
  },
  {
    eyebrow: "STAY CURRENT",
    title: "Stay current",
    body: "Follow product,\ngovernance, research,\nevent, and editorial\nupdates.",
  },
];

export type FeaturedCard = { eyebrow: string; title: string; body: string; meta: string[] };

export const FEATURED_CARDS: FeaturedCard[] = [
  {
    eyebrow: "Brief",
    title: "Executive Platform Brief",
    body: "Category, control model, and operating\ncase for executives, boards, and\ninvestors.",
    meta: ["Last reviewed: Sep 2026", "PDF · 8 pages"],
  },
  {
    eyebrow: "Brief",
    title: "Why ZoikoSuite Is Not an ERP",
    body: "Where the governance layer sits\nrelative to incumbent transaction\nsystems, for CFO, CIO, and\nprocurement.",
    meta: ["Last reviewed: Sep 2026", "PDF · 6 pages"],
  },
  {
    eyebrow: "Architecture",
    title: "Governance Architecture Brief",
    body: "Policy evaluation, authority resolution,\nand the governed execution path for\narchitecture, risk, and audit teams.",
    meta: ["v1.2 · Sep 2026", "PDF"],
  },
  {
    eyebrow: "Security",
    title: "Security & Trust Brief",
    body: "Control objectives, claim status, and the\nresidency model by deployment for\nCISO, privacy, and procurement.",
    meta: ["Reviewed: Sep 2026", "PDF"],
  },
];

export type DirectoryCard = { icon: string; title: string; body: string; cta: string; wide?: boolean };

export const DIRECTORY_CARDS: DirectoryCard[] = [
  {
    icon: "/resources/div.icon-chip.png",
    title: "Executive Briefs",
    body: "Concise decision-maker reference documentation.",
    cta: "Read briefs →",
  },
  {
    icon: "/resources/div.icon-chip (1).png",
    title: "Documentation",
    body: "Authoritative product and technical reference.",
    cta: "Open documentation →",
  },
  {
    icon: "/resources/div.icon-chip (2).png",
    title: "Knowledge Base",
    body: "Problem-solving and how-to content for users, admins,\nand implementers.",
    cta: "Search Knowledge Base →",
  },
  {
    icon: "/resources/div.icon-chip (3).png",
    title: "Training Academy",
    body: "Structured learning for evaluation, onboarding, and role\ndevelopment.",
    cta: "Explore Training →",
  },
  {
    icon: "/resources/div.icon-chip (4).png",
    title: "Webinars & Events",
    body: "Upcoming, live, and on-demand expert sessions.",
    cta: "View Webinars & Events →",
  },
  {
    icon: "/resources/div.icon-chip (5).png",
    title: "Blog & Insights",
    body: "Editorial analysis, product thinking, and research\nsummaries.",
    cta: "Read Insights →",
  },
  {
    icon: "/resources/div.icon-chip (6).png",
    title: "Templates & Tools",
    body: "Practical checklists, worksheets, and planning utilities\n— where approved.",
    cta: "Explore Tools →",
    wide: true,
  },
];

export const ROLE_PATHS_IMG = "/resources/div.card (1).png";
export const DILIGENCE_IMG = "/resources/div.card.png";
export const DOC_TREE_IMG = "/resources/div.doc-tree.png";

export type TopicCard = { title: string; body: string };

export const TOPIC_CARDS: TopicCard[] = [
  {
    title: "Platform & Governance",
    body: "Governed execution, policy/authority, data model, operating intelligence.",
  },
  { title: "Finance & Tax", body: "Ledger, close, AP/AR, tax context, controls, evidence." },
  {
    title: "Workforce & Payroll",
    body: "Payroll, workforce compliance, benefits/leave, implementation.",
  },
  {
    title: "Legal & Commercial",
    body: "Contracts, clauses, obligations, vendor diligence, authority.",
  },
  {
    title: "Compliance & Obligations",
    body: "Obligation registry, filings, escalations, evidence.",
  },
  {
    title: "Evidence & Audit",
    body: "Evidence architecture, manifests, lineage, audit readiness.",
  },
  {
    title: "Intelligence & Reporting",
    body: "Analytics, anomaly/forecasting/decision support, executive reporting.",
  },
  {
    title: "Trust & Security",
    body: "Security, compliance, privacy, residency, Responsible AI, accessibility, status.",
  },
  {
    title: "Integration & Migration",
    body: "APIs, events, coexistence, shadow mode, migration integrity.",
  },
  {
    title: "Administration & Adoption",
    body: "Setup, roles, permissions, onboarding, change management, training.",
  },
];

export type FilterGroup = { title: string; options: string[] };

export const FILTER_GROUPS: FilterGroup[] = [
  {
    title: "Resource type",
    options: [
      "Executive Brief",
      "Documentation",
      "Knowledge Base",
      "Training",
      "Webinar / Event",
      "Blog / Insight",
    ],
  },
  {
    title: "Audience",
    options: ["Executive", "IT / Security", "Finance", "Developer / Integrator"],
  },
  { title: "Journey stage", options: ["Evaluate", "Implement", "Learn", "Troubleshoot"] },
  { title: "Access", options: ["Public", "Registration required", "Customer sign-in"] },
];

export type RegistryCard = { eyebrow: string; title: string; body: string; meta: string[] };

export const REGISTRY_CARDS: RegistryCard[] = [
  {
    eyebrow: "Webinar",
    title: "Governed Close: A Finance Leader's View",
    body: "Live session on evidence-ready close across entities.",
    meta: ["Finance", "Live · Oct 2026"],
  },
  {
    eyebrow: "Insight",
    title: "Why governance has to precede execution",
    body: "Editorial perspective on control-before-action design.",
    meta: ["Editorial", "6 min read"],
  },
  {
    eyebrow: "Security",
    title: "Security & Trust Brief",
    body: "Control objectives and claim status by deployment.",
    meta: ["IT / Security", "PDF"],
  },
  {
    eyebrow: "Brief",
    title: "Executive Platform Brief",
    body: "Category, control model, and operating case in one document.",
    meta: ["Executive", "PDF"],
  },
  {
    eyebrow: "Documentation",
    title: "Platform API Reference",
    body: "Versioned endpoints, events, identity, and integration patterns.",
    meta: ["Developer", "HTML"],
  },
  {
    eyebrow: "Knowledge Base",
    title: "Configuring SSO for your workspace",
    body: "Step-by-step setup, prerequisites, and troubleshooting for SSO.",
    meta: ["IT / Security", "Article"],
  },
  {
    eyebrow: "Training",
    title: "ZoikoSuite Foundations",
    body: "Self-paced introduction to the platform's governance model.",
    meta: ["All audiences", "Self-paced · 45 min"],
  },
  {
    eyebrow: "Documentation",
    title: "Migration integrity reference",
    body: "Completeness, referential integrity, and lineage validation.",
    meta: ["IT / Security", "HTML"],
  },
  {
    eyebrow: "Knowledge Base",
    title: "Reconciling a failed close cycle",
    body: "Symptom-based guidance for close reconciliation issues.",
    meta: ["Finance", "Article"],
  },
  {
    eyebrow: "Webinar",
    title: "Integration Architecture Deep Dive",
    body: "Recorded session on API/event contracts and provenance.",
    meta: ["Developer", "On-demand"],
  },
  {
    eyebrow: "Training",
    title: "Administering ZoikoSuite",
    body: "Role/permission setup and operating configuration.",
    meta: ["IT / Security", "Instructor-led"],
  },
  {
    eyebrow: "Insight",
    title: "The case against dashboard-only proof",
    body: "Why architecture and evidence matter more than a reporting layer.",
    meta: ["Editorial", "5 min read"],
  },
];

export type SimpleCard = { eyebrow: string; title: string; body: string; meta?: string[] };

export const KB_ARTICLES: SimpleCard[] = [
  {
    eyebrow: "Article",
    title: "Configuring SSO for your workspace",
    body: "Prerequisites, steps, expected result, and troubleshooting.",
  },
  {
    eyebrow: "Article",
    title: "Reconciling a failed close cycle",
    body: "Symptom-based guidance with escalation route.",
  },
];

export const TRAINING_CARDS: SimpleCard[] = [
  {
    eyebrow: "Self-paced · 45 min",
    title: "ZoikoSuite Foundations",
    body: "Introduction to the governance model for all audiences.",
  },
  {
    eyebrow: "Instructor-led",
    title: "Administering ZoikoSuite",
    body: "Role/permission setup and operating configuration.",
  },
];

export type WebinarCard = { badge: string; badgeTone: "live" | "ondemand"; title: string; body: string };

export const WEBINAR_CARDS: WebinarCard[] = [
  {
    badge: "UPCOMING · LIVE",
    badgeTone: "live",
    title: "Governed Close: A Finance Leader's View",
    body: "Oct 2, 2026 · 60 min · Registration required",
  },
  {
    badge: "ON-DEMAND",
    badgeTone: "ondemand",
    title: "Integration Architecture Deep Dive",
    body: "Recorded · 50 min · Captions available",
  },
  {
    badge: "ON-DEMAND",
    badgeTone: "ondemand",
    title: "Governance Lifecycle Explained",
    body: "Recorded · 35 min · Captions available",
  },
];

export const BLOG_CARDS: SimpleCard[] = [
  {
    eyebrow: "Editorial",
    title: "Why governance has to precede execution",
    body: "Perspective on control-before-action design.",
    meta: ["By ZoikoSuite Editorial", "Sep 2026"],
  },
  {
    eyebrow: "Editorial",
    title: "The case against dashboard-only proof",
    body: "Why architecture and evidence outrank a reporting layer.",
    meta: ["By ZoikoSuite Editorial", "Jan 2026"],
  },
  {
    eyebrow: "Research",
    title: "Fragmentation costs in multi-entity operations",
    body: "Summary of operating patterns across regulated enterprises.",
    meta: ["By ZoikoSuite Research", "Aug 2026"],
  },
];

export const TOOL_CARDS: SimpleCard[] = [
  {
    eyebrow: "Checklist",
    title: "Migration readiness checklist",
    body: "Version, owner, and assumptions stated; editable download.",
    meta: ["v1.0", "Reviewed Sep 2026"],
  },
  {
    eyebrow: "Worksheet",
    title: "Entity & jurisdiction mapping worksheet",
    body: "Scope, required data, and instructions with examples.",
    meta: ["v1.0"],
  },
  {
    eyebrow: "Assessment",
    title: "Governance readiness questionnaire",
    body: "Purpose, methodology, and privacy notice disclosed upfront.",
    meta: ["No hidden lead capture"],
  },
];

export type FaqItem = { question: string; answer: string };

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "What resources are available for ZoikoSuite?",
    answer:
      "Executive briefs, documentation, knowledge, training, webinars/events, insights, and approved practical tools — only live destinations are shown here.",
  },
  {
    question: "Where can I find technical documentation?",
    answer:
      "The Documentation section above is the authoritative product and technical reference, separate from marketing and editorial content.",
  },
  {
    question: "Where can I find security, privacy, or compliance information?",
    answer:
      "Trust Center holds compliance/security status; the Resources page curates and explains but does not duplicate it.",
  },
  {
    question: "Do I need to submit a form to access resources?",
    answer:
      "No. Executive diligence basics are public — marketing opt-in is never required for legally or trust-required access.",
  },
  {
    question: "How do I know a resource is current?",
    answer:
      "Review dates and deprecation state are shown on every resource card before you open it.",
  },
  {
    question: "Where can I learn how to use ZoikoSuite?",
    answer: "The Training Academy offers structured learning by role and use case.",
  },
  {
    question: "Where can I get help with an issue?",
    answer:
      "The Knowledge Base provides task-based self-service with escalation to Support when self-service isn't enough.",
  },
  {
    question: "Can I share or download resources?",
    answer: "Where a download is approved, it is stated on the resource card with its version.",
  },
  {
    question: "How do I get an enterprise briefing?",
    answer: "Request an enterprise briefing through the contact route on the Executive Briefs page.",
  },
];
