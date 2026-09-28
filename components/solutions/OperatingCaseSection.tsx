"use client";

import React from "react";

interface OperatingCaseRow {
  number: string;
  title: string;
  problem: string;
  solution: string;
}

const operatingRows: OperatingCaseRow[] = [
  {
    number: "01",
    title: "Fragmented systems",
    problem:
      "Finance, HR/payroll, contracts, compliance, and evidence can maintain different versions of truth.",
    solution: "Unified truth ownership + governed event propagation",
  },
  {
    number: "02",
    title: "Jurisdictional blind spots",
    problem:
      "Rules vary by entity, worker, transaction, country/state, and effective date.",
    solution: "Entity + jurisdiction + effective-date context at runtime",
  },
  {
    number: "03",
    title: "Governance after execution",
    problem: "Approval and policy checks happen outside the action path.",
    solution: "Governance before execution",
  },
  {
    number: "04",
    title: "Evidence assembled manually",
    problem: "Audit teams reconstruct decisions and records after the fact.",
    solution: "Evidence by default + decision/workflow lineage",
  },
  {
    number: "05",
    title: "Integration sprawl",
    problem:
      "Point-to-point dependencies expand ownership and security surface.",
    solution: "Versioned APIs/events + governed integration contracts",
  },
  {
    number: "06",
    title: "AI without authority boundaries",
    problem:
      "Automated assistance can obscure source truth or approval accountability.",
    solution:
      "Governed intelligence within policy, provenance, and human review",
  },
];

export default function OperatingCaseSection() {
  return (
    <section className="w-full bg-[#F7F5F0] text-[#08222F] py-20 px-6 lg:px-12 font-sans flex justify-center">
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
              THE OPERATING CASE
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-[38px] font-bold tracking-tight leading-[1.15] mb-6">
            Your business operates across functions. Your control model should
            too.
          </h2>

          {/* Description */}
          <p className="text-gray-600 text-sm lg:text-base max-w-xl leading-relaxed">
            Operational fragmentation connects directly to decision delay,
            reconciliation, governance, evidence, and integration risk.
          </p>
        </div>

        {/* Rows Container */}
        <div className="w-full border-t border-[#D9D3C7]">
          {operatingRows.map((row, index) => (
            <div
              key={index}
              className="grid grid-cols-1 lg:grid-cols-12 py-7 border-b border-[#D9D3C7] items-center gap-6 transition-colors px-4 rounded-xl"
            >
              {/* Left Column: Number & Title */}
              <div className="lg:col-span-4 flex items-center gap-4">
                <span className="text-xs font-mono text-[#08222F] font-bold">
                  {row.number}
                </span>
                <h3 className="text-base font-bold text-[#08222F]">
                  {row.title}
                </h3>
              </div>

              {/* Middle Column: Problem description */}
              <div className="lg:col-span-4">
                <p className="text-xs text-gray-600 font-mono leading-relaxed">
                  {row.problem}
                </p>
              </div>

              {/* Right Column: Solution / Control */}
              <div className="lg:col-span-4 lg:text-right">
                <span className="text-xs font-bold font-mono text-[#C59B3F] inline-block">
                  {row.solution}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
