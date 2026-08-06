"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface AssuranceOutcome {
  title: string;
  description: string;
}

const assuranceOutcomes: AssuranceOutcome[] = [
  {
    title: "Faster evidence retrieval",
    description:
      "Assemble a scenario package instead of reconstructing history across systems.",
  },
  {
    title: "Clearer attribution",
    description:
      "Each decision names the actor, role, authority basis, and affected object.",
  },
  {
    title: "Reviewable policy reasons",
    description:
      "The rule version and effective date that applied are stored with the decision.",
  },
  {
    title: "Visible exceptions and controlled export",
    description:
      "Exceptions carry compensating controls; exports are permission-gated and audited.",
  },
];

export default function EvidenceArchitecture() {
  return (
    <section className="w-full bg-[#07131d] text-white py-20 px-6 lg:px-24 flex items-center justify-center">
      <div className="max-w-6xl w-full flex flex-col">
        {/* Header Grid: Title on Left, Instructional Subtext on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col"
          >
            {/* Subtitle with line */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-[2px] bg-[#c5a059]" />
              <span className="text-xs uppercase tracking-[0.2em] font-medium text-[#c5a059]">
                Evidence Architecture & Audit Readiness
              </span>
            </div>

            {/* Main Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-bold tracking-tight leading-[1.1] text-white">
              Preserve the evidence behind every material decision
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="lg:col-span-5 flex flex-col justify-end"
          >
            <p className="text-[#9ba4b5] text-sm sm:text-base leading-relaxed">
              ZoikoSuite is designed to link actions with their source records,
              applicable policies, reviewers, approvals, timestamps, exceptions,
              and resulting evidence.
            </p>
          </motion.div>
        </div>

        {/* Two-Column Main Layout: Assurance Outcomes List on Left, Image on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Assurance Outcomes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col"
          >
            <div className="text-[11px] font-medium uppercase tracking-[0.2em] text-[#c5a059] mb-6">
              Assurance Outcomes
            </div>

            <div className="space-y-4 mb-10">
              {assuranceOutcomes.map((outcome, idx) => (
                <div
                  key={idx}
                  className="bg-[#0b1c2d] border border-[#1e3a5f]/60 rounded-xl p-6 shadow-sm"
                >
                  <h3 className="text-base sm:text-lg font-bold text-white tracking-tight mb-1.5">
                    {outcome.title}
                  </h3>
                  <p className="text-[#9ba4b5] text-xs sm:text-sm leading-relaxed max-w-xl">
                    {outcome.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Action CTA Button */}
            <div>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#D0AA55] text-[#07131d] font-semibold text-sm hover:bg-[#c29c4c] transition-all duration-200 shadow-lg shadow-[#D0AA55]/20"
              >
                Explore evidence architecture
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Evidence Architecture Interface Image Showcase (No Border Added) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
            className="lg:col-span-5 relative w-full rounded-2xl overflow-hidden shadow-2xl bg-[#091b27]"
          >
            <img
              src="/platform-overview/5.png"
              alt="Evidence architecture dashboard showcasing traceability records, review trails, and audit logs"
              className="w-full h-auto object-cover block"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
