import React from "react";
import { C, FONT } from "./tokens";
import { DOC_TREE_IMG } from "./data";

export default function DocumentationSection() {
  return (
    <section className="w-full flex justify-center bg-white">
      <div className="w-full max-w-[1200px] px-8 py-24 flex flex-col lg:flex-row items-center gap-12">
        <div className="w-full lg:w-[435px] flex flex-col gap-3.5 shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-5 h-px" style={{ background: C.orange48 }} />
            <div className="text-xs font-semibold tracking-wide" style={{ color: C.orange48, fontFamily: FONT }}>
              DOCUMENTATION
            </div>
          </div>
          <h2 className="text-3xl font-bold leading-9" style={{ color: C.azure11, fontFamily: FONT }}>
            Authoritative product and
            <br />
            technical reference.
          </h2>
          <p className="text-sm leading-6" style={{ color: C.grey44, fontFamily: FONT }}>
            Separate from marketing/editorial content, with review dates and
            <br />
            deprecation state on every technical reference.
          </p>
        </div>

        <div className="flex-1 flex justify-center lg:justify-end">
          <img
            src={DOC_TREE_IMG}
            alt="Documentation structure visual"
            className="w-full max-w-[653px] h-[586px] object-cover rounded-xl"
            style={{ border: `1px solid ${C.grey95}` }}
          />
        </div>
      </div>
    </section>
  );
}
