import React from "react";

export default function WhyThisVisionExistsSection() {
  const items = [
    {
      number: "01",
      problem: "Fragmented source truth",
      response:
        "Reconciliation, duplicate interpretation, and unclear ownership → one authoritative owner for each material object; governed event propagation.",
    },
    {
      number: "02",
      problem: "Rules detached from action",
      response:
        "Policy and legal review happen after execution → evaluate policy, authority, entity, and jurisdiction at the point of action.",
    },
    {
      number: "03",
      problem: "Evidence reconstructed later",
      response:
        "Audit and review require manual assembly → preserve decision basis, workflow state, documents, and events as work occurs.",
    },
    {
      number: "04",
      problem: "AI layered on weak foundations",
      response:
        "Automation can amplify inconsistent data and opaque authority → governed intelligence after control, with provenance and human review.",
    },
    {
      number: "05",
      problem: "Global growth multiplies ambiguity",
      response:
        "Entity, residency, tax, labor, and authority contexts diverge → entity-aware, jurisdiction-aware, effective-dated operating context.",
    },
  ] as const;

  return (
    <section className="relative w-full bg-[#EFE8D8] py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start">
        {/* Header Section */}
        <div className="max-w-3xl mb-16">
          {/* Subtitle */}
          <span className="text-[#A8843A] text-xs md:text-sm font-semibold tracking-[0.2em] uppercase mb-3 block">
            WHY THIS VISION EXISTS
          </span>

          {/* Main Headline */}
          <h1 className="text-3xl md:text-[32px] lg:text-[42px] font-bold text-[#0b1329] leading-tight tracking-tight mb-6">
            Organizations operate as one system. Their software often does not.
          </h1>

          {/* Description */}
          <p className="text-gray-600 text-base md:text-lg font-light leading-relaxed">
            Finance, workforce, legal, compliance, evidence, and technology
            decisions intersect in real operations. When rules, approvals,
            identities, documents, and source records live in separate systems,
            governance arrives after execution and evidence must be
            reconstructed later.
          </p>
        </div>

        {/* List Section */}
        <div className="w-full flex flex-col">
          {/* Table-like Header */}
          <div className="w-full pb-4 border-b border-gray-300 hidden md:flex items-center text-xs font-semibold tracking-wider text-gray-500 uppercase">
            <div className="w-1/12"></div>
            <div className="w-5/12">PROBLEM</div>
            <div className="w-6/12">FOUNDER-VISION RESPONSE</div>
          </div>

          {/* Rows */}
          {items.map((item, index) => (
            <div
              key={index}
              className="w-full py-8 border-b border-gray-300 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-0"
            >
              {/* Number */}
              <div className="w-full md:w-1/12 text-[#A8843A] text-lg font-bold font-mono">
                {item.number}
              </div>

              {/* Problem */}
              <div className="w-full md:w-5/12 text-[#0b1329] text-base md:text-lg font-semibold tracking-tight pr-4">
                <span className="md:hidden text-xs font-semibold text-gray-400 uppercase block mb-1">
                  Problem
                </span>
                {item.problem}
              </div>

              {/* Response */}
              <div className="w-full md:w-6/12 text-gray-600 text-sm md:text-base font-light leading-relaxed">
                <span className="md:hidden text-xs font-semibold text-gray-400 uppercase block mb-1">
                  Founder-Vision Response
                </span>
                {item.response}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
