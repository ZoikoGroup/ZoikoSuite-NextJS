"use client";

import React from "react";

interface ComparisonRow {
  industry: string;
  multiEntity: string;
  regulated: string;
  workforce: string;
  specialistCore: string;
  evidence: string;
}

const comparisonData: ComparisonRow[] = [
  {
    industry: "Financial Service",
    multiEntity: "High",
    regulated: "High",
    workforce: "Medium-high",
    specialistCore: "High",
    evidence: "High",
  },
  {
    industry: "Banking",
    multiEntity: "High",
    regulated: "High",
    workforce: "Medium",
    specialistCore: "Very high",
    evidence: "High",
  },
  {
    industry: "Insurance",
    multiEntity: "High",
    regulated: "High",
    workforce: "Medium",
    specialistCore: "Very high",
    evidence: "High",
  },
  {
    industry: "Healthcare",
    multiEntity: "Medium-high",
    regulated: "High",
    workforce: "High",
    specialistCore: "Very high",
    evidence: "High",
  },
  {
    industry: "Telecommunication & MVNOs",
    multiEntity: "High",
    regulated: "High",
    workforce: "High",
    specialistCore: "Very high",
    evidence: "High",
  },
  {
    industry: "Manufacturing",
    multiEntity: "High",
    regulated: "Medium-high",
    workforce: "High",
    specialistCore: "Very high",
    evidence: "High",
  },
  {
    industry: "Energy & Utilities",
    multiEntity: "High",
    regulated: "High",
    workforce: "High",
    specialistCore: "Very high",
    evidence: "High",
  },
  {
    industry: "Retail & Commerce",
    multiEntity: "High",
    regulated: "Medium-high",
    workforce: "Very high",
    specialistCore: "Very high",
    evidence: "Medium-high",
  },
  {
    industry: "Government & Public Sector",
    multiEntity: "Medium-high",
    regulated: "High",
    workforce: "High",
    specialistCore: "High",
    evidence: "Very high",
  },
];

export default function CrossIndustryComparisonSection() {
  return (
    <section className="w-full bg-white text-[#08222F] py-20 px-6 lg:px-12 font-sans flex justify-center">
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
              CROSS-INDUSTRY COMPARISON
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight leading-[1.15] mb-4">
            Which operating pressures are relevant to you?
          </h2>

          {/* Description */}
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-mono">
            A navigation aid, not a risk rating or compliance assessment.
            &quot;Emphasis&quot; reflects page-content prioritization only.
          </p>
        </div>

        {/* Table Container */}
        <div className="w-full overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[900px]">
            <thead>
              <tr className="bg-[#F6F5F0] border-b border-[#D9D3C7] text-[11px] font-mono font-bold tracking-wider text-gray-500 uppercase">
                <th className="py-4 px-6 w-1/4">INDUSTRY</th>
                <th className="py-4 px-3 w-[15%]">
                  MULTI-ENTITY / CROSS-BORDER
                </th>
                <th className="py-4 px-3 w-[15%]">REGULATED / POLICY-HEAVY</th>
                <th className="py-4 px-3 w-[15%]">WORKFORCE COMPLEXITY</th>
                <th className="py-4 px-3 w-[15%]">SPECIALIST CORE SYSTEMS</th>
                <th className="py-4 px-6 w-[15%]">
                  EVIDENCE / PUBLIC ACCOUNTABILITY
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#D9D3C7]">
              {comparisonData.map((row, index) => (
                <tr
                  key={index}
                  className="transition-colors"
                >
                  <td className="py-5 px-6 text-sm font-bold text-[#08222F]">
                    {row.industry}
                  </td>
                  <td className="py-5 px-3">
                    <span className="inline-block px-3 py-1 bg-[#E8F0F5] text-[#0F476A] text-xs font-mono font-semibold rounded-full">
                      {row.multiEntity}
                    </span>
                  </td>
                  <td className="py-5 px-3">
                    <span className="inline-block px-3 py-1 bg-[#E8F0F5] text-[#0F476A] text-xs font-mono font-semibold rounded-full">
                      {row.regulated}
                    </span>
                  </td>
                  <td className="py-5 px-3">
                    <span className="inline-block px-3 py-1 bg-[#E8F0F5] text-[#0F476A] text-xs font-mono font-semibold rounded-full">
                      {row.workforce}
                    </span>
                  </td>
                  <td className="py-5 px-3">
                    <span className="inline-block px-3 py-1 bg-[#E8F0F5] text-[#0F476A] text-xs font-mono font-semibold rounded-full">
                      {row.specialistCore}
                    </span>
                  </td>
                  <td className="py-5 px-6">
                    <span className="inline-block px-3 py-1 bg-[#E8F0F5] text-[#0F476A] text-xs font-mono font-semibold rounded-full">
                      {row.evidence}
                    </span>
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
