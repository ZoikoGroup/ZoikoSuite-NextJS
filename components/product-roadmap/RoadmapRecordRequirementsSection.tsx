"use client";

import React from "react";
import { motion } from "framer-motion";

interface RequiredField {
  label: string;
  description: string;
}

const requiredFields: RequiredField[] = [
  {
    label: "PUBLIC TITLE",
    description:
      "Outcome-oriented and specific. No internal code names, no unapproved solution claims.",
  },
  {
    label: "STATUS",
    description: "One approved public status with a link to its definition.",
  },
  {
    label: "OUTCOME STATEMENT",
    description:
      "The user or business problem the direction is intended to improve — not a guaranteed result.",
  },
  {
    label: "PLATFORM AREA",
    description:
      "Core Module, Governance Platform, Platform Foundation, or cross-platform.",
  },
  {
    label: "AFFECTED SCOPE",
    description:
      "Functions, roles, entities, jurisdictions, deployment models, integrations, or APIs — only where approved.",
  },
  {
    label: "TARGET QUALIFICATION",
    description:
      "No public target, a qualified target window, or a released date. A date never appears without status and caveat.",
  },
  {
    label: "DEPENDENCIES",
    description:
      "Top three public dependencies plus a count. Security-sensitive details are omitted with an explanation.",
  },
  {
    label: "AVAILABILITY LABEL",
    description:
      '"Global" only when verified; otherwise market, plan, deployment, pilot, or configuration qualification.',
  },
  {
    label: "REVIEW METADATA",
    description:
      "Last reviewed date, status changed date, and public owner group.",
  },
  {
    label: "ACTIONS",
    description:
      "View details, follow theme, submit relevant context — each separately operable.",
  },
];

export default function RoadmapRecordRequirementsSection() {
  return (
    <section className="w-full bg-[#F7F5F0] py-16 lg:py-24 px-6 lg:px-24 font-sans antialiased text-[#0F172A]">
      <div className="max-w-6xl mx-auto flex flex-col space-y-12">
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
                ROADMAP RECORD CARD AND DETAIL
              </span>
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl max-w-xl lg:text-[42px] font-bold tracking-tight text-[#0F172A] leading-[1.15]">
              What a record must contain before it can be published
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
              A card cannot appear publicly unless every required field is
              present, approved, and internally consistent.
            </p>
          </motion.div>
        </div>

        {/* Content Grid: Left List + Right Graphic Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Side: Required Fields List */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="lg:col-span-6 flex flex-col space-y-4"
          >
            <span className="text-[10px] sm:text-[11px] font-mono font-semibold tracking-widest text-[#94A3B8] uppercase block mb-1">
              REQUIRED FIELDS
            </span>

            <div className="border-t border-[#E2E8F0] divide-y divide-[#E2E8F0]">
              {requiredFields.map((field, idx) => (
                <div
                  key={idx}
                  className="py-3.5 grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-4 items-baseline"
                >
                  <span className="sm:col-span-4 text-[11px] font-mono font-bold tracking-wider text-[#334155] uppercase">
                    {field.label}
                  </span>
                  <p className="sm:col-span-8 text-xs sm:text-sm text-[#64748B] leading-relaxed font-normal">
                    {field.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Side: Graphic Image */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="lg:col-span-6 flex justify-center sticky top-8"
          >
            <div>
              <img
                src="/product-roadmap/p3.png"
                alt="3D graphic diagram showing a published record card with approval validation indicators"
                className="w-full h-auto block rounded-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
