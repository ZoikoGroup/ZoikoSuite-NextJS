"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

interface StructuralDifference {
  id: string;
  tag: string;
  title: string;
  description: string;
}

const differences: StructuralDifference[] = [
  {
    id: "diff-01",
    tag: "DIFFERENCE 01",
    title: "Organizing principle",
    description:
      "ERP commonly organizes modules and records. ZoikoSuite organizes governed actions and relationships across business objects and systems.",
  },
  {
    id: "diff-02",
    tag: "DIFFERENCE 02",
    title: "Governance placement",
    description:
      "Controls are evaluated in the context of a proposed action — policy, jurisdiction, authority, approvals, segregation, and evidence together.",
  },
  {
    id: "diff-03",
    tag: "DIFFERENCE 03",
    title: "Cross-functional context",
    description:
      "A single operational event can connect finance, workforce, legal, tax, compliance, procurement, and reporting consequences.",
  },
  {
    id: "diff-04",
    tag: "DIFFERENCE 04",
    title: "Evidence by default",
    description:
      "Source records, policy reasons, reviewers, approvals, changes, exceptions, and outcomes remain attributable.",
  },
  {
    id: "diff-05",
    tag: "DIFFERENCE 05",
    title: "Governed intelligence",
    description:
      "Analytics and AI operate within authorized sources, permissions, uncertainty disclosure, and human-review boundaries.",
  },
  {
    id: "diff-06",
    tag: "DIFFERENCE 06",
    title: "Change model",
    description:
      "ZoikoSuite can be introduced around existing systems, validated in Shadow Mode, and activated by bounded scope.",
  },
];

export default function StructuralDifferencesSection() {
  const [selectedId, setSelectedId] = useState<string>("diff-01");

  return (
    <section className="w-full bg-white py-16 lg:py-24 px-6 lg:px-24 text-[#0F172A] font-sans antialiased">
      <div className="max-w-6xl mx-auto flex flex-col space-y-12">
        {/* Top Header Layout: 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Eyebrow + Title */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col space-y-3"
          >
            {/* Eyebrow Header */}
            <div className="flex items-center gap-3">
              <div className="w-6 h-[2px] bg-[#c5a059]" />
              <span className="text-xs uppercase tracking-[0.2em] font-mono font-semibold text-[#c5a059]">
                SIX STRUCTURAL DIFFERENCES
              </span>
            </div>

            {/* Main Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-[#0F172A] leading-[1.15]">
              Testable design properties, not a feature checklist
            </h2>
          </motion.div>

          {/* Right Column: Explanatory Subtext */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="lg:col-span-5 lg:pt-8"
          >
            <p className="text-sm sm:text-base text-[#64748B] leading-relaxed font-normal">
              Select a difference to see the concrete screen, record, or state
              that demonstrates it. All six descriptions stay on the page.
            </p>
          </motion.div>
        </div>

        {/* 6 Structural Differences Grid (3 Columns x 2 Rows) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {differences.map((item, idx) => {
            const isSelected = selectedId === item.id;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: idx * 0.06,
                  ease: "easeOut",
                }}
                onClick={() => setSelectedId(item.id)}
                className={`rounded-2xl p-6 border transition-all duration-200 cursor-pointer flex flex-col justify-between space-y-3 ${
                  isSelected
                    ? "bg-white border-[#1C2C5E] shadow-md ring-1 ring-[#1C2C5E]"
                    : "bg-white border-[#E2E8F0] hover:border-[#CBD5E1] hover:bg-white"
                }`}
              >
                <div className="space-y-2">
                  <span
                    className={`text-[11px] font-mono font-semibold tracking-wider uppercase block ${
                      isSelected ? "text-[#1C2C5E]" : "text-[#c5a059]"
                    }`}
                  >
                    {item.tag}
                  </span>
                  <h3 className="text-lg font-bold text-[#0F172A] tracking-tight">
                    {item.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed font-normal">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
