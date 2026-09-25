import React from "react";

export default function RecognizedSignalsSection() {
  const rows = [
    {
      signal: "Global Privacy Control",
      designRule:
        "Where legally applicable and technically supported, routes into the same suppression state as the dedicated opt-out control.",
    },
    {
      signal: "Browser cookie controls",
      designRule:
        "Deletion/blocking may affect stored preferences or functionality — not a substitute for the ZoikoSuite preference UX.",
    },
    {
      signal: "Do Not Track",
      designRule:
        "No promised response behavior unless Legal/Engineering explicitly supports it.",
    },
    {
      signal: "Enterprise-managed browsers",
      designRule:
        "User consent is never inferred from enterprise settings unless Legal has approved the mechanism.",
    },
  ] as const;

  return (
    <section className="relative w-full bg-[#F6F1E6] py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start w-full">
        {/* Header Section */}
        <div className="mb-12 w-full">
          {/* Subtitle (Eye tag size: xs) */}
          <span className="text-[#A8843A] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            BROWSER, DEVICE & PRIVACY SIGNALS
          </span>

          {/* Main Headline (32px for lg devices) */}
          <h1 className="text-3xl lg:text-[32px] font-bold text-[#0b1329] leading-tight tracking-tight">
            Recognized signals and their limitations
          </h1>
        </div>

        {/* Semantic HTML Table */}
        <div className="w-full overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-t border-b border-[#DCD6C8] text-xs font-semibold tracking-[0.15em] text-[#0b1329] uppercase">
                <th className="py-4 pr-6 font-semibold w-1/3 md:w-1/4">
                  Signal
                </th>
                <th className="py-4 font-semibold w-2/3 md:w-3/4">
                  Design Rule
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
                    {row.signal}
                  </td>
                  <td className="py-6 text-gray-600 font-light leading-relaxed text-[15.5px] align-top">
                    {row.designRule}
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
