import React from "react";

export default function InvestorPostureSection() {
  const rows = [
    {
      state: "Private",
      isCurrent: true,
      description:
        '"Privately held." Long-term capital orientation; qualified investor engagement if approved.',
      constraint: 'No "buy shares" or public trading CTA.',
    },
    {
      state: "Capital engagement",
      isCurrent: false,
      description:
        '"Selective institutional / strategic capital engagement." Investor Centre + contact + materials gate.',
      constraint: "No promise of active raise unless verified.",
    },
    {
      state: "Transaction announced",
      isCurrent: false,
      description: "Only approved announcement and formal materials.",
      constraint: "No extrapolated terms or closing certainty.",
    },
    {
      state: "Public issuer",
      isCurrent: false,
      description:
        "Ticker, exchange, filings, earnings, stock data — only if registry verifies.",
      constraint: "No stale hard-coded market data.",
    },
    {
      state: "Unavailable",
      isCurrent: false,
      description: "Contact + last-reviewed notice.",
      constraint: "Never defaults to a stronger claim.",
    },
  ] as const;

  return (
    <section className="relative w-full bg-[#F6F1E6] py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start">
        {/* Header Section */}
        <div className="max-w-3xl mb-12">
          {/* Subtitle (Eye tag size: xs) */}
          <span className="text-[#A8843A] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            INVESTOR POSTURE
          </span>

          {/* Main Headline (32px for lg devices) */}
          <h1 className="text-3xl lg:text-[32px] font-bold text-[#0b1329] leading-tight tracking-tight">
            Registry-driven — supports state changes without redesign
          </h1>
        </div>

        {/* Table Section */}
        <div className="w-full flex flex-col border-t border-[#DCD6C8]">
          {rows.map((row, index) => (
            <div
              key={index}
              className={`w-full py-6 px-6 border-b border-[#DCD6C8] flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-6 transition-colors ${
                row.isCurrent ? "bg-[#EFE8D8]" : "bg-transparent"
              }`}
            >
              {/* State Column */}
              <div className="w-full md:w-3/12 flex flex-col items-start gap-2">
                <span className="text-[#0b1329] text-base font-semibold tracking-tight">
                  {row.state}
                </span>
                {row.isCurrent && (
                  <span className="text-[#4B5872] text-[10px] font-semibold tracking-[0.15em] uppercase bg-[#F6F1E6] px-2.5 py-0.5 rounded border border-[#DCD6C8] shadow-xs">
                    CURRENT STATE
                  </span>
                )}
              </div>

              {/* Description Column */}
              <div className="w-full md:w-5/12 text-gray-700 font-light leading-relaxed text-[15.5px]">
                {row.description}
              </div>

              {/* Constraint Column */}
              <div className="w-full md:w-4/12 text-gray-500 font-light italic leading-relaxed text-[15px]">
                {row.constraint}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
