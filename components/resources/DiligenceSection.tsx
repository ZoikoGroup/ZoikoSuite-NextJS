import React from "react";
import SectionHead from "./SectionHead";
import { C, FONT } from "./tokens";

export default function DiligenceSection() {
  return (
    <section className="w-full flex justify-center bg-white">
      <div className="w-full max-w-[1200px] px-8 py-24 flex flex-col gap-9">
        <div className="flex flex-wrap items-end justify-between gap-10">
          <SectionHead eyebrow="ENTERPRISE DILIGENCE" title="Where deeper proof actually lives." />
          <p className="w-full lg:w-[460px] pt-3.5 pb-5 text-base leading-6 whitespace-nowrap" style={{ color: C.grey44, fontFamily: FONT }}>
            Resources curates and explains — it does not become a
            <br />
            second Trust Center or duplicate compliance/security
            <br />
            status.
          </p>
        </div>
        <img
          src="/resources/oo.png"
          alt="Enterprise diligence destinations"
          className="w-full h-[568px] object-cover rounded-xl"
          style={{ border: `1px solid ${C.grey95}` }}
        />
      </div>
    </section>
  );
}