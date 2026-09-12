"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Info } from "lucide-react";

const lifecycleStages = [
  "Inbound",
  "At Rest",
  "In Motion",
  "Transit",
  "Processing",
  "Storage",
  "Backup",
  "Archive",
  "Disaster",
  "Analysis",
  "Federated",
  "Partner",
  "Export",
  "Deletion",
];

interface DataClassRow {
  dataClass: string;
  storage: string;
  residency: string;
  encrypt: string;
  backup: string;
  retentionSchedule: string;
  customerAudit: string;
  ownership: string;
  sourceDate: string;
  highlight?: boolean;
}

const dataRows: DataClassRow[] = [
  {
    dataClass: "Primary master account",
    storage: "Customer region",
    residency: "In-region",
    encrypt: "In-region",
    backup: "Customer replication",
    retentionSchedule: "Permanent (standby)",
    customerAudit: "Eligible",
    ownership: "Customer",
    sourceDate: "Apr 2024",
  },
  {
    dataClass: "Ledger",
    storage: "Customer region",
    residency: "In-region",
    encrypt: "In-region",
    backup: "Customer replication",
    retentionSchedule: "None",
    customerAudit: "Eligible",
    ownership: "Customer",
    sourceDate: "Apr 2024",
  },
  {
    dataClass: "Invoice",
    storage: "Customer region",
    residency: "In-region",
    encrypt: "In-region",
    backup: "Customer replication",
    retentionSchedule: "7 years standard",
    customerAudit: "Eligible",
    ownership: "Customer",
    sourceDate: "Apr 2024",
  },
  {
    dataClass: "Employee",
    storage: "Customer region",
    residency: "In-region",
    encrypt: "In-region",
    backup: "Customer replication",
    retentionSchedule: "7 years standard",
    customerAudit: "Requirement-led",
    ownership: "Customer",
    sourceDate: "Apr 2024",
  },
  {
    dataClass: "Audit + evidence",
    storage: "Customer region",
    residency: "In-region",
    encrypt: "In-region",
    backup: "Immutable archive",
    retentionSchedule: "10 years standard",
    customerAudit: "Eligible",
    ownership: "Provider",
    sourceDate: "Apr 2024",
  },
  {
    dataClass: "Support tickets",
    storage: "Customer region",
    residency: "In-region",
    encrypt: "Per-region policy",
    backup: "Customer replication",
    retentionSchedule: "Customized",
    customerAudit: "Exemption only (Tier)",
    ownership: "ZoikoSuite",
    sourceDate: "01 Jul 2024",
  },
  {
    dataClass: "Telemetry / logs",
    storage: "Centralized",
    residency: "Multi-region global cluster",
    encrypt: "Per-region policy",
    backup: "US",
    retentionSchedule: "7 days only (opt-out)",
    customerAudit: "Disclosed to requestor",
    ownership: "ZoikoSuite",
    sourceDate: "01 Jul 2024",
    highlight: true,
  },
  {
    dataClass: "Backups",
    storage: "Customer + Provider options",
    residency: "Customer/provider boundary",
    encrypt: "Per-region policy",
    backup: "US",
    retentionSchedule: "7 days only (opt-out)",
    customerAudit: "Disclosed to requestor",
    ownership: "ZoikoSuite",
    sourceDate: "2024-Q3",
    highlight: true,
  },
  {
    dataClass: "Third-party",
    storage: "Provider self-hosted",
    residency: "Provider configuration",
    encrypt: "EU",
    backup: "Provider replication",
    retentionSchedule: "Provider agreement",
    customerAudit: "Agreement-dependent",
    ownership: "Provider",
    sourceDate: "01 Jul 2024",
  },
  {
    dataClass: "Event subscriber",
    storage: "Provider self-hosted",
    residency: "Provider configuration",
    encrypt: "Per partner policy",
    backup: "Provider replication",
    retentionSchedule: "None",
    customerAudit: "Non-disclosed data",
    ownership: "Third-party subscriber",
    sourceDate: "01 Jul 2024",
  },
];

export default function DataLocationLifecycleSection() {
  const [activeTab, setActiveTab] = useState("At Rest");

  return (
    <section className="w-full bg-white text-[#0f172a] py-16 sm:py-20 px-4 sm:px-6 lg:px-20 flex justify-center border-t border-[#ede9df]">
      <div className="max-w-[1240px] w-full flex flex-col">
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-end mb-10 sm:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="w-5 h-[2px] bg-[#c5a059]" />
              <span className="text-[10.5px] font-semibold tracking-[0.2em] text-[#854d0e] uppercase">
                DATA RESIDENCY
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-[#0f172a] leading-tight">
              Data Location &amp; Lifecycle
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
              The navigation label says &quot;Data Residency&quot; because that is what
              people search for. The proof is titled differently on purpose —
              &quot;residency&quot; invites a one-region answer, and a lifecycle has
              thirteen stages.
            </p>
          </motion.div>
        </div>

        {/* Data Location Registry Terminal Card */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full rounded-2xl border border-[#1a3f55] bg-[#071d29] overflow-hidden shadow-2xl flex flex-col"
        >
          {/* Terminal Top Bar */}
          <div className="bg-[#051620] px-4 py-3 flex items-center justify-between border-b border-[#12364c]">
            <span className="text-[10px] font-mono font-bold tracking-[0.14em] text-[#7ea0b5] uppercase">
              DATA LOCATION REGISTRY — THIRTEEN STAGES OF DATA LIFECYCLE
            </span>
            <div className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
              <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
              <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
            </div>
          </div>

          {/* Navigation Tabs Bar */}
          <div className="bg-[#0a2333] px-3 py-2 border-b border-[#12364c] overflow-x-auto flex items-center gap-1 text-[11px] font-mono">
            {lifecycleStages.map((stage) => (
              <button
                key={stage}
                onClick={() => setActiveTab(stage)}
                className={`px-3 py-1 rounded-md transition-colors whitespace-nowrap ${
                  activeTab === stage
                    ? "bg-[#164e63] text-white font-semibold shadow-xs"
                    : "text-slate-400 hover:text-white hover:bg-[#0f3248]"
                }`}
              >
                {stage}
              </button>
            ))}
          </div>

          {/* Inner White Table Container */}
          <div className="bg-white text-slate-900 p-4 sm:p-6 flex flex-col">
            <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider mb-3">
              FOR EACH CLASS OF DATA, WHERE IT LIVES, WHO HOLDS THE ENCRYPTION KEYS
            </span>

            <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
              <table className="w-full min-w-[880px] text-left border-collapse text-[11.5px]">
                <thead>
                  <tr className="border-b border-slate-200 text-[10px] font-mono text-slate-500 uppercase tracking-wider">
                    <th className="py-2.5 pr-3 font-semibold">Data Class</th>
                    <th className="py-2.5 px-2 font-semibold">Storage</th>
                    <th className="py-2.5 px-2 font-semibold">Residency</th>
                    <th className="py-2.5 px-2 font-semibold">Encrypt</th>
                    <th className="py-2.5 px-2 font-semibold">Backup</th>
                    <th className="py-2.5 px-2 font-semibold">Retention Schedule</th>
                    <th className="py-2.5 px-2 font-semibold">Customer Audit</th>
                    <th className="py-2.5 px-2 font-semibold">Ownership</th>
                    <th className="py-2.5 pl-2 font-semibold">Source Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {dataRows.map((row, rIdx) => (
                    <tr
                      key={rIdx}
                      className={row.highlight ? "bg-[#FEF9EE]" : "hover:bg-slate-50/50"}
                    >
                      <td className="py-2.5 pr-3 font-semibold text-slate-900 whitespace-nowrap">
                        {row.dataClass}
                      </td>
                      <td className="py-2.5 px-2 text-slate-600 whitespace-nowrap">
                        {row.storage}
                      </td>
                      <td className="py-2.5 px-2 text-slate-600 whitespace-nowrap font-mono">
                        {row.residency}
                      </td>
                      <td className="py-2.5 px-2 text-slate-600 whitespace-nowrap font-mono">
                        {row.encrypt}
                      </td>
                      <td className="py-2.5 px-2 text-slate-600 whitespace-nowrap">
                        {row.backup}
                      </td>
                      <td className="py-2.5 px-2 text-slate-600 whitespace-nowrap">
                        {row.retentionSchedule}
                      </td>
                      <td className="py-2.5 px-2 text-slate-600 whitespace-nowrap">
                        {row.customerAudit}
                      </td>
                      <td className="py-2.5 px-2 text-slate-600 whitespace-nowrap">
                        {row.ownership}
                      </td>
                      <td className="py-2.5 pl-2 font-mono text-slate-500 whitespace-nowrap">
                        {row.sourceDate}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Bottom Qualification Banner */}
            <div className="bg-sky-50/70 border border-sky-200 rounded-lg p-3.5 flex items-start gap-2.5 text-[11.5px] text-sky-950 leading-snug mt-5">
              <Info className="w-4 h-4 text-sky-700 shrink-0 mt-0.5" />
              <span>
                <strong>Qualification:</strong> A primary storage region alone implies zero of the other stages: data in transit and federated analytics can cross regions while at rest stays local without violating isolation in that class — the control scope dictates boundaries.
              </span>
            </div>
          </div>
        </motion.div>

        {/* Mobile-only CTA button (lg:hidden) */}
        <div className="mt-6 flex lg:hidden">
          <a
            href="/platform-overview"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#08222F] text-white text-xs font-semibold hover:bg-[#0c2f42] transition-colors shadow-sm"
          >
            <span>Review data residency requirements</span>
            <span className="ml-1 text-[#C5A059]">»</span>
          </a>
        </div>
      </div>
    </section>
  );
}
