import React from "react";
import { FONT_GEORGIA, FONT_INTER } from "./data";

export default function TermsMastheadSection() {
  return (
    <header className="w-full bg-[#FBFAF7] pt-[47px] pb-[28px]">
      <div className="mx-auto w-full max-w-[1180px] px-4 md:px-8 flex flex-col gap-[11px]">
        {/* Eyebrow */}
        <p
          className="pb-[0.59px] text-[11px] font-bold leading-[17.6px] tracking-[1.54px] uppercase text-[#A8843A]"
          style={{ fontFamily: FONT_INTER }}
        >
          Legal
        </p>

        {/* Heading */}
        <h1
          className="text-[28px] md:text-[34px] font-bold leading-[1.4] md:leading-[54.4px] tracking-[-0.34px] text-[#16223A]"
          style={{ fontFamily: FONT_GEORGIA }}
        >
          Terms of Service
        </h1>

        {/* Sub */}
        <p
          className="max-w-[680px] lg:max-w-none pt-[3px] pb-[7px] text-[15px] font-normal leading-[24px] text-[#4B5872]"
          style={{ fontFamily: FONT_INTER }}
        >
          These Terms explain the rules that apply when you access or use
          ZoikoSuite services and websites.
          <br className="hidden lg:block" /> Review the effective version,
          navigate by section, or download a copy for your records.
        </p>

        {/* Integrity note */}
        <p
          className="max-w-[680px] lg:max-w-none border-l-[3px] border-[#A8843A] pl-[12px] text-[12.5px] italic font-normal leading-[20px] text-[#4B5872]"
          style={{ fontFamily: FONT_INTER }}
        >
          The operative Terms below control. Any overview or navigation aid is
          provided for convenience and does not replace or
          <br className="hidden lg:block" /> modify the legal text.
        </p>
      </div>
    </header>
  );
}
