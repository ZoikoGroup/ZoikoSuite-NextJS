"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface AiAssistItem {
  stage: string;
  description: string;
}

const aiAssistItems: AiAssistItem[] = [
  {
    stage: "STAGE 1",
    description: "Classify signals; extract structured fields",
  },
  {
    stage: "STAGE 2",
    description: "Propose context matches with source and confidence",
  },
  {
    stage: "STAGE 3",
    description: "Surface relevant controls; detect conflicts",
  },
  {
    stage: "STAGE 4",
    description:
      "Summarize sources; draft rationale; identify missing evidence",
  },
  {
    stage: "STAGE 5",
    description: "Suggest eligible reviewers within existing permissions",
  },
  { stage: "STAGE 9", description: "Summarize exceptions; suggest follow-up" },
];

const prohibitedItems: string[] = [
  "Presentation as professional advice",
  "Silent execution of material actions",
  "Concealed source limitations",
  "Invented policy or coverage",
  "Changing its own permissions",
];

export default function GovernedAiLifecycleSection() {
  return (
    <section className="w-full bg-[#F7F5F0] text-[#0f172a] py-20 px-6 lg:px-24 flex items-center justify-center">
      <div className="max-w-6xl w-full flex flex-col items-center">
        {/* Main Wrapper with max-w-6xl constraint */}
        <div className="w-full max-w-6xl flex flex-col">
          {/* Two-Column Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-12">
            {/* Left Column: Eyebrow, Title, Description, Lists, and Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-6 flex flex-col"
            >
              {/* Old Eyebrow Style (with line) */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-6 h-[2px] bg-[#c5a059]" />
                <span className="text-xs uppercase tracking-[0.2em] font-medium text-[#c5a059]">
                  Governed AI within the lifecycle
                </span>
              </div>

              {/* Main Title */}
              <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-bold tracking-tight leading-[1.1] text-[#0f172a] mb-6">
                AI can assist the lifecycle without owning the decision
              </h2>

              {/* Description */}
              <p className="text-[#64748b] text-sm sm:text-base leading-relaxed mb-8">
                AI assistance is available at stages 1–5 and 9. It is absent
                from stages 6 and 7 by design: authorization and execution are
                not AI functions.
              </p>

              {/* Where AI May Assist */}
              <div className="mb-6">
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#5A6D79] block mb-3">
                  Where AI may assist
                </span>
                <div className="flex flex-col space-y-2.5">
                  {aiAssistItems.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-baseline text-xs sm:text-sm"
                    >
                      <span className="w-20 shrink-0 font-bold text-[#c5a059] tracking-wider uppercase text-[11px]">
                        {item.stage}
                      </span>
                      <span className="text-[#64748b]">{item.description}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Prohibited */}
              <div className="mb-8">
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#5A6D79] block mb-3">
                  Prohibited
                </span>
                <div className="flex flex-wrap gap-2">
                  {prohibitedItems.map((text, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-md text-xs font-semibold bg-[#F9EDED] text-[#DFA9A9] border border-[#DFA9A9]"
                    >
                      {text}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div>
                <a
                  href="#"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#0F476A] text-white font-semibold text-sm hover:bg-[#0b354f] transition-all duration-200 shadow-lg shadow-[#0F476A]/20"
                >
                  Explore governed AI
                  <ArrowRight className="w-4 h-4 text-white" />
                </a>
              </div>
            </motion.div>

            {/* Right Column: Workflow Image (No border, no shadow) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
              className="lg:col-span-6 relative w-full overflow-hidden bg-[#F7F5F0]"
            >
              <img
                src="/how-it-works/12.png"
                alt="Governed AI within the lifecycle illustration showing AI assistance restricted to specific stages with clear prohibitions"
                className="w-full h-auto object-cover block rounded-2xl"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
