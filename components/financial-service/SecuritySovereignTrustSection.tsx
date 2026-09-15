"use client";

import React from "react";

interface ControlItem {
  title: string;
  description: string;
}

const CONTROLS: ControlItem[] = [
  {
    title: "Zero-trust architecture",
    description: "Identity-verified access with no implicit network trust.",
  },
  {
    title: "Identity & segregation of duties",
    description:
      "Role, attribute, entity and delegation controls with SoD evaluation.",
  },
  {
    title: "Encryption in transit and at rest",
    description:
      "Status is stated per deployment rather than as a universal claim.",
  },
  {
    title: "Customer-managed key custody",
    description: "Depends on deployment option and approved region.",
  },
  {
    title: "Region-aware residency",
    description:
      "Primary storage region does not imply all lifecycle stages stay in region.",
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
    title: "Tamper-evident evidence chains",
    description:
      "Append-only records with cryptographic validation where implemented.",
  },
  {
    title: "Third-party penetration testing",
    description:
      "Conducted through approved partners; reports available under agreement.",
  },
];

export default function SecuritySovereignTrustSection() {
  return (
    <section className="w-full bg-white py-16 md:py-24 text-[#0F172A] font-sans flex justify-center items-center px-4">
      <div className="w-full max-w-6xl mx-auto flex flex-col gap-12">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-4 h-[2px] bg-[#A07A2E]" />
              <span className="text-[11px] font-mono font-bold tracking-widest text-[#A07A2E] uppercase">
                SECURITY & SOVEREIGN TRUST
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl max-w-xl md:text-[40px] font-bold text-[#0F172A] tracking-tight leading-[1.15]">
              Every control tile carries its claim status
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              Architecture requirement, stated implementation status, roadmap
              item or partner-supported — labelled per tile, never averaged into
              a posture score.
            </p>
          </div>
        </div>

        {/* Controls Grid (3 columns, 3 rows) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {CONTROLS.map((control, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-5 sm:p-6 shadow-sm border border-[#DBE3E8] flex flex-col justify-between"
            >
              <div className="flex flex-col gap-1.5">
                <h3
                  className="font-bold text-[#0F172A] leading-snug"
                  style={{ fontSize: "13px" }}
                >
                  {control.title}
                </h3>
                <p
                  className="text-[#475569] leading-relaxed"
                  style={{ fontSize: "11px" }}
                >
                  {control.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
