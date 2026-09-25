import React from "react";

export default function AboutTheOrganizationSection() {
  const cards = [
    {
      title: "Global headquarters",
      content:
        "Zoiko Tech Inc.\n1401 21st Street, Suite R\nSacramento, CA 95811, United States",
    },
    {
      title: "European headquarters",
      content:
        "Zoiko Tech\n167–169 Great Portland Street, 5th Floor\nLondon W1W 5PF, United Kingdom",
    },
    {
      title: "Product ↔ organization",
      content:
        "A Zoiko Tech platform. A Zoiko Group company. Locations establish contact and organizational presence — not jurisdictional product coverage.",
    },
  ] as const;

  return (
    <section className="relative w-full bg-white py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start">
        {/* Header Section */}
        <div className="max-w-3xl mb-12">
          {/* Subtitle */}
          <span className="text-[#A8843A] text-xs md:text-sm font-semibold tracking-[0.2em] uppercase mb-3 block">
            ABOUT THE ORGANIZATION
          </span>

          {/* Main Headline (32px and bold) */}
          <h1 className="text-3xl md:text-[32px] font-bold text-[#0b1329] leading-tight tracking-tight mb-4">
            The evidence ladder — prove before publishing
          </h1>

          {/* Description */}
          <p className="text-gray-600 text-base font-light leading-relaxed">
            ZoikoSuite® is a governed business operations intelligence platform
            developed and operated by Zoiko Tech, a Zoiko Group company. No
            founding date, employee count, funding, revenue, or market claim is
            published unless formally verified and approved.
          </p>
        </div>

        {/* Cards Grid (3 columns) */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-200 flex flex-col gap-2"
            >
              <h3 className="text-[#0b1329] text-base md:text-lg font-semibold tracking-tight">
                {card.title}
              </h3>
              <p className="text-gray-600 text-sm font-light leading-relaxed whitespace-pre-line">
                {card.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
