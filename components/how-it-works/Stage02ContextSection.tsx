"use client";

import React from "react";
import { motion } from "framer-motion";

interface StatusBadge {
  text: string;
}

const entityStatuses: StatusBadge[] = [
  { text: "Verified" },
  { text: "Customer configured" },
  { text: "Pending validation" },
  { text: "Archived" },
  { text: "Unknown" },
];

const jurisdictionStatuses: StatusBadge[] = [
  { text: "Verified active" },
  { text: "Configured by customer" },
  { text: "Professional review required" },
  { text: "Integration dependent" },
  { text: "Market dependent" },
  { text: "Not available" },
];

export default function Stage02ContextSection() {
  return (
    <section className="w-full bg-white text-[#0f172a] py-20 px-6 lg:px-24 flex items-center justify-center">
      <div className="max-w-6xl w-full flex flex-col items-center">
        {/* Main Wrapper with max-w-6xl constraint */}
        <div className="w-full max-w-6xl flex flex-col">
          {/* Two-Column Grid Layout (Image on left, Content on right based on screenshot layout) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Stage Workflow Image (No border, no shadow) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="lg:col-span-6 relative w-full overflow-hidden bg-[#F7F5F0]"
            >
              <img
                src="/how-it-works/3.png"
                alt="Stage 02 establish context illustration showing multi-stage platform context resolution"
                className="w-full h-auto object-cover block rounded-2xl"
              />
            </motion.div>

            {/* Right Column: Stage Tag, Title, Description, Status Badges, and Disclaimer */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="lg:col-span-6 flex flex-col"
            >
              {/* Stage Tag with line */}
              <div className="flex items-center gap-3 mb-4">
                <span className="flex text-xs uppercase tracking-[0.2em] font-medium text-[#5A6D79]">
                  <div className="bg-[#0F476A] text-white rounded-[6px] p-2">
                    Stage 02
                  </div>
                  <span className="p-2">Establish Business Context</span>
                </span>
              </div>

              {/* Main Title */}
              <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-bold tracking-tight leading-[1.1] text-[#0f172a] mb-4">
                Establish the context before evaluating the action
              </h2>

              {/* Description */}
              <p className="text-[#64748b] text-sm sm:text-base leading-relaxed mb-8">
                Governance cannot be evaluated until the platform knows which
                organization, entity, place, function, object, system, and data
                class the action belongs to.
              </p>

              {/* Entity Statuses */}
              <div className="mb-6">
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#c5a059] block mb-3">
                  Entity Statuses
                </span>
                <div className="flex flex-wrap gap-2">
                  {entityStatuses.map((badge, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-md text-xs font-semibold text-[#0F476A] border border-[#CFDEE7] bg-[#E8EFF4]/50"
                    >
                      {badge.text}
                    </span>
                  ))}
                </div>
              </div>

              {/* Jurisdiction Statuses */}
              <div className="mb-8">
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#c5a059] block mb-3">
                  Jurisdiction Statuses
                </span>
                <div className="flex flex-wrap gap-2">
                  {jurisdictionStatuses.map((badge, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-md text-xs font-semibold text-[#0F476A] border border-[#CFDEE7] bg-[#E8EFF4]/50"
                    >
                      {badge.text}
                    </span>
                  ))}
                </div>
              </div>

              {/* Disclaimer with vertical line */}
              <div className="flex items-center gap-3">
                <div className="w-[2px] h-8 bg-[#c5a059] shrink-0" />
                <span className="text-xs text-[#64748b] leading-relaxed">
                  A jurisdiction is never presented as covered because an entity
                  exists there. Coverage status and its source are shown at the
                  point of the claim.
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
