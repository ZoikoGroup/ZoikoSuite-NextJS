import React from "react";

export default function AiAndIntelligenceSection() {
  const cards = [
    { title: "Domain-specific intelligence" },
    { title: "Governed agentic execution" },
    { title: "Human oversight" },
    { title: "Provenance / evidence" },
    { title: "Permission-aware context" },
    { title: "Evaluation & monitoring" },
  ] as const;

  return (
    <section className="relative w-full bg-[#0A1D34] py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start">
        {/* Header Section */}
        <div className="max-w-3xl mb-12">
          {/* Subtitle (Eye tag size: xs) */}
          <span className="text-[#A8843A] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            AI & INTELLIGENCE
          </span>

          {/* Main Headline (32px for lg devices) */}
          <h1 className="text-3xl lg:text-[32px] font-bold text-white leading-tight tracking-tight mb-6">
            Intelligence with domain depth — governed by design.
          </h1>

          {/* Description (16.5px for lg devices) */}
          <p className="text-gray-300 font-light leading-relaxed text-[16.5px]">
            Zoiko Tech's public AI thesis is based on domain context, decision
            structures, data, workflows, and regulatory constraints — not
            attaching a generic chatbot to every application. On ZoikoSuite, AI
            remains subordinate to policy, authority, evidence, and human
            review.
          </p>
        </div>

        {/* 3x2 Grid Section */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              style={{ borderRadius: "14px" }}
              className="w-full p-8 border border-[#FFFFFF24] bg-[#FFFFFF0D] shadow-sm flex items-center justify-start relative"
            >
              <h3 className="text-white text-base md:text-lg font-semibold tracking-tight">
                {card.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
