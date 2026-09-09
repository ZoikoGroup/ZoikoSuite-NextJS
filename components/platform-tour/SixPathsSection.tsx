"use client";

import React from "react";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";

interface PathCard {
  recommended?: boolean;
  stepsBadge: string;
  title: string;
  description: string;
  stepNumbers: number[];
  trailingTag: {
    label: string;
    type: "recap" | "trust";
  };
  isDarkButton?: boolean;
}

const pathCards: PathCard[] = [
  {
    recommended: true,
    stepsBadge: "12 STEPS • RECAP",
    title: "Full platform tour",
    description: "Cross-functional enterprise evaluation covering every stop in order.",
    stepNumbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    trailingTag: { label: "Recap", type: "recap" },
    isDarkButton: true,
  },
  {
    stepsBadge: "5 STEPS • RECAP",
    title: "Quick executive proof",
    description: "High-value proof in fewer scenes. All other steps remain accessible.",
    stepNumbers: [1, 3, 4, 7, 12],
    trailingTag: { label: "Recap", type: "recap" },
  },
  {
    stepsBadge: "5 STEPS • RECAP",
    title: "Executive overview",
    description: "Executive context, governance, evidence and assurance.",
    stepNumbers: [1, 3, 5, 7, 11],
    trailingTag: { label: "Recap", type: "recap" },
  },
  {
    stepsBadge: "6 STEPS • RECAP",
    title: "Finance & controls",
    description: "Controls, authority, multi-entity scope and evidence.",
    stepNumbers: [1, 3, 5, 7, 9, 11],
    trailingTag: { label: "Recap", type: "recap" },
  },
  {
    stepsBadge: "6 STEPS • TRUST",
    title: "Legal & compliance",
    description: "Policy, jurisdiction, authority, evidence and governed AI.",
    stepNumbers: [2, 4, 6, 7, 8],
    trailingTag: { label: "Trust", type: "trust" },
  },
  {
    stepsBadge: "4 STEPS • TRUST",
    title: "Architecture & deployment",
    description: "Systems, events, deployment, residency and the Shadow Mode concept.",
    stepNumbers: [2, 10, 12],
    trailingTag: { label: "Trust", type: "trust" },
  },
];

export default function SixPathsSection() {
  return (
    <section id="choose-tour-path" className="w-full bg-white text-[#0f172a] py-20 px-6 lg:px-20 flex justify-center">
      <div className="max-w-[1240px] w-full flex flex-col">
        {/* Header Grid: Left Title & Eyebrow, Right Subtext */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          {/* Left Column: Eyebrow + Title */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-5 h-[2px] bg-[#c5a059]" />
              <span className="text-[10.5px] font-semibold tracking-[0.2em] text-[#c5a059] uppercase">
                CHOOSE A TOUR PATH
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#08222F] tracking-tight leading-[1.12]">
              Six paths. Same scenario,
              <br />
              different emphasis.
            </h2>
          </div>

          {/* Right Column: Explanatory paragraph */}
          <div className="lg:col-span-6 flex items-center lg:pt-4">
            <p className="text-[#566573] text-[13.5px] sm:text-sm leading-relaxed max-w-[500px]">
              Path choice is explicit and session-scoped. No path is inferred from
              your role, email, company, location or browsing history — and
              every stop stays reachable from the Tour Map regardless of which
              path you pick.
            </p>
          </div>
        </div>

        {/* 6 Cards Grid: 3 columns on desktop, 1 or 2 on mobile/tablet */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pathCards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.06, ease: "easeOut" }}
              className="relative bg-white border border-[#c1d0d9] rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:shadow-md transition-shadow duration-200"
            >
              {/* Card Header & Content */}
              <div>
                {/* Badges / Step Count Header */}
                <div className="flex items-center gap-2 mb-3.5 flex-wrap">
                  {card.recommended && (
                    <span className="px-2 py-0.5 rounded bg-[#0f476a] text-white text-[9.5px] font-bold tracking-[0.08em] uppercase">
                      RECOMMENDED
                    </span>
                  )}
                  <span className="text-[10px] font-medium tracking-[0.14em] text-[#5a8099] uppercase font-mono">
                    {card.stepsBadge}
                  </span>
                </div>

                {/* Card Title */}
                <h3 className="text-base sm:text-[17px] font-bold text-[#08222F] tracking-tight mb-2">
                  {card.title}
                </h3>

                {/* Card Description */}
                <p className="text-[#64748b] text-[12.5px] sm:text-[13px] leading-relaxed mb-6 font-normal min-h-[38px]">
                  {card.description}
                </p>

                {/* Dotted Divider */}
                <div className="w-full border-t border-dashed border-[#c5d5df] mb-5" />

                {/* Step Pills Row */}
                <div className="flex flex-wrap items-center gap-1.5 mb-6">
                  {card.stepNumbers.map((stepNum) => (
                    <span
                      key={stepNum}
                      className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-[#eef3f6] text-[#486576] text-[11px] font-semibold"
                    >
                      {stepNum}
                    </span>
                  ))}

                  {/* Trailing Tag (Recap or Trust) */}
                  <span
                    className={`inline-flex items-center justify-center px-2.5 h-6 rounded-md text-[11px] font-medium ${
                      card.trailingTag.type === "recap"
                        ? "bg-[#f5ecda] text-[#b88c3a] border border-[#ecd5a8]"
                        : "bg-[#f7edd8] text-[#c29643] border border-[#f0dbae]"
                    }`}
                  >
                    {card.trailingTag.label}
                  </span>
                </div>
              </div>

              {/* Card Action Button */}
              <div className="pt-2">
                {card.isDarkButton ? (
                  <button className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#0f476a] text-white text-[12.5px] font-semibold hover:bg-[#0c3955] transition-colors shadow-sm">
                    <span>Start this path</span>
                    <Plus className="w-3.5 h-3.5 stroke-[2.5]" />
                  </button>
                ) : (
                  <button className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-white text-[#0f476a] border border-[#a5bac8] text-[12.5px] font-semibold hover:bg-[#f3f7fa] transition-colors shadow-sm">
                    <span>Start this path</span>
                    <Plus className="w-3.5 h-3.5 stroke-[2.5]" />
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
