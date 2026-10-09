import React from "react";
import Image from "next/image";

interface DestinationCard {
  title: string;
  description: string;
  imageSrc: string;
}

export default function RelatedDestinationsSection() {
  const cards: DestinationCard[] = [
    {
      title: "Tax Ladder",
      description:
        "Tax-specific obligations and accountability remain distinct.",
      imageSrc: "/comp/13.png",
    },
    {
      title: "Controller",
      description: "Finance controls and evidence stewardship.",
      imageSrc: "/comp/14.png",
    },
    {
      title: "Audit Committee",
      description:
        "Independent oversight and challenge, not administrative editing.",
      imageSrc: "/comp/15.png",
    },
    {
      title: "CIO / CHRO / COO / Board",
      description:
        "Role-specific context without duplicated state engines.",
      imageSrc: "/comp/16.png",
    },
    {
      title: "Defining Properties",
      description:
        "Shared governed operations principles only when approved.",
      imageSrc: "/comp/17.png",
    },
  ];

  return (
    <section className="w-full bg-white py-20 px-6 md:px-12 lg:px-24 flex items-center justify-center">
      <div className="max-w-7xl w-full flex flex-col items-start">
        {/* Top Tag */}
        <div className="text-[11px] sm:text-xs font-semibold tracking-widest text-[#B49347] uppercase mb-3">
          RELATED DESTINATIONS
        </div>

        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#1F2421] tracking-tight leading-[1.15] mb-12">
          One responsibility, one authoritative owner.
        </h2>

        {/* Cards Grid: 3 columns */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-black/10 overflow-hidden shadow-sm flex flex-col transition-all hover:shadow-md"
            >
              {/* Card Image */}
              <div className="relative w-full aspect-[16/10] bg-[#F8F7F4] overflow-hidden">
                <Image
                  src={card.imageSrc}
                  alt={card.title}
                  fill
                  className="object-cover object-center"
                />
              </div>

              {/* Card Content */}
              <div className="p-6 sm:p-8 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#1F2421] tracking-tight mb-3">
                    {card.title}
                  </h3>
                  <p className="text-[#4B5563] text-sm sm:text-base leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Button / Preview Link */}
        <div>
          <a
            href="#"
            className="inline-flex items-center text-sm sm:text-base font-semibold text-[#1F2421] hover:text-[#B49347] transition-colors group"
          >
            <span>Audit Committee design preview</span>
            <span className="ml-2 transition-transform group-hover:translate-x-1">
              &rarr;
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
