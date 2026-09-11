"use client";

import React from "react";
import { MoreHorizontal, AlertCircle } from "lucide-react";

interface StateItem {
  badgeText: string;
  badgeStyle: string;
  description: string;
}

const readinessStates: StateItem[] = [
  {
    badgeText: "READY FOR REVIEW",
    badgeStyle: "border-emerald-500 bg-emerald-50 text-emerald-700",
    description: "All primary ledger reconciliations submitted and dual-signoff verified.",
  },
  {
    badgeText: "PENDING",
    badgeStyle: "border-amber-500 bg-amber-50 text-amber-800",
    description: "Reconciliation variance within acceptable threshold ($25k) awaiting write-off authorization.",
  },
  {
    badgeText: "EXCEPTION RAISED",
    badgeStyle: "border-rose-500 bg-rose-50 text-rose-700",
    description: "Mandatory supporting document missing or statutory compliance limit exceeded.",
  },
  {
    badgeText: "DUAL SIGN-OFF PENDING",
    badgeStyle: "border-sky-500 bg-sky-50 text-sky-700",
    description: "Awaiting secondary executive authorization from CFO or Group Controller.",
  },
  {
    badgeText: "FROZEN / LOCKED",
    badgeStyle: "border-slate-400 bg-slate-100 text-slate-700",
    description: "Period closed against further ledger mutations; read-only console enabled.",
  },
  {
    badgeText: "TECHNICAL DRIFT DETECTED",
    badgeStyle: "border-indigo-400 bg-indigo-50 text-indigo-700",
    description: "Data hash mismatch detected between ERP ledger and banking feed.",
  },
  {
    badgeText: "POLICY EXCEPTION",
    badgeStyle: "border-blue-500 bg-blue-50 text-blue-700",
    description: "Compensating control approved with time-bound audit committee dispensation.",
  },
];

export default function MobileReadyIsAWorkflowStateView() {
  return (
    <div className="w-full flex flex-col space-y-5 text-slate-200">
      {/* Statutory Assurance Disclosure Callout */}
      <div className="p-4 rounded-2xl border border-[#c5a059]/40 bg-[#0d2e42]/80 text-xs leading-relaxed space-y-2">
        <div className="flex items-center gap-2 text-[10.5px] font-mono font-bold text-[#c5a059] uppercase tracking-wider">
          <AlertCircle className="w-3.5 h-3.5 text-[#c5a059] shrink-0" />
          <span>STATUTORY ASSURANCE DISCLOSURE</span>
        </div>
        <p className="text-[11.5px] text-[#D4E4ED]">
          ZoikoSuite coordinates operational execution and gathers audit-eligible source evidence, reconciliation and supporting materials. However &quot;readiness&quot; or &quot;ready&quot; status is a workflow and control state. It does not itself establish statutory compliance, legal admissibility, audit acceptance, regulatory tolerance or certification.
        </p>
      </div>

      {/* Decision Profile Card */}
      <div className="w-full rounded-2xl border border-[#133c54] bg-[#061923] shadow-xl overflow-hidden">
        {/* Header Bar */}
        <div className="bg-[#072437] px-4 py-3 flex items-center justify-between border-b border-[#113247]">
          <span className="text-xs font-mono font-bold tracking-wider text-white uppercase">
            DECISION PROFILE : FWD-CLOSE
          </span>
          <MoreHorizontal className="w-4 h-4 text-slate-400" />
        </div>

        <div className="p-4 sm:p-5 space-y-2.5 font-mono text-xs">
          <div className="flex flex-col sm:flex-row sm:justify-between py-1 border-b border-[#0f2c3e]">
            <span className="text-slate-400">Decision Class:</span>
            <span className="text-white font-semibold">Year-end close statutory audit pack</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:justify-between py-1 border-b border-[#0f2c3e]">
            <span className="text-slate-400">Tested Against:</span>
            <span className="text-white font-semibold">2026-Q4 audited entity accounts (IFRS)</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:justify-between py-1 border-b border-[#0f2c3e]">
            <span className="text-slate-400">Policies and Proof:</span>
            <span className="text-white font-semibold">Policy ref: TC-02 (Treasury v4)</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:justify-between py-1 border-b border-[#0f2c3e]">
            <span className="text-slate-400">Authority Verified:</span>
            <span className="text-emerald-400 font-semibold">Requires CFO, Controller and Board</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:justify-between py-1 border-b border-[#0f2c3e]">
            <span className="text-slate-400">Evidence Assessed:</span>
            <span className="text-sky-300 font-semibold">18 immutable records · 1 populated</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:justify-between py-1 border-b border-[#0f2c3e]">
            <span className="text-slate-400">Predecessors:</span>
            <span className="text-white font-semibold">Core ERP general ledger, 14 sub-ledgers (SAP)</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:justify-between py-1">
            <span className="text-slate-400">Result:</span>
            <span className="text-emerald-400 font-semibold">All 14 prerequisites satisfied in reconciliation</span>
          </div>

          <p className="pt-2 text-[10px] text-slate-400/80 font-sans leading-relaxed border-t border-[#0f2c3e]">
            No system criteria, automated controls, and native checks yield or simulate: statutory audit, external opinion, assurance from auditor, or legal advice on balance.
          </p>
        </div>
      </div>

      {/* 7 Governed Readiness States Header */}
      <div>
        <span className="text-[10.5px] font-mono font-bold tracking-wider text-slate-300 uppercase block mb-3">
          SEVEN GOVERNED READINESS STATES
        </span>

        {/* Stacked White Cards */}
        <div className="space-y-2.5">
          {readinessStates.map((state, idx) => (
            <div
              key={idx}
              className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 p-3 rounded-xl bg-white border border-slate-200 text-slate-900 shadow-sm"
            >
              <span
                className={`inline-block px-2.5 py-1 rounded text-[10px] font-mono font-bold tracking-wider border ${state.badgeStyle} self-start shrink-0`}
              >
                {state.badgeText}
              </span>
              <span className="text-xs text-slate-700 text-left sm:text-right">
                {state.description}
              </span>
            </div>
          ))}
        </div>

        <p className="text-[10.5px] text-slate-400 leading-relaxed mt-3">
          Final assurance remains the responsibility of humans and chartered public accountants. Automated systems cannot execute regulatory sign-offs.
        </p>
      </div>
    </div>
  );
}
