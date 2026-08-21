"use client";

import React from "react";
import { motion } from "framer-motion";

const reasonCategories = [
  "Evidence insufficient",
  "Architecture dependency",
  "Security / privacy / compliance",
  "Accessibility",
  "Partner / integration",
  "Market / deployment",
  "Implementation capacity",
  "Support / operations",
  "Strategic sequencing",
  "Superseded direction",
];

const changeEventTypes = [
  "Published",
  "Status changed",
  "Target qualification changed",
  "Scope changed",
  "Dependency added",
  "Dependency cleared",
  "Paused",
  "Resumed",
  "Deferred",
  "Released",
  "Not proceeding",
  "Corrected",
];

export default function AccountableChangeSection() {
  return (
    <section className="w-full bg-[#F7F5F0] py-16 lg:py-24 px-6 lg:px-24 font-sans antialiased text-[#0F172A]">
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
                DEPENDENCIES, PAUSES, DEFERRALS, AND CHANGE HISTORY
              </span>
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-[#0F172A] leading-[1.15]">
              Accountable change without misleading detail
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
              Incorrect public information is corrected by an appended history
              event — never silently overwritten. No employee, partner, or
              customer is named as a cause.
            </p>
          </motion.div>
        </div>

        {/* Content Grid: Left Categories/Badges + Right Graphic Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Side: Reason Categories, Change Event Types & Correction Rule */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="lg:col-span-5 flex flex-col space-y-8"
          >
            {/* Reason Categories */}
            <div className="flex flex-col space-y-3">
              <span className="text-[10px] sm:text-[11px] font-mono font-semibold tracking-widest text-[#94A3B8] uppercase block">
                REASON CATEGORIES
              </span>
              <div className="flex flex-wrap gap-2">
                {reasonCategories.map((item, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded bg-[#E8EFF4] border border-[#CFDEE7] text-[#334155] text-xs font-mono font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Change Event Types */}
            <div className="flex flex-col space-y-3">
              <span className="text-[10px] sm:text-[11px] font-mono font-semibold tracking-widest text-[#94A3B8] uppercase block">
                CHANGE EVENT TYPES
              </span>
              <div className="flex flex-wrap gap-2">
                {changeEventTypes.map((item, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded bg-[#E8EFF4] border border-[#CFDEE7] text-[#334155] text-xs font-mono font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Correction Rule Box */}
            <div className="bg-white rounded-2xl p-6 border border-[#E2E8F0] shadow-xs flex flex-col space-y-3">
              <span className="text-[10px] sm:text-[11px] font-mono font-semibold tracking-widest text-[#94A3B8] uppercase block">
                CORRECTION RULE
              </span>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed font-normal">
                A correction appends a new dated entry describing what was wrong
                and what is now accurate. The original entry remains visible.
                Corrections are never applied by editing history in place or by
                strikethrough alone.
              </p>
            </div>
          </motion.div>

          {/* Right Side: Graphic Image */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="lg:col-span-7 flex justify-center sticky top-8"
          >
            <div>
              <img
                src="/product-roadmap/p7.png"
                alt="Diagram showing change history workflow and append-only audit trail timeline"
                className="w-full h-auto block rounded-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
