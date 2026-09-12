"use client";

import React from "react";
import { motion } from "framer-motion";

interface PhaseRow {
  phase: string;
  purpose: string;
  artifact: string;
  exitCriterion: string;
}

const desktopPhases: PhaseRow[] = [
  {
    phase: "01 · Discovery & Foundation",
    purpose: "Establish estate boundary, system owners and initial governance baseline",
    artifact: "Estate boundary map · Responsibility register",
    exitCriterion: "System and geographic perimeter certified; steering group confirmed",
  },
  {
    phase: "02 · Prepare",
    purpose: "Define entity model, mappings, interfaces, validation rules",
    artifact: "Architecture blueprint · Mapping schema · Assessment criteria",
    exitCriterion: "Blueprint review approved; staging plan active",
  },
  {
    phase: "03 · Migrate (Transport)",
    purpose: "Move governed data and current baseline rules",
    artifact: "Transport log · Lineage manifest",
    exitCriterion: "Source, integrity and completeness validated against agreed specifications",
  },
  {
    phase: "04 · Shadow Mode",
    purpose: "Compare proposed governed behavior with current operation",
    artifact: "Shadow execution · Comparison records · Exception log summary",
    exitCriterion: "Observable model behavior demonstrated for pre-agreed sample",
  },
  {
    phase: "05 · Controlled Activation",
    purpose: "Activate one functional module scope in the defined boundary perimeter",
    artifact: "Production gate · Readiness plan · Rollout log sheet",
    exitCriterion: "Human authorization record logged for the agreed perimeter",
  },
  {
    phase: "06 · Stabilise",
    purpose: "Monitor and resolve initial support and operational queries",
    artifact: "Stability metrics · Exception/dispute log · System evidence",
    exitCriterion: "Incident trend within criteria limits",
  },
  {
    phase: "07 · Exit Documentation",
    purpose: "Retire legacy scope only when it is proved safe and complete",
    artifact: "Compliance discovery · Retention approval sheet · Archive plan",
    exitCriterion: "Decommissioning review and retention exception satisfied",
  },
];

const mobilePhases = [
  {
    phase: "01 · Discover & baseline",
    purpose: "Establish current operating truth, sources, owners and dependencies.",
    evidence: "Source authority matrix · dependency register",
  },
  {
    phase: "02 · Prepare",
    purpose: "Define target role, mappings, interfaces, controls and access.",
    evidence: "Architecture decision · mapping evidence · access approval",
  },
  {
    phase: "03 · Migrate & reconcile",
    purpose: "Move approved scope and prove it reconciles.",
    evidence: "Reconciliation coverage manifest",
  },
  {
    phase: "04 · Shadow Mode",
    purpose: "Compare proposed governed behaviour with current operation.",
    evidence: "Shadow contract · comparison records · variance dispositions",
  },
  {
    phase: "05 · Controlled activation",
    purpose: "Activate only bounded, ready scope with a defined recovery position.",
    evidence: "Readiness gates · recovery plan · named approval",
  },
  {
    phase: "06 · Stabilize",
    purpose: "Operate under heightened support and resolve emergent issues.",
    evidence: "Hypercare log · exception closure · handover evidence",
  },
  {
    phase: "07 · Exit / decommission",
    purpose: "Retire legacy scope only when it is genuinely safe to do so.",
    evidence: "Consumer discovery · retention approval · decommissioning gate",
  },
];

export default function SevenPhasesNoPromisedDurationSection() {
  return (
    <section className="w-full bg-[#FFFFFF] text-[#08222F] py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-20 flex justify-center border-t border-[#ede9df]">
      <div className="max-w-[1240px] w-full flex flex-col">
        {/* ========================================================================= */}
        {/* DESKTOP VERSION (hidden lg:block) - 100% UNTOUCHED DESKTOP DESIGN         */}
        {/* ========================================================================= */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-12 gap-8 items-end mb-12">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="col-span-7 flex flex-col text-left"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-5 h-[2px] bg-[#c5a059]" />
                <span className="text-[10.5px] font-semibold tracking-[0.2em] text-[#c5a059] uppercase font-mono">
                  MIGRATION LIFECYCLE
                </span>
              </div>
              <h2 className="text-3xl lg:text-[40px] font-bold tracking-tight text-[#08222F] leading-tight">
                Seven phases, no promised duration
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="col-span-5 flex flex-col justify-end text-left"
            >
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                Each phase names what must exist before the next one opens. None carries a fixed timeline, because timing depends on your estate rather than on the method.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden text-left"
          >
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[720px]">
                <thead>
                  <tr className="bg-slate-50/90 border-b border-slate-200 text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider">
                    <th className="py-3 px-4 w-[22%]">PHASE</th>
                    <th className="py-3 px-4 w-[28%]">PURPOSE</th>
                    <th className="py-3 px-4 w-[26%]">PRIMARY ARTIFACT</th>
                    <th className="py-3 px-4 w-[24%]">EXIT CRITERION</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-xs">
                  {desktopPhases.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/60 transition-colors">
                      <td className="py-3.5 px-4 font-bold text-slate-900 text-[12px] align-top">
                        {row.phase}
                      </td>
                      <td className="py-3.5 px-4 text-slate-700 text-[11.5px] leading-relaxed align-top">
                        {row.purpose}
                      </td>
                      <td className="py-3.5 px-4 text-slate-600 text-[11px] font-mono leading-relaxed align-top">
                        {row.artifact}
                      </td>
                      <td className="py-3.5 px-4 text-slate-600 text-[11.5px] leading-relaxed align-top">
                        {row.exitCriterion}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>

        {/* ========================================================================= */}
        {/* MOBILE VERSION (block lg:hidden) - EXACT MATCH TO USER'S MOBILE SCREENSHOT */}
        {/* ========================================================================= */}
        <div className="block lg:hidden flex flex-col text-left">
          {/* Mobile Eyebrow */}
          <div className="flex items-center gap-2 mb-2">
            <span className="w-4 h-[2px] bg-[#c5a059]" />
            <span className="text-[10px] font-semibold tracking-[0.2em] text-[#c5a059] uppercase font-mono">
              CONTROLLED ADOPTION LIFECYCLE
            </span>
          </div>

          {/* Mobile Heading */}
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#08222F] leading-tight mb-3">
            Seven phases, no promised duration
          </h2>

          {/* Mobile Description */}
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-6">
            Each phase names what must exist before the next one opens. None carries a fixed timeline, because timing depends on your estate rather than on the method.
          </p>

          {/* Mobile 3-Column Table Card */}
          <div className="rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden mb-5">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-[#F8F9FA] border-b border-slate-200 text-[9px] font-mono font-bold text-slate-500 uppercase tracking-wider">
                    <th className="py-3 px-3 w-[28%] font-semibold">PHASE</th>
                    <th className="py-3 px-3 w-[40%] font-semibold">PURPOSE</th>
                    <th className="py-3 px-3 w-[32%] font-semibold">REQUIRED EVIDENCE</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-[11px]">
                  {mobilePhases.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                      <td className="py-3 px-3 font-bold text-[#0B1E28] align-top">
                        {row.phase}
                      </td>
                      <td className="py-3 px-3 text-slate-700 leading-relaxed align-top">
                        {row.purpose}
                      </td>
                      <td className="py-3 px-3 text-slate-600 leading-relaxed align-top font-normal">
                        {row.evidence}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Mobile Gold Bar Callout */}
          <div className="border-l-2 border-[#D0AA55] pl-3 py-1">
            <p className="text-[11px] text-slate-600 leading-relaxed">
              Phases can overlap by workstream. A programme may be in Shadow Mode for one process while still discovering another &mdash; the Control Center above shows exactly that.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
