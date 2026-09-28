"use client";

import React from "react";

interface CoverageRow {
  label: string;
  description: string;
  status: string;
}

const coverageData: CoverageRow[] = [
  {
    label: "Entity context",
    description:
      "Organizations may operate through parent/subsidiary/branch/facility/agency/operating-company structures; child pages refine terminology.",
    status: "Structure-specific",
  },
  {
    label: "Jurisdiction context",
    description:
      "Country/state/province/regulator applicability shown only when source-owned and effective-dated.",
    status: "Effective-dated",
  },
  {
    label: "Residency",
    description:
      "Storage/processing/backup/replication/deployment status only from the approved registry.",
    status: "Data Residency source link",
  },
  {
    label: "Coverage status",
    description:
      "Available • Limited • Partner-Supported • Planned • Not Available / Not Published.",
    status: "Mandatory, never color-only",
  },
  {
    label: "Review metadata",
    description:
      'Material coverage statements show "Last reviewed" or equivalent source freshness.',
    status: "Required where time-sensitive",
  },
  {
    label: "Unknown",
    description: "Unknown/unverified must remain visible.",
    status: 'Never silently converted to "available"',
  },
];

export default function CoverageResidencySection() {
  return (
    <section className="w-full bg-white text-[#08222F] py-20 px-6 lg:px-12 font-sans flex justify-center">
      <div className="max-w-6xl w-full flex flex-col items-start">
        {/* Header / Intro text container */}
        <div className="flex flex-col items-start mb-12 max-w-3xl">
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
              COVERAGE & RESIDENCY
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight leading-[1.15] mb-4">
            Context and status methodology — not a blanket coverage claim.
          </h2>

          {/* Description */}
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-mono">
            This page does not provide legal, tax, accounting, clinical,
            financial, or regulatory advice.
          </p>
        </div>

        {/* Table / List Container */}
        <div className="w-full overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <tbody className="divide-y divide-[#D9D3C7]">
              {coverageData.map((row, index) => (
                <tr
                  key={index}
                  className="transition-colors"
                >
                  <td className="py-6 pr-6 w-1/4 text-sm font-bold text-[#08222F] align-top">
                    {row.label}
                  </td>
                  <td className="py-6 px-6 w-1/2 text-xs sm:text-sm text-gray-600 font-mono leading-relaxed align-top">
                    {row.description}
                  </td>
                  <td className="py-6 pl-6 w-1/4 text-xs sm:text-sm font-bold text-[#0F476A] font-mono align-top">
                    {row.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
