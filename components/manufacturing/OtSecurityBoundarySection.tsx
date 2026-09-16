"use client";

import React from "react";

interface TrustAreaItem {
  title: string;
  description: string;
  badge: string;
  badgeVariant: "blue" | "red" | "green" | "yellow" | "gray";
  isHighlighted?: boolean;
}

const TRUST_AREAS: TrustAreaItem[] = [
  {
    title: "Identity & segregation of duties",
    description:
      "Human and service identity, role, attribute, entity and site authorization, delegation and conflict checks.",
    badge: "ARCHITECTURE REQUIREMENT",
    badgeVariant: "blue",
  },
  {
    title: "OT boundary",
    description:
      "Business-governance workflows explicitly separated from machine and control-system operation.",
    badge: "MANDATORY BOUNDARY",
    badgeVariant: "red",
    isHighlighted: true,
  },
  {
    title: "Integration security",
    description:
      "Authenticated service connections, least privilege, scoped credentials, audit events, error isolation.",
    badge: "IMPLEMENTATION STATUS",
    badgeVariant: "green",
  },
  {
    title: "Data classification",
    description:
      "Restricted manufacturing, supplier, workforce, finance, legal and security data classes with policy-aware access.",
    badge: "CAPABILITY DEPENDENT",
    badgeVariant: "yellow",
  },
  {
    title: "Encryption",
    description:
      "At-rest and in-transit, with field-level protection where implemented.",
    badge: "IMPLEMENTATION STATUS",
    badgeVariant: "green",
  },
  {
    title: "Residency / deployment",
    description:
      "Region-aware storage, processing and backup. Dedicated or sovereign options only where available.",
    badge: "BY DEPLOYMENT & JURISDICTION",
    badgeVariant: "yellow",
  },
  {
    title: "Supply chain security",
    description:
      "Signed artifacts, vulnerability scanning, provenance and SBOM where implemented.",
    badge: "ENGINEERING STATUS · NO BADGE",
    badgeVariant: "gray",
  },
  {
    title: "Telemetry",
    description:
      "Governance and security decisions linked to audit and evidence systems.",
    badge: "ARCHITECTURE REQUIREMENT",
    badgeVariant: "blue",
  },
];

export default function OtSecurityBoundarySection() {
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
                OT SECURITY BOUNDARY AND ENTERPRISE TRUST
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight leading-[1.15]">
              Eight trust areas, each with its claim status
            </h2>
          </div>

          {/* Right Subtitle Area */}
          <div className="lg:col-span-5 flex items-start">
            <p className="text-gray-600 text-sm lg:text-base leading-relaxed">
              ISA/IEC 62443 and the NIST Manufacturing Profile shape
              expectations here as external context only — no certification or
              conformance is claimed.
            </p>
          </div>
        </div>

        {/* Trust Areas List */}
        <div className="flex flex-col gap-4">
          {TRUST_AREAS.map((item, index) => {
            let badgeClass = "bg-[#EBF3F8] text-[#2A6386] border-[#2A6386]";
            if (item.badgeVariant === "red") {
              badgeClass = "bg-[#F9EDED] text-[#8A3B3B] border-[#DFA9A9]";
            } else if (item.badgeVariant === "green") {
              badgeClass = "bg-[#EFF8F4] text-[#1E7A5A] border-[#B6D8C7]";
            } else if (item.badgeVariant === "yellow") {
              badgeClass = "bg-[#F6EDD9] text-[#A07A2E] border-[#C9B07A]";
            } else if (item.badgeVariant === "gray") {
              badgeClass = "bg-[#EEF2F5] text-[#5A6D79] border-[#DBE3E8]";
            }

            return (
              <div
                key={index}
                className={`rounded-xl p-5 lg:p-6 shadow-sm border flex flex-col bg-white border-[#DBE3E8] lg:flex-row lg:items-center justify-between gap-6 transition-colors
                  `}
                style={{
                  borderLeft: item.isHighlighted
                    ? "4px solid #8A3B3B"
                    : undefined,
                }}
              >
                {/* Left: Title & Description */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:items-center w-full">
                  <div className="lg:col-span-4">
                    <h3 className="text-sm lg:text-base font-bold text-[#0F172A]">
                      {item.title}
                    </h3>
                  </div>
                  <div className="lg:col-span-8">
                    <p className="text-xs lg:text-sm text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Right: Badge */}
                <div className="shrink-0 self-start lg:self-center">
                  <span
                    className={`inline-block px-3 py-1 rounded-md text-[10px] font-mono font-bold tracking-wider border ${badgeClass}`}
                  >
                    {item.badge}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
