import React from "react";

export default function DisclosedSeparatelySection() {
  const cards = [
    {
      title: "Fonts",
      description:
        "Family/version, license, embedding/distribution conditions, required attribution, product surfaces.",
    },
    {
      title: "Icons / illustrations / media",
      description:
        "Asset library, creator/provider, license, permitted use, attribution, modifications.",
    },
    {
      title: "Data / datasets",
      description:
        "Dataset/provider, license or terms, permitted use, redistribution, attribution, update/version.",
    },
    {
      title: "AI models / model assets",
      description:
        'Provider/model version, model license/terms, weights/source status, usage boundaries — never a generic "open model" label.',
    },
  ] as const;

  return (
    <section className="relative w-full bg-[#F6F1E6] py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start w-full">
        {/* Header Section */}
        <div className="mb-12 w-full">
          {/* Subtitle */}
          <span className="text-[#A8843A] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            FONTS, ICONS, MEDIA, DOCUMENTATION, DATA & MODEL LICENSES
          </span>

          {/* Main Headline */}
          <h1 className="text-3xl lg:text-[32px] font-bold text-[#0b1329] leading-tight tracking-tight max-w-3xl">
            Disclosed separately from code licensing
          </h1>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {cards.map((card, index) => (
            <div
              key={index}
              style={{ borderRadius: "12px" }}
              className="bg-white border border-[#DCD6C8] p-6 flex flex-col justify-start shadow-sm"
            >
              <h2 className="text-base font-semibold text-[#0b1329] tracking-tight mb-2">
                {card.title}
              </h2>
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
