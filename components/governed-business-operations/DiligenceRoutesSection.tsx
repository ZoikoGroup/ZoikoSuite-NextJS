"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

interface DiligenceCard {
  category: string;
  title?: string;
  description?: string;
  items?: string[];
  statusText: string;
  statusType:
    | "supported"
    | "readiness"
    | "aligned"
    | "market"
    | "available"
    | "applies";
  isHighlighted?: boolean;
}

const diligenceCardsData: DiligenceCard[] = [
  {
    category: "Security architecture",
    items: [
      "Zero-Trust",
      "Identity and access",
      "Encryption and keys",
      "Application / API security",
      "Vulnerability management",
      "Secure development",
      "Incident response",
      "Business continuity",
    ],
    statusText: "ARCHITECTED TO SUPPORT",
    statusType: "supported",
  },
  {
    category: "Compliance framework",
    items: [
      "Compliance overview",
      "SOC 2 readiness",
      "ISO 27001 alignment",
      "GDPR / CCPA controls",
      "Data Processing Agreement PDF · new tab",
      "Subprocessors",
      "Retention",
      "Responsible AI",
      "Accessibility",
    ],
    statusText: "READINESS – NOT CERTIFIED",
    statusType: "readiness",
  },
  {
    category: "Audit and assurance",
    items: [
      "Evidence architecture",
      "Audit trails",
      "Policy decision logging",
      "Manifests",
      "Document integrity",
      "Internal controls",
      "Segregation",
      "Reporting",
    ],
    statusText: "DESIGNED TO ALIGN",
    statusType: "aligned",
  },
  {
    category: "Data sovereignty",
    items: [
      "Residency",
      "Regional hosting",
      "Private / single-tenant",
      "Sovereign / on-premise",
      "BYOK / HYOK / customer keys",
      "Recovery",
    ],
    statusText: "MARKET / CONFIGURATION DEPENDENT",
    statusType: "market",
  },
  {
    category: "Customer readiness",
    items: [
      "Architecture Library",
      "Integration guide",
      "Migration guide",
      "Documentation",
      "Support",
      "System status",
      "Release notes",
      "Training",
    ],
    statusText: "AVAILABLE",
    statusType: "available",
  },
  {
    category: "Professional boundary",
    description:
      "No legal, tax, accounting, audit, investment, employment, or other regulated professional advice. Qualified professionals remain responsible for final review and regulated use.",
    statusText: "APPLIES ACROSS THE CATEGORY",
    statusType: "applies",
    isHighlighted: true,
  },
];

export default function DiligenceRoutesSection() {
  return (
    <section className="w-full bg-white text-[#0f172a] py-20 px-6 lg:px-12 flex items-center justify-center">
      <div className="max-w-6xl w-full flex flex-col items-center">
        {/* Header Layout */}
        <div className="w-full flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-[2px] bg-[#c5a059]" />
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#c5a059]">
                TRUST AND PROCUREMENT VALIDATION
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight leading-[1.1] text-[#0f172a] max-w-xl">
              Diligence routes, every claim qualified
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#64748b] max-w-sm leading-relaxed">
            Status terms distinguish verified, aligned, designed, in review, and
            unavailable. Certification marks stay absent until independently
            verified and approved.
          </p>
        </div>

        {/* 6 Diligence Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mb-12">
          {diligenceCardsData.map((card, idx) => {
            let badgeBg = "bg-[#EAF5F0] text-[#1E7A5A] border-[#1E7A5A]";
            let dotBg = "bg-[#1E7A5A]";

            if (card.statusType === "readiness") {
              badgeBg = "bg-[#FBF2DF] text-[#9C6B12] border-[#9C6B12]";
              dotBg = "bg-[#9C6B12]";
            } else if (card.statusType === "market") {
              badgeBg = "bg-[#EAF1F9] text-[#2F6FB0] border-[#2F6FB0]";
              dotBg = "bg-[#2F6FB0]";
            } else if (
              card.statusType === "aligned" ||
              card.statusType === "supported"
            ) {
              badgeBg = "bg-[#EFF2F4] text-[#5D6B75] border-[#5D6B75]";
              dotBg = "bg-[#5D6B75]";
            } else if (card.statusType === "available") {
              badgeBg = "bg-[#EAF5F0] text-[#1E7A5A] border-[#1E7A5A]";
              dotBg = "bg-[#1E7A5A]";
            } else if (card.statusType === "applies") {
              badgeBg = "bg-[#EFF2F4] text-[#5D6B75] border-[#5D6B75]";
              dotBg = "bg-[#5D6B75]";
            }

            const cardBgClass = card.isHighlighted
              ? "bg-[#F7F2E4] border-[#E8DFC9]"
              : "bg-white border-[#DBE3E8]";

            return (
              <div
                key={idx}
                className={`rounded-2xl border p-6 shadow-xs flex flex-col justify-between ${cardBgClass}`}
              >
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#c5a059] block mb-4">
                    {card.category}
                  </span>

                  {card.items && (
                    <ul className="flex flex-col gap-2 mb-6">
                      {card.items.map((item, itemIdx) => (
                        <li
                          key={itemIdx}
                          className="text-xs text-[#0f172a] font-medium"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}

                  {card.description && (
                    <p className="text-xs text-[#64748b] leading-relaxed mb-6">
                      {card.description}
                    </p>
                  )}
                </div>

                <div>
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-[10px] font-mono font-bold tracking-wider border ${badgeBg}`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${dotBg}`} />
                    {card.statusText}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Buttons Container */}
        <div className="flex flex-wrap items-center justify-start gap-4 w-full">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold bg-[#0F476A] text-white hover:bg-[#0c3955] transition-colors shadow-sm"
          >
            Visit the Trust Center
            <ArrowRight className="w-4 h-4 text-white" />
          </a>

          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold bg-transparent text-[#0F476A] hover:bg-[#0F476A]/5 transition-colors border border-[#DBE3E8]"
          >
            Talk to a solutions architect
          </a>
        </div>
      </div>
    </section>
  );
}
