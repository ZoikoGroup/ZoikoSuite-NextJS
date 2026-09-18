"use client";

import React from "react";

interface IndustryCard {
  title: string;
  status: string;
  isPending?: boolean;
}

const INDUSTRY_CARDS: IndustryCard[] = [
  { title: "Financial Service", status: "Published" },
  { title: "Banking", status: "Published" },
  { title: "Insurance", status: "Published" },
  { title: "Healthcare", status: "Route pending", isPending: true },
  { title: "Telecom & MVNOs", status: "Route pending", isPending: true },
  { title: "Manufacturing", status: "Published" },
  { title: "Energy & Utilities", status: "Published" },
  { title: "Retail & Commerce", status: "Published" },
  { title: "Government & Public Sector", status: "Published" },
  { title: "Not listed here", status: "Organization patterns" },
];

export default function IndustryFinderSection() {
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
                INDUSTRY FINDER
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight leading-[1.15]">
              Route by sector, or by the problem
            </h2>
          </div>

          {/* Right Subtitle Area */}
          <div className="lg:col-span-5 flex items-start">
            <p className="text-gray-600 text-sm lg:text-base leading-relaxed">
              Two modes, no faceted filter maze. Browse industries is the
              default; start from a challenge suits problem-led buyers who do
              not identify with a single sector label.
            </p>
          </div>
        </div>

        {/* Industry Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
          {INDUSTRY_CARDS.map((card, index) => {
            const isPending = card.isPending;

            return (
              <div
                key={index}
                className={`rounded-xl p-4 flex flex-col transition-all shadow-sm ${
                  isPending
                    ? "bg-[#F7F5F0] border border-dashed border-[#CBD5E1] text-gray-400"
                    : "bg-white border border-[#E2E8F0] hover:border-[#C59B3F] text-[#08222F]"
                }`}
              >
                <div>
                  <h3
                    className={`text-sm font-bold tracking-tight ${
                      isPending ? "text-gray-400" : "text-[#08222F]"
                    }`}
                  >
                    {card.title}
                  </h3>
                </div>

                <div>
                  <span
                    className={`text-xs font-medium ${
                      isPending ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    {card.status}
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
