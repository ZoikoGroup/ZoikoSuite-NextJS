"use client";

import React from "react";

interface VerificationItem {
  subsystem: string;
  subsystemDetail?: string;
  configuredScope: string;
  honoredScope: string;
  testedScope: string;
  variance: string;
  varianceType?: "neutral" | "gold" | "red" | "green";
  observations: string;
  status: string;
  statusType: "honored" | "partial" | "not_tested" | "dash";
  highlighted?: boolean;
}

const desktopVerificationData: VerificationItem[] = [
  {
    subsystem: "Payment pipeline",
    subsystemDetail: "Authorization & settlement",
    configuredScope: "28 payment pathways configured",
    honoredScope: "28 pathways verified",
    testedScope: "26 pathways active",
    variance: "Δ 2",
    varianceType: "neutral",
    observations: "Direct debits in batch processing run 4 excluded from active shadow test.",
    status: "• HONORED 26/28",
    statusType: "honored",
  },
  {
    subsystem: "Ledger reconciliation",
    configuredScope: "All nominal accounts",
    honoredScope: "All nominal accounts",
    testedScope: "Target ledger active",
    variance: "Δ 0",
    varianceType: "green",
    observations: "Full balance sheet and trial balance reconciled across both systems.",
    status: "• HONORED 100%",
    statusType: "honored",
  },
  {
    subsystem: "Historical transactions",
    configuredScope: "10-year record migration",
    honoredScope: "7 years fully verified",
    testedScope: "3-year active archive",
    variance: "Δ 4 yrs",
    varianceType: "gold",
    observations: "7-year legacy tax records migrated and verified; years 8–10 in staging offline.",
    status: "• PARTIAL · 7/10 YRS (STAGED)",
    statusType: "partial",
    highlighted: true,
  },
  {
    subsystem: "Communications & notifications",
    configuredScope: "Email, SMS, in-app notifications",
    honoredScope: "Email and SMS verified",
    testedScope: "Email live, SMS simulation",
    variance: "Δ SMS (sim)",
    varianceType: "neutral",
    observations: "SMS provider gateway mock active; production SMS gateway will run at go-live.",
    status: "• HONORED 2/3",
    statusType: "honored",
  },
  {
    subsystem: "Contract agreements",
    configuredScope: "e-Signature & custom clauses",
    honoredScope: "Template scope only",
    testedScope: "None",
    variance: "Δ ALL (custom)",
    varianceType: "red",
    observations: "Custom legal terms deferred; standard click-wrap and signed templates approved.",
    status: "• NOT TESTED",
    statusType: "not_tested",
  },
  {
    subsystem: "Fraud & compliance check",
    configuredScope: "Sanctions, PEP & ID verification",
    honoredScope: "Full regulatory baseline",
    testedScope: "Active shadow compliance",
    variance: "Δ 0",
    varianceType: "green",
    observations: "Real-time PEP and Sanctions API queries running simultaneously on parallel feed.",
    status: "• HONORED 100%",
    statusType: "honored",
  },
  {
    subsystem: "Document store",
    configuredScope: "Cloud object store",
    honoredScope: "Full file index",
    testedScope: "Yes",
    variance: "Δ 0",
    varianceType: "green",
    observations: "Tier 0-1 documents verified and accessible.",
    status: "• HONORED 100%",
    statusType: "honored",
  },
  {
    subsystem: "Tax determination logic",
    configuredScope: "Multi-jurisdiction tax engine",
    honoredScope: "UK & EU VAT",
    testedScope: "None",
    variance: "Δ non-EU",
    varianceType: "gold",
    observations: "US Sales Tax engine deferred to Phase 6; UK and EU VAT fully verified.",
    status: "—",
    statusType: "dash",
    highlighted: true,
  },
];

const mobileCoverageData = [
  {
    dimension: "Supplier records",
    required: "All active suppliers · UK entity",
    tested: "All active suppliers · UK entity",
    method: "Count · differential integrity",
    mode: "FULL",
    modeType: "green",
    definition: "Source count equals target count, matches baseline.",
  },
  {
    dimension: "Open payables",
    required: "All open payables · UK entity",
    tested: "All open payables · UK entity",
    method: "Count · total balance",
    mode: "FULL",
    modeType: "green",
    definition: "Record count and summed balance matches target ledger.",
  },
  {
    dimension: "Historical payables",
    required: "24 months of closed payables",
    tested: "Sample of 500 records across 24 months",
    method: "Sample · manual review",
    mode: "SAMPLED",
    modeType: "sky",
    definition: "Stratified sample by month and value band; variances recorded.",
    highlighted: true,
  },
  {
    dimension: "Control outcomes",
    required: "All Wave 1 action types",
    tested: "Two action types",
    method: "Control outcome comparison",
    mode: "SAMPLED",
    modeType: "sky",
    definition: "Observed governance results for the action sample.",
  },
  {
    dimension: "Contract obligations",
    required: "All obligations linked to Wave 1 suppliers",
    tested: "None",
    method: "Not run",
    mode: "EXCLUDED",
    modeType: "rose",
    definition: "Excluded because the contract source interface is delayed.",
  },
  {
    dimension: "Event completeness",
    required: "All ingested finance events",
    tested: "All ingested finance events",
    method: "Event completeness",
    mode: "FULL",
    modeType: "green",
    definition: "Every source event has a corresponding shadow event logged.",
  },
  {
    dimension: "Workforce data",
    required: "Staff relevant to invoice",
    tested: "n/a",
    method: "n/a",
    mode: "NOT APPLICABLE",
    modeType: "gray",
    definition: "Not in the approved Wave 1 scope envelope.",
  },
  {
    dimension: "Tax determinations",
    required: "Requires verification",
    tested: "None",
    method: "Not run",
    mode: "DEFERRED",
    modeType: "amber",
    definition: "★ Requires Stale sheet to be remediated before running.",
    highlighted: true,
  },
];

export default function WhatWasActuallyTestedSection() {
  return (
    <section className="bg-[#FBF9F4] py-14 sm:py-20 border-b border-[#E5E0D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* ========================================================================= */}
        {/* DESKTOP VERSION (hidden lg:block) - 100% UNTOUCHED DESKTOP DESIGN         */}
        {/* ========================================================================= */}
        <div className="hidden lg:block">
          {/* Desktop Header */}
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-12">
            <div>
              <p className="text-xs font-mono font-semibold uppercase tracking-wider text-[#C59A41] mb-2">
                — STABILIZATION DEMAND METRIC
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold text-[#0B1E28] tracking-tight">
                What was actually tested — and
                <br /> what was not
              </h2>
            </div>
            <p className="text-sm text-[#5A6D77] max-w-md leading-relaxed pt-6">
              Honored scope and tested scope are separate columns on purpose. The
              gap between them is the most useful number on the page, and is never
              expressed as a rounded percentage.
            </p>
          </div>

          {/* Manifest Table Container */}
          <div className="rounded-xl overflow-hidden border border-[#E0D8CC] shadow-sm bg-white">
            <div className="bg-[#08222F] px-6 py-4 flex items-center justify-between text-white border-b border-[#0E3446]">
              <div className="flex items-center gap-3">
                <span className="inline-block w-2 h-2 rounded-full bg-[#C59A41]" />
                <span className="text-xs font-mono font-medium tracking-wider text-slate-200 uppercase">
                  VERIFICATION MANIFEST · SUITE 2 · PARALLEL RUN 04
                </span>
              </div>
              <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
                <span>RUN ID: #VRF-8821</span>
                <span>MODE: SHADOW-READ-ONLY</span>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-[#F6F3EC] border-b border-[#E5E0D8] text-[#5A6D77] font-mono uppercase text-[11px]">
                    <th className="py-3.5 px-4 font-semibold">Subsystem / Capability</th>
                    <th className="py-3.5 px-4 font-semibold">Configured Scope</th>
                    <th className="py-3.5 px-4 font-semibold">Honored Scope</th>
                    <th className="py-3.5 px-4 font-semibold">Tested Scope</th>
                    <th className="py-3.5 px-4 font-semibold">Gap</th>
                    <th className="py-3.5 px-4 font-semibold min-w-[280px]">Observations</th>
                    <th className="py-3.5 px-4 font-semibold text-right">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#EAE4DA]">
                  {desktopVerificationData.map((row, idx) => (
                    <tr
                      key={idx}
                      className={`transition-colors ${
                        row.highlighted
                          ? "bg-[#FEF8EC] hover:bg-[#FDF3DE]"
                          : "bg-white hover:bg-[#FAF8F5]"
                      }`}
                    >
                      <td className="py-3 px-4 font-medium text-[#0B1E28]">
                        <div>{row.subsystem}</div>
                        {row.subsystemDetail && (
                          <div className="text-[11px] text-[#7A8B94] font-normal">
                            {row.subsystemDetail}
                          </div>
                        )}
                      </td>
                      <td className="py-3 px-4 text-[#4A5D67]">{row.configuredScope}</td>
                      <td className="py-3 px-4 text-[#2A3D47] font-medium">{row.honoredScope}</td>
                      <td className="py-3 px-4 text-[#2A3D47]">{row.testedScope}</td>
                      <td className="py-3 px-4 font-mono">
                        <span
                          className={`inline-block px-2 py-0.5 rounded text-[11px] font-semibold ${
                            row.varianceType === "green"
                              ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                              : row.varianceType === "red"
                              ? "bg-rose-50 text-rose-700 border border-rose-200"
                              : row.varianceType === "gold"
                              ? "bg-amber-50 text-amber-800 border border-amber-300"
                              : "bg-slate-100 text-slate-700 border border-slate-200"
                          }`}
                        >
                          {row.variance}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-[#5A6D77] leading-relaxed">
                        {row.observations}
                      </td>
                      <td className="py-3 px-4 text-right whitespace-nowrap">
                        {row.statusType === "honored" && (
                          <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-mono font-medium bg-emerald-50 text-emerald-700 border border-emerald-300">
                            {row.status}
                          </span>
                        )}
                        {row.statusType === "partial" && (
                          <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-mono font-medium bg-amber-50 text-amber-800 border border-amber-300">
                            {row.status}
                          </span>
                        )}
                        {row.statusType === "not_tested" && (
                          <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-mono font-medium bg-rose-50 text-rose-700 border border-rose-300">
                            {row.status}
                          </span>
                        )}
                        {row.statusType === "dash" && (
                          <span className="text-slate-400 font-mono text-xs">—</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
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
              RECONCILIATION COVERAGE MANIFEST
            </span>
          </div>

          {/* Mobile Heading */}
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#08222F] leading-tight mb-3">
            What was actually tested &mdash; and what was not
          </h2>

          {/* Mobile Description */}
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-6">
            Required scope and tested scope are separate columns on purpose. The gap between them is the most useful number on the page, and it is never expressed as an undefined percentage.
          </p>

          {/* Coverage Manifest Card */}
          <div className="rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-white text-[#08222F]">
            {/* Top Bar */}
            <div className="bg-[#08222F] px-4 py-3 border-b border-slate-800 flex items-center justify-between text-white">
              <div className="text-[10px] font-mono font-semibold uppercase tracking-wider text-slate-300">
                COVERAGE MANIFEST &middot; WAVE 1 &middot; SYNTHETIC FIXTURE
              </div>
              <div className="text-slate-500 font-mono tracking-widest text-xs">
                •••
              </div>
            </div>

            {/* Sub-banner */}
            <div className="px-4 py-2 bg-[#F6F4EE] border-b border-[#E8E2D6] text-[9px] font-mono text-slate-600 font-semibold tracking-wide">
              PER WORKSTREAM &mdash; REQUIRED SCOPE, TESTED SCOPE, METHOD, MODE AND DEFINITION
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left text-[11px] border-collapse min-w-[580px]">
                <thead>
                  <tr className="bg-[#FAF8F5] border-b border-[#EAE4DA] text-[9px] font-mono font-bold text-slate-500 uppercase tracking-wider">
                    <th className="py-2 px-3">DIMENSION</th>
                    <th className="py-2 px-3">REQUIRED SCOPE</th>
                    <th className="py-2 px-3">TESTED SCOPE</th>
                    <th className="py-2 px-3">METHOD</th>
                    <th className="py-2 px-3">COVERAGE MODE</th>
                    <th className="py-2 px-3 text-right">DEFINITION</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#EAE4DA] text-[10px]">
                  {mobileCoverageData.map((row, idx) => (
                    <tr
                      key={idx}
                      className={row.highlighted ? "bg-[#FFFBF2]" : "bg-white"}
                    >
                      <td className="py-2.5 px-3 font-bold text-[#0B1E28]">
                        {row.dimension}
                      </td>
                      <td className="py-2.5 px-3 text-slate-600">
                        {row.required}
                      </td>
                      <td className="py-2.5 px-3 text-slate-700">
                        {row.tested}
                      </td>
                      <td className="py-2.5 px-3 text-slate-600">
                        {row.method}
                      </td>
                      <td className="py-2.5 px-3 whitespace-nowrap">
                        <span
                          className={`inline-block px-1.5 py-0.5 rounded text-[8.5px] font-mono font-bold ${
                            row.modeType === "green"
                              ? "bg-emerald-50 text-emerald-700 border border-emerald-300"
                              : row.modeType === "sky"
                              ? "bg-sky-50 text-sky-700 border border-sky-300"
                              : row.modeType === "rose"
                              ? "bg-rose-50 text-rose-700 border border-rose-300"
                              : row.modeType === "amber"
                              ? "bg-amber-50 text-amber-800 border border-amber-400"
                              : "bg-slate-100 text-slate-600 border border-slate-300"
                          }`}
                        >
                          {row.mode}
                        </span>
                      </td>
                      <td className="py-2.5 px-3 text-right text-slate-600">
                        {row.definition}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Bottom Note */}
            <div className="px-4 py-3 bg-[#FAF8F5] border-t border-[#EAE4DA] text-[10px] font-mono text-slate-500 leading-relaxed">
              Five coverage modes: Full, sampled, excluded, not applicable and deferred. Every run publishes its exact test definition. &ldquo;Unknown&rdquo; is a real state - if a test run cannot even define its required scope yet, and saying so is more useful than reporting zero.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
