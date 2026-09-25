import React from "react";

export default function PreventingTheMostCommonLicensingConfusionSection() {
  const cards = [
    {
      title: "Open-source software",
      description:
        "Distributed under a license that qualifies as open source under its terms; OSI approval shown only when verified.",
    },
    {
      title: "Source-available",
      description:
        "Source may be viewable, but the license may impose restrictions inconsistent with open-source definitions — never grouped under Open Source.",
    },
    {
      title: "Public domain / dedication",
      description:
        "Rights status depends on the specific instrument and jurisdictional treatment.",
    },
    {
      title: "Proprietary / commercial",
      description:
        "Third-party component governed by negotiated or vendor terms — public record may disclose category without exposing the contract.",
    },
    {
      title: "Fonts / icons / media",
      description:
        "Non-code assets can carry separate attribution, redistribution, or embedding terms.",
    },
    {
      title: "Data / documentation",
      description:
        "Datasets, schemas, examples, or reference text may use separate terms.",
    },
    {
      title: "Model / AI asset",
      description:
        "Model weights, artifacts, or evaluation data may carry model-specific terms — no assumption of open-source status.",
    },
    {
      title: "Zoiko-authored SDK/sample code",
      description:
        "Code published by Zoiko may use a specific developer license separate from the platform Terms of Service.",
    },
  ] as const;

  return (
    <section className="relative w-full bg-[#F6F1E6] py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start w-full">
        {/* Header Section */}
        <div className="mb-12 w-full">
          {/* Subtitle */}
          <span className="text-[#A8843A] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            LICENSE SCOPE & DEFINITIONS
          </span>

          {/* Main Headline */}
          <h1 className="text-3xl lg:text-[32px] font-bold text-[#0b1329] leading-tight tracking-tight max-w-3xl">
            Preventing the most common licensing confusion before you enter the
            registry
          </h1>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 w-full">
          {cards.map((card, index) => (
            <div
              key={index}
              style={{ borderRadius: "12px" }}
              className="bg-white border border-[#DCD6C8] p-6 flex flex-col justify-start shadow-sm"
            >
              <h2 className="text-[15px] font-semibold text-[#0b1329] tracking-tight mb-2">
                {card.title}
              </h2>
              <p className="text-gray-600 font-light leading-relaxed text-[11.5px]">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
