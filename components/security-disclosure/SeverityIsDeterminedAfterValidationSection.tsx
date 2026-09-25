import React from "react";

export default function SeverityIsDeterminedAfterValidationSection() {
  const cards = [
    {
      title: "Duplicate",
      description: "Same root cause already tracked",
    },
    {
      title: "Informational",
      description: "Useful observation, no qualifying vulnerability",
    },
    {
      title: "Not reproducible",
      description: "Unable to validate with available evidence",
    },
    {
      title: "Out of scope",
      description: "Asset/testing not authorized",
    },
    {
      title: "Not applicable",
      description: "Expected behavior, no boundary break",
    },
    {
      title: "Accepted risk",
      description: "Validated, consciously accepted",
    },
    {
      title: "Remediated",
      description: "Fix deployed and verified",
    },
    {
      title: "Critical/High/Med/Low",
      description: "Validated risk classification",
    },
  ] as const;

  return (
    <section className="relative w-full bg-white py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start w-full">
        {/* Header Section */}
        <div className="mb-12 w-full">
          {/* Subtitle (Eye tag size: xs) */}
          <span className="text-[#A8843A] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            SEVERITY, DUPLICATE & DISPOSITION MODEL
          </span>

          {/* Main Headline (32px for lg devices) */}
          <h1 className="text-3xl lg:text-[32px] font-bold text-[#0b1329] leading-tight tracking-tight max-w-3xl">
            Severity is determined after validation — may differ from the
            reporter&apos;s estimate
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
