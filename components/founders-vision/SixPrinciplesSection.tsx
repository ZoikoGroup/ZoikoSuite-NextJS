import React from "react";

export default function SixPrinciplesSection() {
  const principles = [
    {
      number: "01",
      title: "Governance before execution",
      description:
        "Control is strongest when it participates in the action, not when it reviews the aftermath.",
      consequence:
        "Policy evaluation, authority resolution, segregation of duties, approvals, and exception handling sit in the execution path.",
    },
    {
      number: "02",
      title: "Evidence by default",
      description:
        "A material decision should leave behind its reason, authority, inputs, and outcome.",
      consequence:
        "Governance decisions, workflow history, document lineage, operational events, and evidence manifests.",
    },
    {
      number: "03",
      title: "Truth has an owner",
      description:
        "Critical data becomes unreliable when multiple systems can silently become authoritative.",
      consequence:
        "Explicit source ownership, versioning, provenance, controlled synchronization, and reconciliation.",
    },
    {
      number: "04",
      title: "Context travels with the action",
      description:
        'Entity, jurisdiction, effective date, residency, and role change what "correct" means.',
      consequence:
        "Runtime context resolution instead of generic global defaults.",
    },
    {
      number: "05",
      title: "Intelligence remains governed",
      description:
        "AI can assist judgment but cannot erase policy, authority, provenance, or human responsibility.",
      consequence:
        "AI controls, confidence/provenance, human review, exclusions, auditability, and source-truth protection.",
    },
    {
      number: "06",
      title: "Proof before publishing",
      description:
        "Credibility compounds when the company distinguishes what exists, what is being validated, and what remains an ambition.",
      consequence:
        "Claim-status labels, evidence ladder, no invented metrics, explicit availability/certification boundaries.",
    },
  ] as const;

  return (
    <section className="relative w-full bg-white py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start">
        {/* Header Section */}
        <div className="max-w-3xl mb-16">
          {/* Subtitle */}
          <span className="text-[#A8843A] text-xs md:text-sm font-semibold tracking-[0.2em] uppercase mb-3 block">
            SIX NON-NEGOTIABLE PRINCIPLES
          </span>

          {/* Main Headline */}
          <h1 className="text-3xl md:text-[32px] lg:text-[42px] font-bold text-[#0b1329] leading-tight tracking-tight mb-4">
            The convictions that don&apos;t move
          </h1>

          {/* Description */}
          <p className="text-gray-600 text-base md:text-lg font-light leading-relaxed">
            Founder principles, not feature-availability claims. Each maps to a
            concrete architecture consequence.
          </p>
        </div>

        {/* Cards Grid (3 columns x 2 rows) */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {principles.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-200 flex flex-col justify-between"
            >
              <div>
                {/* Number */}
                <span className="text-[#A8843A] text-xl font-bold font-mono block mb-4">
                  {item.number}
                </span>

                {/* Title */}
                <h3 className="text-[#0b1329] text-base md:text-lg font-semibold tracking-tight mb-3">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm md:text-base font-light italic leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <div>
                {/* Divider */}
                <div className="w-full border-t border-gray-100 pt-4 mb-3"></div>

                {/* Architecture Consequence Label */}
                <span className="text-[#A8843A] text-[10px] md:text-xs font-semibold tracking-widest uppercase block mb-1">
                  ARCHITECTURE CONSEQUENCE
                </span>

                {/* Consequence Description */}
                <p className="text-gray-600 text-xs md:text-sm font-light leading-relaxed">
                  {item.consequence}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
