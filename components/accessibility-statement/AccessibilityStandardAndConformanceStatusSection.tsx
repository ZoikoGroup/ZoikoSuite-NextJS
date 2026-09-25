import React from "react";

export default function AccessibilityStandardAndConformanceStatusSection() {
  const rows = [
    {
      publicState: "Target only / assessment in progress",
      whenAllowed:
        "WCAG 2.2 AA is the design/test target but full scope has not been evaluated.",
      requiredBehavior:
        "State the target and assessment scope — never call the property conformant until evaluated.",
    },
    {
      publicState: "Partially conformant",
      whenAllowed: "Approved review found some content does not fully conform.",
      requiredBehavior:
        "Name the standard/level, scope, and known limitations in user terms.",
    },
    {
      publicState: "Fully conformant",
      whenAllowed:
        "Approved evidence shows every page/process in the claimed scope satisfies all applicable A and AA success criteria.",
      requiredBehavior:
        "Publish exact claim date, WCAG version, level, URI scope, and relied-upon technologies.",
    },
    {
      publicState: "Non-conformant",
      whenAllowed:
        "Formal assessment determines the scoped property does not meet the stated standard.",
      requiredBehavior:
        "Only with Accessibility/Legal approval, plus clear support/remediation context.",
    },
    {
      publicState: "Status unavailable / stale",
      whenAllowed:
        "Evidence is missing, expired, contradicted, or beyond the review interval.",
      requiredBehavior:
        "Remove/withhold conformance language; show review-in-progress or current known facts.",
    },
  ] as const;

  return (
    <section className="relative w-full bg-white py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start w-full">
        {/* Header Section */}
        <div className="mb-12 w-full">
          {/* Subtitle (Eye tag size: xs) */}
          <span className="text-[#A8843A] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            ACCESSIBILITY STANDARD & CONFORMANCE STATUS
          </span>

          {/* Main Headline (32px for lg devices) */}
          <h1 className="text-3xl lg:text-[32px] font-bold text-[#0b1329] leading-tight tracking-tight">
            Publish only the status the evidence actually supports
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
                  Public State
                </th>
                <th className="py-4 px-6 font-semibold border-r border-[#DCD6C8] last:border-r-0 w-5/12">
                  When Allowed
                </th>
                <th className="py-4 px-6 font-semibold w-5/12">
                  Required Copy Behavior
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
                    {row.publicState}
                  </td>
                  <td className="py-6 px-6 text-gray-600 font-light leading-relaxed text-[15.5px] align-top border-r border-[#DCD6C8]">
                    {row.whenAllowed}
                  </td>
                  <td className="py-6 px-6 text-gray-600 font-light leading-relaxed text-[15.5px] align-top">
                    {row.requiredBehavior}
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
