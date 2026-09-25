import React from "react";

export default function AModularScheduleSection() {
  const rows = [
    {
      transferState: "No restricted transfer identified",
      requiredOutput:
        '"No transfer module activated based on current approved processing schedule," with review date.',
    },
    {
      transferState: "Adequacy / recognized destination",
      requiredOutput:
        "Legal mechanism, destination, scope, and effective date from the approved transfer registry.",
    },
    {
      transferState: "EU SCCs required",
      requiredOutput:
        "Correct exporter/importer roles and module selected; appendices complete; mandatory text unmodified.",
    },
    {
      transferState: "UK transfer safeguard required",
      requiredOutput:
        "IDTA or UK Addendum to EU SCCs as approved; required tables and assessment status captured.",
    },
    {
      transferState: "Mechanism expired/invalidated",
      requiredOutput:
        "Blocks new execution or routes to Legal; remediation state shown to affected customers.",
    },
  ] as const;

  return (
    <section className="relative w-full bg-white py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start w-full">
        {/* Header Section */}
        <div className="mb-12 w-full">
          {/* Subtitle (Eye tag size: xs) */}
          <span className="text-[#A8843A] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            INTERNATIONAL TRANSFERS
          </span>

          {/* Main Headline (32px for lg devices) */}
          <h1 className="text-3xl lg:text-[32px] font-bold text-[#0b1329] leading-tight tracking-tight">
            A modular schedule — not a &quot;GDPR compliant&quot; badge
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
                <th className="py-4 px-6 font-semibold border-r border-[#DCD6C8] last:border-r-0 w-1/3">
                  Transfer State
                </th>
                <th className="py-4 px-6 font-semibold w-2/3">
                  Required UI / Legal Output
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr
                  key={index}
                  className="border-b last:border-b-0 border-[#DCD6C8] bg-white"
                >
                  <td className="py-6 px-6 text-[#0b1329] text-base font-semibold tracking-tight align-top border-r border-[#DCD6C8]">
                    {row.transferState}
                  </td>
                  <td className="py-6 px-6 text-gray-600 font-light leading-relaxed text-[15.5px] align-top">
                    {row.requiredOutput}
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
