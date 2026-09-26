import React from "react";

export default function VerificationArchitectureSection() {
  const rows = [
    {
      tier: "V0",
      useCase:
        "Low-risk opt-out/preference request where verification is not required",
      pattern: "No identity proof — capture an enforceable preference signal.",
    },
    {
      tier: "V1",
      useCase: "Low-risk correction/routing",
      pattern: "Email or authenticated-session confirmation where sufficient.",
    },
    {
      tier: "V2",
      useCase: "Access/delete involving account-linked data",
      pattern:
        "Match multiple data points or authenticated account confirmation — avoid collecting new sensitive IDs unless necessary.",
    },
    {
      tier: "V3",
      useCase: "High-risk/sensitive disclosure or representative uncertainty",
      pattern:
        "Escalated Privacy Operations review with legally approved evidence and secure upload.",
    },
  ] as const;

  return (
    <section className="relative w-full bg-white py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start w-full">
        {/* Header Section */}
        <div className="mb-12 w-full">
          {/* Subtitle */}
          <span className="text-[#A8843A] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            VERIFICATION ARCHITECTURE
          </span>

          {/* Main Headline */}
          <h1 className="text-3xl lg:text-[32px] font-bold text-[#0b1329] leading-tight tracking-tight max-w-4xl">
            Risk-tiered — proportionate to sensitivity and harm, never
            one-size-fits-all
          </h1>
        </div>

        {/* Table Container with Rounded Corners & Borders */}
        <div
          style={{ borderRadius: "14px" }}
          className="w-full bg-white border border-[#DCD6C8] overflow-hidden shadow-sm"
        >
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#F6F1E6] text-xs font-semibold tracking-[0.15em] text-[#0b1329] uppercase border-b border-[#DCD6C8]">
                <th className="py-4 px-6 font-semibold w-1/6 border-r border-[#DCD6C8]">
                  Tier
                </th>
                <th className="py-4 px-6 font-semibold w-5/12 border-r border-[#DCD6C8]">
                  Use Case
                </th>
                <th className="py-4 px-6 font-semibold w-5/12">Pattern</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr
                  key={index}
                  className={`border-b border-[#DCD6C8] last:border-b-0 bg-transparent`}
                >
                  <td className="py-5 px-6 text-sm font-semibold text-[#0b1329] align-top border-r border-[#DCD6C8]">
                    {row.tier}
                  </td>
                  <td className="py-5 px-6 text-sm text-gray-600 font-light leading-relaxed align-top border-r border-[#DCD6C8]">
                    {row.useCase}
                  </td>
                  <td className="py-5 px-6 text-sm text-gray-600 font-light leading-relaxed align-top">
                    {row.pattern}
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
