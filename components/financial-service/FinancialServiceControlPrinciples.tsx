import React from "react";

export default function FinancialServiceControlPrinciples() {
  const principles = [
    {
      number: "01",
      title: "Governance before execution",
      description:
        "Material financial and operational actions are evaluated against policy and authority before completion — not reviewed afterwards.",
      tags: "DECISION GATE · POLICY CHECK · AUTHORIZATION OUTCOME",
    },
    {
      number: "02",
      title: "Evidence by default",
      description:
        "The decision basis and execution lineage are preserved as work happens, rather than reconstructed when someone asks.",
      tags: "EVIDENCE MANIFEST · LINKED TIMELINE",
    },
    {
      number: "03",
      title: "Multi-entity by design",
      description:
        "Entity hierarchy, authority, ledger context and reporting boundaries are explicit rather than inferred.",
      tags: "ENTITY TREE · SCOPED AUTHORITY",
    },
    {
      number: "04",
      title: "Jurisdiction at runtime",
      description:
        "Rules are effective-dated and resolved using the action's own jurisdictional context, not a global default.",
      tags: "JURISDICTION CHIPS · EFFECTIVE-DATE CONTROL",
    },
    {
      number: "05",
      title: "Unified truth ownership",
      description:
        "Material objects have an authoritative source and governed event propagation, so two systems cannot both be right.",
      tags: "SOURCE-OF-TRUTH BADGE · EVENT LINEAGE",
    },
    {
      number: "06",
      title: "Governed intelligence",
      description:
        "AI may classify, forecast, summarize, recommend and flag — inside policy and human-review boundaries.",
      tags: "AI BOUNDARY PANEL · MAY / MAY NOT",
    },
  ];

  return (
    <section className="w-full bg-[#F7F5F0] text-[#0F172A] py-20 px-6 lg:px-12 flex justify-center items-center font-sans">
      <div className="max-w-6xl w-full flex flex-col">
        {/* Top Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-end">
          {/* Left Title Area */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Eyebrow Tag */}
            <div className="flex items-center gap-2 mb-4">
              <span className="w-4 h-[1px] bg-[#A07A2E]"></span>
              <span
                className="text-xs font-semibold tracking-widest uppercase"
                style={{ color: "#A07A2E" }}
              >
                FINANCIAL SERVICE OPERATING MODEL
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[52px] font-bold tracking-tight leading-[1.15]">
              Six control principles
            </h2>
          </div>

          {/* Right Subtitle Area */}
          <div className="lg:col-span-5 flex items-end lg:justify-end">
            <p className="text-gray-600 text-base leading-relaxed">
              The category definition, read through a financial-services lens.
            </p>
          </div>
        </div>

        {/* Bottom Cards Grid (6 cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {principles.map((item, index) => (
            <div
              key={index}
              className="bg-white p-4 flex flex-col justify-between shadow-sm"
              style={{
                borderRadius: "11px",
                border: "1px solid #DBE3E8",
                borderLeft: "3px solid #2A6386",
              }}
            >
              <div>
                <h3
                  className="font-bold text-[#0F172A] mb-2 tracking-tight"
                  style={{ fontSize: "14.5px" }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-gray-600 leading-relaxed mb-6"
                  style={{ fontSize: "12.5px" }}
                >
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-dashed border-gray-200">
                <span
                  className="font-semibold tracking-wider block uppercase"
                  style={{ color: "#A07A2E", fontSize: "14.4px" }}
                >
                  {item.tags}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
