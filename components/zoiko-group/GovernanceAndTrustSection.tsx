import React from "react";

export default function GovernanceAndTrustSection() {
  const cards = [
    {
      badge: "GROUP CONTEXT",
      title: "Corporate governance",
      description: "One-sentence group-level context.",
    },
    {
      badge: "ZOIKOSUITE PRODUCT CONTROL",
      title: "Security & data protection",
      description: "Explains the governance boundary explicitly.",
    },
    {
      badge: "ZOIKOSUITE PRODUCT CONTROL",
      title: "Responsible AI",
      description: "Human-accountability and governance context.",
    },
  ] as const;

  return (
    <section className="relative w-full bg-[#0A1D34] py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start">
        {/* Header Section */}
        <div className="max-w-3xl mb-12">
          {/* Subtitle (Eye tag size: xs) */}
          <span className="text-[#A8843A] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            GOVERNANCE & TRUST
          </span>

          {/* Main Headline (32px for lg devices) */}
          <h1 className="text-3xl lg:text-[32px] font-bold text-white leading-tight tracking-tight">
            Shared standards where they create leverage. Product accountability
            where it matters.
          </h1>
        </div>

        {/* 3-Column Grid Section */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {cards.map((card, index) => (
            <div
              key={index}
              style={{ borderRadius: "14px" }}
              className="w-full p-8 bg-[#FFFFFF0D] border border-[#FFFFFF24] shadow-sm flex flex-col items-start justify-between min-h-[180px] relative"
            >
              <div>
                <span className="text-[#A8843A] text-[10px] font-semibold tracking-[0.15em] uppercase mb-3 block">
                  {card.badge}
                </span>
                <h3 className="text-lg font-semibold tracking-tight text-white mb-2">
                  {card.title}
                </h3>
              </div>
              <p className="text-gray-300 font-light leading-relaxed text-[15.5px]">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* Source of Truth Rule Box */}
        <div
          className="w-full p-6 bg-[#FFFFFF0D] border border-[#FFFFFF24] border-l-4 border-l-[#C8A24A] text-gray-300 font-light text-[15.5px] leading-relaxed"
        >
          Source-of-truth rule: ZoikoSuite Trust is authoritative for product
          security, privacy, residency, evidence, certification, and
          system-status claims. Group governance pages provide institutional
          context only.
        </div>
      </div>
    </section>
  );
}
