import React from "react";

export default function ClauseGroupsSummarizedSection() {
  const cards = [
    {
      title: "Documented instructions",
      description:
        "Process only on documented instructions; unlawful-instruction escalation.",
    },
    {
      title: "Confidentiality",
      description:
        "Access limited to authorized persons bound by confidentiality obligations.",
    },
    {
      title: "Security",
      description:
        "Article-32-style safeguards and the approved TOM schedule, status/deployment qualified.",
    },
    {
      title: "Subprocessors",
      description:
        "Authorization model, notice, objection, equivalent obligations, liability flow-down.",
    },
    {
      title: "Data subject rights",
      description:
        "Technical/organizational assistance, routing, scope, and timing obligations.",
    },
    {
      title: "Controller assistance",
      description:
        "Security, breach, DPIA, consultation, and information assistance as applicable.",
    },
    {
      title: "Return / deletion",
      description:
        "Customer choice, deletion/return, legal retention exceptions, backup handling.",
    },
    {
      title: "Audit / information",
      description:
        "Information provision, audits/inspections, evidence alternatives, and safeguards.",
    },
  ] as const;

  return (
    <section className="relative w-full bg-[#F6F1E6] py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start w-full">
        {/* Header Section */}
        <div className="mb-12 w-full">
          {/* Subtitle (Eye tag size: xs) */}
          <span className="text-[#A8843A] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            PROCESSOR OBLIGATION MAP
          </span>

          {/* Main Headline (32px for lg devices) */}
          <h1 className="text-3xl lg:text-[32px] font-bold text-[#0b1329] leading-tight tracking-tight">
            Clause groups — summarized, never paraphrased in place of legal text
          </h1>
        </div>

        {/* Grid of Cards */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
