"use client";

import React from "react";

interface DiligenceCard {
  category: string;
  items: string[];
  statusText: string;
  statusVariant: "green" | "amber" | "default";
  cardVariant?: "default" | "dashed" | "colored-transparent" | "colored-amber";
}

const DILIGENCE_CARDS: DiligenceCard[] = [
  {
    category: "Governance and controls",
    items: ["Governance Platform", "Authority and segregation", "Core modules"],
    statusText: "· PUBLISHED",
    statusVariant: "green",
  },
  {
    category: "Architecture and integration",
    items: [
      "Platform Foundation",
      "Deployment options",
      "Migration & Shadow Mode",
    ],
    statusText: "· PUBLISHED",
    statusVariant: "green",
  },
  {
    category: "Industry context",
    items: [
      "All industries",
      "Industry Solutions",
      "Insurance for payer questions",
    ],
    statusText: "· PUBLISHED",
    statusVariant: "green",
  },
  {
    category: "Evaluation resources",
    items: ["Solution Brief", "Executive Resources", "Platform Tour"],
    statusText: "· PUBLISHED",
    statusVariant: "green",
  },
  {
    category: "Healthcare customer proof",
    items: [
      "Not published",
      "No approved health system or provider customer story exists. No anonymised composite, facility count, cost figure or representative outcome is substituted.",
    ],
    statusText: "· NO APPROVED RECORD",
    statusVariant: "amber",
    cardVariant: "colored-transparent",
  },
  {
    category: "Clinical and professional boundary",
    items: [
      "No clinical, medical, legal, tax, accounting, audit or privacy-law advice is provided. No HIPAA, HITECH, HITRUST or other healthcare certification, compliance guarantee or clinical outcome is claimed.",
    ],
    statusText: "· APPLIES TO THIS PAGE",
    statusVariant: "default",
    cardVariant: "colored-amber",
  },
];

export default function ProofLadderSection() {
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
                PROOF LADDER AND RESOURCES
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight leading-[1.15]">
              Architecture and product proof, honestly labelled
            </h2>
          </div>

          {/* Right Subtitle Area */}
          <div className="lg:col-span-5 flex items-start w-full">
            <p className="text-gray-600 text-sm lg:text-base leading-relaxed w-full">
              Unsupported social proof is replaced with evidence a diligence
              team can actually inspect.
            </p>
          </div>
        </div>

        {/* 3x2 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DILIGENCE_CARDS.map((card, index) => {
            let cardBg = "bg-white border-[#DBE3E8]";
            if (card.cardVariant === "colored-transparent") {
              cardBg = "bg-transparent border border-dashed border-gray-300";
            } else if (card.cardVariant === "colored-amber") {
              cardBg = "bg-[#F6EDD9] border border-[#E5DEC9]";
            }

            let badgeClass = "bg-[#EFF8F4] text-[#1E7A5A] border-[#B6D8C7]";
            if (card.statusVariant === "amber") {
              badgeClass = "bg-[#F6EDD9] text-[#A07A2E] border-[#C9B07A]";
            } else if (card.statusVariant === "default") {
              badgeClass = "bg-transparent text-[#6B5A3E] border-[#C59B3F]";
            }

            return (
              <div
                key={index}
                className={`${cardBg} rounded-xl p-6 shadow-sm flex flex-col justify-between`}
              >
                <div>
                  <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-[#A07A2E] block mb-4">
                    {card.category}
                  </span>

                  {card.category === "Healthcare customer proof" ? (
                    <div className="flex flex-col gap-2 mb-6 font-mono">
                      <h3 className="text-base font-bold text-[#0F172A] font-sans">
                        {card.items[0]}
                      </h3>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        {card.items[1]}
                      </p>
                    </div>
                  ) : card.category === "Clinical and professional boundary" ? (
                    <p className="text-xs text-gray-700 leading-relaxed mb-6 font-mono">
                      {card.items[0]}
                    </p>
                  ) : (
                    <ul className="flex flex-col gap-2 mb-6">
                      {card.items.map((item, iIdx) => (
                        <li
                          key={iIdx}
                          className="text-xs lg:text-sm font-semibold text-[#08222F]"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div>
                  <span
                    className={`inline-block px-2.5 py-1 rounded text-[10px] font-mono font-bold tracking-wider border ${badgeClass}`}
                  >
                    {card.statusText}
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
