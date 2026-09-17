"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

interface AccountabilityCard {
  eyebrow: string;
  status: string;
  description: string;
  linkText: string;
}

const CARDS: AccountabilityCard[] = [
  {
    eyebrow: "CFO / FINANCE",
    status: "Published solution page",
    description:
      "Financial truth, close, governed approvals, entity and currency scope, evidence.",
    linkText: "Go to CFOs",
  },
  {
    eyebrow: "GENERAL COUNSEL / LEGAL",
    status: "Published solution page",
    description:
      "Obligations, two-layer authority, jurisdiction review, evidence classification.",
    linkText: "Go to General Counsel",
  },
  {
    eyebrow: "LEADERSHIP TEAMS",
    status: "Published solution page",
    description:
      "Decision packets, oversight mode, multi-entity rollup, obligations register.",
    linkText: "Go to Leadership Teams",
  },
  {
    eyebrow: "CIO / ARCHITECTURE",
    status: "No role hub published · architecture destinations linked",
    description:
      "Source ownership, data location, APIs, events, integrations, evidence architecture.",
    linkText: "Go to Platform Foundation",
  },
  {
    eyebrow: "COMPLIANCE / AUDIT",
    status: "No role hub published · governance destinations linked",
    description:
      "Control outcomes, evidence states, exception registers, oversight boundaries.",
    linkText: "Evidence and audit readiness",
  },
  {
    eyebrow: "CHRO / PEOPLE",
    status: "No role destination published",
    description:
      "Workforce and payroll governance material has no published destination yet.",
    linkText: "Workforce boundaries",
  },
];

export default function AccountabilityRouteSection() {
  return (
    <section className="w-full bg-white text-[#08222F] py-20 px-6 lg:px-12 flex justify-center items-center font-sans">
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
                BUILT FOR SHARED ACCOUNTABILITY
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight leading-[1.15]">
              Route by the accountability you hold
            </h2>
          </div>

          {/* Right Subtitle Area */}
          <div className="lg:col-span-5 flex items-start">
            <p className="text-gray-600 text-sm lg:text-base leading-relaxed">
              The same governed action looks different depending on who is
              answerable for it. Only published destinations are linked.
            </p>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CARDS.map((card, index) => {
            const isLast = index === CARDS.length - 1;

            return (
              <div
                key={index}
                className={`rounded-xl p-6 shadow-sm border border-[#D1D9E0] flex flex-col justify-between ${
                  isLast ? "bg-[#F7F5F0]" : "bg-white"
                }`}
              >
                <div>
                  {/* Card Eyebrow */}
                  <span className="text-[11px] font-mono font-bold tracking-wider text-[#0F476A] block mb-1">
                    {card.eyebrow}
                  </span>

                  {/* Status */}
                  <p className="text-xs text-gray-500 mb-3">{card.status}</p>

                  {/* Description */}
                  <p className="text-xs lg:text-sm text-gray-600 leading-relaxed mb-6">
                    {card.description}
                  </p>
                </div>

                {/* Link / Action */}
                <div className="pt-4 border-t border-dashed border-gray-200">
                  <a
                    href="#"
                    className="inline-flex items-center gap-1.5 text-xs lg:text-sm font-bold text-[#0F476A] hover:text-[#C59B3F] transition-colors"
                  >
                    {card.linkText}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
