import React from "react";
import SectionHead from "./SectionHead";
import { DEFINING_PROPERTIES, FONT_INTER } from "./data";

export default function DefiningPropertiesSection() {
  return (
    <section className="w-full bg-white flex justify-center px-4 md:px-8 lg:px-[120px] py-[40px] md:py-[56px]">
      <div className="w-full max-w-[1200px] flex flex-col gap-[16px]">
        <SectionHead
          id="h-properties"
          title="What makes workforce and payroll operations governable."
          body="A proposed framework for traceable decisions from workforce changes to downstream payroll activity."
        />

        <ul className="pt-[4px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[16px]">
          {DEFINING_PROPERTIES.map((property) => (
            <li key={property.title} className="bg-white border border-[#E4E1D8] rounded-[12px]">
              <details className="group">
                <summary className="flex items-start justify-between gap-3 min-h-[96px] pl-[18px] pr-[18px] py-[18px] cursor-pointer list-none">
                  <div className="flex flex-col gap-[6px]">
                    <span
                      className="text-[11px] font-bold tracking-[0.55px] text-[#B8913F]"
                      style={{ fontFamily: FONT_INTER }}
                    >
                      {property.code}
                    </span>
                    <span
                      className="text-[15px] font-bold text-[#101E2B]"
                      style={{ fontFamily: FONT_INTER }}
                    >
                      {property.title}
                    </span>
                    <span
                      className="inline-flex items-center gap-[5px] w-fit px-[9px] py-[2px] bg-[#F1EDF9] border border-[#DDD0EF] rounded-full text-[10.5px] font-bold tracking-[0.315px] uppercase text-[#57408A]"
                      style={{ fontFamily: FONT_INTER }}
                    >
                      ◇ Proposed
                    </span>
                  </div>
                  <span
                    className="shrink-0 mt-[4px] text-[#5D6A74] transition-transform group-open:rotate-180"
                    aria-hidden="true"
                  >
                    ▾
                  </span>
                </summary>
                <p
                  className="px-[18px] pb-[18px] text-[13.5px] font-normal leading-[1.5] text-[#5D6A74]"
                  style={{ fontFamily: FONT_INTER }}
                >
                  {property.detail}
                </p>
              </details>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
