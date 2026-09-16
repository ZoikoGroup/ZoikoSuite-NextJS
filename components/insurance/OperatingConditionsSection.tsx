"use client";

import React from "react";

interface OperatingCondition {
  number: string;
  title: string;
  description: string;
  exposure: string;
}

const OPERATING_CONDITIONS: OperatingCondition[] = [
  {
    number: "01",
    title: "Core and corporate systems disagree",
    description:
      "Policy, claims, billing, CRM and data systems operate separately from finance, syndication, legal, vendor and compliance workflows.",
    exposure:
      "Reconciliation work, source-of-record drift, siloed decisions, inconsistent evidence.",
  },
  {
    number: "02",
    title: "Obligations sit outside the action path",
    description:
      "Regulatory, contractual, statutory and tax rules are tracked separately from the work they govern.",
    exposure:
      "Late discovery, missed follow-up, weak auditability, workflow gaps.",
  },
  {
    number: "03",
    title: "Authority is fragmented",
    description:
      "Delegated authority, signing limits, user roles and segregation of duties are country, business unit and process-specific.",
    exposure:
      "Unauthorized activities, unrecorded actions and difficult accountability.",
  },
  {
    number: "04",
    title: "Third-party obligations are distributed",
    description:
      "Contracts, service-level agreements, binders and reinsurers share operational context, settlement and data exchange, creating exposure across teams and tools.",
    exposure:
      "Renewal gaps, vendor risk, cross-risk execution, audit challenges.",
  },
  {
    number: "05",
    title: "Evidence is assembled after the fact",
    description:
      "Record sets, documents, rule bases, workflow histories and source data sets must be retrofitted for review.",
    exposure: "Slow fragile assurance, significant audit effort.",
  },
  {
    number: "06",
    title: "Jurisdiction and entity context changes the rule",
    description:
      "Requirements vary by geography, taxation, operating model, effective date and workflow.",
    exposure:
      "Siloed rules become costly exceptions and local variations difficult to govern.",
  },
];

export default function OperatingConditionsSection() {
  return (
    <section className="w-full bg-white text-[#0F172A] py-20 px-6 lg:px-12 flex justify-center items-center font-sans">
      <div className="max-w-6xl w-full flex flex-col">
        {/* Top Header Grid / Flex */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-start">
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
                THE OPERATING FRONTIER
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight leading-[1.15]">
              The core may be sound. The operations around it disagree.
            </h2>
          </div>

          {/* Right Subtitle Area */}
          <div className="lg:col-span-5 lg:pt-10 flex items-start">
            <p className="text-gray-600 text-sm lg:text-base leading-relaxed">
              Six operating conditions, each with the executive exposure it
              creates. No fabricated percentages, loss ratios, cycle-time claims
              or regulatory statistics.
            </p>
          </div>
        </div>

        {/* Bottom Cards Grid (4 on top, 2 spanning on bottom) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {OPERATING_CONDITIONS.map((item, index) => {
            return (
              <div
                key={item.number}
                className={`bg-white rounded-xl p-5 flex flex-col shadow-sm`}
                style={{
                  border: "1px solid #C4A482",
                  borderTop: "3px solid #8A3B3B",
                }}
              >
                <div>
                  <span className="text-xs font-semibold text-[#8A3B3B] block mb-3 font-mono">
                    {item.number}
                  </span>
                  <h3 className="text-sm font-bold text-[#0F172A] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="mt-4 pt-4 border-t border-dashed border-gray-200">
                  <p className="text-xs font-medium text-[#16262F] leading-relaxed">
                    {item.exposure}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
