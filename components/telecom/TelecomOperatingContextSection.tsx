"use client";

import React from "react";

const complexities = [
  {
    title: "Multi-market operations",
    description:
      "Govern entities, markets, licences, delegated authority and obligations across a distributed footprint.",
    tag: "ENTITY / MARKET TREE",
  },
  {
    title: "Partner and wholesale relationships",
    description:
      "Host operator, roaming, interconnect and reseller agreements with obligations running both ways.",
    tag: "AGREEMENT REGISTER",
  },
  {
    title: "Vendor dependency",
    description:
      "Network, IT, platform and service vendors with diligence, renewal and access obligations.",
    tag: "VENDOR REGISTER",
  },
  {
    title: "Customer-data obligations",
    description:
      "Classification, purpose, access control and evidence around protected customer information.",
    tag: "CLASSIFICATION BANNER",
  },
  {
    title: "Commercial commitments",
    description:
      "Device subsidies, channel incentives, promotional spend and wholesale pricing under delegated authority.",
    tag: "APPROVAL QUEUE",
  },
  {
    title: "System coexistence",
    description:
      "Map OSS, BSS, charging, CRM and network systems without forcing replacement.",
    tag: "INTEGRATION HEALTH",
  },
];

export default function TelecomOperatingContextSection() {
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
              Each pairs a recognizable telecom operating condition with the
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

              <div className="pt-3 border-t border-dashed border-gray-200 mt-4">
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
