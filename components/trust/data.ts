// Content data for the Trust page (Figma "1440w light" Trust design).

export type StepCard = { n: string; title: string; body: string };

export const TRUST_STEPS: StepCard[] = [
  {
    n: "1",
    title: "Claim",
    body: "A bounded statement about architecture, practice, policy, status, certification, accessibility, AI governance,\nor service operation.",
  },
  {
    n: "2",
    title: "Scope",
    body: "Which product/service, environment, region, entity, version, customer context, or deployment the statement\napplies to.",
  },
  {
    n: "3",
    title: "Evidence",
    body: "The approved source: policy, technical documentation, certification/attestation, assessment, audit artifact,\nrecord, or status feed.",
  },
  {
    n: "4",
    title: "Review / status",
    body: "Owner, reviewed/effective date, expiry or next review where applicable, and current/superseded/restricted\nstate.",
  },
];

export type DomainCard = { title: string; body: string; wide?: boolean };

export const DOMAIN_CARDS: DomainCard[] = [
  {
    title: "Trust Center",
    body: "Structured trust resources, evidence,\ndocuments, and review materials.",
  },
  {
    title: "Security Overview",
    body: "Security architecture, controls, and\napproved security information.",
  },
  {
    title: "Compliance Overview",
    body: "Compliance approach, scope,\nframeworks, and limitations.",
  },
  {
    title: "Data Residency",
    body: "Where applicable data\nlocation/residency information and\ndeployment boundaries.",
  },
  {
    title: "Privacy Architecture",
    body: "How privacy is designed into data\nhandling, governance, and product\nbehavior.",
  },
  {
    title: "Evidence Architecture",
    body: "How source truth, evidence,\nprovenance, freshness, and\nauditability are governed.",
  },
  {
    title: "Responsible AI",
    body: "AI governance principles, controls,\nboundaries, and feature-specific\nevidence.",
  },
  {
    title: "Accessibility",
    body: "Accessibility approach, evaluated\nscope/status, known limitations, and\nfeedback path.",
  },
  {
    title: "Certifications",
    body: "Current approved certification/attestation records with\nexact scope and status.",
    wide: true,
  },
  {
    title: "Policies",
    body: "Current public trust/governance policies and\nversioned records.",
    wide: true,
  },
  {
    title: "System Status",
    body: "Live service availability and incident/maintenance\ninformation from the operational source.",
    wide: true,
  },
];

export type SecurityCard = { icon: string; title: string; body: string };

export const SECURITY_CARDS: SecurityCard[] = [
  {
    icon: "/trustt/div.icon-chip (7).png",
    title: "Identity & access",
    body: "Approved summary of\nauthentication/authorization/admin access model.",
  },
  {
    icon: "/trustt/div.icon-chip (8).png",
    title: "Data protection",
    body: "Approved encryption/data-protection summary.",
  },
  {
    icon: "/trustt/div.icon-chip (9).png",
    title: "Platform / infrastructure",
    body: "Approved architectural security summary.",
  },
  {
    icon: "/trustt/div.icon-chip (10).png",
    title: "Secure development / vulnerability",
    body: "Approved SDL/testing/disclosure route.",
  },
  {
    icon: "/trustt/div.icon-chip (11).png",
    title: "Logging / auditability",
    body: "Approved audit/evidence summary.",
  },
  {
    icon: "/trustt/div.icon-chip (12).png",
    title: "Incident / status",
    body: "Routes to Security Disclosure/System Status as\nappropriate.",
  },
];

export type ComplianceCard = {
  title: string;
  body: string;
  badge: string;
  badgeTone: "current" | "restricted" | "notpublished";
  foot: string;
};

export const COMPLIANCE_CARDS: ComplianceCard[] = [
  {
    title: "Example certification record",
    body: "Standard: [placeholder] · Scope: [service/region]\nIssuer: [approved issuer] · Effective–Expiry: [dates]",
    badge: "CURRENT",
    badgeTone: "current",
    foot: "Artifact: public summary / request\nevidence, per access class.",
  },
  {
    title: "Example attestation / audit report",
    body: "Report type: [placeholder] · Period: [dates]\nAccess class: Customer-only / NDA",
    badge: "RESTRICTED",
    badgeTone: "restricted",
    foot: "Request access through Trust Center\nevidence request flow.",
  },
  {
    title: "No published record",
    body: "Only published records appear on this page.",
    badge: "NOT PUBLISHED",
    badgeTone: "notpublished",
    foot: "No badge or placeholder certification is\nfabricated.",
  },
];

export type PrivacyCard = { title: string; body: string };

export const PRIVACY_CARDS: PrivacyCard[] = [
  {
    title: "Privacy architecture",
    body: "Concise architecture-level explanation; links\ncanonical Privacy Architecture and Privacy Policy\nrather than duplicating legal notice text.",
  },
  {
    title: "Controller/processor roles",
    body: "Only shown if current public/contractual sources\nsupport it; otherwise routes to DPA/Privacy\nPolicy.",
  },
  {
    title: "Data categories / purpose",
    body: "Does not restate the full privacy notice; links the\nauthoritative source.",
  },
  {
    title: "Subprocessors",
    body: "Routes to the canonical Subprocessor List; never\nhard-codes a vendor list here.",
  },
  {
    title: "Data residency",
    body: "Region/service/deployment-specific residency\nonly from the approved registry; distinguishes\nstorage, processing, backup, support/access.",
  },
  {
    title: "International transfers",
    body: "Routes to privacy/DPA source; does not\nsummarize mechanisms beyond approved text.",
  },
  {
    title: "Customer choice / configuration",
    body: "Shows only verified controls; labels\nplan/deployment dependencies.",
  },
  {
    title: "Government requests",
    body: "Links a published policy/report if one exists; does\nnot infer practice from competitors.",
  },
  {
    title: "Rights requests",
    body: "Routes to regional privacy notices/Consumer\nRights Request, not a generic Trust form.",
  },
];

export type EvidenceRow = { level: string; meaning: string; treatment: string };

export const EVIDENCE_ROWS: EvidenceRow[] = [
  {
    level: "Source record",
    meaning:
      "Authoritative policy, architecture record, approved control statement, certificate,\nreport, or operational source.",
    treatment: "May be public or internal; page references source ID/type, not\nsensitive internals.",
  },
  {
    level: "Structured fact",
    meaning: "Normalized field derived directly from source, such as scope, date, status, region,\nor owner.",
    treatment: "Shown where approved; retains provenance.",
  },
  {
    level: "Derived interpretation",
    meaning: "Human-reviewed mapping or summary based on one or more sources.",
    treatment: "Labeled/owned and never presented as independent\ncertification.",
  },
  {
    level: "Evidence artifact",
    meaning: "Document, certificate, report, assessment, screenshot/export, or machine record.",
    treatment: "Access class governs public/customer/NDA visibility.",
  },
  {
    level: "Publication evidence",
    meaning: "Record of what was approved and published, when, from which version.",
    treatment: "Internal audit trail; selected metadata may be public.",
  },
  {
    level: "Stale / expired evidence",
    meaning: "Source is beyond review/expiry window.",
    treatment: "Claim is blocked, downgraded, or clearly flagged.",
  },
];

export type AiCard = { title: string; body: string };

export const AI_CARDS: AiCard[] = [
  {
    title: "Feature scope",
    body: "Identifies which current AI-\nassisted capabilities the public\nstatement covers.",
  },
  {
    title: "Authority boundary",
    body: "AI does not independently override\npolicy, approvals, source truth, or\nhuman responsibility unless\nexplicitly and lawfully designed.",
  },
  {
    title: "Data / privacy",
    body: "Routes to approved\nprivacy/subprocessor/data-\nhandling information; no\nunsupported training-data claims.",
  },
  {
    title: "Human review",
    body: "Describes only verified human-in-\nthe-loop/oversight behavior and\ncustomer responsibility.",
  },
  {
    title: "Evaluation / monitoring",
    body: "Publishes methodology/status only\nif source-controlled; no fabricated\nbenchmark or safety score.",
  },
  {
    title: "Restricted / high-risk use",
    body: "Routes to Responsible AI/AUP\npolicy for approved restrictions.",
  },
  {
    title: "Changes",
    body: "Model/provider/control changes\ntrigger Product + Responsible AI +\nPrivacy/Security/Legal review.",
  },
  {
    title: "Evidence",
    body: "Links policy, feature\ndocumentation, or assessment\nthrough Trust Center/Evidence\nArchitecture.",
  },
];

export type A11yCard = { title: string; body: string };

export const A11Y_CARDS: A11yCard[] = [
  {
    title: "Target",
    body: "WCAG version/level target as\napproved; does not imply\ncertification.",
  },
  {
    title: "Evaluated scope",
    body: "Products/sites/components and\nversion/date evaluated.",
  },
  {
    title: "Method",
    body: "Automated + manual + assistive\ntechnology coverage only when\nvalidated.",
  },
  {
    title: "Current status",
    body: "Conformance statement owned by\nAccessibility + Legal; no broad\nextrapolation.",
  },
  {
    title: "Known limitations",
    body: "Visible and prioritized where public\ndisclosure is approved — not\nhidden behind a sales form.",
  },
  {
    title: "Feedback / support",
    body: "A direct accessible route for\nreporting barriers and requesting\nassistance.",
  },
  {
    title: "Roadmap / remediation",
    body: "Only publishes commitments/dates\nthat are approved and\noperationally owned.",
  },
  {
    title: "Documents",
    body: "Trust PDFs/evidence presented as\nofficial accessible copies must\nthemselves be accessible.",
  },
];

export type FaqItem = { question: string; answer: string };

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "How does ZoikoSuite approach security?",
    answer:
      "A brief approved architecture/control summary is provided with a link to Security Overview — no absolute guarantee is\nmade.",
  },
  {
    question: "Which compliance standards or certifications does ZoikoSuite have?",
    answer:
      "Only current approved certification/attestation records with exact scope and status are shown on the Compliance & Certifications section above.",
  },
  {
    question: "Where is ZoikoSuite data stored or processed?",
    answer:
      "Region/service/deployment-specific residency information comes only from the approved registry — see Data Residency.",
  },
  {
    question: "How does ZoikoSuite protect privacy?",
    answer:
      "See Privacy Architecture for how privacy is designed into data handling, governance, and product behavior.",
  },
  {
    question: "How can I review audit or security evidence?",
    answer:
      "Public artifacts are linked directly; customer-only/NDA artifacts are requested through the Trust Center evidence request flow.",
  },
  {
    question: "How does ZoikoSuite govern AI?",
    answer:
      "AI-assisted features are governed by scope, authority boundary, data/privacy, human review, and evaluation — see Responsible AI.",
  },
  {
    question: "Is ZoikoSuite accessible?",
    answer:
      "WCAG target, evaluated scope, method, and current conformance status are published in the Accessibility section above.",
  },
  {
    question: "Where can I see current service status?",
    answer:
      "Current service state belongs to the status system — see System Status for live availability and incident information.",
  },
  {
    question: "How current is the trust information?",
    answer:
      "Every claim carries owner, review/effective dates, expiry or next review where applicable, and current/superseded/restricted state.",
  },
  {
    question: "Can I request an enterprise security or compliance review?",
    answer: "Yes — use the Request enterprise trust review action at the top of this page.",
  },
];
