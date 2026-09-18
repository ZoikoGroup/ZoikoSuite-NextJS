"use client";

import React from "react";

interface LadderCard {
  category: string;
  title?: string;
  description?: string;
  items?: string[];
  badge: string;
  badgeVariant: "green" | "yellow" | "gray";
  isUnpublished?: boolean;
  isBoundary?: boolean;
}

const LADDER_CARDS: LadderCard[] = [
  {
    category: "Platform and governance",
    items: ["Platform overview", "Governance Platform", "Core modules"],
    badge: "● PUBLISHED",
    badgeVariant: "green",
  },
  {
    category: "Architecture and adoption",
    items: [
      "Platform Foundation",
      "Deployment options",
      "Migration & Shadow Mode",
    ],
    badge: "● PUBLISHED",
    badgeVariant: "green",
  },
  {
    category: "Evaluation resources",
    items: ["Solution Brief", "Executive Resources", "Platform Tour"],
    badge: "● PUBLISHED",
    badgeVariant: "green",
  },
  {
    category: "Cross-industry solutions",
    items: ["Solve Critical Challenges", "Modernize Operations", "Expansion"],
    badge: "● PUBLISHED",
    badgeVariant: "green",
  },
  {
    category: "Customer proof",
    title: "Not published",
    description:
      "No approved customer story, logo, reference or outcome figure exists for any sector. None is substituted with an anonymised composite.",
    badge: "● NO APPROVED RECORD",
    badgeVariant: "yellow",
    isUnpublished: true,
  },
  {
    category: "Cross-sector boundary",
    description:
      "No certification, attestation or blanket compliance is claimed for any regime. No specialist transaction, clinical, network, industrial-control, commerce or government service-delivery system is replaced.",
    badge: "● APPLIES TO ALL NINE SECTORS",
    badgeVariant: "gray",
    isBoundary: true,
  },
];

export default function EnterpriseDiligenceRoutesSection() {
  return (
    <section className="w-full bg-[#F7F5F0] text-[#08222F] py-20 px-6 lg:px-12 flex justify-center items-center font-sans">
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
                PROOF AND RESOURCES
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight leading-[1.15]">
              Enterprise diligence routes
            </h2>
          </div>

          {/* Right Subtitle Area */}
          <div className="lg:col-span-5 flex items-start">
            <p className="text-gray-600 text-sm lg:text-base leading-relaxed">
              Architecture and product proof in place of logo walls and outcome
              percentages.
            </p>
          </div>
        </div>

        {/* 3x2 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {LADDER_CARDS.map((card, index) => {
            let badgeClass = "bg-[#EFF8F4] text-[#1E7A5A] border-[#B6D8C7]";
            if (card.badgeVariant === "yellow") {
              badgeClass = "bg-[#F6EDD9] text-[#A07A2E] border-[#C9B07A]";
            } else if (card.badgeVariant === "gray") {
              badgeClass = "bg-[#EEF2F5] text-[#5A6D79] border-[#DBE3E8]";
            }

            let containerStyle = "bg-white border-[#DBE3E8]";
            if (card.isUnpublished) {
              containerStyle = "bg-[#F7F5F0] border-dashed border-[#DBE3E8]";
            } else if (card.isBoundary) {
              containerStyle = "bg-[#F6EDD9] border-[#E8D6AC]";
            }

            return (
              <div
                key={index}
                className={`rounded-xl p-6 shadow-sm border flex flex-col justify-between ${containerStyle}`}
              >
                <div>
                  <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-[#A07A2E] block mb-3">
                    {card.category}
                  </span>

                  {card.title && (
                    <h3 className="text-xl font-bold text-[#0F172A] mb-2">
                      {card.title}
                    </h3>
                  )}

                  {card.items && (
                    <ul className="flex flex-col gap-2 mb-6">
                      {card.items.map((item, itemIdx) => (
                        <li
                          key={itemIdx}
                          className="text-sm font-medium text-[#0F172A]"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}

                  {card.description && (
                    <p className="text-xs lg:text-sm text-gray-600 leading-relaxed mb-6">
                      {card.description}
                    </p>
                  )}
                </div>

                <div>
                  <span
                    className={`inline-block px-2.5 py-1 rounded text-[10px] font-mono font-bold tracking-wider border ${badgeClass}`}
                  >
                    {card.badge}
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
