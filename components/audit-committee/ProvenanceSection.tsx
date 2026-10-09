import React from "react";
import Image from "next/image";
import { EVIDENCE_TRAIL, FONT_ARCHIVO, FONT_INTER } from "./data";

export default function ProvenanceSection() {
  return (
    <section className="w-full bg-white flex justify-center px-4 md:px-8 lg:px-[170px] py-[52px] md:py-[70px]">
      <div className="w-full max-w-[1100px] grid grid-cols-1 lg:grid-cols-2 gap-[36px] lg:gap-[46px] items-center">
        <div className="flex flex-col items-start gap-[17px]">
          <p
            className="text-[10px] font-bold tracking-[1.8px] uppercase text-[#B08A38]"
            style={{ fontFamily: FONT_ARCHIVO }}
          >
            Illustrative evidence trail
          </p>
          <h2
            className="text-[28px] md:text-[32px] lg:text-[39px] font-bold leading-[1.18] tracking-[-1px] text-[#233640]"
            style={{ fontFamily: FONT_ARCHIVO }}
          >
            Visibility is not assurance.
          </h2>
          <p
            className="pt-[7px] text-[16px] font-normal leading-[26.4px] text-[#233640]"
            style={{ fontFamily: FONT_INTER }}
          >
            Keep management assertions, evidence references, reviewer
            findings and committee decisions separately attributed.
          </p>

          <ol className="pt-[3px] w-full">
            {EVIDENCE_TRAIL.map((item) => (
              <li
                key={item.label}
                className="border-b border-[#D1DEE4] py-[15px] first:pt-0"
              >
                <strong
                  className="block text-[16px] font-bold leading-[26.4px] text-[#233640]"
                  style={{ fontFamily: FONT_ARCHIVO }}
                >
                  {item.label}
                </strong>
                <span
                  className="block text-[14px] font-normal leading-[23.1px] text-[#748087]"
                  style={{ fontFamily: FONT_INTER }}
                >
                  {item.value}
                </span>
              </li>
            ))}
          </ol>
        </div>

        <div className="relative w-full aspect-[457/471] rounded-[10px] overflow-hidden">
          <Image
            src="/audit-committee/evidence-trail-illustration.jpg"
            alt="Illustrative evidence trail connecting management, review and committee"
            fill
            sizes="(min-width: 1024px) 457px, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
