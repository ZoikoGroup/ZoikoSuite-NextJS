"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function AuthoritativeSourceMatrixSection() {
  return (
    <section className="w-full bg-white py-16 lg:py-24 px-6 lg:px-24 font-sans antialiased text-[#0F172A]">
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
                AUTHORITATIVE SOURCE AND RESPONSIBILITY MATRIX
              </span>
            </div>

            {/* Title */}
            <h2 className="text-3xl max-w-xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-[#0F172A] leading-[1.15]">
              Which system owns which record &mdash; stated, not assumed
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
              A record may have one authoritative source but many governed
              relationships and evidence references. Ambiguous ownership
              triggers implementation review; it is not resolved automatically.
            </p>
          </motion.div>
        </div>

        {/* Image Container with NO styling on outer div */}
        <div>
          <img
            src="/not-an-erp/7.png"
            alt="Authoritative source and responsibility matrix visualization showing connected record nodes and review required panel"
            className="w-full h-auto block rounded-2xl"
          />
        </div>

        {/* Two Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          {/* Left Card: The Rule */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl p-6 border border-[#E2E8F0] flex flex-col space-y-3"
          >
            <span className="text-[10px] sm:text-[11px] font-mono font-semibold tracking-wider text-[#64748B] uppercase block">
              THE RULE
            </span>
            <p className="text-xs sm:text-sm text-[#334155] leading-relaxed font-normal">
              A record may have one authoritative source but multiple governed
              relationships and evidence references. ZoikoSuite becoming
              authoritative for a decision does not make it authoritative for
              the underlying transaction.
            </p>
          </motion.div>

          {/* Right Card: Where This Needs Discovery */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl p-6 border border-[#E2E8F0] flex flex-col space-y-3"
          >
            <span className="text-[10px] sm:text-[11px] font-mono font-semibold tracking-wider text-[#64748B] uppercase block">
              WHERE THIS NEEDS DISCOVERY
            </span>
            <p className="text-xs sm:text-sm text-[#334155] leading-relaxed font-normal">
              The payment row above is marked{" "}
              <strong className="font-bold text-[#0F172A]">
                review required
              </strong>{" "}
              deliberately: execution ownership between ERP and banking differs
              by organization and must be resolved during implementation rather
              than assumed by the platform.
            </p>
          </motion.div>
        </div>

        {/* Bottom CTA Button */}
        <div className="flex justify-center pt-2">
          <a
            href="#"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#0F476A] border border-[#0F476A] hover:bg-[#0c3955] hover:border-[#0c3955] text-white text-xs sm:text-sm font-semibold transition-all duration-200 active:scale-95 shadow-xs"
          >
            Review your source-of-record architecture
            <ArrowRight className="w-4 h-4 text-white" />
          </a>
        </div>
      </div>
    </section>
  );
}
