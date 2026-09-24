import React from "react";

export default function FreshConsentWhenTheSubstanceChangesSection() {
  const rows = [
    {
      changeType: "Copy clarification only",
      publicTreatment:
        'Update "Last updated"; preserve effective date if Legal approves.',
      consentConsequence: "No re-consent.",
    },
    {
      changeType: "New optional technology",
      publicTreatment: "Update inventory and vendor detail.",
      consentConsequence:
        "Existing consent used only if Legal confirms it remains sufficiently specific.",
    },
    {
      changeType: "New purpose / category",
      publicTreatment: "Prominent policy update + preference prompt.",
      consentConsequence: "Fresh consent where required.",
    },
    {
      changeType: "Advertising / profiling change",
      publicTreatment: "Material change notice.",
      consentConsequence: "Fresh consent / opt-out treatment as applicable.",
    },
  ] as const;

  return (
    <section className="relative w-full bg-[#F6F1E6] py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start w-full">
        {/* Header Section */}
        <div className="mb-12 w-full">
          {/* Subtitle (Eye tag size: xs) */}
          <span className="text-[#A8843A] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            CHANGES, CHANGE LOG & RE-CONSENT
          </span>

          {/* Main Headline (32px for lg devices) */}
          <h1 className="text-3xl lg:text-[32px] font-bold text-[#0b1329] leading-tight tracking-tight">
            Fresh consent when the substance changes
          </h1>
        </div>

        {/* Semantic HTML Table */}
        <div className="w-full overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-t border-b border-[#DCD6C8] text-xs font-semibold tracking-[0.15em] text-[#0b1329] uppercase">
                <th className="py-4 pr-6 font-semibold w-1/4">Change Type</th>
                <th className="py-4 px-6 font-semibold w-5/12">
                  Public Treatment
                </th>
                <th className="py-4 pl-6 font-semibold w-5/12">
                  Consent Consequence
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
                    {row.changeType}
                  </td>
                  <td className="py-6 px-6 text-gray-600 font-light leading-relaxed text-[15.5px] align-top">
                    {row.publicTreatment}
                  </td>
                  <td className="py-6 pl-6 text-gray-600 font-light leading-relaxed text-[15.5px] align-top">
                    {row.consentConsequence}
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
