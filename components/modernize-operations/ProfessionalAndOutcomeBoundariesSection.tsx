"use client";

import React from "react";

interface BoundaryItem {
  title: string;
  description: string;
}

const BOUNDARIES: BoundaryItem[] = [
  {
    title: "ERP / HCM REPLACEMENT",
    description:
      "No universal replacement claim. The outcome is selected by approved scope, object by object.",
  },
  {
    title: "FINANCE",
    description:
      "No accounting correctness, close, treasury or reporting outcome guarantee.",
  },
  {
    title: "PAYROLL / HR",
    description:
      "No payroll, tax or employment-law correctness or filing guarantee. Privacy and purpose boundaries apply.",
  },
  {
    title: "CONTROLS / COMPLIANCE",
    description:
      "No guarantee of control effectiveness or compliance. Controls require a named owner and evidence.",
  },
  {
    title: "AUDIT READINESS",
    description:
      "Supports readiness and review. No certification, auditor or regulator acceptance, or legal admissibility claim.",
  },
  {
    title: "JURISDICTION / EXPANSION",
    description:
      "Coverage carries its source, effective date and professional-review requirement. No universal country coverage.",
  },
  {
    title: "AI",
    description:
      "No independent material authority, and no replacement of professional judgment.",
  },
  {
    title: "BUSINESS CASE",
    description: "No guaranteed ROI, savings, timeline or adoption outcome.",
  },
];

export default function ProfessionalAndOutcomeBoundariesSection() {
  return (
    <section className="w-full bg-[#08222F] py-16 md:py-24 text-white font-sans flex justify-center items-center px-4">
      <div className="w-full max-w-6xl mx-auto flex flex-col gap-12">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-4 h-[2px] bg-[#A07A2E]" />
              <span className="text-[11px] font-mono font-bold tracking-widest text-[#A07A2E] uppercase">
                PROFESSIONAL AND OUTCOME BOUNDARIES
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-[40px] font-bold tracking-tight leading-[1.15]">
              Eight areas, eight mandatory boundaries
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              Each path above inherits the boundary for its area. These are
              stated once, in full, rather than scattered as footnotes.
            </p>
          </div>
        </div>

        {/* Boundaries List (Rows) */}
        <div className="flex flex-col gap-3">
          {BOUNDARIES.map((item, index) => {
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-4 md:px-6 md:py-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-sm"
                style={{ border: "1px solid #DBE3E8" }}
              >
                {/* First Column: Title */}
                <div className="w-full md:w-1/3">
                  <span
                    className="font-mono font-bold tracking-wider uppercase block"
                    style={{ fontSize: "12px", color: "#0F172A" }}
                  >
                    {item.title}
                  </span>
                </div>

                {/* Second Column: Description (Text color #6B2626) */}
                <div className="w-full md:w-2/3">
                  <p
                    className="leading-relaxed font-medium"
                    style={{ fontSize: "14px", color: "#6B2626" }}
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
