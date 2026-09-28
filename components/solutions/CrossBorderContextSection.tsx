"use client";

import React from "react";

interface ContextRow {
  title: string;
  description: string;
  specimen: string;
}

const contextRows: ContextRow[] = [
  {
    title: "Legal entity",
    description:
      "Parent, subsidiary, branch, reporting hierarchy, delegated authority, fiscal/operating context.",
    specimen: "Entity-tree specimen",
  },
  {
    title: "Jurisdiction",
    description:
      "Country, state/province, filing authority, labor/tax/regulatory boundary as applicable.",
    specimen: "Coverage status per workflow",
  },
  {
    title: "Effective date",
    description: "Historical/current/future-dated policy or rule state.",
    specimen: "Timeline / date-context token",
  },
  {
    title: "Residency",
    description:
      "Storage, processing, backup, replication, key custody, deployment constraints where applicable.",
    specimen: "Data Residency source link",
  },
  {
    title: "Coverage status",
    description:
      "Available · Limited · Partner-Supported · Planned · Not Available.",
    specimen: "Visible text label — never color-only",
  },
  {
    title: "Rule provenance",
    description: "Source, version, effective date, review status, owner.",
    specimen: "Expandable evidence/source drawer",
  },
];

export default function CrossBorderContextSection() {
  return (
    <section className="w-full bg-white text-[#08222F] py-20 px-6 lg:px-12 font-sans flex justify-center">
      <div className="max-w-6xl w-full flex flex-col items-start">
        {/* Header / Intro text container */}
        <div className="flex flex-col items-start mb-16">
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
              CROSS-BORDER CONTEXT
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-[36px] font-bold tracking-tight leading-[1.15] mb-6">
            Operate across borders without separating the rule from the action.
          </h2>

          {/* Description */}
          <p className="text-gray-600 text-sm lg:text-base max-w-xl leading-relaxed font-mono">
            Software capability and professional legal/tax/accounting advice
            remain distinct. Coverage is never presented as &quot;global
            compliance.&quot;
          </p>
        </div>

        {/* Rows Container */}
        <div className="w-full border-t border-[#D9D3C7]">
          {contextRows.map((row, index) => (
            <div
              key={index}
              className="grid grid-cols-1 lg:grid-cols-12 py-7 border-b border-[#D9D3C7] items-center gap-6 transition-colors px-4 rounded-xl"
            >
              {/* Left Column: Title */}
              <div className="lg:col-span-3">
                <h3 className="text-base font-bold text-[#08222F]">
                  {row.title}
                </h3>
              </div>

              {/* Middle Column: Description */}
              <div className="lg:col-span-5">
                <p className="text-xs text-gray-600 font-mono leading-relaxed">
                  {row.description}
                </p>
              </div>

              {/* Right Column: Specimen */}
              <div className="lg:col-span-4 lg:text-right">
                <span className="text-xs font-bold font-mono text-[#C59B3F] inline-block">
                  {row.specimen}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
