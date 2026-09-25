import React from "react";

export default function EvidenceBeforeAssertionSection() {
  const items = [
    {
      number: "01",
      description:
        "Diagrams, data/control flows, ownership models, security/evidence briefs. Supports architecture claims; does not prove customer outcomes.",
    },
    {
      number: "02",
      description:
        "Working demonstrations, screenshots, workflow recordings, release-state documentation. Proves a capability exists in the demonstrated scope.",
    },
    {
      number: "03",
      description:
        "Shadow-mode equivalence, migration integrity, control tests, QA results. Supports readiness within the tested scope.",
    },
    {
      number: "04",
      description:
        "Approved named case studies, verified measures, references — published only with customer permission and measurement basis.",
    },
    {
      number: "05",
      description:
        "Certifications, attestations, audit reports, penetration-test summaries, partner validation. Never inferred from architecture or readiness.",
    },
  ] as const;

  return (
    <section className="relative w-full bg-[#0A1D34] py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start">
        {/* Header Section */}
        <div className="max-w-3xl mb-16">
          {/* Subtitle */}
          <span className="text-[#A8843A] text-xs md:text-sm font-semibold tracking-[0.2em] uppercase mb-3 block">
            EVIDENCE BEFORE ASSERTION
          </span>

          {/* Main Headline */}
          <h1 className="text-3xl md:text-[32px] lg:text-[42px] font-bold text-white leading-tight tracking-tight mb-4">
            Earn trust the same way the product does: preserve the evidence.
          </h1>

          {/* Description */}
          <p className="text-gray-300 text-base md:text-lg font-light leading-relaxed">
            ZoikoSuite publishes what can be demonstrated, labels what is in
            phased delivery or architecture target, and avoids unsupported
            certification, customer, coverage, or performance claims.
          </p>
        </div>

        {/* List of Cards / Pills */}
        <div className="w-full flex flex-col gap-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="w-full bg-white rounded-2xl p-6 md:px-8 md:py-6 shadow-sm flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8"
            >
              {/* Number */}
              <span className="text-[#A8843A] text-lg md:text-xl font-bold font-mono shrink-0">
                {item.number}
              </span>

              {/* Description */}
              <p className="text-gray-700 text-sm md:text-base font-light leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
