import React from "react";
import { FONT_GEORGIA, FONT_INTER } from "./data";

export default function HeroSection() {
  return (
    <header className="w-full bg-[#FBFAF7] flex justify-center px-4 md:px-[32px] lg:px-[130px] py-[32px] md:pt-[47px] md:pb-[48px]">
      <div className="w-full max-w-[1180px] flex flex-col gap-[11px] px-0">
        <p
          className="text-[11px] font-bold leading-[17.6px] tracking-[1.54px] uppercase text-[#A8843A]"
          style={{ fontFamily: FONT_INTER }}
        >
          Ethics & Speak Up
        </p>
        <h1
          className="w-full max-w-[1116px] text-[28px] md:text-[32px] font-bold leading-[51.2px] text-[#16223A]"
          style={{ fontFamily: FONT_GEORGIA }}
        >
          Raise a concern safely.
        </h1>
        <p
          className="w-full max-w-[706px] text-[14.5px] font-normal leading-[23.2px] text-[#4B5872] pt-[2px]"
          style={{ fontFamily: FONT_INTER }}
        >
          Report suspected misconduct, unethical behavior, policy violations or other eligible concerns through a<br />confidential, carefully governed process.
        </p>
      </div>
    </header>
  );
}
