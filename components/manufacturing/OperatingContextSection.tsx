"use client";

import React from "react";

const complexities = [
  {
    title: "Multi-plant operations",
    description:
      "Govern entities, plants, sites, delegated authority, obligations and reporting context across a distributed footprint.",
    tag: "ENTITY / SITE TREE",
  },
  {
    title: "Supplier ecosystems",
    description:
      "Keep critical suppliers, contracts, diligence, obligations, renewals and dependency exceptions visible.",
    tag: "SUPPLIER CARDS",
  },
  {
    title: "Quality & regulatory obligations",
    description:
      "Track required reviews, filings, evidence, ownership, source and status — without blanket compliance claims.",
    tag: "OBLIGATION QUEUE",
  },
  {
    title: "Finance & workforce",
    description:
      "Connect plant-related finance, payroll, employment, commercial and approval workflows across entities.",
    tag: "FINANCE / WORKFORCE TILES",
  },
  {
    title: "Evidence by default",
    description:
      "Preserve approvals, decisions, documents, events and rationale as governed work happens.",
    tag: "EVIDENCE MANIFEST",
  },
  {
    title: "System coexistence",
    description:
      "Map ERP, MES, PLM, QMS, WMS, EAM and enterprise systems without forcing replacement.",
    tag: "INTEGRATION HEALTH",
  },
];

export default function OperatingContextSection() {
  return (
    <section className="w-full bg-[#F7F5F0] text-[#08222F] py-16 px-6 lg:px-12 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12 items-end">
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
                OPERATING CONTEXT
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-tight leading-[1.1]">
              Six complexities, six governed responses
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-[13px] text-gray-600 leading-relaxed">
              Each pairs a recognizable manufacturing operating condition with
              the business response ZoikoSuite provides.
            </p>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {complexities.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-4 border border-[#2A6386] border-t-[4px] border-t-[#2A6386] shadow-sm flex flex-col justify-between"
            >
              <div>
                <h3 className="text-[14px] font-bold text-[#08222F] mb-2">
                  {item.title}
                </h3>
                <p className="text-[12px] text-gray-600 leading-relaxed mb-2">
                  {item.description}
                </p>
              </div>

              <div className="border-t border-dashed border-gray-200">
                <span className="text-[11px] font-mono tracking-wider font-semibold text-[#C59B3F]">
                  {item.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
