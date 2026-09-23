import React from "react";

const requirements = [
  {
    title: "Identity & legal entity",
    lines: [
      "Contracting entity, ownership information,",
      "sanctions/restrictions checks where applicable.",
    ],
  },
  {
    title: "Security",
    lines: [
      "Access model, authentication, vulnerability",
      "management, incident process, secure SDLC,",
      "infrastructure controls.",
    ],
  },
  {
    title: "Privacy",
    lines: [
      "Data roles, subprocessors, transfer mechanism,",
      "retention, deletion, breach notification.",
    ],
  },
  {
    title: "Compliance",
    lines: [
      "Relevant licenses, registrations, and professional",
      "credentials only where applicable to the service.",
    ],
  },
  {
    title: "AI",
    lines: [
      "Whether partner AI processes ZoikoSuite/",
      "customer data; model disclosure; human-review",
      "expectations.",
    ],
  },
  {
    title: "Resilience & evidence",
    lines: [
      "BCP/DR, support hours, escalation, critical",
      "supplier concentration, required proof and expiry",
      "dates.",
    ],
  },
];

export default function TrustAndDiligenceSection() {
  return (
    <section className="w-full bg-[#EFE8D8] py-16 lg:py-20 px-6 md:px-12 lg:px-20 font-sans border-b border-[#DCD6C8]/40">
      <div className="max-w-6xl mx-auto flex flex-col items-start">
        <span className="text-[#A8843A] text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-3 block">
          TRUST &amp; DILIGENCE REQUIREMENTS
        </span>

        <h2 className="text-3xl md:text-[32px] font-serif font-bold text-[#16223A] leading-tight tracking-tight max-w-3xl">
          <span className="block whitespace-normal lg:whitespace-nowrap">
            What every partner relationship is reviewed
          </span>
          <span className="block whitespace-normal lg:whitespace-nowrap">
            against
          </span>
        </h2>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          {requirements.map((requirement) => (
            <div
              key={requirement.title}
              className="bg-white rounded-lg border border-[#DCD6C8] p-5 flex flex-col gap-2 transition-shadow hover:shadow-xs"
            >
              <h3 className="text-[#16223A] text-sm font-bold leading-6">
                {requirement.title}
              </h3>
              <p className="text-[#4B5872] text-xs font-normal leading-5">
                {requirement.lines.map((line, idx) => (
                  <span key={idx} className="block whitespace-normal lg:whitespace-nowrap">
                    {line}
                  </span>
                ))}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
