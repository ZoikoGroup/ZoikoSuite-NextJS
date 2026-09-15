"use client";

import React from "react";

interface TransitionItem {
  title: string;
  description: string;
}

const TRANSITION_ITEMS: TransitionItem[] = [
  {
    title: "Systems and process fragmentation",
    description:
      "Transformation ownership stays with that destination; this page does not duplicate it.",
  },
  {
    title: "International, market or entity expansion",
    description: "Expansion owns expansion strategy and search intent.",
  },
  {
    title: "New multi-entity structure",
    description:
      "A product route appears only where published. The pattern content on this page applies meanwhile.",
  },
  {
    title: "Higher regulatory or control pressure",
    description: "No compliance promise attaches to a structural change.",
  },
  {
    title: "Leadership responsibility change",
    description:
      "Role destinations are chosen by you. No persona is inferred from this page.",
  },
];

export default function TransitionWithoutInventingSection() {
  return (
    <section className="w-full bg-white py-16 md:py-24 text-[#0F172A] font-sans flex justify-center items-center px-4">
      <div className="w-full max-w-6xl mx-auto flex flex-col gap-12">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-4 h-[2px] bg-[#A07A2E]" />
              <span className="text-[11px] font-mono font-bold tracking-widest text-[#A07A2E] uppercase">
                YOUR STRUCTURE IS CHANGING
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-[40px] font-bold text-[#0F172A] tracking-tight leading-[1.15]">
              Transition without inventing a new type
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              Organizations move between patterns &mdash; becoming multi-entity,
              expanding internationally, entering regulated markets, going
              public, restructuring or acquiring. Each change signal routes to
              the destination that owns it.
            </p>
          </div>
        </div>

        {/* Transition Items List */}
        <div className="flex flex-col gap-3">
          {TRANSITION_ITEMS.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-5 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-6"
              style={{
                border: "1px solid #DBE3E8",
                borderLeftWidth: "3px",
                borderLeftColor: "#D0AA55",
              }}
            >
              <h3 className="text-sm font-bold text-[#0F172A] sm:w-1/3">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#64748B] sm:w-2/3 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
