"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

interface PrincipleCard {
  id: string;
  tag: string;
  title: string;
  description: string;
}

const principles: PrincipleCard[] = [
  {
    id: "principle-01",
    tag: "PRINCIPLE 01",
    title: "Evidence before publication",
    description:
      "A public record requires validated problem context, an approved owner, defined scope, and publishable evidence.",
  },
  {
    id: "principle-02",
    tag: "PRINCIPLE 02",
    title: "Status over hype",
    description:
      "Every item uses a defined status, a last-reviewed date, a public owner group, and a change history.",
  },
  {
    id: "principle-03",
    tag: "PRINCIPLE 03",
    title: "Current capability separated",
    description:
      "Released outcomes and documentation are kept distinct from future-looking records.",
  },
  {
    id: "principle-04",
    tag: "PRINCIPLE 04",
    title: "Dependencies visible",
    description:
      "Architecture, data, security, privacy, compliance, accessibility, documentation, support, migration, partner, and jurisdiction dependencies are surfaced.",
  },
  {
    id: "principle-05",
    tag: "PRINCIPLE 05",
    title: "Changes remain accountable",
    description:
      "Pause, defer, rescope, release, and withdrawal events stay visible where publication is appropriate.",
  },
  {
    id: "principle-06",
    tag: "PRINCIPLE 06",
    title: "Feedback without false voting",
    description:
      "Customer context contributes evidence, but public popularity does not create a delivery promise.",
  },
];

export default function RoadmapTransparencyPrinciplesSection() {
  const [selectedId, setSelectedId] = useState<string>("principle-01");

  return (
    <section className="w-full bg-white py-16 lg:py-24 px-6 lg:px-24 font-sans antialiased text-[#0F172A]">
      <div className="max-w-6xl mx-auto flex flex-col space-y-12">
        {/* Header Grid: 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Eyebrow + Title */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="lg:col-span-7 flex flex-col space-y-3"
          >
            {/* Eyebrow Header */}
            <div className="flex items-center gap-3">
              <div className="w-6 h-[2px] bg-[#c5a059]" />
              <span className="text-xs uppercase tracking-[0.2em] font-mono font-semibold text-[#c5a059]">
                ROADMAP TRANSPARENCY PRINCIPLES
              </span>
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] max-w-xl font-bold tracking-tight text-[#0F172A] leading-[1.15]">
              Six rules that govern every public record
            </h2>
          </motion.div>

          {/* Right Column: Paragraph */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="lg:col-span-5 lg:pt-8"
          >
            <p className="text-sm sm:text-base text-[#64748B] leading-relaxed font-normal">
              Each principle is testable against the record schema and the
              publishing workflow &mdash; not a statement of intent.
            </p>
          </motion.div>
        </div>

        {/* 6 Principle Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {principles.map((item) => {
            const isSelected = selectedId === item.id;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedId(item.id)}
                className={`bg-white rounded-2xl p-6 sm:p-7 border transition-all duration-200 cursor-pointer flex flex-col space-y-3 ${
                  isSelected
                    ? "border-[#E2E8F0] hover:border-[#CBD5E1]"
                    : "border-[#E2E8F0] hover:border-[#CBD5E1]"
                }`}
              >
                <span className="text-[10px] sm:text-[11px] font-mono font-semibold tracking-widest text-[#c5a059] uppercase block">
                  {item.tag}
                </span>

                <h3 className="text-base sm:text-lg font-bold text-[#0F172A] tracking-tight">
                  {item.title}
                </h3>

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
