"use client";

import React from "react";
import { motion } from "framer-motion";

const snapshotCards = [
  {
    category: "CAPABILITY STATUS",
    value: "4 Registered",
    description: "Active in production, 0 unmanaged/unmapped models.",
    status: "Fully Mapped",
  },
  {
    category: "HUMAN REVIEW",
    value: "100% Checkpoint",
    description: "Every write-enabled action requires dual-party auth keys.",
    status: "Enforced",
  },
  {
    category: "PROVIDER DISCLOSURE",
    value: "Zero Training",
    description: "Subprocessors bound by strict DPA: no data training allowed.",
    status: "Isolated",
  },
  {
    category: "LAST EVALUATION",
    value: "Today, 04:00 UTC",
    description: "Automated adversarial benchmarks execute every 24 hours.",
    status: "Passed",
  },
];

export default function ResponsibleAiSnapshotSection() {
  return (
    <section className="w-full bg-[#F0EDE6] text-[#0A2029] py-16 sm:py-20 px-6 sm:px-10 lg:px-20 flex justify-center border-b border-[#123B4C]/10">
      <div className="max-w-[1240px] w-full flex flex-col gap-10">
        {/* Section Header */}
        <div className="flex flex-col gap-3 max-w-4xl">
          <div className="flex items-center gap-3">
            <span className="w-6 h-[2px] bg-[#C44242]" />
            <span className="text-xs font-bold font-mono tracking-[0.12em] text-[#C44242] uppercase">
              AI CONTROL STATE
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0A2029] tracking-[-0.022em]">
            Responsible AI Operating Snapshot
          </h2>
          <p className="text-[#5B6670] text-sm sm:text-base leading-relaxed font-medium">
            Production-ready controls actively monitored. System states reference the voluntary guidelines
            of the NIST AI Risk Management Framework (AI RMF 1.0) and Generative AI Profile without
            claiming certification.
          </p>
        </div>

        {/* Snapshot Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {snapshotCards.map((card, idx) => (
            <motion.div
              key={card.category}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="bg-white p-5 rounded-xl border border-[#123B4C]/10 shadow-sm flex flex-col justify-between gap-4 transition-all hover:shadow-md hover:border-[#123B4C]/20"
            >
              <div className="flex flex-col gap-2">
                <span className="font-mono text-xs text-[#7891B1] font-semibold tracking-wider">
                  {card.category}
                </span>
                <span className="text-2xl font-extrabold text-[#0A2029] tracking-tight">
                  {card.value}
                </span>
                <p className="text-xs text-[#5B6670] leading-relaxed">
                  {card.description}
                </p>
              </div>

              <div>
                <span className="inline-block bg-[#E4F0EC] text-[#1F7A6C] font-mono text-[11px] font-bold px-3 py-1 rounded-full">
                  {card.status}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
