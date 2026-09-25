import React from "react";

export default function SecurityIncidentAndPersonalDataBreachAssistanceSection() {
  const rows = [
    {
      area: "Trigger",
      requiredBehavior:
        "Potential or confirmed breach affecting customer personal data under the processor relationship.",
    },
    {
      area: "Content",
      requiredBehavior:
        "Known nature/scope, affected data/subjects if known, likely consequences where available, measures taken/proposed.",
    },
    {
      area: "No admission UI",
      requiredBehavior:
        "Incident communications never insert liability admissions or speculative root cause.",
    },
    {
      area: "Security disclosure boundary",
      requiredBehavior:
        "Public Security Disclosure / Status page remains separate from confidential customer breach communications.",
    },
  ] as const;

  return (
    <section className="relative w-full bg-white py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start w-full">
        {/* Header Section */}
        <div className="mb-12 w-full">
          {/* Subtitle (Eye tag size: xs) */}
          <span className="text-[#A8843A] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            SECURITY INCIDENT & PERSONAL DATA BREACH ASSISTANCE
          </span>

          {/* Main Headline (32px for lg devices) */}
          <h1 className="text-3xl lg:text-[32px] font-bold text-[#0b1329] leading-tight tracking-tight">
            Progressive, non-speculative, and separate from public status
          </h1>
        </div>

        {/* Semantic HTML Table */}
        <div className="w-full overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-t border-b border-[#DCD6C8] text-xs font-semibold tracking-[0.15em] text-[#0b1329] uppercase">
                <th className="py-4 pr-6 font-semibold w-1/3 md:w-1/4">Area</th>
                <th className="py-4 font-semibold w-2/3 md:w-3/4">
                  Required Behavior
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr key={index} className="border-b border-[#DCD6C8] bg-white">
                  <td className="py-6 pr-6 text-[#0b1329] text-base font-semibold tracking-tight align-top">
                    {row.area}
                  </td>
                  <td className="py-6 text-gray-600 font-light leading-relaxed text-[15.5px] align-top">
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
