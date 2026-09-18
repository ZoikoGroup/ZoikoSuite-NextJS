"use client";

import React from "react";

const models = [
  {
    title: "Multi-brand group",
    description:
      "Several brands under shared services. Brand-level authority must coexist with a group baseline.",
    tag: "ENTITY AND BRAND SCOPE",
  },
  {
    title: "Multi-store estate",
    description:
      "Large physical footprint. Lease obligations, local workforce rules and store-level spend dominate.",
    tag: "STORE AND LEASE GOVERNANCE",
  },
  {
    title: "Franchise operations",
    description:
      "Franchisee agreements define obligations both ways. Authority sits partly outside the organization.",
    tag: "THIRD-PARTY OBLIGATION OWNERSHIP",
  },
  {
    title: "Marketplace seller",
    description:
      "Platform terms, seller obligations and commission structures change outside your control.",
    tag: "CONTRACT CHANGE GOVERNANCE",
  },
  {
    title: "Direct-to-consumer",
    description:
      "Owned digital channel. Consumer-data and payment-scope questions carry heavier weight.",
    tag: "PRIVACY AND PAYMENT APPLICABILITY",
  },
  {
    title: "B2B / wholesale",
    description:
      "Trading terms, customer contracts and credit arrangements drive the commercial approval path.",
    tag: "COMMERCIAL APPROVAL AND SOD",
  },
];

export default function RetailOperatingModelsSection() {
  return (
    <section className="w-full bg-white text-[#08222F] py-20 px-6 lg:px-12 font-sans">
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
                RETAIL AND COMMERCE OPERATING MODELS
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight leading-[1.1]">
              Six models, one governance model
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-[13px] lg:text-[14px] text-gray-600 leading-relaxed">
              What changes between them is authority distribution and obligation
              ownership, not the control model.
            </p>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {models.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-5 border border-[#2A6386] border-l-[4px] border-l-[#2A6386] shadow-sm flex flex-col justify-between"
            >
              <div>
                <h3 className="text-[14px] font-bold text-[#08222F] mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-[12px] text-gray-600 leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              <div className="border-t border-dashed border-gray-200 pt-3">
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
