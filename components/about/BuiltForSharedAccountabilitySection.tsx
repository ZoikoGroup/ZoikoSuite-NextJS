import React from "react";

export default function BuiltForSharedAccountabilitySection() {
  const personas = [
    {
      title: "CFO",
      headline: "Financial truth and close confidence",
      description:
        "Consolidated view, rule-linked postings, evidence-ready close.",
    },
    {
      title: "GENERAL COUNSEL",
      headline: "Legal execution inside operations",
      description:
        "Clause-linked obligations, signatory controls, decision lineage.",
    },
    {
      title: "CHRO",
      headline: "Employment and pay by jurisdiction",
      description:
        "Contract versions, payroll explainability, termination controls.",
    },
    {
      title: "CIO",
      headline: "One governed control model",
      description: "API contracts, workload identity, deployment options.",
    },
    {
      title: "COO",
      headline: "Operational execution visibility",
      description: "Obligation queues, escalation paths, status views.",
    },
    {
      title: "AUDIT COMMITTEE",
      headline: "Evidence that the control operated",
      description:
        "Governance decisions, workflow history, evidence manifests.",
    },
  ] as const;

  return (
    <section className="relative w-full bg-white py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start">
        {/* Header Section */}
        <div className="max-w-3xl mb-12">
          {/* Subtitle */}
          <span className="text-[#A8843A] text-xs md:text-sm font-semibold tracking-[0.2em] uppercase mb-3 block">
            EQUAL VISUAL WEIGHTING
          </span>

          {/* Main Headline */}
          <h1 className="text-3xl md:text-4xl lg:text-[32px] font-serif font-bold text-[#0b1329] leading-[1.15] tracking-tight mb-4">
            Built for shared accountability
          </h1>

          {/* Description */}
          <p className="text-gray-600 text-base md:text-lg font-light leading-relaxed">
            No single executive persona is the implied &quot;owner&quot; of
            ZoikoSuite.
          </p>
        </div>

        {/* Persona Cards Grid (3 columns, 2 rows) */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {personas.map((persona, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-[#DCD6C8] flex flex-col justify-between"
            >
              <div>
                {/* Persona Title Header */}
                <span className="text-[#A8843A] text-xs font-semibold tracking-wider uppercase block mb-3">
                  {persona.title}
                </span>

                {/* Persona Headline */}
                <h3 className="text-[#0b1329] text-base font-bold leading-snug mb-2">
                  {persona.headline}
                </h3>
              </div>

              {/* Persona Description */}
              <div>
                <p className="text-gray-600 text-sm font-light leading-relaxed">
                  {persona.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
