import React from "react";
import SectionHead from "./SectionHead";
import { C, FONT } from "./tokens";

export default function EvidenceAccessSection() {
  return (
    <section className="w-full flex justify-center bg-white">
      <div className="w-full max-w-[1200px] px-8 py-[71px] flex flex-col gap-8">
        <SectionHead
          eyebrow="TRUST CENTER & EVIDENCE ACCESS"
          title="Self-serve what can be public. Control only what must be restricted."
        />
        <img
          src="/trustt/oi.png"
          alt="Trust Center evidence access"
          className="w-full h-[568px] object-cover rounded-2xl"
          style={{ border: `1px solid ${C.grey95}` }}
        />
      </div>
    </section>
  );
}