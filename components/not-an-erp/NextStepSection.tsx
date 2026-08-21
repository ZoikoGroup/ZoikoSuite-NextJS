"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function NextStepSection() {
  return (
    <section className="w-full bg-[#0F476A] text-white py-16 lg:py-24 px-6 lg:px-24 font-sans antialiased">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Text & CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="lg:col-span-5 flex flex-col space-y-6"
        >
          {/* Eyebrow Header */}
          <div className="flex items-center gap-3">
            <div className="w-6 h-[2px] bg-[#c5a059]" />
            <span className="text-xs uppercase tracking-[0.2em] font-mono font-semibold text-[#c5a059]">
              NEXT STEP
            </span>
          </div>

          {/* Main Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-white leading-[1.15]">
            Discuss where governed execution belongs in your architecture
          </h2>

          {/* Description Paragraph */}
          <p className="text-sm sm:text-base text-[#9ba4b5] leading-relaxed font-normal">
            Bring your entity list, your system inventory, and your approval
            matrix. We will work through which of the four target-architecture
            outcomes fits which part of your estate.
          </p>

          {/* Highlighted Note with Gold Bar */}
          <div className="border-l-2 border-[#c5a059] pl-4 py-1">
            <p className="text-xs sm:text-sm text-[#93AEBD] font-normal leading-relaxed">
              Built for multi-entity, multi-jurisdiction, regulated, and
              operationally complex organizations.
            </p>
          </div>

          {/* CTA Link */}
          <div className="pt-2">
            <a
              href="#"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#c5a059] hover:text-[#b38e48] transition-colors group"
            >
              Talk to a solutions architect
              <ArrowRight className="w-4 h-4 text-[#c5a059] group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>

        {/* Right Column: Graphic Image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="lg:col-span-7 flex justify-center"
        >
          <div>
            <img
              src="/not-an-erp/11.png"
              alt="3D architecture diagram showing Governance Layer, Events & Inputs, Governed Execution, Decisions & Outcomes, Systems of Record, Data & Evidence Layer, and operator thinking"
              className="w-full h-auto block rounded-2xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
