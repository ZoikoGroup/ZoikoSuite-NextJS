import React from "react";

export default function GlobalPresenceSection() {
  const cards = [
    {
      badge: "GLOBAL HQ",
      title: "Sacramento, US",
      description:
        "Group corporate context; ZoikoSuite contracting/support remain separate.",
    },
    {
      badge: "REGIONAL HUB",
      title: "United Kingdom",
      description: "Regional presence ≠ full product or regulatory coverage.",
    },
    {
      badge: "ENGINEERING HUB",
      title: "India",
      description:
        "Presence doesn't imply customer data processing or support scope.",
    },
    {
      badge: "REGIONAL OFFICE",
      title: "Singapore",
      description:
        "Presence doesn't imply residency or local entity availability.",
    },
  ] as const;

  return (
    <section className="relative w-full bg-white py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start">
        {/* Header Section */}
        <div className="max-w-3xl mb-12">
          {/* Subtitle (Eye tag size: xs) */}
          <span className="text-[#A8843A] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            GLOBAL PRESENCE
          </span>

          {/* Main Headline (32px for lg devices) */}
          <h1 className="text-3xl lg:text-[32px] font-bold text-[#0b1329] leading-tight tracking-tight mb-4">
            Global foundations. Local operating context.
          </h1>

          {/* Description */}
          <p className="text-gray-600 font-light leading-relaxed text-[16.5px]">
            Corporate presence ≠ ZoikoSuite product availability ≠ jurisdiction
            coverage ≠ data residency. These concepts remain visually and
            semantically separate.
          </p>
        </div>

        {/* 4-Column Grid Section */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              style={{ borderRadius: "14px" }}
              className="w-full p-6 border border-[#DCD6C8] bg-white shadow-sm flex flex-col items-center text-center justify-between min-h-[180px] relative"
            >
              <div>
                <span className="text-[#A8843A] text-[10px] font-semibold tracking-[0.15em] uppercase mb-3 block">
                  {card.badge}
                </span>
                <h3 className="text-lg font-semibold tracking-tight text-[#0b1329] mb-3">
                  {card.title}
                </h3>
              </div>
              <p className="text-gray-600 font-light leading-relaxed text-[14px]">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
