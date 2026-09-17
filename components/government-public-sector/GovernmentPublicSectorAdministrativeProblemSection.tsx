"use client";

import React from "react";

const problems = [
  {
    number: "01",
    title: "Authority varies by agency and fund",
    description:
      "Delegation limits differ by entity, program and appropriation, and are held in policy documents rather than in the approval path.",
    footer: "Commitments made outside delegated authority.",
  },
  {
    number: "02",
    title: "Fund context detaches from the decision",
    description:
      "Which program or appropriation a commitment draws on is reconstructed afterwards rather than resolved at approval.",
    footer: "Difficult stewardship justification at audit.",
  },
  {
    number: "03",
    title: "Procurement obligations go unowned",
    description:
      "Vendor diligence, contract options, renewals and performance obligations span procurement, legal and program teams.",
    footer: "Lapsed obligations and challenged awards.",
  },
  {
    number: "04",
    title: "Records and retention drift",
    description:
      "Retention schedules and administrative policy obligations lose named ownership as staff change roles.",
    footer: "Transparency and records-request exposure.",
  },
  {
    number: "05",
    title: "System sprawl across administration",
    description:
      "Financial management, procurement, grants, HR and records systems are each authoritative for their own domain.",
    footer: "No layer holds the cross-domain administrative decision.",
  },
];

export default function GovernmentPublicSectorAdministrativeProblemSection() {
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
                THE ADMINISTRATIVE PROBLEM
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] max-w-160 font-bold tracking-tight leading-[1.1]">
              Mission delivery is scrutinized. The administration behind it is
              fragmented.
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-[13px] lg:text-[14px] text-gray-600 leading-relaxed">
              Five operating conditions with the accountability exposure each
              creates. No invented percentages, savings figures or agency
              statistics.
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
