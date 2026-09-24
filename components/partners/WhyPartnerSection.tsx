import React from "react";

const benefits = [
  {
    title: "Governance-first platform",
    lines: [
      "Collaborate around workflows where authority,",
      "policy, jurisdiction, evidence, and accountability",
      "are first-class architecture.",
    ],
  },
  {
    title: "Cross-domain operating context",
    lines: [
      "Participate in an ecosystem spanning finance,",
      "workforce, legal, compliance, evidence, and",
      "intelligence.",
    ],
  },
  {
    title: "Enterprise diligence discipline",
    lines: [
      "Work inside a model that expects explicit security,",
      "privacy, data, evidence, and claim boundaries.",
    ],
  },
  {
    title: "Global expansion method",
    lines: [
      "Support customers where local or specialist",
      "capability is verified and status-labeled.",
    ],
  },
  {
    title: "Evidence-led adoption",
    lines: [
      "Integrations, migrations, pilots, and partner-",
      "supported workflows produce proof rather than",
      "rely on promotional claims.",
    ],
  },
];

export default function WhyPartnerSection() {
  return (
    <section className="w-full bg-white py-16 lg:py-20 px-6 md:px-12 lg:px-20 font-sans border-b border-[#DCD6C8]/40">
      <div className="max-w-6xl mx-auto flex flex-col items-start">
        <span className="text-[#A8843A] text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-3 block">
          WHY PARTNER WITH ZOIKOSUITE
        </span>

        <h2 className="text-3xl md:text-[32px] font-serif font-bold text-[#16223A] leading-tight tracking-tight whitespace-nowrap">
          What the relationship offers a prospective partner
        </h2>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="bg-white rounded-lg border border-[#DCD6C8] p-5 flex flex-col gap-2 transition-shadow hover:shadow-xs"
            >
              <h3 className="text-[#16223A] text-sm font-bold leading-6">
                {benefit.title}
              </h3>
              <p className="text-[#4B5872] text-xs font-normal leading-5">
                {benefit.lines.map((line, idx) => (
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
