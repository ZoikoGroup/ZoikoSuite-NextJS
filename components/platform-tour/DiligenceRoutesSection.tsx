"use client";

import React from "react";
import { motion } from "framer-motion";

interface DiligenceCard {
  category: string;
  items: string[];
  statusText: string;
  statusType: "supported" | "readiness" | "aligned" | "market" | "available" | "boundary";
}

// Desktop cards (unchanged)
const desktopDiligenceCards: DiligenceCard[] = [
  {
    category: "SECURITY",
    items: [
      "Zero Trust interface",
      "Per-hop policy checks",
      "Environment and key boundaries",
      "No direct live calls",
    ],
    statusText: "ARCHITECTED TO SUPPORT",
    statusType: "supported",
  },
  {
    category: "PRIVACY",
    items: [
      "Zero customer data",
      "Safe 100% synthetic environment",
      "Session-scoped",
      "No cookies or trackers",
    ],
    statusText: "NO PERSONAL DATA IN PLAY",
    statusType: "readiness",
  },
  {
    category: "EVIDENCE ARCHVIDENCE ARCHITECTURE",
    items: [
      "Attribution unchanged",
      "Source trace preserved",
      "Chain of custody",
      "Audit exportable",
    ],
    statusText: "DESIGNED TO MIRROR REAL SYSTEM",
    statusType: "aligned",
  },
  {
    category: "COMPLIANCE & GOVERNANCE",
    items: [
      "Jurisdiction rules applied",
      "Policy constraints enforced",
      "Segregation blocks active",
      "Authority controls",
    ],
    statusText: "VERIFIED IN RUNNING TOUR SCENARIO",
    statusType: "supported",
  },
  {
    category: "INTEGRATION SAFETY",
    items: [
      "Simulated external calls",
      "Replayed event responses",
      "Safe idempotency checks",
      "No live endpoint calls",
    ],
    statusText: "CONTAINED",
    statusType: "available",
  },
  {
    category: "OPERATING BOUNDARIES",
    items: [
      "Synthetic tour boundary",
      "Pre-loaded",
      "Reproducible",
      "Self-contained",
    ],
    statusText: "TOUR REMAINS NON-OPERATIONAL",
    statusType: "boundary",
  },
];

// Mobile cards matching reference image
const mobileDiligenceCards = [
  {
    category: "Security",
    items: [
      "Security overview",
      "Identity and access",
      "Encryption and key management",
      "Incident response",
    ],
    statusText: "ARCHITECTED TO SUPPORT",
    statusType: "gray",
  },
  {
    category: "Privacy",
    items: [
      "Data residency",
      "Data Processing Agreement (PDF · new tab)",
      "Subprocessors",
      "Retention and deletion",
    ],
    statusText: "CONTROLS DOCUMENTED",
    statusType: "amber",
  },
  {
    category: "Responsible AI",
    items: [
      "Governed AI boundary",
      "Human review logic",
      "Prompt logging",
    ],
    statusText: "HUMAN AUTHORITY SEPARATE",
    statusType: "gray",
  },
  {
    category: "Coverage & availability",
    items: [
      "Jurisdiction covered",
      "Deployment options",
      "Product roadmap",
    ],
    statusText: "MARKET & CONFIGURATION DEPENDENT",
    statusType: "blue",
  },
  {
    category: "Architecture",
    items: [
      "Integration architecture",
      "Source-of-record model",
      "API documentation",
    ],
    statusText: "AVAILABLE",
    statusType: "green",
  },
  {
    category: "Existing customers",
    items: [
      "Documentation",
      "Support",
      "System status",
      "Release notes",
    ],
    statusText: "NO SALES FORM REQUIRED",
    statusType: "green",
  },
];

export default function DiligenceRoutesSection() {
  return (
    <section className="w-full bg-white text-[#0f172a] py-14 lg:py-20 px-6 lg:px-20 flex justify-center">
      <div className="max-w-[1240px] w-full flex flex-col">
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start mb-8 lg:mb-12">
          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-5 h-[2px] bg-[#c5a059]" />
              <span className="text-[10.5px] font-semibold tracking-[0.2em] text-[#c5a059] uppercase">
                TRUST AND PROCUREMENT
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-[40px] font-bold text-[#08222F] tracking-tight leading-[1.15]">
              Diligence routes for what the
              <br className="hidden sm:inline" />
              tour showed
            </h2>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-5 flex items-center lg:pt-3">
            <p className="text-[#566573] text-[13.5px] sm:text-sm leading-relaxed max-w-[480px]">
              A high-fidelity mockup is not evidence that a capability is live.
              These routes are where claims are actually verified.
            </p>
          </div>
        </div>

        {/* Desktop 6 Cards Grid (3x2, untouched) */}
        <div className="hidden lg:grid grid-cols-3 gap-6">
          {desktopDiligenceCards.map((card, idx) => {
            let badgeBg = "bg-[#EFF2F4] text-[#5D6B75] border-[#5D6B75]";
            let dotBg = "bg-[#5D6B75]";

            if (card.statusType === "readiness") {
              badgeBg = "bg-[#FBF2DF] text-[#9C6B12] border-[#9C6B12]";
              dotBg = "bg-[#9C6B12]";
            } else if (card.statusType === "available" || card.statusType === "boundary") {
              badgeBg = "bg-[#EAF5F0] text-[#1E7A5A] border-[#1E7A5A]";
              dotBg = "bg-[#1E7A5A]";
            } else if (card.statusType === "supported") {
              badgeBg = "bg-[#EAF1F9] text-[#2F6FB0] border-[#2F6FB0]";
              dotBg = "bg-[#2F6FB0]";
            }

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05, ease: "easeOut" }}
                className="rounded-2xl border border-[#d6e2e9] bg-white p-6 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-[0.16em] text-[#c5a059] block mb-4">
                    {card.category}
                  </span>

                  <ul className="flex flex-col gap-2 mb-6">
                    {card.items.map((item, itemIdx) => (
                      <li
                        key={itemIdx}
                        className="text-[12.5px] text-[#334756] font-normal leading-snug"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2">
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-[9.5px] font-mono font-bold tracking-wider border ${badgeBg}`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${dotBg}`} />
                    {card.statusText}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile Layout matching reference */}
        <div className="lg:hidden flex flex-col gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {mobileDiligenceCards.map((card, idx) => {
              let badgeStyle = "bg-[#f1f4f6] text-[#526471] border-[#d0dae0]";
              let dotStyle = "bg-[#526471]";

              if (card.statusType === "amber") {
                badgeStyle = "bg-[#fbf4e8] text-[#a06810] border-[#e8ce93]";
                dotStyle = "bg-[#a06810]";
              } else if (card.statusType === "blue") {
                badgeStyle = "bg-[#edf4fb] text-[#2368a2] border-[#bcd6ee]";
                dotStyle = "bg-[#2368a2]";
              } else if (card.statusType === "green") {
                badgeStyle = "bg-[#eef8f3] text-[#1b7952] border-[#aee0ca]";
                dotStyle = "bg-[#1b7952]";
              }

              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-[#d6e2e9] bg-white p-5 flex flex-col justify-between shadow-xs"
                >
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-[0.14em] text-[#a87a22] block mb-3">
                      {card.category}
                    </span>
                    <ul className="flex flex-col gap-1.5 mb-5 text-[12px] text-[#334756]">
                      {card.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="leading-snug">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <span
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[9px] font-mono font-bold tracking-wider border ${badgeStyle}`}
                    >
                      <span className={`w-1 h-1 rounded-full ${dotStyle}`} />
                      {card.statusText}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Golden Evaluation Callout Box on Mobile */}
          <div className="rounded-xl border border-[#d8b568] bg-[#fdfaf3] p-4 sm:p-5 mt-2 shadow-xs">
            <div className="text-[10px] font-mono font-bold uppercase tracking-[0.14em] text-[#a06810] mb-1.5">
              EVALUATION BOUNDARY
            </div>
            <p className="text-[11.5px] text-[#526471] leading-relaxed">
              Every scene in this tour is a design demonstration using synthetic records. Availability of any capability shown depends on approved product status, market, contract, configuration, integration and implementation status, and public claims require current source and registry approval.
            </p>
          </div>

          {/* Subtext footnote */}
          <p className="text-[10px] text-[#8c9ba5] leading-relaxed mt-1">
            Status last reviewed 15 July 2026. No certification mark is displayed until independently verified and approved.
          </p>
        </div>
      </div>
    </section>
  );
}
