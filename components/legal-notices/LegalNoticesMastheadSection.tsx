import React from "react";
import { FONT_GEORGIA, FONT_INTER } from "./data";

export default function LegalNoticesMastheadSection() {
  return (
    <header
      className="w-full bg-white pt-[130px] pb-[130px]"
      style={{ fontFamily: FONT_INTER }}
    >
      <div className="mx-auto w-full max-w-[1180px] px-4 md:px-8 flex flex-col gap-[11px]">
        <p className="pb-[0.59px] text-xs font-bold uppercase leading-4 tracking-wider text-[#A8843A]">
          Legal
        </p>
        <h1
          className="text-[28px] md:text-[34px] font-bold leading-[48px] tracking-[-0.34px] text-[#16223A]"
          style={{ fontFamily: FONT_GEORGIA }}
        >
          Legal Notices
        </h1>
        <p className="max-w-[800px] text-sm font-normal leading-6 text-[#4B5872]">
          <span className="whitespace-nowrap">Corporate, intellectual-property, availability, professional-advice, and website notices for ZoikoSuite — with</span><br />
          authoritative links to the legal documents that govern specific topics.
        </p>
      </div>
    </header>
  );
}
