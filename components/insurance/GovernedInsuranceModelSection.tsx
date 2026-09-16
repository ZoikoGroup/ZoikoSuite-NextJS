"use client";

import React from "react";

interface StageItem {
  number: string;
  title: string;
  userSees: string;
  platformDoes: string;
  highlighted?: boolean;
}

const STAGES: StageItem[] = [
  {
    number: "01",
    title: "Resolve context",
    userSees:
      "Entity, jurisdiction, business line, function, effective date, source system.",
    platformDoes:
      "Loads governed context and applicable configuration — without claiming universal insurance coverage.",
  },
  {
    number: "02",
    title: "Resolve authority",
    userSees: "Actor, role, delegation, approval limit, segregation status.",
    platformDoes:
      "Checks whether the person or system is permitted to act in this context.",
  },
  {
    number: "03",
    title: "Evaluate policy / obligation",
    userSees:
      "Applicable internal policy, contractual obligation, workflow rule or validated jurisdiction rule.",
    platformDoes:
      "Returns allowed, blocked, approval required, review required or coverage limited — each with reason and source.",
    highlighted: true,
  },
  {
    number: "04",
    title: "Confirm source truth",
    userSees:
      "Authoritative record and current version from the connected system.",
    platformDoes:
      "Uses source ownership and provenance. Does not silently duplicate the insurance core as master.",
    highlighted: true,
  },
  {
    number: "05",
    title: "Govern execution",
    userSees: "Approval, escalation, remediation or governed external action.",
    platformDoes:
      "Applies workflow, permission and evidence requirements before material completion.",
  },
  {
    number: "06",
    title: "Preserve evidence",
    userSees: "Decision, workflow, document, source record and rationale.",
    platformDoes: "Creates linked evidence and audit events as work happens.",
  },
  {
    number: "07",
    title: "Propagate status",
    userSees: "Outcome, exceptions and event lineage.",
    platformDoes:
      "Publishes governed events and updates to connected domains where contracts and product design permit.",
  },
];

export default function GovernedInsuranceModelSection() {
  return (
    <section className="w-full bg-[#F7F5F0] text-[#0F172A] py-20 px-6 lg:px-12 flex justify-center items-center font-sans">
      <div className="max-w-6xl w-full flex flex-col">
        {/* Top Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-start">
          {/* Left Title Area */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Eyebrow Tag */}
            <div className="flex items-center gap-2 mb-4">
              <span className="w-4 h-[1px] bg-[#C59B3F]"></span>
              <span
                className="text-xs font-semibold tracking-widest uppercase font-mono"
                style={{ color: "#C59B3F" }}
              >
                GOVERNED INSURANCE OPERATING MODEL
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight leading-[1.15]">
              Seven stages, with source truth confirmed before execution
            </h2>
          </div>

          {/* Right Subtitle Area */}
          <div className="lg:col-span-5 lg:pt-10 flex items-start">
            <p className="text-gray-600 text-sm lg:text-base leading-relaxed">
              Stage 4 is the one insurers ask about: ZoikoSuite uses source
              ownership and provenance rather than silently duplicating the
              insurance core as master.
            </p>
          </div>
        </div>

        {/* Stages List */}
        <div className="flex flex-col gap-4">
          {STAGES.map((stage) => {
            const isHighlighted = stage.highlighted;
            return (
              <div
                key={stage.number}
                className={`bg-white rounded-xl p-5 lg:p-6 shadow-sm border border-[#DBE3E8] transition-all flex flex-col lg:flex-row lg:items-center justify-between gap-6 ${
                  isHighlighted ? "border-l-[3px] border-l-[#D0AA55]" : ""
                }`}
              >
                {/* Col 1: Number + Title */}
                <div className="flex items-center gap-4 lg:w-1/3">
                  <span
                    className="px-2.5 py-1 text-xs font-mono font-bold text-white rounded-[5px] shrink-0"
                    style={{ backgroundColor: "#0F476A" }}
                  >
                    {stage.number}
                  </span>
                  <h3
                    className={`text-sm lg:text-base font-bold ${
                      isHighlighted ? "text-[#D0AA55]" : "text-[#0F172A]"
                    }`}
                  >
                    {stage.title}
                  </h3>
                </div>

                {/* Col 2: User Sees */}
                <div className="flex flex-col lg:w-1/3">
                  <span className="text-[10px] font-mono tracking-wider text-gray-400 uppercase mb-1">
                    USER SEES
                  </span>
                  <p className="text-xs lg:text-sm text-gray-600 leading-relaxed">
                    {stage.userSees}
                  </p>
                </div>

                {/* Col 3: Platform Does */}
                <div className="flex flex-col lg:w-1/3">
                  <span className="text-[10px] font-mono tracking-wider text-gray-400 uppercase mb-1">
                    PLATFORM DOES
                  </span>
                  <p className="text-xs lg:text-sm text-gray-600 leading-relaxed">
                    {stage.platformDoes}
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
