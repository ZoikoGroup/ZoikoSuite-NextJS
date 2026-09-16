"use client";

import React from "react";

interface StakeholderRow {
  role: string;
  title: string;
  description: string;
  highlightBorder?: boolean;
}

interface BottomCard {
  category: string;
  title: string;
  description?: string;
  items?: string[];
  statusText: string;
  statusVariant: "published" | "not-published" | "info";
  bgVariant?: "default" | "tinted" | "light-beige";
}

const STAKEHOLDERS: StakeholderRow[] = [
  {
    role: "CFO",
    title: "Financial truth and entity accountability",
    description:
      "Entity-aware finance, close status, governed approvals, exception evidence, Shadow Ledger comparison.",
  },
  {
    role: "COO",
    title: "Operational control across functions",
    description:
      "Obligation queues, approvals, ownership, escalations, integration health, status views.",
  },
  {
    role: "CRO / COMPLIANCE",
    title: "Obligation ownership and evidence",
    description:
      "Rule and obligation basis, entity and jurisdiction context, due dates, escalation, evidence manifests.",
  },
  {
    role: "GENERAL COUNSEL",
    title: "Authority and legal execution",
    description:
      "Contract lineage, signatory rules, clause obligations, delegated authority, decision history.",
  },
  {
    role: "CHRO",
    title: "Workforce and payroll governance",
    description:
      "Worker and entity context, effective-dated policy, payroll explainability, exception controls.",
  },
  {
    role: "CIO / CISO",
    title: "One governed control and integration model",
    description:
      "APIs and events, workload identity, segregation of duties, encryption and residency labels, deployment options.",
  },
  {
    role: "AUDIT COMMITTEE",
    title: "Evidence that the control operated",
    description:
      "Decision basis, workflow history, document lineage, operational events. Read-only by default, with no operational approval authority.",
    highlightBorder: true,
  },
];

const BOTTOM_CARDS: BottomCard[] = [
  {
    category: "Governance and controls",
    title: "Governance Platform",
    items: ["Governance Platform", "Authority and segregation", "Core modules"],
    statusText: "PUBLISHED",
    statusVariant: "published",
  },
  {
    category: "Architecture and integration",
    title: "Platform Foundation",
    items: [
      "Platform Foundation",
      "Deployment options",
      "Migration & Shadow Mode",
    ],
    statusText: "PUBLISHED",
    statusVariant: "published",
  },
  {
    category: "Industry context",
    title: "Financial Service",
    items: [
      "Financial Service",
      "Solve Critical Challenges",
      "Organization Type",
    ],
    statusText: "PUBLISHED",
    statusVariant: "published",
  },
  {
    category: "Role destinations",
    title: "CFOs",
    items: ["CFOs", "General Counsel", "Leadership teams"],
    statusText: "PUBLISHED",
    statusVariant: "published",
  },
  {
    category: "Banking customer proof",
    title: "Not published",
    description:
      'No approved banking customer story exists. No anonymised composite, representative outcome or unnamed "tier-1 bank" reference is substituted.',
    statusText: "NO APPROVED RECORD",
    statusVariant: "not-published",
    bgVariant: "light-beige",
  },
  {
    category: "Professional boundary",
    title:
      "No regulated legal, tax, accounting, audit or prudential advice is provided.",
    description:
      "No supervisory approval, capital treatment, compliance certification or regulatory outcome is determined or guaranteed.",
    statusText: "APPLIES TO THIS PAGE",
    statusVariant: "info",
    bgVariant: "tinted",
  },
];

export default function ExecutiveAlignmentSection() {
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
                EXECUTIVE ALIGNMENT
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight text-[#0F172A] leading-[1.15]">
              Seven stakeholders, one control model
            </h2>
          </div>

          {/* Right Subtitle Area */}
          <div className="lg:col-span-5 lg:pt-6 flex items-start">
            <p className="text-gray-600 text-sm lg:text-base leading-relaxed">
              Each buying stakeholder sees the same governed action from their
              own accountability position.
            </p>
          </div>
        </div>

        {/* Stakeholder Individual Cards Container */}
        <div className="flex flex-col gap-3.5 mb-12">
          {STAKEHOLDERS.map((row, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-5 lg:px-8 lg:py-5 shadow-sm border border-[#E2E8F0] grid grid-cols-1 lg:grid-cols-12 items-center gap-4 border-l-4 ${
                row.highlightBorder
                  ? "border-l-[#C59B3F]"
                  : "border-l-[#1E3A5F]"
              }`}
            >
              {/* Role Name */}
              <div className="lg:col-span-2">
                <span className="text-xs font-mono font-bold tracking-wider text-[#1E3A5F]">
                  {row.role}
                </span>
              </div>

              {/* Title */}
              <div className="lg:col-span-4">
                <h3 className="text-sm font-bold text-[#0F172A]">
                  {row.title}
                </h3>
              </div>

              {/* Description */}
              <div className="lg:col-span-6">
                <p className="text-xs lg:text-sm text-gray-600 leading-relaxed">
                  {row.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BOTTOM_CARDS.map((card, index) => {
            const isTinted = card.bgVariant === "tinted";
            const isLightBeige = card.bgVariant === "light-beige";
            return (
              <div
                key={index}
                className={`rounded-2xl p-6 flex flex-col justify-between shadow-sm border ${
                  isTinted
                    ? "bg-[#F7F3EA] border-[#E8DFD0]"
                    : isLightBeige
                      ? "bg-[#F7F5F0] border-[#E2E8F0]"
                      : "bg-white border-[#E2E8F0]"
                }`}
              >
                <div className="flex flex-col gap-3">
                  <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-[#C59B3F]">
                    {card.category}
                  </span>

                  <h3 className="text-sm font-bold text-[#0F172A] leading-snug">
                    {card.title}
                  </h3>

                  {card.description && (
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {card.description}
                    </p>
                  )}

                  {card.items && (
                    <ul className="flex flex-col gap-1 text-xs text-gray-600">
                      {card.items.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center">
                  {card.statusVariant === "published" && (
                    <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded border bg-[#EAF5F0] text-[#1E7A5A] border-[#1E7A5A]">
                      ● PUBLISHED
                    </span>
                  )}
                  {card.statusVariant === "not-published" && (
                    <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded border bg-[#FBF2DF] text-[#9C6B12] border-[#9C6B12]">
                      ● NO APPROVED RECORD
                    </span>
                  )}
                  {card.statusVariant === "info" && (
                    <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded border bg-[#EFF2F4] text-[#5D6B75] border-[#5D6B75]">
                      ● APPLIES TO THIS PAGE
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
