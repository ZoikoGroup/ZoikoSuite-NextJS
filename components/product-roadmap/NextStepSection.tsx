"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function NextStepSection() {
  return (
    <section className="w-full bg-[#0F476A] text-white py-16 lg:py-24 px-6 lg:px-24 font-sans antialiased">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Text Content & Actions */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="lg:col-span-6 flex flex-col space-y-6"
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
            Discuss what ZoikoSuite can do for you today
          </h2>

          {/* Description Paragraph */}
          <p className="text-sm sm:text-base text-[#B0C4DE] leading-relaxed font-normal">
            The most useful conversation starts from current capability, not
            from future direction. Bring the workflow you need governed and we
            will be explicit about what exists now, what is in a pilot, and what
            is not available.
          </p>

          {/* Quote / Disclaimer Bar */}
          <div className="flex items-center gap-3 pt-2">
            <div className="w-[3px] h-full min-h-[36px] bg-[#c5a059] shrink-0" />
            <p className="text-xs text-[#93AEBD] leading-relaxed">
              A demo covers capability available today. It is not a commitment
              to any roadmap record.
            </p>
          </div>

          {/* Link CTA */}
          <div className="pt-4">
            <a
              href="#"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#c5a059] hover:text-[#d4AF37] transition-colors group"
            >
              Talk to a solutions architect
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </motion.div>

        {/* Right Column: Graphic Image */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="lg:col-span-6 flex justify-center"
        >
          <div className="w-full">
            <img
              src="/product-roadmap/p9.png"
              alt="3D diagram showing interconnected platform capabilities including analytics, security, compliance, and cloud governance"
              className="w-full h-auto block rounded-2xl shadow-2xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
