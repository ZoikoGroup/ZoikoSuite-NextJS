import React from "react";
import Image from "next/image";
import { FONT_INTER } from "./data";

export default function HeroSection() {
  return (
    <section className="w-full bg-[#08222F] flex justify-center px-4 md:px-8 lg:px-[120px] pt-[32px] md:pt-[48px] pb-[36px] md:pb-[44px]">
      <div className="w-full max-w-[1200px] grid grid-cols-1 lg:grid-cols-[55fr_45fr] gap-[32px] lg:gap-[48px] items-center">
        <div className="flex flex-col items-start gap-[14px]">
          <div className="flex items-center gap-[10px]">
            <span className="w-[20px] h-px bg-[#CDA85B]" />
            <span
              className="text-[12px] font-bold tracking-[0.84px] uppercase text-[#CDA85B]"
              style={{ fontFamily: FONT_INTER }}
            >
              For Chief Information Officers
            </span>
          </div>
          <h1
            className="text-[28px] sm:text-[34px] lg:text-[40px] font-bold leading-[1.15] tracking-[-0.6px] text-white"
            style={{ fontFamily: FONT_INTER }}
          >
            Bring greater clarity to enterprise operating decisions.
          </h1>
          <p
            className="max-w-[520px] pt-[3px] text-[16px] font-normal leading-[25.6px] text-[#C7D3DA]"
            style={{ fontFamily: FONT_INTER }}
          >
            Assess how governed workflows, defined decision rights, and
            visible handoffs could support a more accountable operating model
            across teams and systems. Explore the architecture, controls, and
            evidence your organization would need to validate fit.
          </p>
          <div className="flex flex-wrap gap-[12px] pt-[10px]">
            <a
              href="#lead-capture"
              className="inline-flex items-center justify-center min-h-[46px] px-[22px] py-[13px] bg-[#CDA85B] rounded-[10px] text-[14.5px] font-semibold text-[#08222F] hover:opacity-90 transition-opacity"
              style={{ fontFamily: FONT_INTER }}
            >
              Request Demo
            </a>
            <a
              href="#lead-capture"
              className="inline-flex items-center justify-center min-h-[46px] px-[22px] py-[13px] border border-white/40 rounded-[10px] text-[14.5px] font-semibold text-white hover:bg-white/5 transition-colors"
              style={{ fontFamily: FONT_INTER }}
            >
              Create Account
            </a>
          </div>
        </div>

        <div className="relative w-full aspect-[490/394] rounded-[16px] overflow-hidden border border-[#1C3B4E]">
          <Image
            src="/cio/hero-governance-map.jpg"
            alt="Illustrative governance map: source system, decision and review, evidence"
            fill
            priority
            sizes="(min-width: 1024px) 490px, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
