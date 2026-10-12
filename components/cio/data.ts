// Shared tokens + content for the CIO page (Figma 1610:6999, "Frame").

export const FONT_INTER = "var(--font-inter), 'Inter', sans-serif";

export type DecisionQuestion = {
  code: string;
  question: string;
  body: string;
  href: string;
};

export const DECISION_QUESTIONS: DecisionQuestion[] = [
  {
    code: "QUESTION 01",
    question: "Where are decisions getting stuck?",
    body: "See where work waits, who owns the next step, and why it is blocked.",
    href: "#h-caps",
  },
  {
    code: "QUESTION 02",
    question: "Who owns each control?",
    body: "Make approvers, reviewers and escalation owners visible.",
    href: "#h-caps",
  },
  {
    code: "QUESTION 03",
    question: "Which systems stay authoritative?",
    body: "Keep each system of record clear when a governance layer sits between them.",
    href: "#h-arch",
  },
  {
    code: "QUESTION 04",
    question: "What evidence can leadership rely on?",
    body: "Separate what is verified from what still needs review.",
    href: "#h-assurance",
  },
];

export type CapabilityArea = {
  code: string;
  title: string;
  subtitle: string;
  lookFor: string;
  example: string;
  notClaimed: string;
};

export const CAPABILITY_AREAS: CapabilityArea[] = [
  {
    code: "AREA 01",
    title: "Operating visibility",
    subtitle: "Find the decisions that need attention.",
    lookFor:
      "A single place to see which decisions are waiting, who owns the next step, and how long they've been stuck.",
    example:
      "A request sits with its current owner, age, and status visible in one view — not scattered across tools.",
    notClaimed:
      "This page does not claim a live, confirmed dashboard exists today — confirm current functionality during evaluation.",
  },
  {
    code: "AREA 02",
    title: "Governance and decision rights",
    subtitle: "Keep responsibility visible from request to decision.",
    lookFor:
      "Who is authorized to approve, review, or escalate a decision, and whether that authority is kept separate from who requested it.",
    example:
      "An approval routes to the role authorized under your access model, with the requester unable to also approve their own request.",
    notClaimed:
      "No specific approval workflow or role hierarchy is asserted without an approved source for your deployment.",
  },
  {
    code: "AREA 03",
    title: "Systems, data, and integrations",
    subtitle: "Keep system boundaries clear.",
    lookFor:
      "Which system stays the authoritative source for a given record, and how a governance layer references it without duplicating it.",
    example:
      "A governance layer reads from your HR or ERP system of record rather than maintaining a second, competing copy.",
    notClaimed:
      "No specific integration, connector, or data flow is claimed as available without verification for your environment.",
  },
  {
    code: "AREA 04",
    title: "Change, exceptions, and escalation",
    subtitle: "Make exceptions actionable, not invisible.",
    lookFor:
      "How an exception gets raised, who it routes to, and whether it stays visible until it's resolved.",
    example:
      "An exception stays open and flagged until someone with the right authority closes it — it doesn't quietly disappear.",
    notClaimed:
      "This page does not claim a specific escalation SLA or automated routing without confirming it against your configuration.",
  },
  {
    code: "AREA 05",
    title: "Security, assurance, and evidence",
    subtitle: "Give assurance reviewers the evidence they need.",
    lookFor:
      "What evidence a security or audit reviewer can pull for a given decision, and where that evidence actually lives.",
    example:
      "A reviewer can trace a decision back to its source record, approval, and timestamp without asking around for it.",
    notClaimed:
      "No certification, control, or audit outcome is asserted here without an approved source — see the Trust section below.",
  },
  {
    code: "AREA 06",
    title: "Evaluation, rollout, and operating ownership",
    subtitle: "Evaluate fit before committing to a rollout.",
    lookFor:
      "What a realistic evaluation and rollout path looks like, and who would own the operating model afterward.",
    example:
      "A phased evaluation against your own priorities, with ownership of day-to-day operation agreed before rollout — not assumed.",
    notClaimed:
      "No implementation timeline or pricing is implied by this page — that's confirmed directly with your team.",
  },
];

export type EvidenceCard = { title: string };

export const EVIDENCE_CARDS: EvidenceCard[] = [
  { title: "Security" },
  { title: "Privacy" },
  { title: "Availability" },
  { title: "Access" },
  { title: "Auditability" },
];

export type ChecklistTopic = { label: string };

export const CHECKLIST_TOPICS: ChecklistTopic[] = [
  { label: "Where decisions are currently getting stuck" },
  { label: "Who should own each type of approval" },
  { label: "Which systems must stay authoritative" },
  { label: "How exceptions get escalated today" },
  { label: "What evidence your reviewers currently need" },
  { label: "What a realistic rollout would require" },
  { label: "Who would own this operating model day to day" },
];

export const ROLE_TABS = [
  "CIO",
  "COO",
  "Controller",
  "CHRO",
  "Compliance leader",
  "Tax leader",
  "Audit Committee",
  "Board",
];

export type RolePanel = {
  decisionLens: string;
  description: string;
};

export const ROLE_PANELS: Record<string, RolePanel> = {
  CIO: {
    decisionLens: "CIO",
    description:
      "Which systems stay authoritative, and where do interfaces and exceptions need an owner? The CIO sets the technology boundaries within which the decision can be made.",
  },
  COO: {
    decisionLens: "COO",
    description:
      "How does this decision affect the operating workflow end to end? The COO looks at handoffs between teams and whether the process actually runs as designed.",
  },
  Controller: {
    decisionLens: "Controller",
    description:
      "Does this decision affect financial reporting or controls? The Controller checks that the right approvals and evidence exist before a number moves.",
  },
  CHRO: {
    decisionLens: "CHRO",
    description:
      "Does this decision touch workforce policy or employee data? The CHRO sets the people-related boundaries the decision has to respect.",
  },
  "Compliance leader": {
    decisionLens: "Compliance leader",
    description:
      "Does this decision create or close a compliance obligation? The compliance leader checks it against applicable policy and regulatory requirements.",
  },
  "Tax leader": {
    decisionLens: "Tax leader",
    description:
      "Does this decision have a tax or statutory consequence? The tax leader confirms the jurisdictional and reporting impact before it's finalized.",
  },
  "Audit Committee": {
    decisionLens: "Audit Committee",
    description:
      "Is this decision independently reviewable after the fact? The Audit Committee cares about the evidence trail, not about speeding up the decision itself.",
  },
  Board: {
    decisionLens: "Board",
    description:
      "Does this decision need to be reported upward? The Board sees a summary of material decisions, not the operational detail behind each one.",
  },
};

export const EVALUATION_PRIORITIES = [
  "Operating visibility",
  "Governance",
  "Integrations",
  "Security/assurance",
  "Change/exception flow",
  "Procurement",
];

export type FaqItem = { question: string; answer: string };

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "What does a CIO need from governed business operations?",
    answer:
      "Clear system boundaries, visible decision rights, and evidence that can be produced on request — without duplicating the systems you already run.",
  },
  {
    question: "Does ZoikoSuite replace ERP, HR, finance or identity systems?",
    answer:
      "No. The intent is for your existing systems to stay authoritative; a governance layer would sit alongside them, not replace them.",
  },
  {
    question: "What are the defining properties of governed operations?",
    answer:
      "Clear system ownership, visible decision rights, traceable exceptions, and evidence that travels with a decision — the six areas above walk through each one.",
  },
  {
    question: "Which integrations are available?",
    answer:
      "Specific connectors and event types need to be confirmed for your environment — see the architecture section above.",
  },
  {
    question: "Can a CIO review exceptions and approvals?",
    answer:
      "That visibility is the intent of the operating-visibility and governance areas above; actual access follows your approved control model.",
  },
  {
    question: "What security and compliance controls are included?",
    answer:
      "See the Trust and Control Evidence section above — each area is marked “Evidence pending” until an approved source confirms it.",
  },
  {
    question: "How should we evaluate fit for our organization?",
    answer:
      "Start with the seven-topic checklist above, then bring those priorities to a CIO-focused briefing using the form below.",
  },
  {
    question: "Is pricing or implementation timing available?",
    answer:
      "Not on this page — pricing and timing are discussed directly once we understand your priorities and architecture.",
  },
];
