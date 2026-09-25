import React from "react";

export default function MultipleChannelsOneAuthoritativeRouteSection() {
  const cards = [
    {
      title: "Secure web form",
      description:
        "Default route for most reports. TLS, anti-abuse, file encryption, case receipt, accessible, no login required.",
    },
    {
      title: "Security email",
      description:
        "Fallback / researcher preference. Only a verified mailbox is published; PGP key supported if operationally maintained.",
    },
    {
      title: "Emergency security contact",
      description:
        "For active exploitation or material incident — separate from the normal queue.",
    },
  ] as const;

  return (
    <section className="relative w-full bg-[#F6F1E6] py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start w-full">
        {/* Header Section */}
        <div className="mb-12 w-full">
          {/* Subtitle (Eye tag size: xs) */}
          <span className="text-[#A8843A] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            HOW TO REPORT
          </span>

          {/* Main Headline (32px for lg devices) */}
          <h1 className="text-3xl lg:text-[32px] font-bold text-[#0b1329] leading-tight tracking-tight">
            Multiple channels, one authoritative route
          </h1>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {cards.map((card, index) => (
            <div
              key={index}
              style={{ borderRadius: "12px" }}
              className="bg-white border border-[#DCD6C8] p-8 flex flex-col justify-start shadow-sm"
            >
              <h2 className="text-base font-semibold text-[#0b1329] tracking-tight mb-3">
                {card.title}
              </h2>
              <p className="text-gray-600 font-light leading-relaxed text-[15px]">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
