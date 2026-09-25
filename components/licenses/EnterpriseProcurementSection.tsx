import React from "react";

export default function EnterpriseProcurementSection() {
  const cards = [
    {
      title: "Current open-source notices",
      description: "Downloadable release notice bundle.",
      footer: "No handoff required.",
    },
    {
      title: "Machine-readable licensing inventory",
      description: "Approved public SPDX-aligned export.",
      footer: "Restricted export if more detail is needed.",
    },
    {
      title: "Full SBOM",
      description: "Availability/status explained without promising it.",
      footer: "Trust/Security evidence workflow under appropriate controls.",
    },
    {
      title: "Commercial third-party terms",
      description:
        "Publicly states that restricted third-party rights are governed separately.",
      footer: "Legal/procurement response — vendor contract is never exposed.",
    },
  ] as const;

  return (
    <section className="relative w-full bg-[#F6F1E6] py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start w-full">
        {/* Header Section */}
        <div className="mb-12 w-full">
          {/* Subtitle */}
          <span className="text-[#A8843A] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            ENTERPRISE PROCUREMENT & ASSURANCE HANDOFF
          </span>

          {/* Main Headline */}
          <h1 className="text-3xl lg:text-[32px] font-bold text-[#0b1329] leading-tight tracking-tight max-w-5xl">
            Routine diligence answered here — higher-sensitivity evidence goes
            through Trust/Security
          </h1>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {cards.map((card, index) => (
            <div
              key={index}
              style={{ borderRadius: "12px" }}
              className="bg-white border border-[#DCD6C8] p-8 flex flex-col justify-between shadow-sm min-h-[180px]"
            >
              <div className="flex flex-col">
                <h2 className="text-base font-semibold text-[#0b1329] tracking-tight mb-2">
                  {card.title}
                </h2>
                <p className="text-gray-600 font-light leading-relaxed text-[14px]">
                  {card.description}
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-[#EAE4D7] text-gray-500 font-light text-[13px] italic">
                {card.footer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
