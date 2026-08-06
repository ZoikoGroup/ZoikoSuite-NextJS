"use client";

import React, { useState } from "react";
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
/* --- Platform Data --- */
const discoverLinks = [
  { label: "Platform Overview", href: "/platform-overview" },
  { label: "How ZoikoSuite Works", href: "/platform/how-it-works" },
  {
    label: "Governed Business Operations Intelligence",
    href: "/platform/governed-operations",
  },
  { label: "Why ZoikoSuite Is Not an ERP", href: "/platform/not-an-erp" },
  { label: "Platform Tour", href: "/platform/tour" },
  { label: "Product Roadmap", href: "/platform/roadmap" },
  { label: "Deployment Options", href: "/platform/deployment" },
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
  { label: "Evidence Architecture", href: "/foundation/evidence-architecture" },
  {
    label: "Data and Event Architecture",
    href: "/foundation/data-event-architecture",
  },
] as const;

/* --- Solutions Data --- */
const leadershipLinks = [
  { label: "For CFOs", href: "/solutions/cfos" },
  { label: "For General Counsel", href: "/solutions/general-counsel" },
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
    href: "/solutions/governed-operations",
  },
  {
    label: "Prepare for International Expansion",
    href: "/solutions/international-expansion",
  },
  {
    label: "Strengthen Internal Controls",
    href: "/solutions/internal-controls",
  },
  {
    label: "Modernize Finance Operations",
    href: "/solutions/modernize-finance",
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
  { label: "Financial Services", href: "/industries/financial-services" },
  { label: "Banking", href: "/industries/banking" },
  { label: "Fintech", href: "/industries/fintech" },
  { label: "Insurance", href: "/industries/insurance" },
  { label: "Telecommunications and MVNOs", href: "/industries/telecom-mvno" },
  { label: "Healthcare", href: "/industries/healthcare" },
  { label: "Life Sciences", href: "/industries/life-sciences" },
  { label: "Government and Public Sector", href: "/industries/government" },
] as const;

const complexOperationsLinks = [
  { label: "Manufacturing", href: "/industries/manufacturing" },
  { label: "Supply Chain and Logistics", href: "/industries/supply-chain" },
  { label: "Energy and Utilities", href: "/industries/energy-utilities" },
  {
    label: "Construction and Infrastructure",
    href: "/industries/construction",
  },
  { label: "Real Estate", href: "/industries/real-estate" },
  { label: "Retail and Commerce", href: "/industries/retail" },
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
  { label: "Security Overview", href: "/trust/security-overview" },
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
  { label: "Compliance Overview", href: "/trust/compliance-overview" },
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
  { label: "Data Residency", href: "/trust/data-residency" },
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

const containerVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      staggerChildren: 0.05,
    },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: -5 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3 },
  },
} as const;

const megaMenuVariants = {
  hidden: { opacity: 0, y: 10, display: "none" },
  visible: {
    opacity: 1,
    y: 0,
    display: "block",
    transition: { duration: 0.25, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    y: 10,
    transitionEnd: { display: "none" },
    transition: { duration: 0.2, ease: "easeIn" },
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

  return (
    <motion.nav
      className="w-[1440px] bg-[#FFFFFF] relative overflow-visible flex flex-col items-center mx-auto"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Top Navbar Row */}
      <div className="w-full h-24 flex items-center justify-between px-[110px] relative z-20 bg-[#FFFFFF]">
        {/* Brand Logo Image */}
        <motion.a
          href="/"
          className="flex items-center"
          variants={itemVariants}
        >
          <div className="w-[160px] h-[64px] relative overflow-hidden">
            <Image
              src="/logo.png"
              alt="Zoiko Suite Logo"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </motion.a>

        {/* Navigation Links */}
        <div className="flex items-center gap-4">
          {navItems.map((item) => (
            <motion.div
              key={item}
              className="flex flex-col justify-start items-start relative"
              variants={itemVariants}
              onMouseEnter={() => {
                if (
                  item === "Platform" ||
                  item === "Solutions" ||
                  item === "Industries" ||
                  item === "Trust" ||
                  item === "Resources" ||
                  item === "Company"
                ) {
                  setActiveMenu(item);
                } else {
                  setActiveMenu(null);
                }
              }}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <a
                href=""
                className="min-h-11 px-2 py-3.5 rounded-lg inline-flex justify-start items-center gap-1.5 hover:bg-[#EAEEF4]/50 transition-colors"
              >
                <span className="text-center justify-center text-[#12365E] text-sm font-medium font-['Inter']">
                  {item}
                </span>
                <div className="pb-px inline-flex flex-col justify-start items-center">
                  <LuChevronDown className="w-[9px] h-[9px] text-[#9AA6B5]" />
                </div>
              </a>
            </motion.div>
          ))}
        </div>

        {/* Right Side Controls */}
        <div className="pl-4 flex items-center gap-2">
          {/* Search Icon Button */}
          <motion.button
            className="w-11 h-11 px-1.5 py-px rounded-[10px] flex justify-center items-center hover:bg-[#EAEEF4]/50 transition-colors"
            variants={itemVariants}
          >
            <LuSearch className="w-5 h-5 text-[#12365E]" />
          </motion.button>

          {/* Sign in Link */}
          <motion.a
            href=""
            className="min-h-11 px-3 py-2.5 flex justify-start items-center text-[#9AA6B5] text-sm font-medium font-['Inter'] leading-6 hover:text-[#12365E] transition-colors"
            variants={itemVariants}
          >
            Sign in
          </motion.a>

          {/* Book Demo CTA Button */}
          <motion.a
            href=""
            className="min-h-12 px-3.5 py-3 bg-[#C0872B] rounded-[999px] border border-[#C0872B] flex justify-center items-center gap-2.5 hover:bg-[#A9761F] hover:border-[#A9761F] transition-colors"
            variants={itemVariants}
          >
            <span className="justify-center text-[#FFFFFF] text-sm font-semibold font-['Inter'] leading-5">
              Book demo
            </span>
            <LuArrowRight className="w-3.5 h-3.5 text-[#FFFFFF] stroke-[2.5]" />
          </motion.a>
        </div>
      </div>

      {/* Mega Menu Dropdowns */}
      <AnimatePresence>
        {/* PLATFORM MEGA MENU */}
        {activeMenu === "Platform" && (
          <motion.div
            key="platform-menu"
            className="absolute top-24 left-0 w-full bg-[#FFFFFF] border-t border-[#EAEEF4] shadow-2xl z-50 px-12 py-8"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={megaMenuVariants}
            onMouseEnter={() => setActiveMenu("Platform")}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <div className="max-w-[1220px] mx-auto flex flex-col gap-8">
              {/* Top Announcement Banner */}
              <div className="flex flex-col items-center justify-center text-center gap-4">
                <p className="text-[#12365E] text-base font-bold font-['Inter'] max-w-[1100px] leading-relaxed">
                  ZoikoSuite is a governed business operations platform. Built
                  on a unified data and controls foundation, <br /> it connects
                  core business modules with a governance control plane so every
                  operation is policy-aligned, auditable, and AI-ready.
                </p>

                {/* Yellow Feature Box */}
                <div className="w-full bg-[#FDF6EA] border border-[#EBD9B6] rounded-xl p-6 flex items-center justify-between shadow-sm">
                  <div className="flex items-center gap-6">
                    <div className="w-[150px] h-[125px] relative flex-shrink-0">
                      <img
                        src="/navbar/shield.png"
                        alt="Shield Icon"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="text-[#12365E] text-2xl font-bold font-['Inter'] text-left">
                      Business operations must execute <br /> inside governance.
                    </span>
                  </div>
                  <a
                    href=""
                    className="bg-[#C0872B] hover:bg-[#A9761F] text-[#FFFFFF] px-5 py-3 rounded-lg text-sm font-semibold font-['Inter'] flex items-center gap-2 transition-colors flex-shrink-0"
                  >
                    Read the Category Brief
                    <LuArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* 4 Main Link Columns */}
              <div className="grid grid-cols-4 gap-8 border-b border-[#EAEEF4] pb-8">
                {/* Column 1: Discover ZoikoSuite */}
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3 pb-2 border-b-2 border-[#C0872B]">
                    <div className="w-12 h-12 bg-[#EAEEF4] rounded-lg flex items-center justify-center p-1.5">
                      <LuCompass className="w-5 h-5 text-[#12365E]" />
                    </div>
                    <h3 className="text-[#12365E] text-base font-bold font-['Inter']">
                      Discover ZoikoSuite
                    </h3>
                  </div>
                  <div className="flex flex-col gap-2.5">
                    {discoverLinks.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        className="text-[#5A6675] hover:text-[#12365E] text-[15px] font-medium font-['Inter'] flex items-center justify-between group transition-colors"
                      >
                        <span>{item.label}</span>
                        <LuChevronRight className="w-3.5 h-3.5 text-[#9AA6B5] flex-shrink-0 ml-1 group-hover:translate-x-0.5 transition-transform" />
                      </a>
                    ))}
                  </div>
                </div>

                {/* Column 2: Core Modules */}
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3 pb-2 border-b-2 border-[#C0872B]">
                    <div className="w-12 h-12 bg-[#FDF6EA] rounded-lg flex items-center justify-center p-1.5">
                      <LuBoxes className="w-5 h-5 text-[#C0872B]" />
                    </div>
                    <h3 className="text-[#12365E] text-base font-bold font-['Inter']">
                      Core Modules
                    </h3>
                  </div>
                  <div className="flex flex-col gap-2.5">
                    {coreModulesLinks.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        className="text-[#5A6675] hover:text-[#12365E] text-[15px] font-medium font-['Inter'] flex items-center justify-between group transition-colors"
                      >
                        <span>{item.label}</span>
                        <LuChevronRight className="w-3.5 h-3.5 text-[#9AA6B5] flex-shrink-0 ml-1 group-hover:translate-x-0.5 transition-transform" />
                      </a>
                    ))}
                  </div>
                </div>

                {/* Column 3: Governance Platform */}
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3 pb-2 border-b-2 border-[#C0872B]">
                    <div className="w-12 h-12 bg-[#EAEEF4] rounded-lg flex items-center justify-center p-1.5">
                      <LuLandmark className="w-5 h-5 text-[#12365E]" />
                    </div>
                    <h3 className="text-[#12365E] text-base font-bold font-['Inter']">
                      Governance Platform
                    </h3>
                  </div>
                  <div className="flex flex-col gap-2.5">
                    {governanceLinks.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        className="text-[#5A6675] hover:text-[#12365E] text-[15px] font-medium font-['Inter'] flex items-center justify-between group transition-colors"
                      >
                        <span>{item.label}</span>
                        <LuChevronRight className="w-3.5 h-3.5 text-[#9AA6B5] flex-shrink-0 ml-1 group-hover:translate-x-0.5 transition-transform" />
                      </a>
                    ))}
                  </div>
                </div>

                {/* Column 4: Platform Foundation */}
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3 pb-2 border-b-2 border-[#C0872B]">
                    <div className="w-12 h-12 bg-[#EAEEF4] rounded-lg flex items-center justify-center p-1.5">
                      <LuLayers className="w-5 h-5 text-[#12365E]" />
                    </div>
                    <h3 className="text-[#12365E] text-base font-bold font-['Inter']">
                      Platform Foundation
                    </h3>
                  </div>
                  <div className="flex flex-col gap-2.5">
                    {foundationLinks.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        className="text-[#5A6675] hover:text-[#12365E] text-[15px] font-medium font-['Inter'] flex items-center justify-between group transition-colors"
                      >
                        <span>{item.label}</span>
                        <LuChevronRight className="w-3.5 h-3.5 text-[#9AA6B5] flex-shrink-0 ml-1 group-hover:translate-x-0.5 transition-transform" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Cards */}
              <div className="grid grid-cols-2 gap-6">
                {/* Left Card */}
                <div className="border border-[#EAEEF4] rounded-xl p-5 flex items-center gap-4 bg-[#FFFFFF] hover:border-[#9AA6B5] transition-colors">
                  <div className="w-12 h-12 rounded-full bg-[#0F2C57] flex items-center justify-center flex-shrink-0">
                    <LuShieldCheck className="w-6 h-6 text-[#C0872B]" />
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <h4 className="text-[#12365E] text-sm font-bold font-['Inter']">
                      Governance by design. Built for enterprise scale.
                    </h4>
                    <p className="text-[#5A6675] text-xs font-normal font-['Inter']">
                      Unify operations, enforce policy, and drive confidence.
                    </p>
                  </div>
                </div>

                {/* Right Card */}
                <div className="border border-[#EAEEF4] rounded-xl p-5 flex items-center justify-between bg-[#FFFFFF] hover:border-[#9AA6B5] transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#0F2C57] flex items-center justify-center flex-shrink-0">
                      <LucideBarChart2 className="w-6 h-6 text-[#C0872B]" />
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <h4 className="text-[#12365E] text-sm font-bold font-['Inter']">
                        Explore how ZoikoSuite works for you.
                      </h4>
                      <p className="text-[#5A6675] text-xs font-normal font-['Inter']">
                        See tailored outcomes across your business functions.
                      </p>
                    </div>
                  </div>
                  <a
                    href=""
                    className="border border-[#C0872B] text-[#C0872B] hover:bg-[#FDF6EA] px-4 py-2.5 rounded-lg text-xs font-semibold font-['Inter'] flex-shrink-0 transition-colors"
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
            className="absolute top-24 left-0 w-full bg-[#FFFFFF] border-t border-[#EAEEF4] shadow-2xl z-50 px-12 py-8"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={megaMenuVariants}
            onMouseEnter={() => setActiveMenu("Solutions")}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <div className="max-w-[1220px] mx-auto flex flex-col gap-8">
              {/* Header Section */}
              <div className="flex items-center gap-4 border-b border-[#EAEEF4] pb-6">
                <div className="w-[104px] h-[104px] rounded-full bg-[#0F2C57] flex items-center justify-center flex-shrink-0">
                  <LuPuzzle className="w-10 h-10 text-[#C0872B]" />
                </div>
                <div className="flex flex-col gap-1">
                  <h2 className="text-[#12365E] text-3xl font-bold font-['Inter']">
                    Solutions
                  </h2>
                  <p className="text-[#5A6675] text-base font-normal font-['Inter']">
                    Enable buyers to enter through executive responsibility,
                    business challenge, organization type, or transformation
                    objective.
                  </p>
                </div>
              </div>

              {/* 4 Link Columns */}
              <div className="grid grid-cols-4 gap-8">
                {/* Column 1: For Leadership Teams */}
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3 pb-2 border-b-2 border-[#C0872B]">
                    <div className="w-12 h-12 rounded-full border border-[#EBDCC0] flex items-center justify-center">
                      <LuUser className="w-4 h-4 text-[#12365E]" />
                    </div>
                    <h3 className="text-[#12365E] text-base font-bold font-['Inter']">
                      For Leadership Teams
                    </h3>
                  </div>
                  <div className="flex flex-col gap-2.5">
                    {leadershipLinks.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        className="text-[#12365E] hover:text-[#C0872B] text-[15px] font-normal font-['Inter'] flex items-center justify-between group transition-colors"
                      >
                        <span>{item.label}</span>
                        <LuChevronRight className="w-4 h-4 text-[#9AA6B5] flex-shrink-0 ml-1 group-hover:translate-x-0.5 transition-transform" />
                      </a>
                    ))}
                  </div>
                </div>

                {/* Column 2: Solve Critical Challenges */}
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3 pb-2 border-b-2 border-[#C0872B]">
                    <div className="w-12 h-12 rounded-full border border-[#EBDCC0] flex items-center justify-center">
                      <LuTarget className="w-4 h-4 text-[#12365E]" />
                    </div>
                    <h3 className="text-[#12365E] text-base font-bold font-['Inter']">
                      Solve Critical Challenges
                    </h3>
                  </div>
                  <div className="flex flex-col gap-2.5">
                    {challengesLinks.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        className="text-[#12365E] hover:text-[#C0872B] text-[15px] font-normal font-['Inter'] flex items-center justify-between group transition-colors"
                      >
                        <span>{item.label}</span>
                        <LuChevronRight className="w-4 h-4 text-[#9AA6B5] flex-shrink-0 ml-1 group-hover:translate-x-0.5 transition-transform" />
                      </a>
                    ))}
                  </div>
                </div>

                {/* Column 3: Modernize Operations */}
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3 pb-2 border-b-2 border-[#C0872B]">
                    <div className="w-12 h-12 rounded-full border border-[#EBDCC0] flex items-center justify-center">
                      <LuTrendingUp className="w-4 h-4 text-[#12365E]" />
                    </div>
                    <h3 className="text-[#12365E] text-base font-bold font-['Inter']">
                      Modernize Operations
                    </h3>
                  </div>
                  <div className="flex flex-col gap-2.5">
                    {modernizeLinks.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        className="text-[#12365E] hover:text-[#C0872B] text-[15px] font-normal font-['Inter'] flex items-center justify-between group transition-colors"
                      >
                        <span>{item.label}</span>
                        <LuChevronRight className="w-4 h-4 text-[#9AA6B5] flex-shrink-0 ml-1 group-hover:translate-x-0.5 transition-transform" />
                      </a>
                    ))}
                  </div>
                </div>

                {/* Column 4: Organization Types */}
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3 pb-2 border-b-2 border-[#C0872B]">
                    <div className="w-12 h-12 rounded-full border border-[#EBDCC0] flex items-center justify-center">
                      <LuBuilding2 className="w-4 h-4 text-[#12365E]" />
                    </div>
                    <h3 className="text-[#12365E] text-base font-bold font-['Inter']">
                      Organization Types
                    </h3>
                  </div>
                  <div className="flex flex-col gap-2.5">
                    {organizationLinks.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        className="text-[#12365E] hover:text-[#C0872B] text-[15px] font-normal font-['Inter'] flex items-center justify-between group transition-colors"
                      >
                        <span>{item.label}</span>
                        <LuChevronRight className="w-4 h-4 text-[#9AA6B5] flex-shrink-0 ml-1 group-hover:translate-x-0.5 transition-transform" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Yellow Feature Banner */}
              <div className="w-full bg-[#FDF6EA] border border-[#EBD9B6] rounded-xl p-6 flex items-center justify-between shadow-sm mt-2">
                <div className="flex items-center gap-6">
                  <div className="w-[150px] h-[125px] relative flex-shrink-0">
                    <img
                      src="/navbar/shield.png"
                      alt="Shield Icon"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-[#12365E] text-2xl font-bold font-['Inter'] text-left">
                      Build the enterprise case for ZoikoSuite
                    </span>
                    <span className="text-[#5A6675] text-base font-normal font-['Inter'] text-left">
                      Access tailored business cases, ROI models, and executive
                      briefs to drive alignment and accelerate decisions.
                    </span>
                  </div>
                </div>
                <a
                  href=""
                  className="bg-[#C0872B] hover:bg-[#A9761F] text-[#FFFFFF] px-5 py-3 rounded-lg text-base font-bold font-['Inter'] flex items-center gap-2 transition-colors flex-shrink-0"
                >
                  Explore Executive Resources
                  <LuArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}

        {/* INDUSTRIES MEGA MENU */}
        {activeMenu === "Industries" && (
          <motion.div
            key="industries-menu"
            className="absolute top-24 left-0 w-full bg-[#FFFFFF] border-t border-[#EAEEF4] shadow-2xl z-50 px-12 py-8"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={megaMenuVariants}
            onMouseEnter={() => setActiveMenu("Industries")}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <div className="max-w-[1220px] mx-auto flex flex-col gap-8">
              {/* Header Section */}
              <div className="flex items-center gap-4 border-b border-[#EAEEF4] pb-6">
                <div className="w-[104px] h-[104px] rounded-full bg-[#0F2C57] flex items-center justify-center flex-shrink-0">
                  <LuBuilding2 className="w-10 h-10 text-[#C0872B]" />
                </div>
                <div className="flex flex-col gap-1">
                  <h2 className="text-[#12365E] text-3xl font-bold font-['Inter']">
                    Industries
                  </h2>
                  <p className="text-[#5A6675] text-base font-normal font-['Inter']">
                    Demonstrate governance, jurisdictional intelligence, and
                    evidence controls for high-complexity sectors.
                  </p>
                </div>
              </div>

              {/* 3 Link Columns */}
              <div className="grid grid-cols-3 gap-8">
                {/* Column 1: Regulated Industries */}
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3 pb-2 border-b-2 border-[#C0872B]">
                    <div className="w-12 h-12 rounded-full border border-[#EBDCC0] flex items-center justify-center">
                      <LuShieldCheck className="w-4 h-4 text-[#12365E]" />
                    </div>
                    <h3 className="text-[#12365E] text-base font-bold font-['Inter']">
                      Regulated Industries
                    </h3>
                  </div>
                  <div className="flex flex-col gap-2.5">
                    {regulatedIndustriesLinks.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        className="text-[#12365E] hover:text-[#C0872B] text-[15px] font-normal font-['Inter'] flex items-center justify-between group transition-colors"
                      >
                        <span>{item.label}</span>
                        <LuChevronRight className="w-4 h-4 text-[#9AA6B5] flex-shrink-0 ml-1 group-hover:translate-x-0.5 transition-transform" />
                      </a>
                    ))}
                  </div>
                </div>

                {/* Column 2: Complex Operations */}
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3 pb-2 border-b-2 border-[#C0872B]">
                    <div className="w-12 h-12 rounded-full border border-[#EBDCC0] flex items-center justify-center">
                      <LuRefreshCw className="w-4 h-4 text-[#12365E]" />
                    </div>
                    <h3 className="text-[#12365E] text-base font-bold font-['Inter']">
                      Complex Operations
                    </h3>
                  </div>
                  <div className="flex flex-col gap-2.5">
                    {complexOperationsLinks.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        className="text-[#12365E] hover:text-[#C0872B] text-[15px] font-normal font-['Inter'] flex items-center justify-between group transition-colors"
                      >
                        <span>{item.label}</span>
                        <LuChevronRight className="w-4 h-4 text-[#9AA6B5] flex-shrink-0 ml-1 group-hover:translate-x-0.5 transition-transform" />
                      </a>
                    ))}
                  </div>
                </div>

                {/* Column 3: Knowledge and Growth Sectors */}
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3 pb-2 border-b-2 border-[#C0872B]">
                    <div className="w-12 h-12 rounded-full border border-[#EBDCC0] flex items-center justify-center">
                      <LuGraduationCap className="w-4 h-4 text-[#12365E]" />
                    </div>
                    <h3 className="text-[#12365E] text-base font-bold font-['Inter']">
                      Knowledge and Growth Sectors
                    </h3>
                  </div>
                  <div className="flex flex-col gap-2.5">
                    {knowledgeGrowthLinks.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        className="text-[#12365E] hover:text-[#C0872B] text-[15px] font-normal font-['Inter'] flex items-center justify-between group transition-colors"
                      >
                        <span>{item.label}</span>
                        <LuChevronRight className="w-4 h-4 text-[#9AA6B5] flex-shrink-0 ml-1 group-hover:translate-x-0.5 transition-transform" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Yellow Feature Banner */}
              <div className="w-full bg-[#FDF6EA] border border-[#EBD9B6] rounded-xl p-6 flex items-center justify-between shadow-sm mt-2">
                <div className="flex items-center gap-6">
                  <div className="w-[150px] h-[125px] relative flex-shrink-0">
                    <img
                      src="/navbar/shield.png"
                      alt="Shield Icon"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-[#12365E] text-2xl font-bold font-['Inter'] text-left">
                      Tailored Industry Solutions
                    </span>
                    <span className="text-[#5A6675] text-base font-normal font-['Inter'] text-left">
                      Discover industry-specific governance capabilities and
                      compliance workflows.
                    </span>
                  </div>
                </div>
                <a
                  href=""
                  className="bg-[#C0872B] hover:bg-[#A9761F] text-[#FFFFFF] px-5 py-3 rounded-lg text-base font-bold font-['Inter'] flex items-center gap-2 transition-colors flex-shrink-0"
                >
                  View Industry Solutions
                  <LuArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}

        {/* TRUST MEGA MENU */}
        {activeMenu === "Trust" && (
          <motion.div
            key="trust-menu"
            className="absolute top-24 left-0 w-full bg-[#FFFFFF] border-t border-[#EAEEF4] shadow-2xl z-50 px-12 py-8"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={megaMenuVariants}
            onMouseEnter={() => setActiveMenu("Trust")}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <div className="max-w-[1220px] mx-auto flex flex-col gap-8">
              {/* Header Section */}
              <div className="flex items-center gap-4 border-b border-[#EAEEF4] pb-6">
                <div className="w-[60px] h-[60px] rounded-full flex items-center justify-center flex-shrink-0">
                  <LuShieldCheck className="w-12 h-12 text-[#C0872B]" />
                </div>
                <div className="flex flex-col gap-1">
                  <h2 className="text-[#12365E] text-3xl font-bold font-['Inter']">
                    Trust
                  </h2>
                  <p className="text-[#5A6675] text-base font-normal font-['Inter']">
                    Give procurement, security, legal, compliance, and
                    regulatory stakeholders direct access to trust architecture.
                  </p>
                </div>
              </div>

              {/* 4 Link Columns */}
              <div className="grid grid-cols-4 gap-8">
                {/* Column 1: Security Architecture */}
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-3 pb-2">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center">
                      <LuShieldCheck className="w-8 h-8 text-[#12365E]" />
                    </div>
                    <h3 className="text-[#12365E] text-base font-bold font-['Inter']">
                      Security Architecture
                    </h3>
                  </div>
                  <div className="flex flex-col gap-2.5">
                    {securityArchitectureLinks.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        className="text-[#12365E] hover:text-[#C0872B] text-[15px] font-normal font-['Inter'] flex items-center justify-between group transition-colors"
                      >
                        <span>{item.label}</span>
                        <LuChevronRight className="w-4 h-4 text-[#9AA6B5] flex-shrink-0 ml-1 group-hover:translate-x-0.5 transition-transform" />
                      </a>
                    ))}
                  </div>
                </div>

                {/* Column 2: Compliance Framework */}
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-3 pb-2">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center">
                      <LuClipboardCheck className="w-8 h-8 text-[#C0872B]" />
                    </div>
                    <h3 className="text-[#12365E] text-base font-bold font-['Inter']">
                      Compliance Framework
                    </h3>
                  </div>
                  <div className="flex flex-col gap-2.5">
                    {complianceFrameworkLinks.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        className="text-[#12365E] hover:text-[#C0872B] text-[15px] font-normal font-['Inter'] flex items-center justify-between group transition-colors"
                      >
                        <span>{item.label}</span>
                        <LuChevronRight className="w-4 h-4 text-[#9AA6B5] flex-shrink-0 ml-1 group-hover:translate-x-0.5 transition-transform" />
                      </a>
                    ))}
                  </div>
                </div>

                {/* Column 3: Audit and Assurance */}
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-3 pb-2">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center">
                      <LuScale className="w-8 h-8 text-[#12365E]" />
                    </div>
                    <h3 className="text-[#12365E] text-base font-bold font-['Inter']">
                      Audit and Assurance
                    </h3>
                  </div>
                  <div className="flex flex-col gap-2.5">
                    {auditAssuranceLinks.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        className="text-[#12365E] hover:text-[#C0872B] text-[15px] font-normal font-['Inter'] flex items-center justify-between group transition-colors"
                      >
                        <span>{item.label}</span>
                        <LuChevronRight className="w-4 h-4 text-[#9AA6B5] flex-shrink-0 ml-1 group-hover:translate-x-0.5 transition-transform" />
                      </a>
                    ))}
                  </div>
                </div>

                {/* Column 4: Data Sovereignty */}
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-3 pb-2">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center">
                      <LuGlobe className="w-8 h-8 text-[#12365E]" />
                    </div>
                    <h3 className="text-[#12365E] text-base font-bold font-['Inter']">
                      Data Sovereignty
                    </h3>
                  </div>
                  <div className="flex flex-col gap-2.5">
                    {dataSovereigntyLinks.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        className="text-[#12365E] hover:text-[#C0872B] text-[15px] font-normal font-['Inter'] flex items-center justify-between group transition-colors"
                      >
                        <span>{item.label}</span>
                        <LuChevronRight className="w-4 h-4 text-[#9AA6B5] flex-shrink-0 ml-1 group-hover:translate-x-0.5 transition-transform" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Navy Banner with Vector Badge */}
              <div className="w-full bg-[#0F2C57] rounded-xl p-6 flex items-center justify-between shadow-md mt-2">
                <div className="flex items-center gap-6">
                  {/* Circular Shield Badge */}
                  <div className="w-16 h-16 rounded-full border-2 border-[#C0872B] bg-[#0A1F3E] flex items-center justify-center flex-shrink-0">
                    <LuShieldCheck className="w-8 h-8 text-[#C0872B]" />
                  </div>
                  <span className="text-[#FFFFFF] text-2xl font-bold font-['Inter'] text-left">
                    Trust status must use verified, status-qualified language.
                  </span>
                </div>
                <a
                  href=""
                  className="bg-[#D3A04C] hover:bg-[#C0872B] text-[#0F2C57] px-6 py-3.5 rounded-lg text-base font-bold font-['Inter'] flex items-center gap-2 transition-colors flex-shrink-0"
                >
                  Visit the Trust Center
                  <LuArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}

        {/* RESOURCES MEGA MENU */}
        {activeMenu === "Resources" && (
          <motion.div
            key="resources-menu"
            className="absolute top-24 left-0 w-full bg-[#FFFFFF] border-t border-[#EAEEF4] shadow-2xl z-50 px-12 py-8"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={megaMenuVariants}
            onMouseEnter={() => setActiveMenu("Resources")}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <div className="max-w-[1220px] mx-auto flex flex-col gap-8">
              {/* Header Section */}
              <div className="flex items-center gap-4 border-b border-[#EAEEF4] pb-6">
                <div className="w-[104px] h-[104px] rounded-full bg-[#FDF6EA] flex items-center justify-center flex-shrink-0">
                  <LuBookOpen className="w-10 h-10 text-[#C0872B]" />
                </div>
                <div className="flex flex-col gap-1">
                  <h2 className="text-[#12365E] text-3xl font-bold font-['Inter']">
                    Resources
                  </h2>
                  <p className="text-[#5A6675] text-base font-normal font-['Inter']">
                    Support discovery, education, evaluation, implementation,
                    and customer success.
                  </p>
                </div>
              </div>

              {/* 4 Link Columns */}
              <div className="grid grid-cols-4 gap-8">
                {/* Column 1: Learn */}
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3 pb-2 border-b-2 border-[#C0872B]">
                    <div className="w-12 h-12 rounded-full border border-[#EBDCC0] bg-[#FDF6EA] flex items-center justify-center">
                      <LuGraduationCap className="w-4 h-4 text-[#C0872B]" />
                    </div>
                    <h3 className="text-[#12365E] text-base font-bold font-['Inter']">
                      Learn
                    </h3>
                  </div>
                  <div className="flex flex-col gap-2.5">
                    {learnLinks.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        className="text-[#12365E] hover:text-[#C0872B] text-[15px] font-normal font-['Inter'] flex items-center justify-between group transition-colors"
                      >
                        <span>{item.label}</span>
                        <LuChevronRight className="w-4 h-4 text-[#9AA6B5] flex-shrink-0 ml-1 group-hover:translate-x-0.5 transition-transform" />
                      </a>
                    ))}
                  </div>
                </div>

                {/* Column 2: Executive Resources */}
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3 pb-2 border-b-2 border-[#C0872B]">
                    <div className="w-12 h-12 rounded-full border border-[#EBDCC0] bg-[#FDF6EA] flex items-center justify-center">
                      <LuUser className="w-4 h-4 text-[#C0872B]" />
                    </div>
                    <h3 className="text-[#12365E] text-base font-bold font-['Inter']">
                      Executive Resources
                    </h3>
                  </div>
                  <div className="flex flex-col gap-2.5">
                    {execResourcesLinks.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        className="text-[#12365E] hover:text-[#C0872B] text-[15px] font-normal font-['Inter'] flex items-center justify-between group transition-colors"
                      >
                        <span>{item.label}</span>
                        <LuChevronRight className="w-4 h-4 text-[#9AA6B5] flex-shrink-0 ml-1 group-hover:translate-x-0.5 transition-transform" />
                      </a>
                    ))}
                  </div>
                </div>

                {/* Column 3: Architecture & Technical */}
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3 pb-2 border-b-2 border-[#C0872B]">
                    <div className="w-12 h-12 rounded-full border border-[#EBDCC0] bg-[#FDF6EA] flex items-center justify-center">
                      <LuCpu className="w-4 h-4 text-[#C0872B]" />
                    </div>
                    <h3 className="text-[#12365E] text-base font-bold font-['Inter']">
                      Architecture & Technical
                    </h3>
                  </div>
                  <div className="flex flex-col gap-2.5">
                    {techArchitectureLinks.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        className="text-[#12365E] hover:text-[#C0872B] text-[15px] font-normal font-['Inter'] flex items-center justify-between group transition-colors"
                      >
                        <span>{item.label}</span>
                        <LuChevronRight className="w-4 h-4 text-[#9AA6B5] flex-shrink-0 ml-1 group-hover:translate-x-0.5 transition-transform" />
                      </a>
                    ))}
                  </div>
                </div>

                {/* Column 4: Customer Resources */}
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3 pb-2 border-b-2 border-[#C0872B]">
                    <div className="w-12 h-12 rounded-full border border-[#EBDCC0] bg-[#FDF6EA] flex items-center justify-center">
                      <LuUserCheck className="w-4 h-4 text-[#C0872B]" />
                    </div>
                    <h3 className="text-[#12365E] text-base font-bold font-['Inter']">
                      Customer Resources
                    </h3>
                  </div>
                  <div className="flex flex-col gap-2.5">
                    {customerResourcesLinks.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        className="text-[#12365E] hover:text-[#C0872B] text-[15px] font-normal font-['Inter'] flex items-center justify-between group transition-colors"
                      >
                        <span>{item.label}</span>
                        <LuChevronRight className="w-4 h-4 text-[#9AA6B5] flex-shrink-0 ml-1 group-hover:translate-x-0.5 transition-transform" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Yellow Feature Banner */}
              <div className="w-full bg-[#FDF6EA] border border-[#EBD9B6] rounded-xl p-6 flex items-center justify-between shadow-sm mt-2 relative overflow-hidden">
                <div className="flex items-center gap-6 relative z-10">
                  <div className="w-[120px] h-[95px] flex items-center justify-center flex-shrink-0 relative">
                    <svg
                      viewBox="0 0 100 120"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-full h-full"
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

                  <span className="text-[#12365E] text-2xl font-bold font-['Inter'] text-left">
                    Why governance must live inside execution
                  </span>
                </div>
                <a
                  href=""
                  className="bg-[#C0872B] hover:bg-[#A9761F] text-[#FFFFFF] px-5 py-3 rounded-lg text-base font-bold font-['Inter'] flex items-center gap-2 transition-colors flex-shrink-0 relative z-10"
                >
                  Read the Architecture Brief
                  <LuArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}

        {/* COMPANY MEGA MENU */}
        {activeMenu === "Company" && (
          <motion.div
            key="company-menu"
            className="absolute top-24 left-0 w-full bg-[#FFFFFF] border-t border-[#EAEEF4] shadow-2xl z-50 px-12 py-8"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={megaMenuVariants}
            onMouseEnter={() => setActiveMenu("Company")}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <div className="max-w-[1220px] mx-auto flex flex-col gap-8">
              {/* Header Section */}
              <div className="flex items-center gap-4 border-b border-[#EAEEF4] pb-6">
                <div className="w-[104px] h-[104px] rounded-full bg-[#FDF6EA] flex items-center justify-center flex-shrink-0">
                  <LuBuilding2 className="w-10 h-10 text-[#12365E]" />
                </div>
                <div className="flex flex-col gap-1">
                  <h2 className="text-[#12365E] text-3xl font-bold font-['Inter']">
                    Company
                  </h2>
                  <p className="text-[#5A6675] text-base font-normal font-['Inter']">
                    Establish corporate credibility, leadership, partnerships,
                    careers, communications, and institutional identity.
                  </p>
                </div>
              </div>

              {/* 3 Link Columns */}
              <div className="grid grid-cols-3 gap-8">
                {/* Column 1: About */}
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3 pb-2 border-b-2 border-[#C0872B]">
                    <div className="w-12 h-12 rounded-full border border-[#EBDCC0] bg-[#FDF6EA] flex items-center justify-center">
                      <LuUsers className="w-4 h-4 text-[#C0872B]" />
                    </div>
                    <h3 className="text-[#12365E] text-base font-bold font-['Inter']">
                      About
                    </h3>
                  </div>
                  <div className="flex flex-col gap-2.5">
                    {aboutLinks.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        className="text-[#12365E] hover:text-[#C0872B] text-[15px] font-normal font-['Inter'] flex items-center justify-between group transition-colors"
                      >
                        <span>{item.label}</span>
                        <LuChevronRight className="w-4 h-4 text-[#9AA6B5] flex-shrink-0 ml-1 group-hover:translate-x-0.5 transition-transform" />
                      </a>
                    ))}
                  </div>
                </div>

                {/* Column 2: Ecosystem */}
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3 pb-2 border-b-2 border-[#C0872B]">
                    <div className="w-12 h-12 rounded-full border border-[#EBDCC0] bg-[#FDF6EA] flex items-center justify-center">
                      <LuNetwork className="w-4 h-4 text-[#C0872B]" />
                    </div>
                    <h3 className="text-[#12365E] text-base font-bold font-['Inter']">
                      Ecosystem
                    </h3>
                  </div>
                  <div className="flex flex-col gap-2.5">
                    {ecosystemLinks.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        className="text-[#12365E] hover:text-[#C0872B] text-[15px] font-normal font-['Inter'] flex items-center justify-between group transition-colors"
                      >
                        <span>{item.label}</span>
                        <LuChevronRight className="w-4 h-4 text-[#9AA6B5] flex-shrink-0 ml-1 group-hover:translate-x-0.5 transition-transform" />
                      </a>
                    ))}
                  </div>
                </div>

                {/* Column 3: Company */}
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3 pb-2 border-b-2 border-[#C0872B]">
                    <div className="w-12 h-12 rounded-full border border-[#EBDCC0] bg-[#FDF6EA] flex items-center justify-center">
                      <LuBriefcase className="w-4 h-4 text-[#C0872B]" />
                    </div>
                    <h3 className="text-[#12365E] text-base font-bold font-['Inter']">
                      Company
                    </h3>
                  </div>
                  <div className="flex flex-col gap-2.5">
                    {companyLinks.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        className="text-[#12365E] hover:text-[#C0872B] text-[15px] font-normal font-['Inter'] flex items-center justify-between group transition-colors"
                      >
                        <span>{item.label}</span>
                        <LuChevronRight className="w-4 h-4 text-[#9AA6B5] flex-shrink-0 ml-1 group-hover:translate-x-0.5 transition-transform" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Yellow Feature Banner with Heritage Image */}
              <div className="w-full bg-[#FDF6EA] border border-[#EBD9B6] rounded-xl p-6 flex items-center justify-between shadow-sm mt-2">
                <div className="flex items-center gap-6">
                  <div className="w-[150px] h-[125px] relative flex-shrink-0">
                    <img
                      src="/navbar/heritage.png"
                      alt="Heritage Icon"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-[#12365E] text-2xl font-bold font-['Inter'] text-left">
                    Built from 32 years of professional <br /> and operating
                    experience
                  </span>
                </div>
                <a
                  href=""
                  className="bg-[#C0872B] hover:bg-[#A9761F] text-[#FFFFFF] px-5 py-3 rounded-lg text-base font-bold font-['Inter'] flex items-center gap-2 transition-colors flex-shrink-0"
                >
                  Read Our Story
                  <LuArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
