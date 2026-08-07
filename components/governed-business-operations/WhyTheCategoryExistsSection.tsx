"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface GapItem {
  id: string;
  gapNumber: string;
  category: string;
  title: string;
  description: string;
}

const gapData: GapItem[] = [
  {
    id: "gap-01",
    gapNumber: "GAP 01",
    category: "CONTEXT",
    title: "The record without the situation",
    description:
      "Systems may know a transaction but not the complete entity, jurisdiction, obligation, contract, policy, or ownership context.",
  },
  {
    id: "gap-02",
    gapNumber: "GAP 02",
    category: "GOVERNANCE",
    title: "Documented but not applied",
    description:
      "Policies and approval limits may be documented but not evaluated inside the action.",
  },
  {
    id: "gap-03",
    gapNumber: "GAP 03",
    category: "RESPONSIBILITY",
    title: "Doing is not authorizing",
    description:
      "The person performing work may not be the person authorized to approve it.",
  },
  {
    id: "gap-04",
    gapNumber: "GAP 04",
    category: "EVIDENCE",
    title: "Assembled afterwards",
    description:
      "The reason, source, approval, and resulting record may be scattered across tools.",
  },
  {
    id: "gap-05",
    gapNumber: "GAP 05",
    category: "INTELLIGENCE",
    title: "Describes the past without governing the next action",
    description:
      "Dashboards may describe outcomes after the fact without helping teams govern what happens next.",
  },
];

export default function WhyTheCategoryExistsSection() {
  const [activeGapId, setActiveGapId] = useState<string>("gap-01");

  return (
    <section className="w-full bg-white text-[#0f172a] py-20 px-6 lg:px-24 flex items-center justify-center">
      <div className="max-w-6xl w-full flex flex-col items-center">
        {/* Main Content Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 w-full items-start mb-12">
          {/* Left Column: Title, Description, and State Comparison Boxes */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-[2px] bg-[#c5a059]" />
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#c5a059]">
                WHY THE CATEGORY EXISTS
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight leading-[1.1] text-[#0f172a] mb-6">
              Business systems record work. Governance often lives somewhere
              else.
            </h2>

            {/* Description */}
            <p className="text-[#64748b] text-sm sm:text-base leading-relaxed mb-8">
              Organizations may have transactional systems, spreadsheets, policy
              libraries, approval tools, document repositories, analytics, and
              AI assistants. The challenge is that operational context,
              authority, evidence, and intelligence often separate at the point
              where a material decision must be made.
            </p>

            {/* Current State Box */}
            <div className="p-4 rounded-2xl bg-white border border-dashed border-[#CFDEE7] mb-4">
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#9ba4b5] block mb-3">
                CURRENT STATE
              </span>
              <div className="flex flex-wrap gap-2">
                {[
                  "ERP",
                  "Spreadsheets",
                  "Policy library",
                  "Approval tool",
                  "Document store",
                  "BI dashboards",
                  "AI assistant",
                  "Email",
                ].map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-lg text-xs font-medium bg-[#F7F5F0] text-[#64748b] border border-[#CFDEE7]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Connected State Box */}
            <div className="p-5 rounded-2xl bg-[#E8EFF4] border border-[#0F476A]">
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#0F476A] block mb-3">
                CONNECTED STATE
              </span>
              <div className="flex flex-wrap gap-2">
                {[
                  "Context",
                  "Governance",
                  "Responsibility",
                  "Evidence",
                  "Intelligence",
                ].map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-white text-[#0F476A] shadow-xs border border-[#CFDEE7]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: 5 Gap Cards (Grid layout where Gap 05 spans both columns) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {gapData.map((gap, index) => {
              const isActive = activeGapId === gap.id;
              const isLast = index === gapData.length - 1;

              return (
                <motion.div
                  key={gap.id}
                  onClick={() => setActiveGapId(gap.id)}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className={`cursor-pointer rounded-2xl p-6 transition-all duration-200 bg-white border ${
                    isLast ? "sm:col-span-2" : ""
                  } ${
                    isActive
                      ? "border-[#c5a059] shadow-md ring-1 ring-[#c5a059]"
                      : "border-[#CFDEE7] hover:border-[#9ba4b5]"
                  }`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#c5a059]">
                      {gap.gapNumber}
                    </span>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#c5a059]">
                      • {gap.category}
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-[#0f172a] mb-2">
                    {gap.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#64748b] leading-relaxed">
                    {gap.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom Banner Card */}
        <div className="w-full bg-[#0F476A] text-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
          <p className="text-sm sm:text-base font-medium text-white">
            The category exists to connect those layers before, during, and
            after execution.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#D0AA55] hover:text-[#c5a059] transition-colors shrink-0"
          >
            See the defining properties
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
