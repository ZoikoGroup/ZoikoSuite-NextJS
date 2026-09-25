import React from "react";

const rows = [
  {
    relationship: "Referral",
    lines: [
      "Described only after program terms exist; never implies resale or",
      "service",
      "delivery.",
    ],
    route: "Channel inquiry",
  },
  {
    relationship: "Reseller",
    lines: [
      "Published only where resale rights, region, product scope, and",
      "support",
      "ownership are contractually approved.",
    ],
    route: "Commercial review",
  },
  {
    relationship: "Co-sell",
    lines: [
      "Joint opportunity handling stated only where a program exists.",
    ],
    route: "Partner sales",
  },
  {
    relationship: "Strategic alliance",
    lines: [
      "Narrative profile with objective, scope, governance, and public",
      "evidence.",
    ],
    route: "Strategic partnerships",
  },
  {
    relationship: "Infrastructure / platform alliance",
    lines: [
      "Technical dependency, hosting/connectivity/security role, and",
      "status.",
    ],
    route: "Technology partnerships",
  },
];

export default function ChannelStrategicRelationshipsSection() {
  return (
    <section className="w-full bg-[#EFE8D8] py-16 lg:py-20 px-6 md:px-12 lg:px-20 font-sans border-b border-[#DCD6C8]/40">
      <div className="max-w-6xl mx-auto flex flex-col items-start">
        <span className="text-[#A8843A] text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-3 block">
          CHANNEL &amp; STRATEGIC RELATIONSHIPS
        </span>

        <h2 className="text-3xl md:text-[32px] font-serif font-bold text-[#16223A] leading-tight tracking-tight max-w-3xl">
          Commercial and institutional collaboration, precisely labeled
        </h2>

        <div className="w-full mt-10 border-t border-[#DCD6C8]">
          {/* Header row */}
          <div className="flex flex-col md:flex-row gap-2 md:gap-6 border-b border-[#DCD6C8] pt-4 pb-2.5">
            <div className="w-48 shrink-0">
              <span className="text-[#4B5872] text-sm font-bold uppercase leading-5 tracking-wide">
                Relationship
              </span>
            </div>
            <div className="flex-1">
              <span className="text-[#4B5872] text-sm font-bold uppercase leading-5 tracking-wide">
                Public treatment
              </span>
            </div>
            <div className="flex-1">
              <span className="text-[#4B5872] text-sm font-bold uppercase leading-5 tracking-wide">
                Application route
              </span>
            </div>
          </div>

          {rows.map((row) => (
            <div
              key={row.relationship}
              className="flex flex-col md:flex-row gap-2 md:gap-6 border-b border-[#DCD6C8] py-4"
            >
              <div className="w-48 shrink-0">
                <span className="text-[#16223A] text-sm font-bold leading-5 block">
                  {row.relationship}
                </span>
              </div>
              <div className="flex-1">
                <p className="text-[#16223A] text-sm font-normal leading-5">
                  {row.lines.map((line, idx) => (
                    <span key={idx} className="block whitespace-normal lg:whitespace-nowrap">
                      {line}
                    </span>
                  ))}
                </p>
              </div>
              <div className="flex-1">
                <span className="text-[#16223A] text-sm font-normal leading-5 block">
                  {row.route}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
