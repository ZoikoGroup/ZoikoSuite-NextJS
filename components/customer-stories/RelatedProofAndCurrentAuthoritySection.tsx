"use client";

import React from "react";
import { Check, AlertCircle, ShieldAlert, FileText } from "lucide-react";

interface LinkItem {
  label: string;
}

interface CardItem {
  category: string;
  title?: string;
  links?: LinkItem[];
  description?: string;
  statusText: string;
  statusType: "current-authority" | "published" | "no-programme" | "applies";
}

const CARDS: CardItem[] = [
  {
    category: "Product and governance",
    links: [
      { label: "Platform overview" },
      { label: "Governance Platform" },
      { label: "Core modules" },
    ],
    statusText: "CURRENT AUTHORITY",
    statusType: "current-authority",
  },
  {
    category: "Architecture and trust",
    links: [
      { label: "Platform Foundation" },
      { label: "Deployment options" },
      { label: "Data residency" },
    ],
    statusText: "CURRENT AUTHORITY",
    statusType: "current-authority",
  },
  {
    category: "Solutions",
    links: [
      { label: "Solve Critical Challenges" },
      { label: "Modernize Operations" },
      { label: "Expansion" },
    ],
    statusText: "CURRENT AUTHORITY",
    statusType: "current-authority",
  },
  {
    category: "Evaluation resources",
    links: [
      { label: "Executive Resources" },
      { label: "Solution Brief" },
      { label: "Platform Tour" },
    ],
    statusText: "PUBLISHED",
    statusType: "published",
  },
  {
    category: "Customer participation",
    title: "Not currently open",
    description:
      "A customer advocacy path publishes only with an approved programme, and stays separate from sales, renewal and support. No programme is currently approved, so no invitation is shown.",
    statusText: "NO APPROVED PROGRAMME",
    statusType: "no-programme",
  },
  {
    category: "Outcome boundary",
    description:
      "Individual results vary. A story describes one organization's experience under its own conditions, over a stated period, with stated limitations. It is not a guarantee, a benchmark or a projection for any other organization.",
    statusText: "APPLIES TO EVERY STORY",
    statusType: "applies",
  },
];

export default function RelatedProofAndCurrentAuthoritySection() {
  return (
    <section className="w-full bg-white py-16 md:py-24 text-[#0F172A] font-sans flex justify-center items-center px-4">
      <div className="w-full max-w-6xl mx-auto flex flex-col gap-12">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-4 h-[2px] bg-[#A07A2E]" />
              <span className="text-[11px] font-mono font-bold tracking-widest text-[#A07A2E] uppercase">
                RELATED PROOF AND CURRENT AUTHORITY
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-[40px] font-bold text-[#0F172A] tracking-tight leading-[1.15]">
              Where current truth actually lives
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              A story is historical by nature. These destinations carry the
              current product, architecture and trust position.
            </p>
          </div>
        </div>

        {/* 6 Cards Grid (2 rows x 3 cols) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CARDS.map((card, index) => {
            const isHighlighted =
              card.statusType === "no-programme" ||
              card.statusType === "applies";
            return (
              <div
                key={index}
                className={`rounded-2xl p-6 flex flex-col justify-between shadow-sm transition-all ${
                  isHighlighted ? "bg-[#F6EDD9]" : "bg-white"
                }`}
                style={{
                  border: isHighlighted
                    ? "1px solid #E8D6AC"
                    : "1px solid #E2E8F0",
                }}
              >
                <div className="flex flex-col gap-3">
                  <span className="text-[10px] font-mono font-bold tracking-widest text-[#A07A2E] uppercase">
                    {card.category}
                  </span>

                  {card.links ? (
                    <div className="flex flex-col gap-2 my-2">
                      {card.links.map((link, linkIdx) => (
                        <span
                          key={linkIdx}
                          className="text-xs sm:text-sm font-medium text-[#0F172A]"
                        >
                          {link.label}
                        </span>
                      ))}
                    </div>
                  ) : (
                    <div className="flex flex-col gap-1.5 my-1">
                      {card.title && (
                        <h3 className="text-base font-bold text-[#0F172A]">
                          {card.title}
                        </h3>
                      )}
                      {card.description && (
                        <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                          {card.description}
                        </p>
                      )}
                    </div>
                  )}
                </div>

                {/* Status Badge */}
                <div className="mt-6">
                  {card.statusType === "current-authority" && (
                    <div
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-[10px] font-mono font-bold tracking-wider"
                      style={{
                        backgroundColor: "#EAF5F0",
                        border: "1px solid #1E7A5A",
                        color: "#1E7A5A",
                      }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1E7A5A]" />
                      {card.statusText}
                    </div>
                  )}

                  {card.statusType === "published" && (
                    <div
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-[10px] font-mono font-bold tracking-wider"
                      style={{
                        backgroundColor: "#EAF5F0",
                        border: "1px solid #1E7A5A",
                        color: "#1E7A5A",
                      }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1E7A5A]" />
                      {card.statusText}
                    </div>
                  )}

                  {card.statusType === "no-programme" && (
                    <div
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-[10px] font-mono font-bold tracking-wider"
                      style={{
                        backgroundColor: "#FBF2DF",
                        border: "1px solid #9C6B12",
                        color: "#9C6B12",
                      }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#9C6B12]" />
                      {card.statusText}
                    </div>
                  )}

                  {card.statusType === "applies" && (
                    <div
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-[10px] font-mono font-bold tracking-wider"
                      style={{
                        backgroundColor: "#EFF2F4",
                        border: "1px solid #5D6B75",
                        color: "#5D6B75",
                      }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5D6B75]" />
                      {card.statusText}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
