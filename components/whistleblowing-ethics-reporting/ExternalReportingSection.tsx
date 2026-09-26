import React from "react";
import SectionHead from "./SectionHead";
import { FONT_INTER } from "./data";

export default function ExternalReportingSection() {
  return (
    <section
      aria-labelledby="external-reporting-title"
      className="w-full bg-white flex justify-center px-4 md:px-[32px] lg:px-[130px] py-[32px] md:pt-[47px] md:pb-[48px]"
    >
      <div className="w-full max-w-[1180px] flex flex-col gap-[16px] px-0">
        <SectionHead
          id="external-reporting-title"
          eyebrow="External reporting & independent advice"
          title="Internal reporting is not always the only route"
        />
        <p
          className="max-w-[700px] text-[14.5px] font-normal leading-[23.2px] text-[#4B5872]"
          style={{ fontFamily: FONT_INTER }}
        >
          Applicable external authority links are rendered from a Legal-owned
          jurisdiction registry, along with approved independent-advice
          resources where configured.
        </p>
      </div>
    </section>
  );
}
