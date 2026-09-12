"use client";

import React from "react";
import { motion } from "framer-motion";
import MobileReadyIsAWorkflowStateView from "./MobileReadyIsAWorkflowStateView";

interface CoverageStateItem {
  name: string;
  badgeColor: string;
  description: string;
}

const coverageStates: CoverageStateItem[] = [
  {
    name: "READY FOR REVIEW",
    badgeColor: "border-emerald-500/50 bg-emerald-950/40 text-emerald-300",
    description: "All primary ledger reconciliations submitted and dual-signoff verified.",
  },
  {
    name: "PENDING",
    badgeColor: "border-amber-500/50 bg-amber-950/40 text-amber-300",
    description: "Reconciliation variance within acceptable threshold ($25k) awaiting write-off authorization.",
  },
  {
    name: "EXCEPTION RAISED",
    badgeColor: "border-rose-500/50 bg-rose-950/40 text-rose-300",
    description: "Mandatory supporting document missing or statutory compliance limit exceeded.",
  },
  {
    name: "DUAL SIGN-OFF PENDING",
    badgeColor: "border-sky-500/50 bg-sky-950/40 text-sky-300",
    description: "Awaiting secondary executive authorization from CFO or Group Controller.",
  },
  {
    name: "FROZEN / LOCKED",
    badgeColor: "border-slate-500/50 bg-slate-800/40 text-slate-300",
    description: "Period closed against further ledger mutations; read-only console enabled.",
  },
  {
    name: "TECHNICAL DRIFT DETECTED",
    badgeColor: "border-indigo-500/50 bg-indigo-950/40 text-indigo-300",
    description: "Data hash mismatch detected between ERP ledger and banking feed.",
  },
  {
    name: "POLICY EXCEPTION",
    badgeColor: "border-blue-500/50 bg-blue-950/40 text-blue-300",
    description: "Compensating control approved with time-bound audit committee dispensation.",
  },
];

export default function ReadyIsAWorkflowStateSection() {
  return (
    <section className="w-full bg-[#08222F] text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-20 flex justify-center border-t border-[#12364c]">
      <div className="max-w-[1240px] w-full flex flex-col">
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-end mb-12 sm:mb-14">
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
                AUDITING PREPARATION AND RECORDING LAW
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-white leading-tight">
              Ready is a workflow state, not an assurance opinion
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 flex flex-col justify-end"
          >
            <p className="text-sm sm:text-base text-[#D4E4ED] leading-relaxed">
              Seven statuses, and one disclosure that governs how the word &quot;ready&quot; may be used anywhere on this page.
            </p>
          </motion.div>
        </div>

        {/* Desktop View: 2-Column Main Content (strictly hidden on mobile, visible on lg) */}
        <div className="hidden lg:grid grid-cols-12 gap-8 items-start">
          {/* Left Column: Terminal Card */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="col-span-5 rounded-2xl border border-[#133c54] bg-[#061923] p-6 sm:p-7 shadow-xl shadow-black/30 flex flex-col"
          >
            {/* Terminal Header */}
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#113247]">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                <span className="text-xs font-mono font-bold tracking-wider text-slate-200 uppercase">
                  DECISION PROFILE : FWD-CLOSE
                </span>
              </div>
              <span className="text-[10px] font-mono text-[#c5a059] bg-[#c5a059]/10 px-2 py-0.5 rounded border border-[#c5a059]/20">
                ACTIVE
              </span>
            </div>

            {/* Terminal Key-Value List */}
            <div className="space-y-3 font-mono text-xs text-slate-300">
              <div className="flex justify-between py-1 border-b border-[#0f2c3e]">
                <span className="text-slate-400">Decision Class:</span>
                <span className="text-white font-semibold">Year-End Close Sign-Off &amp; Lock</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#0f2c3e]">
                <span className="text-slate-400">Tested Target:</span>
                <span className="text-white font-semibold">2026-Q4 Audited Entity Accounts</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#0f2c3e]">
                <span className="text-slate-400">Governance Group:</span>
                <span className="text-white font-semibold">Finance Committee &amp; Group Audit</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#0f2c3e]">
                <span className="text-slate-400">Required Signers:</span>
                <span className="text-emerald-400 font-semibold">4/4 Roles Authorized</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#0f2c3e]">
                <span className="text-slate-400">Status Override:</span>
                <span className="text-rose-400 font-semibold">FORBIDDEN BY PROTOCOL</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-slate-400">Source Evidence:</span>
                <span className="text-sky-300 font-semibold">18 Immutable Artifacts Linked</span>
              </div>
            </div>

            {/* Warning Callout Box */}
            <div className="mt-6 p-3.5 rounded-xl border border-amber-500/30 bg-amber-500/10 text-[11.5px] leading-relaxed text-amber-200">
              <strong className="font-semibold text-amber-300">Notice:</strong> Close readiness signifies completeness of operational inputs, never a substitute for external statutory auditor sign-off.
            </div>
          </motion.div>

          {/* Right Column: Governance Coverage States */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="col-span-7 flex flex-col rounded-2xl border border-[#133c54] bg-[#061923] p-5 sm:p-7 shadow-xl shadow-black/30"
          >
            <div className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider mb-4 pb-3 border-b border-[#113247]">
              GOVERNANCE COVERAGE STATES
            </div>

            <div className="space-y-2.5">
              {coverageStates.map((state, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between gap-2 p-2.5 rounded-lg bg-[#04121a]/70 border border-[#0d2737] hover:border-[#133c54] transition-colors"
                >
                  <span
                    className={`inline-block px-2.5 py-1 rounded text-[10.5px] font-mono font-bold tracking-wide border ${state.badgeColor} shrink-0`}
                  >
                    {state.name}
                  </span>
                  <span className="text-xs text-[#D4E4ED] text-right">
                    {state.description}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Mobile View: Dedicated Mobile Disclosure, Terminal & Stacked Cards (strictly visible on mobile, hidden on lg desktop) */}
        <div className="block lg:hidden w-full">
          <MobileReadyIsAWorkflowStateView />
        </div>
      </div>
    </section>
  );
}
