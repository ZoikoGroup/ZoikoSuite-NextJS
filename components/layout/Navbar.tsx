"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  LuChevronDown,
  LuSearch,
  LuArrowRight,
  LuChevronRight,
  LuMenu,
  LuX,
} from "react-icons/lu";
import {
  LucideBarChart2,
  LayoutGrid,
  Sun,
  Layers,
  PlayCircle,
  Box,
  Landmark,
  Shield,
  ShieldCheck,
  Workflow,
  Cloud,
  ArrowLeftRight,
  FileText,
  Users,
  Target,
  Maximize2,
  Plus,
  Radio,
  Zap,
  ShoppingCart,
  Lock,
  Database,
  UserCheck,
  FileSearch,
  Cpu,
  Accessibility,
  Award,
  MonitorCheck,
  BookOpen,
  GraduationCap,
  CalendarDays,
  Wrench,
  Headset,
  Building2,
  Eye,
  Briefcase,
  Newspaper,
  Leaf,
  Globe,
  Activity,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

/**
 * Top-level nav items.
 * Items with `hasMenu: true` open a mega menu / mobile accordion.
 * "Pricing" is a plain link: no dropdown, it goes straight to /pricing.
 */
const navItems = [
  { label: "Platform", href: "/platform", hasMenu: true },
  { label: "Solutions", href: "/solutions", hasMenu: true },
  { label: "Industries", href: "/industries", hasMenu: true },
  { label: "Trust", href: "/trust", hasMenu: true },
  { label: "Resources", href: "/resources", hasMenu: true },
  { label: "Company", href: "/company", hasMenu: true },
  { label: "Pricing", href: "/pricing", hasMenu: false },
] as const;

// Union of every label, including "Pricing"
type NavLabel = (typeof navItems)[number]["label"];

// Labels that own a dropdown (everything except Pricing)
type MenuLabel = Exclude<NavLabel, "Pricing">;

const isMenuLabel = (label: NavLabel): label is MenuLabel =>
  label !== "Pricing";

/* ------------------------------------------------------------------ */
/*  Mega menu types                                                    */
/* ------------------------------------------------------------------ */
type MegaItem = {
  title: string;
  desc: string;
  icon: LucideIcon;
  /** Optional. Falls back to `${basePath}/${slug(title)}` */
  href?: string;
};

type MegaLink = {
  label: string;
  /** Optional. Falls back to `${basePath}/${slug(label)}` */
  href?: string;
};

type MegaCard = {
  title: string;
  desc: string;
  icon: LucideIcon;
  href?: string;
};

type MegaColumn = {
  heading: string;
  items?: MegaItem[];
  links?: MegaLink[];
  extra?: {
    heading: string;
    links?: MegaLink[];
    cards?: MegaCard[];
  };
};

type MegaPanelData = {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  illustration: "platform" | "solutions" | "industries";
};

type MegaImageData = {
  src: string;
  alt: string;
  wrapperClassName: string;
};

type MegaMenuData = {
  basePath: string;
  columns: MegaColumn[];
  /** Dark featured panel on the right (Platform / Solutions / Industries) */
  panel?: MegaPanelData;
  /** Illustration image on the right (Trust / Resources / Company) */
  image?: MegaImageData;
};

const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/['\u2019]/g, "")
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const resolveHref = (
  menu: MegaMenuData,
  explicit: string | undefined,
  label: string,
) => explicit ?? `${menu.basePath}/${slugify(label)}`;

/** External URLs (https://...) open in a new tab; internal paths behave normally. */
const linkProps = (href: string) =>
  href.startsWith("http")
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

/* ------------------------------------------------------------------ */
/*  EDIT LINKS HERE                                                    */
/*  Change any `href` below. Nothing else in the file needs touching.  */
/*  Values can be internal ("/security") or external ("https://...")   */
/* ------------------------------------------------------------------ */
const editableLinks = {
  /* Trust menu -> ADDITIONAL RESOURCES */
  trustAdditionalResources: [
    { label: "Security Whitepapers", href: "/security-overview" },
    { label: "Compliance Reports", href: "/compliance-overview" },
    { label: "Audit Reports", href: "/whistleblowing-ethics-reporting" },
    {
      label: "Subprocessor Transparency",
      href: "/subprocessor-list",
    },
    { label: "Data Protection Addendum", href: "/dpa" },
  ],

  /* Resources menu -> POPULAR TOPICS (additional resources section) */
  resourcesPopularTopics: [
    { label: "Getting Started", href: "/platform" },
    {
      label: "Implementation Guides",
      href: "/how-it-works",
    },
    { label: "Product Updates", href: "/product-roadmap" },
  ],

  /* Company menu -> QUICK LINKS */
  companyQuickLinks: [
    { label: "Company Overview", href: "/company" },
    { label: "Leadership Team", href: "/leadership-teams" },
    { label: "Partner Program", href: "/partners" },
    { label: "Investor Resources", href: "/resources-center" },
    {
      label: "Sustainability Reports",
      href: "/sustainability",
    },
  ],

  /* Company menu -> FEATURED cards */
  companyFeatured: {
    globalPresence: { href: "/about" },
    impact: { href: "/founders-vision" },
  },
} satisfies {
  trustAdditionalResources: MegaLink[];
  resourcesPopularTopics: MegaLink[];
  companyQuickLinks: MegaLink[];
  companyFeatured: Record<string, { href: string }>;
};

/* ------------------------------------------------------------------ */
/*  Mega menu content (from Figma)                                     */
/* ------------------------------------------------------------------ */
const megaMenus: Record<MenuLabel, MegaMenuData> = {
  /* ------------------------------ PLATFORM ------------------------------ */
  Platform: {
    basePath: "/platform",
    columns: [
      {
        heading: "EXPLORE PLATFORM",
        items: [
          {
            title: "Platform Overview",
            desc: "See the big picture and explore key capabilities.",
            href: "/platform-overview",
            icon: LayoutGrid,
          },
          {
            title: "How ZoikoSuite Works",
            desc: "Understand how the platform connects people, data, and decisions.",
            href: "/how-it-works",
            icon: Sun,
          },
          {
            title: "Why ZoikoSuite Is Not an ERP",
            desc: "A new category for governed operations intelligence.",
            href: "/not-an-erp",
            icon: Layers,
          },
          {
            title: "Platform Tour",
            desc: "Take an interactive tour of the ZoikoSuite platform.",
            href: "/platform-tour",
            icon: PlayCircle,
          },
          {
            title: "Core Modules",
            desc: "Explore the foundational modules that power ZoikoSuite.",
            href: "/core-modules",
            icon: Box,
          },
        ],
      },
      {
        heading: "ARCHITECTURE & INTELLIGENCE",
        items: [
          {
            title: "Governed Business",
            desc: "Unify business operations with policy, authority, and oversight.",
            href: "/governed-business-operations",
            icon: Landmark,
          },
          {
            title: "Operating Intelligence",
            desc: "Turn operational data into trusted, actionable intelligence.",
            href: "/operating-intelligence",
            icon: LucideBarChart2,
          },
          {
            title: "Governance Platform",
            desc: "Built-in governance, controls, and intelligent enforcement.",
            href: "/governance-platform",
            icon: Shield,
          },
          {
            title: "Platform Foundation",
            desc: "A secure, scalable architecture designed for complex organizations.",
            href: "/platform-foundation",
            icon: Workflow,
          },
        ],
      },
      {
        heading: "DEPLOYMENT & ADOPTION",
        items: [
          {
            title: "Deployment Options",
            desc: "Choose the right deployment model for your organization.",
            href: "/deployment-options",
            icon: Cloud,
          },
          {
            title: "Migration & Shadow Mode",
            desc: "Move forward with confidence and minimize risk.",
            href: "/migration-shadow-mode",
            icon: ArrowLeftRight,
          },
          {
            title: "Product Roadmap",
            desc: "See what's coming next for ZoikoSuite.",
            href: "/product-roadmap",
            icon: FileText,
          },
        ],
      },
    ],
    panel: {
      eyebrow: "THE ZOIKOSUITE PLATFORM",
      title: "Governed Business Operations Intelligence",
      description:
        "Connect business actions, policy, authority, evidence, and intelligence across your organization.",
      primaryCta: { label: "Explore Platform", href: "/platform" },
      secondaryCta: { label: "Take Demo", href: "/book-demo" },
      illustration: "platform",
    },
  },

  /* ------------------------------ SOLUTIONS ----------------------------- */
  Solutions: {
    basePath: "/solutions",
    columns: [
      {
        heading: "TEAMS & LEADERSHIP",
        items: [
          {
            title: "Leadership Teams",
            desc: "Designed for executive and cross-functional leadership oversight.",
            icon: Users,
            href: "/leadership-teams",
          },
          {
            title: "CFOs",
            desc: "Support finance leaders with governed operational visibility.",
            icon: LucideBarChart2,
            href: "/cfos",
          },
          {
            title: "General Counsel",
            desc: "Bring legal review, approvals, and evidence into workflow.",
            icon: Shield,
            href: "/general-counsel",
          },
          {
            title: "Organization Type",
            desc: "Explore solution paths aligned to your business structure.",
            icon: Workflow,
            href: "/organization-type",
          },
        ],
      },
      {
        heading: "BUSINESS TRANSFORMATION",
        items: [
          {
            title: "Solve Critical Challenges",
            desc: "Address complex operational problems with governed intelligence.",
            icon: Target,
            href: "/solve-critical-challenges",
          },
          {
            title: "Modernize Operations",
            desc: "Improve workflows without replacing the systems that run them.",
            icon: Sun,
            href: "/modernize-operations",
          },
          {
            title: "Expansion",
            desc: "Scale into new markets, teams, and operational environments.",
            icon: Maximize2,
            href: "/expansion",
          },
        ],
      },
      {
        heading: "PROOF & DECISION SUPPORT",
        items: [
          {
            title: "Executive Resources",
            desc: "Access strategic material for evaluation and planning.",
            icon: FileText,
            href: "/executive-resources",
          },
          {
            title: "Customer Stories",
            desc: "See how organizations apply ZoikoSuite in practice.",
            icon: Users,
            href: "/customer-stories",
          },
          {
            title: "Solution Brief",
            desc: "Review a concise overview of the solution model and value.",
            icon: FileText,
            href: "/solution-brief",
          },
        ],
      },
    ],
    panel: {
      eyebrow: "THE ZOIKOSUITE SOLUTIONS",
      title: "Solutions for Governed Business Operations",
      description:
        "Explore role-based and organization-aligned solution paths built to modernize operations with policy, authority, and evidence attached.",
      primaryCta: { label: "Explore Solutions", href: "/solutions" },
      secondaryCta: { label: "Book Demo", href: "/book-demo" },
      illustration: "solutions",
    },
  },

  /* ------------------------------ INDUSTRIES ---------------------------- */
  Industries: {
    basePath: "/industries",
    columns: [
      {
        heading: "REGULATED INDUSTRIES",
        items: [
          {
            title: "Financial Service",
            desc: "Purpose-built operating intelligence for complex financial organizations.",
            icon: Landmark,
            href: "/financial-service",
          },
          {
            title: "Banking",
            desc: "Support governed banking operations, controls, and decision workflows.",
            icon: LucideBarChart2,
            href: "/banking",
          },
          {
            title: "Insurance",
            desc: "Connect underwriting, evidence, approvals, and operational oversight.",
            icon: Shield,
            href: "/insurance",
          },
          {
            title: "Healthcare",
            desc: "Bring policy, accountability, and evidence into healthcare operations.",
            icon: Plus,
            href: "/healthcare",
          },
        ],
      },
      {
        heading: "INFRASTRUCTURE & INDUSTRIAL",
        items: [
          {
            title: "Telecommunication & MVNOs",
            desc: "Manage high-volume telecom operations with stronger governance and visibility.",
            icon: Radio,
            href: "/telecom-mvno",
          },
          {
            title: "Manufacturing",
            desc: "Align plant, process, and cross-functional operations with accountable controls.",
            icon: Sun,
            href: "/manufacturing",
          },
          {
            title: "Energy & Utilities",
            desc: "Support regulated service operations with evidence and oversight built in.",
            icon: Zap,
            href: "/energy-utilities",
          },
        ],
      },
      {
        heading: "PUBLIC, COMMERCE & DISCOVERY",
        items: [
          {
            title: "Retail & Commerce",
            desc: "Modernize multi-channel commercial operations without losing control.",
            icon: ShoppingCart,
            href: "/retail-commerce",
          },
          {
            title: "Government & Public Sector",
            desc: "Support public-service workflows with structured governance and trust.",
            icon: Landmark,
            href: "/government-public-sector",
          },
          {
            title: "All Industries",
            desc: "Browse the complete ZoikoSuite industry landscape in one place.",
            icon: LayoutGrid,
            href: "/all-industries",
          },
          {
            title: "Industry Solutions",
            desc: "Explore how ZoikoSuite adapts its governed model across sectors.",
            icon: Workflow,
            href: "/industry-solutions",
          },
        ],
      },
    ],
    panel: {
      eyebrow: "THE ZOIKOSUITE INDUSTRIES",
      title: "Industry Solutions for Complex Operations",
      description:
        "Explore how ZoikoSuite applies governed business operations intelligence across regulated, industrial, commercial, and public-sector environments.",
      primaryCta: { label: "Explore Industries", href: "/industries" },
      secondaryCta: { label: "Book Demo", href: "/book-demo" },
      illustration: "industries",
    },
  },

  /* -------------------------------- TRUST ------------------------------- */
  Trust: {
    basePath: "/trust",
    columns: [
      {
        heading: "SECURITY & COMPLIANCE",
        items: [
          {
            title: "Trust Center",
            desc: "Our approach to trust, security and responsible operations.",
            icon: ShieldCheck,
            href: "/trust-center",
          },
          {
            title: "Security Overview",
            desc: "How we protect your data and platform.",
            icon: Lock,
            href: "/security-overview",
          },
          {
            title: "Compliance Overview",
            desc: "Regulatory alignment and compliance framework.",
            icon: FileText,
            href: "/compliance-overview",
          },
          {
            title: "Data Residency",
            desc: "Where your data is stored and how it is managed.",
            icon: Database,
            href: "/data-residency",
          },
          {
            title: "Privacy Architecture",
            desc: "Built-in privacy by design.",
            icon: UserCheck,
            href: "/privacy-architecture",
          },
        ],
      },
      {
        heading: "GOVERNANCE & ASSURANCE",
        items: [
          {
            title: "Evidence Architecture",
            desc: "How evidence is generated, managed and retained.",
            icon: FileSearch,
            href: "/evidence-architecture",
          },
          {
            title: "Responsible AI",
            desc: "Our approach to safe, responsible and transparent AI.",
            icon: Cpu,
            href: "/responsible-ai",
          },
          {
            title: "Accessibility",
            desc: "Inclusive design and WCAG 2.2 AA commitment.",
            icon: Accessibility,
            href: "/accessibility",
          },
          {
            title: "Certifications",
            desc: "Third-party certifications and attestations.",
            icon: Award,
            href: "/certifications",
          },
          {
            title: "Policies",
            desc: "Key policies for responsible use and governance.",
            icon: FileText,
            href: "/trust/policies",
          },
        ],
      },
      {
        heading: "MONITORING & ASSURANCE",
        items: [
          {
            title: "System Status",
            desc: "Live status of ZoikoSuite services and infrastructure.",
            icon: MonitorCheck,
            href: "/trust-system-status",
          },
        ],
        extra: {
          heading: "ADDITIONAL RESOURCES",
          links: editableLinks.trustAdditionalResources,
        },
      },
    ],
    image: {
      src: "/navbar/1.png",
      alt: "Trust and security illustration",
      wrapperClassName: "w-[290px]",
    },
  },

  /* ------------------------------ RESOURCES ----------------------------- */
  Resources: {
    basePath: "/resources",
    columns: [
      {
        heading: "FEATURED",
        items: [
          {
            title: "Resource Center",
            desc: "Guides, explainers and practical resources.",
            icon: BookOpen,
            href: "/resources-center",
          },
          {
            title: "Executive Briefs",
            desc: "Concise briefs for leaders and decision makers.",
            icon: FileText,
            href: "/executive-briefs",
          },
          {
            title: "Documentation",
            desc: "Product docs, technical guides and API references.",
            icon: FileText,
            href: "/documentation",
          },
          {
            title: "Knowledge Base",
            desc: "Searchable answers to common questions.",
            icon: Layers,
            href: "/knowledge-base",
          },
        ],
      },
      {
        heading: "LEARN",
        items: [
          {
            title: "Training Academy",
            desc: "Role-based training and certifications.",
            icon: GraduationCap,
            href: "/training-academy",
          },
          {
            title: "Webinars & Events",
            desc: "Live and on-demand sessions with experts.",
            icon: CalendarDays,
            href: "/webinars-events",
          },
          {
            title: "Case Studies",
            desc: "Real customer outcomes across industries.",
            icon: FileSearch,
            href: "/case-studies",
          },
          {
            title: "Blog & Insights",
            desc: "Latest thinking on governance, compliance and AI.",
            icon: LucideBarChart2,
            href: "/blog-insights",
          },
        ],
      },
      {
        heading: "TOOLS & SUPPORT",
        items: [
          {
            title: "Templates & Tools",
            desc: "Ready-to-use templates, calculators and frameworks.",
            icon: Wrench,
            href: "/templates-tools",
          },
          {
            title: "Support Center",
            desc: "Get help, submit a request and track cases.",
            icon: Headset,
            href: "/support-center",
          },
        ],
        extra: {
          heading: "POPULAR TOPICS",
          links: editableLinks.resourcesPopularTopics,
        },
      },
    ],
    image: {
      src: "/navbar/2.png",
      alt: "Resources illustration",
      wrapperClassName: "w-[290px]",
    },
  },

  /* ------------------------------- COMPANY ------------------------------ */
  Company: {
    basePath: "/company",
    columns: [
      {
        heading: "ABOUT US",
        items: [
          {
            title: "About ZoikoSuite",
            desc: "Our mission, business and what we are building.",
            icon: Building2,
            href: "/about",
          },
          {
            title: "Founder's Vision",
            desc: "The ideas, values and beliefs that shape Zoiko.",
            icon: Eye,
            href: "/founders-vision",
          },
          {
            title: "Leadership",
            desc: "The people guiding our strategy and growth.",
            icon: Users,
            href: "/leadership",
          },
          {
            title: "Partners",
            desc: "Our ecosystem of strategic partners.",
            icon: Activity,
            href: "/partners",
          },
          {
            title: "Careers",
            desc: "Build what's next with us.",
            icon: Briefcase,
            href: "/careers",
          },
        ],
      },
      {
        heading: "COMPANY INSIGHTS",
        items: [
          {
            title: "Newsroom",
            desc: "Latest news, announcements and company updates.",
            icon: Newspaper,
            href: "/newsroom",
          },
          {
            title: "Zoiko Tech",
            desc: "Our technology, innovation and engineering capabilities.",
            icon: Cpu,
            href: "/zoiko-tech",
          },
          {
            title: "Zoiko Group",
            desc: "Our parent organisation and group companies.",
            icon: Building2,
            href: "/zoiko-group",
          },
          {
            title: "Investor Relations",
            desc: "Financial information, updates and investor resources.",
            icon: LucideBarChart2,
            href: "/investor-relations",
          },
          {
            title: "Sustainability",
            desc: "Our commitment to a more sustainable and inclusive future.",
            icon: Leaf,
            href: "/sustainability",
          },
        ],
      },
      {
        heading: "QUICK LINKS",
        links: editableLinks.companyQuickLinks,
        extra: {
          heading: "FEATURED",
          cards: [
            {
              title: "Our Global Presence",
              desc: "Offices, locations and local teams.",
              icon: Globe,
              href: editableLinks.companyFeatured.globalPresence.href,
            },
            {
              title: "Our Impact",
              desc: "People, planet and long-term value.",
              icon: ShieldCheck,
              href: editableLinks.companyFeatured.impact.href,
            },
          ],
        },
      },
    ],
    image: {
      src: "/navbar/3.png",
      alt: "Company illustration",
      wrapperClassName: "w-[230px]",
    },
  },
};

/* ------------------------------------------------------------------ */
/*  Illustrations for the dark featured panel                          */
/* ------------------------------------------------------------------ */

/* Layered "PEOPLE / POLICY / INTELLIGENCE / EVIDENCE / OPERATIONS" art */
function PlatformLayersIllustration() {
  const layers = [
    { label: "PEOPLE", y: 40, active: false },
    { label: "POLICY", y: 72, active: false },
    { label: "INTELLIGENCE", y: 106, active: true },
    { label: "EVIDENCE", y: 142, active: false },
    { label: "OPERATIONS", y: 174, active: false },
  ];

  return (
    <svg
      viewBox="0 0 230 210"
      className="w-full h-auto"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="pl-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#E9B04A" stopOpacity="0.45" />
          <stop offset="60%" stopColor="#E9B04A" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#E9B04A" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="pl-active" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#8A6425" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#3A3A3C" stopOpacity="0.6" />
        </linearGradient>
      </defs>

      <ellipse cx="115" cy="108" rx="100" ry="48" fill="url(#pl-glow)" />

      {layers.map((l) => (
        <g key={l.label}>
          <polygon
            points={`8,${l.y} 122,${l.y - 26} 222,${l.y - 2} 108,${l.y + 26}`}
            fill={l.active ? "url(#pl-active)" : "#1A4068"}
            fillOpacity={l.active ? 1 : 0.35}
            stroke={l.active ? "#E9B04A" : "#3A6796"}
            strokeOpacity={l.active ? 1 : 0.55}
            strokeWidth={l.active ? 1.2 : 0.8}
          />
          <text
            x="115"
            y={l.y + 2}
            textAnchor="middle"
            transform={`rotate(-12 115 ${l.y + 2})`}
            fontSize="7.5"
            fontWeight={l.active ? 600 : 500}
            letterSpacing="0.9"
            fill={l.active ? "#F0C56E" : "#C7D3E1"}
            fontFamily="Inter, sans-serif"
          >
            {l.label}
          </text>
        </g>
      ))}

      <line
        x1="164"
        y1="6"
        x2="164"
        y2="30"
        stroke="#E9B04A"
        strokeOpacity="0.8"
        strokeWidth="0.8"
      />
      <line
        x1="144"
        y1="18"
        x2="186"
        y2="18"
        stroke="#E9B04A"
        strokeOpacity="0.35"
        strokeWidth="0.8"
      />
      <circle cx="164" cy="18" r="1.6" fill="#E9B04A" />

      <circle cx="42" cy="66" r="1.4" fill="#E9B04A" fillOpacity="0.7" />
      <circle cx="205" cy="92" r="1.4" fill="#E9B04A" fillOpacity="0.7" />
      <circle cx="18" cy="118" r="1.6" fill="#E9B04A" />
      <circle cx="200" cy="160" r="1.4" fill="#5C86B5" />
      <circle cx="30" cy="188" r="1.4" fill="#5C86B5" />
    </svg>
  );
}

type HubNode = { x: number; y: number; icon: LucideIcon };

/* Stacked "Z" layers in the middle with icon diamonds connected around it */
function HubIllustration({
  id,
  center,
  nodes,
}: {
  id: string;
  center: { x: number; y: number };
  nodes: HubNode[];
}) {
  const { x: cx, y: cy } = center;
  const diamond = (x: number, y: number, hw: number, hh: number) =>
    `${x - hw},${y} ${x},${y - hh} ${x + hw},${y} ${x},${y + hh}`;

  return (
    <svg
      viewBox="0 0 240 200"
      className="w-full h-auto"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id={`${id}-glow`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#E9B04A" stopOpacity="0.5" />
          <stop offset="55%" stopColor="#E9B04A" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#E9B04A" stopOpacity="0" />
        </radialGradient>
        <linearGradient id={`${id}-top`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#D9A441" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#7A5A22" stopOpacity="0.85" />
        </linearGradient>
      </defs>

      {/* glow */}
      <ellipse cx={cx} cy={cy + 4} rx="98" ry="76" fill={`url(#${id}-glow)`} />

      {/* connectors */}
      {nodes.map((n, i) => (
        <line
          key={`l-${i}`}
          x1={cx}
          y1={cy}
          x2={n.x}
          y2={n.y}
          stroke="#3A6796"
          strokeOpacity="0.55"
          strokeWidth="0.8"
        />
      ))}

      {/* stacked layers */}
      <polygon
        points={diamond(cx, cy + 14, 56, 20)}
        fill="#8A6425"
        fillOpacity="0.4"
        stroke="#C0872B"
        strokeOpacity="0.7"
        strokeWidth="0.9"
      />
      <polygon
        points={diamond(cx, cy + 4, 56, 20)}
        fill="#B98A35"
        fillOpacity="0.5"
        stroke="#E9B04A"
        strokeOpacity="0.85"
        strokeWidth="0.9"
      />
      <polygon
        points={diamond(cx, cy - 6, 56, 20)}
        fill={`url(#${id}-top)`}
        stroke="#F0C56E"
        strokeWidth="1"
      />
      <text
        x={cx}
        y={cy - 1}
        textAnchor="middle"
        fontSize="15"
        fontWeight={600}
        fill="#F7E1A8"
        fontFamily="Inter, sans-serif"
      >
        Z
      </text>

      {/* satellite nodes */}
      {nodes.map((n, i) => {
        const Icon = n.icon;
        return (
          <g key={`n-${i}`}>
            <polygon
              points={diamond(n.x, n.y, 28, 17)}
              fill="#123A62"
              stroke="#4F7CAE"
              strokeOpacity="0.9"
              strokeWidth="0.9"
            />
            <Icon
              x={n.x - 6}
              y={n.y - 6}
              width={12}
              height={12}
              color="#C7D3E1"
              strokeWidth={1.6}
            />
          </g>
        );
      })}

      {/* sparkles */}
      <circle cx="12" cy="30" r="1.2" fill="#E9B04A" fillOpacity="0.8" />
      <circle cx="228" cy="24" r="1.2" fill="#E9B04A" fillOpacity="0.8" />
      <circle cx="232" cy="118" r="1.2" fill="#5C86B5" />
      <circle cx="8" cy="112" r="1.2" fill="#5C86B5" />
      <circle cx="176" cy="192" r="1.2" fill="#E9B04A" fillOpacity="0.8" />
      <circle cx="70" cy="194" r="1.2" fill="#E9B04A" fillOpacity="0.8" />
    </svg>
  );
}

function PanelIllustration({ kind }: { kind: MegaPanelData["illustration"] }) {
  if (kind === "solutions") {
    return (
      <HubIllustration
        id="sol"
        center={{ x: 120, y: 90 }}
        nodes={[
          { x: 120, y: 22, icon: Users },
          { x: 30, y: 66, icon: LucideBarChart2 },
          { x: 210, y: 66, icon: Shield },
          { x: 44, y: 148, icon: Sun },
          { x: 196, y: 148, icon: FileText },
        ]}
      />
    );
  }

  if (kind === "industries") {
    return (
      <HubIllustration
        id="ind"
        center={{ x: 120, y: 92 }}
        nodes={[
          { x: 120, y: 24, icon: Landmark },
          { x: 28, y: 62, icon: LucideBarChart2 },
          { x: 212, y: 62, icon: Activity },
          { x: 28, y: 131, icon: Radio },
          { x: 212, y: 131, icon: ShoppingCart },
          { x: 75, y: 174, icon: Plus },
          { x: 165, y: 174, icon: Zap },
        ]}
      />
    );
  }

  return <PlatformLayersIllustration />;
}

/* ------------------------------------------------------------------ */
/*  Mega menu building blocks                                          */
/* ------------------------------------------------------------------ */
function MegaHeading({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h3
      className={`text-[#D9A03F] text-[11px] font-semibold font-['Inter'] uppercase tracking-[0.06em] leading-4 ${className}`}
    >
      {children}
    </h3>
  );
}

function MegaItemLink({
  entry,
  href,
  onNavigate,
}: {
  entry: MegaItem;
  href: string;
  onNavigate: () => void;
}) {
  const Icon = entry.icon;
  return (
    <Link
      href={href}
      onClick={onNavigate}
      {...linkProps(href)}
      className="group -mx-2.5 px-2.5 py-2.5 rounded-lg flex items-start gap-4 hover:bg-[#F4F7FB] transition-colors duration-150"
    >
      <span className="shrink-0 w-9 h-9 rounded-[10px] bg-[#12365E] flex items-center justify-center transition-all duration-200 group-hover:bg-[#C0872B] group-hover:scale-105">
        <Icon className="w-[18px] h-[18px] text-[#FFFFFF]" strokeWidth={1.75} />
      </span>

      <span className="flex-1 min-w-0 flex flex-col gap-1">
        <span className="flex items-center justify-between gap-1">
          <span className="text-[#12365E] text-[13px] font-semibold font-['Inter'] leading-5 transition-colors duration-150 group-hover:text-[#C0872B]">
            {entry.title}
          </span>
          <LuChevronRight className="shrink-0 w-3.5 h-3.5 text-[#9AA6B5] transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-[#C0872B]" />
        </span>
        <span className="text-[#9AA6B5] text-xs font-normal font-['Inter'] leading-5 transition-colors duration-150 group-hover:text-[#6B7A8D]">
          {entry.desc}
        </span>
      </span>
    </Link>
  );
}

function MegaPlainLink({
  label,
  href,
  onNavigate,
}: {
  label: string;
  href: string;
  onNavigate: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onNavigate}
      {...linkProps(href)}
      className="group -mx-2.5 px-2.5 py-2.5 rounded-lg flex items-center justify-between gap-2 text-[#12365E] text-[13px] font-normal font-['Inter'] leading-5 hover:bg-[#F4F7FB] hover:text-[#C0872B] transition-colors duration-150"
    >
      <span>{label}</span>
      <LuChevronRight className="shrink-0 w-3.5 h-3.5 text-[#9AA6B5] transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-[#C0872B]" />
    </Link>
  );
}

function MegaFeatureCard({
  card,
  href,
  onNavigate,
}: {
  card: MegaCard;
  href: string;
  onNavigate: () => void;
}) {
  const Icon = card.icon;
  return (
    <Link
      href={href}
      onClick={onNavigate}
      {...linkProps(href)}
      className="group rounded-lg border border-[#E3EAF3] bg-[#F4F7FB] px-4 py-4 flex items-center gap-3 hover:bg-[#FFFFFF] hover:border-[#C0872B]/50 hover:shadow-md transition-all duration-200"
    >
      <Icon
        className="shrink-0 w-[18px] h-[18px] text-[#2F5FA8] transition-colors duration-200 group-hover:text-[#C0872B]"
        strokeWidth={1.75}
      />
      <span className="flex-1 min-w-0 flex flex-col gap-0.5">
        <span className="text-[#12365E] text-[13px] font-semibold font-['Inter'] leading-5 transition-colors duration-150 group-hover:text-[#C0872B]">
          {card.title}
        </span>
        <span className="text-[#9AA6B5] text-xs font-normal font-['Inter'] leading-5">
          {card.desc}
        </span>
      </span>
      <LuChevronRight className="shrink-0 w-3.5 h-3.5 text-[#9AA6B5] transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-[#C0872B]" />
    </Link>
  );
}

function MegaFeaturedPanel({
  panel,
  onNavigate,
}: {
  panel: MegaPanelData;
  onNavigate: () => void;
}) {
  return (
    <div className="w-[290px] shrink-0 rounded-xl bg-[#0F2B48] px-7 pt-6 pb-5 flex flex-col">
      <span className="text-[#D9A03F] text-[10px] font-semibold font-['Inter'] uppercase tracking-[0.08em] leading-4">
        {panel.eyebrow}
      </span>

      <h3 className="mt-2 text-[#FFFFFF] text-[22px] font-semibold font-['Inter'] leading-7">
        {panel.title}
      </h3>

      <p className="mt-4 text-[#B8C5D6] text-[13px] font-normal font-['Inter'] leading-5">
        {panel.description}
      </p>

      {/* Illustration absorbs any spare height so the panel never has dead space */}
      <div className="mt-4 flex-1 min-h-[180px] flex items-center justify-center">
        <div className="w-full">
          <PanelIllustration kind={panel.illustration} />
        </div>
      </div>

      <div className="pt-3 flex flex-col gap-2.5">
        <Link
          href={panel.primaryCta.href}
          onClick={onNavigate}
          className="group/cta h-10 rounded-md bg-gradient-to-r from-[#CFA04A] via-[#E4B95F] to-[#EBC77A] flex items-center justify-center gap-3 text-[#0F2B48] text-[13px] font-semibold font-['Inter'] shadow-sm hover:brightness-105 hover:shadow-md transition-all duration-200"
        >
          {panel.primaryCta.label}
          <LuArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/cta:translate-x-1" />
        </Link>

        <Link
          href={panel.secondaryCta.href}
          onClick={onNavigate}
          className="group/demo h-10 rounded-md border border-[#C0872B] flex items-center justify-center gap-2 text-[#E4B95F] text-[13px] font-medium font-['Inter'] hover:bg-[#C0872B]/15 hover:border-[#E4B95F] hover:text-[#F0C56E] transition-colors duration-200"
        >
          <PlayCircle className="w-4 h-4 transition-transform duration-200 group-hover/demo:scale-110" />
          {panel.secondaryCta.label}
        </Link>
      </div>
    </div>
  );
}

function MegaMenuCard({
  menu,
  onNavigate,
}: {
  menu: MegaMenuData;
  onNavigate: () => void;
}) {
  return (
    /*
      Height rule: the desktop nav bar is 6rem (h-24) tall and the menu is
      anchored right under it. Capping the card at (90vh - 6rem) guarantees
      the menu never grows past 90% of the viewport, so the bottom 10% of the
      screen always stays idle. If the content is taller than that (short
      laptop screens), the card scrolls internally.
    */
    <div className="flex items-stretch gap-5 bg-[#FFFFFF] rounded-2xl p-3.5 pl-7 shadow-[0_10px_30px_rgba(18,54,94,0.18)] border border-[#EAEEF4] max-h-[calc(90vh-3rem)] overflow-y-auto overscroll-contain">
      {/* ---------- Link columns ---------- */}
      <div className="flex-1 grid grid-cols-3 gap-x-6 pt-5 pb-5">
        {menu.columns.map((col) => (
          <div key={col.heading} className="flex flex-col">
            <MegaHeading className="mb-5">{col.heading}</MegaHeading>

            {col.items && (
              <ul className="flex flex-col gap-4">
                {col.items.map((entry) => (
                  <li key={entry.title}>
                    <MegaItemLink
                      entry={entry}
                      href={resolveHref(menu, entry.href, entry.title)}
                      onNavigate={onNavigate}
                    />
                  </li>
                ))}
              </ul>
            )}

            {col.links && (
              <ul className="flex flex-col">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <MegaPlainLink
                      label={link.label}
                      href={resolveHref(menu, link.href, link.label)}
                      onNavigate={onNavigate}
                    />
                  </li>
                ))}
              </ul>
            )}

            {col.extra && (
              <div
                className={
                  col.items || col.links
                    ? "mt-5 pt-6 border-t border-[#EAEEF4]"
                    : ""
                }
              >
                <MegaHeading className="mb-3">{col.extra.heading}</MegaHeading>

                {col.extra.links && (
                  <ul className="flex flex-col">
                    {col.extra.links.map((link) => (
                      <li key={link.label}>
                        <MegaPlainLink
                          label={link.label}
                          href={resolveHref(menu, link.href, link.label)}
                          onNavigate={onNavigate}
                        />
                      </li>
                    ))}
                  </ul>
                )}

                {col.extra.cards && (
                  <ul className="flex flex-col gap-3">
                    {col.extra.cards.map((card) => (
                      <li key={card.title}>
                        <MegaFeatureCard
                          card={card}
                          href={resolveHref(menu, card.href, card.title)}
                          onNavigate={onNavigate}
                        />
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* ---------- Right side: dark panel OR illustration image ---------- */}
      {menu.panel && (
        <MegaFeaturedPanel panel={menu.panel} onNavigate={onNavigate} />
      )}

      {/* Image fills the full height of the card, so no idle space either */}
      {menu.image && (
        <div
          className={`relative shrink-0 self-stretch min-h-[340px] ${menu.image.wrapperClassName}`}
        >
          <Image
            src={menu.image.src}
            alt={menu.image.alt}
            fill
            sizes="300px"
            className="object-contain p-2"
          />
        </div>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Mobile drawer                                                      */
/* ------------------------------------------------------------------ */
type MobileGroup = {
  key: string;
  heading: string;
  items?: MegaItem[];
  links?: MegaLink[];
  cards?: MegaCard[];
};

/* Flatten each column (and its "extra" block) into an accordion group */
const getMobileGroups = (label: MenuLabel, menu: MegaMenuData): MobileGroup[] =>
  menu.columns.flatMap((col) => {
    const groups: MobileGroup[] = [
      {
        key: `${label}:${col.heading}`,
        heading: col.heading,
        items: col.items,
        links: col.links,
      },
    ];
    if (col.extra) {
      groups.push({
        key: `${label}:${col.extra.heading}`,
        heading: col.extra.heading,
        links: col.extra.links,
        cards: col.extra.cards,
      });
    }
    return groups;
  });

function MobileItemLink({
  entry,
  href,
  onNavigate,
}: {
  entry: MegaItem;
  href: string;
  onNavigate: () => void;
}) {
  const Icon = entry.icon;
  return (
    <Link
      href={href}
      onClick={onNavigate}
      {...linkProps(href)}
      className="group flex items-start gap-3 px-3 py-2.5 rounded-lg hover:bg-[#F4F7FB] active:bg-[#F4F7FB] transition-colors duration-150"
    >
      <span className="shrink-0 w-9 h-9 rounded-[10px] bg-[#12365E] flex items-center justify-center transition-colors duration-200 group-hover:bg-[#C0872B] group-active:bg-[#C0872B]">
        <Icon className="w-[18px] h-[18px] text-[#FFFFFF]" strokeWidth={1.75} />
      </span>
      <span className="flex-1 min-w-0 flex flex-col gap-0.5">
        <span className="text-[#12365E] text-sm font-semibold font-['Inter'] leading-5 break-words">
          {entry.title}
        </span>
        <span className="text-[#9AA6B5] text-xs font-normal font-['Inter'] leading-5">
          {entry.desc}
        </span>
      </span>
      <LuChevronRight className="shrink-0 mt-2 w-3.5 h-3.5 text-[#9AA6B5]" />
    </Link>
  );
}

function MobileDrawer({
  isOpen,
  onClose,
  openSection,
  onToggleSection,
  openGroups,
  onToggleGroup,
}: {
  isOpen: boolean;
  onClose: () => void;
  openSection: MenuLabel | null;
  onToggleSection: (item: MenuLabel) => void;
  openGroups: Set<string>;
  onToggleGroup: (key: string) => void;
}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="mobile-drawer"
          className="lg:hidden fixed inset-0 z-[60]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          role="dialog"
          aria-modal="true"
          aria-label="Main menu"
        >
          {/* Backdrop (the idle ~10% below the panel is tappable to close) */}
          <div
            className="absolute inset-0 bg-[#0F2B48]/40"
            onClick={onClose}
            aria-hidden="true"
          />

          {/*
            Panel: capped at 90dvh so ~10% of the screen always stays idle
            at the bottom (backdrop visible, tap to dismiss). Rounded on the
            free bottom corner(s) so it reads as a sheet, not a full page.
          */}
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="absolute right-0 top-0 h-[90dvh] max-h-[90dvh] w-full sm:max-w-[420px] bg-[#FFFFFF] flex flex-col shadow-2xl overflow-hidden rounded-b-2xl sm:rounded-br-none sm:rounded-bl-2xl"
          >
            {/* Header */}
            <div className="shrink-0 h-16 sm:h-20 px-4 sm:px-6 flex items-center justify-between border-b border-[#EAEEF4]">
              <Link href="/" onClick={onClose} className="flex items-center">
                <div className="w-[120px] h-[48px] relative overflow-hidden">
                  <Image
                    src="/logo.png"
                    alt="Zoiko Suite Logo"
                    fill
                    className="object-contain object-left"
                  />
                </div>
              </Link>

              <button
                type="button"
                suppressHydrationWarning
                onClick={onClose}
                aria-label="Close menu"
                className="w-11 h-11 flex justify-center items-center rounded-[10px] hover:bg-[#EAEEF4]/50 transition-colors"
              >
                <LuX className="w-6 h-6 text-[#12365E]" />
              </button>
            </div>

            {/* Scrollable accordion list */}
            <div className="flex-1 min-h-0 overflow-y-auto overscroll-contain px-4 sm:px-6">
              <ul>
                {navItems.map((item) => {
                  const label = item.label;

                  /* ---- Pricing: plain link, no dropdown ---- */
                  if (!isMenuLabel(label)) {
                    return (
                      <li key={label} className="border-b border-[#EAEEF4]">
                        <Link
                          href={item.href}
                          onClick={onClose}
                          className="w-full min-h-14 flex items-center justify-between text-left text-base font-medium font-['Inter'] text-[#12365E] hover:text-[#C0872B] active:text-[#C0872B] transition-colors"
                        >
                          <span>{label}</span>
                          <LuChevronRight className="w-4 h-4 text-[#9AA6B5]" />
                        </Link>
                      </li>
                    );
                  }

                  const menu = megaMenus[label];
                  const expanded = openSection === label;
                  const groups = getMobileGroups(label, menu);

                  return (
                    <li key={label} className="border-b border-[#EAEEF4]">
                      <button
                        type="button"
                        suppressHydrationWarning
                        onClick={() => onToggleSection(label)}
                        aria-expanded={expanded}
                        className="w-full min-h-14 flex items-center justify-between text-left text-base font-medium font-['Inter'] text-[#12365E]"
                      >
                        <span
                          className={
                            expanded ? "text-[#C0872B]" : "text-[#12365E]"
                          }
                        >
                          {label}
                        </span>
                        <LuChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            expanded
                              ? "rotate-180 text-[#C0872B]"
                              : "text-[#9AA6B5]"
                          }`}
                        />
                      </button>

                      <AnimatePresence initial={false}>
                        {expanded && (
                          <motion.div
                            key="section"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.22, ease: "easeOut" }}
                            className="overflow-hidden"
                          >
                            <div className="pb-4 flex flex-col gap-1">
                              {groups.map((group) => {
                                const groupOpen = openGroups.has(group.key);
                                return (
                                  <div key={group.key}>
                                    <button
                                      type="button"
                                      suppressHydrationWarning
                                      onClick={() => onToggleGroup(group.key)}
                                      aria-expanded={groupOpen}
                                      className="w-full min-h-11 px-3 rounded-lg flex items-center justify-between gap-2 text-left hover:bg-[#F4F7FB] transition-colors"
                                    >
                                      <MegaHeading>{group.heading}</MegaHeading>
                                      <LuChevronDown
                                        className={`shrink-0 w-3.5 h-3.5 text-[#9AA6B5] transition-transform duration-200 ${
                                          groupOpen ? "rotate-180" : ""
                                        }`}
                                      />
                                    </button>

                                    <AnimatePresence initial={false}>
                                      {groupOpen && (
                                        <motion.div
                                          key="group"
                                          initial={{ height: 0, opacity: 0 }}
                                          animate={{
                                            height: "auto",
                                            opacity: 1,
                                          }}
                                          exit={{ height: 0, opacity: 0 }}
                                          transition={{
                                            duration: 0.2,
                                            ease: "easeOut",
                                          }}
                                          className="overflow-hidden"
                                        >
                                          <div className="pt-1 pb-2 flex flex-col gap-0.5">
                                            {group.items?.map((entry) => (
                                              <MobileItemLink
                                                key={entry.title}
                                                entry={entry}
                                                href={resolveHref(
                                                  menu,
                                                  entry.href,
                                                  entry.title,
                                                )}
                                                onNavigate={onClose}
                                              />
                                            ))}

                                            {group.links?.map((link) => {
                                              const linkHref = resolveHref(
                                                menu,
                                                link.href,
                                                link.label,
                                              );
                                              return (
                                                <Link
                                                  key={link.label}
                                                  href={linkHref}
                                                  onClick={onClose}
                                                  {...linkProps(linkHref)}
                                                  className="flex items-center justify-between gap-2 px-3 py-3 rounded-lg text-sm font-normal font-['Inter'] text-[#12365E] hover:bg-[#F4F7FB] hover:text-[#C0872B] active:bg-[#F4F7FB] transition-colors"
                                                >
                                                  <span>{link.label}</span>
                                                  <LuChevronRight className="shrink-0 w-3.5 h-3.5 text-[#9AA6B5]" />
                                                </Link>
                                              );
                                            })}

                                            {group.cards && (
                                              <div className="flex flex-col gap-3 px-1 pt-1">
                                                {group.cards.map((card) => (
                                                  <MegaFeatureCard
                                                    key={card.title}
                                                    card={card}
                                                    href={resolveHref(
                                                      menu,
                                                      card.href,
                                                      card.title,
                                                    )}
                                                    onNavigate={onClose}
                                                  />
                                                ))}
                                              </div>
                                            )}
                                          </div>
                                        </motion.div>
                                      )}
                                    </AnimatePresence>
                                  </div>
                                );
                              })}

                              {/* Featured panel, condensed for mobile */}
                              {menu.panel && (
                                <div className="mt-3 rounded-xl bg-[#0F2B48] p-4 sm:p-5 flex flex-col">
                                  <span className="text-[#D9A03F] text-[10px] font-semibold font-['Inter'] uppercase tracking-[0.08em] leading-4">
                                    {menu.panel.eyebrow}
                                  </span>
                                  <h3 className="mt-2 text-[#FFFFFF] text-lg font-semibold font-['Inter'] leading-6">
                                    {menu.panel.title}
                                  </h3>
                                  <p className="mt-2 text-[#B8C5D6] text-xs font-normal font-['Inter'] leading-5">
                                    {menu.panel.description}
                                  </p>
                                  <div className="mt-4 flex flex-col gap-2.5">
                                    <Link
                                      href={menu.panel.primaryCta.href}
                                      onClick={onClose}
                                      className="group/cta h-11 rounded-md bg-gradient-to-r from-[#CFA04A] via-[#E4B95F] to-[#EBC77A] flex items-center justify-center gap-3 text-[#0F2B48] text-sm font-semibold font-['Inter'] hover:brightness-105 transition-all"
                                    >
                                      {menu.panel.primaryCta.label}
                                      <LuArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/cta:translate-x-1" />
                                    </Link>
                                    <Link
                                      href={menu.panel.secondaryCta.href}
                                      onClick={onClose}
                                      className="h-11 rounded-md border border-[#C0872B] flex items-center justify-center gap-2 text-[#E4B95F] text-sm font-medium font-['Inter'] hover:bg-[#C0872B]/15 transition-colors"
                                    >
                                      <PlayCircle className="w-4 h-4" />
                                      {menu.panel.secondaryCta.label}
                                    </Link>
                                  </div>
                                </div>
                              )}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Sticky footer actions */}
            <div className="shrink-0 border-t border-[#EAEEF4] px-4 sm:px-6 py-3 sm:py-4 flex items-center gap-3 bg-[#FFFFFF]">
              <a
                href="/sign-in"
                onClick={onClose}
                className="flex-1 h-12 rounded-full border border-[#EAEEF4] flex items-center justify-center text-[#12365E] text-sm font-medium font-['Inter'] hover:bg-[#EAEEF4]/50 transition-colors"
              >
                Sign in
              </a>
              <a
                href="/book-demo"
                onClick={onClose}
                className="flex-1 h-12 rounded-full bg-[#C0872B] border border-[#C0872B] flex items-center justify-center gap-2.5 hover:bg-[#A9761F] hover:border-[#A9761F] transition-colors"
              >
                <span className="text-[#FFFFFF] text-sm font-semibold font-['Inter'] leading-5">
                  Book demo
                </span>
                <LuArrowRight className="w-3.5 h-3.5 text-[#FFFFFF] stroke-[2.5]" />
              </a>
            </div>
          </motion.aside>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState<MenuLabel | null>(null);

  // Fixed-on-scroll shadow state (desktop + mobile)
  const [isScrolled, setIsScrolled] = useState(false);

  // Mobile drawer state
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileSection, setOpenMobileSection] = useState<MenuLabel | null>(
    null,
  );
  const [openMobileGroups, setOpenMobileGroups] = useState<Set<string>>(
    new Set(),
  );

  // Hover-intent timers so opening feels instant and closing doesn't flicker
  // when the pointer briefly crosses the small gap between the trigger and menu.
  const closeTimeoutRef = React.useRef<ReturnType<typeof setTimeout> | null>(
    null,
  );

  const clearCloseTimeout = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  };

  const openMenu = (item: MenuLabel) => {
    clearCloseTimeout();
    setActiveMenu(item);
  };

  const scheduleClose = () => {
    clearCloseTimeout();
    closeTimeoutRef.current = setTimeout(() => setActiveMenu(null), 80);
  };

  // Used by items without a dropdown (Pricing): hovering them closes any open menu
  const closeMenuNow = () => {
    clearCloseTimeout();
    setActiveMenu(null);
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Clear any pending timer on unmount
  useEffect(() => {
    return () => clearCloseTimeout();
  }, []);

  // Close the desktop mega menu on Escape
  useEffect(() => {
    if (!activeMenu) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveMenu(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeMenu]);

  // Lock body scroll while the mobile drawer is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      const original = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = original;
      };
    }
  }, [isMobileMenuOpen]);

  const toggleMobileSection = (item: MenuLabel) => {
    const willOpen = openMobileSection !== item;
    setOpenMobileSection(willOpen ? item : null);

    // Convenience: when a section opens, reveal its first group right away
    // so the user sees links immediately instead of a list of collapsed headings.
    if (willOpen) {
      const firstGroup = getMobileGroups(item, megaMenus[item])[0];
      if (firstGroup) {
        setOpenMobileGroups((prev) => new Set(prev).add(firstGroup.key));
      }
    }
  };

  const toggleMobileGroup = (key: string) => {
    setOpenMobileGroups((prev) => {
      const next = new Set(prev);
      if (next.has(key)) {
        next.delete(key);
      } else {
        next.add(key);
      }
      return next;
    });
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setOpenMobileSection(null);
    setOpenMobileGroups(new Set());
  };

  const currentMenu = activeMenu ? megaMenus[activeMenu] : undefined;

  // Close the mobile drawer on Escape, or when resizing up to desktop
  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMobileMenu();
    };
    const onResize = () => {
      if (window.innerWidth >= 1024) closeMobileMenu();
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 z-50 w-full bg-[#FFFFFF] transition-shadow duration-300 ${
          isScrolled ? "shadow-md" : "shadow-none"
        }`}
      >
        <div className="w-full max-w-[1440px] mx-auto relative overflow-visible flex flex-col items-center">
          {/* ============ DESKTOP TOP ROW (lg and up) ============ */}
          {/* Padding/gaps scale down below 1400px so 7 items + controls never overlap */}
          <div className="hidden lg:flex w-full h-24 items-center justify-between gap-2 px-5 xl:px-10 min-[1400px]:px-[110px] relative z-20 bg-[#FFFFFF]">
            {/* Brand Logo Image */}
            <Link href="/" className="flex items-center shrink-0">
              <div className="relative">
                <Image
                  src="/logo.png"
                  alt="Zoiko Suite Logo"
                  width={150}
                  height={40}
                  className="object-contain object-left w-[124px] xl:w-[150px] h-auto"
                  priority
                />
              </div>
            </Link>

            {/* Navigation Links */}
            <div className="flex items-center gap-0 xl:gap-2 min-[1400px]:gap-4 whitespace-nowrap">
              {navItems.map((item) => {
                const label = item.label;

                /* ---- Pricing: plain link, no chevron, no dropdown ---- */
                if (!isMenuLabel(label)) {
                  return (
                    <div
                      key={label}
                      className="flex flex-col justify-start items-start relative"
                      onMouseEnter={closeMenuNow}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setActiveMenu(null)}
                        className="min-h-11 px-1.5 xl:px-2 py-3.5 rounded-lg inline-flex justify-start items-center hover:bg-[#EAEEF4]/50 transition-colors duration-150"
                      >
                        <span className="text-center justify-center text-[#12365E] text-sm font-medium font-['Inter']">
                          {label}
                        </span>
                      </Link>
                    </div>
                  );
                }

                return (
                  <div
                    key={label}
                    className="flex flex-col justify-start items-start relative"
                    onMouseEnter={() => openMenu(label)}
                    onMouseLeave={scheduleClose}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setActiveMenu(null)}
                      className="min-h-11 px-1.5 xl:px-2 py-3.5 rounded-lg inline-flex justify-start items-center gap-1.5 hover:bg-[#EAEEF4]/50 transition-colors duration-150"
                    >
                      <span className="text-center justify-center text-[#12365E] text-sm font-medium font-['Inter']">
                        {label}
                      </span>
                      <div className="pb-px inline-flex flex-col justify-start items-center">
                        <LuChevronDown
                          className={`w-[9px] h-[9px] text-[#9AA6B5] transition-transform duration-150 ${
                            activeMenu === label ? "rotate-180" : ""
                          }`}
                        />
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>

            {/* Right Side Controls */}
            <div className="pl-2 xl:pl-4 flex items-center gap-1 xl:gap-2 shrink-0">
              {/* Search Icon Button */}
              <button
                suppressHydrationWarning
                aria-label="Search"
                className="w-11 h-11 px-1.5 py-px rounded-[10px] flex justify-center items-center hover:bg-[#EAEEF4]/50 transition-colors"
              >
                <LuSearch className="w-5 h-5 text-[#12365E]" />
              </button>

              {/* Sign in Link */}
              <a
                href="/sign-in"
                className="min-h-11 px-2 xl:px-3 py-2.5 flex justify-start items-center whitespace-nowrap text-[#9AA6B5] text-sm font-medium font-['Inter'] leading-6 hover:text-[#12365E] transition-colors"
              >
                Sign in
              </a>

              {/* Book Demo CTA Button */}
              <a
                href="/book-demo"
                className="min-h-12 px-3.5 py-3 bg-[#C0872B] rounded-[999px] border border-[#C0872B] flex justify-center items-center gap-2.5 whitespace-nowrap hover:bg-[#A9761F] hover:border-[#A9761F] transition-colors"
              >
                <span className="justify-center text-[#FFFFFF] text-sm font-semibold font-['Inter'] leading-5">
                  Book demo
                </span>
                <LuArrowRight className="w-3.5 h-3.5 text-[#FFFFFF] stroke-[2.5]" />
              </a>
            </div>
          </div>

          {/* ============ MOBILE TOP ROW (below lg) ============ */}
          <div className="flex lg:hidden w-full h-16 sm:h-20 items-center justify-between px-4 sm:px-6 relative z-20 bg-[#FFFFFF]">
            {/* Brand Logo Image */}
            <Link href="/" className="flex items-center">
              <div className="w-[120px] h-[48px] relative overflow-hidden">
                <Image
                  src="/logo.png"
                  alt="Zoiko Suite Logo"
                  fill
                  className="object-contain object-left"
                  priority
                />
              </div>
            </Link>

            {/* Right Side Controls (44px tap targets) */}
            <div className="flex items-center gap-1">
              <button
                suppressHydrationWarning
                className="w-11 h-11 flex justify-center items-center rounded-[10px] hover:bg-[#EAEEF4]/50 transition-colors"
                aria-label="Search"
              >
                <LuSearch className="w-5 h-5 text-[#12365E]" />
              </button>

              <button
                suppressHydrationWarning
                className="w-11 h-11 flex justify-center items-center rounded-[10px] hover:bg-[#EAEEF4]/50 transition-colors"
                aria-label="Open menu"
                aria-expanded={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <LuMenu className="w-6 h-6 text-[#12365E]" />
              </button>
            </div>
          </div>

          {/* ============ DESKTOP MEGA MENUS (lg and up) ============ */}
          <AnimatePresence>
            {currentMenu && (
              <motion.div
                key="mega-menu"
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.15, ease: "easeOut" }}
                onMouseEnter={() => activeMenu && openMenu(activeMenu)}
                onMouseLeave={scheduleClose}
                className="hidden lg:block absolute top-full inset-x-0 mx-auto w-full max-w-6xl px-4 xl:px-0 z-10"
              >
                <MegaMenuCard
                  menu={currentMenu}
                  onNavigate={() => setActiveMenu(null)}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

      {/* Spacer so fixed nav never overlaps page content. Matches mobile (h-16/h-20) and desktop (h-24) nav heights. */}
      <div className="h-16 sm:h-20 lg:h-24" aria-hidden="true" />

      {/* ============ MOBILE DRAWER MENU (below lg) ============ */}
      <MobileDrawer
        isOpen={isMobileMenuOpen}
        onClose={closeMobileMenu}
        openSection={openMobileSection}
        onToggleSection={toggleMobileSection}
        openGroups={openMobileGroups}
        onToggleGroup={toggleMobileGroup}
      />
    </>
  );
}
