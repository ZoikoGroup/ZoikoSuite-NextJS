import React from "react";

export default function NamingShortcutsSection() {
  const shortcuts = [
    {
      label: "NOT OUR MODEL",
      title: "Feature count without control coherence",
      description:
        "More modules do not create more trust if authority, identity, evidence, and source ownership remain fragmented.",
    },
    {
      label: "NOT OUR MODEL",
      title: "AI autonomy as a headline",
      description:
        "Autonomy without policy, provenance, and accountable authority can increase operational risk.",
    },
    {
      label: "NOT OUR MODEL",
      title: "Blanket global-coverage claims",
      description:
        "Jurisdiction readiness must be validated by workflow, authority, and effective date.",
    },
    {
      label: "NOT OUR MODEL",
      title: "Certification theater",
      description:
        "Badges without verified scope, issuer, validity, and evidence reduce credibility.",
    },
    {
      label: "NOT OUR MODEL",
      title: "Big-bang replacement for its own sake",
      description:
        "Migration risk should be reduced through coexistence, validation, and progressive adoption.",
    },
    {
      label: "NOT OUR MODEL",
      title: "Surveillance as workforce governance",
      description:
        "Workforce context should support policy alignment, not behavior policing.",
    },
  ] as const;

  return (
    <section className="relative w-full bg-[#0A1D34] py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start">
        {/* Header Section */}
        <div className="max-w-3xl mb-16">
          {/* Subtitle */}
          <span className="text-[#A8843A] text-xs md:text-sm font-semibold tracking-[0.2em] uppercase mb-3 block">
            WHAT WE WILL NOT OPTIMIZE FOR
          </span>

          {/* Main Headline */}
          <h1 className="text-3xl md:text-[32px] lg:text-[42px] font-bold text-white leading-tight tracking-tight">
            Naming the shortcuts we won&apos;t take
          </h1>
        </div>

        {/* Grid Section (3 columns x 2 rows) */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {shortcuts.map((item, index) => (
            <div key={index} className="flex flex-col items-start">
              {/* Badge / Label */}
              <div className="flex items-center gap-1.5 text-[#E05638] text-xs font-semibold tracking-widest uppercase mb-3">
                <span>✕</span>
                <span>{item.label}</span>
              </div>

              {/* Title */}
              <h3 className="text-white text-base md:text-lg font-semibold tracking-tight mb-2">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 text-sm md:text-base font-light leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
