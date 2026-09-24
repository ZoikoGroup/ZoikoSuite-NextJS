import React from "react";

export default function FrameworkAndStandardMappingSection() {
  const rows = [
    {
      referenceType: "GRI / SASB / TCFD / ISSB",
      permittedWording:
        '"Mapped to," "informed by," or "used for reporting structure" — only when approved and scoped.',
      prohibitedWording: '"Certified by GRI," "TCFD compliant."',
    },
    {
      referenceType: "UN SDGs",
      permittedWording:
        '"Related to" specific goals where the linkage is explained.',
      prohibitedWording: '"UN-certified" or implying endorsement.',
    },
    {
      referenceType: "ISO standards",
      permittedWording:
        "Reference only where relevant; certification status comes from the Certifications registry.",
      prohibitedWording: "Implying certification from architectural alignment.",
    },
  ] as const;

  return (
    <section className="relative w-full bg-white py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start">
        {/* Header Section */}
        <div className="max-w-3xl mb-12">
          {/* Subtitle (Eye tag size: xs) */}
          <span className="text-[#A8843A] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            FRAMEWORK & STANDARD MAPPING
          </span>

          {/* Main Headline (32px for lg devices) */}
          <h1 className="text-3xl lg:text-[32px] font-bold text-[#0b1329] leading-tight tracking-tight">
            Navigation aids, not automatic compliance claims
          </h1>
        </div>

        {/* Table Section */}
        <div className="w-full flex flex-col border-t border-gray-200">
          {/* Table Header */}
          <div className="w-full py-4 px-6 border-b border-gray-200 grid grid-cols-1 md:grid-cols-12 gap-4 bg-gray-50/50 text-xs font-semibold tracking-[0.15em] text-[#0b1329] uppercase">
            <div className="md:col-span-3">Reference Type</div>
            <div className="md:col-span-5">Permitted Wording</div>
            <div className="md:col-span-4">Prohibited Wording</div>
          </div>

          {/* Table Rows */}
          {rows.map((row, index) => (
            <div
              key={index}
              className="w-full py-6 px-6 border-b border-gray-200 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 items-start md:items-center bg-white"
            >
              {/* Reference Type Column */}
              <div className="md:col-span-3 text-[#0b1329] text-base font-semibold tracking-tight">
                {row.referenceType}
              </div>

              {/* Permitted Wording Column */}
              <div className="md:col-span-5 text-gray-600 font-light leading-relaxed text-[15.5px]">
                {row.permittedWording}
              </div>

              {/* Prohibited Wording Column */}
              <div className="md:col-span-4 text-gray-500 font-light italic leading-relaxed text-[15px]">
                {row.prohibitedWording}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
