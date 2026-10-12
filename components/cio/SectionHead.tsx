import React from "react";
import { FONT_INTER } from "./data";

export default function SectionHead({
  title,
  body,
  id,
  light,
}: {
  title: React.ReactNode;
  body?: React.ReactNode;
  id?: string;
  light?: boolean;
}) {
  return (
    <div className="flex flex-col gap-[12px] max-w-[760px]">
      <h2
        id={id}
        className={`scroll-mt-[100px] text-[24px] md:text-[30px] font-bold leading-[1.2] tracking-[-0.3px] ${
          light ? "text-white" : "text-[#101E2B]"
        }`}
        style={{ fontFamily: FONT_INTER }}
      >
        {title}
      </h2>
      {body && (
        <p
          className={`text-[14.5px] md:text-[15.5px] font-normal leading-[1.5] ${
            light ? "text-[#A9B8C0]" : "text-[#5D6A74]"
          }`}
          style={{ fontFamily: FONT_INTER }}
        >
          {body}
        </p>
      )}
    </div>
  );
}
