import React from "react";

export default function PriorVersionsNeverOverwrittenSection() {
  const rows = [
    {
      version: "[ Current ]",
      effectiveDate: "[ Date ]",
      changeType: "[ Editorial / Material / Regulatory update ]",
      customerApplicability: "[ New customers / All / Upon renewal ]",
    },
    {
      version: "[ Prior ]",
      effectiveDate: "[ Date ] – [ Date ]",
      changeType: "[ Type ]",
      customerApplicability: "[ Applicability ]",
    },
  ] as const;

  return (
    <section className="relative w-full bg-white py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start w-full">
        {/* Header Section */}
        <div className="mb-12 w-full">
          {/* Subtitle (Eye tag size: xs) */}
          <span className="text-[#A8843A] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            VERSIONING, CHANGES & CONTRACT EVIDENCE
          </span>

          {/* Main Headline (32px for lg devices) */}
          <h1 className="text-3xl lg:text-[32px] font-bold text-[#0b1329] leading-tight tracking-tight">
            Prior versions never overwritten
          </h1>
        </div>

        {/* Semantic HTML Table inside a rounded card */}
        <div
          style={{ borderRadius: "14px" }}
          className="w-full overflow-x-auto bg-white border border-[#DCD6C8] shadow-sm"
        >
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-[#DCD6C8] text-xs font-semibold tracking-[0.15em] text-[#0b1329] uppercase bg-[#F6F1E6]">
                <th className="py-4 px-6 font-semibold border-r border-[#DCD6C8] last:border-r-0 w-1/4">
                  Version
                </th>
                <th className="py-4 px-6 font-semibold border-r border-[#DCD6C8] last:border-r-0 w-1/4">
                  Effective Date
                </th>
                <th className="py-4 px-6 font-semibold border-r border-[#DCD6C8] last:border-r-0 w-1/4">
                  Change Type
                </th>
                <th className="py-4 px-6 font-semibold w-1/4">
                  Customer Applicability
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr
                  key={index}
                  className="border-b last:border-b-0 border-[#DCD6C8] bg-white"
                >
                  <td className="p-4 text-[#0b1329] text-base font-semibold tracking-tight align-top border-r border-[#DCD6C8]">
                    {row.version}
                  </td>
                  <td className="p-4 text-gray-600 font-light leading-relaxed text-[13.5px] align-top border-r border-[#DCD6C8]">
                    {row.effectiveDate}
                  </td>
                  <td className="p-4 text-gray-600 font-light leading-relaxed text-[13.5px] align-top border-r border-[#DCD6C8]">
                    {row.changeType}
                  </td>
                  <td className="p-4 text-gray-600 font-light leading-relaxed text-[13.5px] align-top">
                    {row.customerApplicability}
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
