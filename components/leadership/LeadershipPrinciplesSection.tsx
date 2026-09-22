import React from "react";

export default function LeadershipPrinciplesSection() {
  const cards = [
    {
      title: "Evidence before assertion",
      description:
        "We should be able to show the basis for material claims, decisions, and commitments.",
    },
    {
      title: "Governance before irreversible action",
      description:
        "The right authority, policy, and context should be present before material execution.",
    },
    {
      title: "Clarity over theater",
      description:
        "Titles, claims, metrics, and status should mean exactly what they say.",
    },
    {
      title: "Human accountability for AI",
      description:
        "AI may assist; accountable people and governed processes retain decision authority where material.",
    },
    {
      title: "Global context, local truth",
      description:
        "Cross-border scale should not erase jurisdiction, entity, residency, or local-operating reality.",
    },
    {
      title: "Customer outcomes over lock-in",
      description:
        "Retention should come from delivered value, trust, and operational fit.",
    },
  ] as const;

  return (
    <section className="relative w-full bg-[#F6F1E6] py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start">
        {/* Header Section */}
        <div className="max-w-4xl mb-12">
          {/* Subtitle */}
          <span className="text-[#A8843A] text-xs md:text-sm font-semibold tracking-[0.2em] uppercase mb-3 block">
            LEADERSHIP PRINCIPLES
          </span>

          {/* Main Headline */}
          <h1 className="text-3xl md:text-[38px] font-bold text-[#0b1329] leading-tight tracking-tight">
            Governance-first philosophy, translated into leadership behavior
          </h1>
        </div>

        {/* 3x2 Grid Section */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              style={{ borderRadius: "14px" }}
              className="w-full p-8 border border-[#DCD6C8] bg-white shadow-sm flex flex-col items-start justify-center relative"
            >
              <h3 className="text-base font-semibold tracking-tight text-[#A8843A] mb-3">
                {card.title}
              </h3>
              <p className="text-gray-600 text-sm font-light leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
