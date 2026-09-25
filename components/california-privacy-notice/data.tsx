// Shared tokens + content for the California Privacy Notice page.
import React from "react";

export const FONT_INTER = "var(--font-inter), 'Inter', sans-serif";
export const FONT_GEORGIA = "Georgia, 'Times New Roman', serif";

// --- At-a-glance privacy summary ---------------------------------------------

export type SummaryCard = { label: string; text: string };

export const SUMMARY_CARDS: SummaryCard[] = [
  {
    label: "Who this notice covers",
    text: "[ Exact Legal-approved scope statement. ]",
  },
  {
    label: "What this notice explains",
    text: "[ Categories / uses / disclosures / choices — only as approved. ]",
  },
  {
    label: "Where to make a request",
    text: "Use the approved Consumer Rights Request route or choice router.",
  },
  {
    label: "How this relates to other policies",
    text: "[ Relationship to the general Privacy Policy and Cookie Preferences, as approved. ]",
  },
];

// --- Reading-frame section ids (sidebar) --------------------------------------

export type SectionId =
  | "scope"
  | "matrix"
  | "sources-purposes"
  | "sale-sharing"
  | "retention"
  | "rights"
  | "submit-request"
  | "agents-minors-incentives"
  | "cookies-security-updates"
  | "contact"
  | "faq"
  | "related-destinations";

export const SECTIONS: { id: SectionId; label: string }[] = [
  { id: "scope", label: "Scope & Applicability" },
  { id: "matrix", label: "Personal Information Matrix" },
  { id: "sources-purposes", label: "Sources, Purposes & Recipients" },
  { id: "sale-sharing", label: "Sale/Sharing & Sensitive PI" },
  { id: "retention", label: "Retention" },
  { id: "rights", label: "California Privacy Rights" },
  { id: "submit-request", label: "How to Submit a Request" },
  { id: "agents-minors-incentives", label: "Agents, Minors, Incentives" },
  { id: "cookies-security-updates", label: "Cookies, Security / Responsible AI & Updates" },
  { id: "contact", label: "Contact" },
  { id: "faq", label: "FAQ" },
  { id: "related-destinations", label: "Related Legal Destinations" },
];

// --- Scope & applicability ------------------------------------------------------

export type FieldValueRow = { field: string; value: string };

export const SCOPE_ROWS: FieldValueRow[] = [
  {
    field: "Legal entity",
    value: "[ Exact approved legal entity/entities responsible for this notice. ]",
  },
  {
    field: "Covered services",
    value: "[ Exact product/site/service scope from the Service Scope Registry. ]",
  },
  {
    field: "Audience",
    value: "[ Legal-approved California consumer/relationship scope. ]",
  },
  {
    field: "Exclusions",
    value: "[ Approved exclusions or separate-notice routing, only when legally reviewed. ]",
  },
  {
    field: "Relationship to Privacy Policy",
    value:
      "[ Whether this notice supplements or forms part of the general Privacy Policy — approved wording only. ]",
  },
];

// --- Personal information disclosure matrix --------------------------------------

export type MatrixRow = {
  category: React.ReactNode;
  examples: React.ReactNode;
  collected: React.ReactNode;
  sources: React.ReactNode;
  purposes: React.ReactNode;
  soldShared: React.ReactNode;
};

export const MATRIX_HEADERS = [
  "Category",
  "Examples",
  "Collected",
  "Sources",
  "Purposes",
  "Sold/shared",
];

export const MATRIX_ROWS: MatrixRow[] = [
  {
    category: "[ Approved category ]",
    examples: "[ Approved examples ]",
    collected: "[ Y/N/Conditional ]",
    sources: <span className="whitespace-nowrap">[ Approved source ]</span>,
    purposes: <span className="whitespace-nowrap">[ Approved purpose ]</span>,
    soldShared: "[ status ]",
  },
  {
    category: "[ Approved category ]",
    examples: "[ Approved examples ]",
    collected: "[ Y/N/Conditional ]",
    sources: <span className="whitespace-nowrap">[ Approved source ]</span>,
    purposes: <span className="whitespace-nowrap">[ Approved purpose ]</span>,
    soldShared: "[ status ]",
  },
];

// --- Sources, purposes & disclosure recipients ------------------------------------

export type SectionRow = { section: string; requirement: string };

export const SOURCES_PURPOSES_ROWS: SectionRow[] = [
  {
    section: "Sources of personal information",
    requirement:
      "Approved grouped list sourced from source_category_ids, using Legal-approved wording.",
  },
  {
    section: "Purposes for collection/use",
    requirement:
      "Approved purpose groups with concise explanations, mapped back to the disclosure matrix categories.",
  },
  {
    section: "Disclosure recipients",
    requirement:
      "Approved recipient categories and reasons, shown only when the content source supports them.",
  },
  {
    section: "Vendor/subprocessor link",
    requirement:
      "Uses the approved Subprocessor List route only when contextually accurate — never implies every recipient is a subprocessor, or vice versa.",
  },
];

// --- Sale / sharing, sensitive PI & retention -------------------------------------

export type ModuleRow = { module: React.ReactNode; rule: React.ReactNode };

export const SALE_SHARING_ROWS: ModuleRow[] = [
  {
    module: "Sale / sharing / opt-out",
    rule: "Section availability, labels, legal conclusions, and CTA route come from Legal-approved configuration — never inferred from analytics or ad-tech implementation.",
  },
  {
    module: "Do Not Sell or Share link",
    rule: "Displayed within this notice only when Legal confirms relationship/applicability and the approved route resolves.",
  },
  {
    module: "Sensitive personal information",
    rule: "Shown only when Legal determines the concept applies and approves the exact categories, purposes, and limitation/choice language.",
  },
];

// --- Retention ---------------------------------------------------------------------

export const RETENTION_TEXT =
  "Uses approved retention periods or criteria from the retention_rule_id. If multiple products or categories differ, the approved structured distinction is rendered — never a single invented duration. Unknown or unresolved legally material fields block publication rather than defaulting.";

// --- California privacy rights ------------------------------------------------------

export type Right = {
  label: string;
  who: string;
  what: string;
  limitations?: string;
};

export const RIGHTS: Right[] = [
  {
    label: "[ Exact Legal-approved right label ]",
    who: "[ Legal-approved eligibility statement — never personalized from inferred location/device data. ]",
    what: "[ Plain-language description approved by Legal. ]",
    limitations: "[ Only approved legal language — no broad promises. ]",
  },
  {
    label: "[ Exact Legal-approved right label ]",
    who: "[ Eligibility statement ]",
    what: "[ Description ]",
  },
];

// --- How to submit a privacy request -------------------------------------------------

export const SUBMIT_REQUEST_ROWS: SectionRow[] = [
  {
    section: "Primary route",
    requirement: "Consumer Rights Request — exact URL from the approved Route Registry.",
  },
  {
    section: "Alternate channels",
    requirement:
      "Phone, email, postal, or in-product — only if Legal/Privacy Operations supplies and approves them.",
  },
  {
    section: "Sign-in",
    requirement:
      "Account authentication is never required unless the approved request process requires it.",
  },
  {
    section: "Verification",
    requirement:
      "Plain-language high-level expectation only — internal fraud/security decision logic is never exposed.",
  },
  {
    section: "Request receipt",
    requirement:
      "Controlled by the request system — this page never promises a response time unless approved.",
  },
];

// --- Authorized agents, minors & financial incentives ---------------------------------

export const AGENTS_MINORS_ROWS: ModuleRow[] = [
  {
    module: "Authorized agents",
    rule: "If supported, explains the approved authorization/verification pathway without exposing anti-fraud internals.",
  },
  {
    module: "Minors / children",
    rule: "Publishes only counsel-approved scope and age-related language — thresholds are never inferred.",
  },
  {
    module: "Financial incentives / loyalty",
    rule: (
      <>
        Published only if a relevant program exists and Legal has approved notice/terms; the section is<br />
        omitted rather than stating &quot;none&quot; without approval.
      </>
    ),
  },
];

export const CONDITIONAL_NOTE =
  "Omitted conditional sections never leave empty headings, dead anchor links, or misleading FAQ references behind.";

// --- Cookies, security / Responsible AI & updates --------------------------------------

export type AreaRow = { area: string; requirement: string };

export const COOKIES_SECURITY_ROWS: AreaRow[] = [
  {
    area: "Cookie Policy",
    requirement:
      "Contextual link only — this notice does not reproduce a volatile cookie inventory unless Legal requires it.",
  },
  {
    area: "Cookie Preferences",
    requirement:
      "Approved route for preference controls, visually clear and never subordinate to marketing CTAs.",
  },
  {
    area: "Security Disclosure",
    requirement:
      "Contextual link only — safeguards are described using approved wording, never guarantees.",
  },
  {
    area: "Responsible AI",
    requirement:
      "Contextual link where this notice references AI-related handling — no invented model-training or automated-decision claims.",
  },
  {
    area: "Updates",
    requirement:
      "Effective date, last reviewed date, and material change summary shown only when maintained by Legal.",
  },
];

// --- Contact -----------------------------------------------------------------------------

export const CONTACT_TEXT = (
  <>
    Uses the approved privacy contact route only — this page does not invent a privacy@ email, phone number, or postal<br />
    destination.
  </>
);

// --- FAQ ----------------------------------------------------------------------------------

export type Faq = { question: string; answer: string };

export const FAQS: Faq[] = [
  {
    question: "What is the ZoikoSuite California Privacy Notice?",
    answer:
      "[ One concise sentence sourced from the approved notice definition and scope. ]",
  },
  {
    question: "How can I submit a California privacy request?",
    answer:
      "Use the same approved Consumer Rights Request route and operational wording shown in the rights section above.",
  },
  {
    question: "Where can I manage cookie preferences?",
    answer: "Use the approved Cookie Preferences route.",
  },
  {
    question: "Where can I find ZoikoSuite's general Privacy Policy?",
    answer: "Use the approved Privacy Policy route.",
  },
];

// --- Related legal destinations -----------------------------------------------------------

export type Destination = { label: string; href: string };

export const RELATED_DESTINATIONS: Destination[] = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Cookie Policy", href: "/cookie-policy" },
  { label: "Cookie Preferences", href: "/cookie-preferences" },
  { label: "Data Processing Agreement", href: "/dpa" },
  { label: "Subprocessor List", href: "/subprocessors" },
  { label: "Accessibility Statement", href: "/accessibility-statement" },
  { label: "Responsible AI", href: "/responsible-ai" },
  { label: "Security Disclosure", href: "/security-disclosure" },
  { label: "Legal Notices", href: "/legal-notices" },
  { label: "Consumer Rights Request", href: "/legal/privacy/consumer-rights" },
  { label: "Do Not Sell or Share My Personal Information", href: "/legal/privacy/do-not-sell" },
];
