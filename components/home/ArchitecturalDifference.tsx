"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ArchitecturalDifference() {
  return (
    <section className="w-full bg-[#08222F] text-white py-20 px-6 lg:px-24 flex items-center justify-center">
      <div className="max-w-6xl w-full flex flex-col">
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
                Governed Execution Flow
              </span>
            </div>

            {/* Main Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-bold tracking-tight leading-[1.1] text-white">
              The architectural difference, in one sequence
            </h2>
          </div>

          {/* Right Subtitle Description */}
          <div className="max-w-[420px]">
            <p className="text-[#9ba4b5] text-sm sm:text-base leading-relaxed">
              Select any stage to see what the user sees and what the platform
              does. Every stage is keyboard accessible.
            </p>
          </div>
        </motion.div>

        {/* Image Showcase Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          className="relative w-full rounded-2xl overflow-hidden border border-[#1e3a5f]/60 shadow-2xl bg-[#091b27]"
        >
          <img
            src="/home/pc.png"
            alt="Person working on computer displaying governed execution flow interface"
            className="w-full h-auto object-cover block"
          />
        </motion.div>
      </div>
    </section>
  );
}
