"use client";

import React, { useState } from "react";
import { C, FONT } from "./tokens";
import { FAQ_ITEMS } from "./data";

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="w-full flex justify-center" style={{ background: C.grey95 }}>
      <div className="w-full max-w-[900px] px-8 py-24">
        <div className="flex flex-col gap-3 pb-9">
          <div className="flex items-center gap-2.5">
            <div className="w-5 h-px" style={{ background: C.orange48 }} />
            <div className="text-xs font-semibold tracking-wide" style={{ color: C.orange48, fontFamily: FONT }}>
              FAQ
            </div>
          </div>
          <h2 className="text-3xl font-bold leading-9" style={{ color: C.azure11, fontFamily: FONT }}>
            Common questions about ZoikoSuite resources
          </h2>
        </div>

        <div>
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.question} className="py-4 border-b" style={{ borderColor: C.grey95 }}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 text-left"
                >
                  <span className="text-base font-bold" style={{ color: C.azure11, fontFamily: FONT }}>
                    {item.question}
                  </span>
                  <span className="text-xl" style={{ color: C.grey58, fontFamily: FONT }}>
                    {isOpen ? "–" : "+"}
                  </span>
                </button>
                {isOpen && (
                  <p className="pt-2 text-sm leading-5" style={{ color: C.grey44, fontFamily: FONT }}>
                    {item.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
