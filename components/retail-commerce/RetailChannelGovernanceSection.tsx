"use client";

import React from "react";

const channels = [
  {
    title: "Physical stores",
    badge: "COVERED",
    badgeColor: "text-emerald-700 bg-emerald-50 border-emerald-300",
    entity: "Retail UK Ltd. • 7 stores",
    jurisdiction: "United Kingdom",
    authority: "store delegation v3",
    obligations: "lease, workforce, consumer",
    footerText: "PERSONAL DATA",
    footerStyle: "bg-[#F3EAD3] text-[#8C6D24] border-[#D9C496]",
  },
  {
    title: "E-commerce",
    badge: "COVERAGE LIMITED",
    badgeColor: "text-blue-700 bg-blue-50 border-blue-300",
    entity: "Retail UK Ltd. • Brand A",
    jurisdiction: "UK + EU shipping",
    authority: "digital delegation v2",
    obligations: "consumer, privacy, payment scope",
    footerText: "PAYMENT-IMPACTING",
    footerStyle: "bg-red-50 text-red-700 border-red-200",
  },
  {
    title: "Marketplace",
    badge: "REVIEW REQUIRED",
    badgeColor: "text-amber-700 bg-amber-50 border-amber-300",
    entity: "Retail Brands GmbH",
    jurisdiction: "Germany + EU",
    authority: "terms changed – review open",
    obligations: "platform seller terms",
    footerText: "INTERNAL",
    footerStyle: "bg-white text-gray-500 border-gray-200",
  },
  {
    title: "Wholesale / B2B",
    badge: "SOURCE STALE",
    badgeColor: "text-gray-600 bg-gray-100 border-gray-300",
    entity: "Retail Brands GmbH",
    jurisdiction: "Multi",
    authority: "mandate under review",
    obligations: "trading terms, credit",
    footerText: "RESTRICTED",
    footerStyle: "bg-blue-50/50 text-blue-800 border-blue-200",
  },
];

export default function RetailChannelGovernanceSection() {
  return (
    <section className="w-full bg-[#08222F] text-white py-20 px-6 lg:px-12 font-sans">
      <div className="max-w-7xl mx-auto">
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
                ENTITY, STORE, CHANNEL AND JURISDICTION
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight leading-[1.1]">
              A channel is a governance context, not just a route to market
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-[14px] lg:text-[15px] text-gray-300 leading-relaxed">
              Each channel carries its own jurisdiction, authority scheme,
              obligation set and data classification.
            </p>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {channels.map((item, index) => (
            <div
              key={index}
              className="bg-white text-[#08222F] rounded-xl p-5 shadow-lg flex flex-col justify-between border border-gray-200"
            >
              <div>
                {/* Card Top: Title & Badge */}
                <div className="flex items-start justify-between gap-2 mb-4">
                  <h3 className="text-[15px] font-bold text-[#08222F]">
                    {item.title}
                  </h3>
                  <span
                    className={`text-[10px] font-mono font-semibold px-2 py-0.5 rounded border ${item.badgeColor}`}
                  >
                    {item.badge}
                  </span>
                </div>

                {/* Details List */}
                <div className="space-y-1.5 text-[12px] font-mono text-gray-600 mb-6">
                  <p>
                    <span className="text-gray-400">Entity:</span> {item.entity}
                  </p>
                  <p>
                    <span className="text-gray-400">Jurisdiction:</span>{" "}
                    {item.jurisdiction}
                  </p>
                  <p>
                    <span className="text-gray-400">Authority:</span>{" "}
                    {item.authority}
                  </p>
                  <p>
                    <span className="text-gray-400">Obligations:</span>{" "}
                    {item.obligations}
                  </p>
                </div>
              </div>

              {/* Footer Tag Box */}
              <div
                className={`w-full py-2 px-3 rounded-lg border text-[11px] font-mono font-semibold text-center tracking-wider ${item.footerStyle}`}
              >
                {item.footerText}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
