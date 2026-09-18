"use client";

import React from "react";

const channels = [
  {
    title: "Agency A",
    badge: "COVERED",
    badgeColor: "text-emerald-700 bg-emerald-50 border-emerald-300",
    entity: "Type: executive agency",
    jurisdiction: "Jurisdiction: national",
    authority: "Authority: statutory delegation v6",
    obligations: "Programs: 4 • Funds: 3",
    footerText: "Obligations: procurement, workforce, records",
    footerStyle: "bg-white text-gray-600 border-gray-200",
  },
  {
    title: "Agency B",
    badge: "COVERAGE LIMITED",
    badgeColor: "text-blue-700 bg-blue-50 border-blue-300",
    entity: "Type: grant-making body",
    jurisdiction: "Jurisdiction: national",
    authority: "Authority: board delegation v2",
    obligations: "Programs: 3 • Funds: 2",
    footerText: "Obligations: grant reporting, records",
    footerStyle: "bg-white text-gray-600 border-gray-200",
  },
  {
    title: "Authority C",
    badge: "REVIEW REQUIRED",
    badgeColor: "text-amber-700 bg-amber-50 border-amber-300",
    entity: "Type: arms-length body",
    jurisdiction: "Jurisdiction: regional",
    authority: "Authority: dual line – under review",
    obligations: "Programs: 2 • Funds: 2",
    footerText: "Obligations: records, transparency",
    footerStyle: "bg-white text-gray-600 border-gray-200",
  },
  {
    title: "Municipality D",
    badge: "SOURCE STALE",
    badgeColor: "text-gray-600 bg-gray-100 border-gray-300",
    entity: "Type: local government",
    jurisdiction: "Jurisdiction: municipal",
    authority: "Authority: council delegation – review overdue",
    obligations: "Programs: 0 • Funds: 2",
    footerText: "Obligations: procurement, workforce",
    footerStyle: "bg-white text-gray-600 border-gray-200",
  },
];

export default function GovernmentPublicSectorFundContextGovernanceSection() {
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
                AGENCY, ENTITY, FUND AND JURISDICTION GOVERNANCE
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight leading-[1.1]">
              Fund context resolves with the decision, not after it
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-[14px] lg:text-[15px] text-gray-300 leading-relaxed">
              Each agency carries its own authority source, program and fund
              scope, obligation set and residency position.
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
                  <p>{item.entity}</p>
                  <p>{item.jurisdiction}</p>
                  <p className={index === 2 ? "text-red-800 font-medium" : ""}>
                    {item.authority}
                  </p>
                  <p>{item.obligations}</p>
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
