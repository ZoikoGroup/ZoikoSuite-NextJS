import React from "react";

interface DiscoveryCard {
  tag: string;
  title: string;
  description: string;
  meta?: string;
}

const discoveryCards: DiscoveryCard[] = [
  {
    tag: "Featured",
    title: "Q4 policy governance office hours",
    description:
      "Live Q&A on policy lifecycle, scope, and exception governance.",
    meta: "Sep 24, 2026 · Virtual",
  },
  {
    tag: "Event series · 3 sessions",
    title: "Governance in practice",
    description:
      "A recurring session series connecting policy, evidence, and audit readiness.",
  },
  {
    tag: "On demand",
    title: "Implementation deep dive: approval matrices",
    description:
      "Recorded session with captions and transcript available.",
  },
];

export default function EditorialDiscoverySection() {
  return (
    <section className="w-full bg-[#f7f5f0] py-20 px-6 md:px-12 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-10">
          <span className="font-mono text-[11px] font-normal tracking-[0.1em] text-[#a07a2e] block mb-2">
            02 / DISCOVERY
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-[33px] font-semibold text-[#16262f] tracking-tight">
            Featured, next up &amp; series
          </h2>
        </div>

        {/* 3 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {discoveryCards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#dbe3e8] rounded-lg p-6 flex flex-col justify-between hover:border-[#a07a2e]/50 transition-colors"
            >
              <div>
                <span className="font-mono text-[11px] text-[#5a6d79] block mb-3">
                  {card.tag}
                </span>
                <h3 className="text-[16px] font-semibold text-[#16262f] leading-snug mb-2.5">
                  {card.title}
                </h3>
                <p className="text-[13.5px] text-[#5a6d79] leading-relaxed">
                  {card.description}
                </p>
              </div>

              {card.meta && (
                <span className="font-mono text-[11.5px] text-[#5a6d79] mt-6 pt-4 border-t border-[#f0f4f7] block">
                  {card.meta}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
