"use client";

import React from "react";

const problems = [
  {
    number: "01",
    title: "Market autonomy versus group control",
    description:
      "Each market develops local approval practice, local partner terms and local exceptions that never surface at group level.",
    footer: "Inconsistent control across the footprint.",
  },
  {
    number: "02",
    title: "Partner obligations run both ways",
    description:
      "Host operator, roaming and reseller agreements impose duties on you and on them, tracked in different places.",
    footer: "Missed commitments and disputed entitlements.",
  },
  {
    number: "03",
    title: "Licence conditions detach from operations",
    description:
      "Market licences carry reporting and conduct obligations held separately from the teams who satisfy them.",
    footer: "Late escalation and weak regulatory evidence.",
  },
  {
    number: "04",
    title: "Customer-data handling is assumed",
    description:
      "Whether a workflow touches protected customer information is decided informally rather than classified before action.",
    footer: "Unevidenced access and purpose decisions.",
  },
  {
    number: "05",
    title: "System sprawl across OSS, BSS and enterprise",
    description:
      "Each specialist system is authoritative for its own domain, and no layer holds the cross-domain business decision.",
    footer: "Reconciliation overhead and lineage gaps.",
  },
];

export default function TelecomBusinessLayerProblemSection() {
  return (
    <section className="w-full bg-[#F7F5F0] text-[#08222F] py-20 px-6 lg:px-12 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-end">
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Eyebrow Tag */}
            <div className="flex items-center gap-2 mb-3">
              <span
                className="w-4 h-[1px]"
                style={{ backgroundColor: "#C59B3F" }}
              ></span>
              <span
                className="text-[12px] font-semibold tracking-widest uppercase font-mono"
                style={{ color: "#C59B3F" }}
              >
                THE BUSINESS-LAYER PROBLEM
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] max-w-160 font-bold tracking-tight leading-[1.1]">
              The network is instrumented. The commercial operation around it is
              not.
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-[13px] lg:text-[14px] text-gray-600 leading-relaxed">
              Five operating conditions with the executive exposure each
              creates. No invented percentages, churn figures, ARPU claims or
              savings estimates.
            </p>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {problems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-5 border border-[#8A3B3B] border-t-[3px] border-t-[#8A3B3B] shadow-sm flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] font-mono font-bold text-[#8C4A4A] mb-3 block">
                  {item.number}
                </span>
                <h3 className="text-[14px] font-bold text-[#08222F] mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-[12px] text-gray-600 leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              <div className="border-t border-dashed border-gray-200 pt-3">
                <p className="text-[12px] text-gray-700 font-medium leading-relaxed">
                  {item.footer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
