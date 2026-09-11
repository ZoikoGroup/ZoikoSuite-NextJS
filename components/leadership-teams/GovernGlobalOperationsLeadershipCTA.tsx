"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function GovernGlobalOperationsLeadershipCTA() {
  return (
    <section className="w-full bg-[#0F476A] text-white py-20 lg:py-28 px-4 sm:px-6 lg:px-24 font-sans antialiased text-center border-t border-[#1E5B80]">
      <div className="max-w-4xl mx-auto flex flex-col items-center space-y-6">
        {/* Eyebrow Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
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
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight text-white leading-[1.15] max-w-120"
        >
          Govern your global operations with confidence
        </motion.h2>

        {/* Subtitle / Description */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="text-sm sm:text-base text-[#BBD3E0] max-w-xl leading-relaxed font-normal"
        >
          Unify finance, workforce, legal, tax, compliance, and commercial
          operations under one governed platform.
        </motion.p>

        {/* Action Buttons Container */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4 pt-4"
        >
          {/* Primary Button */}
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#D0AA55] hover:bg-[#c49e49] text-[#0F172A] text-xs sm:text-sm font-bold transition-all duration-200 active:scale-95 shadow-md"
          >
            <span>Book enterprise demo</span>
            <ArrowRight className="w-4 h-4 text-[#0F172A]" />
          </Link>

          {/* Secondary Button */}
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-transparent hover:bg-white/10 border border-[#2E6B91] text-white text-xs sm:text-sm font-medium transition-all duration-200 active:scale-95"
          >
            Talk to a solutions architect
          </Link>
        </motion.div>

        {/* Compliance Badges & Privacy Notice */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.4 }}
          className="flex flex-col items-center gap-3 pt-6"
        >
          <div className="flex flex-wrap items-center justify-center gap-2 text-[11px] font-mono">
            <span className="px-3 py-1 rounded-full bg-[#0a334d]/60 border border-[#1E5B80] text-slate-300">
              SOC 2 TYPE II
            </span>
            <span className="px-3 py-1 rounded-full bg-[#0a334d]/60 border border-[#1E5B80] text-slate-300">
              MULTI-JURISDICTION
            </span>
            <span className="px-3 py-1 rounded-full bg-[#0a334d]/60 border border-[#1E5B80] text-slate-300">
              AUDIT-READY ARCHITECTURE
            </span>
          </div>
          <span className="text-[10.5px] font-mono tracking-widest text-[#BBD3E0]/70 uppercase">
            NO SURVEILLANCE · STRICT PRIVACY
          </span>
        </motion.div>
      </div>
    </section>
  );
}
