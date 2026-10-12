import React from "react";
import Image from "next/image";
import { FONT_INTER } from "./data";

export default function HeroSection() {
  return (
    <section className="w-full bg-[#08222F] flex justify-center px-4 md:px-8 lg:px-[120px] pt-[40px] md:pt-[64px] pb-[40px] md:pb-[56px]">
      <div className="w-full max-w-[1200px] grid grid-cols-1 lg:grid-cols-[55fr_45fr] gap-[32px] lg:gap-[48px] items-center">
        <div className="flex flex-col items-start gap-[14px]">
          <div className="flex items-center gap-[10px]">
            <span className="w-[20px] h-px bg-[#CDA85B]" />
            <span
              className="text-[12px] font-bold tracking-[0.84px] uppercase text-[#CDA85B]"
              style={{ fontFamily: FONT_INTER }}
            >
              Workforce &amp; Payroll
            </span>
          </div>
          <h1
            className="text-[28px] sm:text-[34px] lg:text-[40px] font-bold leading-[1.15] tracking-[-0.6px] text-white"
            style={{ fontFamily: FONT_INTER }}
          >
            Bring workforce changes and payroll decisions into one governed
            workflow.
          </h1>
          <p
            className="max-w-[520px] pt-[3px] text-[16px] font-normal leading-[25.6px] text-[#C7D3DA]"
            style={{ fontFamily: FONT_INTER }}
          >
            Connect workforce inputs, review checkpoints, exceptions, and
            payroll handoffs with clear ownership and evidence—subject to
            your confirmed ZoikoSuite configuration.
          </p>
          <div className="flex flex-wrap gap-[12px] pt-[10px]">
            <a
              href="#lead-capture"
              className="inline-flex items-center justify-center min-h-[46px] px-[22px] py-[13px] bg-[#CDA85B] rounded-[10px] text-[14.5px] font-semibold text-[#08222F] hover:opacity-90 transition-opacity"
              style={{ fontFamily: FONT_INTER }}
            >
              Request a demo
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

        <div className="relative w-full aspect-[595/505] rounded-[16px] overflow-hidden border border-[#1C3B4E]">
          <Image
            src="/workforce-and-payroll/hero-workforce-payroll-workflow.jpg"
            alt="Illustrative workflow: change, review, handoff"
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
