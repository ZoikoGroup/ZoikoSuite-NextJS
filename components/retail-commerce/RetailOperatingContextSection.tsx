"use client";

import React from "react";

const complexities = [
  {
    title: "Multi-brand, multi-entity",
    description:
      "Govern entities, brands, delegated authority, obligations and reporting context across a shared operating platform.",
    tag: "ENTITY / BRAND TREE",
  },
  {
    title: "Store and channel estate",
    description:
      "Store, digital, marketplace and wholesale channels each carry their own jurisdiction, authority and obligation set.",
    tag: "CHANNEL TOPOLOGY",
  },
  {
    title: "Supplier ecosystems",
    description:
      "Keep suppliers, contracts, diligence, obligations, renewals and data or payment dependencies visible.",
    tag: "SUPPLIER CARDS",
  },
  {
    title: "Distributed workforce",
    description:
      "Connect store, distribution and corporate workforce context across locations, entities and jurisdictions.",
    tag: "WORKFORCE TILES",
  },
  {
    title: "Payments and consumer data",
    description:
      "Track scope, applicability, evidence and review ownership without asserting blanket compliance.",
    tag: "APPLICABILITY REGISTERS",
  },
  {
    title: "System coexistence",
    description:
      "Map POS, e-commerce, OMS, WMS, ERP, payment and marketplace systems without forcing replacement.",
    tag: "INTEGRATION HEALTH",
  },
];

export default function RetailOperatingContextSection() {
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
              Each pairs a recognizable retail operating condition with the
              business response ZoikoSuite provides.
            </p>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {complexities.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-5 border border-[#2A6386] border-t-[4px] border-t-[#2A6386] shadow-sm flex flex-col justify-between"
            >
              <div>
                <h3 className="text-[14px] font-bold text-[#08222F] mb-1.5">
                  {item.title}
                </h3>
                <p className="text-[12px] text-gray-600 leading-relaxed line-clamp-3">
                  {item.description}
                </p>
              </div>

              <div className="pt-3 border-t border-dashed border-gray-200">
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
