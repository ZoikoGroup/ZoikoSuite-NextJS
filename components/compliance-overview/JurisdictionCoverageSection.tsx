import React from "react";

interface JurisdictionCard {
  country: string;
  status: string;
  statusType: "available" | "limited" | "partner" | "needs-review";
  workflow: string;
  provenance: string;
  reviewed: string;
  extraLabel: string;
  extraValue: string;
}

const jurisdictions: JurisdictionCard[] = [
  {
    country: "United Kingdom",
    status: "Available",
    statusType: "available",
    workflow: "statutory filing tracking",
    provenance: "internal ruleset v4",
    reviewed: "14 Jul 2026",
    extraLabel: "Other workflows",
    extraValue: "assessed separately",
  },
  {
    country: "Germany",
    status: "Limited",
    statusType: "limited",
    workflow: "statutory filing tracking",
    provenance: "customer ruleset v3",
    reviewed: "02 Jun 2026",
    extraLabel: "Limitation",
    extraValue: "works council scope excluded",
  },
  {
    country: "Singapore",
    status: "Partner-supported",
    statusType: "partner",
    workflow: "statutory filing tracking",
    provenance: "partner ruleset",
    reviewed: "21 May 2026",
    extraLabel: "Dependency",
    extraValue: "partner availability",
  },
  {
    country: "United States",
    status: "Needs review",
    statusType: "needs-review",
    workflow: "cross-border data obligation",
    provenance: "local ruleset v2",
    reviewed: "review overdue",
    extraLabel: "Display",
    extraValue: "downgraded from prior status",
  },
];

export default function JurisdictionCoverageSection() {
  return (
    <section className="w-full bg-[#08222F] py-20 px-6 md:px-12 lg:px-20 font-sans text-white">
      <div className="max-w-6xl mx-auto">
        {/* Top Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-8">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-4 h-[1px] bg-[#C9B07A]"></span>
              <span className="text-[#C9B07A] text-[11px] font-semibold tracking-widest uppercase font-mono">
                JURISDICTION AND APPLICABILITY
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold tracking-tight leading-[1.15]">
              Coverage is published per workflow, with a review date
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-[#93A2B8] text-[15px] leading-relaxed">
              Five states, each carrying workflow scope, last-reviewed date and
              provenance. A jurisdiction is never marked covered as a whole.
            </p>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {jurisdictions.map((item, index) => {
            let dotColor = "bg-gray-500";

            if (item.statusType === "available") {
              dotColor = "bg-emerald-500";
            } else if (item.statusType === "limited") {
              dotColor = "bg-blue-500";
            } else if (item.statusType === "partner") {
              dotColor = "bg-gray-400";
            } else if (item.statusType === "needs-review") {
              dotColor = "bg-red-500";
            }

            return (
              <div
                key={index}
                className="bg-white text-[#111827] rounded-2xl p-5 shadow-xl flex flex-col justify-between border border-white/10"
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-base font-bold text-[#111827]">
                      {item.country}
                    </h3>
                    <span
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-[6px] border border-[#DBE3E8] text-[11px] font-medium`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${dotColor}`}
                      ></span>
                      {item.status}
                    </span>
                  </div>

                  {/* Card Details */}
                  <div className="space-y-2 text-[13px] font-mono text-[#4B5563]">
                    <div>
                      <span className="text-[#9CA3AF]">Workflow:</span>{" "}
                      <span className="text-[#111827] font-sans">
                        {item.workflow}
                      </span>
                    </div>
                    <div>
                      <span className="text-[#9CA3AF]">Provenance:</span>{" "}
                      <span className="text-[#111827] font-sans">
                        {item.provenance}
                      </span>
                    </div>
                    <div>
                      <span className="text-[#9CA3AF]">Reviewed:</span>{" "}
                      <span
                        className={`font-sans ${
                          item.reviewed === "review overdue"
                            ? "text-[#8A3B3B] font-semibold"
                            : "text-[#111827]"
                        }`}
                      >
                        {item.reviewed}
                      </span>
                    </div>
                    <div>
                      <span className="text-[#9CA3AF]">{item.extraLabel}:</span>{" "}
                      <span className="text-[#111827] font-sans">
                        {item.extraValue}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
