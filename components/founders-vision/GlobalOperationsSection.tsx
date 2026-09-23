import React from "react";

export default function GlobalOperationsSection() {
  const rows: Array<{
    layer: string;
    statement: string;
    proof: string;
    isBadge?: boolean;
  }> = [
    {
      layer: "Legal entity",
      statement:
        "Responsibility belongs to a real operating entity, not an abstract tenant.",
      proof: "Entity tree and delegated-authority example",
    },
    {
      layer: "Jurisdiction",
      statement:
        "Rules differ by country, state/province, worker, transaction, filing authority, and regulatory context.",
      proof: "Jurisdiction chips / rule context",
    },
    {
      layer: "Effective date",
      statement: "The applicable rule can change over time.",
      proof: "Timeline showing historical/current/future state",
    },
    {
      layer: "Residency",
      statement:
        "Storage, processing, backup, replication, and recovery constraints matter independently.",
      proof: "Residency status panel with deployment qualifiers",
    },
    {
      layer: "Coverage status",
      statement:
        "Capability must be published by workflow and validation state.",
      proof: "AVAILABLE / LIMITED / PLANNED",
      isBadge: true,
    },
    {
      layer: "Provenance",
      statement:
        "A rule is more useful when its source, version, date, and review status are visible.",
      proof: "Evidence drawer",
    },
  ];

  return (
    <section className="relative w-full bg-[#EFE8D8] py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start">
        {/* Header Section */}
        <div className="max-w-3xl mb-16">
          {/* Subtitle */}
          <span className="text-[#A8843A] text-xs md:text-sm font-semibold tracking-[0.2em] uppercase mb-3 block">
            ENTITY, JURISDICTION & GLOBAL OPERATIONS
          </span>

          {/* Main Headline */}
          <h1 className="text-3xl md:text-[32px] lg:text-[42px] font-bold text-[#0b1329] leading-tight tracking-tight mb-4">
            Global growth should not multiply ambiguity.
          </h1>

          {/* Description */}
          <p className="text-gray-600 text-base md:text-lg font-light leading-relaxed">
            Responsibility belongs to a real operating entity, not an abstract
            tenant. Rules differ by country, state, worker, transaction, and
            filing authority.
          </p>
        </div>

        {/* Table Section */}
        <div className="w-full flex flex-col">
          {/* Table Header */}
          <div className="w-full pb-4 border-b border-gray-300 hidden md:flex items-center text-xs font-semibold tracking-wider text-gray-500 uppercase">
            <div className="w-3/12">CONTEXT LAYER</div>
            <div className="w-5/12">FOUNDER-VISION STATEMENT</div>
            <div className="w-4/12">DESIGN PROOF</div>
          </div>

          {/* Table Rows */}
          {rows.map((row, index) => (
            <div
              key={index}
              className="w-full py-6 border-b border-gray-300 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-0"
            >
              {/* Context Layer */}
              <div className="w-full md:w-3/12 text-[#0b1329] text-base font-semibold tracking-tight">
                <span className="md:hidden text-xs font-semibold text-gray-400 uppercase block mb-1">
                  Context Layer
                </span>
                {row.layer}
              </div>

              {/* Founder-Vision Statement */}
              <div className="w-full md:w-5/12 text-gray-600 text-sm md:text-base font-light leading-relaxed pr-4">
                <span className="md:hidden text-xs font-semibold text-gray-400 uppercase block mb-1">
                  Founder-Vision Statement
                </span>
                {row.statement}
              </div>

              {/* Design Proof */}
              <div className="w-full md:w-4/12 text-gray-600 text-sm md:text-base font-light leading-relaxed">
                <span className="md:hidden text-xs font-semibold text-gray-400 uppercase block mb-1">
                  Design Proof
                </span>
                {row.isBadge ? (
                  <span className="inline-flex items-center px-3 py-1 rounded-full border border-gray-300 text-[10px] font-semibold tracking-wider text-gray-700">
                    {row.proof}
                  </span>
                ) : (
                  row.proof
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
