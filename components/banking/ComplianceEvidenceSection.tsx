"use client";

import React from "react";

interface EvidenceLayer {
  number: string;
  title: string;
  description: string;
}

const EVIDENCE_LAYERS: EvidenceLayer[] = [
  {
    number: "01",
    title: "Governance decision",
    description:
      "Actor, entity, jurisdiction, policy basis, authorization outcome, timestamp.",
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
      "Version, integrity hash, access history, signature status, retention.",
  },
  {
    number: "04",
    title: "Operational event",
    description:
      "Typed event, source service, object, actor or principal, correlation.",
  },
  {
    number: "05",
    title: "Evidence manifest",
    description: "Scenario-specific package with controlled export.",
  },
  {
    number: "06",
    title: "Integrity controls",
    description:
      "Append-only records and tamper-evident chains, with cryptographic validation where implemented.",
  },
];

export default function ComplianceEvidenceSection() {
  return (
    <section className="w-full bg-white py-20 px-6 lg:px-12 flex justify-center items-center font-sans">
      <div className="max-w-6xl w-full flex flex-col">
        {/* Header Grid */}
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
                COMPLIANCE OBLIGATIONS AND EVIDENCE
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight text-[#0F172A] leading-[1.15]">
              Prove the control operated &mdash; not merely that an obligation
              existed
            </h2>
          </div>

          {/* Right Subtitle Area */}
          <div className="lg:col-span-5 lg:pt-6 flex items-start">
            <p className="text-gray-600 text-sm lg:text-base leading-relaxed">
              Operational obligations only: regulatory correspondence deadlines,
              contractual commitments, tax filings, workforce and vendor duties.
              Not AML/KYC casework or prudential returns.
            </p>
          </div>
        </div>

        {/* Content Body: Left Graphic Card & Right 6 Layers List */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Graphic Column */}
          <div className="lg:col-span-5">
            <div className="w-full rounded-xl overflow-hidden">
              <img
                src="/banking/4.png"
                alt="Compliance Obligations and Evidence Six Layers Visualization"
                className="w-full h-auto object-cover opacity-95 hover:opacity-100 transition-opacity"
              />
            </div>
          </div>

          {/* Right 6 Evidence Layers Column */}
          <div className="lg:col-span-7 flex flex-col gap-3">
            <div className="text-xs font-mono font-bold tracking-widest text-gray-400 mb-1 uppercase">
              SIX EVIDENCE LAYERS
            </div>

            {EVIDENCE_LAYERS.map((layer, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-4 sm:p-5 flex items-start gap-4 shadow-sm border border-[#E2E8F0] hover:border-gray-300 transition-colors"
              >
                <span className="text-xs font-mono font-bold text-white bg-[#0F476A] px-2 py-1 rounded border border-red-100">
                  {layer.number}
                </span>
                <div className="flex flex-col">
                  <h3 className="text-sm font-bold text-[#0F172A] mb-1">
                    {layer.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {layer.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
