import React from "react";
import Image from "next/image";
import { FONT_ARCHIVO } from "./data";

export default function LightTopicSection() {
  return (
    <section className="w-full bg-[#F6F5F1] flex justify-center px-4 md:px-8 lg:px-[170px] pt-[40px] md:pt-[54px] pb-[52px] md:pb-[75px]">
      <div className="w-full max-w-[1100px] flex flex-col gap-[11px]">
        <p
          className="text-[10px] font-bold tracking-[1.8px] uppercase text-[#B08A38]"
          style={{ fontFamily: FONT_ARCHIVO }}
        >
          02 / Operating context
        </p>
        <h2
          className="pt-[7px] text-[24px] md:text-[29px] font-bold leading-[1.18] tracking-[-1px] text-[#233640]"
          style={{ fontFamily: FONT_ARCHIVO }}
        >
          Explore the responsibilities behind the decision.
        </h2>
        <div className="relative w-full aspect-[1100/374] rounded-[10px] overflow-hidden">
          <Image
            src="/controller-light/operating-context-finance-review.jpg"
            alt="Team reviewing business performance information"
            fill
            sizes="(min-width: 1024px) 1100px, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
