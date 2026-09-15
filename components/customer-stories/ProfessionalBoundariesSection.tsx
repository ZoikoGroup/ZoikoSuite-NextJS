"use client";

import React from "react";

interface BoundaryItem {
  title: string;
  description: string;
}

const BOUNDARIES_LEFT: BoundaryItem[] = [
  {
    title: "Finance and accounting",
    description:
      "Customer finance outcomes do not establish accounting correctness, financial statement accuracy or appropriate accounting treatment.",
  },
  {
    title: "Legal and contracts",
    description:
      "A story does not provide legal advice, determine enforceability or create legal authority.",
  },
  {
    title: "Regulatory and compliance",
    description:
      "A story does not prove regulatory approval or universal compliance. Jurisdiction, source and effective-date context controls.",
  },
  {
    title: "Security and privacy",
    description:
      "Customer experience does not independently certify platform security or privacy, or guarantee the absence of incidents.",
  },
];

const BOUNDARIES_RIGHT: BoundaryItem[] = [
  {
    title: "Tax",
    description:
      "A story does not provide tax advice, determine tax liability or prove jurisdiction-wide tax compliance.",
  },
  {
    title: "Audit",
    description:
      "Audit-readiness evidence does not constitute an audit opinion, certification, auditor acceptance or assurance conclusion.",
  },
  {
    title: "Workforce and employment",
    description:
      "No employment-law conclusion, employee surveillance or productivity-policing inference.",
  },
  {
    title: "AI",
    description:
      "Any AI-assisted workflow remains governed by source, limitation and human-authority rules. A story does not expand AI authority.",
  },
];

export default function ProfessionalBoundariesSection() {
  return (
    <section className="w-full bg-[#08222F] py-16 md:py-24 text-white font-sans flex justify-center items-center px-4">
      <div className="w-full max-w-6xl mx-auto flex flex-col gap-12">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-4 h-[2px] bg-[#A07A2E]" />
              <span
                className="text-[11px] font-mono font-bold tracking-widest uppercase"
                style={{ color: "#A07A2E" }}
              >
                PROFESSIONAL BOUNDARIES
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl max-w-xl md:text-[40px] font-bold tracking-tight leading-[1.15]">
              Eight domains a story cannot speak for
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              One organization&apos;s experience is not a professional
              conclusion in any of these areas. Each boundary appears at the
              point where a story could otherwise be over-read.
            </p>
          </div>
        </div>

        {/* Two-Column Grid of Boundaries */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Left Column */}
          <div className="flex flex-col gap-4">
            {BOUNDARIES_LEFT.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-5 shadow-sm flex flex-col gap-2"
              >
                <h3 className="text-sm font-bold text-[#0F172A]">
                  {item.title}
                </h3>
                <p
                  className="text-xs sm:text-sm leading-relaxed"
                  style={{ color: "#6B2626" }}
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-4">
            {BOUNDARIES_RIGHT.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-5 shadow-sm flex flex-col gap-2"
              >
                <h3 className="text-sm font-bold text-[#0F172A]">
                  {item.title}
                </h3>
                <p
                  className="text-xs sm:text-sm leading-relaxed"
                  style={{ color: "#6B2626" }}
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
