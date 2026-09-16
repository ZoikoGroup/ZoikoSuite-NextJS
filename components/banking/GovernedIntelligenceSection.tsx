"use client";

import React from "react";

export default function GovernedIntelligenceSection() {
  const aiMayItems = [
    "Prioritize operational exceptions for human review",
    "Detect anomalies against configured operating expectations",
    "Forecast operational exposure, labelled as a projection",
    "Suggest reconciliation matches for a human to confirm",
    "Summarize a decision basis with sources cited",
    "Flag an obligation or control that appears to need attention",
  ];

  const aiMayNotItems = [
    "Approve, authorize or execute any operating action",
    "Alter authoritative source truth in any system",
    "Perform or influence AML, sanctions, fraud or credit decisions",
    "Determine accounting treatment, tax position or capital treatment",
    "Mark an obligation, control or close dependency as satisfied",
    "Substitute for legal, tax, accounting, audit or regulatory judgment",
  ];

  return (
    <section className="w-full bg-[#08222F] text-white py-20 px-6 lg:px-12 flex justify-center items-center font-sans">
      <div className="max-w-6xl w-full flex flex-col">
        {/* Top Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-end">
          {/* Left Title Area */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Eyebrow Tag */}
            <div className="flex items-center gap-2 mb-4">
              <span className="w-4 h-[1px] bg-[#C59B3F]"></span>
              <span
                className="text-xs font-semibold tracking-widest uppercase font-mono"
                style={{ color: "#C59B3F" }}
              >
                GOVERNED INTELLIGENCE FOR BANKING OPERATIONS
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[52px] font-bold tracking-tight leading-[1.15]">
              Bounded, and stated as two lists
            </h2>
          </div>

          {/* Right Subtitle Area */}
          <div className="lg:col-span-5 flex items-end lg:justify-end">
            <p className="text-gray-300 text-base lg:text-lg leading-relaxed max-w-md">
              In a banking context the boundary matters more than the
              capability. Both lists are published rather than summarized as a
              reassurance.
            </p>
          </div>
        </div>

        {/* Two Columns Grid for AI May / AI May Not */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Box: AI May */}
          <div
            className="bg-[#F7FCFA] rounded-2xl p-8 flex flex-col shadow-sm"
            style={{
              border: "1px solid #DBE3E8",
              borderLeft: "3px solid #1E7A5A",
            }}
          >
            <h3
              className="font-mono font-bold text-xs tracking-widest uppercase mb-6"
              style={{ color: "#1E7A5A" }}
            >
              AI MAY
            </h3>
            <ul className="flex flex-col gap-3.5">
              {aiMayItems.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span
                    className="w-1.5 h-1.5 rounded-full mt-2 shrink-0"
                    style={{ backgroundColor: "#1E7A5A" }}
                  />
                  <span
                    className="text-sm leading-relaxed"
                    style={{ color: "#16262F" }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Box: AI May Not */}
          <div
            className="bg-[#FCF6F6] rounded-2xl p-8 flex flex-col shadow-sm"
            style={{
              border: "1px solid #DBE3E8",
              borderLeft: "3px solid #8A3B3B",
            }}
          >
            <h3
              className="font-mono font-bold text-xs tracking-widest uppercase mb-6"
              style={{ color: "#8A3B3B" }}
            >
              AI MAY NOT
            </h3>
            <ul className="flex flex-col gap-3.5">
              {aiMayNotItems.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span
                    className="w-1.5 h-1.5 rounded-full mt-2 shrink-0"
                    style={{ backgroundColor: "#8A3B3B" }}
                  />
                  <span
                    className="text-sm leading-relaxed"
                    style={{ color: "#8A3B3B" }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
