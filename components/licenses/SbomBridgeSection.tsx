import React from "react";

export default function SbomBridgeSection() {
  const rows = [
    {
      surface: "Public machine-readable notice",
      specification:
        "Optional SPDX JSON/tag-value export generated from the public subset of verified records.",
    },
    {
      surface: "Restricted SBOM request",
      specification:
        "Enterprise customers/security reviewers request richer SBOM/provenance evidence through the Trust/Security procurement flow.",
    },
    {
      surface: "Security separation",
      specification:
        "No vulnerability/CVE status, private repository path, dependency path, infrastructure mapping, or signing secret appears on this page.",
    },
  ] as const;

  return (
    <section className="relative w-full bg-[#0A1D34] py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start w-full">
        {/* Header Section */}
        <div className="mb-12 w-full">
          {/* Subtitle */}
          <span className="text-[#A8843A] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            MACHINE-READABLE NOTICES & SBOM BRIDGE
          </span>

          {/* Main Headline */}
          <h1 className="text-3xl lg:text-[32px] font-bold text-white leading-tight tracking-tight max-w-4xl">
            A controlled bridge — not a claim that a public SBOM exists
          </h1>
        </div>

        {/* Table Container */}
        <div className="w-full border-t border-b border-[#2A3441] overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#0A1D34] text-xs font-semibold tracking-[0.15em] text-gray-300 uppercase border-b border-[#2A3441]">
                <th className="py-4 px-6 font-semibold w-1/3 border-r border-[#2A3441]">
                  Surface
                </th>
                <th className="py-4 px-6 font-semibold w-2/3">Specification</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr
                  key={index}
                  className={`border-b border-[#2A3441] last:border-b-0 bg-transparent`}
                >
                  <td className="py-5 px-6 text-sm font-semibold text-white align-top border-r border-[#2A3441]">
                    {row.surface}
                  </td>
                  <td className="py-5 px-6 text-sm text-gray-300 font-light leading-relaxed align-top">
                    {row.specification}
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
