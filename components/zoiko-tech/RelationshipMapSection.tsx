import React from "react";
import { ArrowRight } from "lucide-react";

export default function RelationshipMapSection() {
  const cards = [
    {
      title: "Zoiko Group",
      description: "Wider parent-company and portfolio context.",
      bgColor: "bg-white",
      textColor: "text-[#0b1329]",
      descColor: "text-gray-600",
    },
    {
      title: "Zoiko Tech",
      description:
        "Technology company building platforms, infrastructure, and domain-specific intelligence.",
      bgColor: "bg-[#0E2843]",
      textColor: "text-white",
      descColor: "text-gray-200",
    },
    {
      title: "ZoikoSuite",
      description:
        "Governed Business Operations Intelligence platform for finance, workforce, legal, tax, compliance, and evidence.",
      bgColor: "bg-[#EFE8D8]",
      textColor: "text-[#0b1329]",
      descColor: "text-gray-600",
    },
  ] as const;

  return (
    <section className="relative w-full bg-white py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start">
        {/* Header Section */}
        <div className="max-w-3xl mb-12">
          {/* Subtitle */}
          <span className="text-[#A8843A] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            RELATIONSHIP MAP
          </span>

          {/* Main Headline */}
          <h1 className="text-3xl md:text-[32px] font-bold text-[#0b1329] leading-tight tracking-tight mb-4">
            Zoiko Group
          </h1>

          {/* Description */}
          <p className="text-gray-600 text-base font-light leading-relaxed">
            Plain organizational language — no inference required from logos,
            footers, or legal notices.
          </p>
        </div>

        {/* 3 Cards Flow Section with Right Arrows */}
        <div className="w-full flex flex-col md:flex-row items-center gap-4">
          {cards.map((card, index) => (
            <React.Fragment key={index}>
              <div
                style={{ borderRadius: "14px" }}
                className={`w-full md:w-1/3 p-8 border border-[#DCD6C8] shadow-sm flex flex-col items-start justify-center min-h-[180px] relative ${card.bgColor}`}
              >
                <h3
                  className={`text-base md:text-lg font-semibold tracking-tight mb-2 ${card.textColor}`}
                >
                  {card.title}
                </h3>
                <p
                  className={`text-sm md:text-base font-light leading-relaxed ${card.descColor}`}
                >
                  {card.description}
                </p>
              </div>

              {/* Arrow between cards (hidden after the last card) */}
              {index < cards.length - 1 && (
                <div className="hidden md:flex items-center justify-center text-[#A8843A] shrink-0">
                  <ArrowRight className="w-6 h-6" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
