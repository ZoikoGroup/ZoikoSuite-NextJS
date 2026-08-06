"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function NextStepCTA() {
  return (
    <section className="w-full bg-[#F7F5F0] text-[#0f172a] py-24 px-6 lg:px-24 flex items-center justify-center">
      <div className="max-w-[1280px] w-full flex flex-col items-center text-center">
        {/* Subtitle with line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex items-center justify-center gap-3 mb-4"
        >
          <div className="w-6 h-[2px] bg-[#c5a059]" />
          <span className="text-xs uppercase tracking-[0.2em] font-medium text-[#c5a059]">
            Next Step
          </span>
          <div className="w-6 h-[2px] bg-[#c5a059]" />
        </motion.div>

        {/* Main Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="text-3xl sm:text-5xl max-w-xl lg:text-[56px] font-bold tracking-tight leading-[1.1] text-[#0f172a] max-w-3xl mb-6"
        >
          Govern your global operations with confidence
        </motion.h2>

        {/* Subtitle Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-[#64748b] text-base sm:text-lg leading-relaxed max-w-xl mb-10"
        >
          Unify finance, workforce, legal, tax, compliance, and commercial
          operations under one governed platform.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-5xl"
        >
          <a
            href="#"
            className="inline-flex items-center justify-center gap-2 px-15 py-4 rounded-full bg-[#D0AA55] text-black font-semibold text-sm hover:bg-[#c29c4c] transition-all duration-200 shadow-lg shadow-[#D0AA55]/20 w-full sm:w-auto"
          >
            Book enterprise demo
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="#"
            className="inline-flex items-center justify-center px-20 py-4 rounded-full border border-[#CFDEE7] text-[#0F476A] font-semibold text-sm hover:bg-[#f8fafc] transition-all duration-200 shadow-sm w-full sm:w-auto"
          >
            Talk to a solutions architect
          </a>
        </motion.div>
      </div>
    </section>
  );
}
