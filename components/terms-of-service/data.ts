// Shared tokens + content for the Terms of Service page (Figma 1186:3 / 1186:228).

export const FONT_INTER = "var(--font-inter), 'Inter', sans-serif";
export const FONT_GEORGIA = "Georgia, 'Times New Roman', serif";

export type CrossLink = { label: string; href: string };

export type ClauseBlock =
  | { type: "summary"; text: string }
  | { type: "placeholder"; text: string }
  | { type: "callout"; text: string }
  | { type: "crosslinks"; links: CrossLink[] }
  | { type: "note"; text: string };

export type Clause = {
  id: string;
  title: string;
  blocks: ClauseBlock[];
};

const L = {
  orderForm: { label: "Order Form / enterprise agreement", href: "#" },
  orderFormTerms: { label: "Order Form terms", href: "#" },
  privacy: { label: "Privacy Policy", href: "/legal/privacy-policy" },
  dpa: { label: "Data Processing Agreement", href: "/legal/dpa" },
  aup: { label: "Acceptable Use Policy", href: "/legal/acceptable-use" },
  securityDisclosure: {
    label: "Security Disclosure",
    href: "/legal/security-disclosure",
  },
  support: { label: "Support", href: "/support-center" },
  systemStatus: { label: "System Status", href: "/trust-system-status" },
  platformOverview: { label: "Platform Overview", href: "/platform-overview" },
  responsibleAi: { label: "Responsible AI", href: "/trust/responsible-ai" },
  subprocessors: { label: "Subprocessor List", href: "/legal/subprocessors" },
  dataResidency: { label: "Data Residency", href: "/data-residency" },
  trademark: {
    label: "Trademark Guidelines",
    href: "/legal/trademark-guidelines",
  },
  licenses: { label: "Licenses", href: "/legal/licenses" },
  securityOverview: { label: "Security Overview", href: "/security-overview" },
};

export const CLAUSES: Clause[] = [
  {
    id: "agreement",
    title: "1. Agreement and Scope",
    blocks: [
      {
        type: "summary",
        text: "This section defines the document being agreed to, the services and sites it covers, and the identity of the contracting parties.",
      },
      {
        type: "placeholder",
        text: '[ Counsel-approved operative text: exact contracting entity; definitions of "you," "customer," and "user"; definition of "Services"; effective version; whether use constitutes acceptance; enterprise-agreement precedence if applicable. ]',
      },
      {
        type: "callout",
        text: "Forbidden inference: this page does not assume that Zoiko Suite Inc., Zoiko Tech Inc., or Zoiko Group is the contracting party from footer branding alone. The contracting entity above is sourced from the verified entity registry.",
      },
      { type: "crosslinks", links: [L.orderForm, L.privacy, L.dpa, L.aup] },
    ],
  },
  {
    id: "eligibility",
    title: "2. Eligibility and Authority",
    blocks: [
      {
        type: "summary",
        text: "Covers age/capacity and lawful-use requirements, and the authority representation required when a person accepts these Terms on behalf of an organization.",
      },
      {
        type: "placeholder",
        text: "[ Counsel-approved operative text: eligibility requirements; organizational authority representation. No generic age threshold is asserted unless supplied by counsel. ]",
      },
    ],
  },
  {
    id: "accounts",
    title: "3. Accounts and Organization Responsibility",
    blocks: [
      {
        type: "summary",
        text: "Covers account registration accuracy, credential protection, administrator authority over users and workspaces, authorized-user responsibilities, and unauthorized-access notification.",
      },
      {
        type: "placeholder",
        text: "[ Counsel-approved operative text, coordinated with actual product administration model and privacy disclosures. ]",
      },
      { type: "crosslinks", links: [L.securityDisclosure, L.support] },
    ],
  },
  {
    id: "services",
    title: "4. Services and Availability",
    blocks: [
      {
        type: "summary",
        text: "Defines the Services, clarifies that features may be configurable, market- or deployment-dependent, or subject to change, and explains beta/preview treatment and modifications.",
      },
      {
        type: "placeholder",
        text: "[ Counsel-approved operative text, aligned with current platform and order-form taxonomy. No blanket availability promise. ]",
      },
      { type: "crosslinks", links: [L.systemStatus, L.platformOverview] },
    ],
  },
  {
    id: "acceptable-use",
    title: "5. Acceptable Use",
    blocks: [
      {
        type: "summary",
        text: "States high-level use restrictions covering illegal use, abuse, security interference, unauthorized access, harmful content, IP infringement, service disruption, prohibited automation, AI misuse, and regulated/high-risk activities where applicable.",
      },
      {
        type: "placeholder",
        text: "[ Counsel-approved operative text, with canonical Acceptable Use Policy incorporated by reference where Legal elects. ]",
      },
      { type: "crosslinks", links: [L.aup, L.securityDisclosure] },
    ],
  },
  {
    id: "ai-features",
    title: "6. AI and Automated Features",
    blocks: [
      {
        type: "summary",
        text: "Identifies AI-assisted and automated features, defines human responsibility for evaluating outputs, and sets the authority boundary: AI does not independently override policy, approval, source truth, or legal authority.",
      },
      {
        type: "placeholder",
        text: "[ Counsel-approved operative text on input/output rights, provider/subprocessor relationships, sensitive-use restrictions, and accuracy/availability limitations — consistent with Responsible AI public positioning. ]",
      },
      {
        type: "crosslinks",
        links: [L.responsibleAi, L.subprocessors, L.aup],
      },
    ],
  },
  {
    id: "data-privacy",
    title: "7. Customer Content, Data and Privacy",
    blocks: [
      {
        type: "summary",
        text: "Defines ownership of Customer Content and the license needed to host, process, transmit, secure, and back up that content in order to provide the Services.",
      },
      {
        type: "placeholder",
        text: "[ Counsel-approved operative text. Privacy-notice content is not restated here; DPA and Subprocessor List are linked rather than duplicated. Retention/deletion mechanics align with actual product, legal hold, and backup behavior. ]",
      },
      {
        type: "crosslinks",
        links: [L.privacy, L.dpa, L.subprocessors, L.dataResidency],
      },
    ],
  },
  {
    id: "third-party",
    title: "8. Third-Party Services and Integrations",
    blocks: [
      {
        type: "summary",
        text: "Explains that integrations may be subject to third-party terms and privacy practices, and describes authorization and revocation of connections.",
      },
      {
        type: "placeholder",
        text: "[ Counsel-approved operative text. Does not guarantee continued availability of a third-party integration unless contractually committed, and does not imply Zoiko controls or endorses third parties beyond the actual relationship. ]",
      },
    ],
  },
  {
    id: "fees",
    title: "9. Fees, Billing, Taxes and Subscription Terms",
    blocks: [
      {
        type: "summary",
        text: "Covers pricing basis, invoicing and payment, tax treatment, auto-renewal (where applicable), trials/promotions, cancellation mechanics, and refund/credit policy.",
      },
      {
        type: "callout",
        text: "This section cannot be drafted from design assumptions. Every price, billing cadence, renewal rule, refund rule, cancellation window, tax treatment, seat metric, trial mechanic, and notice period must come from the approved commercial/legal model.",
      },
      {
        type: "placeholder",
        text: "[ Counsel- and Finance-approved operative text. Material renewal terms are not visually minimized; cancellation is not made harder than enrollment. ]",
      },
      { type: "crosslinks", links: [L.orderFormTerms] },
    ],
  },
  {
    id: "intellectual-property",
    title: "10. Intellectual Property and Feedback",
    blocks: [
      {
        type: "summary",
        text: "Defines ownership of ZoikoSuite software, documentation, designs, and trademarks; separates Customer Content from Zoiko IP; and defines the customer/user license scope.",
      },
      {
        type: "placeholder",
        text: "[ Counsel-approved operative text on feedback terms, open-source/third-party license references, and trademark use — no rights assignment is coerced through the interface. ]",
      },
      { type: "crosslinks", links: [L.trademark, L.licenses] },
    ],
  },
  {
    id: "confidentiality",
    title: "11. Confidentiality",
    blocks: [
      {
        type: "summary",
        text: "Included only if these web Terms are intended to govern confidential information, or if no separate NDA or enterprise agreement covers it.",
      },
      {
        type: "placeholder",
        text: '[ Counsel-approved operative text — definitions, exclusions, use/protection duties, compelled disclosure, duration, and remedies. A product label such as "confidential workspace" does not by itself create contractual confidentiality. ]',
      },
    ],
  },
  {
    id: "security",
    title: "12. Account and Security Responsibilities",
    blocks: [
      {
        type: "summary",
        text: "Covers credential protection, incident notification by the customer, and administrative-authority security consequences.",
      },
      {
        type: "placeholder",
        text: '[ Counsel- and Security-approved operative text. References reasonable safeguards only; no "unhackable," "fully secure," or absolute guarantee is made. ]',
      },
      {
        type: "crosslinks",
        links: [L.securityOverview, L.securityDisclosure],
      },
    ],
  },
  {
    id: "suspension",
    title: "13. Suspension, Termination and Data Handling",
    blocks: [
      {
        type: "summary",
        text: "Defines suspension grounds, notice/cure treatment, termination by customer or provider, the effect of termination, and data export/deletion/retention mechanics.",
      },
      {
        type: "placeholder",
        text: "[ Counsel-approved operative text, aligned with the DPA, Privacy Policy, backup policy, legal holds, and applicable law. Export availability and time windows reflect actual product/contract rights only. ]",
      },
      { type: "crosslinks", links: [L.dpa, L.privacy] },
    ],
  },
  {
    id: "disclaimers",
    title: "14. Warranties and Disclaimers",
    blocks: [
      {
        type: "summary",
        text: "Sets warranty and disclaimer language, including the boundary around regulated professional advice (legal, tax, accounting, audit, investment, employment, or similar).",
      },
      {
        type: "placeholder",
        text: "[ Counsel-approved operative text, rendered exactly as approved — not simplified into informal copy. Any AI-output disclaimer matches Responsible AI public positioning. ]",
      },
    ],
  },
  {
    id: "liability",
    title: "15. Limitation of Liability and Indemnity",
    blocks: [
      {
        type: "callout",
        text: "Counsel-owned text: the liability cap, excluded damages, carve-outs, indemnification duties, defense control, settlement rights, and exceptions are not drafted, summarized, reordered, or visually de-emphasized by design or content teams. The web layer renders the approved clause verbatim, preserving semantic headings and list structure.",
      },
      {
        type: "placeholder",
        text: "[ Verbatim counsel-approved liability and indemnification text inserted here at publication. ]",
      },
    ],
  },
  {
    id: "disputes",
    title: "16. Governing Law, Disputes and Notices",
    blocks: [
      {
        type: "summary",
        text: "States the governing law, venue/courts, arbitration terms (if applicable), any class/jury waiver, and formal notice channels and addresses.",
      },
      {
        type: "placeholder",
        text: "[ Exact counsel-approved jurisdiction, forum, and dispute-resolution language — required before publication. No pre- checked acceptance of separate dispute terms; non-waivable regional rights are preserved. ]",
      },
    ],
  },
  {
    id: "changes",
    title: "17. Changes to These Terms",
    blocks: [
      {
        type: "summary",
        text: "Explains how and when these Terms may change, how notice is given, and how continued use relates to acceptance of an updated version.",
      },
      {
        type: "placeholder",
        text: "[ Counsel-approved operative text. Published versions are immutable — corrections create a new version or a documented correction record rather than silently editing historical text. ]",
      },
    ],
  },
  {
    id: "contact",
    title: "18. Contact",
    blocks: [
      {
        type: "summary",
        text: "Questions about these Terms? Contact Legal.",
      },
      {
        type: "note",
        text: "Formal notices use the address specified in Section 16, not a general support form. Privacy questions route to the Privacy Policy / Consumer Rights Request process; security reports route to Security Disclosure; accessibility feedback routes to the Accessibility Statement process; ethics concerns route to Whistleblowing and Ethics Reporting.",
      },
    ],
  },
];

export type RelatedDoc = { name: string; description: string; href: string };

export const RELATED_DOCS: RelatedDoc[] = [
  {
    name: "Privacy Policy",
    description:
      "Public privacy notice; not a substitute for contractual data-processing terms.",
    href: "/legal/privacy-policy",
  },
  {
    name: "Cookie Policy / Preferences",
    description: "Website tracking and consent controls.",
    href: "/legal/cookie-policy",
  },
  {
    name: "Data Processing Agreement",
    description: "Contractual processing terms where applicable.",
    href: "/legal/dpa",
  },
  {
    name: "Subprocessor List",
    description: "Current approved service providers and change process.",
    href: "/legal/subprocessors",
  },
  {
    name: "Acceptable Use Policy",
    description:
      "Detailed service-use restrictions, incorporated where Legal approves.",
    href: "/legal/acceptable-use",
  },
  {
    name: "Accessibility Statement",
    description: "Public accessibility commitment/status and feedback route.",
    href: "/legal/accessibility-statement",
  },
  {
    name: "Responsible AI",
    description: "AI governance commitments and boundaries.",
    href: "/trust/responsible-ai",
  },
  {
    name: "Security Disclosure",
    description: "Security disclosure/reporting information.",
    href: "/legal/security-disclosure",
  },
  {
    name: "Legal Notices",
    description: "Additional statutory, ownership, or formal notices.",
    href: "/legal/notices",
  },
  {
    name: "Trademark Guidelines",
    description: "Brand and mark usage rules.",
    href: "/legal/trademark-guidelines",
  },
  {
    name: "Licenses",
    description: "Open-source and third-party license notices.",
    href: "/legal/licenses",
  },
  {
    name: "Regional privacy notices",
    description: "Jurisdiction-specific privacy rights and request mechanisms.",
    href: "/legal/privacy/eu",
  },
];

export type ContactRow = { label: string; linkLabel: string; href: string };

export const CONTACT_ROWS: ContactRow[] = [
  {
    label: "Questions about these Terms",
    linkLabel: "Contact Legal →",
    href: "#",
  },
  { label: "Formal legal notices", linkLabel: "Notice address →", href: "#disputes" },
  {
    label: "Privacy questions",
    linkLabel: "Privacy / Rights Request →",
    href: "/legal/privacy/consumer-rights",
  },
  {
    label: "Security reports",
    linkLabel: "Security Disclosure →",
    href: "/legal/security-disclosure",
  },
  {
    label: "Accessibility feedback",
    linkLabel: "Accessibility Statement →",
    href: "/legal/accessibility-statement",
  },
  {
    label: "Ethics & whistleblowing",
    linkLabel: "Whistleblowing & Ethics Reporting →",
    href: "/legal/ethics-reporting",
  },
];

export type MetaField = { label: string; value: string };

export const META_FIELDS: MetaField[] = [
  { label: "Effective date", value: "[ Date — pending Legal ]" },
  { label: "Last updated", value: "[ Date ]" },
  { label: "Version", value: "TOS-[YYYY-MM-DD]-v[N]" },
  { label: "Contracting entity", value: "[ Verified legal entity — pending Legal ]" },
  { label: "Language", value: "English (US)" },
];

export type VersionRow = {
  version: string;
  effective: string;
  status: "Current" | "Superseded";
  summary: string;
  actions: string[];
};

export const VERSION_ROWS: VersionRow[] = [
  {
    version: "[ Current version ]",
    effective: "[ Date ]",
    status: "Current",
    summary: "[ Counsel-approved summary ]",
    actions: ["View", "Download"],
  },
  {
    version: "[ Prior version ]",
    effective: "[ Date ] – [ Date ]",
    status: "Superseded",
    summary: "[ Summary ]",
    actions: ["View", "Download", "Compare"],
  },
];
