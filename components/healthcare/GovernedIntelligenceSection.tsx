"use client";

import React from "react";

const aiMayList = [
  "Propose obligations, clauses and metadata from documents, with provenance",
  "Prioritize vendor, contract and obligation exceptions for review",
  "Detect anomalies against configured enterprise expectations",
  "Suggest reconciliation matches for a human to confirm",
  "Summarize a decision basis with its sources cited",
  "Draft an impact summary for a named reviewer",
];

const aiMayNotList = [
  "Affect diagnosis, treatment, triage or care planning",
  "Influence patient access, eligibility or any clinical outcome",
  "Provide clinical decision support of any kind",
  "Approve, authorize or execute any business action",
  "Access sensitive data outside a recorded purpose",
  "Determine compliance, accreditation or regulatory applicability",
];

const adoptionSequence = [
  {
    title: "Connect",
    description: "versioned APIs and events with declared provenance",
  },
  {
    title: "Map",
    description:
      "object and field mapping, correction authority with the data owner",
  },
  {
    title: "Parallel run",
    description:
      "proposed governed behaviour compared with current operation",
  },
  {
    title: "Reconcile",
    description:
      "counts and relationships verified, variance dispositioned",
  },
  {
    title: "Activate one entity or facility",
    description: "named human decision, rollback defined first",
  },
  {
    title: "Extend by facility",
    description: "never all facilities at once",
  },
];

export default function GovernedIntelligenceSection() {
  return (
    <section className="w-full bg-[#08222F] text-white py-20 px-6 lg:px-12 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 items-end">
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
                GOVERNED INTELLIGENCE FOR HEALTHCARE OPERATIONS
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] max-w-[560px] font-bold tracking-tight leading-[1.1]">
              Nothing AI does may reach a patient
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-[13px] lg:text-[14px] text-gray-300 leading-relaxed">
              The prohibitions here are absolute and are not relaxed by any
              configuration, deployment option or customer agreement.
            </p>
          </div>
        </div>

        {/* AI MAY / AI MAY NOT Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
          {/* AI MAY Card */}
          <div className="bg-white text-[#08222F] rounded-xl p-6 border-l-[4px] border-l-[#1E7A5A] shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-mono font-bold tracking-widest text-[#1E7A5A] uppercase mb-4 block">
                AI MAY
              </span>
              <ul className="flex flex-col gap-3">
                {aiMayList.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-[13px] text-gray-700"
                  >
                    <span className="text-[#1E7A5A] font-bold mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* AI MAY NOT Card */}
          <div className="bg-white text-[#08222F] rounded-xl p-6 border-l-[4px] border-l-[#8A3B3B] shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-mono font-bold tracking-widest text-[#8A3B3B] uppercase mb-4 block">
                AI MAY NOT
              </span>
              <ul className="flex flex-col gap-3">
                {aiMayNotList.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-[13px] text-gray-700"
                  >
                    <span className="text-[#8A3B3B] font-bold mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Split Layout: Adoption Sequence & Output/Replatforming Contracts */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Adoption Sequence (Left) */}
          <div className="lg:col-span-5 flex flex-col">
            <span className="text-[11px] font-mono font-bold tracking-widest text-gray-400 uppercase mb-6">
              ADOPTION SEQUENCE
            </span>
            <div className="relative pl-6 flex flex-col gap-6 border-l border-[#C59B3F]/30 ml-2">
              {adoptionSequence.map((item, index) => (
                <div key={index} className="relative flex flex-col">
                  {/* Timeline Node Dot */}
                  <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-[#C59B3F] border-2 border-[#08222F]" />
                  <p className="text-[13px] leading-snug">
                    <strong className="text-white font-bold">
                      {item.title}
                    </strong>{" "}
                    <span className="text-gray-400">
                      — {item.description}
                    </span>
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side Cards */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {/* Output Contract Card */}
            <div className="bg-[#0F476A]/30 border border-[#0F476A] rounded-xl p-6">
              <span className="text-[10px] font-mono font-bold tracking-widest text-[#C59B3F] uppercase mb-2 block">
                OUTPUT CONTRACT
              </span>
              <p className="text-[13px] text-gray-200 leading-relaxed">
                Sources first, then limitations and conflicts, then the finding,
                then the required reviewer, then the human decision as a
                separate record. A missing mandatory source suppresses or
                downgrades the finding. If the AI service is unavailable, the
                non-AI governance path remains fully usable.
              </p>
            </div>

            {/* No Replatforming Card */}
            <div className="bg-[#0F476A]/30 border border-[#0F476A] rounded-xl p-6">
              <span className="text-[10px] font-mono font-bold tracking-widest text-[#C59B3F] uppercase mb-2 block">
                NO REPLATFORMING
              </span>
              <p className="text-[13px] text-gray-200 leading-relaxed">
                Parallel run observes and compares without posting, authorizing
                or executing. No EHR, clinical, ancillary, revenue-cycle or
                patient record is written by ZolloSuite at any point.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
