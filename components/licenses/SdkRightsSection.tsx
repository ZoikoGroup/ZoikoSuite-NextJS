import React from "react";

export default function SdkRightsSection() {
  const rows = [
    {
      item: "SDK package",
      treatment:
        "Exact package/repository, version, developer license, redistribution rights, dependencies/notices.",
    },
    {
      item: "Sample code",
      treatment:
        "Separates code license from documentation copyright; includes a copyable license header if required.",
    },
    {
      item: "Container image",
      treatment:
        "Notices tied to image digest/tag and base-image/component obligations.",
    },
    {
      item: "Partner redistribution",
      treatment:
        "SDK rights are never assumed to allow redistribution of bundled third-party materials — routed to partner/license review where needed.",
    },
  ] as const;

  return (
    <section className="relative w-full bg-white py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start w-full">
        {/* Header Section */}
        <div className="mb-12 w-full">
          {/* Subtitle */}
          <span className="text-[#A8843A] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            SDKS, APIS, SAMPLE CODE & DEVELOPER DISTRIBUTION
          </span>

          {/* Main Headline */}
          <h1 className="text-3xl lg:text-[32px] font-bold text-[#0b1329] leading-tight tracking-tight">
            SDK rights are never assumed to include third-party redistribution
          </h1>
        </div>

        {/* Table Container */}
        <div className="w-full border-t border-b border-[#DCD6C8]">
          <div className="grid grid-cols-1 md:grid-cols-12 py-4 px-6 border-b border-[#DCD6C8] text-xs font-semibold tracking-[0.15em] text-[#0b1329] uppercase">
            <div className="md:col-span-4">Item</div>
            <div className="md:col-span-8">Required Treatment</div>
          </div>

          {rows.map((row, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 md:grid-cols-12 py-6 px-6 items-start ${
                index !== rows.length - 1 ? "border-b border-[#DCD6C8]" : ""
              }`}
            >
              <div className="md:col-span-4 text-sm font-semibold text-[#0b1329] tracking-tight mb-2 md:mb-0">
                {row.item}
              </div>
              <div className="md:col-span-8 max-w-xl text-sm text-gray-600 font-light leading-relaxed">
                {row.treatment}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
