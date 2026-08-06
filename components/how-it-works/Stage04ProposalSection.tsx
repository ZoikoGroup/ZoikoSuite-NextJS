"use client";

import React from "react";
import { motion } from "framer-motion";

interface ProposalItem {
  label: string;
  description: string;
}

const proposalItems: ProposalItem[] = [
  {
    label: "REQUESTED ACTION",
    description: "The specific operation to be performed",
  },
  {
    label: "AFFECTED RECORDS",
    description: "Entities and fields modified by the action",
  },
  {
    label: "BEFORE & AFTER",
    description: "State comparison for complete visibility",
  },
  {
    label: "REASON & SOURCE",
    description: "Justification and triggering source record",
  },
  {
    label: "UNCERTAINTY & CONFLICTS",
    description: "Flagged policy or data anomalies",
  },
  {
    label: "MISSING INFORMATION",
    description: "Required fields yet to be supplied",
  },
];

export default function Stage04ProposalSection() {
  return (
    <section className="w-full bg-white text-[#0f172a] py-20 px-6 lg:px-24 flex items-center justify-center">
      <div className="max-w-6xl w-full flex flex-col items-center">
        {/* Main Wrapper with max-w-6xl constraint */}
        <div className="w-full max-w-6xl flex flex-col">
          {/* Header Grid: Title on Left, Instructional Subtext on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-7 flex flex-col"
            >
              {/* Eyebrow Style */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs uppercase tracking-[0.2em] font-medium text-[#5A6D79] flex items-center bg-transparent rounded-[6px]">
                  <span className="bg-[#0F476A] py-1.5 px-3 text-white rounded-[6px]">
                    Stage 04
                  </span>
                  <span className="py-1.5 px-3 text-[#64748b]">
                    BUILD THE PROPOSED ACTION
                  </span>
                </span>
              </div>

              {/* Main Title */}
              <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-bold tracking-tight leading-[1.1] text-[#0f172a]">
                Make the proposed action reviewable before it becomes executable
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="lg:col-span-5 flex flex-col justify-end"
            >
              <p className="text-[#64748b] text-sm sm:text-base leading-relaxed">
                There is no execution control on this screen. A reviewer sees
                the change, the reason, the sources, the conflicts, and what is
                still missing — in one place.
              </p>
            </motion.div>
          </div>

          {/* Right Column: Workflow Image (No border, no shadow) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
            className="lg:col-span-6 relative w-full overflow-hidden bg-[#F7F5F0]"
          >
            <img
              src="/how-it-works/5.png"
              alt="Stage 04 build the proposed action illustration showing reviewable proposal formation"
              className="w-full h-auto object-cover block rounded-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
