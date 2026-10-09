import React from "react";
import EyebrowHeading from "./EyebrowHeading";
import { FONT_ARCHIVO, FONT_INTER, JOURNEY_STEPS } from "./data";

export default function JourneySection() {
  return (
    <section className="w-full bg-white flex justify-center px-4 md:px-8 lg:px-[170px] pt-[52px] md:pt-[69px] pb-[56px] md:pb-[86px]">
      <div className="w-full max-w-[1100px] flex flex-col gap-[17px]">
        <EyebrowHeading
          eyebrow="End-to-end concept"
          title="A review request, with a blocked path."
        />

        <ol className="pt-[8px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[25px]">
          {JOURNEY_STEPS.map((step) => (
            <li
              key={step.number}
              className="flex flex-col gap-[14px] bg-[#F6F5F1] border-t-[3px] border-[#C9A34C] rounded-[10px] px-[25px] pt-[29.5px] pb-[45px]"
            >
              <span className="text-[11px] font-normal text-[#B52F47]">
                {step.number}
              </span>
              <h3
                className="text-[20px] md:text-[21px] font-bold leading-[1.3] text-[#233640]"
                style={{ fontFamily: FONT_ARCHIVO }}
              >
                {step.title}
              </h3>
              <p
                className="text-[14px] font-normal leading-[23.1px] text-[#233640]"
                style={{ fontFamily: FONT_INTER }}
              >
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
