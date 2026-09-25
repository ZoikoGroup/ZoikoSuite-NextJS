import React from "react";

export default function MeasuresToSupportAccessibilitySection() {
  const cards = [
    {
      title: "Design system",
      description:
        "Accessible component patterns, focus states, semantics, contrast, responsive behavior, and motion settings.",
    },
    {
      title: "Engineering standards",
      description:
        "Semantic HTML, keyboard operability, programmatic names/states, accessible error handling, reflow, non-color-only indicators.",
    },
    {
      title: "Quality assurance",
      description:
        "Automated checks plus manual keyboard, screen-reader, zoom/reflow, and representative-journey testing.",
    },
    {
      title: "Content operations",
      description:
        "Plain language, heading structure, alternative text, descriptive links, accessible media/document production.",
    },
    {
      title: "Accessibility review",
      description:
        "Specialist review for material patterns/features and high-impact changes.",
    },
    {
      title: "Issue management",
      description:
        "Accessibility defects have severity, owner, remediation state, verification, and regression evidence.",
    },
  ] as const;

  return (
    <section className="relative w-full bg-[#F6F1E6] py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start w-full">
        {/* Header Section */}
        <div className="mb-12 w-full">
          {/* Subtitle (Eye tag size: xs) */}
          <span className="text-[#A8843A] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            MEASURES TO SUPPORT ACCESSIBILITY
          </span>

          {/* Main Headline (32px for lg devices) */}
          <h1 className="text-3xl lg:text-[32px] font-bold text-[#0b1329] leading-tight tracking-tight">
            Concrete and verifiable — not aspirational slogans
          </h1>
        </div>

        {/* Grid of Cards */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              style={{ borderRadius: "14px" }}
              className="bg-white border border-[#DCD6C8] p-6 shadow-sm flex flex-col gap-2"
            >
              <h3 className="text-[#0b1329] text-base font-semibold tracking-tight">
                {card.title}
              </h3>
              <p className="text-gray-600 font-light leading-relaxed text-[15.5px]">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
