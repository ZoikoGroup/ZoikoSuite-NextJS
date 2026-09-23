import React from "react";

export default function GovernedIntelligenceSection() {
  const rows = [
    {
      capability: "Anomaly detection",
      mayDo:
        "Flag unusual financial, payroll, compliance, or workflow patterns.",
      controlBoundary: "May score/prioritize; may not alter source truth.",
    },
    {
      capability: "Forecasting",
      mayDo:
        "Estimate tax, payroll, cash, obligation, and operational exposure.",
      controlBoundary: "Must preserve model, scenario, and confidence context.",
    },
    {
      capability: "Reconciliation assistance",
      mayDo: "Suggest matches and exception-resolution paths.",
      controlBoundary: "Final reconciliation remains governed and evidential.",
    },
    {
      capability: "Compliance risk scoring",
      mayDo:
        "Prioritize obligations by severity, proximity, and evidence sufficiency.",
      controlBoundary: "Human and policy-defined thresholds govern action.",
    },
    {
      capability: "Decision support",
      mayDo:
        "Surface relevant rules, evidence, and options at approval points.",
      controlBoundary: "Cannot bypass authorization or approval requirements.",
    },
  ] as const;

  return (
    <section className="relative w-full bg-white py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start">
        {/* Header Section */}
        <div className="max-w-3xl mb-12">
          {/* Subtitle */}
          <span className="text-[#A8843A] text-xs md:text-sm font-semibold tracking-[0.2em] uppercase mb-3 block">
            GOVERNED INTELLIGENCE
          </span>

          {/* Main Headline */}
          <h1 className="text-3xl md:text-4xl lg:text-[32px] font-serif font-bold text-[#0b1329] leading-[1.15] tracking-tight mb-4">
            Insight after control
          </h1>

          {/* Description */}
          <p className="text-gray-600 text-base md:text-lg font-light leading-relaxed">
            AI appears as a governed capability that follows controlled data and
            evidence — not as the identity of the company.
          </p>
        </div>

        {/* Table Section */}
        <div className="w-full flex flex-col">
          {/* Table Header */}
          <div className="w-full pb-4 border-b border-gray-300 flex flex-col md:flex-row items-start justify-between gap-4 text-xs font-bold tracking-wider text-gray-500 uppercase">
            <div className="w-full md:w-3/12">CAPABILITY</div>
            <div className="w-full md:w-5/12">MAY DO</div>
            <div className="w-full md:w-4/12">CONTROL BOUNDARY</div>
          </div>

          {/* Table Rows */}
          {rows.map((row, index) => (
            <div
              key={index}
              className="w-full py-6 border-b border-gray-200 flex flex-col md:flex-row items-start justify-between gap-4 md:gap-6"
            >
              {/* Capability Column */}
              <div className="w-full md:w-3/12 text-[#0b1329] text-sm font-bold">
                {row.capability}
              </div>

              {/* May Do Column */}
              <div className="w-full md:w-5/12 text-gray-600 text-[13.5px] font-light leading-relaxed">
                {row.mayDo}
              </div>

              {/* Control Boundary Column */}
              <div className="w-full md:w-4/12 text-gray-600 text-sm font-light leading-relaxed">
                {row.controlBoundary}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
