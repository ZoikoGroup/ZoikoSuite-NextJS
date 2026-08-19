"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Info } from "lucide-react";

interface FeaturePill {
  text: string;
}

const featurePills: FeaturePill[] = [
  { text: "Sources linked" },
  { text: "Policy versions" },
  { text: "Reviewers" },
  { text: "Before / after" },
  { text: "Exceptions" },
  { text: "Integrity" },
  { text: "Retention" },
  { text: "Export receipt" },
];

export default function EvidenceByDefaultSection() {
  return (
    <section className="w-full bg-white py-16 lg:py-24 px-6 lg:px-24 font-sans antialiased text-[#0F172A]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Image with NO outer div styling */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="lg:col-span-7 flex justify-center"
        >
          <div>
            <img
              src="/not-an-erp/3.png"
              alt="Professional interacting with audit manifest interface showing linked source records and reviewers"
              className="w-full h-auto block rounded-2xl"
            />
          </div>
        </motion.div>

        {/* Right Column: Eyebrow, Title, Description, Pills, Notice Box, and Button */}
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
              EVIDENCE BY DEFAULT
            </span>
          </div>

          {/* Main Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-[#0F172A] leading-[1.12]">
            The audit trail is an output of the work, not a project after it
          </h2>

          {/* Description Paragraph */}
          <p className="text-sm sm:text-base text-[#64748B] leading-relaxed font-normal">
            Where documents, logs, approvals, and reports vary by
            implementation, the manifest is a defined object: it links the
            source records, the policy reasons, the reviewers, the decisions,
            the changes, and the outcomes to one action.
          </p>

          {/* Feature Pills */}
          <div className="flex flex-wrap gap-2 pt-1">
            {featurePills.map((pill) => (
              <span
                key={pill.text}
                className="px-3 py-1.5 rounded-md bg-[#EBF2F7] text-[#334155] text-xs font-mono font-medium tracking-wide"
              >
                {pill.text}
              </span>
            ))}
          </div>

          {/* Disclaimer / Notice Box */}
          <div className="p-4 rounded-xl bg-[#F7F2E7] border border-[#E8DEC8] flex items-start gap-3">
            <Info className="w-4 h-4 text-[#8C6B2D] shrink-0 mt-0.5" />
            <p className="text-xs text-[#735620] leading-relaxed font-normal">
              Designed for reviewable, attributable evidence. This is not a
              claim of legal admissibility or independent audit certification.
            </p>
          </div>

          {/* CTA Button */}
          <div className="pt-2">
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#0F476A] border border-[#0F476A] hover:bg-[#0c3955] hover:border-[#0c3955] text-white text-xs sm:text-sm font-semibold transition-all duration-200 active:scale-95 shadow-xs"
            >
              Explore evidence architecture
              <ArrowRight className="w-4 h-4 text-white" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
