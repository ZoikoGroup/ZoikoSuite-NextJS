// Shared tokens + content for the Workforce & Payroll page
// (Figma 1610:6451, "Frame").

export const FONT_INTER = "var(--font-inter), 'Inter', sans-serif";

export type PropertyCard = {
  code: string;
  title: string;
  detail: string;
};

export const DEFINING_PROPERTIES: PropertyCard[] = [
  {
    code: "PROPERTY 01",
    title: "System ownership",
    detail:
      "Each workforce record keeps a clear authoritative source, so a change is never edited in two places at once.",
  },
  {
    code: "PROPERTY 02",
    title: "Effective-dated change",
    detail:
      "Changes carry an effective date, so the record reflects exactly when a change takes hold — not just when it was entered.",
  },
  {
    code: "PROPERTY 03",
    title: "Role-separated approval",
    detail:
      "The person requesting a change and the person approving it are meant to be different roles, consistent with separation of duties.",
  },
  {
    code: "PROPERTY 04",
    title: "Exception visibility",
    detail:
      "Unresolved exceptions stay visible rather than being silently dropped from the record.",
  },
  {
    code: "PROPERTY 05",
    title: "Evidence continuity",
    detail:
      "Supporting evidence travels with the change from request through to payroll handoff, rather than living in a separate system.",
  },
  {
    code: "PROPERTY 06",
    title: "Reconciliation & handoff",
    detail:
      "A payroll handoff is expected to be acknowledged and reconciled, not assumed complete once it is sent.",
  },
];

export type LifecycleStep = {
  number: string;
  title: string;
  heading: string;
  body: string;
  observableState: string;
  evidenceReference: string;
};

export const LIFECYCLE_STEPS: LifecycleStep[] = [
  {
    number: "1",
    title: "Request change",
    heading: "1. Request change",
    body: "A workforce change is requested with its worker reference, employing entity, effective date and change category, linked to the record in the source system.",
    observableState: "Submitted",
    evidenceReference: "Source event reference",
  },
  {
    number: "2",
    title: "Validate source/period",
    heading: "2. Validate source/period",
    body: "The change is checked against the authoritative worker record and the correct effective period before it proceeds.",
    observableState: "Validated",
    evidenceReference: "Source record reference",
  },
  {
    number: "3",
    title: "Review policy & approvals",
    heading: "3. Review policy & approvals",
    body: "The change is reviewed against applicable policy, and routed to the role authorized to approve it.",
    observableState: "In review",
    evidenceReference: "Policy / approval reference",
  },
  {
    number: "4",
    title: "Ready for payroll",
    heading: "4. Ready for payroll",
    body: "Once approved, the change is marked ready and queued for the next payroll handoff.",
    observableState: "Ready",
    evidenceReference: "Approval reference",
  },
  {
    number: "5",
    title: "Receive handoff acknowledgment",
    heading: "5. Receive handoff acknowledgment",
    body: "The receiving payroll system acknowledges the handoff, so the sending side has confirmation it was received.",
    observableState: "Acknowledged",
    evidenceReference: "Handoff acknowledgment reference",
  },
  {
    number: "6",
    title: "Reconcile exceptions and retain evidence",
    heading: "6. Reconcile exceptions and retain evidence",
    body: "Any exceptions raised during the handoff are reconciled, and the full evidence trail is retained for later review.",
    observableState: "Reconciled",
    evidenceReference: "Reconciliation record reference",
  },
];

export const LIFECYCLE_NOTE =
  "Illustrative — source changes, payroll processor support and workflow triggers are verified with Product before any claim is made.";

export type ControlTab = {
  code: string;
  title: string;
  description: string;
};

export const CAPABILITY_CONTROLS: ControlTab[] = [
  {
    code: "CONTROL 01",
    title: "Change intake",
    description:
      "How a workforce change enters the workflow, with the reference details it needs to carry.",
  },
  {
    code: "CONTROL 02",
    title: "Payroll readiness",
    description:
      "What has to be true before a change is considered ready to hand off to payroll.",
  },
  {
    code: "CONTROL 03",
    title: "Approvals & responsibilities",
    description:
      "Who is authorized to approve a change, kept separate from who requested it.",
  },
  {
    code: "CONTROL 04",
    title: "Exceptions & resolution",
    description:
      "How an exception is flagged, who resolves it, and how that resolution is recorded.",
  },
  {
    code: "CONTROL 05",
    title: "Evidence & review",
    description:
      "What supporting evidence is kept, and how a later reviewer can find it.",
  },
  {
    code: "CONTROL 06",
    title: "System handoffs",
    description:
      "How a change moves between the source system, review, and the payroll processor.",
  },
];

export type ArchNode = { title: string; subtitle: string; shaded?: boolean };

export const ARCH_NODES: ArchNode[] = [
  { title: "Worker / HR source", subtitle: "Authoritative record" },
  {
    title: "Governed review context",
    subtitle: "Review, approvals, evidence",
    shaded: true,
  },
  { title: "Payroll processor", subtitle: "Calculation & payment stay here" },
  { title: "Finance close / reporting", subtitle: "Reconciled handoff" },
];

export type QaItem = { question: string; answer: string };

export const INTEGRATION_QA: QaItem[] = [
  {
    question: "What is the authoritative worker record?",
    answer:
      "The worker or HR source system of record stays authoritative — this workflow references it rather than replacing it.",
  },
  {
    question: "How are changes exchanged?",
    answer:
      "Through a verified integration between the source system and the governed review context, subject to your confirmed configuration.",
  },
  {
    question: "Who handles payroll calculation and payment?",
    answer:
      "The payroll processor — calculation and payment stay there; this workflow governs the handoff, not the calculation itself.",
  },
  {
    question: "How are rejections retried?",
    answer:
      "A rejected handoff routes back to the review context with the rejection reason attached, so it can be corrected and resubmitted.",
  },
  {
    question: "How is access/evidence controlled?",
    answer:
      "Through the same role-separated access model described above — who can view, propose, approve and export follows the approved control model for your deployment.",
  },
];

export type TrustCard = { title: string; body: string };

export const TRUST_CARDS: TrustCard[] = [
  {
    title: "Access boundaries",
    body: "Who can view, propose, approve and export is meant to follow a role-separated model. Actual permissions come from an approved control model for your deployment.",
  },
  {
    title: "Review history",
    body: "Each review is intended to keep the policy version, decision, reason and timestamp together, so a later reviewer can see why a decision was made.",
  },
  {
    title: "Data-minimized previews",
    body: "Previews reference records by ID and category rather than showing pay or personal details. Illustrations on this page are fictional and contain no employee data.",
  },
  {
    title: "Evidence and retention questions",
    body: "Retention periods, export rules and redaction behavior are deployment questions. We confirm them with you rather than assume a default.",
  },
];

export type ConfirmRow = { topic: string; detail: string };

export const CONFIRM_ROWS: ConfirmRow[] = [
  {
    topic: "Single sign-on and access model",
    detail: "SSO and role model for your deployment",
  },
  {
    topic: "Certifications and attestations",
    detail:
      "Any assurance relevant to your review (see the Certifications page for currently published status)",
  },
  {
    topic: "Data residency",
    detail: "Where workforce data is stored and processed",
  },
  {
    topic: "Retention and export",
    detail: "Retention periods and authorized export rules",
  },
  {
    topic: "Jurisdiction and tax coverage",
    detail: "Countries, tax and statutory scope for your markets",
  },
  {
    topic: "Uptime and support commitments",
    detail: "Service levels and support model for your deployment",
  },
];

export type OutcomeCard = { title: string; body: string };

export const OUTCOME_CARDS: OutcomeCard[] = [
  {
    title: "Shorter review loops",
    body: "Designed to help reviewers see the change, its effective date and the applicable policy in one place, so fewer back-and-forth requests are needed.",
  },
  {
    title: "Fewer ambiguous handoffs",
    body: "Designed to help teams see who owns each step and whether the receiving system has acknowledged the handoff.",
  },
  {
    title: "Traceable decisions",
    body: "Designed to help finance, compliance and audit reviewers trace a payroll-impacting decision back to its source event, policy and approval.",
  },
];

export const ROLE_TABS: { label: string; pending?: boolean }[] = [
  { label: "CHRO" },
  { label: "Controller" },
  { label: "COO" },
  { label: "CIO" },
  { label: "Tax Leader", pending: true },
  { label: "Compliance Leader", pending: true },
  { label: "Audit Committee" },
  { label: "Board of Directors" },
];

export const REGION_OPTIONS = [
  "United States",
  "United Kingdom",
  "European Union",
  "Canada",
  "Australia",
  "India",
  "Other",
];

export const FAQ_ITEMS: QaItem[] = [
  {
    question: "What is governed workforce and payroll operations?",
    answer:
      "A proposed way of organizing workforce changes and payroll handoffs so ownership, approvals and evidence travel together — illustrative of a concept, not a description of a live, confirmed feature set.",
  },
  {
    question: "Does ZoikoSuite run payroll or pay employees?",
    answer:
      "No. Payroll calculation and payment stay with your payroll processor; this workflow governs the review and handoff around that process.",
  },
  {
    question: "Can it connect with our HR or payroll systems?",
    answer:
      "Any integration is subject to your confirmed ZoikoSuite configuration — event types, connectors and delivery models need to be verified for your environment.",
  },
  {
    question: "Who can approve a payroll-impacting change?",
    answer:
      "The role authorized under your access model, kept separate from whoever requested the change, consistent with the role-separated approval property above.",
  },
  {
    question: "Does it support multiple countries and tax regulations?",
    answer:
      "Jurisdiction and tax coverage are deployment questions we confirm with you — see “What to confirm with our team” above.",
  },
  {
    question: "What happens if a change is late or rejected?",
    answer:
      "A rejected or late change is meant to stay visible as an exception rather than being silently dropped, consistent with the exception-visibility property above.",
  },
  {
    question: "Can audit and finance reviewers see evidence?",
    answer:
      "Evidence access follows the same role-separated access model — what independent reviewers can see depends on the approved control model for your deployment.",
  },
  {
    question: "How do we evaluate fit?",
    answer:
      "Start with the form below — tell us your systems, regions and decision points, and we'll scope a conversation around your actual environment.",
  },
];
