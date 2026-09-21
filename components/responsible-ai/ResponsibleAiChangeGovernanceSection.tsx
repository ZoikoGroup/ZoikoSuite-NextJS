"use client";

import React from "react";
import { motion } from "framer-motion";

const governanceCards = [
  {
    tag: "MATERIALITY CRITERIA",
    title: "Material vs. Non-Material",
    description:
      "Any change to the underlying model provider, system instruction context, or API endpoint is classified as material, forcing complete re-evaluation.",
  },
  {
    tag: "APPROVAL PROCESS",
    title: "Dual-Architect Validation",
    description:
      "Before any Material rollback or forward change executes, two Lead Security Architects must sign the release manifest cryptographically.",
  },
  {
    tag: "ROLLBACK SAFEGUARDS",
    title: "Automatic Regression Trip",
    description:
      "If a newly deployed model's factuality score drops below the 95% threshold inside the first 24 hours, the gateway rolls back to the prior stable schema.",
  },
];

export default function ResponsibleAiChangeGovernanceSection() {
  return (
    <section className="w-full bg-[#F7F5F0] text-[#0A2029] py-16 sm:py-20 px-6 sm:px-10 lg:px-20 flex justify-center border-b border-[#123B4C]/10">
      <div className="max-w-[1240px] w-full flex flex-col gap-10">
        {/* Header */}
        <div className="flex flex-col gap-3 max-w-4xl">
          <div className="flex items-center gap-3">
            <span className="w-6 h-[2px] bg-[#C44242]" />
            <span className="text-xs font-bold font-mono tracking-[0.12em] text-[#C44242] uppercase">
              MODEL ROLLOVER CONTROLS
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0A2029] tracking-[-0.022em]">
            AI Change & Model Governance
          </h2>
          <p className="text-[#5B6670] text-sm sm:text-base leading-relaxed font-medium">
            Model migrations and prompt changes are treated with the same strict change control as production database schemas.
          </p>
        </div>

        {/* 3 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {governanceCards.map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.08 }}
              className="bg-white p-6 rounded-xl border border-[#123B4C]/10 shadow-sm flex flex-col gap-3 hover:shadow-md transition-all"
            >
              <span className="font-mono text-xs text-[#7891B1] font-semibold tracking-wider">
                {card.tag}
              </span>
              <h3 className="text-lg font-extrabold text-[#0A2029]">
                {card.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#5B6670] leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
