"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function GovernYourGlobalOperationsCFOCTA() {
  return (
    <section className="w-full bg-[#0F476A] text-white py-20 sm:py-28 px-4 sm:px-6 lg:px-20 flex justify-center border-t border-[#1E5B80]">
      <div className="max-w-[840px] w-full flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 mb-4"
        >
          <span className="w-5 h-[2px] bg-[#c5a059]" />
          <span className="text-[10.5px] font-semibold tracking-[0.2em] text-[#c5a059] uppercase font-mono">
            NEXT STEP
          </span>
          <span className="w-5 h-[2px] bg-[#c5a059]" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight text-white leading-tight mb-5"
        >
          Govern your global operations with confidence
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-sm sm:text-base text-[#D4E4ED] leading-relaxed max-w-[620px] mb-8 sm:mb-10 font-normal"
        >
          Unify finance, workforce, legal, tax, compliance, and commercial operations under one governed platform.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          <Link
            href="/platform-tour"
            className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#D0AA55] hover:bg-[#b89547] text-[#08222F] text-xs sm:text-sm font-bold tracking-wide transition-all shadow-lg shadow-black/10 flex items-center justify-center gap-2"
          >
            <span>Book enterprise demo</span>
            <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
          </Link>

          <Link
            href="/platform-overview"
            className="w-full sm:w-auto px-7 py-3.5 rounded-full border border-[#1E5B80] bg-[#0A3854] hover:bg-[#124263] text-white text-xs sm:text-sm font-medium tracking-wide transition-all flex items-center justify-center"
          >
            Talk to a solutions architect
          </Link>
        </motion.div>

        {/* Mobile-Only Feature Pills (strictly hidden on lg desktop) */}
        <div className="block lg:hidden mt-8 w-full">
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="px-3 py-1.5 rounded-lg text-[10px] font-mono font-bold tracking-wider text-[#A0D4EE] bg-[#072437] border border-[#1E5B80]">
              AUDIT PACKS
            </span>
            <span className="px-3 py-1.5 rounded-lg text-[10px] font-mono font-bold tracking-wider text-[#A0D4EE] bg-[#072437] border border-[#1E5B80]">
              MULTI-BALANCE VIEW
            </span>
            <span className="px-3 py-1.5 rounded-lg text-[10px] font-mono font-bold tracking-wider text-[#A0D4EE] bg-[#072437] border border-[#1E5B80]">
              CONTINUOUS PRE-AUDITING
            </span>
          </div>
          <div className="flex justify-center mt-2">
            <span className="px-3 py-1.5 rounded-lg text-[10px] font-mono font-bold tracking-wider text-[#A0D4EE] bg-[#072437] border border-[#1E5B80]">
              GOVERNED CASH · UNIFIED
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
