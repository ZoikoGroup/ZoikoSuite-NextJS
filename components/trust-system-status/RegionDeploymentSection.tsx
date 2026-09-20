"use client";

import React from "react";

const regionCards = [
  {
    label: "Multi-tenant SaaS",
    lines: [
      "Fully represented on this page where telemetry",
      "coverage is complete.",
    ],
  },
  {
    label: "Dedicated environment",
    lines: [
      "Shared dependencies shown here;",
      "environment-specific status may differ.",
    ],
  },
  {
    label: "Sovereign / customer-controlled",
    lines: [
      "Only Zoiko-managed shared dependencies appear",
      "publicly.",
    ],
  },
];

export default function RegionDeploymentSection() {
  return (
    <section className="w-full bg-[#F7F5F0] py-24 px-6 md:px-14 flex justify-center">
      <div className="w-full max-w-[1320px] px-0 md:px-12 flex flex-col justify-start items-start gap-12">
        {/* Header */}
        <div className="self-stretch flex flex-col md:flex-row md:items-start md:justify-between gap-4">
          <div className="flex flex-col gap-3.5">
            <div className="pb-[0.59px] flex flex-col justify-start items-start">
              <span className="text-[#D4943A] text-xs font-normal font-['JetBrains_Mono'] leading-4 tracking-wider">
                04 / SCOPE
              </span>
            </div>
            <div className="pt-[0.70px] flex flex-col justify-start items-start">
              <h2 className="text-[#0D2636] text-3xl md:text-4xl font-semibold font-['Archivo'] leading-10">
                Region &amp; deployment status
              </h2>
            </div>
          </div>
          <div className="max-w-[633.16px] md:text-right flex flex-col justify-start md:items-end items-start">
            <p className="text-[#3E5A6B] text-base md:text-lg font-normal font-['Archivo'] leading-7 md:text-right text-left">
              Availability is qualified by deployment and jurisdiction — never presented
              <br />
              as a blanket claim.
            </p>
          </div>
        </div>

        {/* Cards Row */}
        <div className="self-stretch grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
          {regionCards.map((card, idx) => (
            <div
              key={idx}
              className="w-full px-7 py-7 bg-white rounded-2xl border border-[#D6DEE3] inline-flex flex-col justify-start items-start gap-2.5 h-32"
            >
              <div className="self-stretch pb-[0.59px] flex flex-col justify-start items-start">
                <span className="self-stretch text-[#3E5A6B] text-xs font-normal font-['JetBrains_Mono'] uppercase leading-4 tracking-wide">
                  {card.label}
                </span>
              </div>
              <div className="self-stretch flex flex-col justify-start items-start">
                <p className="self-stretch text-[#0D2636] text-sm font-normal font-['Archivo'] leading-6">
                  {card.lines.map((line, lineIdx) => (
                    <React.Fragment key={lineIdx}>
                      {line}
                      {lineIdx < card.lines.length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}