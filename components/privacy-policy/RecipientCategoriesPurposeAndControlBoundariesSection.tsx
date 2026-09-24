import React from "react";

export default function RecipientCategoriesPurposeAndControlBoundariesSection() {
  const rows = [
    {
      recipientCategory: "Service providers / processors",
      disclosurePattern:
        "Category, purpose, data scope, contractual/control model.",
      crossLink: "",
    },
    {
      recipientCategory: "Customer organization",
      disclosurePattern:
        "Administrative and service data visible to customer admins per role and contract.",
      crossLink: "",
    },
    {
      recipientCategory: "Authorities / legal process",
      disclosurePattern:
        "Disclosure when legally required or permitted, subject to validated process.",
      crossLink: "",
    },
    {
      recipientCategory: "Corporate transactions",
      disclosurePattern:
        "If applicable, due diligence / transfer boundary and notice treatment.",
      crossLink: "",
    },
  ] as const;

  return (
    <section className="relative w-full bg-white py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start">
        {/* Header Section */}
        <div className="mb-12">
          {/* Subtitle (Eye tag size: xs) */}
          <span className="text-[#A8843A] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            HOW PERSONAL DATA IS SHARED
          </span>

          {/* Main Headline (32px for lg devices) */}
          <h1 className="text-3xl lg:text-[32px] font-bold text-[#0b1329] leading-tight tracking-tight">
            Recipient categories, purpose, and control boundaries
          </h1>
        </div>

        {/* Table Section */}
        <div className="w-full flex flex-col border-t border-gray-200">
          {/* Table Header */}
          <div className="w-full py-4 px-6 border-b border-gray-200 grid grid-cols-1 md:grid-cols-12 gap-4 bg-gray-50/50 text-xs font-semibold tracking-[0.15em] text-[#0b1329] uppercase">
            <div className="md:col-span-4">Recipient Category</div>
            <div className="md:col-span-6">Disclosure Pattern</div>
            <div className="md:col-span-2">Cross-Link</div>
          </div>

          {/* Table Rows */}
          {rows.map((row, index) => (
            <div
              key={index}
              className="w-full py-6 px-6 border-b border-gray-200 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 items-center bg-white"
            >
              {/* Recipient Category Column */}
              <div className="md:col-span-4 text-[#0b1329] text-base font-semibold tracking-tight">
                {row.recipientCategory}
              </div>

              {/* Disclosure Pattern Column */}
              <div className="md:col-span-6 text-gray-600 font-light leading-relaxed text-[15.5px]">
                {row.disclosurePattern}
              </div>

              {/* Cross-Link Column */}
              <div className="md:col-span-2 text-gray-600 font-light leading-relaxed text-[15.5px]">
                {row.crossLink}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
