"use client";

import React from "react";
import { motion } from "framer-motion";

interface FailureClassCard {
  title: string;
  description: string;
}

const failureClasses: FailureClassCard[] = [
  {
    title: "Source cold",
    description: "Heartbeat missed or out of SLA",
  },
  {
    title: "Connector degraded",
    description: "Reconciliation failure; unhandled delta",
  },
  {
    title: "Authentication expired",
    description: "Credential expired; refresh required",
  },
  {
    title: "Scope changed",
    description: "Pre-conditions altered in customer context",
  },
  {
    title: "Schema mismatch",
    description: "Incompatible schema version",
  },
  {
    title: "Duplicate",
    description: "Processing key already dispatched",
  },
  {
    title: "Global lock held",
    description: "Concurrency affinity barrier in process",
  },
  {
    title: "Delivery failed",
    description: "Destined gateway returned 5xx",
  },
  {
    title: "Partial out-of-order",
    description: "Secondary dependency failed or out of order",
  },
  {
    title: "Replay pending",
    description: "Delivery ledger paused",
  },
  {
    title: "Unknown",
    description: "Status not recognized; auto-quarantine",
  },
  {
    title: "Border outage",
    description: "Cross-border traffic inhibited",
  },
];

interface MobileAffectedRecord {
  object: string;
  changeClass: string;
  status: string;
  statusType: "active" | "audited" | "quarantine";
  failedLine: string;
  sourceAuthority: string;
  executionContext: string;
  reconciliation: string;
  isHighlighted?: boolean;
}

const affectedRecords: MobileAffectedRecord[] = [
  {
    object: "Supplier record",
    changeClass: "Master record update",
    status: "● OPERATED",
    statusType: "active",
    failedLine: "None (All lines clear)",
    sourceAuthority: "Primary ERP",
    executionContext: "Procurement system",
    reconciliation: "Periodic sync daily",
  },
  {
    object: "Payment instruction",
    changeClass: "Disbursement",
    status: "● OPERATED",
    statusType: "active",
    failedLine: "Clearing node pass",
    sourceAuthority: "Banking node",
    executionContext: "Banking system",
    reconciliation: "Treasury",
  },
  {
    object: "Contract record",
    changeClass: "Counter-claim",
    status: "● AUDITED",
    statusType: "audited",
    failedLine: "Third-party audit",
    sourceAuthority: "Legal repository",
    executionContext: "Contract share",
    reconciliation: "Inspection",
  },
  {
    object: "Policy debt / dynamic context",
    changeClass: "Global barrier",
    status: "● QUARANTINE",
    statusType: "quarantine",
    failedLine: "Refused line — quarantine",
    sourceAuthority: "Global policy gate",
    executionContext: "Core policy gate",
    reconciliation: "Compensated",
    isHighlighted: true,
  },
  {
    object: "Address update",
    changeClass: "Master sync",
    status: "● OPERATED",
    statusType: "active",
    failedLine: "Validation in-residence",
    sourceAuthority: "HR",
    executionContext: "HR system",
    reconciliation: "Provider in-region",
  },
];

const shadowPillBadges = [
  "No degradation percentage",
  "Deterministic outcome",
  "No false-promotion",
  "Enforced Disaster Recovery and RTO/RPO",
  "Single transient view drop",
];

export default function ReliabilityQuarantineAdoptionSection() {
  return (
    <section className="w-full bg-[#FAF8F5] text-[#0f172a] py-14 sm:py-20 px-4 sm:px-6 lg:px-20 flex justify-center border-t border-[#ede9df] lg:hidden">
      <div className="max-w-[1240px] w-full flex flex-col space-y-6">
        {/* Header */}
        <div className="flex flex-col">
          <div className="flex items-center gap-2 mb-2.5">
            <span className="w-5 h-[2px] bg-[#c5a059]" />
            <span className="text-[10px] font-semibold tracking-[0.2em] text-[#854d0e] uppercase">
              RELIABILITY, QUARANTINE AND CONTROLLED ADOPTION
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0f172a] leading-tight mb-2">
            Affected records can never silently appear current
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            One truth rule governs the entire section: When something fails, the scope it touched is marked.
          </p>
        </div>

        {/* 12 Failure Classes Grid */}
        <div className="flex flex-col space-y-2">
          <span className="text-[10px] font-mono font-bold tracking-wider text-slate-400 uppercase">
            TWELVE FAILURE CLASSES
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {failureClasses.map((item, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-slate-200/90 bg-white p-3.5 flex flex-col justify-between shadow-2xs"
              >
                <h4 className="text-xs font-bold text-[#08222F] mb-1">
                  {item.title}
                </h4>
                <p className="text-[11px] text-slate-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Table of Affected Records (Terminal Card) */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="w-full rounded-2xl border border-[#1a3f55] bg-[#071d29] overflow-hidden shadow-2xl flex flex-col"
        >
          {/* Terminal Top Bar */}
          <div className="bg-[#051620] px-3.5 py-2.5 flex items-center justify-between border-b border-[#12364c]">
            <span className="text-[9.5px] font-mono font-bold tracking-[0.12em] text-[#7ea0b5] uppercase">
              TABLE OF AFFECTED RECORDS · SHADOW LEVEL: RECOVERY
            </span>
            <div className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
              <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
              <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
            </div>
          </div>

          {/* Inner White Table Container */}
          <div className="bg-white text-slate-900 p-3.5 sm:p-4 flex flex-col">
            <span className="text-[9.5px] font-mono font-bold text-slate-400 uppercase tracking-wider mb-2.5">
              CURRENT EXECUTIONS WITH RECOVERY, DEBT, SCOPE JURISDICTION AND PAIR ID
            </span>

            <div className="overflow-x-auto -mx-3.5 px-3.5 sm:mx-0 sm:px-0">
              <table className="w-full min-w-[620px] text-left border-collapse text-[10.5px]">
                <thead>
                  <tr className="border-b border-slate-200 text-[9px] font-mono text-slate-400 uppercase tracking-wider">
                    <th className="py-2 pr-2 font-semibold">OBJECT</th>
                    <th className="py-2 px-2 font-semibold">CHANGE CLASS</th>
                    <th className="py-2 px-2 font-semibold">RECORDS</th>
                    <th className="py-2 px-2 font-semibold">FAILED LINE RULE</th>
                    <th className="py-2 px-2 font-semibold">SOURCE AUTHORITY</th>
                    <th className="py-2 px-2 font-semibold">EXECUTION CONTEXT</th>
                    <th className="py-2 pl-2 font-semibold">RECONCILIATION</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-mono">
                  {affectedRecords.map((row, idx) => (
                    <tr
                      key={idx}
                      className={row.isHighlighted ? "bg-[#FFF9EB]" : "hover:bg-slate-50"}
                    >
                      <td className="py-2 pr-2 font-semibold text-slate-900 whitespace-nowrap font-sans">
                        {row.object}
                      </td>
                      <td className="py-2 px-2 text-slate-600 whitespace-nowrap font-sans">
                        {row.changeClass}
                      </td>
                      <td className="py-2 px-2 whitespace-nowrap">
                        {row.statusType === "active" && (
                          <span className="px-1.5 py-0.2 rounded text-[8px] bg-emerald-50 text-emerald-700 border border-emerald-200 font-semibold">
                            {row.status}
                          </span>
                        )}
                        {row.statusType === "audited" && (
                          <span className="px-1.5 py-0.2 rounded text-[8px] bg-amber-50 text-amber-800 border border-amber-200 font-semibold">
                            {row.status}
                          </span>
                        )}
                        {row.statusType === "quarantine" && (
                          <span className="px-1.5 py-0.2 rounded text-[8px] bg-amber-100 text-amber-900 border border-amber-300 font-semibold">
                            {row.status}
                          </span>
                        )}
                      </td>
                      <td className="py-2 px-2 text-slate-700 whitespace-nowrap font-sans">
                        {row.failedLine}
                      </td>
                      <td className="py-2 px-2 text-slate-600 whitespace-nowrap font-sans">
                        {row.sourceAuthority}
                      </td>
                      <td className="py-2 px-2 text-slate-600 whitespace-nowrap font-sans">
                        {row.executionContext}
                      </td>
                      <td className="py-2 pl-2 text-slate-600 whitespace-nowrap font-sans">
                        {row.reconciliation}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Footnote */}
            <p className="text-[9.5px] font-mono text-slate-400 pt-3 border-t border-slate-100 mt-2 leading-snug">
              Any affected object carries explicit status, failure classification, and delta pointers. Neither transaction nor reporting ever presents an unconfirmed state as current.
            </p>
          </div>
        </motion.div>

        {/* Transition & Shadow Mode Callout */}
        <div className="flex flex-col space-y-2">
          <span className="text-[10px] font-mono font-bold tracking-wider text-slate-400 uppercase">
            TRANSITION & SHADOW MODE — SYSTEM FIRST
          </span>
          <div className="flex flex-col gap-1.5 text-xs text-slate-700">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b]" />
              <span>Current execution only</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b]" />
              <span>Report comparison view</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b]" />
              <span>Difference</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b]" />
              <span>Impact</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b]" />
              <span>Evidence</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b]" />
              <span>Error</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b]" />
              <span>Heuristic</span>
            </div>
          </div>
        </div>

        {/* Shadow Mode Quote Callout */}
        <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-xs">
          <span className="text-[10px] font-mono font-bold tracking-wider text-slate-400 uppercase block mb-1">
            SHADOW MODE
          </span>
          <p className="text-xs sm:text-sm font-semibold text-[#08222F] leading-snug">
            Where supported, compare proposed governance behaviour with current processes without mutating transactions.
          </p>
        </div>

        {/* Red Alert Callout */}
        <div className="rounded-xl border border-rose-200 bg-rose-50/40 p-4 flex flex-col space-y-2.5">
          <span className="text-[10px] font-mono font-bold tracking-wider text-rose-800 uppercase">
            NOT SHADOW MODE: WHAT IS NOT DONE
          </span>
          <div className="flex flex-wrap gap-1.5">
            {shadowPillBadges.map((badge, idx) => (
              <span
                key={idx}
                className="px-2 py-0.5 rounded text-[9.5px] font-mono font-medium bg-white text-rose-900 border border-rose-200 shadow-2xs"
              >
                {badge}
              </span>
            ))}
          </div>
          <p className="text-xs text-rose-900/90 leading-relaxed pt-1">
            Production cutover, rollback parameters, failover and reverse-swaps require dedicated transition agreements; Shadow Mode exposes differences without executing reversals.
          </p>
        </div>

        {/* Gold Notice Callout */}
        <div className="rounded-xl border border-[#F6D896] bg-[#FFF8E7] p-4 text-[11.5px] text-[#78350F] leading-relaxed">
          <strong className="font-semibold block text-amber-900 mb-1">SERVICE COMMITMENTS:</strong>
          No uptime, latency, RTO, RPO or recovery guarantee is made without an approved commercial scope or contract. For current service incidents use System Status; for account-specific operational issues use Support.
        </div>
      </div>
    </section>
  );
}
