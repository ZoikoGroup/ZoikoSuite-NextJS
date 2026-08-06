"use client";

import React from "react";
import { motion } from "framer-motion";

const evidenceLevels = [
  {
    level: "LEVEL 01",
    title: "Architecture proof",
    description:
      "Published diagrams, control flows, service and data ownership, security and evidence briefs.",
  },
  {
    level: "LEVEL 02",
    title: "Product proof",
    description:
      "Working demonstrations, screenshots, workflow recordings, and release-status documentation.",
  },
  {
    level: "LEVEL 03",
    title: "Validation proof",
    description:
      "Shadow-mode equivalence reports, migration integrity results, test coverage, and control test outcomes.",
  },
  {
    level: "LEVEL 04",
    title: "Customer proof",
    description:
      "Named case studies, verified measures, references, and approved testimonials.",
  },
  {
    level: "LEVEL 05",
    title: "Independent proof",
    description:
      "Certifications, attestations, penetration-test summaries, audit reports, or partner validations.",
  },
] as const;

export default function EvidenceLadder() {
  return (
    <section className="w-full bg-white text-[#0f172a] py-20 px-6 lg:px-24 flex items-center justify-center">
      <div className="max-w-6xl w-full flex flex-col items-center">
        {/* Main Wrapper with max-w-6xl constraint */}
        <div className="w-full max-w-6xl flex flex-col">
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
                  Proof & Validation
                </span>
              </div>

              {/* Main Title */}
              <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-bold tracking-tight leading-[1.1] text-[#0f172a]">
                The evidence ladder — prove before publishing
              </h2>
            </div>

            {/* Right Subtitle Description */}
            <div className="max-w-[420px]">
              <p className="text-[#64748b] text-sm sm:text-base leading-relaxed">
                Until verified customer data exists, this page publishes what
                can be shown, not what would sell. No percentages, no logo wall,
                no certification badges.
              </p>
            </div>
          </motion.div>

          {/* Content Grid: Evidence Steps on Left, Interactive Image Showcase on Right */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
          >
            {/* Left Column: Timeline / Evidence Steps */}
            <div className="lg:col-span-6 relative pl-8 border-l-2 border-[#E2E8F0] space-y-12">
              {evidenceLevels.map((item, index) => (
                <div key={index} className="relative group">
                  {/* Timeline Node Indicator Dot */}
                  <div className="absolute -left-[37px] top-1.5 w-4 h-4 rounded-full bg-[#F7F5F0] border-2 border-[#c5a059] flex items-center justify-center transition-transform group-hover:scale-125" />

                  {/* Step Content */}
                  <div>
                    <span className="text-[11px] font-semibold tracking-[0.15em] text-[#c5a059] uppercase block mb-1">
                      {item.level}
                    </span>
                    <h3 className="text-xl font-bold text-[#0f172a] tracking-tight mb-2">
                      {item.title}
                    </h3>
                    <p className="text-[#64748b] text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Column: Image Showcase with Left Golden Accent Border */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
              className="lg:col-span-6 relative w-full rounded-2xl"
            >
              <img
                src="/home/yy.png"
                alt="Executive team reviewing evidence documentation and interactive security control proofs"
                className="w-full h-auto object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
