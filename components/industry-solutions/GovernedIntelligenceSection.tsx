"use client";

import React from "react";

const AI_MAY_ITEMS = [
  "Detect anomalies against configured expectations",
  "Forecast exposure from source data, labelled as a projection",
  "Extract obligations, clauses and metadata with provenance",
  "Prioritize exceptions for human review",
  "Summarize a decision basis with its sources cited",
  "Provide decision support to a named reviewer",
];

const AI_MAY_NOT_ITEMS = [
  "Make any autonomous material decision",
  "Bypass authority, approval or segregation requirements",
  "Alter source truth in any system of record",
  "Satisfy an evidence requirement on its own",
  "Determine compliance, coverage or regulatory applicability",
  "Substitute for professional or regulated judgment",
];

export default function GovernedIntelligenceSection() {
  return (
    <section className="w-full bg-[#08222F] text-white py-20 px-6 lg:px-12 flex justify-center items-center font-sans">
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
                GOVERNED INTELLIGENCE AND EXECUTIVE REPORTING
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight leading-[1.15]">
              Insight only after control
            </h2>
          </div>

          {/* Right Subtitle Area */}
          <div className="lg:col-span-5 flex items-start w-full">
            <p className="text-gray-300 text-sm lg:text-base leading-relaxed w-full">
              Reporting sits downstream of the governance model. A metric that
              cannot trace to a governed decision is not published as executive
              intelligence.
            </p>
          </div>
        </div>

        {/* Two Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* AI May Card */}
          <div className="bg-[#F7F5F0] text-[#08222F] rounded-2xl p-8 lg:p-10 shadow-xl border-l-4 border-l-[#1E7A5A] flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-[#1E7A5A] block mb-6">
                AI MAY — IN EVERY SOLUTION PATTERN
              </span>
              <ul className="flex flex-col gap-3.5">
                {AI_MAY_ITEMS.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1E7A5A] mt-2 shrink-0"></span>
                    <span className="text-xs lg:text-sm text-gray-700 leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* AI May Not Card */}
          <div className="bg-[#F7F5F0] text-[#08222F] rounded-2xl p-8 lg:p-10 shadow-xl border-l-4 border-l-[#9B3B3B] flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-[#9B3B3B] block mb-6">
                AI MAY NOT — IN EVERY SOLUTION PATTERN
              </span>
              <ul className="flex flex-col gap-3.5">
                {AI_MAY_NOT_ITEMS.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#9B3B3B] mt-2 shrink-0"></span>
                    <span className="text-xs lg:text-sm text-gray-700 leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
