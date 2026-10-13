// Shared tokens + content for the European Enterprise Sales page (Figma 1792:672).

export const FONT_ARCHIVO = "var(--font-archivo), 'Archivo', sans-serif";

export const COLORS = {
  darkBg: "#092b35",
  darkBgAlt: "#082632",
  gold: "#dfb95d",
  goldBorder: "#cda85b",
  goldOnDark: "#987b37",
  headingTeal: "#153d49",
  bodyTeal: "#637b82",
  accentTeal: "#207e83",
  border: "#dce5e5",
  borderSoft: "#cbdadb",
  lightBg: "#ecefe9",
  pageCream: "#f6f5ef",
  paleBg: "#f8faf9",
  heroBody: "#b4c8cc",
  tagText: "#c3d2d4",
  tagBorder: "#49656b",
  outlineBtnBorder: "#5c7b84",
  placeholder: "#757575",
  badgeBg: "rgba(223,185,93,0.74)",
};

export type Topic = {
  code: string;
  title: string;
  description: string;
};

export const DISCUSSION_TOPICS: Topic[] = [
  {
    code: "01 / DISCUSSION TOPIC",
    title: "Enterprise Platform Evaluation",
    description: "Clarify your business problem, evaluation stage, and desired outcomes.",
  },
  {
    code: "02 / DISCUSSION TOPIC",
    title: "Multi-Country Operations & Rollout",
    description: "Discuss operating geography, business units, and proposed rollout scope.",
  },
  {
    code: "03 / DISCUSSION TOPIC",
    title: "IT Architecture, Security & Integration",
    description: "Outline technical assessment and due diligence priorities.",
  },
  {
    code: "04 / DISCUSSION TOPIC",
    title: "Commercial Evaluation & Procurement",
    description: "Explain your purchasing process and commercial evaluation needs.",
  },
  {
    code: "05 / DISCUSSION TOPIC",
    title: "Workforce, Finance & Governance Requirements",
    description: "Describe cross-functional use cases and evidence expectations.",
  },
  {
    code: "06 / DISCUSSION TOPIC",
    title: "Existing Customer Expansion & Executive Briefings",
    description: "Discuss additional teams, offices, or strategic evaluation needs.",
  },
];

export type ProcessStep = {
  code: string;
  title: string;
  body: string;
  image: string;
  alt: string;
};

export const PROCESS_STEPS: ProcessStep[] = [
  {
    code: "01 / DEFINE",
    title: "Describe your priorities",
    body: "Choose your topic and explain the business outcome you want to evaluate.",
    image: "/european-enterprise-sales/step-define-priorities.jpg",
    alt: "Illustration of a professional reviewing enterprise requirements",
  },
  {
    code: "02 / CONTEXT",
    title: "Add your operational context",
    body: "Share your locations and evaluation stage. Country selections describe interest; availability must be confirmed.",
    image: "/european-enterprise-sales/step-add-context.jpg",
    alt: "Illustration of technical and regional evaluation",
  },
  {
    code: "03 / REVIEW",
    title: "Review your enquiry",
    body: "Provide a business contact and check your details. The appropriate team determines next steps.",
    image: "/european-enterprise-sales/step-review-enquiry.jpg",
    alt: "Illustration of a professional sending an enterprise enquiry",
  },
];

export const ENQUIRY_TOPICS = DISCUSSION_TOPICS.map((t) => t.title);

export const ROLLOUT_COUNTRIES = [
  "United Kingdom",
  "Ireland",
  "France",
  "Germany",
  "Netherlands",
  "Other / multiple regions",
];

export const RELATIONSHIP_OPTIONS = [
  "New prospective customer",
  "Existing customer",
  "Partner",
  "Other",
];

export const ORG_SIZE_OPTIONS = [
  "1–200 employees",
  "201–1,000 employees",
  "1,001–5,000 employees",
  "5,000+ employees",
];

export const EVALUATION_STAGE_OPTIONS = [
  "Early research",
  "Actively comparing options",
  "Finalizing a shortlist",
  "Ready to move forward",
];

export const DECISION_TIMELINE_OPTIONS = [
  "Within 3 months",
  "3–6 months",
  "6–12 months",
  "No set timeline",
];

export type RequirementCard = {
  title: string;
  body: string;
};

export const REQUIREMENT_CARDS: RequirementCard[] = [
  {
    title: "Operational footprint",
    body: "Describe your operating countries, business units, and proposed rollout scope.",
  },
  {
    title: "Technical assessment",
    body: "Outline architecture, integration, identity, or security questions for review.",
  },
  {
    title: "Purchasing process",
    body: "Share your evaluation stage, procurement needs, and approximate decision timeline.",
  },
  {
    title: "Evidence expectations",
    body: "Identify documentation you need to assess fit. Product and regional capabilities require confirmation.",
  },
];

export type RouteLink = {
  label: string;
  tag: string;
  current?: boolean;
  bold?: boolean;
};

export type DirectoryEntry = {
  eyebrow: string;
  name: string;
  address: string[];
  routes: RouteLink[];
};

export const DIRECTORY_ENTRIES: DirectoryEntry[] = [
  {
    eyebrow: "Global Headquarters",
    name: "Zoiko Tech Inc.",
    address: ["1401 21st Street, Suite R", "Sacramento, CA 95811, United States"],
    routes: [
      { label: "Enterprise sales", tag: "Global sales" },
      { label: "Corporate enquiries", tag: "Corporate matters" },
      { label: "Media enquiries", tag: "Press" },
      { label: "Partner enquiries", tag: "Local preview" },
    ],
  },
  {
    eyebrow: "European Headquarters",
    name: "Zoiko Tech",
    address: ["167–169 Great Portland Street, 5th Floor", "London W1W 5PF, United Kingdom"],
    routes: [
      { label: "European enterprise sales", tag: "Current page", current: true, bold: true },
      { label: "UK and European partnerships", tag: "Partnerships" },
      { label: "Privacy and data protection", tag: "Privacy assistance" },
      { label: "Regional support", tag: "Support" },
    ],
  },
];

export type FaqItem = { question: string; answer: string };

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "How do I contact European sales?",
    answer:
      "Use the enquiry form above — it routes your request to the European enterprise sales team shown in the headquarters directory.",
  },
  {
    question: "What information should I include?",
    answer:
      "Your business need, operational footprint, technical requirements, and purchasing process — the four areas outlined in the \"Bring the questions\" section above.",
  },
  {
    question: "Can I discuss multi-country requirements?",
    answer:
      "Yes. The enquiry form lets you select the rollout countries you're considering, including United Kingdom, Ireland, France, Germany, and the Netherlands.",
  },
  {
    question: "Can an existing customer discuss expansion?",
    answer:
      "Yes — \"Existing Customer Expansion & Executive Briefings\" is one of the discussion topics available in the form above.",
  },
  {
    question: "Where do privacy, support, and partnership requests go?",
    answer:
      "Each has its own route in the headquarters directory above — privacy and data protection, regional support, and UK and European partnerships are listed separately from enterprise sales.",
  },
  {
    question: "Should I attach procurement or security documents?",
    answer:
      "Not through this form. Describe your procurement and security requirements in the message field, and documents can be exchanged once the appropriate team follows up.",
  },
];
