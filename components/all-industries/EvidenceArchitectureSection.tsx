"use client";

import React from "react";

const layers = [
  {
    number: "01",
    title: "Governance decision",
    description:
      "Actor, entity, jurisdiction, policy basis, authorization outcome, timestamp.",
    badge: "DECISION CARD • REFERENCE ID",
  },
  {
    number: "02",
    title: "Workflow history",
    description:
      "Every transition, approver, delegation, rejection, escalation and rationale.",
    badge: "CHRONOLOGICAL TIMELINE",
  },
  {
    number: "03",
    title: "Document lineage",
    description:
      "Version, integrity hash, access history, signature status, retention.",
    badge: "DOCUMENT EVIDENCE DRAWER",
  },
  {
    number: "04",
    title: "Operational event",
    description:
      "Typed event, source service, object, actor or principal, correlation.",
    badge: "EVENT DETAIL PANEL",
  },
  {
    number: "05",
    title: "Evidence manifest",
    description:
      "Scenario-specific package with controlled export and access record.",
    badge: "PACKAGE INDEX • EXPORT CONTROL",
  },
  {
    number: "06",
    title: "Integrity controls",
    description:
      "Append-only records and tamper-evident chains, with cryptographic validation where implemented.",
    badge: "INTEGRITY STATUS • VALIDATION",
  },
];

export default function EvidenceArchitectureSection() {
  return (
    <section className="w-full bg-white text-[#08222F] py-20 px-6 lg:px-12 font-sans">
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
                EVIDENCE AND AUDIT
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight leading-[1.1]">
              One evidence architecture, every sector
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-[13px] lg:text-[14px] text-gray-600 leading-relaxed">
              Six layers, identical across all nine industries. What differs is
              who asks for it and why.
            </p>
          </div>
        </div>

        {/* Rows Container */}
        <div className="space-y-4">
          {layers.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-5 lg:p-6 border border-gray-200 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-4 items-center"
            >
              {/* Column 1: Number & Title */}
              <div className="lg:col-span-4 flex items-center gap-4">
                <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded bg-[#0F476A] text-white tracking-wider">
                  {item.number}
                </span>
                <h3 className="text-[14px] font-bold text-[#08222F]">
                  {item.title}
                </h3>
              </div>

              {/* Column 2: Description */}
              <div className="lg:col-span-5">
                <p className="text-[12px] text-gray-600 font-mono leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Column 3: Badge */}
              <div className="lg:col-span-3 flex lg:justify-end">
                <span className="inline-block px-3 py-1.5 rounded-lg text-[10px] font-mono font-semibold text-[#A07A2E] border border-[#C9B07A]/40 tracking-wider text-center">
                  {item.badge}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
