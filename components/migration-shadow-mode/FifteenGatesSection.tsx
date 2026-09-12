"use client";

import React from "react";

interface DesktopGate {
  name: string;
  criterion: string;
  status: string;
  statusType: "satisfied" | "awaiting" | "in_progress" | "blocked" | "not_tested";
}

const desktopGates: DesktopGate[] = [
  {
    name: "Bound and coverage",
    criterion: "Approved scope boundaries complete",
    status: "• GATE SATISFIED",
    statusType: "satisfied",
  },
  {
    name: "Data quality",
    criterion: "Source data cleansed to agreed standard",
    status: "• GATE SATISFIED",
    statusType: "satisfied",
  },
  {
    name: "Reconciliation",
    criterion: "Quality, cadence and tolerance criteria verified",
    status: "• AWAITING WITNESS SIGN-OFF",
    statusType: "awaiting",
  },
  {
    name: "Governance authorization",
    criterion: "Reconciliation authority sign-off complete",
    status: "• GATE SATISFIED",
    statusType: "satisfied",
  },
  {
    name: "Authority and logging (ETL)",
    criterion: "Authority in place with background audit logs",
    status: "• GATE SATISFIED",
    statusType: "satisfied",
  },
  {
    name: "Evidence",
    criterion: "Reconciliation documentation pack complete",
    status: "• IN PROGRESS",
    statusType: "in_progress",
  },
  {
    name: "Stability",
    criterion: "Incident allowability track record clean (30d)",
    status: "• GATE SATISFIED",
    statusType: "satisfied",
  },
  {
    name: "Latency",
    criterion: "System and network latencies below threshold",
    status: "• GATE SATISFIED",
    statusType: "satisfied",
  },
  {
    name: "Accountability",
    criterion: "Named owners for all system assets",
    status: "• IN PROGRESS",
    statusType: "in_progress",
  },
  {
    name: "Integrations",
    criterion: "All third-party interfaces certified",
    status: "• BLOCKED — VENDOR DELAY",
    statusType: "blocked",
  },
  {
    name: "Performance",
    criterion: "Volume spikes tested at 2x capacity",
    status: "• NOT YET TESTED",
    statusType: "not_tested",
  },
  {
    name: "Operational support",
    criterion: "Runbooks assembled and team trained",
    status: "• IN PROGRESS",
    statusType: "in_progress",
  },
  {
    name: "Training and change",
    criterion: "End-user rollout pack signed off",
    status: "• IN PROGRESS",
    statusType: "in_progress",
  },
  {
    name: "Professional expectancy review",
    criterion: "External regulatory checks clear",
    status: "• GATE SATISFIED",
    statusType: "satisfied",
  },
  {
    name: "Recovery and rollback",
    criterion: "Rollback plans rehearsed, verified",
    status: "• IN PROGRESS",
    statusType: "in_progress",
  },
];

const desktopLegendTypes = [
  "Pre-Shadow",
  "In-progress",
  "Parallel-Shadow",
  "Cutover Readiness",
  "Go-Live",
  "Not Applicable",
];

const mobileGates = [
  {
    name: "Functional coverage",
    criterion: "Approved scope behaves as designed",
    status: "■ MEETS CRITERION",
    statusType: "green",
  },
  {
    name: "Data quality",
    criterion: "Source data fit for the mapped purpose",
    status: "■ MEETS CRITERION",
    statusType: "green",
  },
  {
    name: "Reconciliation",
    criterion: "Counts, totals and relationships verified",
    status: "■ MEETS WITH APPROVED CONDITION",
    statusType: "amber",
  },
  {
    name: "Governance and controls",
    criterion: "Policies evaluate correctly in scope",
    status: "■ MEETS CRITERION",
    statusType: "green",
  },
  {
    name: "Authority and segregation",
    criterion: "Delegation and SoD configured and tested",
    status: "■ MEETS CRITERION",
    statusType: "green",
  },
  {
    name: "Evidence",
    criterion: "Required evidence present and attributable",
    status: "■ IN PROGRESS",
    statusType: "sky",
  },
  {
    name: "Security",
    criterion: "Access, identity and runtime controls",
    status: "■ MEETS CRITERION",
    statusType: "green",
  },
  {
    name: "Privacy",
    criterion: "Purpose, minimization and retention evaluated",
    status: "■ MEETS CRITERION",
    statusType: "green",
  },
  {
    name: "Accessibility",
    criterion: "Operable for all affected users",
    status: "■ IN PROGRESS",
    statusType: "sky",
  },
  {
    name: "Integration",
    criterion: "Interfaces stable across the wave",
    status: "▲ BLOCKED — CONTRACT SOURCE",
    statusType: "rose",
  },
  {
    name: "Performance",
    criterion: "Volume validated for this scope",
    status: "■ NOT APPLICABLE",
    statusType: "gray",
  },
  {
    name: "Operational support",
    criterion: "Runbooks, escalation and cover in place",
    status: "■ IN PROGRESS",
    statusType: "sky",
  },
  {
    name: "Training and change",
    criterion: "Affected users prepared",
    status: "■ IN PROGRESS",
    statusType: "sky",
  },
  {
    name: "Professional / regulatory review",
    criterion: "Where required for this scope",
    status: "■ NOT APPLICABLE",
    statusType: "gray",
  },
  {
    name: "Recovery and rollback",
    criterion: "Defined before cutover, not after",
    status: "■ IN PROGRESS",
    statusType: "sky",
  },
];

const mobileSixStates = [
  "Not assessed",
  "In progress",
  "Meets criterion",
  "Meets with approved condition",
  "Blocked",
  "Not applicable",
];

export default function FifteenGatesSection() {
  return (
    <section className="bg-[#08222F] text-white py-14 sm:py-20 border-b border-[#0D2D3E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* ========================================================================= */}
        {/* DESKTOP VERSION (hidden lg:block) - 100% UNTOUCHED DESKTOP DESIGN         */}
        {/* ========================================================================= */}
        <div className="hidden lg:block">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-12">
            <div>
              <p className="text-xs font-mono font-semibold uppercase tracking-wider text-[#C59A41] mb-2">
                — READINESS AND GATES DECISION
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">
                Fifteen gates, no aggregate
                <br /> score
              </h2>
            </div>
            <p className="text-sm text-slate-300 max-w-md leading-relaxed pt-6">
              Readiness is supported by named criteria and evidence — never by a
              percentage, a dial or an AI recommendation. Activation is
              authorized by a named person against a named scope.
            </p>
          </div>

          <div className="space-y-2 mb-10">
            {desktopGates.map((gate, idx) => (
              <div
                key={idx}
                className="bg-[#0C2735] hover:bg-[#0E2E3E] border border-white/10 rounded-lg px-5 py-3 flex items-center justify-between gap-3 transition-colors"
              >
                <div className="w-1/3 text-xs font-semibold text-white">
                  {gate.name}
                </div>
                <div className="w-1/2 text-xs text-slate-300">
                  {gate.criterion}
                </div>
                <div className="w-auto text-right shrink-0">
                  {gate.statusType === "satisfied" && (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded text-[11px] font-mono font-medium text-emerald-400 bg-emerald-950/40 border border-emerald-500/30">
                      {gate.status}
                    </span>
                  )}
                  {gate.statusType === "awaiting" && (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded text-[11px] font-mono font-medium text-amber-300 bg-amber-950/40 border border-amber-500/30">
                      {gate.status}
                    </span>
                  )}
                  {gate.statusType === "in_progress" && (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded text-[11px] font-mono font-medium text-sky-300 bg-sky-950/40 border border-sky-500/30">
                      {gate.status}
                    </span>
                  )}
                  {gate.statusType === "blocked" && (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded text-[11px] font-mono font-medium text-rose-300 bg-rose-950/40 border border-rose-500/30">
                      {gate.status}
                    </span>
                  )}
                  {gate.statusType === "not_tested" && (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded text-[11px] font-mono font-medium text-slate-400 bg-slate-800/40 border border-slate-600/30">
                      {gate.status}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-[#0A2635] border border-white/10 rounded-xl p-6">
              <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#C59A41] mb-4">
                GATE TYPE LEGEND
              </h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {desktopLegendTypes.map((type, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded text-xs font-mono text-slate-300 bg-white/5 border border-white/10"
                  >
                    {type}
                  </span>
                ))}
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Every gate is evaluated against its named criterion with attached
                evidence. There is no averaging across gates and no overall
                percentage score for readiness in this stage.
              </p>
            </div>

            <div className="bg-[#0A2635] border border-white/10 rounded-xl p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#C59A41] mb-2">
                  ACTIVATION DECISION
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  Decided by a named person in their governance role against named
                  bounded scope, with the evidence pack signed, exceptions
                  witnessed and recovery positions agreed. No AI engine,
                  algorithm, score or dashboard graph automatically authorizes
                  production switch.
                </p>
              </div>
              <div className="bg-amber-950/40 border border-amber-500/30 rounded-lg px-3 py-2 text-xs font-mono text-amber-300">
                Current state for Phase 5: Activation cannot occur until 11
                unsatisfied gates are cleared.
              </div>
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
              READINESS AND HUMAN DECISION
            </span>
          </div>

          {/* Mobile Heading */}
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white leading-tight mb-3">
            Fifteen gates, no aggregate score
          </h2>

          {/* Mobile Description */}
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal mb-6">
            Readiness is supported by scoped criteria and evidence &mdash; never by a percentage, a dial or an AI recommendation. Activation is authorized by a named person against a named scope.
          </p>

          {/* 15 Mobile White Gate Cards */}
          <div className="space-y-3 mb-8">
            {mobileGates.map((gate, idx) => (
              <div
                key={idx}
                className="bg-white text-slate-900 rounded-xl p-4 shadow-sm border border-slate-700/40"
              >
                <div className="text-xs font-bold text-[#0B1E28] mb-1">
                  {gate.name}
                </div>
                <div className="text-[11px] text-slate-500 mb-2.5">
                  {gate.criterion}
                </div>
                <div
                  className={`w-full py-1.5 px-3 rounded-md text-[10px] font-mono font-semibold flex items-center gap-1.5 ${
                    gate.statusType === "green"
                      ? "bg-emerald-50 text-emerald-700 border border-emerald-300"
                      : gate.statusType === "amber"
                      ? "bg-amber-50 text-amber-800 border border-amber-300"
                      : gate.statusType === "sky"
                      ? "bg-sky-50 text-sky-700 border border-sky-300"
                      : gate.statusType === "rose"
                      ? "bg-rose-50 text-rose-700 border border-rose-300"
                      : "bg-slate-100 text-slate-600 border border-slate-300"
                  }`}
                >
                  {gate.status}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom 2 Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Six Gate States */}
            <div className="bg-[#0A2635] border border-white/10 rounded-xl p-4 sm:p-5">
              <h3 className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#C59A41] mb-3">
                SIX GATE STATES
              </h3>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {mobileSixStates.map((state, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded text-[10px] font-mono text-slate-300 bg-white/5 border border-white/10"
                  >
                    {state}
                  </span>
                ))}
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed border-t border-white/10 pt-3">
                One blocked gate is enough to prevent activation of the affected scope. There is no averaging across gates and no overall readiness figure anywhere on this page.
              </p>
            </div>

            {/* Activation Decision */}
            <div className="bg-[#0A2635] border border-white/10 rounded-xl p-4 sm:p-5 flex flex-col justify-between">
              <div>
                <h3 className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#C59A41] mb-2">
                  ACTIVATION DECISION
                </h3>
                <p className="text-[11px] text-slate-300 leading-relaxed mb-4">
                  Recorded by a named accountable person against a named bounded scope, with the evidence reviewed, the conditions stated and the recovery position agreed. No AI output, algorithm, score or dashboard grants authority to activate production scope.
                </p>
              </div>
              <div className="border-t border-white/10 pt-3 text-[11px] font-mono text-amber-300 font-semibold">
                Current state for Wave 1: activation cannot be authorized &mdash; the integration gate is blocked.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
