"use client";

import React from "react";
import { motion } from "framer-motion";

interface SignalSource {
  label: string;
  description: string;
}

const signalSources: SignalSource[] = [
  { label: "USER", description: "A request submitted by an identified person" },
  { label: "SYSTEM", description: "An event emitted by a source system" },
  {
    label: "DOCUMENT",
    description: "A change to a contract, policy, or filing document",
  },
  { label: "CALENDAR", description: "An obligation falling due" },
  { label: "THRESHOLD", description: "A configured limit or variance breach" },
  { label: "INTEGRATION", description: "An inbound connector event" },
  {
    label: "AI",
    description: "An approved AI finding — always a proposal, never an action",
  },
  { label: "CONTROL", description: "A scheduled control run" },
  {
    label: "REGULATORY",
    description: "A rule update entered by an authorized owner",
  },
];

const actionButtons = [
  { text: "Create governed action record", variant: "default" },
  { text: "Link existing action", variant: "default" },
  { text: "Request clarification", variant: "default" },
  { text: "Reject invalid signal", variant: "danger" },
  { text: "Escalate urgent intake", variant: "default" },
];

export default function StageDetailSection() {
  return (
    <section className="w-full bg-[#F7F5F0] text-[#0f172a] py-20 px-6 lg:px-24 flex items-center justify-center">
      <div className="max-w-6xl w-full flex flex-col items-center">
        {/* Main Wrapper with max-w-6xl constraint */}
        <div className="w-full max-w-6xl flex flex-col">
          {/* Two-Column Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Stage Tag, Title, Description, Sources, and Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-6 flex flex-col"
            >
              {/* Stage Tag with line */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs uppercase tracking-[0.2em] font-medium text-[#5A6D79]">
                  <span className="bg-[#0F476A] p-2 text-white rounded-[6px]">Stage 01 </span>
                  <span className="p-2">Capture the Signal</span>
                </span>
              </div>

              {/* Main Title */}
              <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-bold tracking-tight leading-[1.1] text-[#0f172a] mb-4">
                Start with an attributable signal
              </h2>

              {/* Description */}
              <p className="text-[#64748b] text-sm sm:text-base leading-relaxed mb-8">
                A governed action begins with a recorded trigger and a named
                source — not an unstructured task or an opaque suggestion.
              </p>

              {/* Signal Sources List */}
              <div className="mb-8">
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#c5a059] block mb-4">
                  Signal Sources
                </span>
                <div className="flex flex-col space-y-2.5">
                  {signalSources.map((source, idx) => (
                    <div
                      key={idx}
                      className="flex items-baseline text-xs sm:text-sm"
                    >
                      <span className="w-28 shrink-0 font-bold text-[#c5a059] tracking-wider uppercase text-[11px]">
                        {source.label}
                      </span>
                      <span className="text-[#64748b]">
                        {source.description}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-2.5 max-w-120">
                {actionButtons.map((btn, idx) => (
                  <span
                    key={idx}
                    className={`px-3.5 py-2 rounded-md text-xs tracking-[1px] font-semibold border transition-all ${
                      btn.variant === "danger"
                        ? "bg-red-50 text-red-700 border-red-200"
                        : "bg-white text-[#0f172a] border-[#DBE3E8] shadow-xs"
                    }`}
                  >
                    {btn.text}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Right Column: Stage Workflow Image (No border, no shadow) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
              className="lg:col-span-6 relative w-full overflow-hidden bg-[#F7F5F0]"
            >
              <img
                src="/how-it-works/2.png"
                alt="Stage 01 capture the signal illustration showing triggers and multi-source signals feeding into a governed record"
                className="w-full h-auto object-cover block rounded-2xl"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
