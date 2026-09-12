"use client";

import React, { useState } from "react";

interface ChallengeData {
  id: string;
  title: string;
  description: string;
  numberText: string;
  signal: string;
  scope: string;
  source: string;
  governance: string;
  authority: string;
  evidence: string;
  exception: string;
  handoff: string;
  monitor: string;
  boundary: string;
  nextStepTitle: string;
}

const challengeDetails: ChallengeData[] = [
  {
    id: "01",
    title: "Financial Governance",
    description:
      "Payment decisions, approvals, workflows, entity and currency scope, and handoffs to execution instruments.",
    numberText: "01 of 10 · Proof framework",
    signal:
      "A payment approval exceeded its delegated limit. Finance workflow, 09:12 today.",
    scope:
      "Montador UK Ltd · United Kingdom · finance · payment instruction PIN-4471.",
    source:
      "ERP ledger authoritative, current. Banking platform contributing, current.",
    governance:
      "Payment authority threshold policy v3 · effective 15-Oct-2025 · scheduled, not yet in force.",
    authority:
      "Treasury Director within scope; requested exception from approving.",
    evidence:
      "Required 5 · received 4 · missing 1 discount approver record · none restricted.",
    exception:
      "Prior threshold exception expired 31-Jul-2026 and was not renewed.",
    handoff:
      "Execution would pass to the banking platform. Approval and execution are separate permissions.",
    monitor:
      "Reconciliation condition outstanding until transaction confirms.",
    boundary:
      "No accounting conclusion, and no guaranteed release or compliance outcome.",
    nextStepTitle: "Discuss Financial Governance",
  },
  {
    id: "02",
    title: "Global Payroll Governance",
    description:
      "Pre-run reviews, approvals, jurisdictions, contractors, execution and post-run audit.",
    numberText: "02 of 10 · Proof framework",
    signal:
      "Pay-run release requires an obligation review that has no assigned reviewer.",
    scope:
      "New Netherlands entity · Netherlands · PRUN-2026-08.",
    source:
      "Payroll provider authoritative, input incomplete. Local tax tables contributing.",
    governance:
      "Statutory payroll signoff policy v4 · effective 01-Jan-2026.",
    authority:
      "Payroll Controller within scope; segregation flaw prevents solo approval.",
    evidence:
      "Required 7 · received 3 · 1 restricted evidence artifact pending legal signoff.",
    exception:
      "Unregistered Dutch branch withholding tax schedule missing.",
    handoff:
      "Direct deposit execution paused until Dutch tax office registration validated.",
    monitor:
      "Pre-release delta calculation vs prior month baseline monitored continuously.",
    boundary:
      "No tax advice provided, and no guarantee against statutory penalty assessments.",
    nextStepTitle: "Discuss Payroll Governance",
  },
  {
    id: "03",
    title: "Cross-Border Compliance",
    description:
      "Entity and multi-country obligations, statutory dates, effective dates, nexus and handover.",
    numberText: "03 of 10 · Proof framework",
    signal:
      "Permanent establishment threshold indicator triggered in Germany via contractor presence.",
    scope:
      "Montador Germany GmbH · Frankfurt office · Operations scope.",
    source:
      "Local tax authority registry authoritative. HR contract store contributing.",
    governance:
      "EU cross-border service supply policy v2 · effective 10-Jun-2025.",
    authority:
      "Regional Tax Director & Corporate Secretary joint approval required.",
    evidence:
      "Required 6 · received 5 · missing verified VAT reverse-charge certification.",
    exception:
      "Retroactive nexus determination under assessment by external counsel.",
    handoff:
      "Handoff to local tax filing agent pending jurisdiction registration confirmation.",
    monitor:
      "Trailing 183-day employee physical presence tracker monitored weekly.",
    boundary:
      "No permanent establishment legal opinion, and no local statutory representation.",
    nextStepTitle: "Discuss Cross-Border Compliance",
  },
  {
    id: "04",
    title: "Contract Governance",
    description:
      "Contract context, obligations, authority, approvals, execution handoffs and evidence.",
    numberText: "04 of 10 · Proof framework",
    signal:
      "Indemnity clause uncapped in enterprise SaaS customer redline agreement.",
    scope:
      "Zoiko Commercial · North America enterprise sales · Contract CTR-8802.",
    source:
      "Contract Lifecycle Management system authoritative. Legal playbook contributing.",
    governance:
      "Commercial liability and risk ceiling guideline v5.1 · in force.",
    authority:
      "General Counsel dual approval mandatory for liability terms above $1M.",
    evidence:
      "Required 4 · received 4 · fully signed deviation memorandum recorded.",
    exception:
      "Customer counter-party demanded mutual non-solicitation deviation.",
    handoff:
      "Signature packet routing via e-signature provider with locked audit trail.",
    monitor:
      "Renewal trigger and milestone obligations tracked against deliverables ledger.",
    boundary:
      "Does not constitute legal counsel or guarantee enforceable dispute resolution.",
    nextStepTitle: "Discuss Contract Governance",
  },
  {
    id: "05",
    title: "Audit Readiness",
    description:
      "Evidence completeness, producer rims, control scope, exceptions and segregation trails.",
    numberText: "05 of 10 · Proof framework",
    signal:
      "SOC 2 Type II evidence window closing with 2 controls lacking signed test logs.",
    scope:
      "Platform Engineering & Cloud Operations · All production AWS regions.",
    source:
      "Access management directory authoritative. CloudTrail log store contributing.",
    governance:
      "Annual continuous audit control framework v3.0 · mandatory.",
    authority:
      "Chief Information Security Officer & External Audit Lead within scope.",
    evidence:
      "Required 14 · received 12 · 2 control logs awaiting cryptographic timestamping.",
    exception:
      "Emergency access role utilized during incident INC-441 without timely deprovision.",
    handoff:
      "Evidence pack export to external audit firm portal with cryptographic digest.",
    monitor:
      "Continuous control monitoring alert engine evaluated every 15 minutes.",
    boundary:
      "Does not issue audit opinion, certification, or formal attestation report.",
    nextStepTitle: "Discuss Audit Readiness",
  },
  {
    id: "06",
    title: "Entity Management",
    description:
      "Entity context, ownership and responsibility, jurisdictions, obligation runs across entity governance.",
    numberText: "06 of 10 · Proof framework",
    signal:
      "Annual return filing deadline approaching for Singapore operating subsidiary.",
    scope:
      "Montador Singapore Pte. Ltd. · Singapore jurisdiction · Corporate Secretarial.",
    source:
      "ACRA statutory registry authoritative. Internal cap table ledger contributing.",
    governance:
      "Global legal entity maintenance policy v1.8 · in force.",
    authority:
      "Resident Director & Corporate Secretary authority required for submission.",
    evidence:
      "Required 5 · received 5 · signed financial statements and directors report logged.",
    exception:
      "Change in beneficial ownership disclosure pending notarized documentation.",
    handoff:
      "Electronic lodgment to statutory registrar through licensed corporate secretary.",
    monitor:
      "Statutory good standing status monitored via registry API pulse monthly.",
    boundary:
      "Does not act as corporate secretary of record or replace certified local agents.",
    nextStepTitle: "Discuss Entity Management",
  },
  {
    id: "07",
    title: "Regulatory Reporting",
    description:
      "Source-qualified reporting obligations, review, evidence and submission handoff.",
    numberText: "07 of 10 · Proof framework",
    signal:
      "Quarterly statutory liquidity disclosure flagged for calculation reconciliation variance.",
    scope:
      "Financial Services Entity · UK FCA regulated branch · PRU-110 return.",
    source:
      "Risk capital database authoritative. Regulatory taxonomy engine contributing.",
    governance:
      "FCA supervisory reporting framework v2 · mandatory quarterly submission.",
    authority:
      "Compliance Officer (SMF16) & Chief Risk Officer sign-off mandated.",
    evidence:
      "Required 8 · received 7 · capital buffer reconciliation sheet under review.",
    exception:
      "Model validation variance noted on unrealized hedge accounting balances.",
    handoff:
      "RegData portal XML submission pipeline verified with dry-run schema check.",
    monitor:
      "Post-submission acknowledgment receipt verification and schema validation.",
    boundary:
      "Does not provide regulatory defense, statutory filings sign-off, or audit clearance.",
    nextStepTitle: "Discuss Regulatory Reporting",
  },
  {
    id: "08",
    title: "Workforce Compliance",
    description:
      "Workforce obligations, payroll and HR context, policy privacy in operations.",
    numberText: "08 of 10 · Proof framework",
    signal:
      "Independent contractor classification flagged under updated worker classification laws.",
    scope:
      "Engineering Contractor cohort · Spain & Portugal · 14 service agreements.",
    source:
      "HRIS contractor database authoritative. Vendor billing system contributing.",
    governance:
      "Global workforce classification standard v4 · in force.",
    authority:
      "VP People & Head of Employment Legal joint approval required.",
    evidence:
      "Required 6 · received 4 · missing updated tax resident certificates.",
    exception:
      "Right to control assessment indicates potential misclassification risk.",
    handoff:
      "Transition workflow to Employer of Record (EOR) service provider.",
    monitor:
      "Hours logged and direction received monitored against contractor safe harbor rules.",
    boundary:
      "Does not provide legal employment determination or protect against co-employment liability.",
    nextStepTitle: "Discuss Workforce Compliance",
  },
  {
    id: "09",
    title: "Revenue Integrity",
    description:
      "Revenue entitlement and context, approvals, exemptions, reconciliations and post-audit.",
    numberText: "09 of 10 · Proof framework",
    signal:
      "ASC 606 / IFRS 15 multi-element contract allocation discrepancy detected on bundle deal.",
    scope:
      "Zoiko Enterprise · Q3 SaaS subscription + Professional Services bundle.",
    source:
      "Billing platform authoritative. Salesforce CPQ & NetSuite contributing.",
    governance:
      "Revenue recognition accounting standard policy v6 · in force.",
    authority:
      "Director of Technical Accounting approval required before invoice release.",
    evidence:
      "Required 5 · received 5 · standalone selling price (SSP) documentation validated.",
    exception:
      "Custom SLA performance penalty clause requires distinct revenue reserve.",
    handoff:
      "Subledger revenue schedule generation and deferred revenue balance posting.",
    monitor:
      "Contract asset vs liability balance monitored throughout multi-year term.",
    boundary:
      "Does not constitute independent auditor sign-off on revenue recognition treatment.",
    nextStepTitle: "Discuss Revenue Integrity",
  },
  {
    id: "10",
    title: "Operational Risk Management",
    description:
      "Cross-functional evaluations, obligations, control signals, accountable owners and evidence.",
    numberText: "10 of 10 · Proof framework",
    signal:
      "Critical single-point-of-failure flagged in third-party API payment processing path.",
    scope:
      "Core Banking Integration · Global payments clearing gateway.",
    source:
      "Enterprise Risk Management registry authoritative. Incident log contributing.",
    governance:
      "Third-party risk management and operational resilience policy v3.2.",
    authority:
      "Chief Operating Officer & Head of Resiliency approval required.",
    evidence:
      "Required 7 · received 6 · disaster recovery failover drill certificate current.",
    exception:
      "Secondary gateway fallback latency exceeded 45-second operational tolerance.",
    handoff:
      "Escalation ticket routed to Payment Operations on-call engineering lead.",
    monitor:
      "Real-time uptime and transaction success rate monitoring with automated circuit breaker.",
    boundary:
      "Does not eliminate operational outage risk or replace business continuity execution.",
    nextStepTitle: "Discuss Operational Risk Management",
  },
];

export default function MobileTenChallengesView() {
  const [selectedId, setSelectedId] = useState<string>("01");
  const current = challengeDetails.find((c) => c.id === selectedId) || challengeDetails[0];

  return (
    <div className="w-full flex flex-col gap-6">
      {/* 10 Challenge Cards in a 2-Column Mobile Grid */}
      <div className="grid grid-cols-2 gap-2.5">
        {challengeDetails.map((c) => {
          const isSelected = selectedId === c.id;
          return (
            <button
              key={c.id}
              type="button"
              onClick={() => setSelectedId(c.id)}
              className={`text-left rounded-xl p-3 flex flex-col justify-between transition-all duration-150 border ${
                isSelected
                  ? "border-[#1E5B80] bg-[#F0F6FA] shadow-sm ring-1 ring-[#1E5B80]"
                  : "border-slate-200 bg-white hover:border-slate-300"
              }`}
            >
              <div>
                <span className="text-[10px] font-mono text-[#c5a059] block mb-1 font-bold">
                  {c.id}
                </span>
                <h4
                  className={`text-xs font-bold leading-snug mb-1.5 ${
                    isSelected ? "text-[#08222F]" : "text-slate-900"
                  }`}
                >
                  {c.title}
                </h4>
                <p className="text-[10.5px] text-slate-500 leading-normal line-clamp-3">
                  {c.description}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Terminal Card: Proof Framework */}
      <div className="w-full rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-lg">
        {/* Terminal Header */}
        <div className="bg-[#08222F] px-4 py-3 flex items-center justify-between gap-2 border-b border-[#14425a]">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs sm:text-sm font-bold text-white tracking-tight">
              {current.title}
            </span>
            <span className="px-2 py-0.5 rounded-full text-[9px] font-mono text-slate-300 border border-slate-600 bg-slate-800/60">
              {current.numberText}
            </span>
          </div>
          <span className="px-2 py-0.5 rounded text-[8.5px] sm:text-[9px] font-mono font-bold uppercase tracking-wider bg-rose-950 text-rose-300 border border-rose-800/80 shrink-0">
            SYNTHETIC — NO LIVE ACTION
          </span>
        </div>

        {/* 10 Proof Fields Rows */}
        <div className="p-4 sm:p-5 flex flex-col gap-3 text-xs">
          {/* 1. SIGNAL */}
          <div className="flex flex-col gap-1 pb-2.5 border-b border-slate-100">
            <span className="text-[9.5px] font-mono font-semibold tracking-wider text-slate-400 uppercase">
              SIGNAL
            </span>
            <p className="text-slate-800 text-[11.5px] leading-relaxed font-normal">
              {current.signal}
            </p>
          </div>

          {/* 2. SCOPE */}
          <div className="flex flex-col gap-1 pb-2.5 border-b border-slate-100">
            <span className="text-[9.5px] font-mono font-semibold tracking-wider text-slate-400 uppercase">
              SCOPE
            </span>
            <p className="text-slate-800 text-[11.5px] leading-relaxed font-normal">
              {current.scope}
            </p>
          </div>

          {/* 3. SOURCE */}
          <div className="flex flex-col gap-1 pb-2.5 border-b border-slate-100">
            <span className="text-[9.5px] font-mono font-semibold tracking-wider text-slate-400 uppercase">
              SOURCE
            </span>
            <p className="text-slate-800 text-[11.5px] leading-relaxed font-normal">
              {current.source}
            </p>
          </div>

          {/* 4. GOVERNANCE */}
          <div className="flex flex-col gap-1 pb-2.5 border-b border-slate-100">
            <span className="text-[9.5px] font-mono font-semibold tracking-wider text-slate-400 uppercase">
              GOVERNANCE
            </span>
            <p className="text-slate-800 text-[11.5px] leading-relaxed font-normal">
              {current.governance}
            </p>
          </div>

          {/* 5. AUTHORITY */}
          <div className="flex flex-col gap-1 pb-2.5 border-b border-slate-100">
            <span className="text-[9.5px] font-mono font-semibold tracking-wider text-slate-400 uppercase">
              AUTHORITY
            </span>
            <p className="text-slate-800 text-[11.5px] leading-relaxed font-normal">
              {current.authority}
            </p>
          </div>

          {/* 6. EVIDENCE */}
          <div className="flex flex-col gap-1 pb-2.5 border-b border-slate-100">
            <span className="text-[9.5px] font-mono font-semibold tracking-wider text-slate-400 uppercase">
              EVIDENCE
            </span>
            <p className="text-slate-800 text-[11.5px] leading-relaxed font-normal">
              {current.evidence}
            </p>
          </div>

          {/* 7. EXCEPTION */}
          <div className="flex flex-col gap-1 pb-2.5 border-b border-slate-100">
            <span className="text-[9.5px] font-mono font-semibold tracking-wider text-slate-400 uppercase">
              EXCEPTION
            </span>
            <p className="text-slate-800 text-[11.5px] leading-relaxed font-normal">
              {current.exception}
            </p>
          </div>

          {/* 8. HANDOFF / EXECUTION */}
          <div className="flex flex-col gap-1 pb-2.5 border-b border-slate-100">
            <span className="text-[9.5px] font-mono font-semibold tracking-wider text-slate-400 uppercase">
              HANDOFF / EXECUTION
            </span>
            <p className="text-slate-800 text-[11.5px] leading-relaxed font-normal">
              {current.handoff}
            </p>
          </div>

          {/* 9. MONITOR */}
          <div className="flex flex-col gap-1 pb-2.5 border-b border-slate-100">
            <span className="text-[9.5px] font-mono font-semibold tracking-wider text-slate-400 uppercase">
              MONITOR
            </span>
            <p className="text-slate-800 text-[11.5px] leading-relaxed font-normal">
              {current.monitor}
            </p>
          </div>

          {/* 10. BOUNDARY — WHAT THIS PROOF DOES NOT ESTABLISH */}
          <div className="rounded-lg bg-rose-50/70 border border-rose-200/80 p-3 flex flex-col gap-1">
            <span className="text-[9.5px] font-mono font-bold tracking-wider text-rose-700 uppercase">
              BOUNDARY — WHAT THIS PROOF DOES NOT ESTABLISH
            </span>
            <p className="text-rose-800 text-[11.5px] leading-relaxed font-medium">
              {current.boundary}
            </p>
          </div>

          {/* NEXT STEP Action Bar */}
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100">
            <span className="text-[9.5px] font-mono text-slate-400 mr-1 uppercase">
              NEXT STEP
            </span>
            <button
              type="button"
              className="px-3.5 py-1.5 rounded-lg bg-[#08222F] text-white text-[11px] font-semibold hover:bg-[#0F476A] transition-colors"
            >
              {current.nextStepTitle}
            </button>
            <button
              type="button"
              disabled
              className="px-3.5 py-1.5 rounded-lg border border-slate-200 bg-slate-50 text-slate-400 text-[11px] font-medium cursor-not-allowed"
            >
              Child destination (restricted)
            </button>
          </div>
        </div>
      </div>

      {/* Advisory Callout Note below Terminal Card */}
      <div className="rounded-xl bg-[#FAF3E7] border border-[#ECD9BA] p-4 text-left">
        <p className="text-[11.5px] text-slate-700 leading-relaxed font-normal">
          All ten challenges use the same ten proof fields &mdash; signal, scope, source, governance, authority, evidence, exception, handoff, monitor and boundary &mdash; so they can be compared on equal terms. Selecting a challenge updates this framework and the URL fragment to reveal each one&apos;s forward link work.
        </p>
      </div>
    </div>
  );
}
