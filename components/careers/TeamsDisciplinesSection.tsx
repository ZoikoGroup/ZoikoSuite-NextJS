import React from "react";

const disciplines = [
  {
    name: "Engineering & Architecture",
    whatToShowLines: [
      "Platform, backend, frontend, infrastructure, integration, quality,",
      "reliability.",
    ],
    typicalProofLines: [
      "Architecture challenges, ownership model, engineering principles.",
    ],
  },
  {
    name: "Product & Design",
    whatToShowLines: [
      "Product management, UX, research, content design, design",
      "systems.",
    ],
    typicalProofLines: [
      "Decision model, research rigor, accessibility, customer complexity.",
    ],
  },
  {
    name: "Data, AI & Intelligence",
    whatToShowLines: [
      "Data engineering, ML/AI, evaluation, analytics, responsible AI.",
    ],
    typicalProofLines: [
      "Governance boundaries, evaluation practices, evidence and human",
      "oversight.",
    ],
  },
  {
    name: "Security, Privacy & Trust",
    whatToShowLines: [
      "Security engineering, privacy, compliance, governance, assurance.",
    ],
    typicalProofLines: [
      "Control ownership, evidence discipline, trust surfaces.",
    ],
  },
  {
    name: "Domain Expertise",
    whatToShowLines: [
      "Finance, payroll, tax, legal, compliance, operations specialists.",
    ],
    typicalProofLines: [
      "How expert judgment informs product rules and validation.",
    ],
  },
  {
    name: "Customer & Solutions",
    whatToShowLines: [
      "Solutions architecture, implementation, migration, customer",
      "success,",
      "support.",
    ],
    typicalProofLines: [
      "Enterprise deployment, configuration, adoption, escalation",
      "responsibilities.",
    ],
  },
  {
    name: "Business Operations",
    whatToShowLines: [
      "People, finance, legal, partnerships, marketing, sales operations.",
    ],
    typicalProofLines: [
      "Operating-company context and role-specific responsibilities.",
    ],
  },
];

export default function TeamsDisciplinesSection() {
  return (
    <section
      id="teams"
      className="relative w-full bg-[#EFE8D8] py-16 lg:py-20 px-6 md:px-12 lg:px-20 font-sans border-b border-[#DCD6C8]/40"
    >
      <div className="max-w-6xl mx-auto flex flex-col items-start">
        {/* Header Section */}
        <div className="w-full mb-10">
          <span className="text-[#A8843A] text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-3 block">
            TEAMS &amp; DISCIPLINES
          </span>

          <h2 className="text-3xl md:text-[36px] font-serif font-bold text-[#16223A] leading-tight tracking-tight">
            Find your professional home
          </h2>
        </div>

        {/* Discipline Table */}
        <div className="w-full">
          {/* Table Head */}
          <div className="hidden md:flex w-full border-t border-[#DCD6C8] py-4 gap-6">
            <div className="w-1/4">
              <span className="text-[#4B5872] text-sm font-bold uppercase tracking-wide">
                Discipline
              </span>
            </div>
            <div className="flex-1">
              <span className="text-[#4B5872] text-sm font-bold uppercase tracking-wide">
                What to show
              </span>
            </div>
            <div className="flex-1">
              <span className="text-[#4B5872] text-sm font-bold uppercase tracking-wide">
                Typical proof
              </span>
            </div>
          </div>

          {/* Table Rows */}
          <div className="flex flex-col border-t border-[#DCD6C8] md:border-t-0">
            {disciplines.map((discipline) => (
              <div
                key={discipline.name}
                className="w-full border-b border-[#DCD6C8] py-5 flex flex-col md:flex-row gap-4 md:gap-6"
              >
                <div className="md:w-1/4">
                  <h3 className="text-[#16223A] text-sm md:text-base font-bold leading-6">
                    {discipline.name}
                  </h3>
                </div>
                <div className="flex-1">
                  <p className="text-[#4B5872] text-sm font-normal leading-5">
                    {discipline.whatToShowLines.map((line, idx) => (
                      <span key={idx} className="block whitespace-normal lg:whitespace-nowrap">
                        {line}
                      </span>
                    ))}
                  </p>
                </div>
                <div className="flex-1">
                  <p className="text-[#4B5872] text-sm font-normal leading-5">
                    {discipline.typicalProofLines.map((line, idx) => (
                      <span key={idx} className="block whitespace-normal lg:whitespace-nowrap">
                        {line}
                      </span>
                    ))}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
