import React from "react";

export default function HowWeBuildSection() {
  const items = [
    {
      title: "Architect for the material decision",
      description:
        "Start with who acts, what authority applies, what truth changes, and what evidence must remain.",
    },
    {
      title: "State uncertainty explicitly",
      description:
        "Use Unknown, Limited, Planned, Pending validation, or Not Available rather than silently presenting incomplete confidence as certainty.",
    },
    {
      title: "Separate source truth from intelligence",
      description:
        "AI and reports may interpret; governed services own material records.",
    },
    {
      title: "Design for exceptions",
      description:
        "Real operations include delegations, overrides, conflicts, legal holds, stale sources, partial integrations, and jurisdiction gaps.",
    },
    {
      title: "Make proof retrievable",
      description:
        "Controls and claims should point to evidence that a reviewer can inspect.",
    },
    {
      title: "Earn scale through reusable foundations",
      description:
        "Identity, entity, policy, evidence, security, and integration foundations should travel across modules.",
    },
  ] as const;

  return (
    <section className="relative w-full bg-[#EFE8D8] py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start">
        {/* Header Section */}
        <div className="mb-6">
          {/* Subtitle */}
          <span className="text-[#A8843A] text-xs md:text-sm font-semibold tracking-[0.2em] uppercase mb-3 block">
            HOW WE BUILD
          </span>

          {/* Main Headline */}
          <h1 className="text-3xl md:text-[32px] lg:text-[42px] font-bold text-[#0b1329] leading-tight tracking-tight">
            Repeatable team behavior, not a values poster
          </h1>
        </div>

        {/* List / Table Section */}
        <div className="w-full flex flex-col border-t border-gray-300">
          {items.map((item, index) => (
            <div
              key={index}
              className="w-full py-8 border-b border-gray-300 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-8"
            >
              {/* Title */}
              <div className="w-full md:w-5/12 text-[#0b1329] text-base md:text-lg font-semibold tracking-tight">
                {item.title}
              </div>

              {/* Description */}
              <div className="w-full md:w-7/12 text-gray-600 text-sm md:text-base font-light leading-relaxed">
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
