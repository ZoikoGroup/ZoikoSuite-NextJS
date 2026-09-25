import React from "react";

export default function PortfolioContextSection() {
  const cards = [
    {
      badge: "DIRECT RELATIONSHIP",
      title: "Zoiko Tech",
      description:
        "AI, cloud, enterprise software, communications technology, cybersecurity, industry platforms.",
      isHighlighted: true,
    },
    {
      badge: "GROUP BUSINESS",
      title: "Zoiko Communications Group",
      description: "Telecommunications, connectivity, network-led services.",
      isHighlighted: false,
    },
    {
      badge: "GROUP BUSINESS",
      title: "Zoiko Financial Group",
      description:
        "Financial technology, payments, market intelligence, financial infrastructure.",
      isHighlighted: false,
    },
    {
      badge: "GROUP BUSINESS",
      title: "Zoiko Realty Group",
      description:
        "Property technology, housing platforms, real-estate services.",
      isHighlighted: false,
    },
    {
      badge: "GROUP BUSINESS",
      title: "Zoiko Media",
      description: "Media, live experiences, culture, digital storytelling.",
      isHighlighted: false,
    },
    {
      badge: "GROUP BUSINESS",
      title: "Zoiko Healthcare",
      description: "Healthcare platforms and healthcare technology.",
      isHighlighted: false,
    },
    {
      badge: "GROUP BUSINESS",
      title: "Zoiko Supply Group",
      description:
        "Global trade, supply-chain infrastructure, commerce operations.",
      isHighlighted: false,
    },
  ] as const;

  return (
    <section className="relative w-full bg-[#EFE8D8] py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start">
        {/* Header Section */}
        <div className="max-w-3xl mb-12">
          {/* Subtitle (Eye tag size: xs) */}
          <span className="text-[#A8843A] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            PORTFOLIO CONTEXT
          </span>

          {/* Main Headline (32px for lg devices) */}
          <h1 className="text-3xl lg:text-[32px] font-bold text-[#0b1329] leading-tight tracking-tight mb-4">
            The wider group, without an unsupported ecosystem promise
          </h1>

          {/* Description */}
          <p className="text-gray-600 font-light leading-relaxed text-[16.5px]">
            Context, not a bundle — proximity in this grid never suggests
            bundled services, shared customer data, or technical integration.
          </p>
        </div>

        {/* Cards Grid Section */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              style={{ borderRadius: "14px" }}
              className={`w-full p-6 bg-white shadow-sm flex flex-col items-start justify-between min-h-[180px] relative border transition-all ${
                card.isHighlighted
                  ? "border-[#A8843A] ring-1 ring-[#A8843A]/40"
                  : "border-[#DCD6C8]"
              }`}
            >
              <div>
                <span className="text-[#A8843A] text-[10px] font-semibold tracking-[0.15em] uppercase mb-2 block">
                  {card.badge}
                </span>
                <h3 className="text-lg font-semibold tracking-tight text-[#0b1329] mb-2">
                  {card.title}
                </h3>
              </div>
              <p className="text-gray-600 font-light leading-relaxed text-[14.5px]">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
