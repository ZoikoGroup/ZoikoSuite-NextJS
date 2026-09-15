"use client";

import React from "react";

interface LayerItem {
  number: string;
  title: string;
  description: string;
}

const LAYERS: LayerItem[] = [
  {
    number: "01",
    title: "Governance decision",
    description:
      "Actor, entity, jurisdiction, policy or rule basis, authorization outcome and timestamp.",
  },
  {
    number: "02",
    title: "Workflow history",
    description:
      "Every transition, approver, delegation, rejection, escalation and rationale.",
  },
  {
    number: "03",
    title: "Document lineage",
    description:
      "Version, integrity hash, access history, signature status, retention and residency policy.",
  },
  {
    number: "04",
    title: "Operational event",
    description:
      "Typed event, source service, object, actor or system principal, correlation and causation.",
  },
  {
    number: "05",
    title: "Evidence manifest",
    description:
      "Scenario-specific package linking the relevant decisions, documents, workflows and source records.",
  },
  {
    number: "06",
    title: "Integrity controls",
    description:
      "Append-only records and tamper-evident chains, with cryptographic validation where implemented.",
  },
];

export default function EvidenceAuditReadinessSection() {
  return (
    <section className="w-full bg-[#F7F5F0] py-16 md:py-24 text-[#0F172A] font-sans flex justify-center items-center px-4">
      <div className="w-full max-w-6xl mx-auto flex flex-col gap-12">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-4 h-[2px] bg-[#A07A2E]" />
              <span className="text-[11px] font-mono font-bold tracking-widest text-[#A07A2E] uppercase">
                EVIDENCE & AUDIT READINESS
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-[40px] font-bold text-[#0F172A] tracking-tight leading-[1.15]">
              Prove the control operated — not merely that a policy existed
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              Six layers, each with its required content and the interface
              pattern that carries it.
            </p>
          </div>
        </div>

        {/* Layers List (Full-width rows stacked vertically) */}
        <div className="flex flex-col gap-4">
          {LAYERS.map((layer, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-5 sm:p-6 shadow-sm border border-[#DBE3E8] flex flex-col sm:flex-row items-start sm:items-center gap-4 lg:gap-15 w-full"
            >
              {/* Left Side: Number Badge & Title */}
              <div className="flex items-center gap-4 shrink-0">
                <div
                  className="px-2.5 py-1 text-white font-mono font-bold text-xs shrink-0"
                  style={{
                    backgroundColor: "#0F476A",
                    borderRadius: "5px",
                  }}
                >
                  {layer.number}
                </div>
                <h3 className="text-sm font-bold text-[#0F172A]">
                  {layer.title}
                </h3>
              </div>

              {/* Right Side: Description */}
              <div className="text-xs sm:text-sm text-[#475569] leading-relaxed sm:text-right">
                {layer.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
