import React from "react";
import { FONT_ARCHIVO, FONT_INTER } from "./data";

export default function IndexCard({
  index,
  title,
  body,
}: {
  index: string;
  title: string;
  body: string;
}) {
  return (
    <li className="flex flex-col items-start gap-[15px] bg-white border border-[#DBE3E7] rounded-[7px] pt-[24px] pb-[25px] px-[25px]">
      <span
        className="text-[10px] font-bold tracking-[1.8px] text-[#B08A38]"
        style={{ fontFamily: FONT_ARCHIVO }}
      >
        {index}
      </span>
      <h3
        className="text-[20px] font-bold leading-[26px] text-[#243943]"
        style={{ fontFamily: FONT_ARCHIVO }}
      >
        {title}
      </h3>
      <p
        className="text-[13px] font-normal leading-[21.45px] text-[#748087]"
        style={{ fontFamily: FONT_INTER }}
      >
        {body}
      </p>
    </li>
  );
}
