"use client";

import React from "react";

interface IntegrationCard {
  eyebrow: string;
  title: string;
  description: string;
}

const integrationCards: IntegrationCard[] = [
  {
    eyebrow: "OVERLAY",
    title: "Governance overlay",
    description:
      "Start by governing selected actions/evidence around incumbent systems: source system -> governed action/policy -> evidence -> downstream system.",
  },
  {
    eyebrow: "CONNECTIVITY",
    title: "API / event integration",
    description:
      "Versioned APIs/events, provenance, identity, idempotency, error handling for finance, HR/payroll, contracts, compliance, and specialist industry systems.",
  },
  {
    eyebrow: "MAPPING",
    title: "Canonical mapping",
    description:
      "Map external objects into governed enterprise context where product architecture supports it — no data-model completeness claim unless approved.",
  },
  {
    eyebrow: "VALIDATION",
    title: "Parallel / shadow validation",
    description:
      "Compare outputs/evidence before cutover where supported; status identifies which shadow-mode capabilities exist.",
  },
  {
    eyebrow: "SEQUENCE",
    title: "Progressive replacement",
    description:
      'Replace only where justified and supported; coexist elsewhere — no "rip and replace" default narrative.',
  },
  {
    eyebrow: "ECOSYSTEM",
    title: "Partner ecosystem",
    description:
      "Use partners where industry/system expertise is required; partner status, responsibility boundary, and data flow explicit.",
  },
];

export default function IntegrationAndCoexistenceSection() {
  return (
    <section className="w-full bg-white text-[#08222F] py-20 px-6 lg:px-12 font-sans flex justify-center">
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
              INTEGRATION & COEXISTENCE
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-[32px] font-bold tracking-tight leading-[1.15]">
            How does this fit with the specialist systems we already depend on?
          </h2>
        </div>

        {/* 3-Column Grid (6 Cards Total) */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {integrationCards.map((card, index) => (
            <div
              key={index}
              className="bg-white border border-[#D9D3C7] rounded-3xl p-8 flex flex-col justify-between shadow-sm transition-all hover:border-[#08222F]"
            >
              <div>
                {/* Card Eyebrow */}
                <span className="text-[10px] font-mono font-bold tracking-widest text-[#08222F] uppercase mb-3 block">
                  {card.eyebrow}
                </span>

                {/* Card Title */}
                <h3 className="text-lg font-bold text-[#08222F] mb-4">
                  {card.title}
                </h3>

                {/* Card Description */}
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-mono">
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
