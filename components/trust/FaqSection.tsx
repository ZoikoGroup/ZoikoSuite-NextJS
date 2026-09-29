"use client";

import React, { useState } from "react";
import SectionHead from "./SectionHead";
import { C, FONT } from "./tokens";
import { FAQ_ITEMS } from "./data";

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="w-full flex justify-center bg-white">
      <div className="w-full max-w-[1200px] px-8 py-24 flex flex-col gap-9">
        <SectionHead
          eyebrow="FAQ"
          title="Common questions about ZoikoSuite Trust"
        />

        <div className="flex flex-col">
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
                  <span className="text-xl leading-none" style={{ color: C.grey58, fontFamily: FONT }}>
                    {isOpen ? "–" : "+"}
                  </span>
                </button>
                {isOpen && (
                  <p className="pt-3 text-sm leading-5 whitespace-pre-wrap" style={{ color: C.grey58, fontFamily: FONT }}>
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
