import React from "react";
import Image from "next/image";
import { FONT_ARCHIVO, COLORS } from "./data";

export default function EditorialSection() {
  return (
    <section className="w-full bg-white flex justify-center px-4 sm:px-6 md:px-8 lg:px-12 py-[64px] md:py-[90px]">
      <div
        className="w-full max-w-[1240px] grid grid-cols-1 lg:grid-cols-[7fr_5fr] rounded-[5px] overflow-hidden shadow-[0px_10px_25px_0px_rgba(9,43,53,0.07)]"
        style={{ backgroundColor: COLORS.pageCream }}
      >
        <div className="relative w-full aspect-[679/320] min-h-[260px]">
          <Image
            src="/uk-european-partnerships/editorial-meeting-space.jpg"
            alt="Illustrative contemporary London meeting space prepared for a business discussion"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col gap-[14px] p-[32px] md:p-[42px]">
          <div className="flex items-center gap-[12px]">
            <span className="block h-[2px] w-[22px] shrink-0" style={{ backgroundColor: COLORS.gold }} />
            <span
              className="text-[10px] font-bold uppercase tracking-[2px]"
              style={{ fontFamily: FONT_ARCHIVO, color: COLORS.goldOnDark }}
            >
              A considered beginning
            </span>
          </div>
          <h2
            className="text-[24px] md:text-[30px] font-bold leading-[1.18] tracking-[-1px]"
            style={{ fontFamily: FONT_ARCHIVO, color: COLORS.headingTeal }}
          >
            Clear goals.
            <br />
            Relevant context.
            <br />
            A useful conversation.
          </h2>
          <p
            className="text-[14px] font-normal leading-[1.65]"
            style={{ fontFamily: FONT_ARCHIVO, color: COLORS.bodyTeal }}
          >
            Start with the opportunity you see, the markets involved, and the
            outcome you want to explore.
          </p>
          <p
            className="text-[11px] font-normal leading-[1.65]"
            style={{ fontFamily: FONT_ARCHIVO, color: COLORS.bodyTeal }}
          >
            Illustrative business setting · No company office claim
          </p>
        </div>
      </div>
    </section>
  );
}
