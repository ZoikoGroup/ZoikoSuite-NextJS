"use client";

import React from "react";
import { Check, ShieldAlert, AlertCircle } from "lucide-react";

interface CardItem {
  category: string;
  title: string;
  subtitle?: string;
  description?: string;
  statusText: string;
  statusType: "published" | "readiness" | "applies";
}

const CARDS: CardItem[] = [
  {
    category: "Architecture and deployment",
    title: "Platform Foundation",
    subtitle: "Deployment options",
    description: "Data location and lifecycle",
    statusText: "PUBLISHED",
    statusType: "published",
  },
  {
    category: "Governance and controls",
    title: "Governance Platform",
    subtitle: "Authority and segregation",
    description: "Core modules",
    statusText: "PUBLISHED",
    statusType: "published",
  },
  {
    category: "Migration and adoption",
    title: "Migration & Shadow Mode",
    subtitle: "Modernize Operations",
    description:
      "Shadow Mode carries a persistent no-production-authority state throughout.",
    statusText: "PUBLISHED",
    statusType: "published",
  },
  {
    category: "Security and privacy",
    title: "Security overview",
    subtitle: "Data Processing Agreement PDF - ROUTER",
    description: "Subprocessors\nAccessibility",
    statusText: "READINESS - NOT CERTIFIED",
    statusType: "readiness",
  },
  {
    category: "Evaluation resources",
    title: "Executive Resources",
    subtitle: "Solution Brief",
    description: "Platform Tour",
    statusText: "PUBLISHED",
    statusType: "published",
  },
  {
    category: "Specialist boundaries",
    title:
      "Public Company, Public Sector, Nonprofit, Regulated and Professional Partnership patterns each carry a point-of-claim boundary. None asserts securities, government authorization, tax-exempt, compliance certification or professional-licensing capability.",
    statusText: "APPLIES AT POINT OF CLAIM",
    statusType: "applies",
  },
];

export default function TechnicalAndTrustDiligenceSection() {
  return (
    <section className="w-full bg-white py-16 md:py-24 text-[#0F172A] font-sans flex justify-center items-center px-4">
      <div className="w-full max-w-6xl mx-auto flex flex-col gap-12">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-4 h-[2px] bg-[#A07A2E]" />
              <span className="text-[11px] font-mono font-bold tracking-widest text-[#A07A2E] uppercase">
                ARCHITECTURE, DEPLOYMENT AND PROCUREMENT
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-[40px] font-bold text-[#0F172A] tracking-tight leading-[1.15]">
              Technical and trust diligence
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              Structural pattern does not change what an architecture reviewer
              needs. These destinations carry it.
            </p>
          </div>
        </div>

        {/* 6 Cards Grid (2 rows x 3 cols) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CARDS.map((card, index) => {
            const isHighlighted = card.statusType === "applies";
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

                  {card.statusType === "applies" ? (
                    <p className="text-xs sm:text-sm text-[#0F172A] leading-relaxed mb-4">
                      {card.title}
                    </p>
                  ) : (
                    <div className="flex flex-col gap-1.5 mb-2">
                      <h3 className="text-sm font-bold text-[#0F172A]">
                        {card.title}
                      </h3>
                      {card.subtitle && (
                        <p className="text-xs text-[#475569]">
                          {card.subtitle}
                        </p>
                      )}
                      {card.description && (
                        <p className="text-xs text-[#475569] whitespace-pre-line">
                          {card.description}
                        </p>
                      )}
                    </div>
                  )}
                </div>

                {/* Status Badge */}
                <div className="mt-6">
                  {card.statusType === "published" && (
                    <div
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-[10px] font-mono font-bold tracking-wider"
                      style={{
                        backgroundColor: "#EAF5F0",
                        border: "1px solid #1E7A5A",
                        color: "#1E7A5A",
                      }}
                    >
                      <Check className="w-3 h-3 text-[#1E7A5A]" />
                      {card.statusText}
                    </div>
                  )}

                  {card.statusType === "readiness" && (
                    <div
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-[10px] font-mono font-bold tracking-wider"
                      style={{
                        backgroundColor: "#FBF2DF",
                        border: "1px solid #9C6B12",
                        color: "#9C6B12",
                      }}
                    >
                      <AlertCircle
                        className="w-3 h-3"
                        style={{ color: "#9C6B12" }}
                      />
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
                      <ShieldAlert
                        className="w-3 h-3"
                        style={{ color: "#5D6B75" }}
                      />
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
