import React from "react";
import Image from "next/image";
import EyebrowHeading from "./EyebrowHeading";
import { FONT_ARCHIVO, FONT_INTER, RELATED_CARDS } from "./data";

export default function RelatedSection() {
  return (
    <section className="w-full bg-white flex justify-center px-4 md:px-8 lg:px-[170px] pt-[52px] md:pt-[69px] pb-[60px] md:pb-[90px]">
      <div className="w-full max-w-[1100px] flex flex-col gap-[17px]">
        <EyebrowHeading
          eyebrow="Related responsibilities"
          title="Connect roles without duplicating authority."
        />

        <ul className="pt-[35px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
          {RELATED_CARDS.map((card) => (
            <li
              key={card.title}
              className="flex flex-col items-center bg-white border border-[#DBE3E7] rounded-[7px] overflow-hidden"
            >
              <div className="relative w-full aspect-[351/175]">
                <Image
                  src={card.image}
                  alt={card.alt}
                  fill
                  sizes="(min-width: 768px) 353px, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col items-start gap-[15px] px-[25px] pt-[10px] pb-[25px] w-full">
                <h3
                  className="text-[20px] font-bold leading-[26px] text-[#243943]"
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
