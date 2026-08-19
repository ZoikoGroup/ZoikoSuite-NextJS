"use client";

import React from "react";
import { motion } from "framer-motion";

export default function MultiEntityJurisdictionSection() {
  return (
    <section className="w-full bg-[#F7F5F0] py-16 lg:py-24 px-6 lg:px-24 font-sans antialiased text-[#0F172A]">
      <div className="max-w-6xl mx-auto flex flex-col space-y-10">
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
                MULTI-ENTITY AND MULTI-JURISDICTION CONTEXT
              </span>
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl max-w-xl lg:text-[42px] font-bold tracking-tight text-[#0F172A] leading-[1.15]">
              Entity hierarchy, policy overlays, and coverage status as
              first-class objects
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
              Where localization capability varies by product and configuration,
              this model is explicit: every jurisdiction claim carries a
              coverage status, a source authority, and a review date.
            </p>
          </motion.div>
        </div>

        {/* Image Container with NO styling on outer div */}
        <div>
          <img
            src="/not-an-erp/4.png"
            alt="3D visualization of global entity hierarchy, policy overlays, authority cards, and coverage status indicators"
            className="w-full h-auto block rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}
