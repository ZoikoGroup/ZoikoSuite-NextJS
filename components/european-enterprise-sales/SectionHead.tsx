import React from "react";
import { FONT_ARCHIVO, COLORS } from "./data";

export default function SectionHead({
  eyebrow,
  title,
  body,
  id,
  light,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  body?: React.ReactNode;
  id?: string;
  light?: boolean;
}) {
  return (
    <div className="flex flex-col gap-[18px] items-start">
      {eyebrow && (
        <div className="flex items-center gap-[12px]">
          <span
            className="block h-[2px] w-[22px] shrink-0"
            style={{ backgroundColor: COLORS.gold }}
          />
          <span
            className="text-[10px] font-bold uppercase tracking-[2px]"
            style={{
              fontFamily: FONT_ARCHIVO,
              color: light ? COLORS.gold : COLORS.goldOnDark,
            }}
          >
            {eyebrow}
          </span>
        </div>
      )}
      <h2
        id={id}
        className="scroll-mt-[100px] text-[26px] md:text-[34px] font-bold leading-[1.18] tracking-[-1px]"
        style={{
          fontFamily: FONT_ARCHIVO,
          color: light ? "#ffffff" : COLORS.headingTeal,
        }}
      >
        {title}
      </h2>
      {body && (
        <p
          className="text-[14px] font-normal leading-[1.65]"
          style={{
            fontFamily: FONT_ARCHIVO,
            color: light ? COLORS.heroBody : COLORS.bodyTeal,
          }}
        >
          {body}
        </p>
      )}
    </div>
  );
}
