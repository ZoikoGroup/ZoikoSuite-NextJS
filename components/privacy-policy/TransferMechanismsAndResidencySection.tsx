import React from "react";

export default function TransferMechanismsAndResidencySection() {
  const rows = [
    {
      layer: "Processing location",
      whatIsExplained:
        "Where relevant processing/support may occur, based on verified operations and deployment.",
    },
    {
      layer: "Residency configuration",
      whatIsExplained:
        "Storage/processing/backup/replication constraints vary by deployment and jurisdiction.",
    },
    {
      layer: "Transfer mechanism",
      whatIsExplained:
        "Approved legal transfer mechanism by origin/destination/context, only when actually used.",
    },
    {
      layer: "Customer-controlled / sovereign deployments",
      whatIsExplained:
        "Availability and boundaries may differ; one deployment is not generalized to all customers.",
    },
  ] as const;

  return (
    <section className="relative w-full bg-[#F6F1E6] py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start">
        {/* Header Section */}
        <div className="mb-12">
          {/* Subtitle (Eye tag size: xs) */}
          <span className="text-[#A8843A] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            INTERNATIONAL TRANSFERS & DATA RESIDENCY
          </span>

          {/* Main Headline (32px for lg devices) */}
          <h1 className="text-3xl lg:text-[32px] font-bold text-[#0b1329] leading-tight tracking-tight">
            Transfer mechanisms and residency are related, not interchangeable
          </h1>
        </div>

        {/* Table Section */}
        <div className="w-full flex flex-col border-t border-[#DCD6C8]">
          {/* Table Header */}
          <div className="w-full py-4 px-6 border-b border-[#DCD6C8] grid grid-cols-1 md:grid-cols-12 gap-4 text-xs font-semibold tracking-[0.15em] text-[#0b1329] uppercase">
            <div className="md:col-span-4">Layer</div>
            <div className="md:col-span-8">What is explained</div>
          </div>

          {/* Table Rows */}
          {rows.map((row, index) => (
            <div
              key={index}
              className="w-full py-6 px-6 border-b border-[#DCD6C8] grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 items-center bg-[#F6F1E6]"
            >
              {/* Layer Column */}
              <div className="md:col-span-4 text-[#0b1329] text-base font-semibold tracking-tight">
                {row.layer}
              </div>

              {/* What is Explained Column */}
              <div className="md:col-span-8 text-gray-600 font-light leading-relaxed text-[15.5px]">
                {row.whatIsExplained}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
