import React from "react";

export default function ResponsibleDigitalOperationsSection() {
  const rows = [
    {
      controlArea: "Workload efficiency",
      content:
        "Autoscaling, right-sizing, queueing, caching, workload scheduling, service observability where implemented.",
      claimBoundary:
        "Architectural efficiency is not translated into carbon savings without telemetry and methodology.",
    },
    {
      controlArea: "Data lifecycle",
      content:
        "Retention, deletion, archival, tiering, and minimization controls.",
      claimBoundary: "No storage-reduction claim unless measured.",
    },
    {
      controlArea: "Deployment choice",
      content:
        "Multi-tenant, dedicated, single-tenant, and sovereign/customer-controlled modes.",
      claimBoundary:
        "Environmental characteristics vary by deployment/provider/region.",
    },
    {
      controlArea: "AI workload governance",
      content:
        "Model/task selection, usage controls, batch vs. interactive execution, evaluation, disable paths.",
      claimBoundary: 'No "green AI" claim without energy or emissions data.',
    },
    {
      controlArea: "Paper / manual-work reduction",
      content:
        "Digital workflows can reduce dependence on manual document exchange in configured processes.",
      claimBoundary:
        "No paper, travel, or emissions savings percentages without customer-specific measurement.",
    },
  ] as const;

  return (
    <section className="relative w-full bg-white py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start">
        {/* Header Section */}
        <div className="max-w-3xl mb-12">
          {/* Subtitle (Eye tag size: xs) */}
          <span className="text-[#A8843A] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            RESPONSIBLE DIGITAL OPERATIONS
          </span>

          {/* Main Headline (32px for lg devices) */}
          <h1 className="text-3xl lg:text-[32px] font-bold text-[#0b1329] leading-tight tracking-tight">
            Design digital operations to use resources deliberately — and
            measure before claiming impact.
          </h1>
        </div>

        {/* Table Section */}
        <div className="w-full flex flex-col border-t border-gray-200">
          {/* Table Header */}
          <div className="w-full py-4 px-6 border-b border-gray-200 grid grid-cols-1 md:grid-cols-12 gap-4 bg-gray-50/50 text-xs font-semibold tracking-[0.15em] text-[#0b1329] uppercase">
            <div className="md:col-span-3">Control Area</div>
            <div className="md:col-span-5">Content</div>
            <div className="md:col-span-4">Claim Boundary</div>
          </div>

          {/* Table Rows */}
          {rows.map((row, index) => (
            <div
              key={index}
              className="w-full py-6 px-6 border-b border-gray-200 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 items-start md:items-center bg-white"
            >
              {/* Control Area Column */}
              <div className="md:col-span-3 text-[#0b1329] text-base font-semibold tracking-tight">
                {row.controlArea}
              </div>

              {/* Content Column */}
              <div className="md:col-span-5 text-gray-600 font-light leading-relaxed text-[15.5px]">
                {row.content}
              </div>

              {/* Claim Boundary Column */}
              <div className="md:col-span-4 text-gray-500 font-light italic leading-relaxed text-[15px]">
                {row.claimBoundary}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
