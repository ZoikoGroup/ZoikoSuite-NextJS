import React from "react";
import EyebrowHeading from "./EyebrowHeading";
import IndexCard from "./IndexCard";
import { BOUNDARY_CARDS } from "./data";

export default function BoundariesSection() {
  return (
    <section className="w-full bg-[#F6F5F1] flex justify-center px-4 md:px-8 lg:px-[170px] pt-[52px] md:pt-[69px] pb-[52px] md:pb-[70px]">
      <div className="w-full max-w-[1100px] flex flex-col gap-[17px]">
        <EyebrowHeading
          eyebrow="Trust & operating boundaries"
          title="Protect the record. Preserve the judgment."
        />

        <ul className="pt-[18px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[20px]">
          {BOUNDARY_CARDS.map((card) => (
            <IndexCard
              key={card.title}
              index={card.index}
              title={card.title}
              body={card.body}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}
