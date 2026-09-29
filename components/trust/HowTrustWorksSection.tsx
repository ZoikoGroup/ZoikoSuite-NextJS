import React from "react";
import SectionHead from "./SectionHead";
import { C, FONT } from "./tokens";
import { TRUST_STEPS } from "./data";

export default function HowTrustWorksSection() {
  return (
    <section className="w-full flex justify-center bg-white">
      <div className="w-full max-w-[1200px] px-8 py-[60px] flex flex-col gap-5">
        <div className="flex flex-wrap items-end justify-between">
          <SectionHead eyebrow="EVIDENCE BEFORE ASSURANCE" title="How trust works." />
          <p className="w-full lg:w-[480px] pr-1 pt-3.5 pb-5 text-base leading-6 whitespace-nowrap" style={{ color: C.grey58, fontFamily: FONT }}>
            ZoikoSuite trust information shows what a claim means,
            <br />
            what it covers, what evidence supports it, who owns it, and
            <br />
            whether it&apos;s current — instead of asking you to infer it.
          </p>
        </div>

        <div className="w-full max-w-[768px] pt-4 flex flex-col gap-5">
          {TRUST_STEPS.map((step) => (
            <div
              key={step.n}
              className="p-6 rounded-[10px] flex items-start gap-5"
              style={{ background: C.white, border: `1px solid ${C.grey95}` }}
            >
              <div
                className="w-7 h-7 shrink-0 rounded-2xl flex justify-center items-center"
                style={{ background: C.azure11 }}
              >
                <span className="text-xs font-bold" style={{ color: C.white, fontFamily: FONT }}>
                  {step.n}
                </span>
              </div>
              <div className="flex flex-col gap-[3px]">
                <div className="text-sm font-bold" style={{ color: C.azure11, fontFamily: FONT }}>
                  {step.title}
                </div>
                <div className="text-xs leading-5 whitespace-pre-wrap" style={{ color: C.grey58, fontFamily: FONT }}>
                  {step.body}
                </div>
              </div>
            </div>
          ))}
        </div>

        <img
          src="/trustt/oo.png"
          alt="How trust works visual"
          className="w-full object-cover rounded-xl mt-10"
          style={{ height: "450px" }}
        />
      </div>
    </section>
  );
}