import React from "react";
import { C, FONT } from "./tokens";

export default function PoliciesSection() {
  return (
    <section className="w-full flex justify-center bg-white">
      <div className="w-full max-w-[1200px] px-8 py-24 flex flex-col gap-9">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2.5">
            <div className="w-5 h-px" style={{ background: C.orange48 }} />
            <div className="text-xs font-semibold tracking-wide" style={{ color: C.orange48, fontFamily: FONT }}>
              POLICIES & LEGAL
            </div>
          </div>
          <h2 className="text-3xl font-bold leading-9" style={{ color: C.azure11, fontFamily: FONT }}>
            Reach the authoritative layer without duplication.
          </h2>
        </div>
        <img
          src="/trustt/op.png"
          alt="Policies and legal layer"
          className="w-full h-[568px] object-cover rounded-xl"
          style={{ border: `1px solid ${C.grey95}` }}
        />
      </div>
    </section>
  );
}