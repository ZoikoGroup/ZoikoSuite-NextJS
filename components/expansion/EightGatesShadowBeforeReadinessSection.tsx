"use client";

import React from "react";
import { motion } from "framer-motion";

interface GateRow {
  gate: string;
  desc: string;
  badge: { text: string; color: string };
  indicatorColor?: string;
  isHighlighted?: boolean;
}

const gates: GateRow[] = [
  {
    gate: "Baseline",
    desc: "Named entities, jurisdictions, systems, sources, owners, obligations, architecture and document baseline.",
    badge: { text: "✓ COMPLETE", color: "border-emerald-300 bg-emerald-50 text-emerald-700" },
  },
  {
    gate: "Room scope",
    desc: "Selected scope, target disposition and accountable owners.",
    badge: { text: "✓ COMPLETE", color: "border-emerald-300 bg-emerald-50 text-emerald-700" },
  },
  {
    gate: "Configuration",
    desc: "Policies, authority delegations, data residency boundaries and local exclusion.",
    badge: { text: "▲ IN PROGRESS", color: "border-sky-300 bg-sky-50 text-sky-700" },
  },
  {
    gate: "Validation",
    desc: "Dual administration check; SOD breach, third-party and proxy source health; professional review, treasury.",
    badge: { text: "■ 2 BLOCKS · 1 REVIEW PENDING", color: "border-rose-300 bg-rose-50 text-rose-700" },
    indicatorColor: "bg-rose-500",
    isHighlighted: true,
  },
  {
    gate: "Shadow comparison",
    desc: "Recorded live authority comparisons; dual-run trace and transactional audit.",
    badge: { text: "NOT STARTED", color: "border-slate-300 bg-slate-50 text-slate-600" },
    indicatorColor: "bg-amber-400",
  },
  {
    gate: "Readiness decision",
    desc: "Human/accountable human mandatory sign-off with all 8 gates resolved or assessed with explicit commercial/regulatory exception.",
    badge: { text: "■ CANNOT PROCEED", color: "border-rose-300 bg-rose-50 text-rose-700" },
    indicatorColor: "bg-rose-600",
  },
  {
    gate: "Activation",
    desc: "Only approved workflow policy, with effective time, owner, execution or handoff and audit record.",
    badge: { text: "NOT STARTED", color: "border-slate-300 bg-slate-50 text-slate-600" },
  },
  {
    gate: "Stabilization",
    desc: "Reconciliation, source and integration health, exceptions, evidence review and runway to business-as-usual.",
    badge: { text: "NOT STARTED", color: "border-slate-300 bg-slate-50 text-slate-600" },
  },
];

export default function EightGatesShadowBeforeReadinessSection() {
  return (
    <section className="w-full bg-[#F7F5F0] text-[#08222F] py-14 sm:py-20 px-4 sm:px-6 lg:px-20 flex justify-center border-t border-[#ede9df]">
      <div className="max-w-[1240px] w-full flex flex-col">
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-end mb-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="w-5 h-[2px] bg-[#c5a059]" />
              <span className="text-[10.5px] font-semibold tracking-[0.2em] text-[#c5a059] uppercase font-mono">
                TRANSITION AND M&amp;A CONTRACT
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-[#08222F] leading-tight">
              Eight gates, with Shadow before readiness
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 flex flex-col justify-end"
          >
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              The same gate sequence governs a new market, a new entity, an acquisition and a divestiture. Only the scope changes.
            </p>
          </motion.div>
        </div>

        {/* 8 Gates Stacked Table/Cards */}
        <div className="flex flex-col space-y-2.5">
          {gates.map((row, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.04 }}
              className={`relative rounded-xl border border-slate-200/90 bg-white p-3.5 sm:px-5 sm:py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-sm hover:shadow-md transition-all duration-150 overflow-hidden ${
                row.isHighlighted ? "bg-[#FFFBFB]" : ""
              }`}
            >
              {/* Optional left accent color bar */}
              {row.indicatorColor && (
                <div
                  className={`absolute left-0 top-0 bottom-0 w-1 sm:w-1.5 ${row.indicatorColor}`}
                />
              )}

              {/* Gate Name & Description */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 flex-1 pl-1">
                <span className="text-xs sm:text-sm font-bold font-mono text-slate-900 sm:w-36 shrink-0">
                  {row.gate}
                </span>
                <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                  {row.desc}
                </p>
              </div>

              {/* Status Badge */}
              <div className="shrink-0 flex justify-end">
                <span
                  className={`inline-flex items-center px-2.5 py-1 rounded text-[9.5px] font-mono font-bold border tracking-wider uppercase ${row.badge.color}`}
                >
                  {row.badge.text}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile View: Notice Cards and Action Button */}
        <div className="block lg:hidden mt-6 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Red accent card */}
            <div className="rounded-xl border border-rose-200 bg-[#FFF9F9] p-4 text-[#08222F]">
              <div className="text-[10px] font-mono font-bold tracking-wider text-rose-700 uppercase mb-2">
                NOT AN ADVISORY
              </div>
              <p className="text-xs text-slate-700 leading-relaxed">
                These gates trace operating, integration and sovereign authority. No inspection, commercial review, due diligence, tax structuring, legal advice or transaction execution is promised or implied by any gate.
              </p>
            </div>

            {/* Gray accent card */}
            <div className="rounded-xl border border-slate-200 bg-white p-4 text-[#08222F]">
              <div className="text-[10px] font-mono font-bold tracking-wider text-slate-400 uppercase mb-2">
                SET STATUTORY POLICY REQUIRE
              </div>
              <p className="text-xs text-slate-700 leading-relaxed">
                Three professional reviews are unassigned and one jurisdiction has no approved source. No human communications audit enters a rapid evaluation stage in permitted, or fits gate-ready decision authorization when statutory clarification would compromise sovereignty and evidence.
              </p>
            </div>
          </div>

          <div>
            <button
              type="button"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#08222F] text-white text-xs font-semibold hover:bg-[#0A2A3A] transition-colors"
            >
              See the full transition model →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
