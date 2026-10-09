// Shared tokens + content for the Audit Committee page (Figma 1601:4848, "Frame").

export const FONT_ARCHIVO = "var(--font-archivo), 'Archivo', sans-serif";
export const FONT_INTER = "var(--font-inter), 'Inter', sans-serif";

export type DecisionValueCard = {
  image: string;
  alt: string;
  title: string;
  body: string;
};

export const DECISION_VALUE_CARDS: DecisionValueCard[] = [
  {
    image: "/audit-committee/value-card-recognize-attention.jpg",
    alt: "Illustrative business collaboration",
    title: "Recognize what needs attention",
    body: "Unresolved issues and decision context without a false all-clear score.",
  },
  {
    image: "/audit-committee/value-card-trace-basis.jpg",
    alt: "Illustrative business collaboration",
    title: "Trace the basis for a position",
    body: "Source, period, submitting party, reviewer and currentness travel together.",
  },
  {
    image: "/audit-committee/value-card-keep-accountable.jpg",
    alt: "Illustrative business collaboration",
    title: "Keep the next action accountable",
    body: "Management response and committee question remain distinct from independent closure.",
  },
];

export type Module = { code: string; title: string };

export const OVERSIGHT_MODULES: Module[] = [
  { code: "AC-01", title: "Oversight Scope & Priorities" },
  { code: "AC-02", title: "Evidence & Provenance" },
  { code: "AC-03", title: "Findings, Exceptions & Risks" },
  { code: "AC-04", title: "Management Responses & Remediation" },
  { code: "AC-05", title: "Committee Questions & Decisions" },
  { code: "AC-06", title: "Reporting, Handoffs & Follow-Through" },
];

export type EvidenceTrailItem = { label: string; value: string };

export const EVIDENCE_TRAIL: EvidenceTrailItem[] = [
  { label: "Origin", value: "Synthetic access-review exception" },
  {
    label: "Management position",
    value: "Response/evidence submitted; not verified closure",
  },
  {
    label: "Reviewer disposition",
    value: "Pending; source/review date not established",
  },
  { label: "Committee question", value: "Who confirms closure?" },
];

export type RoleCard = { index: string; title: string; body: string };

export const ROLE_CARDS: RoleCard[] = [
  {
    index: "01",
    title: "Committee member",
    body: "Authorized summaries and governed questions; cannot silently edit source evidence.",
  },
  {
    index: "02",
    title: "Committee chair",
    body: "Agenda/priorities within actual charter; no administrative override inferred.",
  },
  {
    index: "03",
    title: "Management owner",
    body: "Own responses and remediation; cannot independently attest own actions.",
  },
  {
    index: "04",
    title: "Internal audit liaison",
    body: "Authorized findings/evidence with provenance separate from management.",
  },
  {
    index: "05",
    title: "Controller / Finance",
    body: "Relevant finance response and authorization; cannot speak for committee.",
  },
  {
    index: "06",
    title: "Compliance / Risk",
    body: "Assigned risk/control context; no legal sufficiency claim.",
  },
];

export type JourneyStep = { title: string; body: string };

export const JOURNEY_STEPS: JourneyStep[] = [
  {
    title: "Establish scope",
    body: "Actual charter, period, source and accountable owner.",
  },
  {
    title: "Trace the issue",
    body: "Origin, evidence and as-of status.",
  },
  {
    title: "Review management response",
    body: "Planned action, target and supporting references.",
  },
  {
    title: "Identify review disposition",
    body: "Independent findings remain separately sourced.",
  },
  {
    title: "Record next governance step",
    body: "Committee question and decision source; no fake completion.",
  },
];

export type BoundaryCard = { index: string; title: string; body: string };

export const BOUNDARY_CARDS: BoundaryCard[] = [
  {
    index: "01",
    title: "Independent assurance",
    body: "No audit opinion, independence or control-effectiveness claim from a conceptual overview.",
  },
  {
    index: "02",
    title: "Restricted material",
    body: "Need-to-know, redaction and actual authorization before access; no leakage of private titles/content.",
  },
  {
    index: "03",
    title: "Stale or unavailable",
    body: "Neutral source/review warnings; no green fallback or score.",
  },
  {
    index: "04",
    title: "Confirmed functionality",
    body: "Integrations, upload/export, retention, immutable logs and board decisions need authorized evidence.",
  },
];

export type RelatedCard = {
  image: string;
  alt: string;
  title: string;
  body: string;
};

export const RELATED_CARDS: RelatedCard[] = [
  {
    image: "/audit-committee/related-card-controller.jpg",
    alt: "Illustrative business collaboration",
    title: "Controller",
    body: "Financial management response and finance-owned context.",
  },
  {
    image: "/audit-committee/related-card-compliance-ladder.jpg",
    alt: "Illustrative business collaboration",
    title: "Compliance Ladder",
    body: "Obligation/control ownership and risk context.",
  },
  {
    image: "/audit-committee/related-card-tax-ladder.jpg",
    alt: "Illustrative business collaboration",
    title: "Tax Ladder",
    body: "Tax-specific responsibilities where relevant.",
  },
  {
    image: "/audit-committee/related-card-defining-properties.jpg",
    alt: "Illustrative business collaboration",
    title: "Defining Properties",
    body: "Shared governed-business principles; exact properties require product sign-off.",
  },
];

export type FaqItem = { question: string; answer: string };

// Answer copy restates the Trust & Operating Boundaries facts already stated
// above on this page — no new commitments are introduced here.
export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Does this replace internal or external audit?",
    answer:
      "No. This page is a conceptual overview for discussion — it makes no audit opinion, independence or control-effectiveness claim.",
  },
  {
    question: "Is this a live product screenshot?",
    answer:
      "No. Imagery throughout this page is illustrative of the governance concept, not a screenshot of a live product.",
  },
  {
    question: "Can management close its own finding?",
    answer:
      "No. Management can submit a response and remediation plan, but cannot independently attest to its own closure.",
  },
  {
    question: "Does the page offer board voting or formal minutes?",
    answer:
      "No. This page does not provide board voting, formal minutes, or any other binding governance action.",
  },
  {
    question: "Can it integrate with our systems?",
    answer:
      "Any integration, upload/export, retention or logging capability referenced here needs authorized evidence before it can be confirmed.",
  },
  {
    question: "How is restricted evidence handled?",
    answer:
      "Through need-to-know access and redaction, with actual authorization required before access — no private titles or content are exposed.",
  },
];
