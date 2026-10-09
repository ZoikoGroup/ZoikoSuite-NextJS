// Shared tokens + content for the Controller (light) page (Figma 1601:5304, "Frame").

export const FONT_ARCHIVO = "var(--font-archivo), 'Archivo', sans-serif";
export const FONT_INTER = "var(--font-inter), 'Inter', sans-serif";

export type PhotoCard = {
  image: string;
  alt: string;
  title: string;
  body: string;
};

export const PRIORITY_CARDS: PhotoCard[] = [
  {
    image: "/controller-light/question-card-finance-ownership.jpg",
    alt: "Illustrative team collaboration",
    title: "Who owns the finance review?",
    body: "Scope, signal and source context before interpreting a risk.",
  },
  {
    image: "/controller-light/question-card-decision-approval.jpg",
    alt: "Illustrative team collaboration",
    title: "Who approves the decision?",
    body: "Accountability, dependencies and decision rights.",
  },
  {
    image: "/controller-light/question-card-evidence-record.jpg",
    alt: "Illustrative team collaboration",
    title: "What evidence supports the record?",
    body: "Expected result, verification and unresolved evidence.",
  },
];

export type DetailModule = {
  code: string;
  title: string;
  id: string;
  // Only the first module ("Financial Process Visibility") has real detail
  // content in the design; the rest are placeholders consistent with it.
  summary?: string;
  definitions?: { term: string; detail: string }[];
};

export const DETAIL_MODULES: DetailModule[] = [
  {
    id: "visibility",
    code: "D1",
    title: "Financial Process Visibility",
    summary:
      "Which finance workflows need clearer ownership and status? No automated ledger or real-time feed claim.",
    definitions: [
      {
        term: "Exceptions / recovery",
        detail:
          "Draft / Awaiting input / In review / Returned / Complete / Not available.",
      },
      {
        term: "Authority",
        detail:
          "Functional process owners, IT/data, Security and applicable policy owners validate real capability and permissions.",
      },
    ],
  },
  {
    id: "approval",
    code: "D2",
    title: "Review & Approval Accountability",
    summary:
      "Who signs off, in what order, and what evidence a sign-off actually requires.",
  },
  {
    id: "exceptions",
    code: "D3",
    title: "Exception & Resolution Pathways",
    summary:
      "How an exception is raised, routed and closed — and who confirms it's closed.",
  },
  {
    id: "sources",
    code: "D4",
    title: "Source-System Coordination",
    summary:
      "Which system is the source of truth for a given figure, and how conflicts between systems are resolved.",
  },
  {
    id: "evidence",
    code: "D5",
    title: "Evidence & Audit Preparation",
    summary:
      "What supporting evidence is retained, where it lives, and who can produce it on request.",
  },
  {
    id: "leadership",
    code: "D6",
    title: "Leadership Reporting & Review",
    summary:
      "What leadership sees, how often, and what triggers an off-cycle review.",
  },
];

export type JourneyStep = { number: string; title: string; body: string };

export const JOURNEY_STEPS: JourneyStep[] = [
  { number: "01", title: "Intake", body: "Identify issue and origin." },
  { number: "02", title: "Assess", body: "Scope, impact and uncertainty." },
  {
    number: "03",
    title: "Assign",
    body: "Accountable owner and next handoff.",
  },
  {
    number: "04",
    title: "Approve",
    body: "Required policy/authorization.",
  },
  {
    number: "05",
    title: "Execute",
    body: "Bounded assigned action, not automatic execution.",
  },
  {
    number: "06",
    title: "Verify",
    body: "Closure criteria, reviewer and date.",
  },
  {
    number: "07",
    title: "Review",
    body: "Retrospective and unresolved follow-up.",
  },
];

export type RoleLine = { title: string; body: string };

export const ROLE_LINES: RoleLine[] = [
  {
    title: "Controller / CFO",
    body: "Financial review, reconciliation and control narrative; no ERP/ledger automation inferred.",
  },
  {
    title: "CIO",
    body: "Source systems, integration and technical access remain IT-owned.",
  },
  {
    title: "CHRO",
    body: "Sensitive employee/workforce source authority.",
  },
  {
    title: "COO",
    body: "Operating handoffs do not override finance approvals.",
  },
  {
    title: "Tax / Compliance",
    body: "Qualified interpretation and legal/regulatory ownership.",
  },
  {
    title: "Audit / Board",
    body: "Separate oversight and independent evidence boundaries.",
  },
];

export type FaqItem = { question: string; answer: string };

// Answers restate facts already established elsewhere on this page — no new
// commitments are introduced here.
export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Is this live financial software?",
    answer:
      "No. This page illustrates a concept for discussion; it does not establish live product capability.",
  },
  {
    question: "Does it automate the ledger or close?",
    answer:
      "No. No automated ledger, real-time feed, or automatic close is claimed by this overview.",
  },
  {
    question: "Are specific finance integrations supported?",
    answer:
      "Any integration needs to be confirmed during evaluation — none are implied here.",
  },
  {
    question: "Does complete mean audit-approved?",
    answer:
      "No. Closure under this workflow is distinct from independent audit sign-off.",
  },
  {
    question: "Can reviewers access all data?",
    answer:
      "No. Access follows the same role boundaries described above — each role sees only what its function owns.",
  },
  {
    question: "What happens when evidence is missing?",
    answer:
      "It is marked as unresolved rather than treated as a false all-clear, consistent with the review pathway above.",
  },
];
