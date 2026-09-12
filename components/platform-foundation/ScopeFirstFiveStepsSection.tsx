"use client";

import React from "react";
import { motion } from "framer-motion";

interface FoundationStep {
  step: string;
  title: string;
  description: string;
}

const steps: FoundationStep[] = [
  {
    step: "STEP 01",
    title: "Scope",
    description: "Establish organizational boundary, jurisdiction, and legal entity baseline.",
  },
  {
    step: "STEP 02",
    title: "Connect",
    description: "Federate identities, interfaces, and data sources into the fabric reserve state.",
  },
  {
    step: "STEP 03",
    title: "Enact process",
    description: "Carry operational execution and workflow under policy, rule and allocation context.",
  },
  {
    step: "STEP 04",
    title: "Evidence",
    description: "Preserve immutable audit log with cryptographic evidence and verification proofs.",
  },
  {
    step: "STEP 05",
    title: "Adopt & operate",
    description: "Sustain continuous real-time balance and transparent governance supervision.",
  },
];

export default function ScopeFirstFiveStepsSection() {
  return (
    <section className="w-full bg-[#FAF8F5] text-[#0f172a] py-12 sm:py-16 px-4 sm:px-6 lg:px-20 flex justify-center border-t border-[#ede9df] lg:hidden">
      <div className="max-w-[1240px] w-full flex flex-col">
        {/* Eyebrow */}
        <div className="flex items-center gap-2 mb-2.5">
          <span className="w-5 h-[2px] bg-[#c5a059]" />
          <span className="text-[10px] font-semibold tracking-[0.2em] text-[#854d0e] uppercase">
            THE FOUNDATION MODEL
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0f172a] leading-tight mb-2">
          Scope first. Connections second. Assurance always visible.
        </h2>

        {/* Subtext */}
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
          Five stages form the conceptual backbone of this page, and the reading order of every section below.
        </p>

        {/* Five Steps Cards */}
        <div className="flex flex-col gap-3">
          {steps.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.05 }}
              className="rounded-xl border border-slate-200/90 bg-white p-4 shadow-2xs"
            >
              <div className="text-[9.5px] font-mono font-bold tracking-wider text-slate-400 uppercase mb-1">
                {item.step}
              </div>
              <h3 className="text-sm font-bold text-[#08222F] mb-1">
                {item.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
