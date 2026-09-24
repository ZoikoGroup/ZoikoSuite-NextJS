import React from "react";

export default function CommitmentAndScopeSection() {
  const rows = [
    {
      scopeField: "Primary web property",
      requiredValue: "[ Exact domain(s) / URI pattern(s) ]",
    },
    {
      scopeField: "Authenticated application",
      requiredValue:
        "Included / excluded / separately assessed; version/build when relevant.",
    },
    {
      scopeField: "Mobile apps",
      requiredValue: "Platform, app name/version, and whether covered.",
    },
    {
      scopeField: "Documents / reports",
      requiredValue:
        "Included, partially included, or governed by a separate remediation process.",
    },
    {
      scopeField: "Embedded third-party content",
      requiredValue: "Named categories and control limitations.",
    },
    {
      scopeField: "Locale / language scope",
      requiredValue:
        "Locales assessed — translated content is not assumed to share identical accessibility.",
    },
  ] as const;

  return (
    <section className="relative w-full bg-[#F6F1E6] py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start w-full">
        {/* Header Section */}
        <div className="w-full flex flex-col items-start mb-12">
          {/* Subtitle (Eye tag size: xs) */}
          <span className="text-[#A8843A] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            COMMITMENT & SCOPE
          </span>

          {/* Main Headline (32px for lg devices) */}
          <h1 className="text-3xl lg:text-[32px] font-bold text-[#0b1329] leading-tight tracking-tight mb-4">
            What &quot;ZoikoSuite&quot; covers in this statement
          </h1>

          {/* Description Text */}
          <p className="text-gray-600 font-light leading-relaxed text-[15.5px] max-w-3xl">
            ZoikoSuite is committed to making its digital experiences usable by
            people with disabilities. We integrate accessibility into design,
            development, testing, content, and support, and use feedback and
            evaluation evidence to improve accessibility over time. The exact
            conformance status of each covered experience is stated below and
            published only for the scope that has been evaluated.
          </p>
        </div>

        {/* Semantic HTML Table */}
        <div className="w-full overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-t border-b border-[#DCD6C8] text-xs font-semibold tracking-[0.15em] text-[#0b1329] uppercase">
                <th className="py-4 pr-6 font-semibold w-1/3">Scope Field</th>
                <th className="py-4 pl-6 font-semibold w-2/3">
                  Required Value / Behavior
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr
                  key={index}
                  className="border-b border-[#DCD6C8] bg-[#F6F1E6]"
                >
                  <td className="py-6 pr-6 text-[#0b1329] text-base font-semibold tracking-tight align-top">
                    {row.scopeField}
                  </td>
                  <td className="py-6 pl-6 text-gray-600 font-light leading-relaxed text-[15.5px] align-top">
                    {row.requiredValue}
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
