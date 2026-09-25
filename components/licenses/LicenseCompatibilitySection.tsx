import React from "react";

export default function LicenseCompatibilitySection() {
  const rows = [
    {
      internalState: "Approved",
      requiredHandling:
        "Legal/engineering determination complete; obligations mapped; evidence current.",
      publicBehavior: "Record may publish if marked public.",
    },
    {
      internalState: "Review required",
      requiredHandling:
        "Scanner or engineer identifies new/changed license or use context.",
      publicBehavior:
        "Not published as approved; shipment gated if unresolved.",
    },
    {
      internalState: "Unknown license",
      requiredHandling: "No reliable license metadata/text.",
      publicBehavior:
        'Fail closed — "Unknown - blocked." Public omission does not equal approval.',
    },
    {
      internalState: "License conflict",
      requiredHandling:
        "Incompatible terms or obligations with intended distribution.",
      publicBehavior:
        "Release blocker until replaced, isolated, relicensed, or resolved.",
    },
  ] as const;

  return (
    <section className="relative w-full bg-white py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start w-full">
        {/* Header Section */}
        <div className="mb-12 w-full">
          {/* Subtitle */}
          <span className="text-[#A8843A] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            LICENSE COMPATIBILITY, EXCEPTIONS & RELEASE GATES
          </span>

          {/* Main Headline */}
          <h1 className="text-3xl lg:text-[32px] font-bold text-[#0b1329] leading-tight tracking-tight max-w-3xl">
            Unknown or conflicting licenses fail closed — public omission never
            equals approval
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
                <th className="py-4 px-6 font-semibold w-1/3 border-r border-[#DCD6C8]">
                  Internal State
                </th>
                <th className="py-4 px-6 font-semibold w-1/3 border-r border-[#DCD6C8]">
                  Required Handling
                </th>
                <th className="py-4 px-6 font-semibold w-1/3">
                  Public Behavior
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr
                  key={index}
                  className={`border-b border-[#DCD6C8] last:border-b-0 bg-transparent`}
                >
                  <td className="py-5 px-6 text-sm font-semibold text-[#0b1329] align-top border-r border-[#DCD6C8]">
                    {row.internalState}
                  </td>
                  <td className="py-5 px-6 text-sm text-gray-600 font-light leading-relaxed align-top border-r border-[#DCD6C8]">
                    {row.requiredHandling}
                  </td>
                  <td className="py-5 px-6 text-sm text-gray-600 font-light leading-relaxed align-top">
                    {row.publicBehavior}
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
