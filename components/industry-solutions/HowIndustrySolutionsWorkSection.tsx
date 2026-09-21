"use client";

import React from "react";

interface SolutionItem {
  label: string;
  description: string;
}

const STAYS_SAME: SolutionItem[] = [
  {
    label: "Context",
    description: "entity, jurisdiction, effective date, source provenance",
  },
  {
    label: "Authority",
    description: "role, delegation, limit, segregation of duties",
  },
  {
    label: "Policy",
    description: "applicable rule with version and effective date",
  },
  {
    label: "Human decision",
    description: "material authorization by a named accountable person",
  },
  {
    label: "Execution or handoff",
    description: "in the approved system, commonly not ZoikoSuite",
  },
  {
    label: "Evidence",
    description: "decision basis and lineage preserved as work happens",
  },
];

const INDUSTRY_CHANGES: SolutionItem[] = [
  {
    label: "Examples and object labels",
    description: "a pay run, a claim file, a work order, a fund commitment",
  },
  {
    label: "Obligation sources",
    description: "which regulators, licences, contracts and frameworks apply",
  },
  {
    label: "Specialist systems",
    description: "which platforms stay authoritative for their own domain",
  },
  {
    label: "Evidence expectations",
    description: "who asks for proof, and what satisfies them",
  },
  {
    label: "Proof surfaces",
    description: "which product views are relevant to your evaluation",
  },
];

export default function HowIndustrySolutionsWorkSection() {
  return (
    <section className="w-full bg-white text-[#08222F] py-20 px-6 lg:px-12 flex justify-center items-center font-sans">
      <div className="max-w-6xl w-full flex flex-col">
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-end">
          {/* Left Title Area */}
          <div className="lg:col-span-7 flex flex-col items-start">
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
                HOW INDUSTRY SOLUTIONS WORK
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight leading-[1.15]">
              One governance model, resolved into your context
            </h2>
          </div>

          {/* Right Subtitle Area */}
          <div className="lg:col-span-5 flex items-start">
            <p className="text-gray-600 text-sm lg:text-base leading-relaxed">
              A solution pattern is not a separate product. It is the common
              control model applied to a recurring operating challenge, with
              your sector&apos;s objects, obligations and systems resolved into
              it.
            </p>
          </div>
        </div>

        {/* Two Columns Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column: What Stays The Same */}
          <div className="flex flex-col">
            <h3 className="text-xs font-mono font-bold tracking-widest uppercase text-[#785C1D] mb-6">
              WHAT STAYS THE SAME IN EVERY SOLUTION
            </h3>
            <ul className="flex flex-col gap-4">
              {STAYS_SAME.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full border border-[#C59B3F] mt-1.5 shrink-0"></span>
                  <div className="text-xs lg:text-sm leading-relaxed">
                    <span className="font-bold text-[#08222F]">
                      {item.label}
                    </span>{" "}
                    <span className="text-gray-600">- {item.description}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: What Your Industry Changes */}
          <div className="flex flex-col">
            <h3 className="text-xs font-mono font-bold tracking-widest uppercase text-[#785C1D] mb-6">
              WHAT YOUR INDUSTRY CHANGES
            </h3>
            <ul className="flex flex-col gap-4">
              {INDUSTRY_CHANGES.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full border border-[#C59B3F] mt-1.5 shrink-0"></span>
                  <div className="text-xs lg:text-sm leading-relaxed">
                    <span className="font-bold text-[#08222F]">
                      {item.label}
                    </span>{" "}
                    <span className="text-gray-600">- {item.description}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
