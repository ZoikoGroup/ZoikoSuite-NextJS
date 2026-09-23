import React from "react";

export default function DisclosureAndInvestorMaterialsSection() {
  const rows = [
    {
      category: "Public",
      badge: "OPEN",
      description:
        "Corporate overview; governance summary; public strategic outlook; public sustainability report where published.",
    },
    {
      category: "Public with versioning",
      badge: "OPEN + ARCHIVE",
      description:
        "Public press releases; corporate updates; approved annual summaries.",
    },
    {
      category: "Qualified investor",
      badge: "ELIGIBILITY CHECK",
      description:
        "Portfolio snapshot; confidential financial brief; subsidiary performance summary.",
    },
    {
      category: "NDA required",
      badge: "GATED",
      description:
        "Confidential diligence materials, detailed data room content.",
    },
    {
      category: "Unavailable / superseded",
      badge: "NO ACCESS",
      description: "Expired, withdrawn, replaced, or unapproved material.",
    },
  ] as const;

  return (
    <section className="relative w-full bg-white py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start">
        {/* Header Section */}
        <div className="max-w-3xl mb-12">
          {/* Subtitle (Eye tag size: xs) */}
          <span className="text-[#A8843A] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            DISCLOSURE & INVESTOR MATERIALS
          </span>

          {/* Main Headline (32px for lg devices) */}
          <h1 className="text-3xl lg:text-[32px] font-bold text-[#0b1329] leading-tight tracking-tight">
            Public, gated, and restricted — clearly labeled
          </h1>
        </div>

        {/* Table Section */}
        <div className="w-full flex flex-col border-t border-gray-200">
          {rows.map((row, index) => (
            <div
              key={index}
              className="w-full py-6 px-6 border-b border-gray-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-6 bg-white"
            >
              {/* Category Column */}
              <div className="w-full md:w-3/12 text-[#0b1329] text-base font-semibold tracking-tight">
                {row.category}
              </div>

              {/* Badge Column */}
              <div className="w-full md:w-3/12 flex items-center">
                <span className="text-[#0b1329] text-[10px] font-semibold tracking-[0.15em] uppercase bg-[#EFE8D8] px-3 py-1 rounded border border-[#E5E0D5] shadow-xs">
                  {row.badge}
                </span>
              </div>

              {/* Description Column */}
              <div className="w-full md:w-6/12 text-gray-600 font-light leading-relaxed text-[15.5px]">
                {row.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
