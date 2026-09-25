import React from "react";

export default function ReproducibleFromTheRegistrySection() {
  const rows = [
    {
      noticeBlock: "Bundle identity",
      requirement:
        "Product/release/distribution, generated-at timestamp, notice version, scope statement.",
    },
    {
      noticeBlock: "Ordering",
      requirement:
        "Stable deterministic order (e.g. component A-Z) to support diffing and audit.",
    },
    {
      noticeBlock: "Downloads",
      requirement:
        "HTML and plain text required; PDF optional; machine-readable export where approved.",
    },
    {
      noticeBlock: "No-sales gate",
      requirement:
        "Notices and legally required source/attribution information never require a demo request or marketing consent.",
    },
  ] as const;

  return (
    <section className="relative w-full bg-white py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start w-full">
        {/* Header Section */}
        <div className="mb-12 w-full">
          {/* Subtitle */}
          <span className="text-[#A8843A] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            OPEN-SOURCE NOTICES & ATTRIBUTION
          </span>

          {/* Main Headline */}
          <h1 className="text-3xl lg:text-[32px] font-bold text-[#0b1329] leading-tight tracking-tight">
            Reproducible from the registry — never a hand-edited page
          </h1>
        </div>

        {/* Table Container */}
        <div className="w-full border-t border-b border-[#DCD6C8]">
          <div className="grid grid-cols-1 md:grid-cols-12 py-4 px-6 border-b border-[#DCD6C8] text-xs font-semibold tracking-[0.15em] text-[#0b1329] uppercase">
            <div className="md:col-span-4">Notice Block</div>
            <div className="md:col-span-8">Requirement</div>
          </div>

          {rows.map((row, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 md:grid-cols-12 py-6 px-6 items-start ${
                index !== rows.length - 1 ? "border-b border-[#DCD6C8]" : ""
              }`}
            >
              <div className="md:col-span-4 text-sm font-semibold text-[#0b1329] tracking-tight mb-2 md:mb-0">
                {row.noticeBlock}
              </div>
              <div className="md:col-span-8 text-sm text-gray-600 font-light leading-relaxed">
                {row.requirement}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
