"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface MetricCard {
  label: string;
  count: number | string;
  subtext: string;
  isDark?: boolean;
}

const metrics: MetricCard[] = [
  {
    label: "REQUIRED",
    count: 7,
    subtext: "7 items required for full review qualification.",
  },
  {
    label: "RECEIVED",
    count: 4,
    subtext: "4 items verified and available to current role.",
  },
  {
    label: "MISSING",
    count: 1,
    subtext: "1 mandatory item not yet provided by any source.",
  },
  {
    label: "RESTRICTED",
    count: 1,
    subtext: "1 item exists but is outside current disclosure level.",
  },
  {
    label: "STALE",
    count: 1,
    subtext: "1 item exceeds maximum freshness interval.",
  },
  {
    label: "SUPERSEDED",
    count: 0,
    subtext: "No prior versions requiring historical chain review.",
  },
  {
    label: "VERIFICATION PENDING",
    count: 1,
    subtext: "1 item under active review by assurance owner.",
  },
  {
    label: "NO COMPOSITE SCORE",
    count: "",
    subtext:
      "Seven discrete states. Conflating restricted with missing or stale with verified produces misleading compliance claims.",
    isDark: true,
  },
];

interface EvidenceItem {
  name: string;
  type: string;
  source: string;
  owner: string;
  verification: string;
  verificationStatus?: "verified" | "unverified" | "incomplete" | "none" | "restricted";
  freshness: string;
  freshnessStatus?: "current" | "stale" | "none" | "no_access";
  state: string;
  stateBadge: "received" | "pending" | "missing" | "restricted" | "stale";
}

const evidenceInventory: EvidenceItem[] = [
  {
    name: "Purchase order PO-2024-0791",
    type: "Transaction",
    source: "ERP procurement",
    owner: "Procurement",
    verification: "Verified",
    verificationStatus: "verified",
    freshness: "Current",
    freshnessStatus: "current",
    state: "RECEIVED",
    stateBadge: "received",
  },
  {
    name: "Invoice INV-8821",
    type: "Transaction",
    source: "ERP accounts payable",
    owner: "Finance ops",
    verification: "Verified",
    verificationStatus: "verified",
    freshness: "Current",
    freshnessStatus: "current",
    state: "RECEIVED",
    stateBadge: "received",
  },
  {
    name: "Vendor master snapshot",
    type: "Record",
    source: "Vendor master",
    owner: "Procurement",
    verification: "Verified",
    verificationStatus: "verified",
    freshness: "Current",
    freshnessStatus: "current",
    state: "RECEIVED",
    stateBadge: "received",
  },
  {
    name: "Supplier notification email",
    type: "Correspondence",
    source: "admin@zoiko",
    owner: "AP",
    verification: "UNVERIFIED SOURCE",
    verificationStatus: "unverified",
    freshness: "Current",
    freshnessStatus: "current",
    state: "VERIFICATION PENDING",
    stateBadge: "pending",
  },
  {
    name: "Bank call-back verification",
    type: "Control record",
    source: "—",
    owner: "Treasury",
    verification: "—",
    verificationStatus: "none",
    freshness: "—",
    freshnessStatus: "none",
    state: "MISSING",
    stateBadge: "missing",
  },
  {
    name: "Supplier due-diligence file",
    type: "Document",
    source: "Diligence store",
    owner: "Compliance",
    verification: "Not within view",
    verificationStatus: "restricted",
    freshness: "No access",
    freshnessStatus: "no_access",
    state: "RESTRICTED",
    stateBadge: "restricted",
  },
  {
    name: "Contract CTR-0918",
    type: "Document",
    source: "Contract repository",
    owner: "Legal",
    verification: "Verified",
    verificationStatus: "verified",
    freshness: "54 MONTHS OLD",
    freshnessStatus: "stale",
    state: "STALE",
    stateBadge: "stale",
  },
  {
    name: "Exception approval record",
    type: "Decision",
    source: "Governance archive",
    owner: "Compliance",
    verification: "CHECK INCOMPLETE",
    verificationStatus: "incomplete",
    freshness: "Current",
    freshnessStatus: "current",
    state: "VERIFICATION PENDING",
    stateBadge: "pending",
  },
];

export default function CountsAndStateLabelsSection() {
  return (
    <section className="w-full bg-white text-[#0f172a] py-20 px-6 lg:px-20 flex justify-center border-t border-[#e2e8f0]">
      <div className="max-w-[1240px] w-full flex flex-col">
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-5 h-[2px] bg-[#c5a059]" />
              <span className="text-[10.5px] font-semibold tracking-[0.2em] text-[#c5a059] uppercase">
                EVIDENCE HEALTH
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#08222F] tracking-tight leading-[1.14]">
              Counts and state labels —
              <br />
              deliberately not a score
            </h2>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-5 flex items-center lg:pt-3">
            <p className="text-[#566573] text-[13.5px] sm:text-sm leading-relaxed max-w-[480px]">
              Seven explicit states. &quot;Restricted&quot; is not the same as &quot;missing&quot;,
              and conflating them would misrepresent both the evidence and
              the reviewer&apos;s permission.
            </p>
          </div>
        </div>

        {/* 8-Card State Metrics Grid (4 cols x 2 rows) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {metrics.map((m, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.04, ease: "easeOut" }}
              className={`rounded-xl border p-4 sm:p-5 flex flex-col justify-between shadow-xs ${
                m.isDark
                  ? "bg-[#08222F] text-white border-[#1a3a4f]"
                  : "bg-white border-[#dbe4eb]"
              }`}
            >
              <div>
                <span
                  className={`text-[9.5px] font-mono font-bold tracking-[0.14em] uppercase block mb-2 ${
                    m.isDark ? "text-[#c5a059]" : "text-[#7896a9]"
                  }`}
                >
                  {m.label}
                </span>
                {m.count !== "" && (
                  <div className="text-2xl sm:text-3xl font-bold font-mono text-[#08222F] mb-2 tracking-tight">
                    {m.count}
                  </div>
                )}
              </div>
              <p
                className={`text-[11.5px] sm:text-[12px] leading-relaxed ${
                  m.isDark ? "text-[#a2b7c6]" : "text-[#566874]"
                }`}
              >
                {m.subtext}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Desktop Graphic Container (pi7.png) - PRESERVED FOR DESKTOP ONLY */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="hidden lg:block w-full rounded-2xl overflow-hidden border border-[#dbe4eb] bg-[#f8fafc] shadow-lg"
        >
          <Image
            src="/operating-intelligence/pi7.png"
            alt="Seven explicit evidence health states visual"
            width={1240}
            height={600}
            priority
            className="w-full h-auto object-contain block"
          />
        </motion.div>

        {/* Mobile Terminal Table Container - SHOWN ON MOBILE ONLY (lg:hidden) */}
        <div className="block lg:hidden w-full">
          <div className="rounded-xl overflow-hidden border border-[#1e3a4e] bg-[#0c1e28] shadow-xl">
            {/* Top Bar */}
            <div className="bg-[#081721] px-4 py-3 border-b border-[#183446] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-mono font-bold text-white tracking-wider">
                  EVIDENCE INVENTORY · VEN-4471
                </span>
              </div>
              <div className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
                <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
                <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
              </div>
            </div>

            {/* Subheader */}
            <div className="bg-[#0b212f] px-4 py-2 border-b border-[#183446]">
              <span className="text-[9.5px] font-mono font-semibold text-[#8ca8ba] tracking-wider uppercase">
                EACH ITEM WITH SOURCE, OWNER, VERIFICATION STATE AND FRESHNESS
              </span>
            </div>

            {/* Table Container with horizontal scroll */}
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[760px]">
                <thead>
                  <tr className="border-b border-[#183446] bg-[#081c29] text-[9.5px] font-mono font-bold text-[#648498] uppercase tracking-wider">
                    <th className="py-2.5 px-3">EVIDENCE ITEM</th>
                    <th className="py-2.5 px-3">TYPE</th>
                    <th className="py-2.5 px-3">SOURCE</th>
                    <th className="py-2.5 px-3">OWNER</th>
                    <th className="py-2.5 px-3">VERIFICATION</th>
                    <th className="py-2.5 px-3">FRESHNESS</th>
                    <th className="py-2.5 px-3 text-right">STATE</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#132c3c] text-[11px] font-mono">
                  {evidenceInventory.map((row, idx) => (
                    <tr key={idx} className="hover:bg-[#0f2838] transition-colors">
                      <td className="py-3 px-3 font-medium text-white whitespace-nowrap">
                        {row.name}
                      </td>
                      <td className="py-3 px-3 text-[#94a3b8] whitespace-nowrap">
                        {row.type}
                      </td>
                      <td className="py-3 px-3 text-[#cbd5e1] whitespace-nowrap">
                        {row.source}
                      </td>
                      <td className="py-3 px-3 text-[#94a3b8] whitespace-nowrap">
                        {row.owner}
                      </td>
                      <td className="py-3 px-3 whitespace-nowrap">
                        {row.verificationStatus === "unverified" ? (
                          <span className="inline-flex items-center gap-1 text-rose-400 font-semibold">
                            <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                            {row.verification}
                          </span>
                        ) : row.verificationStatus === "incomplete" ? (
                          <span className="inline-flex items-center gap-1 text-amber-400 font-semibold">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                            {row.verification}
                          </span>
                        ) : row.verificationStatus === "restricted" ? (
                          <span className="text-[#64748b]">{row.verification}</span>
                        ) : row.verificationStatus === "none" ? (
                          <span className="text-[#64748b]">—</span>
                        ) : (
                          <span className="text-emerald-400">{row.verification}</span>
                        )}
                      </td>
                      <td className="py-3 px-3 whitespace-nowrap">
                        {row.freshnessStatus === "stale" ? (
                          <span className="inline-flex items-center gap-1 text-amber-400 font-semibold">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                            {row.freshness}
                          </span>
                        ) : row.freshnessStatus === "no_access" ? (
                          <span className="text-[#64748b]">{row.freshness}</span>
                        ) : row.freshnessStatus === "none" ? (
                          <span className="text-[#64748b]">—</span>
                        ) : (
                          <span className="text-emerald-400">{row.freshness}</span>
                        )}
                      </td>
                      <td className="py-3 px-3 text-right whitespace-nowrap">
                        {row.stateBadge === "received" ? (
                          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-emerald-950/70 border border-emerald-500/30 text-emerald-400 text-[10px] font-bold">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                            RECEIVED
                          </span>
                        ) : row.stateBadge === "pending" ? (
                          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-amber-950/70 border border-amber-500/30 text-amber-400 text-[10px] font-bold">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                            VERIFICATION PENDING
                          </span>
                        ) : row.stateBadge === "missing" ? (
                          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-rose-950/70 border border-rose-500/30 text-rose-400 text-[10px] font-bold">
                            <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                            MISSING
                          </span>
                        ) : row.stateBadge === "restricted" ? (
                          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-slate-800 border border-slate-600 text-slate-300 text-[10px] font-bold">
                            <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                            RESTRICTED
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-amber-950/70 border border-amber-500/30 text-amber-400 text-[10px] font-bold">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                            STALE
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-4">
            <button className="bg-[#08222F] hover:bg-[#0e3448] text-white px-5 py-3 rounded-full text-xs font-semibold inline-flex items-center gap-2 transition-colors">
              Explore evidence architecture
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
