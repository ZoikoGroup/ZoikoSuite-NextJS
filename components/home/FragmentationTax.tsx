"use client";

import React from "react";
import { motion } from "framer-motion";

const items = [
  {
    number: "01",
    title: "Fragmented systems",
    description:
      "Finance, payroll, HR, contracts, and compliance maintain separate versions of truth.",
    impact: "Delayed decisions and reconciliation overhead",
  },
  {
    number: "02",
    title: "Jurisdictional blind spots",
    description:
      "Rules change by entity, worker, transaction, country, state, and filing authority.",
    impact: "Tax, employment, and regulatory exposure",
  },
  {
    number: "03",
    title: "Governance after execution",
    description:
      "Approvals, policy checks, and legal review occur outside the action path.",
    impact: "Control failures discovered too late",
  },
  {
    number: "04",
    title: "Evidence assembled manually",
    description:
      "Records, approvals, rules, and documents must be reconstructed during audit.",
    impact: "Slow, expensive, and fragile assurance",
  },
  {
    number: "05",
    title: "Integration sprawl",
    description:
      "Point-to-point dependencies multiply and ownership becomes unclear.",
    impact: "Security surface, vendor risk, and technical debt",
  },
] as const;

export default function FragmentationTax() {
  return (
    <section className="w-full bg-white text-[#0f172a] py-20 px-6 lg:px-24 flex items-center justify-center">
      <div className="max-w-6xl w-full flex flex-col">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8"
        >
          <div className="max-w-[640px]">
            {/* Subtitle with line */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-[2px] bg-[#b89742]" />
              <span className="text-xs uppercase tracking-[0.2em] font-medium text-[#b89742]">
                The Fragmentation Tax
              </span>
            </div>

            {/* Main Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight leading-[1.1] text-[#0f172a]">
              Your business operates as one system. Your software does not.
            </h2>
          </div>

          {/* Right Subtitle Description */}
          <div className="max-w-[420px]">
            <p className="text-[#64748b] text-sm sm:text-base leading-relaxed">
              Five structural costs that appear on every multi-entity operating
              model — stated as operational consequence and executive exposure,
              without invented percentages.
            </p>
          </div>
        </motion.div>

        {/* Table/List Rows */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex flex-col border-t border-[#e2e8f0]"
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-1 lg:grid-cols-12 py-7 border-b border-[#e2e8f0] items-center gap-4 lg:gap-8 hover:bg-[#f8fafc]/60 transition-colors px-2"
            >
              {/* Number and Title */}
              <div className="lg:col-span-4 flex items-center gap-4">
                <span className="text-xs font-semibold tracking-wider text-[#b89742]">
                  {item.number}
                </span>
                <span className="font-semibold text-[#0f172a] text-base">
                  {item.title}
                </span>
              </div>

              {/* Description */}
              <div className="lg:col-span-5">
                <p className="text-[#64748b] text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Impact / Result */}
              <div className="lg:col-span-3 text-left lg:text-right">
                <span className="text-xs font-medium text-[#1e293b]">
                  {item.impact}
                </span>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Anchor Insight Callout Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mt-12 relative border border-[#e2e8f0] rounded-2xl p-6 lg:p-8 bg-white shadow-sm overflow-hidden"
        >
          {/* Left golden accent border highlight */}
          <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#b89742]" />

          <div className="pl-2">
            <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#b89742] block mb-2">
              Anchor Insight
            </span>
            <p className="text-[#0f172a] font-normal text-sm sm:text-base leading-relaxed">
              Enterprise platforms optimized transactions. ZoikoSuite is
              architected to govern the action, preserve the truth, and produce
              the evidence.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
