"use client";

import React from "react";

const markets = [
  {
    title: "OpCo UK",
    badge: "COVERED",
    badgeColor: "text-[#1E7A5A] border-[#1E7A5A] bg-[#EAF5F0]",
    model: "full MNO",
    jurisdiction: "United Kingdom",
    authority: "board delegation v5",
    licenceConditions: "4 tracked",
    obligations: "reporting, conduct, vendor",
  },
  {
    title: "OpCo DE",
    badge: "COVERAGE LIMITED",
    badgeColor: "text-[#2F6FB0] border-[#2F6FB0] bg-[#EAF1F9]",
    model: "full MNO",
    jurisdiction: "Germany",
    authority: "local mandate v2",
    licenceConditions: "3 tracked",
    obligations: "reporting, wholesale",
  },
  {
    title: "MVNO US",
    badge: "REVIEW REQUIRED",
    badgeColor: "text-[#9C6B12] border-[#9C6B12] bg-[#FBF2DF]",
    model: "MVNO on host",
    jurisdiction: "United States",
    authority: "classification policy under review",
    authorityHighlight: true,
    licenceConditions: "n/a",
    obligations: "customer-data, host agreement",
  },
  {
    title: "OpCo SG",
    badge: "SOURCE STALE",
    badgeColor: "text-[#5D6B75] border-[#5D6B75] bg-[#EFF2F4]",
    model: "MVNE",
    jurisdiction: "Singapore",
    authority: "mandate review overdue",
    licenceConditions: "2 tracked",
    obligations: "downstream brand duties",
  },
];

export default function MarketGovernanceSection() {
  return (
    <section className="w-full bg-[#08222F] text-white py-20 px-6 lg:px-12 flex justify-center items-center font-sans">
      <div className="max-w-6xl w-full flex flex-col">
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 items-end">
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
                ENTITY, MARKET, LICENCE AND JURISDICTION GOVERNANCE
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight leading-[1.15]">
              A market carries its own licence and authority
            </h2>
          </div>

          {/* Right Subtitle Area */}
          <div className="lg:col-span-5 flex items-start w-full">
            <p className="text-gray-300 text-sm lg:text-base leading-relaxed w-full">
              Licence conditions are governance context, not a licence register
              of record. The regulator&apos;s own record remains authoritative.
            </p>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {markets.map((item, index) => (
            <div
              key={index}
              className="bg-white text-[#08222F] rounded-xl p-5 shadow-lg flex flex-col justify-between border border-gray-200"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-base font-bold text-[#08222F]">
                    {item.title}
                  </h3>
                  <span
                    className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded border ${item.badgeColor}`}
                  >
                    {item.badge}
                  </span>
                </div>

                <div className="flex flex-col gap-2 text-xs text-gray-700 font-mono">
                  <div>
                    <span className="text-gray-400">Model:</span> {item.model}
                    
                  </div>
                  <div>
                    <span className="text-gray-400">Jurisdiction:</span>{" "}
                    {item.jurisdiction}
                  </div>
                  <div>
                    <span className="text-gray-400">Authority:</span>{" "}
                    <span
                      className={
                        item.authorityHighlight
                          ? "text-[#8A3B3B] font-semibold"
                          : ""
                      }
                    >
                      {item.authority}
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-400">Licence conditions:</span>{" "}
                    {item.licenceConditions}
                  </div>
                  <div>
                    <span className="text-gray-400">Obligations:</span>{" "}
                    {item.obligations}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
