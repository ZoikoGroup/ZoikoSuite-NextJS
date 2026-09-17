"use client";

import React from "react";

interface TrustAreaItem {
  title: string;
  description: string;
  subtext: string;
  badge: string;
  badgeVariant: "blue" | "red" | "green" | "yellow" | "purple" | "gray";
  isHighlighted?: boolean;
}

const READINESS_ITEMS: TrustAreaItem[] = [
  {
    title: "Identity & access",
    description:
      "SSO, MFA, workload identity, role/attribute/entity controls and segregation of duties.",
    subtext:
      "Certification-neutral: architecture and implementation status only.",
    badge: "ARCHITECTURE REQUIREMENT",
    badgeVariant: "blue",
  },
  {
    title: "Audit & accountability",
    description:
      "Administrative and governance events linked to actor, source, object, decision and evidence.",
    subtext: "Product capability and status.",
    badge: "IMPLEMENTED",
    badgeVariant: "green",
  },
  {
    title: "NIST CSF 2.0",
    description: "Optional reference mapping for cybersecurity risk outcomes.",
    subtext: "Reference framework only — no certification is claimed.",
    badge: "CERTIFICATION NOT VALIDATED",
    badgeVariant: "red",
  },
  {
    title: "NIST SP 800-53",
    description: "Control-evidence mapping where configured and validated.",
    subtext: "Evidence mapping and support, not blanket compliance.",
    badge: "IN VALIDATION",
    badgeVariant: "yellow",
  },
  {
    title: "FedRAMP",
    description:
      "Scope depends on the agency use case, and only agencies determine applicability.",
    subtext: "Never inferred. No authorization status is claimed here.",
    badge: "AGENCY DETERMINATION REQUIRED",
    badgeVariant: "purple",
  },
  {
    title: "ATO / agency authorization",
    description:
      "Evidence-package and readiness support may be described only where implemented.",
    subtext: 'No "ATO ready" or "has ATO" claim is made.',
    badge: "AGENCY DETERMINATION REQUIRED",
    badgeVariant: "purple",
  },
  {
    title: "Section 508 / accessibility",
    description:
      "WCAG 2.2 AA product design with procurement evidence fields; ACR or VPAT status where available.",
    subtext: "Section 508 conformity is not claimed without tested evidence.",
    badge: "IN VALIDATION",
    badgeVariant: "yellow",
  },
  {
    title: "Data residency / sovereign options",
    description:
      "Region, storage, processing, backup, replication, key custody and support-access status by deployment.",
    subtext: "Availability varies by deployment and jurisdiction.",
    badge: "AVAILABLE BY DEPLOYMENT",
    badgeVariant: "yellow",
  },
  {
    title: "Supply chain",
    description:
      "Signed artifacts, scanning, provenance and SBOM as engineering and implementation-status items.",
    subtext: "Status must be explicit; no badge is displayed.",
    badge: "PLANNED",
    badgeVariant: "gray",
  },
];

export default function GovernmentSecurityReadinessSection() {
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
                SECURITY, PRIVACY, ACCESSIBILITY AND AUTHORIZATION READINESS
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight leading-[1.15]">
              Eight states, and no badge without evidence
            </h2>
          </div>

          {/* Right Subtitle Area */}
          <div className="lg:col-span-5 flex items-start">
            <p className="text-gray-600 text-sm lg:text-base leading-relaxed">
              Every sensitive public-sector trust claim carries exactly one of
              these states. Nothing is asserted that an agency alone can
              determine.
            </p>
          </div>
        </div>

        {/* Readiness Items List */}
        <div className="flex flex-col gap-3">
          {READINESS_ITEMS.map((item, index) => {
            let badgeClass = "bg-[#EBF3F8] text-[#2A6386] border-[#2A6386]/30";
            if (item.badgeVariant === "red") {
              badgeClass = "bg-[#F9EDED] text-[#8A3B3B] border-[#DFA9A9]";
            } else if (item.badgeVariant === "green") {
              badgeClass = "bg-[#EFF8F4] text-[#1E7A5A] border-[#B6D8C7]";
            } else if (item.badgeVariant === "yellow") {
              badgeClass = "bg-[#F6EDD9] text-[#A07A2E] border-[#C9B07A]";
            } else if (item.badgeVariant === "purple") {
              badgeClass = "bg-purple-50 text-purple-700 border-purple-200";
            } else if (item.badgeVariant === "gray") {
              badgeClass = "bg-[#EEF2F5] text-[#5A6D79] border-[#DBE3E8]";
            }

            return (
              <div
                key={index}
                className="rounded-xl p-5 lg:p-6 shadow-sm border flex flex-col bg-white border-[#DBE3E8] lg:flex-row lg:items-center justify-between gap-6 transition-colors"
              >
                {/* Left: Title & Description */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:items-center w-full">
                  <div className="lg:col-span-4">
                    <h3 className="text-sm lg:text-base font-bold text-[#0F172A]">
                      {item.title}
                    </h3>
                  </div>
                  <div className="lg:col-span-8 space-y-0.5">
                    <p className="text-xs lg:text-sm text-gray-700 font-mono leading-relaxed">
                      {item.description}
                    </p>
                    <p className="text-[11px] text-[#A07A2E] font-mono italic">
                      {item.subtext}
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
