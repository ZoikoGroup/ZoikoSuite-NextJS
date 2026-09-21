"use client";

import React from "react";

const aiMayItems = [
  "Propose obligations, clauses and metadata from agreements, with provenance",
  "Prioritize partner, vendor and obligation exceptions for review",
  "Detect anomalies against configured business expectations",
  "Suggest reconciliation matches for a human to confirm",
  "Summarize a decision basis with its sources cited",
  "Draft a change-impact summary for a named reviewer",
];

const aiMayNotItems = [
  "Act on any subscriber, service or network element",
  "Affect provisioning, charging, rating or SIM lifecycle",
  "Approve, authorize or execute any business action",
  "Access protected customer information outside recorded purpose",
  "Alter authoritative source truth in any system",
  "Determine privacy applicability, compliance or regulatory outcome",
];

const securityItems = [
  {
    title: "Identity, SoD and workload identity",
    status: "ARCHITECTURE REQUIREMENT",
    statusType: "requirement",
    description:
      "Role, attribute, entity and market authorization with segregation checks.",
  },
  {
    title: "Encryption and access evidence",
    status: "IMPLEMENTED",
    statusType: "implemented",
    description: "At rest and in transit; access events retained as evidence.",
  },
  {
    title: "Residency and key custody",
    status: "DEPLOYMENT-DEPENDENT",
    statusType: "dependent",
    description:
      "Availability varies by deployment option and approved region.",
  },
  {
    title: "Independent certification",
    status: "NOT VALIDATED",
    statusType: "not-validated",
    description: "No certified, compliant or attested claim is made.",
  },
];

const adoptionSequence = [
  {
    step: "Connect",
    description: "versioned APIs and events with declared provenance",
  },
  {
    step: "Map",
    description:
      "object and field mapping, correction authority with the data owner",
  },
  {
    step: "Parallel run",
    description: "proposed governed behaviour compared with current operation",
  },
  {
    step: "Reconcile",
    description: "counts and relationships verified, variance dispositioned",
  },
  {
    step: "Activate one market",
    description: "named human decision, rollback defined first",
  },
  {
    step: "Extend by market",
    description: "never all markets at once",
  },
];

export default function GovernedAiSecurityAndAdoptionSection() {
  return (
    <section className="w-full bg-[#08222F] text-white py-20 px-6 lg:px-12 font-sans">
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
                GOVERNED AI, SECURITY AND ADOPTION
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight leading-[1.1]">
              Bounded assistance, phased coexistence
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-[13px] lg:text-[14px] text-gray-300 leading-relaxed">
              In telecom the boundary that matters most is between business
              assistance and anything touching a subscriber or the network.
            </p>
          </div>
        </div>

        {/* AI May / AI May Not Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {/* AI May */}
          <div className="bg-white text-[#08222F] rounded-2xl p-6 lg:p-8 shadow-md flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-mono font-bold tracking-widest text-[#1E7A5A] uppercase block mb-4">
                AI MAY
              </span>
              <ul className="space-y-3 font-mono text-[12px] text-gray-700">
                {aiMayItems.map((item, index) => (
                  <li key={index} className="flex items-start gap-2.5">
                    <span className="text-[#1E7A5A] mt-0.5">●</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* AI May Not */}
          <div className="bg-[#FAF2F2] text-[#08222F] rounded-2xl p-6 lg:p-8 shadow-md flex flex-col justify-between border border-[#EACDCD]">
            <div>
              <span className="text-[11px] font-mono font-bold tracking-widest text-[#A83232] uppercase block mb-4">
                AI MAY NOT
              </span>
              <ul className="space-y-3 font-mono text-[12px] text-gray-700">
                {aiMayNotItems.map((item, index) => (
                  <li key={index} className="flex items-start gap-2.5">
                    <span className="text-[#A83232] mt-0.5">●</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Split: Security & Trust vs Adoption Sequence */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Security and Trust */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            <span className="text-[11px] font-mono font-bold tracking-widest text-gray-400 uppercase mb-1">
              SECURITY AND TRUST — LABELLED PER ITEM
            </span>

            {securityItems.map((sec, index) => {
              let badgeStyle = "bg-[#F0F4F8] text-[#0F476A] border-[#D1E0EE]";
              if (sec.statusType === "implemented") {
                badgeStyle = "bg-[#EAF5F0] text-[#1E7A5A] border-[#1E7A5A]/30";
              } else if (sec.statusType === "dependent") {
                badgeStyle = "bg-[#FBF2DF] text-[#9C6B12] border-[#9C6B12]/30";
              } else if (sec.statusType === "not-validated") {
                badgeStyle = "bg-[#FCE8E6] text-[#A83232] border-[#A83232]/30";
              }

              return (
                <div
                  key={index}
                  className="bg-white text-[#08222F] rounded-xl p-5 shadow-sm border border-gray-200 flex flex-col gap-3 font-mono"
                >
                  <div className="flex flex-col justify-between gap-2">
                    <h3 className="text-[13px] font-bold text-[#08222F] font-sans">
                      {sec.title}
                    </h3>
                    <span
                      className={`inline-block px-2 py-0.5 rounded text-[9px] font-bold border tracking-wider self-start sm:self-auto ${badgeStyle}`}
                    >
                      {sec.status}
                    </span>
                    <p className="text-[11px] text-gray-600 leading-relaxed">
                      {sec.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Adoption Sequence */}
          <div className="lg:col-span-6 flex flex-col ">
            <span className="text-[11px] font-mono font-bold tracking-widest text-gray-400 uppercase mb-2">
              ADOPTION SEQUENCE
            </span>

            <div className="relative pl-6 space-y-6 before:absolute before:left-[5px] before:top-2 before:bottom-2 before:w-[2px] before:bg-white">
              {adoptionSequence.map((seq, index) => (
                <div
                  key={index}
                  className="relative flex items-start gap-4 font-mono"
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-6 top-1 w-3 h-3 rounded-full bg-white border-2 border-[#D0AA55] ring-4 ring-[#0A2A3A]" />

                  <div className="flex flex-col">
                    <p className="text-[12px] leading-relaxed text-gray-200">
                      <strong className="text-white font-bold">
                        {seq.step}
                      </strong>{" "}
                      · {seq.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
