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
    tags: [
      { text: "CURRENT ARCHITECTURE", variant: "blue" },
      { text: "NOT PREMIUM BILLING", variant: "red" },
    ],
    description:
      "Entity-aware accounting, close, tax, AP/AR, approvals, consolidation and evidence around corporate finance.",
    footerText:
      "Validated finance language only. This is not premium billing, collections or insurance accounting.",
  },
  {
    title: "Workforce & payroll",
    tags: [{ text: "CURRENT ARCHITECTURE", variant: "blue" }],
    description:
      "Govern employment and pay processes across entities, jurisdictions and worker types.",
    footerText:
      "Worker and entity context, effective-dated policy, approval and exception history.",
  },
  {
    title: "Legal & commercial",
    tags: [{ text: "CURRENT ARCHITECTURE", variant: "blue" }],
    description:
      "Move contracts, authority, clauses, obligations, approvals and spend through controlled execution.",
    footerText:
      "Contract status, signatory authority, clause-linked obligations, decision history.",
  },
  {
    title: "Third party & distribution",
    tags: [
      { text: "CURRENT ARCHITECTURE", variant: "blue" },
      { text: "NOT PRODUCER LICENSING", variant: "red" },
    ],
    description:
      "Govern obligations to service providers, outsourcing partners, and brokers, MGAs or TPAs where applicable.",
    footerText:
      "Diligence status, renewal, access, obligations. Not producer licensing or distribution administration.",
  },
  {
    title: "Compliance & obligations",
    tags: [
      { text: "CURRENT ARCHITECTURE", variant: "blue" },
      { text: "NOT REGULATOR FILING", variant: "red" },
    ],
    description:
      "Know what operational obligation is due, why it exists, who owns it, and what evidence supports completion.",
    footerText:
      "Registry, due dates, owner, escalation, evidence status. Not regulator filing or submission.",
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
      "Anomaly queue, context, confidence, human-review boundary. Not actuarial modeling.",
  },
  {
    title: "Security & sovereign trust",
    tags: [{ text: "READINESS - NOT CERTIFIED", variant: "red" }],
    description:
      "Apply identity, segregation of duties, encryption, deployment, residency and telemetry principles.",
    footerText: "Status-labeled controls with trust and resource links.",
  },
];

export default function InsuranceCapabilityGridSection() {
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
                INSURANCE OPERATIONS CAPABILITY GRID
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight text-[#0F172A] leading-[1.15]">
              Platform domains translated into insurer operating jobs
            </h2>
          </div>

          {/* Right Subtitle Area */}
          <div className="lg:col-span-5 lg:pt-6 flex items-start">
            <p className="text-gray-600 text-sm lg:text-base leading-relaxed">
              Each capability carries its claim status and, where the insurance
              context creates a risk of over-reading, an explicit guardrail.
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
                        "bg-[#E8EFF4] text-[#0F476A] border-[#B9CBD6]";
                      if (tag.variant === "red") {
                        badgeStyle = "bg-[#F9EDED] text-[#8A3B3B] border-[#DFA9A9]";
                      } else if (tag.variant === "yellow") {
                        badgeStyle =
                          "bg-[#F6EDD9] text-[#A07A2E] border-[#C9B07A]";
                      }
                      return (
                        <span
                          key={tIndex}
                          className={`text-[8.5px] font-mono font-medium px-2 py-0.5 rounded border ${badgeStyle}`}
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
