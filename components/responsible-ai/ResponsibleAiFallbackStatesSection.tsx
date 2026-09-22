"use client";

import React from "react";
import { motion } from "framer-motion";

const fallbackCards = [
  {
    title: "API Timeout / Quota Exhaustion",
    action: "Passive Local Fallback",
    description:
      "System automatically bypasses OpenAI, using native deterministic regex scripts. Summarization is suppressed but telemetry parsing remains 100% active.",
  },
  {
    title: "Conflicting Data / High Uncertainty",
    action: "Escalate to Human Checkpoint",
    description:
      "Remediation recommendations are locked. The interface forces a manual ticket creation for an analyst to investigate.",
  },
  {
    title: "Policy-Based Execution Block",
    action: "Hard Containment Lock",
    description:
      "If EDR sensor validation fails, all directory auth tokens are suspended at the authentication boundary. Human review required to unlock.",
  },
];

export default function ResponsibleAiFallbackStatesSection() {
  return (
    <section className="w-full bg-[#F0EDE6] text-[#0A2029] py-16 sm:py-20 px-6 sm:px-10 lg:px-20 flex justify-center border-b border-[#123B4C]/10">
      <div className="max-w-[1240px] w-full flex flex-col gap-10">
        {/* Header */}
        <div className="flex flex-col gap-3 max-w-4xl">
          <div className="flex items-center gap-3">
            <span className="w-6 h-[2px] bg-[#C44242]" />
            <span className="text-xs font-bold font-mono tracking-[0.12em] text-[#C44242] uppercase">
              GRACEFUL DEGRADATION
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0A2029] tracking-[-0.022em]">
            Failure Safeguards & Fallback states
          </h2>
          <p className="text-[#5B6670] text-sm sm:text-base leading-relaxed font-medium">
            How the security system behaves when external AI endpoints timeout, fail, or encounter severe context drift.
          </p>
        </div>

        {/* 3 Fallback Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {fallbackCards.map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.08 }}
              className="bg-white p-6 rounded-xl border border-[#123B4C]/10 shadow-sm flex flex-col gap-3 hover:shadow-md transition-all"
            >
              <h3 className="text-base sm:text-lg font-extrabold text-[#0A2029]">
                {card.title}
              </h3>

              <div className="flex flex-col gap-1">
                <span className="font-mono text-[11px] font-bold text-[#C44242] uppercase tracking-wider">
                  FALLBACK ACTION
                </span>
                <span className="font-extrabold text-sm sm:text-[15px] text-[#C44242]">
                  {card.action}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-[#5B6670] leading-relaxed mt-1">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
