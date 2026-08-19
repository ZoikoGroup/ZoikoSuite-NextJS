"use client";

import React from "react";
import { motion } from "framer-motion";

export default function BusinessOperationsGraphSection() {
  return (
    <section className="w-full bg-white text-[#0F172A] py-16 lg:py-24 px-6 lg:px-24 font-sans antialiased">
      <div className="max-w-6xl mx-auto flex flex-col space-y-10">
        {/* Header Grid */}
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
                BUSINESS OPERATIONS GRAPH
              </span>
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] max-w-xl font-bold tracking-tight text-[#0F172A] leading-[1.15]">
              Relationships across systems &mdash; not records inside one module
            </h2>
          </motion.div>

          {/* Right Column: Subtext */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="lg:col-span-5 lg:pt-8"
          >
            <p className="text-sm sm:text-base text-[#64748B] leading-relaxed font-normal">
              Each node names the system that owns it. The relationship table is
              always present as the accessible alternative.
            </p>
          </motion.div>
        </div>

        {/* Image Container with NO styling on the outer div */}
        <div>
          <img
            src="/not-an-erp/1.png"
            alt="Business operations graph connecting systems across nodes and relationship tables"
            className="w-full h-auto block"
          />
        </div>
      </div>
    </section>
  );
}
