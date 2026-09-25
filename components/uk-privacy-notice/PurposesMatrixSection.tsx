import React from "react";

const matrixRows = [
  {
    purpose: "[ Approved purpose ]",
    data: "[ Approved category IDs ]",
    basis: "[ Exact approved basis wording ]",
    link: "[ optional ]",
    state: "[ Approved/\nConditional ]",
  },
  {
    purpose: "[ Approved purpose ]",
    data: "[ Approved category IDs ]",
    basis: "[ Exact approved basis wording ]",
    link: "[ optional ]",
    state: "[ Approved/\nConditional ]",
  },
];

export default function PurposesMatrixSection() {
  return (
    <section id="purposes" className="py-5 sm:py-[26px] flex flex-col gap-4 sm:gap-5 border-t border-[#DCD6C8] scroll-mt-28">
      {/* Heading */}
      <h2
        className="text-[17px] sm:text-[18px] font-bold text-[#16223A] tracking-[-0.01em]"
        style={{
          fontFamily: "Georgia, serif",
          lineHeight: "28.8px",
        }}
      >
        Purposes &amp; Legal Bases Matrix
      </h2>

      {/* Mobile Swipe Hint */}
      <div className="flex sm:hidden items-center gap-1.5 text-[11px] font-medium text-[#A8843A] bg-[#F6F1E6] px-2.5 py-1 rounded-[4px] self-start">
        <span>⇄ Swipe horizontally to view all columns</span>
      </div>

      {/* Matrix Table Container */}
      <div className="w-full overflow-x-auto pb-1 -mx-1 px-1 sm:mx-0 sm:px-0">
        <div className="min-w-[580px] sm:min-w-[640px] flex flex-col border border-[#DCD6C8] rounded-[8px] overflow-hidden bg-white shadow-2xs">
          {/* Header Row */}
          <div className="grid grid-cols-[1.1fr_1.1fr_1.1fr_1fr_90px] bg-[#F6F1E6] border-b border-[#DCD6C8]">
            <div className="p-2 sm:p-[9px_11px] border-r border-[#DCD6C8] flex items-center">
              <span className="text-[10.5px] sm:text-[11px] font-bold uppercase tracking-[0.0345em] text-[#4B5872] leading-[16px] sm:leading-[17.6px]">
                Purpose
              </span>
            </div>
            <div className="p-2 sm:p-[9px_11px] border-r border-[#DCD6C8] flex items-center">
              <span className="text-[10.5px] sm:text-[11px] font-bold uppercase tracking-[0.0345em] text-[#4B5872] leading-[16px] sm:leading-[17.6px] whitespace-pre-line">
                Personal data{"\n"}involved
              </span>
            </div>
            <div className="p-2 sm:p-[9px_11px] border-r border-[#DCD6C8] flex items-center">
              <span className="text-[10.5px] sm:text-[11px] font-bold uppercase tracking-[0.0345em] text-[#4B5872] leading-[16px] sm:leading-[17.6px]">
                Legal basis
              </span>
            </div>
            <div className="p-2 sm:p-[9px_11px] border-r border-[#DCD6C8] flex items-center">
              <span className="text-[10.5px] sm:text-[11px] font-bold uppercase tracking-[0.0345em] text-[#4B5872] leading-[16px] sm:leading-[17.6px] whitespace-pre-line">
                Recipient/transfer{"\n"}link
              </span>
            </div>
            <div className="p-2 sm:p-[9px_11px] flex items-center">
              <span className="text-[10.5px] sm:text-[11px] font-bold uppercase tracking-[0.0345em] text-[#4B5872] leading-[16px] sm:leading-[17.6px]">
                State
              </span>
            </div>
          </div>

          {/* Matrix Rows */}
          {matrixRows.map((row, idx) => (
            <div
              key={idx}
              className={`grid grid-cols-[1.1fr_1.1fr_1.1fr_1fr_90px] ${
                idx > 0 ? "border-t border-[#DCD6C8]" : ""
              }`}
            >
              <div className="p-2 sm:p-[9px_11px] border-r border-[#DCD6C8] text-[11px] font-normal text-[#4B5872] leading-[17.6px] flex items-center">
                {row.purpose}
              </div>
              <div className="p-2 sm:p-[9px_11px] border-r border-[#DCD6C8] text-[11px] font-normal text-[#4B5872] leading-[17.6px] flex items-center">
                {row.data}
              </div>
              <div className="p-2 sm:p-[9px_11px] border-r border-[#DCD6C8] text-[11px] font-normal text-[#4B5872] leading-[17.6px] flex items-center whitespace-pre-line">
                {row.basis}
              </div>
              <div className="p-2 sm:p-[9px_11px] border-r border-[#DCD6C8] text-[11px] font-normal text-[#4B5872] leading-[17.6px] flex items-center">
                {row.link}
              </div>
              <div className="p-2 sm:p-[10px_11px] text-[11px] font-normal text-[#4B5872] leading-[17.6px] flex items-center whitespace-pre-line">
                {row.state}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
