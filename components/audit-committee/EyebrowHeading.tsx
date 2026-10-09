import React from "react";
import { FONT_ARCHIVO } from "./data";

export default function EyebrowHeading({
  eyebrow,
  title,
  id,
  center,
  light,
}: {
  eyebrow: string;
  title: React.ReactNode;
  id?: string;
  center?: boolean;
  light?: boolean;
}) {
  return (
    <div className={`flex flex-col ${center ? "items-center text-center" : "items-start"}`}>
      <p
        className="text-[10px] font-bold tracking-[1.8px] uppercase"
        style={{ fontFamily: FONT_ARCHIVO, color: "#B08A38" }}
      >
        {eyebrow}
      </p>
      <h2
        id={id}
        className={`pt-[14px] text-[26px] md:text-[32px] lg:text-[39px] font-bold leading-[1.18] tracking-[-1px] ${
          light ? "text-white" : "text-[#233640]"
        }`}
        style={{ fontFamily: FONT_ARCHIVO }}
      >
        {title}
      </h2>
    </div>
  );
}
