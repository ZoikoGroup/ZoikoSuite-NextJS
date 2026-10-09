import React from "react";
import EyebrowHeading from "./EyebrowHeading";
import IndexCard from "./IndexCard";
import { ROLE_CARDS } from "./data";

export default function RolesSection() {
  return (
    <section className="w-full bg-[#F6F5F1] flex justify-center px-4 md:px-8 lg:px-[170px] pt-[52px] md:pt-[69px] pb-[60px] md:pb-[90px]">
      <div className="w-full max-w-[1100px] flex flex-col gap-[17px]">
        <EyebrowHeading
          eyebrow="Separation of duties"
          title="Every role has a boundary."
        />

        <ul className="pt-[18px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
          {ROLE_CARDS.map((card) => (
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
