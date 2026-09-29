import React from "react";
import SectionHead from "./SectionHead";
import { C, FONT } from "./tokens";

export default function FindYourPathSection() {
  return (
    <section className="w-full flex justify-center" style={{ background: C.grey96 }}>
      <div className="w-full max-w-[1200px] px-8 py-[71px] flex flex-col gap-9">
        <SectionHead
          eyebrow="FIND YOUR PATH"
          title="Reviewer flows, mapped end to end."
        />
        <img
          src="/trustt/kk.png"
          alt="Reviewer flows"
          className="w-full h-[568px] object-cover rounded-2xl"
          style={{ border: `1px solid ${C.grey95}` }}
        />
      </div>
    </section>
  );
}