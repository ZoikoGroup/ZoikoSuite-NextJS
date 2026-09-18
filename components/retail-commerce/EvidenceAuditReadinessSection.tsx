"use client";

import React from "react";

interface LayerItem {
  number: string;
  title: string;
  description: string;
  badge: string;
}

const LAYERS: LayerItem[] = [
  {
    number: "01",
    title: "Governance decision",
    description:
      "Actor, entity, channel, policy or rule basis, authorization outcome, timestamp.",
    badge: "DECISION CARD · REFERENCE ID",
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
    description: "Scenario-specific package with controlled export.",
    badge: "PACKAGE INDEX · EXPORT CONTROL",
  },
  {
    number: "06",
    title: "Integrity controls",
    description:
      "Append-only records and tamper-evident chains, with cryptographic validation where implemented.",
    badge: "INTEGRITY STATUS · VALIDATION",
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
                EVIDENCE AND AUDIT READINESS
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-[40px] font-bold text-[#0F172A] tracking-tight leading-[1.15]">
              Prove the control operated
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              Six layers, each with its required content and interface pattern.
            </p>
          </div>
        </div>

        {/* Layers List (Full-width rows stacked vertically) */}
        <div className="flex flex-col gap-4">
          {LAYERS.map((layer, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-5 sm:p-6 shadow-sm border border-[#DBE3E8] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 w-full"
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
                <h3 className="text-sm font-bold text-[#0F172A] w-44">
                  {layer.title}
                </h3>
              </div>

              {/* Middle: Description */}
              <div className="text-xs sm:text-sm text-[#475569] leading-relaxed flex-1 lg:px-4">
                {layer.description}
              </div>

              {/* Right Side: Interface Pattern Badge */}
              <div className="shrink-0 self-start lg:self-center">
                <span className="inline-block px-3 py-1.5 rounded-lg border border-[#DBE3E8] text-[10px] font-mono tracking-wider font-semibold text-[#A07A2E] bg-white">
                  {layer.badge}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
