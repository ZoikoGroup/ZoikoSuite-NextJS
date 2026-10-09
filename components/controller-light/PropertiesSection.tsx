import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FONT_ARCHIVO, FONT_INTER } from "./data";

export default function PropertiesSection() {
  return (
    <section className="w-full bg-white flex justify-center px-4 md:px-8 lg:px-[170px] py-[52px] md:py-[70px]">
      <div className="w-full max-w-[1100px] grid grid-cols-1 lg:grid-cols-2 gap-[36px] lg:gap-[40px] items-center">
        <div className="flex flex-col items-start gap-[28px]">
          <div className="flex flex-col items-start gap-[17px]">
            <p
              className="text-[10px] font-bold tracking-[1.8px] uppercase text-[#B08A38]"
              style={{ fontFamily: FONT_ARCHIVO }}
            >
              Defining properties
            </p>
            <h2
              className="text-[28px] md:text-[32px] lg:text-[39px] font-bold leading-[1.18] tracking-[-1px] text-[#233640]"
              style={{ fontFamily: FONT_ARCHIVO }}
            >
              Shared principles. Specialized responsibilities.
            </h2>
            <p
              className="pt-[7px] text-[16px] font-normal leading-[26.4px] text-[#233640]"
              style={{ fontFamily: FONT_INTER }}
            >
              Canonical governed-operation properties remain owned by their
              approved destination; no competing taxonomy is invented here.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-[22px]">
            <Link
              href="/audit-committee"
              className="inline-flex items-center justify-center min-h-[44px] px-[19px] py-[12px] bg-white border border-[#9EB1BA] rounded-[6px] text-[12px] font-bold text-[#243D47] hover:bg-[#F6F5F1] transition-colors"
              style={{ fontFamily: FONT_ARCHIVO }}
            >
              Audit Committee design preview →
            </Link>
            <Link
              href="/compliance-ladder"
              className="inline-flex items-center justify-center min-h-[44px] px-[19px] py-[12px] bg-white border border-[#9EB1BA] rounded-[6px] text-[12px] font-bold text-[#243D47] hover:bg-[#F6F5F1] transition-colors"
              style={{ fontFamily: FONT_ARCHIVO }}
            >
              Compliance Ladder design preview →
            </Link>
          </div>
        </div>

        <div className="relative w-full aspect-[536/357] rounded-[10px] overflow-hidden">
          <Image
            src="/controller-light/shared-properties-illustration.jpg"
            alt="Illustrative business collaboration connected through shared governed-operation properties"
            fill
            sizes="(min-width: 1024px) 536px, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
