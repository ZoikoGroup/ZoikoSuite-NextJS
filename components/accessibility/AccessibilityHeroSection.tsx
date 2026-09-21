"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function AccessibilityHeroSection() {
  return (
    <section className="w-full bg-[#08222F] text-white py-16 sm:py-20 px-6 lg:px-14 flex justify-center overflow-hidden">
      <div className="max-w-[1320px] w-full flex flex-col">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Content */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-6 flex flex-col items-start"
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-2.5 mb-4 sm:mb-5">
              <span className="w-5 h-[2px] bg-[#A07A2E]" />
              <span className="text-[11px] font-semibold tracking-[0.22em] text-[#A07A2E] uppercase font-['JetBrains_Mono']">
                ACCESSIBILITY
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-bold tracking-tight leading-[1.14] mb-6 sm:mb-7">
              Design access into
              <br />
              every workflow
            </h1>

            {/* Description */}
            <p className="text-[#B5C7C7] text-base sm:text-lg leading-7 max-w-[600px] mb-8 font-normal font-['Archivo']">
              An accountability artifact, not a public relations gesture. This page details WCAG conformance, known issues, assistive technology coverage, and how to request alternative formats or report barriers.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-row items-center gap-3.5">
              <a
                href="#accessibility-report-form"
                className="inline-flex shrink-0 items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#D0AA55] text-[#08222F] font-semibold text-[13px] hover:bg-[#c29c4c] transition-all duration-200 shadow-sm whitespace-nowrap"
              >
                <span>Report an accessibility issue</span>
                <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </a>
              <a
                href="#solutions-architect"
                className="inline-flex shrink-0 items-center justify-center px-6 py-3.5 rounded-full bg-transparent hover:bg-white/5 border border-white/20 font-semibold text-[13px] transition-colors whitespace-nowrap"
              >
                Request an accessibility review
              </a>
            </div>
          </motion.div>

          {/* Right Column: Hero image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            className="lg:col-span-6 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[560px] h-[380px] sm:h-[460px] lg:h-[520px] rounded-xl overflow-hidden">
              <Image
                src="/accessibility/hu.png"
                alt="Design access into every workflow illustration"
                fill
                priority
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
