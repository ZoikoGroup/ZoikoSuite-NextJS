"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface EvaluationOutcome {
  text: string;
  variant?: "default" | "highlight" | "danger";
}

const outcomes: EvaluationOutcome[] = [
  { text: "Allow preparation" },
  { text: "Require reviewer" },
  { text: "Require approver" },
  { text: "Require professional review", variant: "highlight" },
  { text: "Request evidence" },
  { text: "Split action" },
  { text: "Escalate" },
  { text: "Block", variant: "danger" },
  { text: "Defer" },
];

export default function Stage03GovernanceSection() {
  return (
    <section className="w-full bg-[#08222F] text-white py-20 px-6 lg:px-24 flex items-center justify-center">
      <div className="max-w-6xl w-full flex flex-col items-center">
        {/* Main Wrapper with max-w-6xl constraint */}
        <div className="w-full max-w-6xl flex flex-col">
          {/* Two-Column Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Eyebrow, Title, Description, Outcomes, and Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-6 flex flex-col"
            >
              {/* Eyebrow Style */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-xs uppercase tracking-[0.2em] font-medium text-[#5A6D79] flex items-center bg-transparent rounded-[6px]">
                  <span className="bg-[#D0AA55] py-1.5 px-3 text-[#20180A] rounded-[6px]">
                    Stage 03
                  </span>
                  <span className="py-1.5 px-3 text-[#6F8C9D]">
                    EVALUATE GOVERNANCE
                  </span>
                </span>
              </div>

              {/* Main Title */}
              <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-bold tracking-tight leading-[1.1] text-white mb-4">
                Evaluate the rules that govern this action
              </h2>

              {/* Description */}
              <p className="text-[#9ba4b5] text-sm sm:text-base leading-relaxed mb-8">
                Ten control types are resolved against the confirmed context —
                each with a source authority, an effective date, a scope, an
                owner, and a review status.
              </p>

              {/* Evaluation Outcomes */}
              <div className="mb-8">
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#c5a059] block mb-3">
                  Evaluation Outcomes
                </span>
                <div className="flex flex-wrap gap-2">
                  {outcomes.map((item, idx) => (
                    <span
                      key={idx}
                      className={`px-3 py-1.5 rounded-md text-xs font-semibold border ${
                        item.variant === "danger"
                          ? "bg-red-500/10 text-red-400 border-red-500/30"
                          : item.variant === "highlight"
                            ? "bg-[#c5a059]/20 text-[#c5a059] border-[#c5a059]/40"
                            : "bg-white/5 text-white border-white/10"
                      }`}
                    >
                      {item.text}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div>
                <a
                  href="#"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#c5a059] text-[#0f172a] font-semibold text-sm hover:bg-[#b08d4b] transition-all duration-200 shadow-lg shadow-[#c5a059]/20"
                >
                  Explore the governance control plane
                  <ArrowRight className="w-4 h-4 text-[#0f172a]" />
                </a>
              </div>
            </motion.div>

            {/* Right Column: Workflow Image (No border, no shadow) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
              className="lg:col-span-6 relative w-full overflow-hidden bg-[#07131d]"
            >
              <img
                src="/how-it-works/4.png"
                alt="Stage 03 evaluate governance illustration showing rule evaluation against confirmed context"
                className="w-full h-auto object-cover block rounded-2xl"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
