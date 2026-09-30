import React from "react";
import SectionHead from "./SectionHead";
import { C, FONT } from "./tokens";
import { EVIDENCE_ROWS } from "./data";

export default function EvidenceArchitectureSection() {
  return (
    <section className="w-full flex justify-center" style={{ background: C.grey96 }}>
      <div className="w-full max-w-[1200px] px-8 py-[89px] flex flex-col gap-7">
        <div className="flex flex-wrap items-end justify-between">
          <SectionHead eyebrow="EVIDENCE ARCHITECTURE" title="Every material claim should have a path back to evidence." />
          <p className="w-full lg:w-[480px] pr-1 pt-3.5 pb-5 text-base leading-6 whitespace-nowrap" style={{ color: C.grey58, fontFamily: FONT }}>
            How ZoikoSuite distinguishes source truth, derived
            <br />
            information, review status, and publication evidence.
          </p>
        </div>

        <div className="w-full flex flex-col border-t border-color-orange-87">
          <div className="flex w-full py-[15px] border-b border-color-orange-87">
            <div className="w-[180px] shrink-0 pr-4 text-[10px] font-bold uppercase tracking-tight" style={{ color: C.grey58, fontFamily: FONT }}>EVIDENCE LEVEL</div>
            <div className="w-[560px] shrink-0 pr-4 text-[10px] font-bold uppercase tracking-tight" style={{ color: C.grey58, fontFamily: FONT }}>MEANING</div>
            <div className="flex-1 text-[10px] font-bold uppercase tracking-tight" style={{ color: C.grey58, fontFamily: FONT }}>PUBLIC TREATMENT</div>
          </div>
          {EVIDENCE_ROWS.map((row) => (
            <div key={row.level} className="flex w-full py-[15px] border-b border-color-orange-87">
              <div className="w-[180px] shrink-0 pr-4 text-sm font-bold leading-5 whitespace-nowrap" style={{ color: C.azure11, fontFamily: FONT }}>{row.level}</div>
              <div className="w-[560px] shrink-0 pr-4 text-sm leading-5" style={{ color: C.grey58, fontFamily: FONT }}>
                {row.meaning.split("\n").map((line, idx) => (
                  <span key={idx} className="block whitespace-nowrap">{line}</span>
                ))}
              </div>
              <div className="flex-1 text-sm leading-5" style={{ color: C.grey58, fontFamily: FONT }}>
                {row.treatment.split("\n").map((line, idx) => (
                  <span key={idx} className="block whitespace-nowrap">{line}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
