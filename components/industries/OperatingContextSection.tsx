"use client";

import React from "react";

interface IndustryChangeItem {
  title: string;
  description: string;
}

const changesByIndustry: IndustryChangeItem[] = [
  {
    title: "Entity model",
    description:
      "Legal entities, regulated entities, branches, agencies, business units, franchises, funds, facilities, or operating companies.",
  },
  {
    title: "Jurisdiction / regulation",
    description:
      "Applicable law, regulator, filing authority, licensing environment, public-accountability rules.",
  },
  {
    title: "Workforce model",
    description:
      "Employees, contractors, shift/field workers, clinicians, public servants, network/plant teams, seasonal workers.",
  },
  {
    title: "Core systems",
    description:
      "Core banking, policy/claims, EHR, BSS/OSS, ERP/MES, utility operational systems, POS/commerce, government line-of-business systems.",
  },
  {
    title: "Data sensitivity",
    description:
      "Financial data, personal data, health-related data, operational data, public records, commercially sensitive data.",
  },
  {
    title: "Evidence expectations",
    description:
      "Audit, regulator, board, payer, supplier, public accountability, financial close, procurement.",
  },
  {
    title: "Deployment constraints",
    description:
      "Cloud model, region, sovereign or dedicated requirements, partner dependencies.",
  },
];

const remainsShared: string[] = [
  "Identity, authority, ownership, source truth, event lineage.",
  "Effective-dated policy/rule context and evidence of the decision basis.",
  "Governed workforce/payroll context, approvals, access, evidence.",
  "Coexistence, integrations, governed actions, evidence and source ownership.",
  "Security/privacy controls, classification, access, residency status.",
  "Decision lineage, workflow history, documents, events, evidence manifests.",
  "Explicit deployment/availability status and no blanket promise.",
];

export default function OperatingContextSection() {
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
              OPERATING CONTEXT
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-[32px] font-bold tracking-tight leading-[1.15] mb-6">
            The governance model stays consistent. The operating context does
            not.
          </h2>

          {/* Description */}
          <p className="text-gray-600 text-sm max-w-xl sm:text-base leading-relaxed font-mono">
            Entity structures, workforce models, regulators, data sensitivity,
            supplier ecosystems, operational systems, evidence expectations, and
            deployment constraints differ by industry — without a separate
            architecture for every sector.
          </p>
        </div>

        {/* Two-Column Layout (Equally Divided & Transparent Right Box) */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 border border-[#D9D3C7] gap-10 lg:gap-12">
          {/* Left Column: What Changes By Industry (Framed Card) */}
          <div className="w-full bg-white p-6 sm:p-10 shadow-sm flex flex-col">
            <h3 className="text-xs font-mono font-bold tracking-widest uppercase mb-8 text-[#C59B3F]">
              WHAT CHANGES BY INDUSTRY
            </h3>
            <div className="flex flex-col gap-6">
              {changesByIndustry.map((item, index) => (
                <div key={index} className="flex flex-col">
                  <h4 className="text-sm font-bold text-[#08222F] mb-1">
                    {item.title}
                  </h4>
                  <p className="text-xs text-gray-600 font-mono leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: What Remains Shared (Transparent BG) */}
          <div className="w-full p-6 sm:p-10 flex flex-col">
            <h3 className="text-xs font-mono font-bold tracking-widest uppercase mb-8 text-[#C59B3F]">
              WHAT REMAINS SHARED
            </h3>
            <div className="flex flex-col gap-6">
              {remainsShared.map((text, index) => (
                <div
                  key={index}
                  className="flex flex-col justify-center min-h-[48px]"
                >
                  <p className="text-xs sm:text-sm text-gray-700 font-mono leading-relaxed">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
