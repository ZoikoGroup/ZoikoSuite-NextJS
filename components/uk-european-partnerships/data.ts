// Shared tokens + content for the UK and European Partnerships page (Figma 1792:1035).

export const FONT_ARCHIVO = "var(--font-archivo), 'Archivo', sans-serif";

export const COLORS = {
  darkBg: "#092b35",
  darkBgAlt: "#082632",
  gold: "#dfb95d",
  goldOnDark: "#987b37",
  headingTeal: "#153d49",
  bodyTeal: "#637b82",
  accentTeal: "#207e83",
  border: "#dce5e5",
  borderSoft: "#cbdadb",
  pageCream: "#f6f5ef",
  heroBody: "#b4c8cc",
  sidebarBody: "#bbced2",
  outlineBtnBorder: "#5c7b84",
  badgeBg: "rgba(223,185,93,0.74)",
};

export type Pathway = {
  number: string;
  title: string;
  subtitle: string;
};

export const PATHWAYS: Pathway[] = [
  {
    number: "01",
    title: "Technology & Integration Collaboration",
    subtitle:
      "Explore interoperability, solution co-development, and the technical context of a proposed collaboration with your organization.",
  },
  {
    number: "02",
    title: "Channel, Referral & Distribution",
    subtitle:
      "Discuss commercial introductions, regional referral models, and potential distribution relationships for the markets you serve.",
  },
  {
    number: "03",
    title: "Implementation & Professional Services",
    subtitle:
      "Outline implementation, training, migration, or advisory capabilities and the delivery collaboration you would like to explore.",
  },
  {
    number: "04",
    title: "Strategic & Enterprise Alliances",
    subtitle:
      "Describe a cross-organization initiative, shared customer problem, and the business goals a potential alliance could address.",
  },
  {
    number: "05",
    title: "Co-Marketing, Events & Ecosystem",
    subtitle:
      "Propose webinars, events, editorial initiatives, or ecosystem activity with clear audience, region, timing, and asset context.",
  },
  {
    number: "06",
    title: "Existing Partner Relationship & Changes",
    subtitle:
      "Ask about an existing relationship, contact change, territory question, or prospective initiative using a non-sensitive reference.",
  },
];

export const ENQUIRY_TYPES = PATHWAYS.map((p) => p.title);

export type ProcessStep = {
  code: string;
  title: string;
  body: string;
  image: string;
  alt: string;
};

export const PROCESS_STEPS: ProcessStep[] = [
  {
    code: "01 / DESCRIBE",
    title: "Describe the opportunity",
    body: "Share your proposed collaboration, relevant capabilities, and intended markets.",
    image: "/uk-european-partnerships/step-describe-opportunity.jpg",
    alt: "Illustration of a professional outlining a collaboration idea",
  },
  {
    code: "02 / ROUTE",
    title: "Route to the appropriate team",
    body: "Your topic and regional context help identify the relevant review path.",
    image: "/uk-european-partnerships/step-route-to-team.jpg",
    alt: "Illustration of a team reviewing and routing an enquiry",
  },
  {
    code: "03 / FOLLOW UP",
    title: "Follow up where available",
    body: "An appropriate team member may contact you if further information is needed.",
    image: "/uk-european-partnerships/step-follow-up.jpg",
    alt: "Illustration of business correspondence and follow-up",
  },
];

export const CONTACT_METHOD_OPTIONS = ["Email", "Phone", "No preference"];

export const COUNTRY_MARKET_OPTIONS = [
  "United Kingdom",
  "Ireland",
  "France",
  "Germany",
  "Netherlands",
  "Other EU market",
];

export const EXISTING_RELATIONSHIP_OPTIONS = [
  "New relationship",
  "Existing relationship",
  "Former relationship",
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
    eyebrow: "European Headquarters",
    name: "Zoiko Tech",
    address: ["167–169 Great Portland Street, 5th Floor", "London W1W 5PF, United Kingdom"],
    routes: [
      { label: "European enterprise sales", tag: "Local preview" },
      { label: "UK and European partnerships", tag: "Current page", current: true, bold: true },
      { label: "Privacy and data protection", tag: "Privacy assistance" },
      { label: "Regional support", tag: "Support requests" },
    ],
  },
  {
    eyebrow: "Global Headquarters",
    name: "Zoiko Tech Inc.",
    address: ["1401 21st Street, Suite R", "Sacramento, CA 95811, United States"],
    routes: [
      { label: "Enterprise sales", tag: "Product purchase" },
      { label: "Corporate enquiries", tag: "Corporate matters" },
      { label: "Media enquiries", tag: "Press requests" },
      { label: "Partner enquiries", tag: "Local preview" },
    ],
  },
];

export type FaqItem = { question: string; answer: string };

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Does an enquiry confirm eligibility or partner status?",
    answer:
      "No. Submitting the form above starts a review — it does not establish partner programs, status, commercial terms, or eligible territories.",
  },
  {
    question: "Which countries and markets can I include?",
    answer:
      "Use the country / market field and the intended markets field in the form above — selected locations express interest and do not confirm availability.",
  },
  {
    question: "Can I send agreements or client documents?",
    answer:
      "No. As the form notes, we do not ask for budgets, financial accounts, ID documents, client datasets, employee details, or signed contracts at this stage.",
  },
  {
    question: "What if I have an existing relationship?",
    answer:
      "Select Existing relationship in the form above so your enquiry can be directed to the right team rather than treated as a new contact.",
  },
  {
    question: "Is there a fixed response time?",
    answer:
      "No. As stated above, no fixed response time or outcome is promised — an enquiry simply provides the context for review.",
  },
  {
    question: "Where should sales, press, privacy, or support requests go?",
    answer:
      "Use the headquarters directory above — enterprise sales, corporate enquiries, media enquiries, privacy, and support each have their own route.",
  },
];
