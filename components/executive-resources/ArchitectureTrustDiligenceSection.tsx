"use client";

import React from "react";

interface TrustCard {
  category: string;
  isNotPublished?: boolean;
  title?: string;
  links?: string[];
  description?: string;
  badge: {
    text: string;
    type: "green" | "yellow" | "outline";
  };
  highlighted?: boolean;
}

const TRUST_CARDS: TrustCard[] = [
  {
    category: "Governance and controls",
    links: [
      "Governance Platform",
      "Authority and segregation",
      "Evidence and audit readiness",
    ],
    badge: { text: "PUBLISHED", type: "green" },
  },
  {
    category: "Architecture and data",
    links: [
      "Platform Foundation",
      "Data location and lifecycle",
      "API and integration states",
    ],
    badge: { text: "PUBLISHED", type: "green" },
  },
  {
    category: "Solutions and challenges",
    links: ["Solve Critical Challenges", "Modernize Operations", "Expansion"],
    badge: { text: "PUBLISHED", type: "green" },
  },
  {
    category: "Security and privacy",
    links: [
      "Security overview",
      "Data Processing Agreement PDF • New tab",
      "Subprocessors",
      "Accessibility",
    ],
    badge: { text: "READINESS - NOT CERTIFIED", type: "yellow" },
  },
  {
    category: "Solution brief",
    isNotPublished: true,
    title: "Not published",
    description:
      "The publication-gated solution brief has no approved asset. No download, preview or request form is offered, because each would imply the asset exists.",
    badge: { text: "PUBLICATION GATED", type: "yellow" },
  },
  {
    category: "Professional boundary",
    description:
      "No legal, tax, accounting, audit or regulatory advice is provided, and no guaranteed savings, return or compliance outcome. Qualified professionals remain responsible for regulated judgment.",
    badge: { text: "APPLIES TO THIS PAGE", type: "outline" },
    highlighted: true,
  },
];

export default function ArchitectureTrustDiligenceSection() {
  return (
    <section className="w-full bg-white py-16 md:py-24 text-[#0F172A] font-sans">
      <div className="w-full max-w-6xl mx-auto px-4 text-left">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end mb-12">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-4 h-[2px] bg-[#A07A2E]" />
              <span className="text-[11px] font-mono font-bold tracking-widest text-[#A07A2E] uppercase">
                ARCHITECTURE AND TRUST DILIGENCE
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-[40px] font-bold text-[#0F172A] tracking-tight leading-[1.15]">
              Current materials, and two suppressed blocks
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              What exists is linked. What does not exist is stated as absent
              rather than represented by a placeholder.
            </p>
          </div>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TRUST_CARDS.map((card, idx) => (
            <div
              key={idx}
              className={`rounded-3xl p-8 border flex flex-col justify-between transition-all ${
                card.highlighted
                  ? "bg-[#F7F5F0] border-[#D0AA55]/50 shadow-sm"
                  : "bg-white border-[#E2E8F0] shadow-sm"
              }`}
            >
              <div>
                <h3 className="text-[11px] font-mono font-bold tracking-widest text-[#A07A2E] uppercase mb-4">
                  {card.category}
                </h3>

                {card.isNotPublished && (
                  <h4 className="text-base font-bold text-[#0F172A] mb-2">
                    {card.title}
                  </h4>
                )}

                {card.links && (
                  <ul className="space-y-2.5 mb-6">
                    {card.links.map((link, linkIdx) => (
                      <li key={linkIdx}>
                        <a
                          href="#link"
                          onClick={(e) => e.preventDefault()}
                          className="text-xs sm:text-sm font-medium text-[#0F172A] hover:underline"
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}

                {card.description && (
                  <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed mb-6">
                    {card.description}
                  </p>
                )}
              </div>

              <div>
                <span
                  className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] font-mono font-bold tracking-wider uppercase ${
                    card.badge.type === "green"
                      ? "bg-[#E6F4EA] text-[#137333]"
                      : card.badge.type === "yellow"
                        ? "bg-[#F6EDD9] text-[#A07A2E]"
                        : "bg-white border border-[#CBD5E1] text-[#475569]"
                  }`}
                >
                  {card.badge.type === "green" && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#137333]" />
                  )}
                  {card.badge.type === "yellow" && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#A07A2E]" />
                  )}
                  {card.badge.text}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
