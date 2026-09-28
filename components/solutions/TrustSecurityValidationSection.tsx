"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

interface TrustRow {
  title: string;
  description: string;
  linkText: string;
}

const trustRows: TrustRow[] = [
  {
    title: "Security architecture",
    description:
      "Security controls underpin solution delivery; claim-status label only when sourced.",
    linkText: "Security Overview",
  },
  {
    title: "Privacy",
    description:
      "Privacy architecture and data handling qualify applicable workflows.",
    linkText: "Privacy Architecture",
  },
  {
    title: "Data residency",
    description:
      "Residency varies by deployment/jurisdiction and requires explicit status.",
    linkText: "Data Residency",
  },
  {
    title: "Compliance",
    description:
      "Current compliance framework/status — no badge walls or implied certification.",
    linkText: "Compliance Overview",
  },
  {
    title: "Responsible AI",
    description: "Control boundaries for AI-assisted capabilities.",
    linkText: "Responsible AI",
  },
  {
    title: "Evidence",
    description: "Evidence architecture and auditability model.",
    linkText: "Evidence Architecture",
  },
  {
    title: "Availability",
    description: "Current operational status and incident information.",
    linkText: "System Status",
  },
];

export default function TrustSecurityValidationSection() {
  return (
    <section className="w-full bg-[#F7F5F0] text-[#08222F] py-20 px-6 lg:px-12 font-sans flex justify-center">
      <div className="max-w-6xl w-full flex flex-col items-start">
        {/* Header / Intro text container */}
        <div className="flex flex-col items-start mb-16 max-w-3xl">
          {/* Eyebrow Tag */}
          <div className="flex items-center gap-2 mb-4">
            <span
              className="w-4 h-[1px]"
              style={{ backgroundColor: "#C59B3F" }}
            ></span>
            <span
              className="text-xs font-semibold tracking-widest uppercase font-mono"
              style={{ color: "#C59B3F" }}
            >
              TRUST, SECURITY & VALIDATION
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight leading-[1.15] mb-4">
            Routed to the source of truth — never duplicated here.
          </h2>

          {/* Description */}
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-mono">
            No badge implies universal compliance. Every claim status is scoped
            to a workflow or capability.
          </p>
        </div>

        {/* Outer Card Container */}
        <div className="w-full bg-white border border-[#D9D3C7] rounded-3xl p-6 shadow-sm">
          <div className="w-full flex flex-col divide-y divide-[#D9D3C7]">
            {trustRows.map((row, index) => (
              <div
                key={index}
                className="py-6 first:pt-0 last:pb-0 grid grid-cols-1 lg:grid-cols-12 items-center gap-4 transition-colors px-4 rounded-xl"
              >
                {/* Left: Title & Description */}
                <div className="lg:col-span-8 flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6">
                  <h3 className="text-base font-bold text-[#08222F] sm:w-1/3 shrink-0">
                    {row.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 font-mono leading-relaxed sm:w-2/3">
                    {row.description}
                  </p>
                </div>

                {/* Right: Link */}
                <div className="lg:col-span-4 lg:text-right">
                  <button className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold font-mono text-[#C59B3F] hover:underline focus:outline-none">
                    <span>{row.linkText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
