import React from "react";
import { FONT_INTER, OPERATOR_CARDS } from "./data";
import { NoticeSection } from "./NoticeSection";

export default function OperatorInformationSection() {
  return (
    <NoticeSection
      id="operator-information"
      tone="white"
      eyebrow="Corporate / website operator information"
      title={
        <>
          The procurement-grade identity block — role-labeled, not one ambiguous<br />card
        </>
      }
    >
      <div
        className="grid w-full grid-cols-1 gap-5 md:grid-cols-2"
        style={{ fontFamily: FONT_INTER }}
      >
        {OPERATOR_CARDS.map((card) => (
          <div
            key={card.label}
            className="flex flex-col gap-1 rounded-lg border border-[#DCD6C8] bg-white px-4 py-3.5"
          >
            <span className="text-xs font-bold uppercase leading-4 tracking-wider text-[#A8843A]">
              {card.label}
            </span>
            <span className="text-xs font-normal leading-5 text-[#4B5872]">
              {card.text}
            </span>
          </div>
        ))}
      </div>
    </NoticeSection>
  );
}
