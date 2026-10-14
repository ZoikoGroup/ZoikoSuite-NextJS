import React from "react";
import { FONT_ARCHIVO, COLORS } from "./data";

export default function FinalCtaSection() {
  return (
    <section
      className="w-full flex justify-center px-4 sm:px-6 md:px-8 lg:px-12 py-[45px]"
      style={{ backgroundColor: COLORS.darkBgAlt }}
    >
      <div className="w-full max-w-[1240px] flex flex-col sm:flex-row items-center justify-between gap-[20px]">
        <div className="flex flex-col gap-[18px]">
          <div className="flex items-center gap-[12px]">
            <span className="block h-[2px] w-[22px] shrink-0" style={{ backgroundColor: COLORS.gold }} />
            <span
              className="text-[10px] font-bold uppercase tracking-[2px]"
              style={{ fontFamily: FONT_ARCHIVO, color: COLORS.goldOnDark }}
            >
              Start with your priorities
            </span>
          </div>
          <h2
            className="text-[22px] md:text-[28px] font-bold leading-[1.18] tracking-[-1px] text-white"
            style={{ fontFamily: FONT_ARCHIVO }}
          >
            Let&rsquo;s put your enterprise needs in context.
          </h2>
        </div>
        <a
          href="#enquiry"
          className="inline-flex items-center justify-center min-h-[46px] px-[20px] text-[12px] font-bold rounded-[2px] hover:opacity-90 transition-opacity whitespace-nowrap"
          style={{ fontFamily: FONT_ARCHIVO, backgroundColor: COLORS.gold, color: COLORS.darkBg }}
        >
          Contact European sales
        </a>
      </div>
    </section>
  );
}
