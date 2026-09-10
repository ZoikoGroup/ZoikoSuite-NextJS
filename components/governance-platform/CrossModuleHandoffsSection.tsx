"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";

interface HandoffStage {
  stage: string;
  module: string;
  handoffState: string;
  handoffStateType: "sealed" | "evaluated" | "degraded" | "conditional" | "pending" | "blocked";
  governanceAction: string;
  evidenceSeal: string;
  status: string;
  statusType: "completed" | "evaluated" | "degraded" | "pending" | "blocked";
  highlight?: boolean;
}

const handoffStages: HandoffStage[] = [
  {
    stage: "Procurement intake",
    module: "Procurement Operations",
    handoffState: "● SEALED",
    handoffStateType: "sealed",
    governanceAction: "Supplier bank-detail change requested",
    evidenceSeal: "Procurement v3 digest",
    status: "● COMPLETED",
    statusType: "completed",
  },
  {
    stage: "Statutory review",
    module: "Legal & Contracts",
    handoffState: "● EVALUATED",
    handoffStateType: "evaluated",
    governanceAction: "Jurisdiction scope confirmed under UK",
    evidenceSeal: "Contract register record",
    status: "● EVALUATED",
    statusType: "evaluated",
  },
  {
    stage: "Supplier verification",
    module: "Supplier & Commercial Ops",
    handoffState: "▲ DEGRADED",
    handoffStateType: "degraded",
    governanceAction: "Bank verification connector timed out",
    evidenceSeal: "! EXCEPTION REGISTERED",
    status: "▲ DEGRADED",
    statusType: "degraded",
    highlight: true,
  },
  {
    stage: "Account payable",
    module: "Accounts Payable",
    handoffState: "● CONDITIONAL ON RECOVERY",
    handoffStateType: "conditional",
    governanceAction: "Blocked pending supplier master verification",
    evidenceSeal: "AP check register ledger",
    status: "● BLOCKED",
    statusType: "blocked",
  },
  {
    stage: "Treasury clearance",
    module: "Treasury & Cash Position",
    handoffState: "● PENDING",
    handoffStateType: "pending",
    governanceAction: "Authority tier > $50,000 flagged for secondary review",
    evidenceSeal: "Treasury ledger seal",
    status: "● PENDING",
    statusType: "pending",
  },
  {
    stage: "Accounting exposure",
    module: "Accounting & General Ledger",
    handoffState: "● PENDING",
    handoffStateType: "pending",
    governanceAction: "Intercompany threshold review",
    evidenceSeal: "Ledger reconciliation",
    status: "● PENDING",
    statusType: "pending",
  },
  {
    stage: "External transfer",
    module: "Bank connector",
    handoffState: "● BLOCKED",
    handoffStateType: "blocked",
    governanceAction: "Release blocked across bank API gateway: pre-clearance failed",
    evidenceSeal: "API audit trail sealed",
    status: "● BLOCKED",
    statusType: "blocked",
  },
];

interface DegradedStateItem {
  title: string;
  description: string;
  tone: "rose" | "amber" | "sky" | "slate";
}

const degradedStates: DegradedStateItem[] = [
  {
    title: "Unreachable",
    description: "A defined service or external connector timed out. Never falls through to permitted; marks action as degraded pending resolution.",
    tone: "rose",
  },
  {
    title: "Stale data",
    description: "Source data has passed its freshness threshold. Warns downstream components and requires revalidation before critical steps.",
    tone: "amber",
  },
  {
    title: "Conflicting sources",
    description: "Two registered sources produce conflicting outputs. Retains both readings and blocks progression pending human arbitration.",
    tone: "rose",
  },
  {
    title: "Missing context",
    description: "Required context (such as entity jurisdiction or tax residency) is absent. Halts policy evaluation until context is supplied.",
    tone: "amber",
  },
  {
    title: "Revoked credential",
    description: "A key or token used for verification has been revoked. All decisions relying on it are marked for review.",
    tone: "rose",
  },
  {
    title: "Configuration required",
    description: "A required policy or control rule has not been configured for this entity or scope. Blocks rather than assuming a default.",
    tone: "slate",
  },
  {
    title: "Degraded dependency",
    description: "A secondary service required for complete evidence collection is unavailable. Allows partial progress with explicit warnings.",
    tone: "amber",
  },
  {
    title: "Emergency bypass",
    description: "An emergency bypass was invoked. Records the authorizing identity, reason and timestamp, and schedules mandatory retrospective review.",
    tone: "sky",
  },
];

export default function CrossModuleHandoffsSection() {
  const getBadgeClass = (type: string) => {
    switch (type) {
      case "completed":
      case "sealed":
        return "bg-emerald-50 text-emerald-700 border-emerald-200";
      case "evaluated":
        return "bg-sky-50 text-sky-700 border-sky-200";
      case "degraded":
        return "bg-rose-50 text-rose-700 border-rose-200 font-bold";
      case "conditional":
      case "pending":
        return "bg-amber-50 text-amber-800 border-amber-200";
      case "blocked":
        return "bg-slate-100 text-slate-700 border-slate-300";
      default:
        return "bg-slate-50 text-slate-700 border-slate-200";
    }
  };

  return (
    <section className="w-full bg-[#FAF8F5] text-[#0f172a] py-16 sm:py-20 px-4 sm:px-6 lg:px-20 flex justify-center border-t border-[#ede9df]">
      <div className="max-w-[1240px] w-full flex flex-col">
        {/* Header Grid - 100% UNTOUCHED FOR DESKTOP */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-end mb-8 sm:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col"
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="w-5 h-[2px] bg-[#c5a059]" />
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#854d0e]">
                CROSS-MODULE GOVERNANCE AND DEGRADED STATES
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-[#0f172a] leading-tight">
              One governance model, six modules, explicit handoffs
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
              Governance travels with the action across modules. Where a source
              or service fails, the platform says so rather than falling through
              to permitted.
            </p>
          </motion.div>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* DESKTOP-ONLY VISUAL (gp5.png) - 100% UNTOUCHED FOR DESKTOP    */}
        {/* ------------------------------------------------------------- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="hidden lg:flex w-full rounded-2xl overflow-hidden shadow-sm border border-slate-200/80 bg-slate-950 items-center justify-center p-4"
        >
          <Image
            src="/governance-platform/gp5.png"
            alt="One governance model, six modules, explicit handoffs and degraded states architecture"
            width={1240}
            height={680}
            className="w-full h-auto rounded-xl object-contain"
            priority
          />
        </motion.div>

        {/* ------------------------------------------------------------- */}
        {/* MOBILE-ONLY SECTION EXTENSIONS (STRICTLY HIDDEN ON DESKTOP)   */}
        {/* ------------------------------------------------------------- */}
        <div className="lg:hidden flex flex-col space-y-6">
          {/* Mobile Terminal Card */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="w-full rounded-2xl border border-[#1a3f55] bg-[#071d29] overflow-hidden shadow-2xl flex flex-col"
          >
            {/* Top Bar */}
            <div className="bg-[#051620] px-3.5 py-2.5 flex items-center justify-between border-b border-[#12364c]">
              <span className="text-[9.5px] sm:text-[10px] font-mono font-bold tracking-[0.12em] text-[#7ea0b5] uppercase">
                CROSS-MODULE HANDOFFS · ACT-081
              </span>
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded text-[8.5px] font-mono font-bold tracking-wider bg-[#FDF2D6] text-amber-900 border border-[#E8C882]">
                  ILLUSTRATIVE — FICTITIOUS DATA
                </span>
                <div className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
                </div>
              </div>
            </div>

            {/* Inner White Table Card */}
            <div className="bg-white text-slate-900 p-4 sm:p-5 flex flex-col">
              <span className="text-[9.5px] font-mono font-bold text-slate-400 uppercase tracking-wider mb-3">
                CROSS-MODULE STAGES FOR PROPOSED BANK-DETAIL CHANGE (ACT-081) ACROSS SIX MODULES
              </span>

              {/* Scrollable Table */}
              <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
                <table className="w-full min-w-[640px] text-left border-collapse">
                  <thead>
                    <tr className="border-b border-slate-200 text-[10px] font-mono text-slate-500 uppercase tracking-wider">
                      <th className="py-2.5 pr-3 font-semibold">Stage</th>
                      <th className="py-2.5 px-2 font-semibold">Module</th>
                      <th className="py-2.5 px-2 font-semibold">Handoff State</th>
                      <th className="py-2.5 px-2 font-semibold">Governance Action</th>
                      <th className="py-2.5 px-2 font-semibold">Evidence Seal</th>
                      <th className="py-2.5 pl-2 font-semibold">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-[11.5px]">
                    {handoffStages.map((row, rIdx) => (
                      <tr
                        key={rIdx}
                        className={row.highlight ? "bg-[#FEF9EE]" : "hover:bg-slate-50/50"}
                      >
                        <td className="py-2.5 pr-3 font-semibold text-slate-900">
                          {row.stage}
                        </td>
                        <td className="py-2.5 px-2 text-slate-600 max-w-[130px] leading-tight">
                          {row.module}
                        </td>
                        <td className="py-2.5 px-2 whitespace-nowrap">
                          <span
                            className={`inline-block px-2 py-0.5 rounded text-[9px] font-mono font-semibold border ${getBadgeClass(
                              row.handoffStateType
                            )}`}
                          >
                            {row.handoffState}
                          </span>
                        </td>
                        <td className="py-2.5 px-2 text-slate-700 max-w-[180px] leading-tight">
                          {row.governanceAction}
                        </td>
                        <td className="py-2.5 px-2 text-slate-600 font-mono text-[10.5px]">
                          {row.evidenceSeal}
                        </td>
                        <td className="py-2.5 pl-2 whitespace-nowrap">
                          <span
                            className={`inline-block px-2 py-0.5 rounded text-[9px] font-mono font-semibold border ${getBadgeClass(
                              row.statusType
                            )}`}
                          >
                            {row.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Warning Callout Box */}
              <div className="bg-[#FEF9EE] border border-[#F3DFB5] rounded-lg p-3 flex items-start gap-2.5 text-[11px] text-amber-900 leading-snug mt-4">
                <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Degraded-state handoffs are explicit and named.</strong> When the bank verification connector fails, the platform surfaces the degraded state rather than assuming passed.
                </span>
              </div>
            </div>
          </motion.div>

          {/* Eight Degraded States List */}
          <div className="flex flex-col space-y-2.5">
            <span className="text-[10px] font-mono tracking-wider text-slate-400 uppercase font-semibold">
              EIGHT DEGRADED STATES ACROSS SERVICES
            </span>

            <div className="flex flex-col space-y-2">
              {degradedStates.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-slate-200/80 bg-white p-3.5 flex flex-col gap-1 shadow-xs"
                >
                  <span className={`text-xs font-bold ${
                    item.tone === "rose"
                      ? "text-rose-800"
                      : item.tone === "amber"
                      ? "text-amber-800"
                      : item.tone === "sky"
                      ? "text-sky-800"
                      : "text-slate-800"
                  }`}>
                    {item.title}
                  </span>
                  <p className="text-[11.5px] text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
