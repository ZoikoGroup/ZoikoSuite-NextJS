// Shared tokens + content for the Whistleblowing & Ethics Reporting page
// (Figma 1306:14962, "1440w light").

export const FONT_INTER = "var(--font-inter), 'Inter', sans-serif";
export const FONT_GEORGIA = "Georgia, 'Times New Roman', serif";

export type WrongChannelRoute = { label: string; href: string };

export const WRONG_CHANNEL_ROUTES: WrongChannelRoute[] = [
  { label: "Customer support", href: "/support-center" },
  { label: "Privacy rights", href: "/legal/privacy/consumer-rights" },
  { label: "Security vulnerability", href: "/legal/security-disclosure" },
  { label: "HR routine questions", href: "/support-center" },
  { label: "Ethics / whistleblowing", href: "#report" },
];

export const REPORT_CATEGORIES: string[] = [
  "Fraud or financial misconduct",
  "Bribery / corruption",
  "Conflicts of interest",
  "Harassment / discrimination where in scope",
  "Retaliation",
  "Safety or serious policy breaches",
  "Data / security misuse",
  "Human-rights or supply-chain concerns",
  "Other suspected unlawful or unethical conduct",
];

export type ProtectionCard = { title: string; body: string };

export const PROTECTION_CARDS: ProtectionCard[] = [
  {
    title: "Confidential handling",
    body: "Report information is managed under confidentiality controls appropriate to the case.",
  },
  {
    title: "Need-to-know access",
    body: "Case content is restricted to authorized personnel with a legitimate need to know.",
  },
  {
    title: "Non-retaliation policy",
    body: "Retaliation against a good-faith reporter is prohibited under the applicable policy.",
  },
  {
    title: "Anonymous option",
    body: "Available where applicable and supported by local law and technical channel.",
  },
];

export type ReportingModeCard = { title: string; body: string };

export const REPORTING_MODE_CARDS: ReportingModeCard[] = [
  {
    title: "Anonymous",
    body: "No name or contact details are requested. Explains what information is not collected, how follow-up works through a secure credential, and that anonymity can be affected by report details or legal requirements.",
  },
  {
    title: "Confidential / identified",
    body: "Contact details are provided to support follow-up.\nExplains why they help and how access to your identity is restricted.",
  },
  {
    title: "Speak with someone first",
    body: "Talk through the concern before deciding how to report it.",
  },
];

export const REPORTING_STEPS: string[] = [
  "Choose route",
  "Describe concern",
  "Add people/evidence",
  "Choose follow-up",
  "Review & submit",
  "Receive reference",
  "Secure follow-up",
];

export type TableRow = { label: string; text: string };

export const REVIEW_SUBMIT_ROWS: TableRow[] = [
  {
    label: "Review",
    text: "Editable summary grouped by section; attachment list; reporting mode; jurisdiction notice link.",
  },
  {
    label: "Attestation",
    text: "Good-faith accuracy acknowledgement, written narrowly and accessibly — no intimidating language.",
  },
  {
    label: "Submit",
    text: "Single primary action with duplicate-submission protection.",
  },
  {
    label: "Pre-submit warning",
    text: "Explains that once submitted, some data may be preserved under legal/investigation requirements.",
  },
];

export const CONFIRMATION_ROWS: TableRow[] = [
  {
    label: "Reference",
    text: "Case/reference ID, secure access instructions, next-step expectations, status CTA, safe-exit CTA.",
  },
  {
    label: "Access credential",
    text: "If a secret access credential is issued, it is shown once, requires confirmation of saving, and is never sent through an insecure channel.",
  },
  {
    label: "Safe exit",
    text: "Clears session data that can safely be cleared and routes to a neutral destination — never falsely promises browser-history deletion.",
  },
];

export const PRIVACY_RETENTION_ROWS: TableRow[] = [
  {
    label: "Content",
    text: "Controller/entity, purposes, legal bases where applicable, categories of data, recipients, transfers, retention logic, rights, contact routes.",
  },
  {
    label: "Retention",
    text: "Describes criteria, not invented fixed periods.",
  },
  {
    label: "Security",
    text: "Explains safeguards at a high level without publishing exploitable operational detail.",
  },
];

export const STATUS_STATES: string[] = [
  "Received",
  "Triage",
  "Under review",
  "Information requested",
  "Closed",
  "Other configured neutral states",
];

export type FaqItem = { question: string; answer: string };

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "What can I report?",
    answer:
      "Suspected misconduct, unethical behavior, policy violations, or other eligible concerns — the categories listed above are illustrative,\nnot exhaustive.",
  },
  {
    question: "Can I report anonymously?",
    answer:
      "Anonymous reporting may be available depending on your location and the reporting channel used.",
  },
  {
    question: "Will my report be confidential?",
    answer:
      "Reports are handled under confidentiality controls with need-to-know access, though information may need to be shared with\nauthorized investigators, advisers, or authorities when necessary or legally required.",
  },
  {
    question: "What happens after submission?",
    answer:
      "Reports are triaged by authorized personnel. Timing and next steps depend on the concern, location, applicable law, and\ninvestigation needs.",
  },
  {
    question: "What if I experience retaliation?",
    answer:
      "Retaliation against a good-faith reporter is prohibited under the applicable non-retaliation policy — report retaliation concerns\nthrough this same channel.",
  },
  {
    question: "Can I report externally?",
    answer:
      "Internal reporting is not always the only available route — see the External Reporting & Independent Advice section above.",
  },
  {
    question: "Is this for emergencies?",
    answer:
      "No. If anyone is in immediate danger or needs urgent medical assistance, contact local emergency services — this channel is not\nmonitored as an emergency service.",
  },
];
