"use client";

import React from "react";

interface TrustTile {
  title: string;
  description: string;
}

const TRUST_TILES: TrustTile[] = [
  {
    title: "Zero-trust access",
    description: "Identity-verified access with no implicit network trust.",
  },
  {
    title: "Segregation of duties",
    description:
      "Preparer, reviewer, approver and executor independently permissioned.",
  },
  {
    title: "Workload identity",
    description: "Service principals are named actors in the evidence record.",
  },
  {
    title: "Encryption in transit and at rest",
    description: "Stated per deployment rather than as a universal claim.",
  },
  {
    title: "Customer-managed keys",
    description: "Depends on deployment option and approved region.",
  },
  {
    title: "Region-aware residency",
    description:
      "A primary storage region does not imply every lifecycle stage stays in region.",
  },
  {
    title: "Independent certification",
    description:
      "The control framework exists. No SOC, ISO or PCI certification is claimed.",
  },
  {
    title: "Sovereign deployment",
    description:
      "Not currently available. Requirements can be discussed with an architect.",
  },
  {
    title: "Penetration testing",
    description:
      "Conducted through approved partners; reports available under agreement.",
  },
];

export default function TrustProofSection() {
  return (
    <section className="w-full bg-white text-[#0F172A] py-20 px-6 lg:px-12 flex justify-center items-center font-sans">
      <div className="max-w-6xl w-full flex flex-col">
        {/* Top Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-start">
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
                SECURITY, SEGREGATION OF DUTIES, RESIDENCY AND DEPLOYMENT
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight leading-[1.15]">
              Diligence-grade trust proof with exact claim status
            </h2>
          </div>

          {/* Right Subtitle Area */}
          <div className="lg:col-span-5 lg:pt-6 flex items-start">
            <p className="text-gray-600 text-sm lg:text-base leading-relaxed">
              Each control tile states whether it is an architecture
              requirement, a stated implementation status, a roadmap item or
              partner-supported.
            </p>
          </div>
        </div>

        {/* Cards Grid (3 columns x 3 rows) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TRUST_TILES.map((tile, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 flex flex-col justify-between shadow-sm border border-[#DBE3E8] hover:shadow-md transition-shadow"
            >
              <div>
                <h3 className="text-base font-bold text-[#0F172A] mb-2">
                  {tile.title}
                </h3>
                <p className="text-xs lg:text-sm text-gray-600 leading-relaxed">
                  {tile.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
