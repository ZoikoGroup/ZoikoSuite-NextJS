import React from "react";
import Image from "next/image";
import SectionHead from "./SectionHead";
import { PROCESS_STEPS, FONT_ARCHIVO, COLORS } from "./data";

export default function ProcessSection() {
  return (
    <section className="w-full bg-white flex justify-center px-4 sm:px-6 md:px-8 lg:px-12 py-[56px] md:py-[78px]">
      <div className="w-full max-w-[1240px] flex flex-col gap-[28px]">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-[20px]">
          <SectionHead
            eyebrow="A straightforward introduction"
            title={
              <>
                From priorities
                <br />
                to a focused enquiry.
              </>
            }
          />
          <p
            className="max-w-[430px] text-[14px] font-normal leading-[1.65]"
            style={{ fontFamily: FONT_ARCHIVO, color: COLORS.bodyTeal }}
          >
            Explain your needs, share relevant business context, and review
            your enquiry before sending.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-[20px]">
          {PROCESS_STEPS.map((step) => (
            <article
              key={step.code}
              className="rounded-[5px] flex flex-col gap-[7px] px-[25px] pt-[24px] pb-[25px]"
              style={{ backgroundColor: COLORS.paleBg }}
            >
              <span
                className="text-[10px] font-normal tracking-[2px]"
                style={{ fontFamily: FONT_ARCHIVO, color: COLORS.accentTeal }}
              >
                {step.code}
              </span>
              <h3
                className="text-[18px] font-bold leading-[1.35]"
                style={{ fontFamily: FONT_ARCHIVO, color: COLORS.headingTeal }}
              >
                {step.title}
              </h3>
              <p
                className="text-[14px] font-normal leading-[1.65]"
                style={{ fontFamily: FONT_ARCHIVO, color: COLORS.bodyTeal }}
              >
                {step.body}
              </p>
              <div className="relative w-full aspect-square mt-[12px] rounded-[4px] overflow-hidden">
                <Image src={step.image} alt={step.alt} fill className="object-cover" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
