import React from "react";

export default function DisclosureThatPrecedesRelianceNotBuriedInAFooterSection() {
  const rows = [
    {
      scenario: "Direct interaction with AI",
      requiredCapability:
        "Contextual label before or at first interaction when required.",
      publicationRule: "Enabled by feature/role/jurisdiction matrix.",
    },
    {
      scenario: "AI-generated or manipulated content",
      requiredCapability:
        "Visible label and machine-readable marking capability where legally required and technically applicable.",
      publicationRule:
        "Status-qualified — no universal marking claim without implementation proof.",
    },
    {
      scenario: "Emotion recognition / biometric categorization",
      requiredCapability:
        "Disclosure and stricter eligibility controls where applicable.",
      publicationRule:
        "Default page must not imply ZoikoSuite offers these unless verified.",
    },
  ] as const;

  return (
    <section className="relative w-full bg-[#F6F1E6] py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start w-full">
        {/* Header Section */}
        <div className="mb-12 w-full">
          {/* Subtitle (Eye tag size: xs) */}
          <span className="text-[#A8843A] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            TRANSPARENCY, AI INTERACTION & GENERATED CONTENT
          </span>

          {/* Main Headline (32px for lg devices) */}
          <h1 className="text-3xl lg:text-[32px] font-bold text-[#0b1329] leading-tight tracking-tight">
            Disclosure that precedes reliance — not buried in a footer
          </h1>
        </div>

        {/* Semantic HTML Table */}
        <div className="w-full overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-t border-b border-[#DCD6C8] text-xs font-semibold tracking-[0.15em] text-[#0b1329] uppercase">
                <th className="py-4 pr-6 font-semibold w-1/4">Scenario</th>
                <th className="py-4 px-6 font-semibold w-5/12">
                  Required Capability
                </th>
                <th className="py-4 pl-6 font-semibold w-1/3">
                  Publication Rule
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
                    {row.scenario}
                  </td>
                  <td className="py-6 px-6 text-gray-600 font-light leading-relaxed text-[15.5px] align-top">
                    {row.requiredCapability}
                  </td>
                  <td className="py-6 pl-6 text-gray-600 font-light leading-relaxed text-[15.5px] align-top">
                    {row.publicationRule}
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
