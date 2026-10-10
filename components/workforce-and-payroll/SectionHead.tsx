import React from "react";
import { FONT_INTER } from "./data";

export default function SectionHead({
  title,
  body,
  id,
}: {
  title: React.ReactNode;
  body?: React.ReactNode;
  id?: string;
}) {
  return (
    <div className="flex flex-col gap-[12px] max-w-[760px]">
      <h2
        id={id}
        className="text-[24px] md:text-[30px] font-bold leading-[1.2] tracking-[-0.3px] text-[#101E2B]"
        style={{ fontFamily: FONT_INTER }}
      >
        {title}
      </h2>
      {body && (
        <p
          className="text-[14.5px] md:text-[15.5px] font-normal leading-[1.5] text-[#5D6A74]"
          style={{ fontFamily: FONT_INTER }}
        >
          {body}
        </p>
      )}
    </div>
  );
}
