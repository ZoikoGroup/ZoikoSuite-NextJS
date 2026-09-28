"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

interface StatusBadgeCard {
  title: string;
  description: string;
  badgeText: string;
  badgeBg: string;
  badgeTextColor: string;
  badgeBorder: string;
}

interface ProofLinkRow {
  title: string;
  description: string;
  linkText: string;
}

const statusCards: StatusBadgeCard[] = [
  {
    title: "Current capability",
    description: "Implemented and source-verified for stated scope.",
    badgeText: "CURRENT CAPABILITY",
    badgeBg: "bg-[#E6F4EA]",
    badgeTextColor: "text-[#137333]",
    badgeBorder: "border-[#CEEAD6]",
  },
  {
    title: "Architecture requirement",
    description: "Required design/control pattern; not a certification.",
    badgeText: "ARCHITECTURE REQUIREMENT",
    badgeBg: "bg-[#E8F0FE]",
    badgeTextColor: "text-[#1A73E8]",
    badgeBorder: "border-[#D2E3FC]",
  },
  {
    title: "Deployment-dependent",
    description: "Availability varies by deployment/region/configuration.",
    badgeText: "DEPLOYMENT-DEPENDENT",
    badgeBg: "bg-[#FEF7E0]",
    badgeTextColor: "text-[#B06000]",
    badgeBorder: "border-[#FEEFC3]",
  },
  {
    title: "Partner-supported",
    description: "Depends on an approved partner/process.",
    badgeText: "PARTNER-SUPPORTED",
    badgeBg: "bg-[#FEF7E0]",
    badgeTextColor: "text-[#B06000]",
    badgeBorder: "border-[#FEEFC3]",
  },
  {
    title: "Planned / roadmap",
    description: "Not generally available; no primary conversion claim.",
    badgeText: "PLANNED / ROADMAP",
    badgeBg: "bg-[#F1F3F4]",
    badgeTextColor: "text-[#5F6368]",
    badgeBorder: "border-[#E8EAED]",
  },
  {
    title: "Not published / unknown",
    description: "Source is unresolved or not public.",
    badgeText: "NOT PUBLISHED",
    badgeBg: "bg-[#F1F3F4]",
    badgeTextColor: "text-[#5F6368]",
    badgeBorder: "border-[#E8EAED]",
  },
  {
    title: "Verified customer proof",
    description: "Approved named proof with source/date/scope.",
    badgeText: "VERIFIED PROOF",
    badgeBg: "bg-[#FEF7E0]",
    badgeTextColor: "text-[#B06000]",
    badgeBorder: "border-[#FEEFC3]",
  },
];

const proofRows: ProofLinkRow[] = [
  {
    title: "Architecture proof",
    description:
      "Common governance model and integration/coexistence boundaries.",
    linkText: "Platform architecture",
  },
  {
    title: "Evidence Architecture",
    description:
      "Decision/workflow/document/event/evidence lineage — not a certification by itself.",
    linkText: "Evidence Architecture",
  },
  {
    title: "Security / Privacy",
    description:
      "Security, identity, privacy, residency, and deployment diligence — claim status and scope mandatory.",
    linkText: "Security Overview",
  },
  {
    title: "Independent proof",
    description:
      "Certifications, attestations, partner validations where public — exact scope/date/status.",
    linkText: "Compliance Overview",
  },
];

export default function EvidenceTrustValidationSection() {
  const row1 = statusCards.slice(0, 4);
  const row2 = statusCards.slice(4, 7);

  return (
    <section className="w-full bg-[#F7F5F0] text-[#08222F] py-20 px-6 lg:px-12 font-sans flex justify-center">
      <div className="max-w-6xl w-full flex flex-col items-start">
        {/* Header / Intro text container */}
        <div className="flex flex-col items-start mb-12">
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
              EVIDENCE, TRUST & VALIDATION
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-[36px] font-bold tracking-tight leading-[1.15]">
            Claim status, stated explicitly — for every proof surface.
          </h2>
        </div>

        {/* First Row: 4 Cards */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {row1.map((card, index) => (
            <div
              key={index}
              className="bg-white border border-[#D9D3C7] rounded-3xl p-6 flex flex-col justify-between shadow-sm"
            >
              <div>
                <h3 className="text-base font-bold text-[#08222F] mb-2">
                  {card.title}
                </h3>
                <p className="text-xs text-gray-600 font-mono leading-relaxed mb-6">
                  {card.description}
                </p>
              </div>
              <div>
                <span
                  className={`inline-block px-3 py-1 rounded text-[10px] font-mono font-bold tracking-wider uppercase border ${card.badgeBg} ${card.badgeTextColor} ${card.badgeBorder}`}
                >
                  {card.badgeText}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Second Row: 3 Cards */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {row2.map((card, index) => (
            <div
              key={index}
              className="bg-white border border-[#D9D3C7] rounded-3xl p-6 flex flex-col justify-between shadow-sm"
            >
              <div>
                <h3 className="text-base font-bold text-[#08222F] mb-2">
                  {card.title}
                </h3>
                <p className="text-xs text-gray-600 font-mono leading-relaxed mb-6">
                  {card.description}
                </p>
              </div>
              <div>
                <span
                  className={`inline-block px-3 py-1 rounded text-[10px] font-mono font-bold tracking-wider uppercase border ${card.badgeBg} ${card.badgeTextColor} ${card.badgeBorder}`}
                >
                  {card.badgeText}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Container Card with Links */}
        <div className="w-full bg-white border border-[#D9D3C7] rounded-3xl p-8 shadow-sm">
          <div className="flex flex-col divide-y divide-[#D9D3C7]">
            {proofRows.map((row, index) => (
              <div
                key={index}
                className={`py-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 ${
                  index === 0
                    ? "pt-0"
                    : index === proofRows.length - 1
                      ? "pb-0"
                      : ""
                }`}
              >
                <div className="flex flex-col max-w-2xl">
                  <h4 className="text-sm font-bold text-[#08222F] mb-1">
                    {row.title}
                  </h4>
                  <p className="text-xs text-gray-600 font-mono leading-relaxed">
                    {row.description}
                  </p>
                </div>
                <div>
                  <a
                    href="#"
                    className="inline-flex items-center gap-1.5 text-xs font-bold font-mono text-[#08222F] hover:text-[#C59B3F] transition-colors group"
                  >
                    <span>{row.linkText}</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
