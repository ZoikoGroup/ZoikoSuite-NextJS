import React from "react";

export default function BuildWithWorkWithUsSection() {
  const cards = [
    {
      category: "FOUNDER'S VISION",
      title: "Why we are building ZoikoSuite",
      description: "Long-term thesis and principles behind the company.",
    },
    {
      category: "LEADERSHIP",
      title: "Meet the leaders accountable for the platform",
      description: "Executive roles, responsibilities, and governance.",
    },
    {
      category: "PARTNERS",
      title: "Build and deliver with ZoikoSuite",
      description:
        "Technology, implementation, advisory, and ecosystem relationships.",
    },
    {
      category: "CAREERS",
      title: "Help build governed business operations",
      description: "Mission, ways of working, and open roles.",
    },
  ] as const;

  return (
    <section className="relative w-full bg-white py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start">
        {/* Header Section */}
        <div className="max-w-3xl mb-12">
          {/* Subtitle */}
          <span className="text-[#A8843A] text-xs md:text-sm font-semibold tracking-[0.2em] uppercase mb-3 block">
            BUILD WITH / WORK WITH US
          </span>

          {/* Main Headline (32px and bold) */}
          <h1 className="text-3xl md:text-[32px] font-bold text-[#0b1329] leading-tight tracking-tight">
            Bring your operations under one governed system of record
          </h1>
        </div>

        {/* Cards Grid (3 columns top, 1 bottom or flexible grid layout) */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-200 flex flex-col"
            >
              <div>
                {/* Category Header */}
                <span className="text-[#A8843A] text-xs font-semibold tracking-wider uppercase block mb-3">
                  {card.category}
                </span>

                {/* Title */}
                <h3 className="text-[#0b1329] text-base md:text-lg font-semibold tracking-tight mb-3">
                  {card.title}
                </h3>
              </div>

              {/* Description */}
              <div>
                <p className="text-gray-600 text-sm md:text-base font-light leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
