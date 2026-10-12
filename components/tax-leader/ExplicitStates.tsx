import React from "react";

interface StateCard {
  number: string;
  title: string;
  description: string;
}

const statesData: StateCard[] = [
  {
    number: "01",
    title: "Not assessed / In review",
    description:
      "Missing assessment remains visible. Review is a process state, not an assurance result.",
  },
  {
    number: "02",
    title: "Awaiting owner / Action required",
    description:
      "An unresolved decision or gap needs explicit ownership and a next step.",
  },
  {
    number: "03",
    title: "Stale / Source unavailable",
    description:
      "Missing or outdated source information cannot support verified due-state judgments.",
  },
  {
    number: "04",
    title: "Restricted / Out of scope",
    description:
      "Access restrictions and unsupported scope must remain clear rather than appearing as an empty result.",
  },
];

export default function ExplicitStates() {
  return (
    <section className="bg-[#F6F5F1] py-20 px-6 md:px-12 lg:px-20 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-14">
          <p className="text-[#A2783A] text-xs font-bold tracking-[0.2em] uppercase mb-3">
            EXPLICIT STATES
          </p>
          <h2 className="text-[#1E293B] text-4xl md:text-5xl font-bold tracking-tight mb-4 leading-[1.15]">
            Unknown stays unknown.
          </h2>
          <p className="text-[#64748B] text-base md:text-lg max-w-2xl leading-relaxed font-normal">
            A missing source, unassigned decision, or restricted scope needs a
            clear explanation. It must not appear as verified completion.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {statesData.map((card) => (
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
