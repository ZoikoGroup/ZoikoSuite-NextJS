import React from "react";

const cards = [
  {
    title: "Owned",
    lines: ["Every policy has an", "accountable owner", "and defined approval", "authority."],
  },
  {
    title: "Versioned",
    lines: ["Current and", "superseded versions", "remain", "distinguishable and", "traceable."],
  },
  {
    title: "Effective-dated",
    lines: [
      "Published",
      "requirements show",
      "when they take effect",
      "and what they",
      "supersede.",
    ],
  },
  {
    title: "Scoped",
    lines: [
      "Applicability is",
      "defined by product,",
      "entity, deployment,",
      "jurisdiction, or",
      "audience.",
    ],
  },
  {
    title: "Reviewed",
    lines: ["Review status is", "visible; overdue", "review cannot look", "silently current."],
  },
  {
    title: "Evidence-linked",
    lines: [
      "Policies connect to",
      "controls and",
      "evidence without",
      "implying a document",
      "alone proves",
      "operation.",
    ],
  },
];

export default function GovernanceModelSection() {
  return (
    <section className="w-full bg-[#F7F5F0] font-sans py-20 md:py-24 px-6 md:px-14 flex justify-center">
      <div className="w-full max-w-[1320px] md:px-12 flex flex-col gap-12">
        {/* Header */}
        <div className="flex flex-col gap-4">
          <span
            className="self-stretch text-[#A7852B] text-xs font-normal leading-4 tracking-wider"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            02 / GOVERNANCE MODEL
          </span>
          <h2
            className="self-stretch text-[#0D2636] text-3xl md:text-4xl font-semibold leading-10"
            style={{ fontFamily: "'Archivo', sans-serif" }}
          >
            Six things every published policy must be true of.
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4">
          {cards.map((card) => (
            <div
              key={card.title}
              className="px-7 py-7 bg-white rounded-2xl border border-[#D6DEE3] flex flex-col items-start gap-2.5"
            >
              <h3
                className="text-[#0D2636] text-lg font-semibold leading-5"
                style={{ fontFamily: "'Archivo', sans-serif" }}
              >
                {card.title}
              </h3>
              <p
                className="text-[#3E5A6B] text-sm font-normal leading-6 whitespace-pre-line"
                style={{ fontFamily: "'Archivo', sans-serif" }}
              >
                {card.lines.join("\n")}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
