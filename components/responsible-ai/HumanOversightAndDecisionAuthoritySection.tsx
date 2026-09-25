import React from "react";

export default function HumanOversightAndDecisionAuthoritySection() {
  const rows = [
    {
      authorityState: "Informational",
      meaning:
        "AI output is advisory/informational; no action occurs from output alone.",
      uiTreatment: 'Labeled "Assistive output"',
    },
    {
      authorityState: "User confirmation",
      meaning: "User must confirm before a reversible action proceeds.",
      uiTreatment: "Confirmation step with editable fields",
    },
    {
      authorityState: "Qualified review required",
      meaning: "A named role must review/approve before material action.",
      uiTreatment: "Reviewer identity, rationale, audit reference",
    },
    {
      authorityState: "Policy/SoD gate",
      meaning:
        "Configured policy, delegation, or segregation-of-duties control must pass.",
      uiTreatment: "Gate state visible; AI cannot bypass it",
    },
    {
      authorityState: "Human review available",
      meaning:
        "An eligible decision/outcome can be escalated for human review or correction.",
      uiTreatment: "Review CTA, status, response expectation",
    },
    {
      authorityState: "Prohibited autonomy",
      meaning: "AI cannot perform the defined action autonomously.",
      uiTreatment: "No hidden automation path; disabled state",
    },
  ] as const;

  return (
    <section className="relative w-full bg-white py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start w-full">
        {/* Header Section */}
        <div className="mb-12 w-full">
          {/* Subtitle (Eye tag size: xs) */}
          <span className="text-[#A8843A] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            HUMAN OVERSIGHT & DECISION AUTHORITY
          </span>

          {/* Main Headline (32px for lg devices) */}
          <h1 className="text-3xl lg:text-[32px] font-bold text-[#0b1329] leading-tight tracking-tight">
            Not every output is reviewed — the boundary is stated by use case
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
                <th className="py-4 px-6 font-semibold border-r border-[#DCD6C8] w-1/4">
                  Authority State
                </th>
                <th className="py-4 px-6 font-semibold border-r border-[#DCD6C8] w-6/13">
                  Meaning
                </th>
                <th className="py-4 px-6 font-semibold w-4/13">UI Treatment</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr
                  key={index}
                  className="border-b last:border-b-0 border-[#DCD6C8] bg-white"
                >
                  <td className="p-4 text-[#0b1329] text-base font-semibold tracking-tight align-top border-r border-[#DCD6C8]">
                    {row.authorityState}
                  </td>
                  <td className="p-4 text-gray-600 font-light leading-relaxed text-sm align-top border-r border-[#DCD6C8]">
                    {row.meaning}
                  </td>
                  <td className="p-4 text-gray-600 font-light leading-relaxed text-sm align-top">
                    {row.uiTreatment}
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
