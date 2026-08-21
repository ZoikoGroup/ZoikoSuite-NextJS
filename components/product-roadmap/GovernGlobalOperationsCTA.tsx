"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function GovernGlobalOperationsCTA() {
  return (
    <section className="w-full bg-[#0F476A] text-white py-20 lg:py-28 px-6 lg:px-24 font-sans antialiased text-center">
      <div className="max-w-4xl mx-auto flex flex-col items-center space-y-6">
        {/* Eyebrow Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="flex items-center gap-3 justify-center"
        >
          <div className="w-6 h-[2px] bg-[#c5a059]" />
          <span className="text-xs uppercase tracking-[0.2em] font-mono font-semibold text-[#c5a059]">
            NEXT STEP
          </span>
        </motion.div>

        {/* Main Title */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight text-white leading-[1.15] max-w-120"
        >
          Govern your global operations with confidence
        </motion.h2>

        {/* Subtitle / Description */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="text-sm sm:text-base text-[#BBD3E0] max-w-xl leading-relaxed font-normal"
        >
          Unify finance, workforce, legal, tax, compliance, and commercial
          operations under one governed platform.
        </motion.p>

        {/* Action Buttons Container */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4 pt-4"
        >
          {/* Primary Button */}
          <a
            href="#"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#D0AA55] hover:bg-[#D0AA55] text-[#0F172A] text-xs sm:text-sm font-bold transition-all duration-200 active:scale-95 shadow-md"
          >
            Book enterprise demo
            <ArrowRight className="w-4 h-4 text-[#0F172A]" />
          </a>

          {/* Secondary Button */}
          <a
            href="#"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-transparent hover:bg-white/10 border border-[#2E6B91] text-white text-xs sm:text-sm font-medium transition-all duration-200 active:scale-95"
          >
            Talk to a solutions architect
          </a>
        </motion.div>
      </div>
    </section>
  );
}
