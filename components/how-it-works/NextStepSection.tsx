"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function NextStepSection() {
  return (
    <section className="w-full bg-[#0F476A] text-white py-20 px-6 lg:px-24 flex items-center justify-center">
      <div className="max-w-6xl w-full flex flex-col items-center">
        {/* Main Wrapper with max-w-6xl constraint */}
        <div className="w-full max-w-6xl flex flex-col">
          {/* Main Layout Grid: Left Content, Right Image */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-12">
            {/* Left Column: Eyebrow, Title, Description, and Bordered Quote Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-6 flex flex-col"
            >
              {/* Eyebrow Style (with line) */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-6 h-[2px] bg-[#c5a059]" />
                <span className="text-xs uppercase tracking-[0.2em] font-medium text-[#c5a059]">
                  Next Step
                </span>
              </div>

              {/* Main Title */}
              <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-bold tracking-tight leading-[1.1] text-white mb-6">
                Map your operations to a governed action lifecycle
              </h2>

              {/* Description Paragraph */}
              <p className="text-[#9ba4b5] text-sm sm:text-base leading-relaxed mb-8">
                Review how ZoikoSuite could connect your entities,
                jurisdictions, functions, policies, authority, systems,
                evidence, and decision workflows.
              </p>

              {/* Left Bordered Quote Box */}
              <div className="p-4 border-l-4 border-l-[#D0AA55] text-sm text-[#9ba4b5] leading-relaxed rounded-r-xl">
                Designed for multi-entity, multi-jurisdiction, regulated, and
                operationally complex organizations.
              </div>
            </motion.div>

            {/* Right Column: Circular Process Graphic / Illustration */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
              className="lg:col-span-6 flex justify-center"
            >
              <div className="w-full relative overflow-hidden rounded-2xl bg-[#07131d]">
                <img
                  src="/how-it-works/15.png"
                  alt="An interconnected circular lifecycle diagram showing various stages of multi-entity operations, systems monitoring, and governance loops"
                  className="w-full h-auto object-cover block rounded-2xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
