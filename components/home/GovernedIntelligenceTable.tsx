"use client";

import React from "react";
import { motion } from "framer-motion";

const items = [
  {
    title: "Anomaly detection",
    description:
      "Flag unusual financial, payroll, compliance, or workflow patterns.",
    impact: "May score and prioritize; may not alter source truth.",
  },
  {
    title: "Forecasting",
    description:
      "Estimate tax, payroll, cash, obligation, and operational exposure.",
    impact: "Must preserve model, scenario, and confidence context.",
  },
  {
    title: "Reconciliation assistance",
    description: "Suggest matches and exception resolution paths.",
    impact: "Final reconciliation remains governed and evidential.",
  },
  {
    title: "Compliance risk scoring",
    description:
      "Prioritize obligations by severity, proximity, evidence sufficiency, and entity impact.",
    impact: "Human and policy-defined action thresholds apply.",
  },
  {
    title: "Document & obligation extraction",
    description: "Propose clauses, obligations, and metadata.",
    impact: "Requires provenance, confidence, and human review where material.",
  },
  {
    title: "Decision support",
    description:
      "Surface relevant rules, evidence, and options at approval points.",
    impact: "Cannot bypass authorization or approval requirements.",
  },
] as const;

export default function GovernedIntelligenceTable() {
  return (
    <section className="w-full bg-white text-[#0f172a] py-20 px-6 lg:px-24 flex items-center justify-center">
      <div className="max-w-6xl w-full flex flex-col items-center">
        {/* Main Wrapper with custom responsiveness constraint: max-w-6xl for larger screens and max-w-3xl constraints if needed */}
        <div className="w-full">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8"
          >
            <div className="max-w-3xl">
              {/* Subtitle with line */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-6 h-[2px] bg-[#c5a059]" />
                <span className="text-xs uppercase tracking-[0.2em] font-medium text-[#c5a059]">
                  Governed Intelligence
                </span>
              </div>

              {/* Main Title */}
              <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-bold tracking-tight leading-[1.1] text-[#0f172a]">
                Insight after control
              </h2>
            </div>

            {/* Right Subtitle Description */}
            <div className="max-w-[440px]">
              <p className="text-[#64748b] text-sm sm:text-base leading-relaxed">
                AI arrives as a consequence of governed data and preserved
                evidence — never as the category itself. Every capability is
                published with its control boundary.
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
                {/* Title */}
                <div className="lg:col-span-4">
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

                {/* Impact / Control */}
                <div className="lg:col-span-3 text-left lg:text-right">
                  <span className="text-xs font-medium text-[#1e293b]">
                    {item.impact}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Governance Lock Callout Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="mt-12 relative border border-[#e2e8f0] rounded-2xl p-6 lg:p-8 bg-white shadow-sm overflow-hidden mx-auto"
          >
            {/* Left golden accent border highlight */}
            <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#c5a059]" />

            <div className="pl-2">
              <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#c5a059] block mb-2">
                Governance Lock
              </span>
              <p className="text-[#0f172a] font-normal text-sm sm:text-base leading-relaxed">
                AI may classify, forecast, summarize, recommend, and flag. It
                may not silently override policy, execute an irreversible
                material action, or modify immutable truth.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
