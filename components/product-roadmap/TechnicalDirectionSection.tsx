"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function TechnicalDirectionSection() {
  return (
    <section className="w-full bg-white py-16 lg:py-24 px-6 lg:px-24 font-sans antialiased text-[#0F172A]">
      <div className="max-w-6xl mx-auto flex flex-col space-y-12">
        {/* Header Grid: 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Eyebrow + Title */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="lg:col-span-7 flex flex-col space-y-3"
          >
            {/* Eyebrow Header */}
            <div className="flex items-center gap-3">
              <div className="w-6 h-[2px] bg-[#c5a059]" />
              <span className="text-xs uppercase tracking-[0.2em] font-mono font-semibold text-[#c5a059]">
                ARCHITECTURE, APIS, EVENTS, AND INTEGRATION DIRECTION
              </span>
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-[#0F172A] leading-[1.15]">
              Technical direction, separated from current interfaces
            </h2>
          </motion.div>

          {/* Right Column: Paragraph */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="lg:col-span-5 lg:pt-8"
          >
            <p className="text-sm sm:text-base text-[#64748B] leading-relaxed font-normal">
              Approved direction is not a released interface. Confidential
              partner work does not appear here at all.
            </p>
          </motion.div>
        </div>

        {/* 3D Process Graphic Image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="flex justify-center"
        >
          <div>
            <img
              src="/product-roadmap/p4.png"
              alt="3D process flow diagram illustrating technical direction pipeline separated from confidential partner interfaces"
              className="w-full h-auto block rounded-2xl"
            />
          </div>
        </motion.div>

        {/* Bottom CTA Button */}
        <div className="flex justify-center pt-2">
          <a
            href="#"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#0F476A] hover:bg-[#0c3955] text-white text-xs sm:text-sm font-semibold transition-all duration-200 active:scale-95 shadow-xs"
          >
            Talk to a solutions architect
            <ArrowRight className="w-4 h-4 text-white" />
          </a>
        </div>
      </div>
    </section>
  );
}
