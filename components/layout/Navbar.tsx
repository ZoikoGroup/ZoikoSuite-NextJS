"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  LuChevronDown,
  LuSearch,
  LuArrowRight,
  LuChevronRight,
  LuCompass,
  LuBoxes,
  LuLandmark,
  LuLayers,
  LuShieldCheck,
  LuUser,
  LuTarget,
  LuTrendingUp,
  LuBuilding2,
  LuPuzzle,
  LuGraduationCap,
  LuRefreshCw,
  LuUsers,
  LuNetwork,
  LuBriefcase,
  LuBookOpen,
  LuCpu,
  LuUserCheck,
  LuClipboardCheck,
  LuScale,
  LuGlobe,
  LuMenu,
  LuX,
} from "react-icons/lu";
import { LucideBarChart2 } from "lucide-react";

const navItems = [
  "Platform",
  "Solutions",
  "Industries",
  "Trust",
  "Resources",
  "Company",
] as const;

/* --- Platform Data --- */
const discoverLinks = [
  { label: "Platform Overview", href: "/platform-overview" },
  { label: "How ZoikoSuite Works", href: "/how-it-works" },
  {
    label: "Governed Business Operations Intelligence",
    href: "/governed-business-operations",
  },
  { label: "Why ZoikoSuite Is Not an ERP", href: "/not-an-erp" },
  { label: "Platform Tour", href: "/platform-tour" },
  { label: "Product Roadmap", href: "/product-roadmap" },
  { label: "Deployment Options", href: "/deployment-options" },
] as const;

const coreModulesLinks = [
  {
    label: "Accounting & General Ledger",
    href: "/modules/accounting-general-ledger",
  },
  { label: "Accounts Payable", href: "/modules/accounts-payable" },
  { label: "Accounts Receivable", href: "/modules/accounts-receivable" },
  { label: "Treasury & Cash Position", href: "/modules/treasury" },
  { label: "Payroll", href: "/modules/payroll" },
  { label: "Human Resources", href: "/modules/human-resources" },
  { label: "Tax Management", href: "/modules/tax-management" },
  { label: "Legal & Contracts", href: "/modules/legal-contracts" },
  { label: "Compliance & Obligations", href: "/modules/compliance" },
  {
    label: "Procurement & Commercial Operations",
    href: "/modules/procurement",
  },
] as const;

const governanceLinks = [
  { label: "Governance Control Plane", href: "/governance/control-plane" },
  { label: "Policy Management", href: "/governance/policy-management" },
  {
    label: "Jurisdiction Intelligence",
    href: "/governance/jurisdiction-intelligence",
  },
  { label: "Workflow & Approvals", href: "/governance/workflow-approvals" },
  { label: "Delegated Authority", href: "/governance/delegated-authority" },
  { label: "Segregation of Duties", href: "/governance/segregation-of-duties" },
  { label: "Evidence Management", href: "/governance/evidence-management" },
  { label: "Audit Readiness", href: "/governance/audit-readiness" },
  { label: "Governed AI", href: "/governance/governed-ai" },
  { label: "Analytics & Reporting", href: "/governance/analytics-reporting" },
] as const;

const foundationLinks = [
  { label: "Platform Architecture", href: "/foundation/architecture" },
  { label: "Multi-Entity Operations", href: "/foundation/multi-entity" },
  {
    label: "Multi-Jurisdiction Operations",
    href: "/foundation/multi-jurisdiction",
  },
  { label: "Data Residency", href: "/foundation/data-residency" },
  { label: "API Platform", href: "/foundation/api-platform" },
  { label: "Integrations", href: "/foundation/integrations" },
  { label: "Developer Platform", href: "/foundation/developer-platform" },
  { label: "Migration & Shadow Mode", href: "/foundation/migration" },
  { label: "Evidence Architecture", href: "/evidence-architecture" },
  {
    label: "Data and Event Architecture",
    href: "/foundation/data-event-architecture",
  },
] as const;

/* --- Solutions Data --- */
const leadershipLinks = [
  { label: "For CFOs", href: "/cfos" },
  { label: "For General Counsel", href: "/general-counsel" },
  { label: "For CHROs", href: "/solutions/chros" },
  { label: "For CIOs", href: "/solutions/cios" },
  { label: "For COOs", href: "/solutions/coos" },
  { label: "For Controllers", href: "/solutions/controllers" },
  { label: "For Tax Leaders", href: "/solutions/tax-leaders" },
  { label: "For Compliance Leaders", href: "/solutions/compliance-leaders" },
  { label: "For Audit Committees", href: "/solutions/audit-committees" },
  { label: "For Boards of Directors", href: "/solutions/boards-of-directors" },
] as const;

const challengesLinks = [
  { label: "Financial Governance", href: "/solutions/financial-governance" },
  {
    label: "Global Payroll Governance",
    href: "/solutions/global-payroll-governance",
  },
  {
    label: "Cross-Border Compliance",
    href: "/solutions/cross-border-compliance",
  },
  { label: "Contract Governance", href: "/solutions/contract-governance" },
  { label: "Audit Readiness", href: "/solutions/audit-readiness" },
  { label: "Entity Management", href: "/solutions/entity-management" },
  { label: "Regulatory Reporting", href: "/solutions/regulatory-reporting" },
  { label: "Workforce Compliance", href: "/solutions/workforce-compliance" },
  { label: "Revenue Integrity", href: "/solutions/revenue-integrity" },
  { label: "Operational Risk Management", href: "/solutions/operational-risk" },
] as const;

const modernizeLinks = [
  {
    label: "Replace Fragmented ERP and HCM Stacks",
    href: "/solutions/replace-erp-hcm",
  },
  {
    label: "Consolidate Business Systems",
    href: "/solutions/consolidate-systems",
  },
  {
    label: "Move From Manual to Governed Operations",
    href: "/governed-business-operations",
  },
  {
    label: "Prepare for International Expansion",
    href: "/expansion",
  },
  {
    label: "Strengthen Internal Controls",
    href: "/solutions/internal-controls",
  },
  {
    label: "Modernize Finance Operations",
    href: "/modernize-operations",
  },
  {
    label: "Transform Payroll and HR",
    href: "/solutions/transform-payroll-hr",
  },
  {
    label: "Establish Continuous Audit Readiness",
    href: "/solutions/continuous-audit",
  },
  { label: "Govern AI-Assisted Operations", href: "/solutions/govern-ai" },
] as const;

const organizationLinks = [
  { label: "Growing Companies", href: "/solutions/growing-companies" },
  { label: "Mid-Market Enterprises", href: "/solutions/mid-market" },
  { label: "Global Enterprises", href: "/solutions/global-enterprises" },
  { label: "Multi-Entity Groups", href: "/solutions/multi-entity-groups" },
  {
    label: "Regulated Organizations",
    href: "/solutions/regulated-organizations",
  },
  { label: "Public Companies", href: "/solutions/public-companies" },
  { label: "Public-Sector Organizations", href: "/solutions/public-sector" },
  { label: "Nonprofit Organizations", href: "/solutions/nonprofit" },
  {
    label: "Professional Partnerships",
    href: "/solutions/professional-partnerships",
  },
] as const;

/* --- Industries Data --- */
const regulatedIndustriesLinks = [
  { label: "Financial Services", href: "/financial-services" },
  { label: "Banking", href: "/banking" },
  { label: "Fintech", href: "/industries/fintech" },
  { label: "Insurance", href: "/insurance" },
  { label: "Telecommunications and MVNOs", href: "/telecom-mvno" },
  { label: "Healthcare", href: "/healthcare" },
  { label: "Life Sciences", href: "/industries/life-sciences" },
  { label: "Government and Public Sector", href: "/government-public-sector" },
] as const;

const complexOperationsLinks = [
  { label: "Manufacturing", href: "/manufacturing" },
  { label: "Supply Chain and Logistics", href: "/industries/supply-chain" },
  { label: "Energy and Utilities", href: "/energy-utilities" },
  {
    label: "Construction and Infrastructure",
    href: "/industries/construction",
  },
  { label: "Real Estate", href: "/industries/real-estate" },
  { label: "Retail and Commerce", href: "/retail-commerce" },
  { label: "Transportation", href: "/industries/transportation" },
  { label: "Hospitality", href: "/industries/hospitality" },
] as const;

const knowledgeGrowthLinks = [
  { label: "Technology and SaaS", href: "/industries/technology-saas" },
  { label: "Professional Services", href: "/industries/professional-services" },
  { label: "Legal Services", href: "/industries/legal-services" },
  { label: "Accounting and Advisory", href: "/industries/accounting-advisory" },
  { label: "Education", href: "/industries/education" },
  { label: "Media and Communications", href: "/industries/media" },
  { label: "Nonprofit Organizations", href: "/industries/nonprofit-orgs" },
  {
    label: "Holding Companies and Family Offices",
    href: "/industries/holding-companies",
  },
] as const;

/* --- Trust Data --- */
const securityArchitectureLinks = [
  { label: "Security Overview", href: "/security-overview" },
  { label: "Zero-Trust Architecture", href: "/trust/zero-trust" },
  { label: "Identity and Access Management", href: "/trust/iam" },
  { label: "Encryption and Key Management", href: "/trust/encryption" },
  { label: "Application and API Security", href: "/trust/app-api-security" },
  { label: "Infrastructure Security", href: "/trust/infrastructure-security" },
  {
    label: "Vulnerability Management",
    href: "/trust/vulnerability-management",
  },
  { label: "Secure Software Development", href: "/trust/secure-sdlc" },
  { label: "Incident Response", href: "/trust/incident-response" },
  { label: "Business Continuity", href: "/trust/business-continuity" },
] as const;

const complianceFrameworkLinks = [
  { label: "Compliance Overview", href: "/compliance-overview" },
  { label: "SOC 2 Readiness", href: "/trust/soc-2" },
  { label: "ISO 27001 Alignment", href: "/trust/iso-27001" },
  { label: "GDPR Controls", href: "/trust/gdpr" },
  { label: "CCPA Controls", href: "/trust/ccpa" },
  { label: "Data Processing Agreement", href: "/trust/dpa" },
  { label: "Subprocessor List", href: "/trust/subprocessors" },
  { label: "Records Retention", href: "/trust/records-retention" },
  { label: "Responsible AI", href: "/trust/responsible-ai" },
  { label: "Accessibility", href: "/trust/accessibility" },
] as const;

const auditAssuranceLinks = [
  { label: "Evidence Architecture", href: "/trust/evidence-architecture" },
  { label: "Immutable Audit Trails", href: "/trust/audit-trails" },
  { label: "Policy Decision Logging", href: "/trust/policy-logging" },
  { label: "Evidence Manifests", href: "/trust/evidence-manifests" },
  { label: "Document Integrity", href: "/trust/document-integrity" },
  { label: "Audit Readiness", href: "/trust/audit-readiness" },
  { label: "Internal Controls", href: "/trust/internal-controls" },
  { label: "Segregation of Duties", href: "/trust/segregation-of-duties" },
  { label: "Compliance Reporting", href: "/trust/compliance-reporting" },
  { label: "Trust Center", href: "/trust/center" },
] as const;

const dataSovereigntyLinks = [
  { label: "Data Residency", href: "/data-residency" },
  { label: "Regional Hosting", href: "/trust/regional-hosting" },
  { label: "Dedicated Private Cloud", href: "/trust/private-cloud" },
  { label: "Enterprise Single-Tenant", href: "/trust/single-tenant" },
  { label: "Sovereign Deployment", href: "/trust/sovereign-deployment" },
  { label: "On-Premise Deployment", href: "/trust/on-premise" },
  { label: "BYOK and HYOK", href: "/trust/byok-hyok" },
  { label: "Customer-Controlled Keys", href: "/trust/customer-keys" },
  { label: "Cross-Region Recovery", href: "/trust/cross-region-recovery" },
  { label: "Deployment Architecture", href: "/trust/deployment-architecture" },
] as const;

/* --- Resources Data --- */
const learnLinks = [
  { label: "Resource Center", href: "/resources/center" },
  { label: "Platform Tour", href: "/resources/platform-tour" },
  { label: "Product Demonstrations", href: "/resources/demos" },
  { label: "Articles and Insights", href: "/resources/insights" },
  { label: "Guides", href: "/resources/guides" },
  { label: "Webinars", href: "/resources/webinars" },
  { label: "Events", href: "/resources/events" },
  { label: "Frequently Asked Questions", href: "/resources/faq" },
] as const;

const execResourcesLinks = [
  { label: "Executive Briefs", href: "/resources/executive-briefs" },
  { label: "CFO Resources", href: "/resources/cfo" },
  { label: "General Counsel Resources", href: "/resources/general-counsel" },
  { label: "CHRO Resources", href: "/resources/chro" },
  { label: "CIO Resources", href: "/resources/cio" },
  {
    label: "Board and Audit Committee Resources",
    href: "/resources/board-audit",
  },
  { label: "Business Case Templates", href: "/resources/business-case" },
  { label: "ROI and Value Assessment", href: "/resources/roi-assessment" },
] as const;

const techArchitectureLinks = [
  { label: "Architecture Library", href: "/resources/architecture-library" },
  { label: "Architecture Series", href: "/resources/architecture-series" },
  { label: "Security White Paper", href: "/resources/security-whitepaper" },
  {
    label: "Data Architecture Brief",
    href: "/resources/data-architecture-brief",
  },
  { label: "Integration Guide", href: "/resources/integration-guide" },
  { label: "Migration Guide", href: "/resources/migration-guide" },
  { label: "API Documentation", href: "/resources/api-docs" },
  { label: "Developer Documentation", href: "/resources/developer-docs" },
] as const;

const customerResourcesLinks = [
  { label: "Documentation", href: "/support/documentation" },
  { label: "Knowledge Base", href: "/support/knowledge-base" },
  { label: "Training Academy", href: "/support/academy" },
  { label: "Certification", href: "/support/certification" },
  { label: "Support Center", href: "/support/center" },
  { label: "System Status", href: "/support/status" },
  { label: "Release Notes", href: "/support/release-notes" },
  { label: "Customer Community", href: "/support/community" },
] as const;

/* --- Company Data --- */
const aboutLinks = [
  { label: "About ZoikoSuite", href: "/company/about" },
  { label: "Our Category", href: "/company/category" },
  { label: "Our Mission", href: "/company/mission" },
  { label: "Founder's Vision", href: "/company/vision" },
  { label: "Leadership", href: "/company/leadership" },
  { label: "Corporate Governance", href: "/company/corporate-governance" },
  { label: "Locations", href: "/company/locations" },
  { label: "Contact", href: "/company/contact" },
] as const;

const ecosystemLinks = [
  { label: "Partners", href: "/partners" },
  { label: "Technology Partners", href: "/partners/technology" },
  { label: "Advisory Partners", href: "/partners/advisory" },
  { label: "Implementation Partners", href: "/partners/implementation" },
  { label: "Developer Ecosystem", href: "/partners/developer" },
  { label: "Partner Program", href: "/partners/program" },
  { label: "Become a Partner", href: "/partners/become-a-partner" },
] as const;

const companyLinks = [
  { label: "Careers", href: "/company/careers" },
  { label: "Newsroom", href: "/company/newsroom" },
  { label: "Press and Media", href: "/company/press" },
  { label: "Events", href: "/company/events" },
  { label: "Investor Information", href: "/company/investors" },
  { label: "Zoiko Tech", href: "/company/zoiko-tech" },
  { label: "Zoiko Group", href: "/company/zoiko-group" },
  { label: "Contact Corporate Affairs", href: "/company/corporate-affairs" },
] as const;

/* --- Mobile menu grouping (reuses the exact same link data as desktop) --- */
type MobileGroup = {
  title: string;
  icon: React.ElementType;
  links: readonly { label: string; href: string }[];
};

const mobileMenuConfig: Record<(typeof navItems)[number], MobileGroup[]> = {
  Platform: [
    { title: "Discover ZoikoSuite", icon: LuCompass, links: discoverLinks },
    { title: "Core Modules", icon: LuBoxes, links: coreModulesLinks },
    { title: "Governance Platform", icon: LuLandmark, links: governanceLinks },
    { title: "Platform Foundation", icon: LuLayers, links: foundationLinks },
  ],
  Solutions: [
    { title: "For Leadership Teams", icon: LuUser, links: leadershipLinks },
    {
      title: "Solve Critical Challenges",
      icon: LuTarget,
      links: challengesLinks,
    },
    {
      title: "Modernize Operations",
      icon: LuTrendingUp,
      links: modernizeLinks,
    },
    {
      title: "Organization Types",
      icon: LuBuilding2,
      links: organizationLinks,
    },
  ],
  Industries: [
    {
      title: "Regulated Industries",
      icon: LuShieldCheck,
      links: regulatedIndustriesLinks,
    },
    {
      title: "Complex Operations",
      icon: LuRefreshCw,
      links: complexOperationsLinks,
    },
    {
      title: "Knowledge and Growth Sectors",
      icon: LuGraduationCap,
      links: knowledgeGrowthLinks,
    },
  ],
  Trust: [
    {
      title: "Security Architecture",
      icon: LuShieldCheck,
      links: securityArchitectureLinks,
    },
    {
      title: "Compliance Framework",
      icon: LuClipboardCheck,
      links: complianceFrameworkLinks,
    },
    { title: "Audit and Assurance", icon: LuScale, links: auditAssuranceLinks },
    { title: "Data Sovereignty", icon: LuGlobe, links: dataSovereigntyLinks },
  ],
  Resources: [
    { title: "Learn", icon: LuGraduationCap, links: learnLinks },
    { title: "Executive Resources", icon: LuUser, links: execResourcesLinks },
    {
      title: "Architecture & Technical",
      icon: LuCpu,
      links: techArchitectureLinks,
    },
    {
      title: "Customer Resources",
      icon: LuUserCheck,
      links: customerResourcesLinks,
    },
  ],
  Company: [
    { title: "About", icon: LuUsers, links: aboutLinks },
    { title: "Ecosystem", icon: LuNetwork, links: ecosystemLinks },
    { title: "Company", icon: LuBriefcase, links: companyLinks },
  ],
};

const megaMenuVariants = {
  hidden: { opacity: 0, y: 6, display: "none" },
  visible: {
    opacity: 1,
    y: 0,
    display: "block",
    transition: { duration: 0.14, ease: [0.16, 1, 0.3, 1] },
  },
  exit: {
    opacity: 0,
    y: 6,
    transitionEnd: { display: "none" },
    transition: { duration: 0.1, ease: "easeIn" },
  },
} as const;

const mobilePanelVariants = {
  hidden: { x: "100%" },
  visible: {
    x: 0,
    transition: { duration: 0.3, ease: "easeOut" },
  },
  exit: {
    x: "100%",
    transition: { duration: 0.25, ease: "easeIn" },
  },
} as const;

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState<
    | "Platform"
    | "Solutions"
    | "Industries"
    | "Trust"
    | "Resources"
    | "Company"
    | null
  >(null);

  // Fixed-on-scroll shadow state (desktop + mobile)
  const [isScrolled, setIsScrolled] = useState(false);

  // Mobile drawer state
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileSection, setOpenMobileSection] = useState<
    (typeof navItems)[number] | null
  >(null);
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

  const openMenu = (item: (typeof navItems)[number]) => {
    clearCloseTimeout();
    setActiveMenu(item);
  };

  const scheduleClose = () => {
    clearCloseTimeout();
    closeTimeoutRef.current = setTimeout(() => setActiveMenu(null), 80);
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  const toggleMobileSection = (item: (typeof navItems)[number]) => {
    setOpenMobileSection((prev) => (prev === item ? null : item));
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

  return (
    <>
      <nav
        className={`fixed top-0 left-0 z-50 w-full bg-[#FFFFFF] transition-shadow duration-300 ${
          isScrolled ? "shadow-md" : "shadow-none"
        }`}
      >
        <div className="w-full max-w-[1440px] mx-auto relative overflow-visible flex flex-col items-center">
          {/* ============ DESKTOP TOP ROW (lg and up) — unchanged ============ */}
          <div className="hidden lg:flex w-full h-24 items-center justify-between px-[110px] relative z-20 bg-[#FFFFFF]">
            {/* Brand Logo Image */}
            <a href="/" className="flex items-center">
              <div className="relative">
                <Image
                  src="/logo.png"
                  alt="Zoiko Suite Logo"
                  width={150}
                  height={40}
                  className="object-contain object-left"
                  priority
                />
              </div>
            </a>

            {/* Navigation Links */}
            <div className="flex items-center gap-4">
              {navItems.map((item) => (
                <div
                  key={item}
                  className="flex flex-col justify-start items-start relative"
                  onMouseEnter={() => openMenu(item)}
                  onMouseLeave={scheduleClose}
                >
                  <a
                    href=""
                    className="min-h-11 px-2 py-3.5 rounded-lg inline-flex justify-start items-center gap-1.5 hover:bg-[#EAEEF4]/50 transition-colors duration-150"
                  >
                    <span className="text-center justify-center text-[#12365E] text-sm font-medium font-['Inter']">
                      {item}
                    </span>
                    <div className="pb-px inline-flex flex-col justify-start items-center">
                      <LuChevronDown
                        className={`w-[9px] h-[9px] text-[#9AA6B5] transition-transform duration-150 ${
                          activeMenu === item ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                  </a>
                </div>
              ))}
            </div>

            {/* Right Side Controls */}
            <div className="pl-4 flex items-center gap-2">
              {/* Search Icon Button */}
              <button className="w-11 h-11 px-1.5 py-px rounded-[10px] flex justify-center items-center hover:bg-[#EAEEF4]/50 transition-colors">
                <LuSearch className="w-5 h-5 text-[#12365E]" />
              </button>

              {/* Sign in Link */}
              <a
                href=""
                className="min-h-11 px-3 py-2.5 flex justify-start items-center text-[#9AA6B5] text-sm font-medium font-['Inter'] leading-6 hover:text-[#12365E] transition-colors"
              >
                Sign in
              </a>

              {/* Book Demo CTA Button */}
              <a
                href=""
                className="min-h-12 px-3.5 py-3 bg-[#C0872B] rounded-[999px] border border-[#C0872B] flex justify-center items-center gap-2.5 hover:bg-[#A9761F] hover:border-[#A9761F] transition-colors"
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
            <a href="/" className="flex items-center">
              <div className="w-[120px] h-[48px] relative overflow-hidden">
                <Image
                  src="/logo.png"
                  alt="Zoiko Suite Logo"
                  fill
                  className="object-contain object-left"
                  priority
                />
              </div>
            </a>

            {/* Right Side Controls */}
            <div className="flex items-center gap-1">
              <button
                className="w-10 h-10 flex justify-center items-center rounded-[10px] hover:bg-[#EAEEF4]/50 transition-colors"
                aria-label="Search"
              >
                <LuSearch className="w-5 h-5 text-[#12365E]" />
              </button>

              <button
                className="w-10 h-10 flex justify-center items-center rounded-[10px] hover:bg-[#EAEEF4]/50 transition-colors"
                aria-label="Open menu"
                aria-expanded={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <LuMenu className="w-6 h-6 text-[#12365E]" />
              </button>
            </div>
          </div>
        </div>

        {/* ============ DESKTOP MEGA MENUS (lg and up) — unchanged ============ */}
        <div className="hidden lg:block">
          <AnimatePresence>
            {/* PLATFORM MEGA MENU */}
            {activeMenu === "Platform" && (
              <motion.div
                key="platform-menu"
                className="absolute top-24 left-1/2 -translate-x-1/2 w-[calc(100%-6rem)] max-w-6xl bg-[#FFFFFF] border border-[#EAEEF4] shadow-2xl rounded-xl z-50 px-8 py-5 max-h-[calc(100vh-8rem)]"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={megaMenuVariants}
                onMouseEnter={() => {
                  document.body.style.overflowY = "scroll";
                  document.body.style.scrollbarGutter = "stable";
                  openMenu("Platform");
                }}
                onMouseLeave={() => {
                  document.body.style.overflowY = "";
                  document.body.style.scrollbarGutter = "";
                  scheduleClose();
                }}
                onWheel={(e) => {
                  // Stops background page scrolling while allowing this menu to scroll internally if needed
                  e.stopPropagation();
                }}
                onTouchMove={(e) => {
                  e.stopPropagation();
                }}
              >
                <div className="max-w-[1220px] mx-auto flex flex-col gap-4">
                  {/* Top Announcement Banner */}
                  <div className="flex flex-col items-center justify-center text-center gap-2">
                    <p className="text-[#12365E] text-xs font-bold font-['Inter'] max-w-[1100px] leading-snug">
                      ZoikoSuite is a governed business operations platform.
                      Built on a unified data and controls foundation, <br />
                      it connects core business modules with a governance
                      control plane so every operation is policy-aligned,
                      auditable, and AI-ready.
                    </p>

                    {/* Yellow Feature Box */}
                    <div className="w-full bg-[#FDF6EA] border border-[#EBD9B6] rounded-xl px-4 py-3 flex items-center justify-between shadow-sm">
                      <div className="flex items-center gap-4">
                        <div className="w-[90px] h-[70px] relative flex-shrink-0">
                          <img
                            src="/navbar/shield.png"
                            alt="Shield Icon"
                            className="w-full h-full object-contain"
                          />
                        </div>

                        <span className="text-[#12365E] text-base font-bold font-['Inter'] text-left leading-snug">
                          Business operations must execute
                          <br />
                          inside governance.
                        </span>
                      </div>

                      <a
                        href=""
                        className="bg-[#C0872B] hover:bg-[#A9761F] text-[#FFFFFF] px-4 py-2 rounded-lg text-xs font-semibold font-['Inter'] flex items-center gap-2 transition-colors flex-shrink-0"
                      >
                        Read the Category Brief
                        <LuArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>

                  {/* 4 Main Link Columns */}
                  <div className="grid grid-cols-4 gap-4 border-b border-[#EAEEF4] pb-4">
                    {/* Column 1 */}
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-2 pb-1.5 border-b-2 border-[#C0872B]">
                        <div className="w-9.5 h-9.5 bg-[#EAEEF4] rounded-lg flex items-center justify-center p-1.5 flex-shrink-0">
                          <LuCompass className="w-4 h-4 text-[#12365E]" />
                        </div>

                        <h3 className="text-[#12365E] text-sm font-bold font-['Inter'] leading-tight">
                          Discover ZoikoSuite
                        </h3>
                      </div>

                      <div className="flex flex-col gap-1">
                        {discoverLinks.map((item) => (
                          <a
                            key={item.label}
                            href={item.href}
                            className="text-[#5A6675] hover:text-[#12365E] text-sm font-medium font-['Inter'] flex items-center justify-between group transition-colors leading-tight py-0.5"
                          >
                            <span>{item.label}</span>
                            <LuChevronRight className="w-3 h-3 text-[#9AA6B5] flex-shrink-0 ml-1 group-hover:translate-x-0.5 transition-transform" />
                          </a>
                        ))}
                      </div>
                    </div>

                    {/* Column 2 */}
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-2 pb-1.5 border-b-2 border-[#C0872B]">
                        <div className="w-9.5 h-9.5 bg-[#FDF6EA] rounded-lg flex items-center justify-center p-1.5 flex-shrink-0">
                          <LuBoxes className="w-4 h-4 text-[#C0872B]" />
                        </div>

                        <h3 className="text-[#12365E] text-sm font-bold font-['Inter'] leading-tight">
                          Core Modules
                        </h3>
                      </div>

                      <div className="flex flex-col gap-1">
                        {coreModulesLinks.map((item) => (
                          <a
                            key={item.label}
                            href={item.href}
                            className="text-[#5A6675] hover:text-[#12365E] text-sm font-medium font-['Inter'] flex items-center justify-between group transition-colors leading-tight py-0.5"
                          >
                            <span>{item.label}</span>
                            <LuChevronRight className="w-3 h-3 text-[#9AA6B5] flex-shrink-0 ml-1 group-hover:translate-x-0.5 transition-transform" />
                          </a>
                        ))}
                      </div>
                    </div>

                    {/* Column 3 */}
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-2 pb-1.5 border-b-2 border-[#C0872B]">
                        <div className="w-9.5 h-9.5 bg-[#EAEEF4] rounded-lg flex items-center justify-center p-1.5 flex-shrink-0">
                          <LuLandmark className="w-4 h-4 text-[#12365E]" />
                        </div>

                        <h3 className="text-[#12365E] text-sm font-bold font-['Inter'] leading-tight">
                          Governance Platform
                        </h3>
                      </div>

                      <div className="flex flex-col gap-1">
                        {governanceLinks.map((item) => (
                          <a
                            key={item.label}
                            href={item.href}
                            className="text-[#5A6675] hover:text-[#12365E] text-sm font-medium font-['Inter'] flex items-center justify-between group transition-colors leading-tight py-0.5"
                          >
                            <span>{item.label}</span>
                            <LuChevronRight className="w-3 h-3 text-[#9AA6B5] flex-shrink-0 ml-1 group-hover:translate-x-0.5 transition-transform" />
                          </a>
                        ))}
                      </div>
                    </div>

                    {/* Column 4 */}
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-2 pb-1.5 border-b-2 border-[#C0872B]">
                        <div className="w-9.5 h-9.5 bg-[#EAEEF4] rounded-lg flex items-center justify-center p-1.5 flex-shrink-0">
                          <LuLayers className="w-4 h-4 text-[#12365E]" />
                        </div>

                        <h3 className="text-[#12365E] text-sm font-bold font-['Inter'] leading-tight">
                          Platform Foundation
                        </h3>
                      </div>

                      <div className="flex flex-col gap-1">
                        {foundationLinks.map((item) => (
                          <a
                            key={item.label}
                            href={item.href}
                            className="text-[#5A6675] hover:text-[#12365E] text-sm font-medium font-['Inter'] flex items-center justify-between group transition-colors leading-tight py-0.5"
                          >
                            <span>{item.label}</span>
                            <LuChevronRight className="w-3 h-3 text-[#9AA6B5] flex-shrink-0 ml-1 group-hover:translate-x-0.5 transition-transform" />
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Bottom Cards */}
                  <div className="grid grid-cols-2 gap-4">
                    {/* Left Card */}
                    <div className="border border-[#EAEEF4] rounded-xl p-3 flex items-center gap-3 bg-[#FFFFFF] hover:border-[#9AA6B5] transition-colors">
                      <div className="w-9.5 h-9.5 rounded-full bg-[#0F2C57] flex items-center justify-center flex-shrink-0">
                        <LuShieldCheck className="w-4.5 h-4.5 text-[#C0872B]" />
                      </div>

                      <div className="flex flex-col gap-0.5">
                        <h4 className="text-[#12365E] text-xs font-bold font-['Inter']">
                          Governance by design. Built for enterprise scale.
                        </h4>

                        <p className="text-[#5A6675] text-[11px] font-normal font-['Inter'] leading-tight">
                          Unify operations, enforce policy, and drive
                          confidence.
                        </p>
                      </div>
                    </div>

                    {/* Right Card */}
                    <div className="border border-[#EAEEF4] rounded-xl p-3 flex items-center justify-between bg-[#FFFFFF] hover:border-[#9AA6B5] transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="w-9.5 h-9.5 rounded-full bg-[#0F2C57] flex items-center justify-center flex-shrink-0">
                          <LucideBarChart2 className="w-4.5 h-4.5 text-[#C0872B]" />
                        </div>

                        <div className="flex flex-col gap-0.5">
                          <h4 className="text-[#12365E] text-xs font-bold font-['Inter']">
                            Explore how ZoikoSuite works for you.
                          </h4>

                          <p className="text-[#5A6675] text-[11px] font-normal font-['Inter'] leading-tight">
                            See tailored outcomes across your business
                            functions.
                          </p>
                        </div>
                      </div>

                      <a
                        href=""
                        className="border border-[#C0872B] text-[#C0872B] hover:bg-[#FDF6EA] px-3 py-1.5 rounded-lg text-[11px] font-semibold font-['Inter'] flex-shrink-0 transition-colors"
                      >
                        Book Enterprise Demo
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* SOLUTIONS MEGA MENU */}
            {activeMenu === "Solutions" && (
              <motion.div
                key="solutions-menu"
                className="absolute top-24 left-1/2 -translate-x-1/2 w-[calc(100%-6rem)] max-w-6xl bg-[#FFFFFF] border border-[#EAEEF4] shadow-2xl rounded-xl z-50 px-8 py-4.5 overflow-hidden"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={megaMenuVariants}
                onMouseEnter={() => {
                  // Force reserve scrollbar gutter to prevent layout/width shifts
                  document.body.style.overflowY = "scroll";
                  document.body.style.scrollbarGutter = "stable";
                  openMenu("Solutions");
                }}
                onMouseLeave={() => {
                  document.body.style.overflowY = "";
                  document.body.style.scrollbarGutter = "";
                  scheduleClose();
                }}
                onWheel={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                }}
                onTouchMove={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                }}
              >
                <div className="max-w-[1220px] mx-auto flex flex-col gap-4.5">
                  {/* Header Section */}
                  <div className="flex items-center gap-3 border-b border-[#EAEEF4] pb-3.5">
                    <div className="w-15 h-15 rounded-full bg-[#0F2C57] flex items-center justify-center flex-shrink-0">
                      <LuPuzzle className="w-6.5 h-6.5 text-[#C0872B]" />
                    </div>

                    <div className="flex flex-col gap-0.5">
                      <h2 className="text-[#12365E] text-2xl font-bold font-['Inter']">
                        Solutions
                      </h2>
                      <p className="text-[#5A6675] text-sm font-normal font-['Inter'] leading-snug">
                        Enable buyers to enter through executive responsibility,
                        business challenge, organization type, or transformation
                        objective.
                      </p>
                    </div>
                  </div>

                  {/* 4 Link Columns */}
                  <div className="grid grid-cols-4 gap-4.5">
                    {/* Column 1: For Leadership Teams */}
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-2 pb-1.5 border-b-2 border-[#C0872B]">
                        <div className="w-9.5 h-9.5 rounded-full border border-[#EBDCC0] flex items-center justify-center flex-shrink-0">
                          <LuUser className="w-4 h-4 text-[#12365E]" />
                        </div>
                        <h3 className="text-[#12365E] text-sm font-bold font-['Inter'] leading-tight">
                          For Leadership Teams
                        </h3>
                      </div>

                      <div className="flex flex-col gap-1">
                        {leadershipLinks.map((item) => (
                          <a
                            key={item.label}
                            href={item.href}
                            className="text-[#12365E] hover:text-[#C0872B] text-sm font-normal font-['Inter'] flex items-center justify-between group transition-colors leading-tight py-0.5"
                          >
                            <span>{item.label}</span>
                            <LuChevronRight className="w-3 h-3 text-[#9AA6B5] flex-shrink-0 ml-1 group-hover:translate-x-0.5 transition-transform" />
                          </a>
                        ))}
                      </div>
                    </div>

                    {/* Column 2: Solve Critical Challenges */}
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-2 pb-1.5 border-b-2 border-[#C0872B]">
                        <div className="w-9.5 h-9.5 rounded-full border border-[#EBDCC0] flex items-center justify-center flex-shrink-0">
                          <LuTarget className="w-4 h-4 text-[#12365E]" />
                        </div>
                        <h3 className="text-[#12365E] text-sm font-bold font-['Inter'] leading-tight">
                          Solve Critical Challenges
                        </h3>
                      </div>

                      <div className="flex flex-col gap-1">
                        {challengesLinks.map((item) => (
                          <a
                            key={item.label}
                            href={item.href}
                            className="text-[#12365E] hover:text-[#C0872B] text-sm font-normal font-['Inter'] flex items-center justify-between group transition-colors leading-tight py-0.5"
                          >
                            <span>{item.label}</span>
                            <LuChevronRight className="w-3 h-3 text-[#9AA6B5] flex-shrink-0 ml-1 group-hover:translate-x-0.5 transition-transform" />
                          </a>
                        ))}
                      </div>
                    </div>

                    {/* Column 3: Modernize Operations */}
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-2 pb-1.5 border-b-2 border-[#C0872B]">
                        <div className="w-9.5 h-9.5 rounded-full border border-[#EBDCC0] flex items-center justify-center flex-shrink-0">
                          <LuTrendingUp className="w-4 h-4 text-[#12365E]" />
                        </div>
                        <h3 className="text-[#12365E] text-sm font-bold font-['Inter'] leading-tight">
                          Modernize Operations
                        </h3>
                      </div>

                      <div className="flex flex-col gap-1">
                        {modernizeLinks.map((item) => (
                          <a
                            key={item.label}
                            href={item.href}
                            className="text-[#12365E] hover:text-[#C0872B] text-sm font-normal font-['Inter'] flex items-center justify-between group transition-colors leading-tight py-0.5"
                          >
                            <span>{item.label}</span>
                            <LuChevronRight className="w-3 h-3 text-[#9AA6B5] flex-shrink-0 ml-1 group-hover:translate-x-0.5 transition-transform" />
                          </a>
                        ))}
                      </div>
                    </div>

                    {/* Column 4: Organization Types */}
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-2 pb-1.5 border-b-2 border-[#C0872B]">
                        <div className="w-9.5 h-9.5 rounded-full border border-[#EBDCC0] flex items-center justify-center flex-shrink-0">
                          <LuBuilding2 className="w-4 h-4 text-[#12365E]" />
                        </div>
                        <h3 className="text-[#12365E] text-sm font-bold font-['Inter'] leading-tight">
                          Organization Types
                        </h3>
                      </div>

                      <div className="flex flex-col gap-1">
                        {organizationLinks.map((item) => (
                          <a
                            key={item.label}
                            href={item.href}
                            className="text-[#12365E] hover:text-[#C0872B] text-sm font-normal font-['Inter'] flex items-center justify-between group transition-colors leading-tight py-0.5"
                          >
                            <span>{item.label}</span>
                            <LuChevronRight className="w-3 h-3 text-[#9AA6B5] flex-shrink-0 ml-1 group-hover:translate-x-0.5 transition-transform" />
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Bottom Yellow Feature Banner */}
                  <div className="w-full bg-[#FDF6EA] border border-[#EBD9B6] rounded-xl px-4 py-3 flex items-center justify-between shadow-sm">
                    <div className="flex items-center gap-4">
                      <div className="w-[90px] h-[70px] relative flex-shrink-0">
                        <img
                          src="/navbar/shield.png"
                          alt="Shield Icon"
                          className="w-full h-full object-contain"
                        />
                      </div>

                      <div className="flex flex-col gap-0.5">
                        <span className="text-[#12365E] text-base font-bold font-['Inter'] text-left leading-snug">
                          Build the enterprise case for ZoikoSuite
                        </span>
                        <span className="text-[#5A6675] text-sm font-normal font-['Inter'] text-left leading-snug">
                          Access tailored business cases, ROI models, and
                          executive briefs to drive alignment and accelerate
                          decisions.
                        </span>
                      </div>
                    </div>

                    <a
                      href="/executive-resources"
                      className="bg-[#C0872B] hover:bg-[#A9761F] text-[#FFFFFF] px-4 py-2 rounded-lg text-xs font-bold font-['Inter'] flex items-center gap-2 transition-colors flex-shrink-0"
                    >
                      Explore Executive Resources
                      <LuArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            )}

            {/* INDUSTRIES MEGA MENU */}
            {activeMenu === "Industries" && (
              <motion.div
                key="industries-menu"
                className="absolute top-24 left-1/2 -translate-x-1/2 w-[calc(100%-6rem)] max-w-6xl bg-[#FFFFFF] border border-[#EAEEF4] shadow-2xl rounded-xl z-50 px-8 py-5 max-h-[calc(100vh-9rem)]"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={megaMenuVariants}
                onMouseEnter={() => {
                  document.body.style.overflowY = "scroll";
                  document.body.style.scrollbarGutter = "stable";
                  openMenu("Industries");
                }}
                onMouseLeave={() => {
                  document.body.style.overflowY = "";
                  document.body.style.scrollbarGutter = "";
                  scheduleClose();
                }}
                onWheel={(e) => {
                  e.stopPropagation();
                }}
                onTouchMove={(e) => {
                  e.stopPropagation();
                }}
              >
                <div className="max-w-[1220px] mx-auto flex flex-col justify-between min-h-[535px] gap-5">
                  {/* Top Content Area */}
                  <div className="flex flex-col gap-5">
                    {/* Header Section */}
                    <div className="flex items-center gap-3 border-b border-[#EAEEF4] pb-4">
                      <div className="w-14 h-14 rounded-full bg-[#0F2C57] flex items-center justify-center flex-shrink-0">
                        <LuBuilding2 className="w-6 h-6 text-[#C0872B]" />
                      </div>

                      <div className="flex flex-col gap-0.5">
                        <h2 className="text-[#12365E] text-xl font-bold font-['Inter'] leading-tight">
                          Industries
                        </h2>

                        <p className="text-[#5A6675] text-xs font-normal font-['Inter'] leading-snug">
                          Demonstrate governance, jurisdictional intelligence,
                          and evidence controls for high-complexity sectors.
                        </p>
                      </div>
                    </div>

                    {/* 3 Link Columns */}
                    <div className="grid grid-cols-3 gap-6">
                      {/* Column 1: Regulated Industries */}
                      <div className="flex flex-col gap-2.5">
                        <div className="flex items-center gap-2 pb-1.5 border-b-2 border-[#C0872B]">
                          <div className="w-10 h-10 rounded-full border border-[#EBDCC0] flex items-center justify-center flex-shrink-0">
                            <LuShieldCheck className="w-4 h-4 text-[#12365E]" />
                          </div>

                          <h3 className="text-[#12365E] text-sm font-bold font-['Inter'] leading-tight">
                            Regulated Industries
                          </h3>
                        </div>

                        <div className="flex flex-col gap-1.5">
                          {regulatedIndustriesLinks.map((item) => (
                            <a
                              key={item.label}
                              href={item.href}
                              className="text-[#12365E] hover:text-[#C0872B] text-sm font-normal font-['Inter'] flex items-center justify-between group transition-colors leading-tight py-0.5"
                            >
                              <span>{item.label}</span>
                              <LuChevronRight className="w-3 h-3 text-[#9AA6B5] flex-shrink-0 ml-1 group-hover:translate-x-0.5 transition-transform" />
                            </a>
                          ))}
                        </div>
                      </div>

                      {/* Column 2: Complex Operations */}
                      <div className="flex flex-col gap-2.5">
                        <div className="flex items-center gap-2 pb-1.5 border-b-2 border-[#C0872B]">
                          <div className="w-10 h-10 rounded-full border border-[#EBDCC0] flex items-center justify-center flex-shrink-0">
                            <LuRefreshCw className="w-4 h-4 text-[#12365E]" />
                          </div>

                          <h3 className="text-[#12365E] text-sm font-bold font-['Inter'] leading-tight">
                            Complex Operations
                          </h3>
                        </div>

                        <div className="flex flex-col gap-1.5">
                          {complexOperationsLinks.map((item) => (
                            <a
                              key={item.label}
                              href={item.href}
                              className="text-[#12365E] hover:text-[#C0872B] text-sm font-normal font-['Inter'] flex items-center justify-between group transition-colors leading-tight py-0.5"
                            >
                              <span>{item.label}</span>
                              <LuChevronRight className="w-3 h-3 text-[#9AA6B5] flex-shrink-0 ml-1 group-hover:translate-x-0.5 transition-transform" />
                            </a>
                          ))}
                        </div>
                      </div>

                      {/* Column 3: Knowledge and Growth Sectors */}
                      <div className="flex flex-col gap-2.5">
                        <div className="flex items-center gap-2 pb-1.5 border-b-2 border-[#C0872B]">
                          <div className="w-10 h-10 rounded-full border border-[#EBDCC0] flex items-center justify-center flex-shrink-0">
                            <LuGraduationCap className="w-4 h-4 text-[#12365E]" />
                          </div>

                          <h3 className="text-[#12365E] text-sm font-bold font-['Inter'] leading-tight">
                            Knowledge and Growth Sectors
                          </h3>
                        </div>

                        <div className="flex flex-col gap-1.5">
                          {knowledgeGrowthLinks.map((item) => (
                            <a
                              key={item.label}
                              href={item.href}
                              className="text-[#12365E] hover:text-[#C0872B] text-sm font-normal font-['Inter'] flex items-center justify-between group transition-colors leading-tight py-0.5"
                            >
                              <span>{item.label}</span>
                              <LuChevronRight className="w-3 h-3 text-[#9AA6B5] flex-shrink-0 ml-1 group-hover:translate-x-0.5 transition-transform" />
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Yellow Feature Banner (Pinned to bottom of fixed height layout) */}
                  <div className="w-full bg-[#FDF6EA] border border-[#EBD9B6] rounded-xl p-4 flex items-center justify-between shadow-sm mb-2">
                    <div className="flex items-center gap-4">
                      <div className="w-[100px] h-[75px] relative flex-shrink-0">
                        <img
                          src="/navbar/shield.png"
                          alt="Shield Icon"
                          className="w-full h-full object-contain"
                        />
                      </div>

                      <div className="flex flex-col gap-0.5">
                        <span className="text-[#12365E] text-base font-bold font-['Inter'] text-left leading-snug">
                          Tailored Industry Solutions
                        </span>

                        <span className="text-[#5A6675] text-xs font-normal font-['Inter'] text-left leading-snug">
                          Discover industry-specific governance capabilities and
                          compliance workflows.
                        </span>
                      </div>
                    </div>

                    <a
                      href="/industry-solutions"
                      className="bg-[#C0872B] hover:bg-[#A9761F] text-[#FFFFFF] px-4 py-2.5 rounded-lg text-xs font-bold font-['Inter'] flex items-center gap-2 transition-colors flex-shrink-0"
                    >
                      View Industry Solutions
                      <LuArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            )}

            {/* TRUST MEGA MENU */}
            {activeMenu === "Trust" && (
              <motion.div
                key="trust-menu"
                className="absolute top-24 left-1/2 -translate-x-1/2 w-[calc(100%-6rem)] max-w-6xl bg-[#FFFFFF] border border-[#EAEEF4] shadow-2xl rounded-xl z-50 px-8 py-5 max-h-[calc(100vh-9rem)]"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={megaMenuVariants}
                onMouseEnter={() => {
                  document.body.style.overflowY = "scroll";
                  document.body.style.scrollbarGutter = "stable";
                  openMenu("Trust");
                }}
                onMouseLeave={() => {
                  document.body.style.overflowY = "";
                  document.body.style.scrollbarGutter = "";
                  scheduleClose();
                }}
                onWheel={(e) => {
                  e.stopPropagation();
                }}
                onTouchMove={(e) => {
                  e.stopPropagation();
                }}
              >
                <div className="max-w-[1220px] mx-auto flex flex-col justify-between min-h-[535px] gap-5">
                  {/* Top Content Area */}
                  <div className="flex flex-col gap-5">
                    {/* Header Section */}
                    <div className="flex items-center gap-3 border-b border-[#EAEEF4] pb-4">
                      <div className="w-14 h-14 rounded-full bg-[#0F2C57] flex items-center justify-center flex-shrink-0">
                        <LuShieldCheck className="w-6 h-6 text-[#C0872B]" />
                      </div>

                      <div className="flex flex-col gap-0.5">
                        <h2 className="text-[#12365E] text-xl font-bold font-['Inter'] leading-tight">
                          Trust
                        </h2>

                        <p className="text-[#5A6675] text-xs font-normal font-['Inter'] leading-snug">
                          Give procurement, security, legal, compliance, and
                          regulatory stakeholders direct access to trust
                          architecture.
                        </p>
                      </div>
                    </div>

                    {/* 4 Link Columns */}
                    <div className="grid grid-cols-4 gap-6">
                      {/* Column 1: Security Architecture */}
                      <div className="flex flex-col gap-2.5">
                        <div className="flex items-center gap-2 pb-1.5 border-b-2 border-[#C0872B]">
                          <div className="w-10 h-10 rounded-full border border-[#EBDCC0] flex items-center justify-center flex-shrink-0">
                            <LuShieldCheck className="w-4 h-4 text-[#12365E]" />
                          </div>

                          <h3 className="text-[#12365E] text-sm font-bold font-['Inter'] leading-tight">
                            Security Architecture
                          </h3>
                        </div>

                        <div className="flex flex-col gap-1.5">
                          {securityArchitectureLinks.map((item) => (
                            <a
                              key={item.label}
                              href={item.href}
                              className="text-[#12365E] hover:text-[#C0872B] text-sm font-normal font-['Inter'] flex items-center justify-between group transition-colors leading-tight py-0.5"
                            >
                              <span>{item.label}</span>
                              <LuChevronRight className="w-3 h-3 text-[#9AA6B5] flex-shrink-0 ml-1 group-hover:translate-x-0.5 transition-transform" />
                            </a>
                          ))}
                        </div>
                      </div>

                      {/* Column 2: Compliance Framework */}
                      <div className="flex flex-col gap-2.5">
                        <div className="flex items-center gap-2 pb-1.5 border-b-2 border-[#C0872B]">
                          <div className="w-10 h-10 rounded-full border border-[#EBDCC0] flex items-center justify-center flex-shrink-0">
                            <LuClipboardCheck className="w-4 h-4 text-[#12365E]" />
                          </div>

                          <h3 className="text-[#12365E] text-sm font-bold font-['Inter'] leading-tight">
                            Compliance Framework
                          </h3>
                        </div>

                        <div className="flex flex-col gap-1.5">
                          {complianceFrameworkLinks.map((item) => (
                            <a
                              key={item.label}
                              href={item.href}
                              className="text-[#12365E] hover:text-[#C0872B] text-sm font-normal font-['Inter'] flex items-center justify-between group transition-colors leading-tight py-0.5"
                            >
                              <span>{item.label}</span>
                              <LuChevronRight className="w-3 h-3 text-[#9AA6B5] flex-shrink-0 ml-1 group-hover:translate-x-0.5 transition-transform" />
                            </a>
                          ))}
                        </div>
                      </div>

                      {/* Column 3: Audit and Assurance */}
                      <div className="flex flex-col gap-2.5">
                        <div className="flex items-center gap-2 pb-1.5 border-b-2 border-[#C0872B]">
                          <div className="w-10 h-10 rounded-full border border-[#EBDCC0] flex items-center justify-center flex-shrink-0">
                            <LuScale className="w-4 h-4 text-[#12365E]" />
                          </div>

                          <h3 className="text-[#12365E] text-sm font-bold font-['Inter'] leading-tight">
                            Audit and Assurance
                          </h3>
                        </div>

                        <div className="flex flex-col gap-1.5">
                          {auditAssuranceLinks.map((item) => (
                            <a
                              key={item.label}
                              href={item.href}
                              className="text-[#12365E] hover:text-[#C0872B] text-sm font-normal font-['Inter'] flex items-center justify-between group transition-colors leading-tight py-0.5"
                            >
                              <span>{item.label}</span>
                              <LuChevronRight className="w-3 h-3 text-[#9AA6B5] flex-shrink-0 ml-1 group-hover:translate-x-0.5 transition-transform" />
                            </a>
                          ))}
                        </div>
                      </div>

                      {/* Column 4: Data Sovereignty */}
                      <div className="flex flex-col gap-2.5">
                        <div className="flex items-center gap-2 pb-1.5 border-b-2 border-[#C0872B]">
                          <div className="w-10 h-10 rounded-full border border-[#EBDCC0] flex items-center justify-center flex-shrink-0">
                            <LuGlobe className="w-4 h-4 text-[#12365E]" />
                          </div>

                          <h3 className="text-[#12365E] text-sm font-bold font-['Inter'] leading-tight">
                            Data Sovereignty
                          </h3>
                        </div>

                        <div className="flex flex-col gap-1.5">
                          {dataSovereigntyLinks.map((item) => (
                            <a
                              key={item.label}
                              href={item.href}
                              className="text-[#12365E] hover:text-[#C0872B] text-sm font-normal font-['Inter'] flex items-center justify-between group transition-colors leading-tight py-0.5"
                            >
                              <span>{item.label}</span>
                              <LuChevronRight className="w-3 h-3 text-[#9AA6B5] flex-shrink-0 ml-1 group-hover:translate-x-0.5 transition-transform" />
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Banner (Refactored to match Industries card dimensions/style structure) */}
                  <div className="w-full bg-[#FDF6EA] border border-[#EBD9B6] rounded-xl p-4 flex items-center justify-between shadow-sm mb-2">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#0F2C57] flex items-center justify-center flex-shrink-0">
                        <LuShieldCheck className="w-5 h-5 text-[#C0872B]" />
                      </div>

                      <div className="flex flex-col gap-0.5">
                        <span className="text-[#12365E] text-base font-bold font-['Inter'] text-left leading-snug">
                          Trust status must use verified, status-qualified
                          language.
                        </span>

                        <span className="text-[#5A6675] text-xs font-normal font-['Inter'] text-left leading-snug">
                          Access up-to-date compliance records and architecture
                          overviews.
                        </span>
                      </div>
                    </div>

                    <a
                      href="/trust-center"
                      className="bg-[#C0872B] hover:bg-[#A9761F] text-[#FFFFFF] px-4 py-2.5 rounded-lg text-xs font-bold font-['Inter'] flex items-center gap-2 transition-colors flex-shrink-0"
                    >
                      Visit the Trust Center
                      <LuArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            )}

            {/* RESOURCES MEGA MENU */}
            {activeMenu === "Resources" && (
              <motion.div
                key="resources-menu"
                className="absolute top-24 left-1/2 -translate-x-1/2 w-[calc(100%-6rem)] max-w-6xl bg-[#FFFFFF] border border-[#EAEEF4] shadow-2xl rounded-xl z-50 px-8 py-5 max-h-[calc(100vh-9rem)]"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={megaMenuVariants}
                onMouseEnter={() => {
                  document.body.style.overflowY = "scroll";
                  document.body.style.scrollbarGutter = "stable";
                  openMenu("Resources");
                }}
                onMouseLeave={() => {
                  document.body.style.overflowY = "";
                  document.body.style.scrollbarGutter = "";
                  scheduleClose();
                }}
                onWheel={(e) => {
                  e.stopPropagation();
                }}
                onTouchMove={(e) => {
                  e.stopPropagation();
                }}
              >
                <div className="max-w-[1220px] mx-auto flex flex-col justify-between min-h-[535px] gap-5">
                  {/* Top Content Area */}
                  <div className="flex flex-col gap-5">
                    {/* Header Section */}
                    <div className="flex items-center gap-3 border-b border-[#EAEEF4] pb-4">
                      <div className="w-14 h-14 rounded-full bg-[#0F2C57] flex items-center justify-center flex-shrink-0">
                        <LuBookOpen className="w-6 h-6 text-[#C0872B]" />
                      </div>

                      <div className="flex flex-col gap-0.5">
                        <h2 className="text-[#12365E] text-xl font-bold font-['Inter'] leading-tight">
                          Resources
                        </h2>

                        <p className="text-[#5A6675] text-xs font-normal font-['Inter'] leading-snug">
                          Support discovery, education, evaluation,
                          implementation, and customer success.
                        </p>
                      </div>
                    </div>

                    {/* 4 Link Columns */}
                    <div className="grid grid-cols-4 gap-6">
                      {/* Column 1: Learn */}
                      <div className="flex flex-col gap-2.5">
                        <div className="flex items-center gap-2 pb-1.5 border-b-2 border-[#C0872B]">
                          <div className="w-10 h-10 rounded-full border border-[#EBDCC0] bg-[#FDF6EA] flex items-center justify-center flex-shrink-0">
                            <LuGraduationCap className="w-4 h-4 text-[#C0872B]" />
                          </div>

                          <h3 className="text-[#12365E] text-sm font-bold font-['Inter'] leading-tight">
                            Learn
                          </h3>
                        </div>

                        <div className="flex flex-col gap-1.5">
                          {learnLinks.map((item) => (
                            <a
                              key={item.label}
                              href={item.href}
                              className="text-[#12365E] hover:text-[#C0872B] text-sm font-normal font-['Inter'] flex items-center justify-between group transition-colors leading-tight py-0.5"
                            >
                              <span>{item.label}</span>
                              <LuChevronRight className="w-3 h-3 text-[#9AA6B5] flex-shrink-0 ml-1 group-hover:translate-x-0.5 transition-transform" />
                            </a>
                          ))}
                        </div>
                      </div>

                      {/* Column 2: Executive Resources */}
                      <div className="flex flex-col gap-2.5">
                        <div className="flex items-center gap-2 pb-1.5 border-b-2 border-[#C0872B]">
                          <div className="w-10 h-10 rounded-full border border-[#EBDCC0] bg-[#FDF6EA] flex items-center justify-center flex-shrink-0">
                            <LuUser className="w-4 h-4 text-[#C0872B]" />
                          </div>

                          <h3 className="text-[#12365E] text-sm font-bold font-['Inter'] leading-tight">
                            Executive Resources
                          </h3>
                        </div>

                        <div className="flex flex-col gap-1.5">
                          {execResourcesLinks.map((item) => (
                            <a
                              key={item.label}
                              href={item.href}
                              className="text-[#12365E] hover:text-[#C0872B] text-sm font-normal font-['Inter'] flex items-center justify-between group transition-colors leading-tight py-0.5"
                            >
                              <span>{item.label}</span>
                              <LuChevronRight className="w-3 h-3 text-[#9AA6B5] flex-shrink-0 ml-1 group-hover:translate-x-0.5 transition-transform" />
                            </a>
                          ))}
                        </div>
                      </div>

                      {/* Column 3: Architecture & Technical */}
                      <div className="flex flex-col gap-2.5">
                        <div className="flex items-center gap-2 pb-1.5 border-b-2 border-[#C0872B]">
                          <div className="w-10 h-10 rounded-full border border-[#EBDCC0] bg-[#FDF6EA] flex items-center justify-center flex-shrink-0">
                            <LuCpu className="w-4 h-4 text-[#C0872B]" />
                          </div>

                          <h3 className="text-[#12365E] text-sm font-bold font-['Inter'] leading-tight">
                            Architecture & Technical
                          </h3>
                        </div>

                        <div className="flex flex-col gap-1.5">
                          {techArchitectureLinks.map((item) => (
                            <a
                              key={item.label}
                              href={item.href}
                              className="text-[#12365E] hover:text-[#C0872B] text-sm font-normal font-['Inter'] flex items-center justify-between group transition-colors leading-tight py-0.5"
                            >
                              <span>{item.label}</span>
                              <LuChevronRight className="w-3 h-3 text-[#9AA6B5] flex-shrink-0 ml-1 group-hover:translate-x-0.5 transition-transform" />
                            </a>
                          ))}
                        </div>
                      </div>

                      {/* Column 4: Customer Resources */}
                      <div className="flex flex-col gap-2.5">
                        <div className="flex items-center gap-2 pb-1.5 border-b-2 border-[#C0872B]">
                          <div className="w-10 h-10 rounded-full border border-[#EBDCC0] bg-[#FDF6EA] flex items-center justify-center flex-shrink-0">
                            <LuUserCheck className="w-4 h-4 text-[#C0872B]" />
                          </div>

                          <h3 className="text-[#12365E] text-sm font-bold font-['Inter'] leading-tight">
                            Customer Resources
                          </h3>
                        </div>

                        <div className="flex flex-col gap-1.5">
                          {customerResourcesLinks.map((item) => (
                            <a
                              key={item.label}
                              href={item.href}
                              className="text-[#12365E] hover:text-[#C0872B] text-sm font-normal font-['Inter'] flex items-center justify-between group transition-colors leading-tight py-0.5"
                            >
                              <span>{item.label}</span>
                              <LuChevronRight className="w-3 h-3 text-[#9AA6B5] flex-shrink-0 ml-1 group-hover:translate-x-0.5 transition-transform" />
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Yellow Feature Banner */}
                  <div className="w-full bg-[#FDF6EA] border border-[#EBD9B6] rounded-xl p-4 flex items-center justify-between shadow-sm mb-2">
                    <div className="flex items-center gap-4">
                      <div className="w-[100px] h-[75px] relative flex-shrink-0 flex items-center justify-center">
                        <svg
                          viewBox="0 0 100 120"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-full h-full object-contain"
                        >
                          <path
                            d="M50 8L15 28V62C15 88 50 112 50 112C50 112 85 88 85 62V28L50 8Z"
                            fill="#C0872B"
                          />
                          <path
                            d="M50 14L21 31V60C21 82 50 102 50 102C50 102 79 82 79 60V31L50 14Z"
                            fill="#12365E"
                          />
                          <path
                            d="M36 42H64M38 46H62M42 46V72M50 46V72M58 46V72M38 72H62M35 76H65"
                            stroke="#FFFFFF"
                            strokeWidth="3.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>

                      <div className="flex flex-col gap-0.5">
                        <span className="text-[#12365E] text-base font-bold font-['Inter'] text-left leading-snug">
                          Why governance must live inside execution
                        </span>

                        <span className="text-[#5A6675] text-xs font-normal font-['Inter'] text-left leading-snug">
                          Read the comprehensive architecture brief and
                          implementation breakdown.
                        </span>
                      </div>
                    </div>

                    <a
                      href=""
                      className="bg-[#C0872B] hover:bg-[#A9761F] text-[#FFFFFF] px-4 py-2.5 rounded-lg text-xs font-bold font-['Inter'] flex items-center gap-2 transition-colors flex-shrink-0"
                    >
                      Read the Architecture Brief
                      <LuArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            )}

            {/* COMPANY MEGA MENU */}
            {activeMenu === "Company" && (
              <motion.div
                key="company-menu"
                className="absolute top-24 left-1/2 -translate-x-1/2 w-[calc(100%-6rem)] max-w-6xl bg-[#FFFFFF] border border-[#EAEEF4] shadow-2xl rounded-xl z-50 px-8 py-5 max-h-[calc(100vh-9rem)]"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={megaMenuVariants}
                onMouseEnter={() => {
                  document.body.style.overflowY = "scroll";
                  document.body.style.scrollbarGutter = "stable";
                  openMenu("Company");
                }}
                onMouseLeave={() => {
                  document.body.style.overflowY = "";
                  document.body.style.scrollbarGutter = "";
                  scheduleClose();
                }}
                onWheel={(e) => {
                  e.stopPropagation();
                }}
                onTouchMove={(e) => {
                  e.stopPropagation();
                }}
              >
                <div className="max-w-[1220px] mx-auto flex flex-col justify-between min-h-[535px] gap-5">
                  {/* Top Content Area */}
                  <div className="flex flex-col gap-5">
                    {/* Header Section */}
                    <div className="flex items-center gap-3 border-b border-[#EAEEF4] pb-4">
                      <div className="w-14 h-14 rounded-full bg-[#0F2C57] flex items-center justify-center flex-shrink-0">
                        <LuBuilding2 className="w-6 h-6 text-[#C0872B]" />
                      </div>

                      <div className="flex flex-col gap-0.5">
                        <h2 className="text-[#12365E] text-xl font-bold font-['Inter'] leading-tight">
                          Company
                        </h2>

                        <p className="text-[#5A6675] text-xs font-normal font-['Inter'] leading-snug">
                          Establish corporate credibility, leadership,
                          partnerships, careers, communications, and
                          institutional identity.
                        </p>
                      </div>
                    </div>

                    {/* 3 Link Columns */}
                    <div className="grid grid-cols-3 gap-6">
                      {/* Column 1: About */}
                      <div className="flex flex-col gap-2.5">
                        <div className="flex items-center gap-2 pb-1.5 border-b-2 border-[#C0872B]">
                          <div className="w-10 h-10 rounded-full border border-[#EBDCC0] bg-[#FDF6EA] flex items-center justify-center flex-shrink-0">
                            <LuUsers className="w-4 h-4 text-[#C0872B]" />
                          </div>

                          <h3 className="text-[#12365E] text-sm font-bold font-['Inter'] leading-tight">
                            About
                          </h3>
                        </div>

                        <div className="flex flex-col gap-1.5">
                          {aboutLinks.map((item) => (
                            <a
                              key={item.label}
                              href={item.href}
                              className="text-[#12365E] hover:text-[#C0872B] text-sm font-normal font-['Inter'] flex items-center justify-between group transition-colors leading-tight py-0.5"
                            >
                              <span>{item.label}</span>
                              <LuChevronRight className="w-3 h-3 text-[#9AA6B5] flex-shrink-0 ml-1 group-hover:translate-x-0.5 transition-transform" />
                            </a>
                          ))}
                        </div>
                      </div>

                      {/* Column 2: Ecosystem */}
                      <div className="flex flex-col gap-2.5">
                        <div className="flex items-center gap-2 pb-1.5 border-b-2 border-[#C0872B]">
                          <div className="w-10 h-10 rounded-full border border-[#EBDCC0] bg-[#FDF6EA] flex items-center justify-center flex-shrink-0">
                            <LuNetwork className="w-4 h-4 text-[#C0872B]" />
                          </div>

                          <h3 className="text-[#12365E] text-sm font-bold font-['Inter'] leading-tight">
                            Ecosystem
                          </h3>
                        </div>

                        <div className="flex flex-col gap-1.5">
                          {ecosystemLinks.map((item) => (
                            <a
                              key={item.label}
                              href={item.href}
                              className="text-[#12365E] hover:text-[#C0872B] text-sm font-normal font-['Inter'] flex items-center justify-between group transition-colors leading-tight py-0.5"
                            >
                              <span>{item.label}</span>
                              <LuChevronRight className="w-3 h-3 text-[#9AA6B5] flex-shrink-0 ml-1 group-hover:translate-x-0.5 transition-transform" />
                            </a>
                          ))}
                        </div>
                      </div>

                      {/* Column 3: Company */}
                      <div className="flex flex-col gap-2.5">
                        <div className="flex items-center gap-2 pb-1.5 border-b-2 border-[#C0872B]">
                          <div className="w-10 h-10 rounded-full border border-[#EBDCC0] bg-[#FDF6EA] flex items-center justify-center flex-shrink-0">
                            <LuBriefcase className="w-4 h-4 text-[#C0872B]" />
                          </div>

                          <h3 className="text-[#12365E] text-sm font-bold font-['Inter'] leading-tight">
                            Company
                          </h3>
                        </div>

                        <div className="flex flex-col gap-1.5">
                          {companyLinks.map((item) => (
                            <a
                              key={item.label}
                              href={item.href}
                              className="text-[#12365E] hover:text-[#C0872B] text-sm font-normal font-['Inter'] flex items-center justify-between group transition-colors leading-tight py-0.5"
                            >
                              <span>{item.label}</span>
                              <LuChevronRight className="w-3 h-3 text-[#9AA6B5] flex-shrink-0 ml-1 group-hover:translate-x-0.5 transition-transform" />
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Yellow Feature Banner with Heritage Image */}
                  <div className="w-full bg-[#FDF6EA] border border-[#EBD9B6] rounded-xl p-4 flex items-center justify-between shadow-sm mb-2">
                    <div className="flex items-center gap-4">
                      <div className="w-[100px] h-[75px] relative flex-shrink-0">
                        <img
                          src="/navbar/heritage.png"
                          alt="Heritage Icon"
                          className="w-full h-full object-contain"
                        />
                      </div>

                      <span className="text-[#12365E] text-base font-bold font-['Inter'] text-left leading-snug">
                        Built from 32 years of professional and operating
                        experience
                      </span>
                    </div>

                    <a
                      href=""
                      className="bg-[#C0872B] hover:bg-[#A9761F] text-[#FFFFFF] px-4 py-2.5 rounded-lg text-xs font-bold font-['Inter'] flex items-center gap-2 transition-colors flex-shrink-0"
                    >
                      Read Our Story
                      <LuArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

      {/* Spacer so fixed nav never overlaps page content. Matches mobile (h-16/h-20) and desktop (h-24) nav heights. */}
      <div className="h-16 sm:h-20 lg:h-24" aria-hidden="true" />

      {/* ============ MOBILE DRAWER MENU (below lg) ============ */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="mobile-backdrop"
              className="fixed inset-0 bg-black/40 z-[60] lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={closeMobileMenu}
            />

            {/* Sliding Panel */}
            <motion.div
              key="mobile-panel"
              className="fixed top-0 right-0 h-screen w-[85%] max-w-[380px] bg-[#FFFFFF] z-[70] lg:hidden flex flex-col shadow-2xl"
              variants={mobilePanelVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between px-5 h-16 border-b border-[#EAEEF4] flex-shrink-0">
                <div className="w-[110px] h-[44px] relative overflow-hidden">
                  <Image
                    src="/logo.png"
                    alt="Zoiko Suite Logo"
                    fill
                    className="object-contain object-left"
                  />
                </div>
                <button
                  className="w-10 h-10 flex justify-center items-center rounded-[10px] hover:bg-[#EAEEF4]/50 transition-colors"
                  aria-label="Close menu"
                  onClick={closeMobileMenu}
                >
                  <LuX className="w-6 h-6 text-[#12365E]" />
                </button>
              </div>

              {/* Scrollable Content */}
              <div className="flex-1 min-h-0 overflow-y-auto overscroll-contain px-3 py-4">
                {navItems.map((item) => {
                  const isSectionOpen = openMobileSection === item;
                  return (
                    <div
                      key={item}
                      className="border-b border-[#EAEEF4] last:border-b-0"
                    >
                      <button
                        className="w-full flex items-center justify-between px-3 py-4 text-left"
                        onClick={() => toggleMobileSection(item)}
                        aria-expanded={isSectionOpen}
                      >
                        <span className="text-[#12365E] text-base font-semibold font-['Inter']">
                          {item}
                        </span>
                        <LuChevronDown
                          className={`w-4 h-4 text-[#9AA6B5] transition-transform duration-200 ${
                            isSectionOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      <AnimatePresence initial={false}>
                        {isSectionOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <div className="pb-3 pl-2 flex flex-col gap-1">
                              {mobileMenuConfig[item].map((group) => {
                                const groupKey = `${item}::${group.title}`;
                                const isGroupOpen =
                                  openMobileGroups.has(groupKey);
                                const GroupIcon = group.icon;
                                return (
                                  <div key={groupKey} className="flex flex-col">
                                    <button
                                      className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-[#EAEEF4]/50 transition-colors text-left"
                                      onClick={() =>
                                        toggleMobileGroup(groupKey)
                                      }
                                      aria-expanded={isGroupOpen}
                                    >
                                      <span className="flex items-center gap-2.5">
                                        <GroupIcon className="w-4 h-4 text-[#C0872B] flex-shrink-0" />
                                        <span className="text-[#12365E] text-sm font-semibold font-['Inter']">
                                          {group.title}
                                        </span>
                                      </span>
                                      <LuChevronRight
                                        className={`w-3.5 h-3.5 text-[#9AA6B5] transition-transform duration-200 ${
                                          isGroupOpen ? "rotate-90" : ""
                                        }`}
                                      />
                                    </button>

                                    <AnimatePresence initial={false}>
                                      {isGroupOpen && (
                                        <motion.div
                                          initial={{ height: 0, opacity: 0 }}
                                          animate={{
                                            height: "auto",
                                            opacity: 1,
                                          }}
                                          exit={{ height: 0, opacity: 0 }}
                                          transition={{
                                            duration: 0.18,
                                            ease: "easeInOut",
                                          }}
                                          className="overflow-hidden"
                                        >
                                          <div className="flex flex-col pl-9 pr-2 py-1">
                                            {group.links.map((link) => (
                                              <a
                                                key={link.label}
                                                href={link.href}
                                                className="text-[#5A6675] hover:text-[#12365E] text-sm font-medium font-['Inter'] py-2"
                                                onClick={closeMobileMenu}
                                              >
                                                {link.label}
                                              </a>
                                            ))}
                                          </div>
                                        </motion.div>
                                      )}
                                    </AnimatePresence>
                                  </div>
                                );
                              })}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>

              {/* Drawer Footer: Sign in + Book demo */}
              <div className="flex-shrink-0 border-t border-[#EAEEF4] px-4 py-4 flex flex-col gap-3">
                <a
                  href=""
                  className="w-full min-h-11 px-3 py-2.5 flex justify-center items-center border border-[#EAEEF4] rounded-lg text-[#12365E] text-sm font-medium font-['Inter'] hover:bg-[#EAEEF4]/50 transition-colors"
                  onClick={closeMobileMenu}
                >
                  Sign in
                </a>
                <a
                  href=""
                  className="w-full min-h-12 px-3.5 py-3 bg-[#C0872B] rounded-[999px] border border-[#C0872B] flex justify-center items-center gap-2.5 hover:bg-[#A9761F] hover:border-[#A9761F] transition-colors"
                  onClick={closeMobileMenu}
                >
                  <span className="justify-center text-[#FFFFFF] text-sm font-semibold font-['Inter'] leading-5">
                    Book demo
                  </span>
                  <LuArrowRight className="w-3.5 h-3.5 text-[#FFFFFF] stroke-[2.5]" />
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
