import React from "react";
import { C, FONT } from "./tokens";

export default function SectionHead({
  eyebrow,
  title,
  titleClass = "text-[30px] leading-9",
}: {
  eyebrow: string;
  title: React.ReactNode;
  titleClass?: string;
}) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2.5">
        <div className="w-5 h-px" style={{ background: C.orange48 }} />
        <div
          className="text-xs font-semibold tracking-wide"
          style={{ color: C.orange48, fontFamily: FONT }}
        >
          {eyebrow}
        </div>
      </div>
      <div className={`font-bold ${titleClass}`} style={{ color: C.azure11, fontFamily: FONT }}>
        {title}
      </div>
    </div>
  );
}
