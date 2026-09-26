import React from "react";
import { FONT_GEORGIA, FONT_INTER } from "./data";

export default function SectionHead({
  eyebrow,
  title,
  id,
}: {
  eyebrow: string;
  title: string;
  id?: string;
}) {
  return (
    <div className="flex flex-col gap-[11px]">
      <p
        className="text-[11px] font-bold leading-[17.6px] tracking-[1.54px] uppercase text-[#A8843A]"
        style={{ fontFamily: FONT_INTER }}
      >
        {eyebrow}
      </p>
      <h2
        id={id}
        className="w-full text-[20px] md:text-[23px] font-bold leading-[36.8px] text-[#16223A]"
        style={{ fontFamily: FONT_GEORGIA }}
      >
        {title}
      </h2>
    </div>
  );
}
