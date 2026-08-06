"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Stage09MonitorPerformanceSection() {
  return (
    <section className="w-full bg-[#F7F5F0] text-[#0f172a] py-20 px-6 lg:px-24 flex items-center justify-center">
      <div className="max-w-6xl w-full flex flex-col items-center">
        {/* Main Wrapper with max-w-6xl constraint */}
        <div className="w-full max-w-6xl flex flex-col">
          {/* Header Grid: Title on Left, Instructional Subtext on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-8 flex flex-col"
            >
              {/* Eyebrow Style */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs uppercase tracking-[0.2em] font-medium text-[#5A6D79] flex items-center bg-transparent rounded-[6px]">
                  <span className="bg-[#0F476A] py-1.5 px-3 text-white rounded-[6px]">
                    STAGE 09
                  </span>
                  <span className="py-1.5 px-3 text-[#64748b]">
                    MONITOR OBLIGATIONS, EXCEPTIONS, AND CONTROL PERFORMANCE
                  </span>
                </span>
              </div>

              {/* Main Title */}
              <h2 className="text-3xl sm:text-4xl lg:text-[52px] font-bold tracking-tight leading-[1.1] text-[#0f172a]">
                Keep the outcome governed after execution
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="lg:col-span-4 flex flex-col justify-end"
            >
              <p className="text-[#64748b] text-sm sm:text-base leading-relaxed">
                Execution is not completion. Obligations, evidence health,
                exceptions, and control performance continue — and configuration
                only changes through an approved route.
              </p>
            </motion.div>
          </div>

          {/* Workflow Image Section (No border, no shadow) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
            className="w-full relative overflow-hidden bg-[#F7F5F0] mb-12"
          >
            <img
              src="/how-it-works/10.png"
              alt="Stage 09 monitor obligations, exceptions, and control performance illustration showing ongoing post-execution governance and metrics tracking"
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
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#0F476A] text-white font-semibold text-sm hover:bg-[#0b354f] transition-all duration-200 shadow-lg shadow-[#0F476A]/20"
            >
              Explore analytics & reporting
              <ArrowRight className="w-4 h-4 text-white" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
