import React from "react";
import { FONT_INTER, type TableRow } from "./data";

export default function RowTable({
  fieldHeader,
  ruleHeader,
  rows,
}: {
  fieldHeader: string;
  ruleHeader: string;
  rows: TableRow[];
}) {
  return (
    <div
      role="table"
      className="w-full pt-[11px] border-t border-[#DCD6C8]"
      style={{ fontFamily: FONT_INTER }}
    >
      <div
        role="row"
        className="hidden md:grid grid-cols-[210px_1fr] gap-[18px] pt-[13px] pb-[10px] text-[12.5px] font-bold leading-[20px] text-[#4B5872] uppercase tracking-[0.5px] border-b border-[#DCD6C8]"
      >
        <span role="columnheader">{fieldHeader}</span>
        <span role="columnheader">{ruleHeader}</span>
      </div>
      {rows.map((row, i) => (
        <div
          key={row.label}
          role="row"
          className="grid grid-cols-1 md:grid-cols-[210px_1fr] gap-x-[18px] gap-y-[4px] py-[13px] text-[12.5px] leading-[20px] border-b border-[#DCD6C8]"
        >
          <span role="cell" className="font-bold text-[#16223A]">
            {row.label}
          </span>
          <span role="cell" className="font-normal text-[#4B5872]">
            {row.text}
          </span>
        </div>
      ))}
    </div>
  );
}
