import React from "react";
import { C, FONT, HERO_IMG } from "./tokens";

export default function HeroSection() {
  return (
    <header className="w-full flex justify-center overflow-hidden" style={{ background: C.azure11 }}>
      <div className="w-full max-w-[1200px] px-8 py-24 flex flex-wrap justify-between items-center gap-10">
        <div className="w-[595px] max-w-full pb-3 flex flex-col items-start gap-3.5">
          <div className="flex items-center gap-2.5">
            <div className="w-5 h-px" style={{ background: C.orange58 }} />
            <div className="text-xs font-semibold tracking-wide" style={{ color: C.orange58, fontFamily: FONT }}>
              TRUST
            </div>
          </div>
          <h1 className="text-5xl font-bold leading-[48.30px] whitespace-nowrap" style={{ color: C.white, fontFamily: FONT }}>
            Trust you can inspect, not
            <br />
            just accept.
          </h1>
          <p className="max-w-[500px] pt-1.5 text-base leading-6 whitespace-nowrap" style={{ color: C.azure82, fontFamily: FONT }}>
            Explore how ZoikoSuite approaches security, privacy,
            <br />
            compliance, data residency, evidence, responsible AI,
            <br />
            accessibility, policies, certifications, and service transparency —
            <br />
            with scope and status made clear.
          </p>
          <div className="py-2 flex flex-wrap items-start gap-3.5">
            <a
              href="/trust-center"
              className="px-6 py-3 rounded-full flex items-center gap-2"
              style={{ background: C.orange58 }}
            >
              <span className="text-sm font-semibold" style={{ color: C.azure11, fontFamily: FONT }}>
                Explore Trust Center
              </span>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="M2.5 6h6M6 2.5 9.5 6 6 9.5" stroke={C.azure11} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="#faq"
              className="px-6 py-3 rounded-full"
              style={{ outline: "1px solid rgba(255,255,255,0.35)", outlineOffset: "-1px" }}
            >
              <span className="text-sm font-semibold" style={{ color: C.white, fontFamily: FONT }}>
                Request enterprise trust review
              </span>
            </a>
          </div>
        </div>

        <div className="w-[485px] max-w-full">
          <img
            src={HERO_IMG}
            alt="Trust at ZoikoSuite"
            className="w-full h-96 object-cover rounded-2xl"
            style={{ border: `1px solid ${C.azure21}`, boxShadow: "0px 30px 70px 0px rgba(0,0,0,0.40)" }}
          />
        </div>
      </div>
    </header>
  );
}
