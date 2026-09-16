"use client";

import React from "react";

interface ConditionItem {
  title: string;
  description: string;
}

const CONDITIONS: ConditionItem[] = [
  {
    title: "Mandatory source stale",
    description:
      "Stale badge and last-valid timestamp shown. Ready and Activate are blocked where a current source is required.",
  },
  {
    title: "Mandatory source missing",
    description:
      "Readiness blocked. The missing source and its recovery owner are both identified.",
  },
  {
    title: "Sources conflict",
    description:
      "Both values and the conflict are shown. No silent precedence unless an approved source-authority contract exists; human or professional review is required.",
  },
  {
    title: "Integration degraded",
    description:
      "Affected workstreams, last good event, retry and recovery path, and the decision impact are all identified.",
  },
  {
    title: "Reconciliation failed",
    description:
      "Activation blocked. An exception record and evidence are required before proceeding.",
  },
  {
    title: "Unknown ownership",
    description:
      "Activation blocked. An accountable owner and authority must be assigned first.",
  },
  {
    title: "AI dependency unavailable",
    description:
      "Core non-AI migration and governance remain usable. The AI section degrades gracefully rather than blocking the transition.",
  },
  {
    title: "Partial readiness",
    description:
      "Passing gates continue to show as passing. Partial state is reported honestly rather than collapsed into a single verdict.",
  },
];

export default function SourceDegradationSection() {
  return (
    <section className="w-full bg-white py-16 md:py-24 text-[#0F172A] font-sans flex justify-center items-center px-4">
      <div className="w-full max-w-6xl mx-auto flex flex-col gap-12">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-4 h-[2px] bg-[#A07A2E]" />
              <span className="text-[11px] font-mono font-bold tracking-widest text-[#A07A2E] uppercase">
                SOURCE DEGRADATION
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-[40px] font-bold text-[#0F172A] tracking-tight leading-[1.15]">
              Seven conditions, each with a defined behaviour
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              Degraded sources never silently become clear, and readiness is
              never inferred over missing data.
            </p>
          </div>
        </div>

        {/* 2-Column Grid for the conditions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CONDITIONS.map((item, index) => {
            // 2nd, 3rd, 5th, and 6th divs (1-indexed) correspond to indices 1, 2, 4, 5 (0-indexed)
            const isHighlightedColor = [1, 2, 4, 5].includes(index);

            return (
              <div
                key={index}
                className="bg-white rounded-[9px] p-6 flex flex-col justify-between shadow-sm border border-[#DBE3E8]"
              >
                <div className="flex flex-col gap-2">
                  <h3
                    className="font-bold transition-colors"
                    style={{
                      fontSize: "15px",
                      color: isHighlightedColor ? "#8A3B3B" : "#0F172A",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-[#475569] leading-relaxed"
                    style={{ fontSize: "12px" }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
