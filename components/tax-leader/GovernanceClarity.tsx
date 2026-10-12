import React from "react";

interface GovernanceCard {
  number: string;
  title: string;
  description: string;
}

const governanceData: GovernanceCard[] = [
  {
    number: "01",
    title: "No universal coverage",
    description:
      "Jurisdictions, entities, and obligation applicability require scope-specific confirmation.",
  },
  {
    number: "02",
    title: "No evidence guarantee",
    description:
      "Evidence records do not establish legal compliance, certification, or audit approval.",
  },
  {
    number: "03",
    title: "Sensitive records",
    description:
      "Do not send tax identifiers, employee tax data, payroll records, or confidential financial artifacts through this page.",
  },
  {
    number: "04",
    title: "No automated tax advice",
    description:
      "Calculation, filing, payment, regulatory updates, and professional advice are not established by the supplied sources.",
  },
];

export default function GovernanceClarity() {
  return (
    <section className="bg-[#F6F5F1] py-20 px-6 md:px-12 lg:px-20 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-14">
          <p className="text-[#A2783A] text-xs font-bold tracking-[0.2em] uppercase mb-3">
            SOURCE & TRUST
          </p>
          <h2 className="text-[#1E293B] text-4xl md:text-5xl font-bold tracking-tight leading-[1.15]">
            Governance clarity without overclaim.
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {governanceData.map((card) => (
            <div
              key={card.number}
              className="bg-white rounded-xl border border-[#E2E8F0] p-8 shadow-sm flex flex-col justify-between"
            >
              <div>
                <span className="text-[#A2783A] text-xs font-bold block mb-4">
                  {card.number}
                </span>
                <h3 className="text-[#1E293B] text-lg font-bold mb-3">
                  {card.title}
                </h3>
                <p className="text-[#64748B] text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
