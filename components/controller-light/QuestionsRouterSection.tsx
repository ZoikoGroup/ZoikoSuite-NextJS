import React from "react";
import Image from "next/image";
import EyebrowHeading from "./EyebrowHeading";
import { FONT_ARCHIVO, FONT_INTER, PRIORITY_CARDS } from "./data";

export default function QuestionsRouterSection() {
  return (
    <section className="w-full bg-white flex justify-center px-4 md:px-8 lg:px-[170px] pt-[52px] md:pt-[69px] pb-[52px] md:pb-[70px]">
      <div className="w-full max-w-[1100px] flex flex-col gap-[17px]">
        <EyebrowHeading
          eyebrow="Controller priorities"
          title="Three questions to start the review."
        />

        <ul className="pt-[18px] grid grid-cols-1 md:grid-cols-3 gap-[22px]">
          {PRIORITY_CARDS.map((card) => (
            <li
              key={card.title}
              className="flex flex-col items-center bg-white border border-[#DBE4E8] rounded-[7px] overflow-hidden"
            >
              <div className="relative w-full aspect-[350/200]">
                <Image
                  src={card.image}
                  alt={card.alt}
                  fill
                  sizes="(min-width: 768px) 352px, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col items-start gap-[15px] px-[27px] pt-[27px] pb-[26px] w-full">
                <h3
                  className="text-[20px] font-bold leading-[26px] text-[#233640]"
                  style={{ fontFamily: FONT_ARCHIVO }}
                >
                  {card.title}
                </h3>
                <p
                  className="text-[13px] font-normal leading-[21.45px] text-[#748087]"
                  style={{ fontFamily: FONT_INTER }}
                >
                  {card.body}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
