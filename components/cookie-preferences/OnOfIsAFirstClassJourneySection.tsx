import React from "react";

export default function OnOfIsAFirstClassJourneySection() {
  const rows = [
    {
      action: "Turn category off",
      behavior:
        "Persists new state, blocks future activation, stops eligible active scripts/SDKs where technically possible.",
    },
    {
      action: "Reject all optional",
      behavior:
        "Sets every optional category off in one action; preserves necessary-only state.",
    },
    {
      action: "Reset choices",
      behavior:
        "Deletes/expires the local preference receipt and re-runs the resolver — reset is never translated into acceptance.",
    },
    {
      action: "Withdraw after prior accept",
      behavior:
        "Shows confirmation and current effective state — no guilt or degraded core-content threat.",
    },
  ] as const;

  return (
    <section className="relative w-full bg-white py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start w-full">
        {/* Header Section */}
        <div className="mb-12 w-full">
          {/* Subtitle (Eye tag size: xs) */}
          <span className="text-[#A8843A] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            WITHDRAWAL, RESET & PREFERENCE CHANGES
          </span>

          {/* Main Headline (32px for lg devices) */}
          <h1 className="text-3xl lg:text-[32px] font-bold text-[#0b1329] leading-tight tracking-tight">
            On → Off is a first-class journey, never harder than On
          </h1>
        </div>

        {/* Semantic HTML Table */}
        <div className="w-full overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-t border-b border-[#DCD6C8] text-xs font-semibold tracking-[0.15em] text-[#0b1329] uppercase">
                <th className="py-4 pr-6 font-semibold w-1/3 md:w-1/4">
                  Action
                </th>
                <th className="py-4 font-semibold w-2/3 md:w-3/4">Behavior</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr key={index} className="border-b border-[#DCD6C8] bg-white">
                  <td className="py-6 pr-6 text-[#0b1329] text-base font-semibold tracking-tight align-top">
                    {row.action}
                  </td>
                  <td className="py-6 text-gray-600 font-light leading-relaxed text-[15.5px] align-top">
                    {row.behavior}
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
