"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function GlobalOperationsCTA() {
  return (
    <section className="w-full bg-[#0F476A] text-white py-24 px-6 lg:px-24 flex items-center justify-center">
      <div className="max-w-4xl w-full flex flex-col items-center text-center">
        {/* Subtitle with lines */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex items-center gap-3 mb-6"
        >
          <div className="w-6 h-[2px] bg-[#c5a059]" />
          <span className="text-xs uppercase tracking-[0.2em] font-medium text-[#c5a059]">
            Next Step
          </span>
          <div className="w-6 h-[2px] bg-[#c5a059]" />
        </motion.div>

        {/* Main Title with max-w-xl constraint and centered text */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="text-3xl sm:text-4xl lg:text-[52px] font-bold tracking-tight leading-[1.1] text-white max-w-xl mb-6"
        >
          Govern your global operations with confidence
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-[#cbd5e1] text-sm sm:text-base leading-relaxed max-w-xl mb-10"
        >
          Unify finance, workforce, legal, tax, compliance, and commercial
          operations under one governed platform.
        </motion.p>

        {/* Action CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="flex flex-wrap items-center justify-center gap-4 w-full"
        >
          <a
            href="#"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#c5a059] text-[#0f172a] font-semibold text-sm hover:bg-[#b08d4b] transition-all duration-200 shadow-lg shadow-[#c5a059]/20"
          >
            Book enterprise demo
            <ArrowRight className="w-4 h-4 text-[#0f172a]" />
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/20 text-white font-semibold text-sm hover:bg-[#07131d]/60 transition-all duration-200 shadow-xs"
          >
            Talk to a solutions architect
          </a>
        </motion.div>
      </div>
    </section>
  );
}
