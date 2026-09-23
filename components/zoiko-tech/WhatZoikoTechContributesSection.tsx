import React from "react";

export default function WhatZoikoTechContributesSection() {
  const rows = [
    {
      contribution: "Platform engineering",
      proof:
        "Shared engineering discipline for services, data contracts, APIs, events, observability, deployment.",
      handoff: "Platform Foundation / Architecture resources",
    },
    {
      contribution: "Governed AI",
      proof:
        "Domain intelligence designed around policy, evidence, permissions, and human review.",
      handoff: "Trust -> Responsible AI",
    },
    {
      contribution: "Identity & authorization",
      proof:
        "Human and workload identity, policy-aware access, segregation of duties.",
      handoff: "Trust -> Security Overview",
    },
    {
      contribution: "Evidence & assurance",
      proof:
        "Event lineage, governance decisions, integrity controls, evidence packaging patterns.",
      handoff: "Trust -> Evidence Architecture",
    },
    {
      contribution: "Developer & integration layer",
      proof:
        "APIs, webhooks, SDK patterns, sandbox and integration tooling where available.",
      handoff: "ZoikoSuite Integrations + Zoiko Tech developer resources",
    },
    {
      contribution: "Cloud & deployment architecture",
      proof:
        "Deployment, isolation, region, residency, and operational patterns.",
      handoff: "Trust -> Data Residency + Platform Architecture",
    },
  ] as const;

  return (
    <section className="relative w-full bg-white py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start">
        {/* Header Section */}
        <div className="max-w-3xl mb-12">
          {/* Subtitle (Eye tag size: xs) */}
          <span className="text-[#A8843A] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            WHAT ZOIKO TECH CONTRIBUTES TO ZOIKOSUITE
          </span>

          {/* Main Headline (32px for lg devices) */}
          <h1 className="text-3xl lg:text-[32px] font-bold text-[#0b1329] leading-tight tracking-tight">
            Corporate breadth, translated into product credibility
          </h1>
        </div>

        {/* Table Section */}
        <div className="w-full flex flex-col border-t border-gray-300">
          {/* Table Header */}
          <div className="w-full pb-4 pt-4 border-b border-gray-300 hidden md:flex items-center text-xs font-semibold tracking-wider text-gray-500 uppercase">
            <div className="w-3/12">CONTRIBUTION</div>
            <div className="w-5/12">BUYER-READABLE PROOF</div>
            <div className="w-4/12">CANONICAL HANDOFF</div>
          </div>

          {/* Table Rows */}
          {rows.map((row, index) => (
            <div
              key={index}
              className="w-full py-6 border-b border-gray-300 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-0"
            >
              {/* Contribution */}
              <div className="w-full md:w-3/12 text-[#0b1329] text-base font-semibold tracking-tight pr-4">
                <span className="md:hidden text-xs font-semibold text-gray-400 uppercase block mb-1">
                  Contribution
                </span>
                {row.contribution}
              </div>

              {/* Buyer-Readable Proof */}
              <div className="w-full md:w-5/12 text-gray-600 font-light leading-relaxed text-[16.5px] pr-4">
                <span className="md:hidden text-xs font-semibold text-gray-400 uppercase block mb-1">
                  Buyer-Readable Proof
                </span>
                {row.proof}
              </div>

              {/* Canonical Handoff */}
              <div className="w-full md:w-4/12 text-gray-600 font-light leading-relaxed text-[16.5px]">
                <span className="md:hidden text-xs font-semibold text-gray-400 uppercase block mb-1">
                  Canonical Handoff
                </span>
                {row.handoff}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
