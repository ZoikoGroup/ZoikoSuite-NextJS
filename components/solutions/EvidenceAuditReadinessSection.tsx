"use client";

import React from "react";

interface EvidenceLayer {
  layer: string;
  title: string;
  description: string;
}

const evidenceLayers: EvidenceLayer[] = [
  {
    layer: "LAYER 01",
    title: "Governance decision",
    description:
      "Actor/system principal, entity, jurisdiction, policy/rule basis, authorization outcome, timestamp.",
  },
  {
    layer: "LAYER 02",
    title: "Workflow history",
    description:
      "State transitions, approvers, delegation, rejection, escalation, rationale.",
  },
  {
    layer: "LAYER 03",
    title: "Document lineage",
    description:
      "Version, integrity reference, access/signature/retention/residency status where implemented.",
  },
  {
    layer: "LAYER 04",
    title: "Operational event",
    description:
      "Typed event, source service, object, actor/system, correlation, causation.",
  },
  {
    layer: "LAYER 05",
    title: "Evidence manifest",
    description:
      "Scenario-specific package linking relevant decisions, documents, workflows, and records.",
  },
  {
    layer: "LAYER 06",
    title: "Integrity controls",
    description:
      "Append-only / tamper-evident / cryptographic controls only when implemented and source-verified.",
  },
];

export default function EvidenceAuditReadinessSection() {
  return (
    <section className="w-full bg-[#F7F5F0] text-[#08222F] py-20 px-6 lg:px-12 font-sans flex justify-center">
      <div className="max-w-6xl w-full flex flex-col items-start">
        {/* Header / Intro text container */}
        <div className="flex flex-col items-start mb-16">
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
              EVIDENCE & AUDIT READINESS
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-[36px] font-bold tracking-tight leading-[1.15] mb-4">
            Evidence as a primary capability, not a footer-level claim.
          </h2>

          {/* Description */}
          <p className="text-gray-600 text-sm lg:text-base max-w-xl leading-relaxed font-mono">
            Six layers are captured as work happens.
          </p>
        </div>

        {/* 3x2 Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {evidenceLayers.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-[#D9D3C7] rounded-2xl p-6 flex flex-col justify-between shadow-sm transition-all hover:border-[#C59B3F]"
            >
              <div>
                {/* Layer Tag */}
                <div className="text-[10px] font-mono font-bold tracking-widest uppercase mb-3 text-[#C59B3F]">
                  {item.layer}
                </div>

                {/* Card Title */}
                <h3 className="text-base font-bold text-[#08222F] mb-3">
                  {item.title}
                </h3>

                {/* Card Description */}
                <p className="text-xs text-gray-600 leading-relaxed font-mono">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
