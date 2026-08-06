"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const cardsData = [
  {
    role: "CFO",
    title: "Financial truth and close confidence",
    description:
      "Liquidity, tax exposure, and consolidated position across entities.",
    tags: ["Consolidated view", "Rule-linked postings", "Evidence-ready close"],
  },
  {
    role: "GENERAL COUNSEL",
    title: "Legal execution inside operations",
    description:
      "Contracts, authority, and obligations embedded in the action path.",
    tags: [
      "Clause-linked obligations",
      "Signatory controls",
      "Decision lineage",
    ],
  },
  {
    role: "CHRO",
    title: "Employment and pay by jurisdiction",
    description:
      "Payroll, benefits, and workforce compliance by entity and worker type.",
    tags: [
      "Contract versions",
      "Payroll explainability",
      "Termination controls",
    ],
  },
  {
    role: "CIO",
    title: "One governed control model",
    description: "Explicit services, data ownership, security, and residency.",
    tags: ["API contracts", "Workload identity", "Deployment options"],
  },
  {
    role: "COO",
    title: "Operational execution visibility",
    description:
      "Obligations, exceptions, approvals, and cross-functional status.",
    tags: ["Obligation queues", "Escalation paths", "Status views"],
  },
  {
    role: "AUDIT COMMITTEE",
    title: "Evidence that the control operated",
    description: "Not merely evidence that a policy existed.",
    tags: ["Governance decisions", "Workflow history", "Evidence manifests"],
  },
] as const;

export default function ExecutiveAlignment() {
  return (
    <section className="w-full bg-[#F7F5F0] text-[#0f172a] py-20 px-6 lg:px-24 flex items-center justify-center">
      <div className="max-w-6xl w-full flex flex-col">
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
                Executive Alignment
              </span>
            </div>

            {/* Main Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-bold tracking-tight leading-[1.1] text-[#0f172a]">
              Built for shared accountability
            </h2>
          </div>

          {/* Right Subtitle Description */}
          <div className="max-w-[460px]">
            <p className="text-[#64748b] text-sm sm:text-base leading-relaxed">
              Equal weighting for the four decision makers, with the COO and
              audit committee as supporting stakeholders. Each row names the
              proof surface, not a promise.
            </p>
          </div>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
        >
          {cardsData.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-[14px] p-8 flex flex-col border-l-4 border-l-[#D0AA55] justify-between shadow-sm hover:shadow-md transition-all duration-200"
            >
              <div>
                {/* Role / Tag */}
                <span className="text-[11px] font-medium tracking-[0.15em] text-[#c5a059] uppercase block mb-3">
                  {card.role}
                </span>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#0f172a] tracking-tight mb-3">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-[#64748b] text-sm leading-relaxed mb-6">
                  {card.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {card.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-[#E8EFF4] border border-[#CFDEE7] rounded-[5px] px-2.5 py-1 text-[11px] font-medium text-[#0f476a]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Bottom Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex justify-center"
        >
          <a
            href="#"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#0F476A] text-white font-semibold text-sm hover:bg-[#124d73] transition-all duration-200 shadow-lg shadow-[#0F476A]/20"
          >
            View executive solutions
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
