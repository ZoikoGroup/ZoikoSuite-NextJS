import React from "react";
import Image from "next/image";
import { FONT_ARCHIVO, FONT_INTER } from "./data";

export default function TopSection() {
  return (
    <section className="w-full bg-white flex justify-center px-4 md:px-8 lg:px-[170px] pt-[40px] md:pt-[54px] pb-[48px] md:pb-[65px]">
      <div className="w-full max-w-[1100px] grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-[36px] lg:gap-[65px] items-center">
        <div className="flex flex-col items-start gap-[18px]">
          <p
            className="text-[10px] font-bold tracking-[1.8px] uppercase text-[#B08A38]"
            style={{ fontFamily: FONT_ARCHIVO }}
          >
            Controller
          </p>
          <h1
            className="text-[34px] md:text-[44px] lg:text-[51px] font-bold leading-[1.12] tracking-[-1.4px] text-[#223842]"
            style={{ fontFamily: FONT_ARCHIVO }}
          >
            Give financial operations a clearer control narrative.
          </h1>
          <p
            className="max-w-[500px] text-[14px] font-normal leading-[23.1px] text-[#74828A]"
            style={{ fontFamily: FONT_INTER }}
          >
            Explore how ownership, review checkpoints, exceptions and
            supporting evidence can be organized around cross-functional
            business workflows. Confirm supported features and integrations
            during evaluation.
          </p>
          <a
            href="#briefing"
            className="inline-flex items-center justify-center min-h-[44px] px-[19px] py-[12px] bg-[#D0A644] border border-[#D0A644] rounded-[6px] text-[12px] font-bold text-white hover:opacity-90 transition-opacity"
            style={{ fontFamily: FONT_ARCHIVO }}
          >
            Discuss evaluation context
          </a>
        </div>

        <div className="relative w-full aspect-[595/400] rounded-[10px] overflow-hidden">
          <Image
            src="/controller-light/hero-financial-workflow.jpg"
            alt="Conceptual governed-business workflow with source documents, separate responsibilities, review and evidence"
            fill
            priority
            sizes="(min-width: 1024px) 595px, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
