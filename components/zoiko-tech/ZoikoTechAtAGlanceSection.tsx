import React from "react";

export default function ZoikoTechAtAGlanceSection() {
  const cards = [
    {
      title: "COMPANY CATEGORY",
      description: "California-based global technology company.",
    },
    {
      title: "CORE THESIS",
      description:
        "Build reusable technology capabilities and apply them to important operating problems.",
    },
    {
      title: "TECHNOLOGY BREADTH",
      description:
        "AI, cloud/digital infrastructure, enterprise operations, communications/media, security/identity/assurance, industry technology.",
    },
    {
      title: "ROLE IN WIDER ECOSYSTEM",
      description:
        "Technology engine for companies across the wider Zoiko Group.",
    },
    {
      title: "HEADQUARTERS",
      description: "Sacramento, California, United States.",
    },
    {
      title: "OFFICIAL SOURCE",
      linkText: "zoikotech.com ↗",
      linkHref: "https://zoikotech.com/",
    },
  ] as const;

  return (
    <section className="relative w-full bg-[#EFE8D8] py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start">
        {/* Header Section */}
        <div className="max-w-3xl mb-12">
          {/* Subtitle (Eye tag size: xs) */}
          <span className="text-[#A8843A] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            ZOIKO TECH AT A GLANCE
          </span>

          {/* Main Headline (32px for lg devices) */}
          <h1 className="text-3xl md:text-[32px] font-bold text-[#0b1329] leading-tight tracking-tight">
            Stable, verified facts about the company behind the platform
          </h1>
        </div>

        {/* 3x2 Grid Section */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              style={{ borderRadius: "14px" }}
              className="w-full p-8 border border-[#DCD6C8] bg-white shadow-sm flex flex-col items-start justify-center min-h-[180px] relative"
            >
              <h3 className="text-xs font-semibold tracking-wider text-[#A8843A] uppercase mb-3">
                {card.title}
              </h3>
              {"description" in card ? (
                <p className="text-gray-600 font-light leading-relaxed text-[16.5px]">
                  {card.description}
                </p>
              ) : (
                <a
                  href={card.linkHref}
                  className="text-[#0b1329] font-semibold hover:underline text-[16.5px] inline-flex items-center gap-1"
                >
                  {card.linkText}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
