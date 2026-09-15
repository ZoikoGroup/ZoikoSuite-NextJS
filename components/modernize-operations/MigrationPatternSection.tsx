"use client";

import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

interface Phase {
  title: string;
  subtitle: string;
}

const PHASES: Phase[] = [
  { title: "Discover", subtitle: "Current truth" },
  { title: "Design", subtitle: "Target outcome" },
  { title: "Prepare", subtitle: "Mapping, access" },
  { title: "Shadow", subtitle: "Compare only" },
  { title: "Activate", subtitle: "Human decision" },
  { title: "Stabilize", subtitle: "Hypercare" },
  { title: "Optimize / decommission", subtitle: "Exit criteria" },
];

export default function MigrationPatternSection() {
  const [activePhaseIndex, setActivePhaseIndex] = useState<number>(3); // Default to Shadow (index 3)

  return (
    <section className="w-full bg-white py-16 md:py-24 text-[#0F172A] font-sans flex justify-center items-center px-4">
      <div className="w-full max-w-6xl mx-auto flex flex-col gap-12">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-4 h-[2px] bg-[#A07A2E]" />
              <span className="text-[11px] font-mono font-bold tracking-widest text-[#A07A2E] uppercase">
                MIGRATION PATTERN
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-[40px] font-bold text-[#0F172A] tracking-tight leading-[1.15]">
              Seven phases, and Shadow sits before activation
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              The same pattern applies to every path above. Phases can overlap
              by workstream, and none carries a published duration.
            </p>
          </div>
        </div>

        {/* Phase Cards Flow (Horizontal Row with Arrow indicators) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 items-center">
          {PHASES.map((phase, index) => {
            const isHighlighted = index === activePhaseIndex;
            return (
              <button
                key={index}
                onClick={() => setActivePhaseIndex(index)}
                className={`rounded-xl p-4 flex flex-col items-center text-center transition-all cursor-pointer shadow-sm relative ${
                  isHighlighted ? "bg-[#F6EDD9]" : "bg-white hover:bg-gray-50"
                }`}
                style={{
                  border: isHighlighted
                    ? "1px solid #D0AA55"
                    : "1px solid #E2E8F0",
                }}
              >
                <span
                  className="font-bold mb-1"
                  style={{ fontSize: "14px", color: "#0F172A" }}
                >
                  {phase.title}
                </span>
                <span
                  className="font-mono tracking-wider uppercase"
                  style={{ fontSize: "10px", color: "#64748B" }}
                >
                  {phase.subtitle}
                </span>
              </button>
            );
          })}
        </div>

        {/* Bottom Details Grid (2 columns) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Detail Box */}
          <div
            className="rounded-xl p-6 md:p-8 flex flex-col justify-between bg-white shadow-sm"
            style={{ border: "1px solid #E2E8F0" }}
          >
            <div className="flex flex-col gap-3">
              <span
                className="font-mono font-bold tracking-widest uppercase"
                style={{ fontSize: "10px", color: "#A07A2E" }}
              >
                WHAT EACH PHASE MUST PRODUCE
              </span>
              <p
                className="text-[#475569] leading-relaxed"
                style={{ fontSize: "14px" }}
              >
                Every phase closes against evidence, not against a date.
                Discover produces the source ownership position including what
                is unknown; Design produces a recorded architecture decision per
                scope; Prepare produces mapping and access approval; Shadow
                produces comparison records and dispositions; Activate produces
                a named human decision; Stabilize produces exception closure;
                Decommission produces consumer discovery and retention approval.
              </p>
            </div>
          </div>

          {/* Right Detail Box (Highlighted with #F6EDD9 and #D0AA55 border) */}
          <div
            className="rounded-xl max-h-45 p-6 md:p-8 flex flex-col justify-between shadow-sm"
            style={{
              backgroundColor: "#F6EDD9",
              border: "1px solid #D0AA55",
              borderLeft:"4px solid #D0AA55"
            }}
          >
            <div className="flex flex-col gap-3">
              <span
                className="font-mono font-bold tracking-widest uppercase"
                style={{ fontSize: "10px", color: "#A07A2E" }}
              >
                NOT PUBLISHED
              </span>
              <p
                className="text-[#4A3A18] leading-relaxed"
                style={{ fontSize: "15px" }}
              >
                No migration duration, cutover date, effort estimate, volume
                figure, completion percentage or success rate appears on this
                page. Anyone quoting a standard modernization timeline for
                ZoikoSuite is not working from an approved source.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
