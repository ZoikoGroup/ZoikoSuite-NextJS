import React from "react";

export default function ProviderNamesAgeQuicklyThisStaysRegistryDrivenSection() {
  const rows = [
    {
      element: "Provider disclosure",
      requiredTreatment:
        "Named only where Legal, Procurement/Security, and Product approve public disclosure.",
    },
    {
      element: "Subprocessor status",
      requiredTreatment:
        "If a provider processes customer personal data as a subprocessor, the Subprocessor List remains authoritative.",
    },
    {
      element: "Provider outage",
      requiredTreatment:
        "UI degrades safely — no silent fallback to a different provider if that changes data/legal terms without approved behavior.",
    },
  ] as const;

  return (
    <section className="relative w-full bg-[#F6F1E6] py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start w-full">
        {/* Header Section */}
        <div className="mb-12 w-full">
          {/* Subtitle (Eye tag size: xs) */}
          <span className="text-[#A8843A] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            THIRD-PARTY MODELS, PROVIDERS & TOOLS
          </span>

          {/* Main Headline (32px for lg devices) */}
          <h1 className="text-3xl lg:text-[32px] font-bold text-[#0b1329] leading-tight tracking-tight">
            Provider names age quickly — this stays registry-driven
          </h1>
        </div>

        {/* Semantic HTML Table */}
        <div className="w-full overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-t border-b border-[#DCD6C8] text-xs font-semibold tracking-[0.15em] text-[#0b1329] uppercase">
                <th className="py-4 pr-6 font-semibold w-1/3">Element</th>
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
                    {row.element}
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
