import React from "react";

const transferRows = [
  {
    field: "Transfer applicability",
    value: "Governed state from the Transfer Registry — unknown blocks the required disclosure.",
  },
  {
    field: "Destination description",
    value: "[ Approved countries/regions/categories only — never inferred from vendor marketing. ]",
  },
  {
    field: "Safeguard / mechanism",
    value: "[ Exact Legal-approved wording — adequacy, SCCs, or binding rules are never assumed. ]",
  },
];

export default function InternationalTransfersSection() {
  return (
    <section id="transfers" className="py-5 sm:py-[26px] flex flex-col gap-4 sm:gap-5 border-t border-[#DCD6C8] scroll-mt-28">
      {/* Heading */}
      <h2
        className="text-[17px] sm:text-[18px] font-bold text-[#16223A] tracking-[-0.01em]"
        style={{
          fontFamily: "Georgia, serif",
          lineHeight: "28.8px",
        }}
      >
        International Transfers
      </h2>

      {/* Row Table */}
      <div className="w-full flex flex-col border-t border-[#DCD6C8]">
        {/* Table Header */}
        <div className="hidden sm:flex flex-row items-center gap-[18px] py-[13px] pb-[10px] border-b border-[#DCD6C8]">
          <div className="w-[190px] shrink-0 text-[12.5px] font-bold uppercase tracking-[0.0504em] text-[#4B5872]">
            Field
          </div>
          <div className="flex-1 text-[12.5px] font-bold uppercase tracking-[0.0504em] text-[#4B5872]">
            Value
          </div>
        </div>

        {/* Data Rows */}
        {transferRows.map((row, idx) => (
          <div
            key={idx}
            className="flex flex-col sm:flex-row items-start gap-1 sm:gap-[18px] py-2.5 sm:py-[13px] border-b border-[#DCD6C8]"
          >
            <div className="w-full sm:w-[190px] shrink-0 text-[12px] sm:text-[12.5px] font-bold text-[#16223A] sm:text-[#4B5872] leading-[18px] sm:leading-[20px]">
              {row.field}
            </div>
            <div className="flex-1 text-[12px] sm:text-[12.5px] font-normal text-[#4B5872] leading-[19px] sm:leading-[20px]">
              {row.value}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
