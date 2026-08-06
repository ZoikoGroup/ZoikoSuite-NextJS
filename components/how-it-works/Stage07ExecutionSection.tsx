"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Stage07ExecutionSection() {
  return (
    <section className="w-full bg-[#07131d] text-white py-20 px-6 lg:px-24 flex items-center justify-center">
      <div className="max-w-6xl w-full flex flex-col items-center">
        {/* Main Wrapper with max-w-6xl constraint */}
        <div className="w-full max-w-6xl flex flex-col">
          {/* Header Grid: Title on Left, Instructional Subtext on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-7 flex flex-col"
            >
              {/* Eyebrow Style */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs uppercase tracking-[0.2em] font-medium text-[#5A6D79] flex items-center bg-transparent rounded-[6px]">
                  <span className="bg-[#D0AA55] py-1.5 px-3 text-[#20180A] rounded-[6px]">
                   Stage 07 · Bounded
                  </span>
                  <span className="py-1.5 px-3 text-[#6F8C9D]">
                    CONTROLLED EXECUTION
                  </span>
                </span>
              </div>

              {/* Main Title */}
              <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-bold tracking-tight leading-[1.1] text-white">
                Execute only what was authorized — and record exactly what
                happened
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="lg:col-span-5 flex flex-col justify-end"
            >
              <p className="text-[#9ba4b5] text-sm sm:text-base leading-relaxed">
                Execution uses the approved version only. Retries reuse the same
                idempotency context. Partial completion triggers explicit
                recovery, never a silent retry.
              </p>
            </motion.div>
          </div>

          {/* Workflow Image Section (No border, no shadow) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
            className="w-full relative overflow-hidden bg-[#07131d] mb-12"
          >
            <img
              src="/how-it-works/8.png"
              alt="Stage 07 controlled execution illustration showing execution of approved versions with idempotency and recovery contexts"
              className="w-full h-auto object-cover block rounded-2xl"
            />
          </motion.div>

          {/* Bottom Action Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="flex justify-center w-full"
          >
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#c5a059] text-[#0f172a] font-semibold text-sm hover:bg-[#b08d4b] transition-all duration-200 shadow-lg shadow-[#c5a059]/20"
            >
              Talk to a solutions architect
              <ArrowRight className="w-4 h-4 text-[#0f172a]" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
