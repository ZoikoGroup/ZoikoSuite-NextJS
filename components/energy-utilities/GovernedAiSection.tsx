"use client";

import React from "react";

interface AiRuleList {
  title: string;
  titleColor: string;
  borderColor: string;
  bgColor: string;
  items: string[];
}

const AI_RULES: AiRuleList[] = [
  {
    title: "AI MAY",
    titleColor: "text-[#1E7A5A]",
    borderColor: "border-[#B6D8C7]",
    bgColor: "bg-[#FAFCFB]",
    items: [
      "Propose obligations, clauses and metadata from documents, with provenance and confidence",
      "Prioritize contractor, vendor and obligation exceptions for review",
      "Detect anomalies against configured business expectations",
      "Suggest reconciliation matches for a human to confirm",
      "Summarize a decision basis with its sources cited",
      "Draft a change-impact summary for a named reviewer",
    ],
  },
  {
    title: "AI MAY NOT",
    titleColor: "text-[#8A3B3B]",
    borderColor: "border-[#DFA9A9]",
    bgColor: "bg-[#FDF6F6]",
    items: [
      "Send any instruction to grid, plant, pipeline or field infrastructure",
      "Influence dispatch, restoration, protection or safety systems",
      "Approve, authorize or execute any business action",
      "Alter authoritative source truth in any connected system",
      "Determine regulatory compliance, reliability or safety outcomes",
      "Substitute for legal, tax, accounting, audit, safety or engineering judgment",
    ],
  },
];

export default function GovernedAiSection() {
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
                GOVERNED AI AND ADOPTION
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight leading-[1.15]">
              Bounded assistance, phased coexistence
            </h2>
          </div>

          {/* Right Subtitle Area */}
          <div className="lg:col-span-5 flex items-start">
            <p className="text-gray-300 text-sm lg:text-base leading-relaxed">
              In critical infrastructure the AI boundary must be unambiguous
              about anything touching operations or safety.
            </p>
          </div>
        </div>

        {/* Two Columns Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {AI_RULES.map((column, index) => {
            const isMayNot = column.title === "AI MAY NOT";

            return (
              <div
                key={index}
                className={`rounded-2xl p-6 lg:p-8 border ${column.bgColor} ${column.borderColor} shadow-lg`}
                style={{
                  borderLeft: isMayNot
                    ? "3px solid #8A3B3B"
                    : "3px solid #1E7A5A",
                }}
              >
                <h3
                  className={`text-xs font-mono font-bold tracking-widest uppercase mb-6 ${column.titleColor}`}
                >
                  {column.title}
                </h3>
                <ul className="flex flex-col gap-4">
                  {column.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-3">
                      <span
                        className={`w-1.5 h-1.5 rounded-full mt-2 shrink-0 ${
                          isMayNot ? "bg-[#8A3B3B]" : "bg-[#1E7A5A]"
                        }`}
                      ></span>
                      <span
                        className={`text-xs lg:text-sm leading-relaxed ${
                          isMayNot ? "text-[#8A3B3B]" : "text-[#08222F]"
                        }`}
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
