import React from "react";

const SYMBOL_RULES = [
  {
    state: "No verified public status",
    rule: "Do not append ®. No symbol unless Brand/IP approves a TM/SM instruction.",
  },
  {
    state: "Claimed / unregistered mark",
    rule: "TM or SM used only if Brand/IP has approved the instruction for the mark/context.",
  },
  {
    state: "Registered mark",
    rule: "® used only where the registration and goods/services scope support it and Legal has approved the public instruction.",
  },
  {
    state: "Foreign / multi-jurisdiction use",
    rule: "A US registration or symbol instruction is never assumed to apply globally.",
  },
];

export default function SymbolsAttributionSection() {
  return (
    <section className="w-full bg-[#F6F1E6] py-8 sm:py-[49px]">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-8">
        {/* Eyebrow */}
        <p className="text-[#A8843A] text-[11px] leading-[17.6px] font-bold tracking-[0.14em] uppercase font-sans mb-2">
          TRADEMARK SYMBOLS & ATTRIBUTION
        </p>

        {/* Section Heading */}
        <h2 className="font-serif font-bold text-[#16223A] text-[20px] sm:text-[24px] leading-[30px] sm:leading-[38.4px] tracking-[-0.01em] mb-5 sm:mb-6">
          A legal status function, not a branding flourish
        </h2>

        {/* Symbol Table */}
        <div className="w-full bg-white/70 border border-[#DCD6C8] rounded-[8px] overflow-hidden mb-5 sm:mb-6 shadow-xs">
          {/* Header (Desktop/Tablet) */}
          <div className="hidden sm:grid grid-cols-12 bg-[#F6F1E6] border-b border-[#DCD6C8] px-4 sm:px-6 py-3">
            <div className="col-span-4 text-[12px] font-bold text-[#4B5872] uppercase tracking-[0.0437em]">
              State
            </div>
            <div className="col-span-8 text-[12px] font-bold text-[#4B5872] uppercase tracking-[0.0437em]">
              Public rule
            </div>
          </div>

          {/* Rows */}
          <div className="divide-y divide-[#DCD6C8]">
            {SYMBOL_RULES.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-1 sm:grid-cols-12 px-4 sm:px-6 py-3.5 sm:py-4 gap-1 sm:gap-0 items-start hover:bg-white/90 transition-colors"
              >
                <div className="col-span-12 sm:col-span-4 font-sans font-bold sm:font-medium text-[12px] leading-[19.2px] text-[#16223A]">
                  {item.state}
                </div>
                <div className="col-span-12 sm:col-span-8 font-sans font-normal text-[12px] leading-[19.2px] text-[#16223A]">
                  {item.rule}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Callout Box */}
        <div className="w-full bg-[#F6F1E6] border-l-[3px] border-l-[#A8843A] border-y border-r border-[#DCD6C8]/60 rounded-[4px] px-3.5 sm:px-[18px] py-3 sm:py-[14px]">
          <p className="font-sans text-[12px] sm:text-[12.5px] leading-[19px] sm:leading-[20px] text-[#4B5872]">
            Attribution statements are generated from the Trademark Registry — never hand-typed ownership language in
            page templates.
          </p>
        </div>
      </div>
    </section>
  );
}
