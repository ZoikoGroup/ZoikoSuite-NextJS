import React from "react";

export default function StrictlyNecessaryTechnologiesSection() {
  const rows = [
    {
      subcategory: "Consent / preference storage",
      qualificationRule:
        "Stores the user's privacy choice or proof needed to honor it.",
      exampleCopyPattern: '"Required to remember your cookie choices."',
    },
    {
      subcategory: "Security / anti-abuse",
      qualificationRule:
        "Necessary to protect the requested service, authentication, forms, or network integrity.",
      exampleCopyPattern:
        '"Required to protect the site and requested service from abuse."',
    },
    {
      subcategory: "Session / authentication",
      qualificationRule:
        "Necessary to keep an authenticated or requested session functioning.",
      exampleCopyPattern: '"Required to keep you signed in."',
    },
  ] as const;

  return (
    <section className="relative w-full bg-white py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start">
        {/* Header Section */}
        <div className="mb-12">
          {/* Subtitle (Eye tag size: xs) */}
          <span className="text-[#A8843A] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            STRICTLY NECESSARY TECHNOLOGIES
          </span>

          {/* Main Headline (32px for lg devices) */}
          <h1 className="text-3xl lg:text-[32px] font-bold text-[#0b1329] leading-tight tracking-tight">
            A reviewed classification, not a convenience label
          </h1>
        </div>

        {/* Table Section */}
        <div className="w-full flex flex-col border-t border-[#DCD6C8]">
          {/* Table Header */}
          <div className="w-full py-4 px-6 border-b border-[#DCD6C8] grid grid-cols-1 md:grid-cols-12 gap-4 text-xs font-semibold tracking-[0.15em] text-[#0b1329] uppercase">
            <div className="md:col-span-4">Subcategory</div>
            <div className="md:col-span-4">Qualification Rule</div>
            <div className="md:col-span-4">Example Copy Pattern</div>
          </div>

          {/* Table Rows */}
          {rows.map((row, index) => (
            <div
              key={index}
              className="w-full py-6 px-6 border-b border-[#DCD6C8] grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 items-center bg-white"
            >
              {/* Subcategory Column */}
              <div className="md:col-span-4 text-[#0b1329] text-base font-semibold tracking-tight">
                {row.subcategory}
              </div>

              {/* Qualification Rule Column */}
              <div className="md:col-span-4 text-gray-600 font-light leading-relaxed text-[15.5px]">
                {row.qualificationRule}
              </div>

              {/* Example Copy Pattern Column */}
              <div className="md:col-span-4 text-gray-600 font-light leading-relaxed text-[15.5px]">
                {row.exampleCopyPattern}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
