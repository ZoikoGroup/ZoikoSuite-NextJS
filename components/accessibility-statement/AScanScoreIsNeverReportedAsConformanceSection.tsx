import React from "react";

export default function AScanScoreIsNeverReportedAsConformanceSection() {
  const rows = [
    {
      assessmentLayer: "Automated",
      minimumMethod:
        "Approved automated rules across representative templates and critical authenticated surfaces.",
    },
    {
      assessmentLayer: "Keyboard",
      minimumMethod:
        "Complete all critical journeys without a pointer; verify focus order, visibility, no traps, skip links.",
    },
    {
      assessmentLayer: "Screen reader",
      minimumMethod:
        "Representative desktop and mobile combinations; verify names, roles, states, relationships.",
    },
    {
      assessmentLayer: "Critical-process testing",
      minimumMethod:
        "End-to-end processes, not isolated screens — WCAG conformance applies to complete processes.",
    },
  ] as const;

  return (
    <section className="relative w-full bg-white py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start w-full">
        {/* Header Section */}
        <div className="w-full flex flex-col items-start mb-12">
          {/* Subtitle (Eye tag size: xs) */}
          <span className="text-[#A8843A] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            ASSESSMENT APPROACH & EVIDENCE
          </span>

          {/* Main Headline (32px for lg devices) */}
          <h1 className="text-3xl lg:text-[32px] font-bold text-[#0b1329] leading-tight tracking-tight mb-4">
            A scan score is never reported as conformance
          </h1>

          {/* Descriptive Quote Text */}
          <p className="text-gray-600 font-light italic leading-relaxed text-[15.5px] max-w-4xl">
            &quot;We assess accessibility using a combination of automated
            checks, manual keyboard testing, assistive-technology testing, zoom
            and reflow review, and representative end-to-end journey testing.
            The exact method and scope for the current statement are recorded in
            the accessibility evidence used to prepare this
            statement.&quot;
          </p>
        </div>

        {/* Semantic HTML Table */}
        <div className="w-full overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-t border-b border-[#DCD6C8] text-xs font-semibold tracking-[0.15em] text-[#0b1329] uppercase">
                <th className="py-4 pr-6 font-semibold w-1/3">
                  Assessment Layer
                </th>
                <th className="py-4 pl-6 font-semibold w-2/3">
                  Minimum Method
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
                    {row.assessmentLayer}
                  </td>
                  <td className="py-6 pl-6 text-gray-600 font-light leading-relaxed text-[15.5px] align-top">
                    {row.minimumMethod}
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
