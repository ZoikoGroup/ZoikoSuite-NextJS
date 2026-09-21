"use client";

import React from "react";

interface LayerItem {
  number: string;
  title: string;
  description: string;
  badgeText: string;
}

const layers: LayerItem[] = [
  {
    number: "01",
    title: "Governance decision",
    description:
      "Actor, entity, jurisdiction, policy basis, authorization outcome, timestamp.",
    badgeText: "DECISION CARD · REFERENCE ID",
  },
  {
    number: "02",
    title: "Workflow history",
    description:
      "Every transition, approver, delegation, rejection, escalation and rationale.",
    badgeText: "CHRONOLOGICAL TIMELINE",
  },
  {
    number: "03",
    title: "Document lineage",
    description:
      "Version, integrity hash, access history, signature status, retention reference.",
    badgeText: "DOCUMENT EVIDENCE DRAWER",
  },
  {
    number: "04",
    title: "Operational event",
    description:
      "Typed event, source service, object, actor or principal, correlation.",
    badgeText: "EVENT DETAIL PANEL",
  },
  {
    number: "05",
    title: "Evidence manifest",
    description:
      "Scenario-specific package with controlled export and its own access record.",
    badgeText: "PACKAGE INDEX · EXPORT CONTROL",
  },
  {
    number: "06",
    title: "Integrity controls",
    description:
      "Append-only records and tamper-evident chains, with cryptographic validation where implemented.",
    badgeText: "INTEGRITY STATUS · VALIDATION",
  },
];

export default function EvidenceAuditReadiness() {
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
                className="text-[11px] font-semibold tracking-widest uppercase font-mono"
                style={{ color: "#C59B3F" }}
              >
                EVIDENCE AND AUDIT READINESS
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight leading-[1.1]">
              Six layers, with an export path
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-[14px] lg:text-[15px] text-[#4B5563] leading-relaxed">
              Evidence Architecture owns the depth. This is the summary a
              compliance reviewer needs to decide whether to go further.
            </p>
          </div>
        </div>

        {/* Rows Container */}
        <div className="space-y-4">
          {layers.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-5 lg:p-6 border border-[#E5E7EB] shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-4 items-center"
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
                <p className="text-[13px] text-[#4B5563] font-sans leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Column 3: Third Element / Badge */}
              <div className="lg:col-span-3 flex lg:justify-end">
                <span className="inline-block text-[10px] font-mono font-bold px-3 py-1.5 rounded-xl border border-[#E5E7EB] bg-white tracking-wider text-[#A07A2E]">
                  {item.badgeText}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
