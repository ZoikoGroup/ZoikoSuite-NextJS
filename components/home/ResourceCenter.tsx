"use client";

import React from "react";
import { motion } from "framer-motion";

const resourceCards = [
  {
    category: "Brief",
    title: "Executive Platform Brief",
    description:
      "The category, the control model, and the operating case in one document.",
    tags: "E-SUITE · BOARDS · INVESTORS",
  },
  {
    category: "Brief",
    title: "Why ZoikoSuite Is Not an ERP",
    description:
      "Where the governance layer sits relative to existing transaction systems.",
    tags: "CFO · CIO · PROCUREMENT",
  },
  {
    category: "Architecture",
    title: "Governance Architecture Brief",
    description:
      "Policy evaluation, authority resolution, and the governed execution path.",
    tags: "ARCHITECTURE · RISK · AUDIT",
  },
  {
    category: "Security",
    title: "Security & Trust Brief",
    description:
      "Control objectives, claim status, and the residency model by deployment.",
    tags: "CISO · PRIVACY · PROCUREMENT",
  },
] as const;

export default function ResourceCenter() {
  return (
    <section className="w-full bg-[#F7F5F0] text-[#0f172a] py-20 px-6 lg:px-24 flex items-center justify-center">
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
                  Resource Center
                </span>
              </div>

              {/* Main Title */}
              <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-bold tracking-tight leading-[1.1] text-[#0f172a]">
                The enterprise diligence path
              </h2>
            </div>

            {/* Right Subtitle Description */}
            <div className="max-w-[420px]">
              <p className="text-[#64748b] text-sm sm:text-base leading-relaxed">
                Four featured documents. Titles and purpose are visible before
                any form — nothing is gated behind a guess.
              </p>
            </div>
          </motion.div>

          {/* Cards Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          >
            {resourceCards.map((card, index) => (
              <div
                key={index}
                className="bg-white border border-[#DBE3E8] rounded-2xl p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-200"
              >
                <div>
                  <span className="text-[11px] font-medium tracking-[0.15em] text-[#c5a059] uppercase block mb-3">
                    {card.category}
                  </span>
                  <h3 className="text-xl font-bold text-[#0f172a] tracking-tight mb-3">
                    {card.title}
                  </h3>
                  <p className="text-[#64748b] text-sm leading-relaxed mb-6">
                    {card.description}
                  </p>
                </div>

                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#5D6B75] block">
                    {card.tags}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Bottom Action Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex justify-center"
          >
            <a
              href="#"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-full border border-[#CFDEE7] text-[#0F476A] font-semibold text-sm hover:bg-[#e2edf7] transition-all duration-200 shadow-sm"
            >
              View all resources
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
