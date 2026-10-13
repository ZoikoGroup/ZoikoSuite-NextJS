import React from "react";
import Image from "next/image";
import { REQUIREMENT_CARDS, FONT_ARCHIVO, COLORS } from "./data";

export default function ConversationSection() {
  return (
    <section
      className="w-full flex justify-center px-4 sm:px-6 md:px-8 lg:px-12 py-[56px] md:py-[78px]"
      style={{ backgroundColor: COLORS.darkBg }}
    >
      <div className="w-full max-w-[1240px] grid grid-cols-1 lg:grid-cols-[1fr_505px] gap-[40px] items-start">
        <div className="flex flex-col gap-[34px]">
          <div className="flex flex-col gap-[17px]">
            <div className="flex items-center gap-[12px]">
              <span className="block h-[2px] w-[22px] shrink-0" style={{ backgroundColor: COLORS.gold }} />
              <span
                className="text-[10px] font-bold uppercase tracking-[2px]"
                style={{ fontFamily: FONT_ARCHIVO, color: COLORS.gold }}
              >
                Make the conversation useful
              </span>
            </div>
            <h2
              className="text-[26px] md:text-[34px] font-bold leading-[1.18] tracking-[-1px] text-white"
              style={{ fontFamily: FONT_ARCHIVO }}
            >
              Bring the questions. Start with context.
            </h2>
            <p
              className="text-[16px] font-normal leading-[1.65]"
              style={{ fontFamily: FONT_ARCHIVO, color: COLORS.heroBody }}
            >
              Outline the requirements that matter to your
              <br />
              evaluation without sharing sensitive records.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-[25px] gap-y-[25px]">
            {REQUIREMENT_CARDS.map((card) => (
              <div
                key={card.title}
                className="flex flex-col gap-[12px] pt-[19px] pb-[13px] border-t"
                style={{ borderColor: COLORS.goldBorder }}
              >
                <h3
                  className="text-[17px] font-bold text-white"
                  style={{ fontFamily: FONT_ARCHIVO }}
                >
                  {card.title}
                </h3>
                <p
                  className="text-[13px] font-normal leading-[1.65]"
                  style={{ fontFamily: FONT_ARCHIVO, color: COLORS.heroBody }}
                >
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative w-full aspect-[505/497] rounded-[10px] overflow-hidden hidden lg:block">
          <Image
            src="/european-enterprise-sales/conversation-context-illustration.jpg"
            alt="Illustration representing enterprise sales teams discussing context"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
