// Shared tokens + content for the Legal Notices page.

export const FONT_INTER = "var(--font-inter), 'Inter', sans-serif";
export const FONT_GEORGIA = "Georgia, 'Times New Roman', serif";

// --- Legal identity at a glance ---------------------------------------------

export type IdentityRow = { row: string; treatment: string; rule: string };

export const IDENTITY_HEADERS = ["Row", "Public treatment", "Governance rule"];

export const IDENTITY_ROWS: IdentityRow[] = [
  {
    row: "ZoikoSuite",
    treatment: "Displayed as the platform / product name.",
    rule: "Not labeled a legal entity unless verified in the Legal Entity Registry.",
  },
  {
    row: "Zoiko Tech",
    treatment: "Displayed as developer/operator context only.",
    rule: "Not inferred as controller, contracting party, employer, or rights owner.",
  },
  {
    row: "Zoiko Group",
    treatment: "Displayed as parent/group context only.",
    rule: "No parent guarantee, shared liability, data access, or inherited certification implied.",
  },
  {
    row: "Contracting entity",
    treatment: "Rendered only from approved contract/entity registry.",
    rule: "Customer/region-specific — directs to Order Form / Terms rather than a global guess.",
  },
  {
    row: "Copyright owner",
    treatment: "Rendered from rights-holder registry.",
    rule: "May differ from developer/operator — never hard-coded from footer copy.",
  },
  {
    row: "Trademark owner",
    treatment:
      'Rendered per mark from rights registry, or neutral "respective owners" language.',
    rule: "Detailed permissions link to Trademark Guidelines.",
  },
];

// --- Corporate / website operator information --------------------------------

import React from "react";

export type OperatorCard = { label: string; text: React.ReactNode };

export const OPERATOR_CARDS: OperatorCard[] = [
  {
    label: "Website / platform operator",
    text: "[ Entity name + role label — required only when Legal has verified the role. ]",
  },
  {
    label: "Developer / technology operator",
    text: "[ May reference Zoiko Tech if approved source remains current. ]",
  },
  {
    label: "Group relationship",
    text: "[ Group name + relationship statement — no guarantee or liability implication. ]",
  },
  {
    label: "Registered legal name",
    text: "[ Exact legal name — never derived from brand name or copyright line. ]",
  },
  {
    label: "Registered office",
    text: "[ Only when verified — never relabeled from public headquarters. ]",
  },
  {
    label: "Public headquarters",
    text: (
      <>
        Sacramento, CA (Global) and London, UK (European) — role-labeled contact locations,<br />
        kept separate from registered-office status.
      </>
    ),
  },
  {
    label: "Formal legal notice address",
    text: (
      <>
        [ Shown only if Legal authorizes publication — contractual, jurisdiction-specific, or counsel-<br />
        managed. ]
      </>
    ),
  },
  {
    label: "General corporate enquiries",
    text: "[ Public enquiry route — explicitly not formal service of legal process unless authorized. ]",
  },
];

// --- Copyright & intellectual property notice --------------------------------

export const IP_INTRO = (
  <>
    Page content, software interfaces, documentation, graphics, logos, and other protected materials are subject to<br />
    intellectual-property rights, applicable licenses, and third-party ownership. Third-party names, logos, content, code,<br />
    libraries, or marks remain subject to their respective rights.
  </>
);

export type NoticeRow = { item: React.ReactNode; detail: React.ReactNode };

export const IP_ROWS: NoticeRow[] = [
  {
    item: "Copyright line",
    detail: (
      <>
        Rendered from an approved rights-holder record — not hard-coded until<br />
        Legal verifies the role.
      </>
    ),
  },
  {
    item: "Permitted use",
    detail: (
      <>
        Linked to Terms of Service / Licenses — no reproduction permissions<br />
        invented here.
      </>
    ),
  },
  {
    item: "Open-source software",
    detail: "Deep-linked to Licenses for OSS and third-party notices.",
  },
  {
    item: "Permission requests",
    detail: "Routed to Trademark Guidelines or Brand/IP contact.",
  },
];

// --- Trademark notice & guidelines handoff -----------------------------------

export const TRADEMARK_ROWS: NoticeRow[] = [
  {
    item: "ZoikoSuite mark",
    detail:
      "® or ™ used only when the Rights Registry confirms the mark, territory, and approved usage style.",
  },
  {
    item: "Zoiko Tech / Zoiko Group marks",
    detail:
      "Treated as separate marks with separate rights owners unless the registry confirms otherwise.",
  },
  {
    item: "Third-party marks",
    detail: "Neutral ownership disclaimer — no implied affiliation or endorsement.",
  },
  {
    item: "Logo reproduction",
    detail:
      "No downloadable logo assets from this page unless Brand/IP has approved them.",
  },
];

// --- Product availability, roadmap & feature notice --------------------------

export type AvailabilityRow = {
  area: React.ReactNode;
  behavior: React.ReactNode;
  doNotImply: React.ReactNode;
};

export const AVAILABILITY_ROWS: AvailabilityRow[] = [
  {
    area: "Current functionality",
    behavior: "Status-qualified language from authoritative product pages.",
    doNotImply: (
      <>
        That every capability is enabled for every plan, deployment, or<br />
        jurisdiction.
      </>
    ),
  },
  {
    area: "Roadmap",
    behavior: (
      <>
        References may change and do not constitute a commitment unless in a<br />
        signed contract.
      </>
    ),
    doNotImply: "Guaranteed ship dates or future functionality.",
  },
  {
    area: "Jurisdiction coverage",
    behavior: "Linked to published coverage statuses and last-review dates.",
    doNotImply: "Blanket legal/regulatory coverage.",
  },
  {
    area: "Security / compliance",
    behavior: "Defers to Trust pages and evidence status.",
    doNotImply: "Certification or attestation when none is independently verified.",
  },
  {
    area: "AI features",
    behavior: "Uses current Responsible AI boundaries and availability status.",
    doNotImply: "Autonomous authority, legal advice, or guaranteed accuracy.",
  },
];

// --- Standards, frameworks, certifications & assurance ------------------------

export const STANDARDS_ROWS: NoticeRow[] = [
  {
    item: "Standards / frameworks",
    detail: (
      <>
        Referenced only as design target, mapping, alignment, or readiness<br />
        unless independent evidence supports more.
      </>
    ),
  },
  {
    item: "Certifications",
    detail: (
      <>
        Shown as &quot;certified&quot; only when Trust &gt; Certifications has a verified<br />
        current record for the exact entity, product, scope, and validity period.
      </>
    ),
  },
  {
    item: "Expired / superseded",
    detail: "Removed or clearly marked — never left as a stale green badge.",
  },
];

// --- Professional advice boundary --------------------------------------------

export const ADVICE_ROWS: NoticeRow[] = [
  {
    item: "Legal",
    detail: (
      <>
        ZoikoSuite does not provide legal advice. Information and jurisdiction<br />
        coverage are not a substitute for advice from qualified counsel.
      </>
    ),
  },
  {
    item: "Tax",
    detail: (
      <>
        Tax workflow descriptions, calculations, reminders, or reports are not<br />
        individualized tax advice.
      </>
    ),
  },
  {
    item: "Accounting / audit",
    detail: (
      <>
        Reporting, reconciliation, close, and evidence functions do not constitute<br />
        an audit opinion or regulated accounting advice.
      </>
    ),
  },
  {
    item: "Investment",
    detail: (
      <>
        No investment advice, securities recommendation, valuation opinion, or<br />
        offer to invest.
      </>
    ),
  },
  {
    item: "Employment / HR",
    detail: (
      <>
        Workflow support does not replace jurisdiction-specific employment<br />
        counsel.
      </>
    ),
  },
  {
    item: "Compliance",
    detail: (
      <>
        Control mappings, obligation tracking, and evidence do not by themselves<br />
        establish legal compliance.
      </>
    ),
  },
];

// --- Third-party content, services & external links ---------------------------

export const THIRD_PARTY_ROWS: NoticeRow[] = [
  {
    item: "External links",
    detail: (
      <>
        ZoikoSuite does not control or endorse third-party content merely by<br />
        linking to it.
      </>
    ),
  },
  {
    item: "Third-party services",
    detail: (
      <>
        Integration availability and functionality may depend on third-party terms,<br />
        APIs, permissions, regions, and service status.
      </>
    ),
  },
  {
    item: "Broken / stale links",
    detail: (
      <>
        Monitoring flags broken authoritative links — the page never silently<br />
        routes to irrelevant replacement content.
      </>
    ),
  },
];

// --- Formal notices, legal communications & service routing -------------------

export type FormalNoticeRow = { purpose: string; route: string; control: string };

export const FORMAL_NOTICE_HEADERS = ["Purpose", "Public route", "Legal control"];

export const FORMAL_NOTICE_ROWS: FormalNoticeRow[] = [
  {
    purpose: "General corporate enquiry",
    route: "Corporate enquiries form/email",
    control:
      'Displays "not for formal service of legal process" unless authorized otherwise.',
  },
  {
    purpose: "Contractual notice",
    route: "Link to the relevant contract notice clause",
    control: "Does not create a competing global route.",
  },
  {
    purpose: "Service of legal process",
    route: "Approved address/process, or applicable-law guidance",
    control: "Reviewed by Legal — jurisdiction may change the valid method.",
  },
  {
    purpose: "Privacy rights",
    route: "Consumer Rights Request / regional privacy notice",
    control: "Kept separate from corporate notices.",
  },
  {
    purpose: "Security vulnerability",
    route: "Security Disclosure",
    control: "Never routed through general legal enquiry.",
  },
  {
    purpose: "Whistleblowing / ethics",
    route: "Whistleblowing and Ethics Reporting",
    control: "Preserves confidentiality and anti-retaliation workflow.",
  },
  {
    purpose: "Trademark / IP permission",
    route: "Trademark Guidelines / Brand-IP contact",
    control: "Never routed through general support.",
  },
];

// --- Locations & purpose-based contact routing --------------------------------

export const LOCATION_ROWS: NoticeRow[] = [
  {
    item: "Global headquarters",
    detail: "Sacramento, CA — displayed while the source remains verified.",
  },
  {
    item: "European headquarters",
    detail: "London, UK — displayed while the source remains verified.",
  },
  {
    item: "Registered office",
    detail: "Separate field — never inferred from headquarters.",
  },
  {
    item: "Privacy contact",
    detail: "Separate route, linked from Privacy Policy / regional notices.",
  },
  {
    item: "Security contact",
    detail: "Separate route, linked from Security Disclosure / security.txt.",
  },
];

// --- Related legal documents --------------------------------------------------

export type RelatedDoc = { name: string; description: string; href: string };

export const RELATED_LEGAL_DOCS: RelatedDoc[] = [
  {
    name: "Terms of Service",
    description: "Contractual terms and permitted use.",
    href: "/terms-of-service",
  },
  {
    name: "Privacy Policy",
    description: "Personal-data transparency.",
    href: "/privacy-policy",
  },
  {
    name: "Cookie Policy",
    description: "Tracking transparency.",
    href: "/cookie-policy",
  },
  {
    name: "Cookie Preferences",
    description: "Visitor controls.",
    href: "/cookie-preferences",
  },
  {
    name: "Data Processing Agreement",
    description: "Processor obligations.",
    href: "/dpa",
  },
  {
    name: "Subprocessor List",
    description: "Approved subprocessor registry.",
    href: "/subprocessors",
  },
  {
    name: "Acceptable Use Policy",
    description: "Prohibited/restricted use.",
    href: "/acceptable-use",
  },
  {
    name: "Accessibility Statement",
    description: "Accessibility status.",
    href: "/accessibility-statement",
  },
  {
    name: "Responsible AI",
    description: "Legal AI transparency.",
    href: "/responsible-ai",
  },
  {
    name: "Security Disclosure",
    description: "Vulnerability reporting.",
    href: "/security-disclosure",
  },
  {
    name: "Trademark Guidelines",
    description: "Detailed mark use rules.",
    href: "/legal/trademark-guidelines",
  },
  {
    name: "Licenses",
    description: "Open-source notices.",
    href: "/legal/licenses",
  },
];

// --- Trust & assurance cross-links --------------------------------------------

export type TrustLink = { label: string; href: string };

export const TRUST_LINKS: TrustLink[] = [
  { label: "Trust Center", href: "/trust-center" },
  { label: "Security Overview", href: "/security-overview" },
  { label: "Compliance Overview", href: "/compliance-overview" },
  { label: "Data Residency", href: "/data-residency" },
  { label: "Privacy Architecture", href: "/privacy-architecture" },
  { label: "Evidence Architecture", href: "/evidence-architecture" },
  { label: "Certifications", href: "/trust/certifications" },
  { label: "System Status", href: "/trust-system-status" },
];

// --- Version, effective date, changes & corrections ----------------------------

export const VERSION_CONTROL_ROWS: NoticeRow[] = [
  {
    item: "Version",
    detail: "Controlled version ID displayed in hero metadata.",
  },
  {
    item: "Previous versions",
    detail: "Accessible archive with date and status — never overwritten.",
  },
  {
    item: "Superseded",
    detail: "Old version remains accessible, clearly marked superseded.",
  },
  {
    item: "Stale review",
    detail:
      'If the review SLA expires, the page displays "Under review" and blocks new unverified claims from publication.',
  },
];

// --- Frequently asked ----------------------------------------------------------

export type Faq = { question: string; answer: string };

export const FAQS: Faq[] = [
  {
    question: "Who operates ZoikoSuite?",
    answer:
      "Approved product/operator wording from the Legal Entity Registry — explaining Zoiko Tech and Zoiko Group context without implying unverified contracting or liability roles.",
  },
  {
    question: "Who owns ZoikoSuite?",
    answer:
      "Never answered from branding alone. If an ownership statement is approved for public use, its scope and source are shown; otherwise product, operator, group, and rights-owner roles are explained as separately governed.",
  },
  {
    question: "Are standards or framework references certifications?",
    answer:
      "No. References may describe design targets, mapping, readiness, or alignment unless Trust > Certifications expressly states a current independent certification for a defined scope.",
  },
  {
    question:
      "Does ZoikoSuite provide legal, tax, accounting, audit, investment, or employment advice?",
    answer:
      "No, unless a separately identified regulated professional service explicitly says otherwise.",
  },
  {
    question: "How do I send a formal legal notice?",
    answer:
      "Follow the notice clause in your applicable contract and any jurisdiction-specific instructions — a general corporate enquiry route does not by itself constitute legally effective notice.",
  },
  {
    question: "Where can I find previous Legal Notices?",
    answer: "Use the version-history control on this page.",
  },
];
