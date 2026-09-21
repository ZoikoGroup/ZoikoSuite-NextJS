"use client";

import React from "react";

const facilities = [
  {
    title: "Hospital 01",
    badge: "COVERED",
    badgeColor: "text-[#1E7A5A] border-[#1E7A5A] bg-[#EAF5F0]",
    entity: "Regional Health Inc.",
    jurisdiction: "United States • state A",
    authority: "delegation matrix v5",
    workforce: "employed + contracted",
    residency: "by deployment",
    residencyHighlight: "text-[#C59B3F]",
  },
  {
    title: "Hospital 02",
    badge: "COVERAGE LIMITED",
    badgeColor: "text-[#2F6FB0] border-[#2F6FB0] bg-[#EAF1F9]",
    entity: "Regional Health Inc.",
    jurisdiction: "United States • state B",
    authority: "delegation matrix v5",
    workforce: "employed + agency",
    residency: "by deployment",
    residencyHighlight: "text-[#C59B3F]",
  },
  {
    title: "Clinic Group • Site 04",
    badge: "REVIEW REQUIRED",
    badgeColor: "text-[#9C6B12] border-[#9C6B12] bg-[#FBF2DF]",
    entity: "Clinic Group LLC",
    jurisdiction: "United States • state B",
    authority: "local mandate under review",
    authorityHighlight: "text-[#8A3B3B] font-semibold",
    workforce: "contracted",
    residency: "by deployment",
    residencyHighlight: "text-[#C59B3F]",
  },
  {
    title: "Research unit",
    badge: "RESTRICTED SCOPE",
    badgeColor: "text-[#5D6B75] border-[#5D6B75] bg-[#EFF2F4]",
    entity: "Regional Health Inc.",
    jurisdiction: "United States • state A",
    authority: "restricted delegation",
    workforce: "academic + employed",
    residency: "requires validation",
    residencyHighlight: "text-[#8A3B3B]",
  },
];

export default function FacilityContextGovernanceSection() {
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
                ENTITY, FACILITY, JURISDICTION, WORKFORCE AND RESIDENCY
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight leading-[1.15]">
              Facility context resolves before authority
            </h2>
          </div>

          {/* Right Subtitle Area */}
          <div className="lg:col-span-5 flex items-start w-full">
            <p className="text-gray-300 text-sm lg:text-base leading-relaxed w-full">
              A facility carries its own jurisdiction, authority scheme,
              obligation set and residency position. Coverage is stated per
              workflow, never as a blanket claim.
            </p>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {facilities.map((item, index) => (
            <div
              key={index}
              className="bg-white text-[#08222F] rounded-xl p-5 shadow-lg flex flex-col justify-between border border-gray-200"
            >
              <div>
                <div className="flex items-center flex-wrap gap-2 justify-between mb-4">
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
                    <span className="text-gray-400">Entity:</span> {item.entity}
                  </div>
                  <div>
                    <span className="text-gray-400">Jurisdiction:</span>{" "}
                    {item.jurisdiction}
                  </div>
                  <div>
                    <span className="text-gray-400">Authority:</span>{" "}
                    <span
                      className={
                        item.authorityHighlight ? item.authorityHighlight : ""
                      }
                    >
                      {item.authority}
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-400">Workforce:</span>{" "}
                    {item.workforce}
                  </div>
                  <div>
                    <span className="text-gray-400">Residency:</span>{" "}
                    <span className={item.residencyHighlight}>
                      {item.residency}
                    </span>
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
