import React from "react";
import SectionHead from "./SectionHead";
import { FONT_INTER, STATUS_STATES } from "./data";

export default function SecureStatusCenterSection() {
  return (
    <section
      aria-labelledby="secure-status-title"
      className="w-full bg-[#F6F1E6] flex justify-center px-4 md:px-[32px] lg:px-[130px] py-[32px] md:pt-[47px] md:pb-[48px]"
    >
      <div className="w-full max-w-[1180px] flex flex-col gap-[11px] px-0">
        <SectionHead
          id="secure-status-title"
          eyebrow="Secure status & message center"
          title="Two-way, without leaking case content"
        />

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[14px] pt-[15px]">
          {STATUS_STATES.map((state) => (
            <li
              key={state}
              className="flex items-center px-[17px] py-[15px] bg-white border border-[#DCD6C8] rounded-[8px]"
            >
              <h3
                className="text-[13.5px] font-bold leading-[20px] text-[#16223A]"
                style={{ fontFamily: FONT_INTER }}
              >
                {state}
              </h3>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
