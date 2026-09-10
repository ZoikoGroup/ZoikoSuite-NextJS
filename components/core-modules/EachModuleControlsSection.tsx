"use client";

import React from "react";
import { motion } from "framer-motion";

interface ModuleDetailCard {
  title: string;
  pill?: {
    label: string;
    variant: "amber" | "green";
  };
  pill2?: {
    label: string;
    variant: "amber" | "green";
  };
  summary: string;
  scope: string;
  source: string;
  boundary: string;
  adjacent: string;
  common: string;
  chips?: string[];
  boundaryBoxText?: string;
  actionText?: string;
}

const financeCards: ModuleDetailCard[] = [
  {
    title: "Accounting & General Ledger",
    summary: "Period governance and subledger authority around postings; policy and evidence records around journals and exceptions.",
    scope: "Period close, journals, exceptions, allocations",
    source: "Authority / evidence / review",
    boundary: "ERP / General Ledger / subledgers continue to post",
    adjacent: "AP, AR, Treasury, Tax",
    common: "Mostly external system of record",
    chips: ["PERIOD CONTROL", "SUBLEDGER", "JOURNAL APPROVAL", "ALLOCATION CONTROL"],
    boundaryBoxText: "Non-displacing posting boundary: journal lines post to external General Ledger; ZoikoSuite validates thresholds and records policy sign-off.",
    actionText: "To General Ledger",
  },
  {
    title: "Accounts Payable",
    summary: "System of execution for invoice receipt, matching, state, approval and custody; and separate payment-proposal governance boundary.",
    scope: "All vendor / non-payroll expenditures",
    source: "Authority / exception / queue / policy enforcement",
    boundary: "ERP accounts payable / bill payment / banking / treasury",
    adjacent: "Procurement, Treasury, GL",
    common: "Implementation-defined",
    chips: ["3-WAY MATCH", "PAYMENT PROPOSAL", "DISPUTES", "EXPENSE POLICY"],
    boundaryBoxText: "No execution of bank payments directly: all payment release is transmitted to external banking systems.",
    actionText: "View in Accounts Payable",
  },
  {
    title: "Accounts Receivable",
    summary: "Governs customer billing data synchronization, dispute evidence, payment collection state, and contractual compliance.",
    scope: "All receivables, invoices, billing collections",
    source: "Authority / evidence / dispute / collections context",
    boundary: "ERP / billing engines / merchant gateways / bank collections",
    adjacent: "GL, Legal & Contracts",
    common: "Implementation-defined",
    chips: ["DISPUTE EVIDENCE", "COLLECTION LOG", "OFFICIAL RECEIPT"],
    boundaryBoxText: "Non-custodial collection: customer collections remain with merchant and bank gateways; ZoikoSuite tracks the evidentiary lifecycle.",
    actionText: "Inspect in Accounts Receivable",
  },
  {
    title: "Treasury & Cash Position",
    summary: "Multi-bank position cache, liquidity and exposure insights and governed release proposal before transmission to banking channels.",
    scope: "Treasury, CFO / comptroller",
    source: "Banking / treasury / liquidity channels / investment feeds",
    boundary: "Release proposal / execution protocol / external bank accounts",
    adjacent: "AP, GL",
    common: "Usually external system of record",
    chips: ["MULTI-BANK CACHE", "RELEASE PROPOSAL", "EXPOSURE", "TREASURY AUDIT"],
    boundaryBoxText: "No direct banking execution: ZoikoSuite proposes, scores and authorises; external bank feeds remain the authoritative cash balance.",
    actionText: "Review in Cash & Treasury",
  },
];

const workforceCards: ModuleDetailCard[] = [
  {
    title: "Payroll",
    pill: {
      label: "JURISDICTION SENSITIVE",
      variant: "amber",
    },
    summary: "Governs payroll execution, statutory pay obligations and dispute logs within multi-jurisdiction enterprise frameworks.",
    scope: "Payroll calculation / gross-to-net engine / payroll feeds",
    source: "Pay runs, obligations, adjustments, filings",
    boundary: "Release sign-off / statutory audit / payroll distribution",
    adjacent: "HR, Tax, GL",
    common: "Usually external payroll provider",
    chips: ["STATUTORY AUDIT", "JURISDICTION CHECK", "AUDITABLE DISPUTES", "DEDUCTION LOG", "OFFICIAL RECEIPT"],
    boundaryBoxText: "No gross-to-net calculation inside ZoikoSuite: statutory pay calculations remain with certified local payroll engines; ZoikoSuite holds release sign-off and obligation evidence.",
    actionText: "Explore in Payroll Governance",
  },
  {
    title: "Human Resources",
    pill: {
      label: "JURISDICTION SENSITIVE",
      variant: "amber",
    },
    summary: "Provides governed workforce context for operational, systems and commercial events without displacing the underlying HCM.",
    scope: "People administration / lifecycle / worker context feeds",
    source: "Employee context, lifecycle, roles / departments",
    boundary: "Worker changes / role boundary / return authority",
    adjacent: "Payroll, Legal & Contracts",
    common: "Usually external HCM system of record",
    chips: ["HCM CONTEXT", "WORKER LIFECYCLE", "ROLE BOUNDARIES", "EVIDENCE"],
    boundaryBoxText: "Not an employee system of record: employee data remains in client HCM; ZoikoSuite maintains role, purpose limitation and non-production testing context.",
    actionText: "Follow in Workforce Context",
  },
];

const taxLegalCards: ModuleDetailCard[] = [
  {
    title: "Tax Management",
    pill: {
      label: "PROFESSIONAL REVIEW",
      variant: "amber",
    },
    summary: "Tracks tax obligations, determinations and filing events across multi-jurisdiction enterprise structures.",
    scope: "Tax engine / calculations / statutory",
    source: "Determinations, filings, obligations, exemptions",
    boundary: "Filing preparation / professional review / submission authority",
    adjacent: "AP, AR, GL, Compliance",
    common: "Implementation-defined",
    chips: ["TAX CALENDAR", "JURISDICTION STATUS", "TAX ENGINE FEED", "PROFESSIONAL REVIEW ROUTE", "FILING EVIDENCE"],
    boundaryBoxText: "No formal tax advisory: tax obligations are mapped against statutory rules and require qualified professional review before sign-off.",
    actionText: "Direct to Tax & Compliance",
  },
  {
    title: "Legal & Contracts",
    pill: {
      label: "PROFESSIONAL REVIEW",
      variant: "amber",
    },
    summary: "Governs contract commitments, obligations, approvals and execution boundaries around commercial terms.",
    scope: "Contract repository / CLM feed / terms / obligations",
    source: "Contracts, clauses, obligations, approvals",
    boundary: "Review criteria / commitment approval / execution authority",
    adjacent: "Procurement, Tax, HR",
    common: "Usually external CLM repository",
    chips: ["OBLIGATION EXTRACT", "SIGN-OFF MATRIX", "PRIVILEGE PROTECTION", "DOCUMENTED EVIDENCE", "LEGAL AUDIT"],
    boundaryBoxText: "Not a legal advice service: extracts obligations and policy constraints, but does not provide legal opinions or corporate counsel representation.",
    actionText: "Trace in Legal & Contracts",
  },
  {
    title: "Compliance & Obligations",
    pill: {
      label: "PROFESSIONAL REVIEW",
      variant: "amber",
    },
    pill2: {
      label: "BUILT ANEW IN ZOIKOSUITE",
      variant: "green",
    },
    summary: "Multi-jurisdiction, cross-domain obligation and evidence system governed from inception. The one module built anew inside ZoikoSuite to unite disparate systems.",
    scope: "Compliance teams / audit / statutory rulebook feeds",
    source: "Obligation calendar, registers, evidence, exemptions",
    boundary: "Integrity model / verified status / event correlation / continuous audit",
    adjacent: "All 10 canonical modules",
    common: "Built inside ZoikoSuite platform",
    chips: ["OBLIGATION CALENDAR", "STATUS AUDIT", "CROSS-DOMAIN", "PROFESSIONAL REVIEW", "EVIDENCE VAULT TRACE"],
    boundaryBoxText: "No guarantee of regulatory immunity: platform provides immutable evidence trails and boundary controls, but cannot claim automatic legal compliance certification without independent audit.",
    actionText: "Open Compliance Register",
  },
];

const commercialCards: ModuleDetailCard[] = [
  {
    title: "Procurement & Commercial Operations",
    summary: "Governs source-to-contract supplier records, approvals and commitments with 3-way match and regulatory obligations.",
    scope: "Procurement / vendor / purchase requests",
    source: "Requisition, supplier, approvals, commitments",
    boundary: "Release approvals / policy register / vendor credentials / integrity checks",
    adjacent: "AP, Legal & Contracts, Compliance & Obligations",
    common: "Shared",
    chips: ["SUPPLIER REGISTRY", "3-WAY MATCH INTEGRITY", "PO POLICY", "APPROVAL DELEGATION", "OFFICIAL CREDENTIALS"],
    boundaryBoxText: "No execution of commercial purchase: sets purchasing rules and checks regulatory compliance, while actual supplier ordering runs through client procurement systems.",
    actionText: "Explore in Commercial Ops",
  },
];

function DetailCard({ card }: { card: ModuleDetailCard }) {
  return (
    <div className="rounded-2xl border border-[#e2ddd3] bg-white p-5 sm:p-6 shadow-xs hover:border-[#c5a059] transition-all flex flex-col justify-between">
      <div>
        {/* Title and Badges */}
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <h3 className="text-base font-bold text-[#08222F] tracking-tight">
            {card.title}
          </h3>
          {card.pill && (
            <span
              className={`px-2 py-0.5 rounded text-[9px] font-mono font-bold uppercase tracking-wider ${
                card.pill.variant === "amber"
                  ? "bg-[#fef3c7] text-[#92400e] border border-[#fde68a]"
                  : "bg-[#f0fdf4] text-[#166534] border border-[#bbf7d0]"
              }`}
            >
              {card.pill.label}
            </span>
          )}
          {card.pill2 && (
            <span className="px-2 py-0.5 rounded text-[9px] font-mono font-bold uppercase tracking-wider bg-[#f0fdf4] text-[#166534] border border-[#bbf7d0]">
              {card.pill2.label}
            </span>
          )}
        </div>

        {/* Summary Description */}
        <p className="text-xs text-[#566573] leading-relaxed mb-4">
          {card.summary}
        </p>

        {/* Key-Value Pairs List */}
        <div className="space-y-1.5 text-[11px] mb-4">
          <div className="flex items-start gap-2">
            <span className="font-mono font-semibold text-[#8fa4b2] uppercase w-20 shrink-0">
              SCOPE:
            </span>
            <span className="text-[#334155] leading-snug">{card.scope}</span>
          </div>

          <div className="flex items-start gap-2">
            <span className="font-mono font-semibold text-[#8fa4b2] uppercase w-20 shrink-0">
              SOURCE:
            </span>
            <span className="text-[#334155] leading-snug">{card.source}</span>
          </div>

          <div className="flex items-start gap-2">
            <span className="font-mono font-semibold text-[#8fa4b2] uppercase w-20 shrink-0">
              BOUNDARY:
            </span>
            <span className="text-[#334155] leading-snug">{card.boundary}</span>
          </div>

          <div className="flex items-start gap-2">
            <span className="font-mono font-semibold text-[#8fa4b2] uppercase w-20 shrink-0">
              ADJACENT:
            </span>
            <span className="text-[#334155] leading-snug">{card.adjacent}</span>
          </div>

          <div className="flex items-start gap-2">
            <span className="font-mono font-semibold text-[#8fa4b2] uppercase w-20 shrink-0">
              COMMON:
            </span>
            <span className="text-[#08222F] font-mono font-medium leading-snug">{card.common}</span>
          </div>
        </div>

        {/* Mobile Control Tags Chips (lg:hidden) */}
        {card.chips && card.chips.length > 0 && (
          <div className="lg:hidden flex flex-wrap gap-1.5 mb-3.5 pt-2 border-t border-[#f1f5f9]">
            {card.chips.map((chip, idx) => (
              <span
                key={idx}
                className="px-2 py-0.5 rounded bg-[#f0f7ff] border border-[#dbeafe] text-[9px] font-mono text-[#1d4ed8] font-medium uppercase"
              >
                {chip}
              </span>
            ))}
          </div>
        )}

        {/* Mobile Boundary Alert Box (lg:hidden) */}
        {card.boundaryBoxText && (
          <div className="lg:hidden p-3 rounded-xl border border-[#fecaca] bg-[#fff5f5] text-[10.5px] text-[#991b1b] leading-relaxed mb-4">
            <span className="font-mono font-bold text-[9px] uppercase tracking-wider block mb-1 text-[#b91c1c]">
              BOUNDARY:
            </span>
            {card.boundaryBoxText}
          </div>
        )}
      </div>

      {/* Action Button & Tour Link */}
      <div className="mt-3 pt-3 border-t border-[#f1f5f9] flex flex-wrap items-center justify-between gap-2">
        <button className="px-3 py-1.5 rounded-lg bg-[#08222F] text-white text-[11px] font-semibold hover:bg-[#12364c] transition-colors">
          {card.actionText || "Explore module"}
        </button>
        <span className="text-[10px] text-[#8fa4b2] font-mono">
          Route to dedicated tour
        </span>
      </div>
    </div>
  );
}

export default function EachModuleControlsSection() {
  return (
    <section id="canonical-modules" className="w-full bg-[#FAF8F5] text-[#0f172a] py-20 px-4 sm:px-6 lg:px-20 flex justify-center border-t border-[#ede9df]">
      <div className="max-w-[1240px] w-full flex flex-col">
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-5 h-[2px] bg-[#c5a059]" />
              <span className="text-[10.5px] font-semibold tracking-[0.2em] text-[#c5a059] uppercase">
                THE TEN CANONICAL MODULES
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#08222F] tracking-tight leading-[1.14]">
              Each module states its controls,
              <br />
              its source position and its
              <br />
              boundary
            </h2>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-5 flex items-center lg:pt-4">
            <p className="text-[#566573] text-[13.5px] sm:text-sm leading-relaxed max-w-[480px]">
              Governance sensitivity is shown on the specific controls that apply: noted as low/medium/high where. Regulated domains carry a visible professional review boundary.
            </p>
          </div>
        </div>

        {/* Domain Group 1: FINANCE */}
        <div className="mb-10">
          <span className="text-[11px] font-mono font-bold tracking-[0.16em] text-[#8fa4b2] uppercase block mb-4">
            FINANCE
          </span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {financeCards.map((card, idx) => (
              <DetailCard key={idx} card={card} />
            ))}
          </div>
        </div>

        {/* Domain Group 2: WORKFORCE */}
        <div className="mb-10">
          <span className="text-[11px] font-mono font-bold tracking-[0.16em] text-[#8fa4b2] uppercase block mb-4">
            WORKFORCE
          </span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {workforceCards.map((card, idx) => (
              <DetailCard key={idx} card={card} />
            ))}
          </div>
        </div>

        {/* Domain Group 3: TAX, LEGAL & COMPLIANCE */}
        <div className="mb-10">
          <span className="text-[11px] font-mono font-bold tracking-[0.16em] text-[#8fa4b2] uppercase block mb-4">
            TAX, LEGAL &amp; COMPLIANCE
          </span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {taxLegalCards.slice(0, 2).map((card, idx) => (
              <DetailCard key={idx} card={card} />
            ))}
          </div>
          {/* Full-width card for Compliance & Obligations */}
          <div className="w-full">
            <DetailCard card={taxLegalCards[2]} />
          </div>
        </div>

        {/* Domain Group 4: COMMERCIAL */}
        <div className="mb-10">
          <span className="text-[11px] font-mono font-bold tracking-[0.16em] text-[#8fa4b2] uppercase block mb-4">
            COMMERCIAL
          </span>
          <div className="w-full">
            <DetailCard card={commercialCards[0]} />
          </div>
        </div>

        {/* Bottom Callout Notice Box */}
        <div className="p-4 sm:p-5 rounded-xl border border-[#eedfc0] bg-[#fdfaf2] text-[#785929]">
          <span className="text-[10px] font-mono font-bold tracking-[0.14em] text-[#92400e] uppercase block mb-1">
            HOW ZOIKOSUITE HANDLES MODULAR ROLLOUT
          </span>
          <p className="text-xs leading-relaxed">
            An “Explore module” link operates only when an approved public route exists. Items or controls not shown on this page reflect enterprise-specific implementation scope that would be co-created. That is deliberate scope, not an omission.
          </p>
        </div>
      </div>
    </section>
  );
}

