"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface ControlSetting {
  title: string;
  description: string;
}

const controlSettings: ControlSetting[] = [
  {
    title: "Allowed use cases",
    description:
      "Summarization, obligation identification, classification proposals, exception surfacing, workflow support.",
  },
  {
    title: "Prohibited use cases",
    description:
      "Autonomous authorization of material actions; regulated professional determinations; any output presented as advice.",
  },
  {
    title: "Source requirements",
    description:
      "Only authorized sources within the user's permission and data-classification scope.",
  },
  {
    title: "Human-review threshold",
    description:
      "Configurable by value, risk, jurisdiction, and data class. Material decisions always require a named reviewer.",
  },
  {
    title: "Retention & logging",
    description:
      "Every AI event is logged with sources, prompt scope, output, reviewer, and final human decision.",
  },
  {
    title: "Sensitive-domain restrictions",
    description:
      "Restricted domains can be disabled entirely per entity or jurisdiction.",
  },
];

export default function GovernedAI() {
  return (
    <section className="w-full bg-white text-[#0f172a] py-20 px-6 lg:px-24 flex items-center justify-center">
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
                Governed AI
              </span>
            </div>

            {/* Main Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-bold tracking-tight leading-[1.1] text-[#0f172a]">
              Use AI within defined authority, evidence, and review
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="lg:col-span-5 flex flex-col justify-end"
          >
            <p className="text-[#64748b] text-sm sm:text-base leading-relaxed">
              ZoikoSuite may use AI to summarize records, identify obligations,
              propose classifications, surface exceptions, and support
              workflows. AI outputs remain subject to configured policy,
              evidence, role permissions, and qualified human review.
            </p>
          </motion.div>
        </div>

        {/* Two-Column Main Layout: Control Settings List on Left, Image on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Control Settings */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col"
          >
            <div className="text-[11px] font-medium uppercase tracking-[0.2em] text-[#c5a059] mb-6">
              Control Settings
            </div>

            <div className="space-y-6 mb-10">
              {controlSettings.map((setting, idx) => (
                <div
                  key={idx}
                  className="pb-6 border-b border-[#E2E8F0] last:border-b-0"
                >
                  <h3 className="text-base sm:text-lg font-bold text-[#0f172a] tracking-tight mb-1.5">
                    {setting.title}
                  </h3>
                  <p className="text-[#64748b] text-xs sm:text-sm leading-relaxed max-w-xl">
                    {setting.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Action CTA Button */}
            <div>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#0F476A] text-white font-semibold text-sm hover:bg-[#0b354f] transition-all duration-200 shadow-md shadow-[#0F476A]/20"
              >
                Explore governed AI
                <ArrowRight className="w-4 h-4 text-[#c5a059]" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Governed AI Architecture Image Showcase (No Border Added) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
            className="lg:col-span-5 relative w-full rounded-2xl overflow-hidden shadow-sm bg-white p-6 border border-[#DBE3E8]"
          >
            <img
              src="/platform-overview/6.png"
              alt="Governed AI framework diagram showing authorized inputs, secure shield boundaries, and human review gates"
              className="w-full h-auto object-cover block rounded-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
