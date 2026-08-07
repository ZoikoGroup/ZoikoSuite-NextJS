"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface FeaturePill {
  text: string;
}

const featurePills: FeaturePill[] = [
  { text: "MULTI-ENTITY" },
  { text: "MULTI-JURISDICTION" },
  { text: "POLICY-AWARE" },
  { text: "EVIDENCE-BACKED" },
  { text: "AI-GOVERNED" },
];

export default function HeroSection() {
  return (
    <section className="w-full bg-[#08222F] text-white py-20 px-6 lg:px-24 flex items-center justify-center">
      <div className="max-w-6xl w-full flex flex-col items-center">
        {/* Main Wrapper with max-w-6xl constraint */}
        <div className="w-full max-w-6xl flex flex-col">
          {/* Main Hero Grid Layout: Left Content, Right Graphic/Image */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-12">
            {/* Left Column: Eyebrow, Title, Description, Buttons, Pills, and Disclaimer */}
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
                  Governed Business Operations Intelligence
                </span>
              </div>

              {/* Main Hero Title */}
              <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-bold tracking-tight leading-[1.05] text-white mb-6">
                Turn business context into governed, evidence-backed action
              </h1>

              {/* Description Paragraph */}
              <p className="text-[#9ba4b5] max-w-120 text-sm sm:text-base leading-relaxed mb-8">
                Connect operational data, organizational context, policy,
                authority, human decisions, controlled execution, evidence,
                exceptions, analytics, and governed AI across entities,
                jurisdictions, and functions.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8">
                <a
                  href="#"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#c5a059] text-[#0f172a] font-semibold text-sm hover:bg-[#b08d4b] transition-all duration-200 shadow-lg shadow-[#c5a059]/20"
                >
                  Book enterprise demo
                  <ArrowRight className="w-4 h-4 text-[#0f172a]" />
                </a>

                <a
                  href="#"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-transparent text-white font-semibold text-sm border border-[#1e293b] hover:bg-[#0f1f2e] transition-all duration-200"
                >
                  Talk to a solutions architect
                </a>
              </div>

              {/* Feature Pills */}
              <div className="flex flex-wrap gap-2.5 mb-8">
                {featurePills.map((pill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-md text-[11px] font-mono tracking-[.5px] text-[#CFE3EE] border border-[#1e293b]"
                  >
                    {pill.text}
                  </span>
                ))}
              </div>

              {/* Left Bordered Disclaimer */}
              <div className="p-4 border-l-4 border-l-[#D0AA55] text-xs text-[#9ba4b5] leading-relaxed">
                Capabilities, coverage, integrations, deployment options, and
                control configurations vary by market, subscription,
                implementation, and approved product status.
              </div>
            </motion.div>

            {/* Right Column: Hero Graphic / Interface Illustration */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
              className="lg:col-span-6 flex justify-center"
            >
              <div className="w-full relative overflow-hidden rounded-2xl border border-[#C9D6DF]">
                <img
                  src="/governed-business-operations/hero.png"
                  alt="A professional operating a governed intelligence console with multiple holographic data streams, authorization loops, and security badges"
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
