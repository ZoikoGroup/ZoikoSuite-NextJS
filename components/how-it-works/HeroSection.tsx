"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface BadgeItem {
  text: string;
}

const badges: BadgeItem[] = [
  { text: "POLICY-AWARE" },
  { text: "PERMISSION-AWARE" },
  { text: "EVIDENCE-BACKED" },
  { text: "HUMAN-AUTHORIZED" },
  { text: "ATTRIBUTABLE" },
];

export default function HeroSection() {
  return (
    <section className="w-full bg-[#08222F] white py-20 px-6 lg:px-24 flex items-center justify-center">
      <div className="max-w-6xl w-full flex flex-col items-center">
        {/* Main Wrapper with max-w-6xl constraint */}
        <div className="w-full max-w-6xl flex flex-col">
          {/* Two-Column Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-12">
            {/* Left Column: Content, CTAs, and Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-6 flex flex-col"
            >
              {/* Subtitle with line */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-6 h-[2px] bg-[#c5a059]" />
                <span className="text-xs uppercase tracking-[0.2em] font-medium text-[#c5a059]">
                  How ZoikoSuite Works
                </span>
              </div>

              {/* Main Title */}
              <h1 className="text-4xl sm:text-5xl lg:text-[60px] font-bold tracking-tight leading-[1.05] text-white mb-6">
                From business signal to accountable outcome
              </h1>

              {/* Description */}
              <p className="text-[#9ba4b5] text-sm sm:text-base leading-relaxed mb-8">
                ZoikoSuite connects source records, entity and jurisdiction
                context, policies, responsibility, human authorization,
                controlled execution, evidence, and continuous assurance in one
                governed operating flow.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <a
                  href="#"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#c5a059] text-[#0f172a] font-semibold text-sm hover:bg-[#b08d4b] transition-all duration-200 shadow-lg shadow-[#c5a059]/20"
                >
                  Book enterprise demo
                  <ArrowRight className="w-4 h-4 text-[#0f172a]" />
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/20 text-white font-semibold text-sm hover:bg-white/5 transition-all duration-200 shadow-xs"
                >
                  Talk to a solutions architect
                </a>
              </div>

              {/* View Platform Tour Link */}
              <div className="mb-8">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-[#c5a059] font-semibold text-sm hover:underline"
                >
                  View platform tour
                  <ArrowRight className="w-4 h-4 text-[#c5a059]" />
                </a>
              </div>

              {/* Badges Grid / Row */}
              <div className="flex flex-wrap gap-2.5 mb-8">
                {badges.map((badge, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-md text-[11px] font-semibold tracking-wider text-[#9ba4b5] border border-white/10"
                  >
                    {badge.text}
                  </span>
                ))}
              </div>

              {/* Disclaimer with vertical line */}
              <div className="flex items-center gap-3">
                <div className="w-[2px] h-10 bg-[#c5a059]" />
                <span className="text-xs text-[#9ba4b5] leading-relaxed">
                  Capabilities, jurisdiction coverage, integrations, and
                  deployment options vary by market, configuration,
                  subscription, and implementation status.
                </span>
              </div>
            </motion.div>

            {/* Right Column: Workflow Illustration Image (No border, no shadow) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
              className="lg:col-span-6 relative w-full overflow-hidden bg-[#07131d]"
            >
              <img
                src="/how-it-works/1.png"
                alt="Illustration showing business signal transforming into accountable outcomes through governed operational stages"
                className="w-full h-auto object-cover block rounded-2xl"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
