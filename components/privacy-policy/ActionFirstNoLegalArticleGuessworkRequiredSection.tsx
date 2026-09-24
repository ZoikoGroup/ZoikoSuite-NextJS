import React from "react";

export default function ActionFirstNoLegalArticleGuessworkRequiredSection() {
  const cards = [
    { title: "Access / know" },
    { title: "Correction" },
    { title: "Deletion" },
    { title: "Portability" },
    { title: "Object / restrict" },
    { title: "Withdraw consent" },
    { title: "Marketing opt-out" },
    { title: "Sale/share opt-out (CA)" },
    { title: "Appeal" },
  ] as const;

  return (
    <section className="relative w-full bg-[#F6F1E6] py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start">
        {/* Header Section */}
        <div className="mb-12">
          {/* Subtitle (Eye tag size: xs) */}
          <span className="text-[#A8843A] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            YOUR PRIVACY RIGHTS AND CHOICES
          </span>

          {/* Main Headline (32px for lg devices) */}
          <h1 className="text-3xl lg:text-[32px] font-bold text-[#0b1329] leading-tight tracking-tight">
            Action-first — no legal-article guesswork required
          </h1>
        </div>

        {/* 3x3 Grid Section */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {cards.map((card, index) => (
            <div
              key={index}
              style={{ borderRadius: "14px" }}
              className="w-full p-8 border border-[#DCD6C8] bg-white shadow-sm flex items-center justify-center text-center"
            >
              <h3 className="text-base font-semibold tracking-tight text-[#0b1329]">
                {card.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Footer Flow Note with Left Border Accent */}
        <div className="w-full pl-4 border-l-2 border-[#A8843A]">
          <p className="text-xs text-gray-600 font-light leading-relaxed">
            Flow: choose request goal → identify relationship/context → provide
            minimum contact/identity info → risk-proportionate verification →
            confirmation + reference number → status updates → fulfillment or
            denial rationale → appeal/complaint path.
          </p>
        </div>
      </div>
    </section>
  );
}
