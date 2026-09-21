"use client";

import React from "react";
import Image from "next/image";

const evidenceLayers = [
  {
    number: "01",
    title: "Governance decision",
    description:
      "Actor, entity, facility, policy basis, authorization outcome, timestamp.",
    badge: "DECISION CARD • REFERENCE 95",
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
      "Version, integrity hash, access history, signature status, retention reference.",
    badge: "DOCUMENT EVIDENCE DAGGER",
  },
  {
    number: "04",
    title: "Access event",
    description:
      "Who accessed sensitive data, for what recorded purpose, and under which policy.",
    badge: "ACCESS EVIDENCE PANEL",
  },
  {
    number: "05",
    title: "Evidence manifest",
    description:
      "Scenario-specific package with controlled export and its own access record.",
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

export default function PrivacyComplianceEvidenceSection() {
  return (
    <section className="w-full bg-white text-[#08222F] py-20 px-6 lg:px-12 font-sans">
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
                PRIVACY, COMPLIANCE OBLIGATIONS AND EVIDENCE
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight leading-[1.1]">
              Eight fields resolve before any workflow touches data
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-[13px] lg:text-[14px] text-gray-600 leading-relaxed">
              The scope panel states data class, purpose, source owner, access
              scope, storage, export, retention and review state — with metadata
              or reference-only integration preferred wherever possible.
            </p>
          </div>
        </div>

        {/* Main Graphic / Image Container */}
        <div className="w-full overflow-hidden relative">
          <div className="relative w-full aspect-[16/9] min-h-[400px]">
            <Image
              src="/healthcare/3.png"
              alt="Privacy, Compliance Obligations and Evidence Illustration"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Section Sub-heading */}
        <div className="mb-4">
          <span className="text-[11px] font-mono font-bold tracking-widest text-gray-500 uppercase">
            SIX EVIDENCE LAYERS
          </span>
        </div>

        {/* Evidence Layers List */}
        <div className="flex flex-col gap-2">
          {evidenceLayers.map((item, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl p-4 sm:p-5 border border-[#DBE3E8] transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 cursor-pointer`}
            >
              <div className="flex items-center gap-4 sm:gap-6">
                <span className="text-[11px] font-mono font-bold bg-[#0F476A] text-white px-2 py-1 rounded">
                  {item.number}
                </span>
                <div>
                  <h3 className="text-[14px] font-bold text-[#08222F] mb-0.5">
                    {item.title}
                  </h3>
                  <p className="text-[12px] text-gray-600 leading-normal">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="self-start sm:self-center">
                <span className="text-[10px] font-mono font-semibold px-2.5 py-1 text-[#A07A2E] border border-[#DBE3E8] rounded">
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
