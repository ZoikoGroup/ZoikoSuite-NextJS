import React from "react";
import { FONT_ARCHIVO, FONT_INTER } from "./data";

export default function LightCtaSection() {
  return (
    <section className="w-full flex justify-center px-4 md:px-8 lg:px-[170px] py-[49px] bg-[#09232F]">
      <div className="w-full max-w-[1100px] flex flex-col items-center gap-[15px] text-center">
        <p
          className="text-[10px] font-bold tracking-[1.8px] uppercase text-[#B08A38]"
          style={{ fontFamily: FONT_ARCHIVO }}
        >
          Context before conversion
        </p>
        <h2
          className="max-w-[620px] pt-[3px] text-[24px] md:text-[29px] font-bold leading-[1.18] tracking-[-1px] text-white"
          style={{ fontFamily: FONT_ARCHIVO }}
        >
          See how this applies to your own governance model.
        </h2>
        <p
          className="max-w-[600px] pb-[10px] text-[13px] font-normal leading-[21.45px] text-[#9FB2BD]"
          style={{ fontFamily: FONT_INTER }}
        >
          Discuss the scope, responsibilities and evidence you need. This
          page illustrates a concept; it does not establish live product
          capability.
        </p>
        <a
          href="#briefing"
          className="inline-flex items-center justify-center min-h-[44px] px-[19px] py-[12px] bg-[#D0A644] border border-[#D0A644] rounded-[6px] text-[12px] font-bold text-white hover:opacity-90 transition-opacity"
          style={{ fontFamily: FONT_ARCHIVO }}
        >
          Review evaluation context
        </a>
      </div>
    </section>
  );
}
