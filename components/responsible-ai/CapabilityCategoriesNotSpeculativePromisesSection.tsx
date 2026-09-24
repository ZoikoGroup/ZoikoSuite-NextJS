import React from "react";

export default function CapabilityCategoriesNotSpeculativePromisesSection() {
  const rows = [
    {
      capability: "Anomaly detection",
      publicBoundaryCopy:
        "Flags unusual financial, payroll, compliance, or workflow patterns. May score/prioritize; may not alter source truth.",
      doNotImply:
        "Autonomous fraud guilt, automatic enforcement, or certainty.",
    },
    {
      capability: "Forecasting",
      publicBoundaryCopy:
        "Estimates exposure while preserving scenario/model/confidence context.",
      doNotImply: "Guaranteed outcomes or professional advice.",
    },
    {
      capability: "Reconciliation assistance",
      publicBoundaryCopy:
        "Suggests matches and exception-resolution paths; final reconciliation remains governed and evidential.",
      doNotImply: "Automatic finalization outside the approved workflow.",
    },
    {
      capability: "Compliance risk scoring",
      publicBoundaryCopy:
        "Prioritizes obligations by severity, proximity, and evidence sufficiency; action thresholds remain human/policy-defined.",
      doNotImply: "Regulatory determination without approved review.",
    },
    {
      capability: "Document & obligation extraction",
      publicBoundaryCopy:
        "Proposes clauses, obligations, and metadata; material use requires provenance/confidence and review where configured.",
      doNotImply: "Legal conclusions or silent contract changes.",
    },
    {
      capability: "Decision support",
      publicBoundaryCopy:
        "Surfaces relevant rules, evidence, and options at approval points; cannot bypass authorization.",
      doNotImply: "Independent decision authority.",
    },
  ] as const;

  return (
    <section className="relative w-full bg-[#F6F1E6] py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start w-full">
        {/* Header Section */}
        <div className="mb-12 w-full">
          {/* Subtitle (Eye tag size: xs) */}
          <span className="text-[#A8843A] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            WHERE AI MAY APPEAR
          </span>

          {/* Main Headline (32px for lg devices) */}
          <h1 className="text-3xl lg:text-[32px] font-bold text-[#0b1329] leading-tight tracking-tight">
            Capability categories, not speculative promises
          </h1>
        </div>

        {/* Semantic HTML Table */}
        <div className="w-full overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-t border-b border-[#DCD6C8] text-xs font-semibold tracking-[0.15em] text-[#0b1329] uppercase">
                <th className="py-4 pr-6 font-semibold w-1/4">Capability</th>
                <th className="py-4 px-6 font-semibold w-5/12">
                  Public Boundary Copy
                </th>
                <th className="py-4 pl-6 font-semibold w-1/3">Do Not Imply</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr
                  key={index}
                  className="border-b border-[#DCD6C8] bg-[#F6F1E6]"
                >
                  <td className="py-6 pr-6 text-[#0b1329] text-base font-semibold tracking-tight align-top">
                    {row.capability}
                  </td>
                  <td className="py-6 px-6 text-gray-600 font-light leading-relaxed text-[15.5px] align-top">
                    {row.publicBoundaryCopy}
                  </td>
                  <td className="py-6 pl-6 text-gray-600 font-light leading-relaxed text-[15.5px] align-top">
                    {row.doNotImply}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
