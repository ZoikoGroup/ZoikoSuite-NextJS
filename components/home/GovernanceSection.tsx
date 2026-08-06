"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function GovernanceSection() {
  return (
    <section className="relative w-full min-h-screen bg-[#08222F] text-white flex items-center bg-radial-[at_82%_8%] from-color-azure-24-85% to-color-azure-24-0% to 62% justify-center overflow-hidden px-6 lg:px-20 py-24">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#0a233b]/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/3 w-[500px] h-[500px] bg-[#0c283d]/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center z-10">
        {/* Left Column: Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-start"
        >
          {/* Subtitle with line */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-6 h-[2px] bg-[#c5a059]" />
            <span className="text-xs uppercase tracking-[0.2em] font-medium text-[#c5a059]">
              Governed Business Operations Intelligence
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-[60px] font-bold leading-[1.1] tracking-tight mb-6 text-white">
            Run finance, workforce, legal, and compliance under{" "}
            <span className="text-[#D0AA55]">one governance layer</span>
          </h1>

          {/* Paragraph 1 */}
          <p className="text-[#9ba4b5] text-base sm:text-lg leading-relaxed mb-6 font-normal">
            ZoikoSuite connects accounting, payroll, HR, tax, contracts,
            compliance, and evidence across entities and jurisdictions — so
            operations execute with policy, authority, and auditability built
            in.
          </p>

          {/* Paragraph 2 with Left Border */}
          <div className="border-l-2 border-[#c5a059]/60 pl-4 py-1 mb-10">
            <p className="text-[#8892b0] text-sm sm:text-base leading-relaxed font-normal">
              Built for organizations operating locally, across multiple
              entities, or across borders — especially where financial,
              workforce, legal, and regulatory accountability cannot be
              fragmented.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#c5a059] text-white font-semibold text-sm hover:bg-[#b08d4a] transition-all duration-200 shadow-lg shadow-[#c5a059]/20"
            >
              Book enterprise demo
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-full text-[#e2e8f0] font-medium text-sm border border-[#1e3a5f] hover:bg-[#13293d] transition-all duration-200"
            >
              Explore the platform
            </a>
          </div>
        </motion.div>

        {/* Right Column: Image with UI Overlays */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          className="relative w-full rounded-2xl overflow-hidden"
        >
          {/* Base Image */}
          <img
            src="/home/hero.png"
            alt="Boardroom meeting discussing enterprise governance"
            className="w-full h-full object-cover object-center"
          />
        </motion.div>
      </div>
    </section>
  );
}
