"use client";

import React from "react";

interface RungItem {
  number: string;
  title: string;
  description: string;
}

interface CardSection {
  category: string;
  items: string[];
  statusText: string;
  statusVariant: "green" | "amber" | "default";
  cardVariant?: "default" | "dashed" | "colored-transparent" | "colored-amber";
}

const RUNGS: RungItem[] = [
  {
    number: "01",
    title: "Architecture proof",
    description:
      "Published source ownership, authority model, evidence architecture and integration contracts.",
  },
  {
    number: "02",
    title: "Product proof",
    description:
      "Annotated interfaces with synthetic data, and an inspectable end-to-end scenario.",
  },
  {
    number: "03",
    title: "Validation status",
    description:
      "Per-item claim states across capability, coverage, integration and security.",
  },
  {
    number: "04",
    title: "Customer proof",
    description:
      "Approved stories with evidence class, period and limitations.",
  },
  {
    number: "05",
    title: "Independent proof",
    description: "Third-party certification, attestation or assessment.",
  },
];

const CARDS: CardSection[] = [
  {
    category: "Platform and governance",
    items: ["Platform overview", "Governance Platform", "Core modules"],
    statusText: "PUBLISHED",
    statusVariant: "green",
  },
  {
    category: "Architecture and adoption",
    items: [
      "Platform Foundation",
      "Deployment options",
      "Migration & Shadow Mode",
    ],
    statusText: "PUBLISHED",
    statusVariant: "green",
  },
  {
    category: "Industry destinations",
    items: [
      "All industries",
      "Financial Service",
      "Manufacturing",
      "Government & Public Sector",
    ],
    statusText: "SEVEN OF NINE PUBLISHED",
    statusVariant: "green",
  },
  {
    category: "Evaluation resources",
    items: ["Solution Brief", "Executive Resources", "Platform Tour"],
    statusText: "PUBLISHED",
    statusVariant: "green",
  },
  {
    category: "Customer proof",
    items: [
      "Not published",
      "No approved story, logo, reference or outcome figure exists in any sector. None is substituted.",
      "See the governed proof model",
    ],
    statusText: "NO APPROVED RECORD",
    statusVariant: "amber",
    cardVariant: "colored-transparent",
  },
  {
    category: "Cross-solution boundary",
    items: [
      "No certification, attestation or industry-wide regulatory compliance is claimed. No core banking, EHR, OSS/BSS, MES, SCADA, POS or ERP system is replaced.",
    ],
    statusText: "APPLIES TO ALL EIGHT PATTERNS",
    statusVariant: "default",
    cardVariant: "colored-amber",
  },
];

export default function ProofAndValidationSection() {
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
                PROOF AND VALIDATION
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight leading-[1.15]">
              Five rungs, honestly labelled
            </h2>
          </div>

          {/* Right Subtitle Area */}
          <div className="lg:col-span-5 flex items-start w-full">
            <p className="text-gray-600 text-sm lg:text-base leading-relaxed w-full">
              Architecture proof, product proof, validation status, customer
              proof and independent proof are separated rather than blended.
            </p>
          </div>
        </div>

        {/* Five Rungs List */}
        <div className="flex flex-col gap-3 mb-16">
          {RUNGS.map((rung, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-4 sm:px-6 sm:py-4 shadow-sm border border-[#DBE3E8] flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              <div className="flex items-center gap-4 sm:w-1/3 shrink-0">
                <span className="w-7 h-7 rounded bg-[#0F476A] text-white font-mono font-bold text-xs flex items-center justify-center shrink-0">
                  {rung.number}
                </span>
                <h3 className="text-sm font-bold text-[#08222F]">
                  {rung.title}
                </h3>
              </div>
              <div className="sm:w-2/3">
                <p className="text-xs lg:text-sm text-gray-600 leading-relaxed">
                  {rung.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 3x2 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CARDS.map((card, index) => {
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
                  <span className="text-[10px] font-mono font-medium tracking-widest uppercase text-[#A07A2E] block mb-4">
                    {card.category}
                  </span>

                  {card.category === "Customer proof" ? (
                    <div className="flex flex-col gap-2 mb-6">
                      <h3 className="text-base font-bold text-[#0F172A]">
                        {card.items[0]}
                      </h3>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        {card.items[1]}
                      </p>
                      <a
                        href="#"
                        className="text-xs font-bold text-[#08222F] hover:text-[#C59B3F] transition-colors mt-2 inline-block"
                      >
                        {card.items[2]} →
                      </a>
                    </div>
                  ) : card.category === "Cross-solution boundary" ? (
                    <p className="text-xs text-gray-700 leading-relaxed mb-6">
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
