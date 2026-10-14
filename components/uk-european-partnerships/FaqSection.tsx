import React from "react";
import Image from "next/image";
import SectionHead from "./SectionHead";
import { FAQ_ITEMS, FONT_ARCHIVO, COLORS } from "./data";

export default function FaqSection() {
  return (
    <section
      className="w-full flex justify-center px-4 sm:px-6 md:px-8 lg:px-12 py-[56px] md:py-[78px]"
      style={{ backgroundColor: COLORS.pageCream }}
    >
      <div className="w-full max-w-[1240px] grid grid-cols-1 lg:grid-cols-[665fr_399fr] gap-[40px] items-start">
        <div className="flex flex-col gap-[20px]">
          <SectionHead eyebrow="A little clarity before you send" title="Partnership questions, answered." />
          <ul className="flex flex-col gap-[10px]">
            {FAQ_ITEMS.map((item) => (
              <li
                key={item.question}
                className="bg-white border rounded-[10px]"
                style={{ borderColor: COLORS.border }}
              >
                <details className="group">
                  <summary className="flex items-center justify-between gap-3 min-h-[24px] pl-[10px] pr-[50px] pt-[25px] pb-[26px] cursor-pointer list-none">
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
                    className="pl-[10px] pr-[50px] pb-[24px] text-[13px] font-normal leading-[1.65]"
                    style={{ fontFamily: FONT_ARCHIVO, color: COLORS.bodyTeal }}
                  >
                    {item.answer}
                  </p>
                </details>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative w-full aspect-[399/598] rounded-[4px] overflow-hidden hidden lg:block">
          <Image
            src="/uk-european-partnerships/faq-hand-raised-partnerships.jpg"
            alt="Hand raised in an audience during a partnership discussion"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
