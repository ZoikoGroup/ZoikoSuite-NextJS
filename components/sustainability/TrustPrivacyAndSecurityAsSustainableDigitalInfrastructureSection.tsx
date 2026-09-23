import React from "react";

export default function TrustPrivacyAndSecurityAsSustainableDigitalInfrastructureSection() {
  const cards = [
    {
      title: "Privacy architecture",
      description:
        "Responsible collection, purpose, retention, and rights handling.",
    },
    {
      title: "Security",
      description: "Resilient, controlled operations and risk reduction.",
    },
    {
      title: "Data residency",
      description: "Deployment- and jurisdiction-aware data location choices.",
    },
    {
      title: "Evidence",
      description: "Defensible records for decisions, controls, and claims.",
    },
    {
      title: "Responsible AI",
      description: "Governed intelligence and human accountability.",
    },
    {
      title: "Accessibility",
      description: "Inclusive access and usability.",
    },
  ] as const;

  return (
    <section className="relative w-full bg-[#EFE8D8] py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start">
        {/* Header Section */}
        <div className="max-w-3xl mb-12">
          {/* Subtitle (Eye tag size: xs) */}
          <span className="text-[#A8843A] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            TRUST, PRIVACY & SECURITY AS SUSTAINABLE DIGITAL INFRASTRUCTURE
          </span>

          {/* Main Headline (32px for lg devices) */}
          <h1 className="text-3xl lg:text-[32px] font-bold text-[#0b1329] leading-tight tracking-tight mb-4">
            Durable digital trust reduces institutional fragility
          </h1>

          {/* Description */}
          <p className="text-gray-600 font-light leading-relaxed text-[16.5px]">
            Data minimization, access governance, retention, security,
            residency, evidence, incident response, and policy control — never
            called &quot;ESG compliance.&quot;
          </p>
        </div>

        {/* 3x2 Grid Section */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              style={{ borderRadius: "14px" }}
              className="w-full p-8 border border-[#DCD6C8] bg-white shadow-sm flex flex-col items-start justify-between min-h-[160px] relative"
            >
              <h3 className="text-lg font-semibold tracking-tight text-[#0b1329] mb-3">
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
