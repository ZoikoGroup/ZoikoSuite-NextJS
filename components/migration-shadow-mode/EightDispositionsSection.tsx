"use client";

import React from "react";
import Image from "next/image";

interface Disposition {
  title: string;
  description: string;
  isAlert?: boolean;
}

const desktopDispositions: Disposition[] = [
  {
    title: "Remediation",
    description: "Fix the underlying capability before proceeding.",
  },
  {
    title: "Exception (time-limited)",
    description:
      "Explicit departure with approved expiry date. Must not be left open.",
  },
  {
    title: "Approved divergence",
    description: "Known variance with documented operational justification.",
  },
  {
    title: "Defer",
    description: "Not in current run scope; deferred to parallel sequence.",
  },
  {
    title: "Exclude scope",
    description: "Removed from scope; requires justification audit.",
  },
  {
    title: "Process workaround",
    description: "Documented procedural workaround approved by governance.",
  },
  {
    title: "Blocked on vendor",
    description: "Third party dependency issue with ticket reference.",
    isAlert: true,
  },
  {
    title: "Governed tolerance",
    description: "Acceptable drift within defined mathematical threshold.",
  },
];

const mobileDispositions = [
  {
    title: "Remediate",
    description: "Fix the underlying cause before proceeding.",
  },
  {
    title: "Accept as intended",
    description: "The difference is a designed improvement; recorded as such.",
  },
  {
    title: "Approved exception",
    description: "Time-bound, with compensating control and expiry.",
  },
  {
    title: "Defer",
    description: "Moved to a later wave with a recorded reason.",
  },
  {
    title: "Exclude scope",
    description: "Removed from the wave, visibly and with rationale.",
  },
  {
    title: "Professional review",
    description: "Routed to a qualified review before disposition.",
  },
  {
    title: "Block activation",
    description: "Prevents the affected scope from activating.",
    isBlock: true,
  },
  {
    title: "Close with evidence",
    description: "Resolved and evidential — the only clean closure.",
  },
];

const mobileIssueData = [
  {
    issue: "Requester able to approve own supplier change",
    scope: "Supplier process · UK",
    cause: "Authority / role difference",
    impact: "Segregation control absent today",
    owner: "Maya Chen",
    due: "18 Jul",
    disposition: "★ ACCEPT AS INTENDED",
    dispositionType: "green",
    highlighted: true,
  },
  {
    issue: "Supplier status value set mismatch",
    scope: "Mapping · all suppliers",
    cause: "Mapping / transformation",
    impact: "Lifecycle state maybe ambiguous",
    owner: "Priya Nair",
    due: "24 Jul",
    disposition: "▼ REMEDIATE",
    dispositionType: "amber",
  },
  {
    issue: "Contract source delayed through window",
    scope: "Contract obligations",
    cause: "Integration / event issue",
    impact: "Notice obligations unevaluated",
    owner: "Aisha Rahman",
    due: "Overdue",
    isOverdue: true,
    disposition: "★ BLOCK ACTIVATION",
    dispositionType: "rose",
  },
  {
    issue: "Historical payables tested by sample only",
    scope: "24 months closed payables",
    cause: "Expected design difference",
    impact: "Population not fully verified",
    owner: "Priya Nair",
    due: "28 Jul",
    disposition: "★ APPROVED EXCEPTION",
    dispositionExpiry: "Expires: 28-Nov-2026",
    dispositionType: "amber",
    highlighted: true,
  },
  {
    issue: "Tax source stale, scope undefinable",
    scope: "Tax obligations",
    cause: "Source data issue",
    impact: "Cannot assess coverage",
    owner: "Unassigned",
    due: "Overdue",
    isOverdue: true,
    disposition: "★ EXCLUDE SCOPE",
    dispositionType: "slate",
  },
];

const exceptionFields = [
  "Rationale",
  "Approver",
  "Scope",
  "Compensating control",
  "Effective date",
  "Expiry date",
  "Review date",
  "Evidence",
];

export default function EightDispositionsSection() {
  return (
    <section className="bg-[#FFFFFF] py-14 sm:py-20 border-b border-[#E5E0D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* ========================================================================= */}
        {/* DESKTOP VERSION (hidden lg:block) - 100% UNTOUCHED DESKTOP DESIGN         */}
        {/* ========================================================================= */}
        <div className="hidden lg:block">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-12">
            <div>
              <p className="text-xs font-mono font-semibold uppercase tracking-wider text-[#C59A41] mb-2">
                — ANOMALY AND ISSUE DECISION MODEL
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold text-[#0B1E28] tracking-tight">
                Eight dispositions, each with a
                <br /> named owner
              </h2>
            </div>
            <p className="text-sm text-[#5A6D77] max-w-md leading-relaxed pt-6">
              An issue cannot close simply because a phase moved on. Closure
              requires evidence, or an approved exception with an expiry.
            </p>
          </div>

          <div className="grid grid-cols-4 gap-4 mb-10">
            {desktopDispositions.map((item, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#E2E8F0] rounded-lg p-5 shadow-sm hover:border-[#CBD5E1] transition-all"
              >
                <h3
                  className={`text-sm font-semibold mb-1.5 ${
                    item.isAlert ? "text-rose-600" : "text-[#0B1E28]"
                  }`}
                >
                  {item.title}
                </h3>
                <p className="text-xs text-[#5A6D77] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="relative rounded-2xl overflow-hidden border border-[#0F2D3D] shadow-xl bg-[#030B12]">
            <div className="relative w-full aspect-[16/9] max-h-[560px]">
              <Image
                src="/migration-shadow-mode/msm5.png"
                alt="Anomaly and Issue Decision Model Flow"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* MOBILE VERSION (block lg:hidden) - EXACT MATCH TO USER'S MOBILE SCREENSHOT */}
        {/* ========================================================================= */}
        <div className="block lg:hidden flex flex-col text-left">
          {/* Mobile Eyebrow */}
          <div className="flex items-center gap-2 mb-2">
            <span className="w-4 h-[2px] bg-[#c5a059]" />
            <span className="text-[10px] font-semibold tracking-[0.2em] text-[#c5a059] uppercase font-mono">
              VARIANCE AND ISSUE DECISION MODEL
            </span>
          </div>

          {/* Mobile Heading */}
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#08222F] leading-tight mb-3">
            Eight dispositions, each with a named owner
          </h2>

          {/* Mobile Description */}
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-6">
            An issue cannot close simply because a phase moved on. Closure requires evidence, or an approved exception with an expiry.
          </p>

          {/* 8 Mobile Disposition Cards (2 columns x 4 rows) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {mobileDispositions.map((item, idx) => (
              <div
                key={idx}
                className={`bg-white border rounded-xl p-4 shadow-sm ${
                  item.isBlock
                    ? "border-l-4 border-l-rose-600 border-[#E2DDD5]"
                    : "border-[#E2DDD5]"
                }`}
              >
                <h4
                  className={`text-xs font-bold mb-1 ${
                    item.isBlock ? "text-rose-700" : "text-[#0B1E28]"
                  }`}
                >
                  {item.title}
                </h4>
                <p className="text-[11px] text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Issue Register Card */}
          <div className="rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-white text-[#08222F]">
            {/* Top Bar */}
            <div className="bg-[#08222F] px-4 py-3 border-b border-slate-800 flex items-center justify-between text-white">
              <div className="text-[10px] font-mono font-semibold uppercase tracking-wider text-slate-300">
                ISSUE REGISTER &middot; WAVE 1 &middot; SYNTHETIC FIXTURE
              </div>
              <div className="text-slate-500 font-mono tracking-widest text-xs">
                •••
              </div>
            </div>

            {/* Sub-banner */}
            <div className="px-4 py-2 bg-[#F6F4EE] border-b border-[#E8E2D6] text-[9px] font-mono text-slate-600 font-semibold tracking-wide">
              ISSUES WITH CAUSE, IMPACT, DISPOSITION AND CLOSURE STATE
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left text-[11px] border-collapse min-w-[620px]">
                <thead>
                  <tr className="bg-[#FAF8F5] border-b border-[#EAE4DA] text-[9px] font-mono font-bold text-slate-500 uppercase tracking-wider">
                    <th className="py-2 px-3">ISSUE</th>
                    <th className="py-2 px-3">AFFECTED SCOPE</th>
                    <th className="py-2 px-3">PRIMARY CAUSE</th>
                    <th className="py-2 px-3">CONTROL IMPACT</th>
                    <th className="py-2 px-3">OWNER</th>
                    <th className="py-2 px-3">DUE</th>
                    <th className="py-2 px-3 text-right">DISPOSITION</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#EAE4DA] text-[10px]">
                  {mobileIssueData.map((row, idx) => (
                    <tr
                      key={idx}
                      className={row.highlighted ? "bg-[#FFFBF2]" : "bg-white"}
                    >
                      <td className="py-2.5 px-3 font-bold text-[#0B1E28]">
                        {row.issue}
                      </td>
                      <td className="py-2.5 px-3 text-slate-600">
                        {row.scope}
                      </td>
                      <td className="py-2.5 px-3 text-slate-600">
                        {row.cause}
                      </td>
                      <td className="py-2.5 px-3 text-slate-600">
                        {row.impact}
                      </td>
                      <td className="py-2.5 px-3 text-slate-700">
                        {row.owner}
                      </td>
                      <td
                        className={`py-2.5 px-3 font-mono font-semibold ${
                          row.isOverdue ? "text-rose-600" : "text-slate-700"
                        }`}
                      >
                        {row.due}
                      </td>
                      <td className="py-2.5 px-3 text-right whitespace-nowrap">
                        <div
                          className={`inline-block px-1.5 py-0.5 rounded text-[8.5px] font-mono font-bold ${
                            row.dispositionType === "green"
                              ? "bg-emerald-50 text-emerald-700 border border-emerald-300"
                              : row.dispositionType === "amber"
                              ? "bg-amber-50 text-amber-800 border border-amber-400"
                              : row.dispositionType === "rose"
                              ? "bg-rose-50 text-rose-700 border border-rose-300"
                              : "bg-slate-100 text-slate-700 border border-slate-300"
                          }`}
                        >
                          {row.disposition}
                        </div>
                        {row.dispositionExpiry && (
                          <div className="text-[8px] font-mono text-slate-400 mt-0.5">
                            {row.dispositionExpiry}
                          </div>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Bottom 2 Boxes */}
            <div className="p-4 grid grid-cols-1 md:grid-cols-12 gap-4 bg-[#FBF9F5] border-t border-[#EAE4DA]">
              {/* Left Box: Exception Fields */}
              <div className="md:col-span-7 bg-white border border-[#E0D8CC] rounded-xl p-3.5 shadow-sm">
                <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500 mb-2">
                  EXCEPTION FIELDS &mdash; ALL REQUIRED
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {exceptionFields.map((field, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded text-[9px] font-mono text-sky-800 bg-sky-50 border border-sky-200"
                    >
                      {field}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Box: Closure Rule */}
              <div className="md:col-span-5 bg-[#FFF5F5] border border-[#F5C2C7] rounded-xl p-3.5 shadow-sm">
                <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-rose-800 mb-1.5">
                  CLOSURE RULE
                </div>
                <p className="text-[9.5px] text-rose-950/80 leading-relaxed font-normal">
                  An issue cannot close only because a phase advanced, a date passed or a workaround exists. Closure requires evidence, or an approved exception carrying a compensating control and an expiry. One issue above currently blocks Wave 1 activation entirely &mdash; that is the model working, not failing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
