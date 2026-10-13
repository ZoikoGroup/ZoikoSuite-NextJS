import React from "react";
import Image from "next/image";
import { FAQ_ITEMS, FONT_ARCHIVO, COLORS } from "./data";

export default function FaqSection() {
  return (
    <section className="w-full bg-white flex justify-center px-4 sm:px-6 md:px-8 lg:px-12 py-[56px] md:py-[78px]">
      <div className="w-full max-w-[1240px] grid grid-cols-1 lg:grid-cols-[1fr_463px] gap-[40px] items-start">
        <div className="flex flex-col">
          <div className="flex items-center gap-[12px]">
            <span className="block h-[2px] w-[22px] shrink-0" style={{ backgroundColor: COLORS.gold }} />
            <span
              className="text-[10px] font-bold uppercase tracking-[2px]"
              style={{ fontFamily: FONT_ARCHIVO, color: COLORS.goldOnDark }}
            >
              Before you get in touch
            </span>
          </div>
          <h2
            className="text-[26px] md:text-[34px] font-bold leading-[1.18] tracking-[-1px] py-[18px]"
            style={{ fontFamily: FONT_ARCHIVO, color: COLORS.headingTeal }}
          >
            Questions, answered.
          </h2>
          <ul className="flex flex-col">
            {FAQ_ITEMS.map((item) => (
              <li
                key={item.question}
                className="border-b"
                style={{ borderColor: COLORS.border }}
              >
                <details className="group">
                  <summary className="flex items-center justify-between gap-3 min-h-[24px] pr-[50px] pt-[25px] pb-[26px] cursor-pointer list-none">
                    <span
                      className="text-[14px] font-bold"
                      style={{ fontFamily: FONT_ARCHIVO, color: COLORS.headingTeal }}
                    >
                      {item.question}
                    </span>
                    <span
                      className="shrink-0 text-[20px] leading-none transition-transform group-open:rotate-45"
                      style={{ color: COLORS.accentTeal }}
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </summary>
                  <p
                    className="pr-[50px] pb-[24px] text-[13px] font-normal leading-[1.65]"
                    style={{ fontFamily: FONT_ARCHIVO, color: COLORS.bodyTeal }}
                  >
                    {item.answer}
                  </p>
                </details>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative w-full aspect-[463/550] rounded-[4px] overflow-hidden hidden lg:block">
          <Image
            src="/european-enterprise-sales/faq-hand-raised.jpg"
            alt="Hand raised in an audience"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
