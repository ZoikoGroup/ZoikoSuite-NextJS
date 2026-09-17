"use client";

import React from "react";

interface GovernanceCard {
  title: string;
  description: string;
}

const GOVERNANCE_CARDS: GovernanceCard[] = [
  {
    title: "Different obligations",
    description:
      "Regulators, filings, licenses, policies, contracts and control frameworks vary by sector and jurisdiction.",
  },
  {
    title: "Different core systems",
    description:
      "The governance layer must coexist with the transaction, clinical, network, industrial, commerce or public-sector systems already in place.",
  },
  {
    title: "Different authority models",
    description:
      "Signatory limits, segregation of duties, delegated authority, reviewer roles and escalation paths vary by operating model.",
  },
  {
    title: "Different evidence expectations",
    description:
      "The proof required for audit, legal review, regulator inquiry, board oversight or customer assurance is context-dependent.",
  },
];

export default function GovernanceModelConsistencySection() {
  return (
    <section className="w-full bg-white text-[#08222F] py-20 px-6 lg:px-12 flex justify-center items-center font-sans">
      <div className="max-w-6xl w-full flex flex-col">
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-end">
          {/* Left Title Area */}
          <div className="lg:col-span-7 flex flex-col items-start">
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
                WHAT CHANGES BY INDUSTRY
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight leading-[1.15]">
              The governance model stays consistent. The operating context does
              not.
            </h2>
          </div>

          {/* Right Subtitle Area */}
          <div className="lg:col-span-5 flex items-start">
            <p className="text-gray-600 text-sm lg:text-base leading-relaxed">
              A bank, hospital system, manufacturer, utility, retailer, telecom
              operator, insurer, financial-services group and public-sector
              organization do not execute the same workflows. The common control
              model resolves the entity, jurisdiction, authority, obligation,
              evidence and system context that applies to each action.
            </p>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
          {GOVERNANCE_CARDS.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-4 shadow-sm border border-[#D0AA55] border-t-3 border-t-[#D0AA55] flex flex-col"
            >
              <div>
                <h3 className="text-base font-bold text-[#08222F]">
                  {card.title}
                </h3>
                <p className="text-xs lg:text-sm text-gray-600 leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
