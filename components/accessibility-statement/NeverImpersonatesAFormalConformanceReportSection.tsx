import React from "react";

export default function NeverImpersonatesAFormalConformanceReportSection() {
  const rows = [
    {
      artifact: "Accessibility Conformance Report / VPAT",
      publicTreatment:
        "Availability status, version/date/scope, and request/download path — only if an approved artifact exists.",
    },
    {
      artifact: "Independent assessment",
      publicTreatment:
        "Assessor/date/scope named only with publication permission.",
    },
    {
      artifact: "Trust Accessibility page",
      publicTreatment:
        "Primary buyer-readable accessibility posture and evidence context.",
    },
    {
      artifact: "Procurement contact",
      publicTreatment:
        "Accessibility/procurement support route — never a forced sales call for basic accessibility information.",
    },
  ] as const;

  return (
    <section className="relative w-full bg-[#F6F1E6] py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start w-full">
        {/* Header Section */}
        <div className="w-full flex flex-col items-start mb-12">
          {/* Subtitle (Eye tag size: xs) */}
          <span className="text-[#A8843A] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            PROCUREMENT, ACR / VPAT & EVIDENCE HANDOFF
          </span>

          {/* Main Headline (32px for lg devices) */}
          <h1 className="text-3xl lg:text-[32px] font-bold text-[#0b1329] leading-tight tracking-tight">
            Never impersonates a formal conformance report
          </h1>
        </div>

        {/* Semantic HTML Table */}
        <div className="w-full overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-t border-b border-[#DCD6C8] text-xs font-semibold tracking-[0.15em] text-[#0b1329] uppercase">
                <th className="py-4 pr-6 font-semibold w-1/3">Artifact</th>
                <th className="py-4 pl-6 font-semibold w-2/3">
                  Public Treatment
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
                    {row.artifact}
                  </td>
                  <td className="py-6 pl-6 text-gray-600 font-light leading-relaxed text-[15.5px] align-top">
                    {row.publicTreatment}
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
