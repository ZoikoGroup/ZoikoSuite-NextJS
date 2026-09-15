"use client";

import React from "react";

interface CapabilityCard {
  title: string;
  tags: { text: string; variant: "blue" | "red" | "yellow" }[];
  description: string;
  footerText: string;
}

const CAPABILITIES: CapabilityCard[] = [
  {
    title: "Finance & tax",
    tags: [{ text: "CURRENT ARCHITECTURE", variant: "blue" }],
    description:
      "Maintain entity-aware financial truth, governed approvals, close context, tax treatment and reconciliation evidence.",
    footerText:
      "Ledger and close status, exception queue, approval lineage, Shadow Ledger comparison.",
  },
  {
    title: "Workforce & payroll",
    tags: [{ text: "CURRENT ARCHITECTURE", variant: "blue" }],
    description:
      "Govern employment and pay processes across branches, entities, jurisdictions and worker types.",
    footerText:
      "Payroll explainability, worker and entity context, approval and exception history, effective-dated policy.",
  },
  {
    title: "Legal & commercial",
    tags: [{ text: "CURRENT ARCHITECTURE", variant: "blue" }],
    description:
      "Move vendor contracts, authority, clauses, obligations, approvals and spend through controlled execution.",
    footerText:
      "Contract status, signatory authority, clause-linked obligations, vendor diligence, decision history.",
  },
  {
    title: "Compliance & obligations",
    tags: [
      { text: "CURRENT ARCHITECTURE", variant: "blue" },
      { text: "NOT AML/KYC", variant: "red" },
    ],
    description:
      "Know what operational obligation is due, why it exists, who owns it, and what evidence supports completion.",
    footerText:
      "Obligation registry, due dates, owner, entity and jurisdiction, escalation, evidence status. Not AML/KYC or prudential reporting.",
  },
  {
    title: "Evidence & audit",
    tags: [
      { text: "CURRENT ARCHITECTURE", variant: "blue" },
      { text: "PHASED DELIVERY", variant: "yellow" },
    ],
    description:
      "Retrieve complete decision, workflow, document, event and evidence lineage.",
    footerText:
      "Audit timeline, evidence manifest, integrity status, controlled export.",
  },
  {
    title: "Intelligence & reporting",
    tags: [{ text: "PHASED DELIVERY", variant: "yellow" }],
    description:
      "Prioritize operational risk and forecast exposure without changing authoritative source truth.",
    footerText:
      "Anomaly queue, scenario and context, confidence, human-review boundary, executive reporting.",
  },
  {
    title: "Security & sovereign trust",
    tags: [{ text: "READINESS - NOT CERTIFIED", variant: "red" }],
    description:
      "Apply identity, segregation of duties, encryption, service trust, deployment, residency and telemetry principles.",
    footerText: "Status-labeled controls with trust and resource links.",
  },
  {
    title: "Integration & migration",
    tags: [
      { text: "CURRENT ARCHITECTURE", variant: "blue" },
      { text: "PHASED DELIVERY", variant: "yellow" },
    ],
    description:
      "Connect existing systems and adopt progressively without a big-bang core replacement.",
    footerText:
      "API and event health, provenance, mapping, migration integrity, parallel-run evidence.",
  },
];

export default function CapabilityGridSection() {
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
                BANKING OPERATIONS CAPABILITY GRID
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight text-[#0F172A] leading-[1.15]">
              Eight domains, each with its proof surface
            </h2>
          </div>

          {/* Right Subtitle Area */}
          <div className="lg:col-span-5 lg:pt-6 flex items-start">
            <p className="text-gray-600 text-sm lg:text-base leading-relaxed">
              Validated ZoikoSuite domains mapped to banking enterprise jobs.
              Every capability carries a claim status.
            </p>
          </div>
        </div>

        {/* Cards Grid (4 columns x 2 rows on large screens) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CAPABILITIES.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 flex flex-col justify-between shadow-sm border border-[#E2E8F0] hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col gap-4">
                {/* Card Title & Tags */}
                <div>
                  <h3 className="text-base font-bold text-[#0F172A]">
                    {item.title}
                  </h3>
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {item.tags.map((tag, tIndex) => {
                      let badgeStyle =
                        "bg-blue-50 text-blue-700 border-blue-200";
                      if (tag.variant === "red") {
                        badgeStyle = "bg-red-50 text-red-700 border-red-200";
                      } else if (tag.variant === "yellow") {
                        badgeStyle =
                          "bg-amber-50 text-amber-800 border-amber-200";
                      }
                      return (
                        <span
                          key={tIndex}
                          className={`text-[8px] font-mono font-bold px-2 py-0.5 rounded border ${badgeStyle}`}
                        >
                          {tag.text}
                        </span>
                      );
                    })}
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Footer text */}
              <div className="mt-6 pt-4 border-t border-dashed border-gray-200">
                <p className="text-[11px] text-gray-500 leading-relaxed">
                  {item.footerText}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
