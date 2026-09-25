import React from "react";

export default function CompatibilityTechnicalSpecificationsAndTestedEnvironmentsSection() {
  const rows = [
    {
      area: "Browsers",
      requiredTreatment:
        'Only the current tested browser/version policy — never "works in all modern browsers."',
    },
    {
      area: "Screen readers",
      requiredTreatment:
        "Tested combinations and date, e.g. NVDA/Chrome, JAWS/Edge, VoiceOver/Safari — only when verified.",
    },
    {
      area: "Zoom / reflow",
      requiredTreatment:
        "Assessed zoom/reflow thresholds if verified — never invented.",
    },
    {
      area: "Technologies relied upon",
      requiredTreatment:
        "HTML, CSS, JavaScript, ARIA, SVG, PDF, etc., matching the formal claim when one exists.",
    },
  ] as const;

  return (
    <section className="relative w-full bg-[#F6F1E6] py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start w-full">
        {/* Header Section */}
        <div className="mb-12 w-full">
          {/* Subtitle (Eye tag size: xs) */}
          <span className="text-[#A8843A] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            COMPATIBILITY, TECHNICAL SPECIFICATIONS & TESTED ENVIRONMENTS
          </span>

          {/* Main Headline (32px for lg devices) */}
          <h1 className="text-3xl lg:text-[32px] font-bold text-[#0b1329] leading-tight tracking-tight">
            Evidence, not a support warranty
          </h1>
        </div>

        {/* Semantic HTML Table */}
        <div className="w-full overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-t border-b border-[#DCD6C8] text-xs font-semibold tracking-[0.15em] text-[#0b1329] uppercase">
                <th className="py-4 pr-6 font-semibold w-1/3">Area</th>
                <th className="py-4 pl-6 font-semibold w-2/3">
                  Required Treatment
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
                    {row.area}
                  </td>
                  <td className="py-6 pl-6 text-gray-600 font-light leading-relaxed text-[15.5px] align-top">
                    {row.requiredTreatment}
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
