"use client";

import React from "react";

interface CoverageItem {
  title: string;
  description: string;
  statusBadge: string;
  statusType: "available" | "limited" | "partner" | "planned";
}

const coverageItems: CoverageItem[] = [
  {
    title: "Governed records",
    description:
      "Policy, decision and evidence records — the objects ZolkoSuite is authoritative for.",
    statusBadge: "Available · storage region-selectable",
    statusType: "available",
  },
  {
    title: "Document storage",
    description:
      "Uploaded documents attached to governed decisions and obligations.",
    statusBadge: "Available · storage region-selectable",
    statusType: "available",
  },
  {
    title: "Search indexing",
    description:
      "Derived indexes supporting retrieval across governed records.",
    statusBadge: "Limited · region-aligned where supported",
    statusType: "limited",
  },
  {
    title: "Audit & operational telemetry",
    description:
      "Security and governance events supporting evidence and detection.",
    statusBadge: "Limited · collection region may differ",
    statusType: "limited",
  },
  {
    title: "Backup & recovery",
    description: "Backup copies and restoration paths for resilience.",
    statusBadge: "Limited · by region availability",
    statusType: "limited",
  },
  {
    title: "AI processing paths",
    description: "Optional governed intelligence features where enabled.",
    statusBadge: "Partner-supported · provider path disclosed",
    statusType: "partner",
  },
  {
    title: "Sovereign-boundary operation",
    description:
      "All workloads operating entirely within a sovereign boundary.",
    statusBadge: "Planned · feasibility-gated",
    statusType: "planned",
  },
];

export default function CoverageStatesSection() {
  return (
    <section className="w-full bg-[#F7F5F0] py-20 px-6 lg:px-12 font-sans text-[#111827]">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-3">
              <span
                className="w-4 h-[1px]"
                style={{ backgroundColor: "#C9B07A" }}
              ></span>
              <span
                className="text-[11px] font-semibold tracking-widest uppercase font-mono"
                style={{ color: "#C9B07A" }}
              >
                JURISDICTION, ENTITY AND WORKLOAD MAPPING
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold tracking-tight leading-[1.15]">
              Five coverage states, applied per workload
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-[#4B5563] text-[15px] leading-relaxed">
              Coverage is never published for a jurisdiction as a whole.
              Different workloads within the same region can carry different
              states.
            </p>
          </div>
        </div>

        {/* List of Rows */}
        <div className="space-y-4">
          {coverageItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-5 border border-[#E5E7EB] shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:items-center w-full">
                <div className="md:col-span-3">
                  <h3 className="text-sm font-bold text-[#111827]">
                    {item.title}
                  </h3>
                </div>
                <div className="md:col-span-6">
                  <p className="text-[13px] text-[#4B5563] leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="md:col-span-3 flex md:justify-end">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-[#E5E7EB] bg-white">
                    <span
                      className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                        item.statusType === "available"
                          ? "bg-emerald-600"
                          : item.statusType === "limited"
                            ? "bg-zinc-600"
                            : item.statusType === "partner"
                              ? "bg-blue-600"
                              : "bg-amber-600"
                      }`}
                    ></span>
                    <span className="text-[11px] font-mono font-medium text-[#111827] whitespace-nowrap">
                      {item.statusBadge}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
