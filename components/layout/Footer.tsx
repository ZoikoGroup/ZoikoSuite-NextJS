import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaYoutube, FaXTwitter } from "react-icons/fa6";
import { LuGlobe, LuRss } from "react-icons/lu";

/**
 * ZoikoSuite site footer.
 *
 * Palette (from design spec):
 *  --azure-ink     #08222F  background
 *  --azure-accent   #1A4670  borders / hover accents
 *  --azure-neutral  #3D3D3D  neutral fallback
 *  --azure-white    #FFFFFF  base for all "color-azure-NN" text/border
 *                           tokens below, which are just white at
 *                           different opacities (e.g. azure-63-2 =
 *                           white/63.2%).
 *
 * Layout is rebuilt as responsive flex/grid; the original was
 * absolutely-positioned Figma output.
 */

// ---------------------------------------------------------------------------
// Content
// ---------------------------------------------------------------------------

type FooterLink = { label: string; href: string };
type FooterColumn = { title: string; links: FooterLink[] };

const NAV_COLUMNS: FooterColumn[] = [
  {
    title: "Platform",
    links: [
      { label: "Platform overview", href: "/platform-overview" },
      { label: "How ZoikoSuite works", href: "/how-it-works" },
      { label: "Governed Business", href: "/governed-business-operations" },
      {
        label: "Operating Intelligence",
        href: "/operating-intelligence",
      },
      {
        label: "Why ZoikoSuite Is Not an ERP",
        href: "/not-an-erp",
      },
      { label: "Platform Tour", href: "/platform-tour" },
      { label: "Product Roadmap", href: "/product-roadmap" },
      { label: "Deployment Options", href: "/deployment-options" },
      { label: "Core Modules", href: "/core-modules" },
      { label: "Governance Platform", href: "/governance-platform" },
      { label: "Platform Foundation", href: "/platform-foundation" },
      {
        label: "Migration & Shadow Mode",
        href: "/migration-shadow-mode",
      },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Leadership Teams", href: "/leadership-teams" },
      { label: "CFOs", href: "/cfos" },
      { label: "General Counsel", href: "/general-counsel" },
      {
        label: "Solve Critical Challenges",
        href: "/solve-critical-challenges",
      },
      {
        label: "Modernize Operations",
        href: "/modernize-operations",
      },
      { label: "Organization Type", href: "/organization-type" },
      { label: "Expansion", href: "/expansion" },
      { label: "Executive Resources", href: "/executive-resources" },
      { label: "Customer Stories", href: "/customer-stories" },
      { label: "Solution Brief", href: "/solution-brief" },
    ],
  },
  {
    title: "Industries",
    links: [
      { label: "Financial Service", href: "/financial-service" },
      { label: "Banking", href: "/banking" },
      { label: "Insurance", href: "/insurance" },
      { label: "Healthcare", href: "/healthcare" },
      { label: "Telecommunication & MVNOs", href: "/telecom-mvnos" },
      { label: "Manufacturing", href: "/manufacturing" },
      { label: "Energy & Utilities", href: "/energy-utilities" },
      { label: "Retail & Commerce", href: "/retail-commerce" },
      {
        label: "Government & Public Sector",
        href: "/government-public-sector",
      },
      { label: "All Industries", href: "/all-industries" },
      { label: "Industry Solutions", href: "/industry-solutions" },
    ],
  },
  {
    title: "Trust",
    links: [
      { label: "Trust Center", href: "/trust-center" },
      { label: "Security Overview", href: "/security-overview" },
      { label: "Compliance Overview", href: "/compliance-overview" },
      { label: "Data Residency", href: "/data-residency" },
      { label: "Privacy Architecture", href: "/privacy-architecture" },
      { label: "Evidence Architecture", href: "/evidence-architecture" },
      { label: "Responsible AI", href: "/responsible-ai" },
      { label: "Accessibility", href: "/trust/accessibility" },
      { label: "Certifications", href: "/trust/certifications" },
      { label: "Policies", href: "/trust/policies" },
      { label: "System Status", href: "/trust/system-status" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Resource Center", href: "/resources/center" },
      { label: "Executive Briefs", href: "/executive-briefs" },
      { label: "Documentation", href: "/documentation" },
      { label: "Knowledge Base", href: "/resources/knowledge-base" },
      { label: "Training Academy", href: "/resources/training-academy" },
      { label: "Webinars & Events", href: "/resources/webinars-events" },
      { label: "Case Studies", href: "/resources/case-studies" },
      { label: "Blog & Insights", href: "/blog-insights" },
      { label: "Templates & Tools", href: "/resources/templates-tools" },
      { label: "Support Center", href: "/resources/support-center" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About ZoikoSuite", href: "/company/about" },
      { label: "Founder's Vision", href: "/company/founders-vision" },
      { label: "Leadership", href: "/company/leadership" },
      { label: "Partners", href: "/company/partners" },
      { label: "Careers", href: "/company/careers" },
      { label: "Newsroom", href: "/company/newsroom" },
      { label: "Zoiko Tech", href: "/company/zoiko-tech" },
      { label: "Zoiko Group", href: "/company/zoiko-group" },
      { label: "Investor Relations", href: "/company/investor-relations" },
      { label: "Sustainability", href: "/company/sustainability" },
    ],
  },
];

type Office = {
  eyebrow: string;
  name: string;
  addressLines: string[];
  contacts: FooterLink[];
};

const OFFICES: Office[] = [
  {
    eyebrow: "Global headquarters",
    name: "Zoiko Tech Inc.",
    addressLines: [
      "1401 21st Street, Suite R",
      "Sacramento, CA 95811",
      "United States",
    ],
    contacts: [
      { label: "Enterprise sales", href: "/contact/enterprise-sales" },
      { label: "Corporate enquiries", href: "/contact/corporate" },
      { label: "Media enquiries", href: "/contact/media" },
      { label: "Partner enquiries", href: "/contact/partners" },
    ],
  },
  {
    eyebrow: "European headquarters",
    name: "Zoiko Tech",
    addressLines: [
      "167–169 Great Portland Street, 5th Floor",
      "London W1W 5PF",
      "United Kingdom",
    ],
    contacts: [
      {
        label: "European enterprise sales",
        href: "/contact/eu-enterprise-sales",
      },
      {
        label: "UK and European partnerships",
        href: "/contact/eu-partnerships",
      },
      {
        label: "Privacy and data protection",
        href: "/trust/privacy-architecture",
      },
      { label: "Regional support", href: "/resources/support-center" },
    ],
  },
];

const LEGAL_LINKS: FooterLink[] = [
  { label: "Terms of Service", href: "/legal/terms-of-service" },
  { label: "Privacy Policy", href: "/legal/privacy-policy" },
  { label: "Cookie Policy", href: "/legal/cookie-policy" },
  { label: "Cookie Preferences", href: "/legal/cookie-preferences" },
  { label: "Data Processing Agreement", href: "/legal/dpa" },
  { label: "Subprocessor List", href: "/legal/subprocessors" },
  { label: "Acceptable Use Policy", href: "/legal/acceptable-use" },
  { label: "Accessibility Statement", href: "/legal/accessibility-statement" },
  { label: "Responsible AI", href: "/responsible-ai" },
  { label: "Security Disclosure", href: "/legal/security-disclosure" },
  { label: "Legal Notices", href: "/legal/notices" },
  { label: "Trademark Guidelines", href: "/legal/trademark-guidelines" },
  { label: "Licenses", href: "/legal/licenses" },
  {
    label: "Modern Slavery Statement",
    href: "/legal/modern-slavery-statement",
  },
];

const PRIVACY_LINKS: FooterLink[] = [
  { label: "California Privacy Notice", href: "/legal/privacy/california" },
  { label: "UK Privacy Notice", href: "/legal/privacy/uk" },
  { label: "EU Privacy Notice", href: "/legal/privacy/eu" },
  {
    label: "Do Not Sell or Share My Personal Information",
    href: "/legal/privacy/do-not-sell",
  },
  { label: "Consumer Rights Request", href: "/legal/privacy/consumer-rights" },
  {
    label: "Whistleblowing and Ethics Reporting",
    href: "/legal/ethics-reporting",
  },
];

type FinePrintBlock = { eyebrow: string; body: React.ReactNode };

const FINE_PRINT: FinePrintBlock[] = [
  {
    eyebrow: "Copyright",
    body: "© 2026 Zoiko Suite Inc. All rights reserved.",
  },
  {
    eyebrow: "Product and group",
    body: "ZoikoSuite® is a governed business operations intelligence platform developed and operated by Zoiko Tech, a Zoiko Group company.",
  },
  {
    eyebrow: "Trademark",
    body: "ZoikoSuite, Zoiko Tech, Zoiko Group, their respective logos, product names, and related marks are trademarks or registered trademarks of their respective owners. Other names and marks may be the property of their respective owners.",
  },
  {
    eyebrow: "Availability",
    body: "Product descriptions, architecture statements, roadmap references, jurisdiction coverage, compliance capabilities, security controls, integrations, and deployment options may describe planned, configurable, or market-dependent functionality and do not constitute a guarantee of future availability.",
  },
  {
    eyebrow: "Standards and certifications",
    body: "References to standards, frameworks, and control objectives describe design targets or alignment unless an independently verified certification or attestation is expressly stated.",
  },
  {
    eyebrow: "Professional advice",
    body: "ZoikoSuite does not provide legal, tax, accounting, audit, investment, employment, or other regulated professional advice.",
  },
  {
    eyebrow: "Locations",
    body: "Global Headquarters: 1401 21st Street, Suite R, Sacramento, CA 95811, United States. European Headquarters: 167–169 Great Portland Street, 5th Floor, London W1W 5PF, United Kingdom.",
  },
  {
    eyebrow: "Institutional statement",
    body: (
      <>
        <span className="font-semibold text-white/[81.2%]">
          Governed Business Operations Intelligence
        </span>
        <span className="text-white/[63.2%]">
          {" "}
          — built for organizations operating across entities, jurisdictions,
          functions, and regulatory regimes.
        </span>
      </>
    ),
  },
];

type SocialLink = {
  label: string;
  href: string;
  Icon: React.ComponentType<{ className?: string }>;
};

const SOCIAL_LINKS: SocialLink[] = [
  { label: "X (Twitter)", href: "https://twitter.com/", Icon: FaXTwitter },
  { label: "LinkedIn", href: "https://linkedin.com/", Icon: FaLinkedin },
  { label: "GitHub", href: "https://github.com/", Icon: FaGithub },
  { label: "YouTube", href: "https://youtube.com/", Icon: FaYoutube },
  { label: "Blog RSS", href: "/resources/blog-and-insights", Icon: LuRss },
  { label: "Language", href: "#", Icon: LuGlobe },
];

// ---------------------------------------------------------------------------
// Small building blocks
// ---------------------------------------------------------------------------

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-mono text-[11px] font-medium uppercase tracking-wider text-[#D0AA55]">
      {children}
    </div>
  );
}

function NavColumn({ column }: { column: FooterColumn }) {
  return (
    <div className="flex min-w-[9rem] flex-1 flex-col gap-3">
      <Eyebrow>{column.title}</Eyebrow>
      <ul className="flex flex-col">
        {column.links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="inline-block min-h-8 py-1.5 text-sm leading-6 text-slate-400 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function OfficeBlock({ office }: { office: Office }) {
  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <Eyebrow>{office.eyebrow}</Eyebrow>
      <address className="text-sm not-italic leading-6 text-white/[81.2%]">
        {office.name}
        <br />
        {office.addressLines.map((line, i) => (
          <span key={i}>
            {line}
            <br />
          </span>
        ))}
      </address>
      <div className="flex flex-wrap gap-x-4 gap-y-2">
        {office.contacts.map((contact) => (
          <Link
            key={contact.label}
            href={contact.href}
            className="border-b border-white/[27%] pb-px text-xs leading-5 text-white/69 transition-colors hover:border-white/50 hover:text-white"
          >
            {contact.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

function LegalLinkRow({
  links,
  tone = "muted",
}: {
  links: FooterLink[];
  tone?: "muted" | "light";
}) {
  const textClass =
    tone === "muted"
      ? "text-slate-400 hover:text-white"
      : "text-white/[63.2%] hover:text-white";

  return (
    <div className="flex flex-wrap items-center">
      {links.map((link, i) => (
        <Link
          key={link.label}
          href={link.href}
          className={`min-h-9 border-white/23 px-2.5 py-2 text-sm leading-5 transition-colors ${textClass} ${
            i !== links.length - 1 ? "border-r" : ""
          }`}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Footer
// ---------------------------------------------------------------------------

export default function Footer() {
  return (
    <footer className="bg-[#08222F] text-white">
      <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-10 lg:px-[110px]">
        {/* Top: brand + nav columns */}
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-between">
          {/* Brand block */}
          <div className="flex w-full max-w-sm flex-shrink-0 flex-col gap-6">
            <Link
              href="/"
              aria-label="ZoikoSuite home"
              className="inline-block w-40"
            >
              <div className="flex h-20 w-40 overflow-hidden p-3">
                <Image
                  src="/navbar/footerLogo.png"
                  alt="ZoikoSuite Logo"
                  width={140}
                  height={74}
                  className="h-auto w-auto object-contain"
                />
              </div>
            </Link>

            <p className="max-w-sm text-sm leading-6 text-white/[63.2%]">
              Governed Business Operations Intelligence Platform.
              <br />A Zoiko Tech platform. A Zoiko Group company.
            </p>

            <div className="flex flex-wrap items-center gap-2">
              {SOCIAL_LINKS.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    href.startsWith("http") ? "noopener noreferrer" : undefined
                  }
                  className="flex size-11 items-center justify-center rounded-[10px] outline outline-1 outline-offset-[-1px] outline-white/25 transition-colors hover:bg-[#1A4670] hover:outline-[#1A4670]"
                >
                  <Icon className="size-4 text-slate-400" />
                </a>
              ))}
            </div>

            {/* Offices */}
            <div className="flex flex-col gap-8 pt-4">
              {OFFICES.map((office) => (
                <OfficeBlock key={office.eyebrow} office={office} />
              ))}
            </div>
          </div>

          {/* Nav columns */}
          <nav
            aria-label="Footer"
            className="grid flex-1 grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 lg:max-w-3xl"
          >
            {NAV_COLUMNS.map((column) => (
              <NavColumn key={column.title} column={column} />
            ))}
          </nav>
        </div>

        {/* Divider */}
        <div className="my-12 h-px w-full bg-white/10" />

        {/* Legal links */}
        <div className="flex flex-col gap-2 text-center border-t border-white/19 pt-7">
          <Eyebrow>Legal</Eyebrow>
          <div className="flex flex-col">
            <LegalLinkRow links={LEGAL_LINKS} tone="muted" />
            <LegalLinkRow links={PRIVACY_LINKS} tone="light" />
          </div>
        </div>

        {/* Fine print */}
        <div className="mt-12 flex flex-col gap-8 border-t border-white/19 pt-8 text-center">
          {FINE_PRINT.map((block) => (
            <div
              key={block.eyebrow}
              className="mx-auto flex max-w-4xl flex-col gap-2"
            >
              <div className="font-mono text-[10px] uppercase leading-4 tracking-wider text-white/47">
                {block.eyebrow}
              </div>
              <div className="text-xs leading-5 text-white/[63.2%]">
                {block.body}
              </div>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
