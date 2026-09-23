import React from "react";

export default function ArchitectureMapSection() {
  const steps = [
    {
      number: "1",
      title: "Context",
      subtitle:
        "Who is acting, for which entity, under which jurisdiction and effective date?",
      details:
        "Identity, role, entity, jurisdiction, delegation, and rule-context resolution.",
    },
    {
      number: "2",
      title: "Governance",
      subtitle:
        "Is the action permitted, and what approval or segregation is required?",
      details:
        "Policy engine, authority model, SoD, approval path, exception route.",
    },
    {
      number: "3",
      title: "Execution",
      subtitle: "What system performs the approved action?",
      details:
        "Domain service executes against the authoritative object or ledger.",
    },
    {
      number: "4",
      title: "Evidence",
      subtitle: "What proves the basis and outcome?",
      details:
        "Decision record, workflow transition, source document, event lineage, evidence manifest.",
    },
    {
      number: "5",
      title: "Intelligence",
      subtitle: "What can AI infer or recommend without changing source truth?",
      details:
        "Analysis, anomaly detection, forecasting, extraction, decision support; governed boundaries visible.",
    },
    {
      number: "6",
      title: "Review",
      subtitle: "How can leadership, audit, or compliance inspect the result?",
      details:
        "Status, exceptions, reports, traceability, and evidence retrieval.",
    },
  ] as const;

  return (
    <section className="relative w-full bg-[#EFE8D8] py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start">
        {/* Header Section */}
        <div className="max-w-3xl mb-16">
          {/* Subtitle */}
          <span className="text-[#A8843A] text-xs md:text-sm font-semibold tracking-[0.2em] uppercase mb-3 block">
            VISION → ARCHITECTURE MAP
          </span>

          {/* Main Headline */}
          <h1 className="text-3xl md:text-[32px] lg:text-[42px] font-bold text-[#0b1329] leading-tight tracking-tight mb-4">
            How the principles become the platform
          </h1>

          {/* Description */}
          <p className="text-gray-600 text-base md:text-lg font-light leading-relaxed">
            One annotated system view showing how conviction becomes
            implementation constraint. Keyboard-traversable; mobile uses a
            stacked timeline.
          </p>
        </div>

        {/* Timeline / Architecture Rows */}
        <div className="w-full flex flex-col border-t border-gray-300">
          {steps.map((item, index) => (
            <div
              key={index}
              className="w-full py-8 border-b border-gray-300 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 lg:gap-4"
            >
              {/* Left Part: Number & Title */}
              <div className="w-full lg:w-3/12 flex items-center gap-4">
                <div className="w-8 h-8 rounded-full border border-[#A8843A] text-[#A8843A] flex items-center justify-center text-sm font-bold shrink-0">
                  {item.number}
                </div>
                <h3 className="text-[#0b1329] text-lg font-semibold tracking-tight">
                  {item.title}
                </h3>
              </div>

              {/* Middle Part: Subtitle / Question */}
              <div className="w-full lg:w-4/12 text-gray-700 text-sm md:text-base font-light italic leading-relaxed">
                {item.subtitle}
              </div>

              {/* Right Part: Details */}
              <div className="w-full lg:w-5/12 text-gray-600 text-sm md:text-base font-light leading-relaxed">
                {item.details}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
