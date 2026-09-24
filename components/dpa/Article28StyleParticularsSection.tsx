import React from "react";

export default function Article28StyleParticularsSection() {
  const rows = [
    {
      field: "Subject matter",
      requiredDetail: "Services or processing operations covered.",
    },
    {
      field: "Duration",
      requiredDetail:
        "Contract/service term plus approved transition/retention period where applicable.",
    },
    {
      field: "Categories of data subjects",
      requiredDetail:
        "Only where supported by the approved processing inventory.",
    },
    {
      field: "Categories of personal data",
      requiredDetail:
        "Only where supported by the approved processing inventory.",
    },
    {
      field: "Special/sensitive data",
      requiredDetail:
        "Explicit status: permitted / restricted / prohibited / customer-configurable.",
    },
    {
      field: "Processing locations",
      requiredDetail:
        "Region(s) or deployment-specific model, linked to Residency and transfer schedule.",
    },
  ] as const;

  return (
    <section className="relative w-full bg-white py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start w-full">
        {/* Header Section */}
        <div className="mb-12 w-full">
          {/* Subtitle (Eye tag size: xs) */}
          <span className="text-[#A8843A] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            PROCESSING DETAILS SCHEDULE
          </span>

          {/* Main Headline (32px for lg devices) */}
          <h1 className="text-3xl lg:text-[32px] font-bold text-[#0b1329] leading-tight tracking-tight">
            Article-28-style particulars — structured data, not prose
          </h1>
        </div>

        {/* Semantic HTML Table */}
        <div className="w-full overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-t border-b border-[#DCD6C8] text-xs font-semibold tracking-[0.15em] text-[#0b1329] uppercase">
                <th className="py-4 pr-6 font-semibold w-1/3">Field</th>
                <th className="py-4 pl-6 font-semibold w-2/3">
                  Required Detail
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr
                  key={index}
                  className="border-b border-[#DCD6C8] bg-white"
                >
                  <td className="py-6 pr-6 text-[#0b1329] text-base font-semibold tracking-tight align-top">
                    {row.field}
                  </td>
                  <td className="py-6 pl-6 text-gray-600 font-light leading-relaxed text-[15.5px] align-top">
                    {row.requiredDetail}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
