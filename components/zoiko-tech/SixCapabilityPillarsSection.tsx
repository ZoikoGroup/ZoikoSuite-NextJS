import React from "react";

export default function SixCapabilityPillarsSection() {
  const cards = [
    {
      title: "Artificial Intelligence & Agentic",
      description:
        "Domain-specific AI, governed agentic execution, professional intelligence and automation.",
      relevanceLabel: "ZOIKOSUITE RELEVANCE",
      relevanceText:
        "Governed intelligence, decision support, extraction, forecasting, and control-aware automation.",
    },
    {
      title: "Cloud & Digital Infrastructure",
      description:
        "Scalable infrastructure for Zoiko platforms, regulated workloads, and developer services.",
      relevanceLabel: "ZOIKOSUITE RELEVANCE",
      relevanceText:
        "Deployment models, workload isolation, residency-aware architecture, operational resilience.",
    },
    {
      title: "Enterprise & Financial Operations",
      description:
        "Payroll, HR, billing, accounting, business operations, workforce intelligence, productivity.",
      relevanceLabel: "ZOIKOSUITE RELEVANCE",
      relevanceText:
        "Core domain depth across finance, workforce, payroll, and governed operations.",
    },
    {
      title: "Communications & Media",
      description:
        "Messaging, calling, telecom services, streaming, live events, real-time digital experiences.",
      relevanceLabel: "ZOIKOSUITE RELEVANCE",
      relevanceText:
        "Enterprise communications context; not part of ZoikoSuite unless specifically integrated.",
    },
    {
      title: "Security, Identity & Assurance",
      description:
        "Cybersecurity, trust, regulatory evidence, identity, access, governance, auditable controls.",
      relevanceLabel: "ZOIKOSUITE RELEVANCE",
      relevanceText:
        "Identity, authorization, evidence, audit, and Trust architecture.",
    },
    {
      title: "Industry Technology Solutions",
      description:
        "Technology for telecommunications, healthcare, finance, government, mobility, property, media.",
      relevanceLabel: "ZOIKOSUITE RELEVANCE",
      relevanceText:
        "Domain-informed patterns — never implies ZoikoSuite covers an industry workflow unless product coverage confirms it.",
    },
  ] as const;

  return (
    <section className="relative w-full bg-[#EFE8D8] py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start">
        {/* Header Section */}
        <div className="max-w-3xl mb-12">
          {/* Subtitle (Eye tag size: xs) */}
          <span className="text-[#A8843A] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            SIX CAPABILITY PILLARS
          </span>

          {/* Main Headline (32px for lg devices) */}
          <h1 className="text-3xl lg:text-[32px] font-bold text-[#0b1329] leading-tight tracking-tight">
            Stable technology domains
          </h1>
        </div>

        {/* 3x2 Grid Section */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              style={{ borderRadius: "14px" }}
              className="w-full p-8 border border-[#DCD6C8] bg-white shadow-sm flex flex-col items-start justify-between min-h-[220px] relative"
            >
              <div>
                <h3 className="text-lg md:text-xl font-semibold tracking-tight text-[#0b1329] mb-3">
                  {card.title}
                </h3>
                <p className="text-gray-600 font-light leading-relaxed text-[16.5px] mb-6">
                  {card.description}
                </p>
              </div>

              <div className="w-full pt-4 border-t border-[#EFE8D8]">
                <h4 className="text-[11px] font-semibold tracking-wider text-[#A8843A] uppercase mb-1">
                  {card.relevanceLabel}
                </h4>
                <p className="text-gray-500 font-light text-xs md:text-sm leading-relaxed">
                  {card.relevanceText}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
