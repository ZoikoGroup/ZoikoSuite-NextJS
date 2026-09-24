import React from "react";

export default function AiSpecificContextIsEvidenceNotASeparateEnforcementRegimeSection() {
  const rows = [
    {
      riskArea: "Prompt/data injection",
      requiredPublicMessage:
        "Users should not treat untrusted content as authoritative instructions.",
      handoff: "Security Overview / Trust Responsible AI",
    },
    {
      riskArea: "Unsafe or unexpected output",
      requiredPublicMessage:
        "Concern/report route with feature, context, and output-reference fields.",
      handoff: "AI concern workflow",
    },
    {
      riskArea: "Good-faith research",
      requiredPublicMessage: "Routes to Security Disclosure terms.",
      handoff: "Security Disclosure",
    },
  ] as const;

  return (
    <section className="relative w-full bg-[#0A1D34] py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans text-white">
      <div className="max-w-6xl mx-auto flex flex-col items-start w-full">
        {/* Header Section */}
        <div className="mb-12 w-full">
          {/* Subtitle (Eye tag size: xs) */}
          <span className="text-[#A8843A] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            SECURITY, MISUSE & AI INCIDENT HANDOFF
          </span>

          {/* Main Headline (32px for lg devices) */}
          <h1 className="text-3xl lg:text-[32px] font-bold text-white leading-tight tracking-tight">
            AI-specific context is evidence, not a separate enforcement regime
          </h1>
        </div>

        {/* Semantic HTML Table */}
        <div className="w-full overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-t border-b border-[#20344F] text-xs font-semibold tracking-[0.15em] text-white uppercase">
                <th className="py-4 pr-6 font-semibold w-1/4">Risk Area</th>
                <th className="py-4 px-6 font-semibold w-5/12">
                  Required Public Message
                </th>
                <th className="py-4 pl-6 font-semibold w-1/3">Handoff</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr
                  key={index}
                  className="border-b border-[#20344F] bg-[#0A1D34]"
                >
                  <td className="py-6 pr-6 text-white text-base font-semibold tracking-tight align-top">
                    {row.riskArea}
                  </td>
                  <td className="py-6 px-6 text-gray-300 font-light leading-relaxed text-[15.5px] align-top">
                    {row.requiredPublicMessage}
                  </td>
                  <td className="py-6 pl-6 text-gray-300 font-light leading-relaxed text-[15.5px] align-top">
                    {row.handoff}
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
