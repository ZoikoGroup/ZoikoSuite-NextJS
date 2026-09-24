import React from "react";

const categories = [
  {
    title: "TECHNOLOGY & INTEGRATION",
    lines: [
      "APIs, identity, data, workflow,",
      "infrastructure, connectivity, and product",
      "integrations.",
    ],
  },
  {
    title: "IMPLEMENTATION & DELIVERY",
    lines: [
      "Migration, configuration, change, rollout,",
      "and operational support.",
    ],
  },
  {
    title: "PROFESSIONAL & JURISDICTION",
    lines: [
      "Local/regulatory domain expertise where",
      "the workflow is Partner-Supported.",
    ],
  },
  {
    title: "CHANNEL & REFERRAL",
    lines: [
      "Approved commercial routes for",
      "introductions, referrals, co-sell, or resale",
      "where contracted.",
    ],
  },
  {
    title: "STRATEGIC ALLIANCE",
    lines: [
      "Institutional or market collaboration with",
      "defined scope and governance.",
    ],
  },
  {
    title: "DESIGN & VALIDATION",
    lines: [
      "Controlled pilots, design feedback,",
      "validation, and evidence-building.",
    ],
  },
];

export default function EcosystemModelSection() {
  return (
    <section className="w-full bg-white py-16 lg:py-20 px-6 sm:px-10 lg:px-16 font-sans border-b border-[#DCD6C8]/40">
      <div className="max-w-[1180px] mx-auto flex flex-col items-start">
        <span className="text-[#A8843A] text-xs font-bold tracking-[0.2em] uppercase mb-3 block">
          ECOSYSTEM MODEL
        </span>

        <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-serif font-bold text-[#16223A] leading-tight tracking-tight">
          Different relationships. Clear responsibilities.
        </h2>

        <p className="text-[#4B5872] text-sm sm:text-base font-normal leading-relaxed mt-3 max-w-2xl">
          <span className="block whitespace-normal lg:whitespace-nowrap">
            Each category opens an explanatory drawer with definition, buyer use case, program status,
          </span>
          <span className="block whitespace-normal lg:whitespace-nowrap">
            and public listing rules.
          </span>
        </p>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {categories.map((category) => (
            <div
              key={category.title}
              className="bg-white rounded-2xl border border-[#DCD6C8] p-6 sm:p-7 flex flex-col justify-start gap-3 transition-shadow hover:shadow-md cursor-pointer"
            >
              <span className="text-[#A8843A] text-xs font-bold uppercase tracking-wider">
                {category.title}
              </span>
              <p className="text-[#16223A] text-sm sm:text-base font-bold leading-6">
                {category.lines.map((line, idx) => (
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
