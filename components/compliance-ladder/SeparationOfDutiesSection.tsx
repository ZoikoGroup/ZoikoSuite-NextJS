import React from "react";
import Image from "next/image";

interface DutyCard {
  title: string;
  description: string;
  imageSrc: string;
}

export default function SeparationOfDutiesSection() {
  const cards: DutyCard[] = [
    {
      title: "Compliance & legal",
      description:
        "Scope and interpretation require qualified approvers; no legal advice inferred.",
      imageSrc: "/comp/c7.png",
    },
    {
      title: "Operations & IT",
      description:
        "Assigned remediation and technical dependencies do not redefine legal determinations.",
      imageSrc: "/comp/c8.png",
    },
    {
      title: "Audit & executive oversight",
      description:
        "Approved high-level context, with restricted evidence protected.",
      imageSrc: "/comp/c9.png",
    },
    {
      title: "Control owner",
      description:
        "Update assigned work; no self-approval where segregation applies.",
      imageSrc: "/comp/c10.png",
    },
    {
      title: "Board reader",
      description: "Decision summary, not personnel-level evidence by default.",
      imageSrc: "/comp/c11.png",
    },
    {
      title: "System administrator",
      description:
        "Technical access configuration cannot override legal or audit decisions.",
      imageSrc: "/comp/12.png",
    },
  ];

  return (
    <section className="w-full bg-white py-20 px-6 md:px-12 lg:px-24 flex items-center justify-center">
      <div className="max-w-7xl w-full flex flex-col items-start">
        {/* Top Tag */}
        <div className="text-[11px] sm:text-xs font-semibold tracking-widest text-[#B49347] uppercase mb-3">
          SEPARATION OF DUTIES
        </div>

        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#1F2421] tracking-tight leading-[1.15] mb-12">
          Different readers. <br />
          Different responsibilities.
        </h2>

        {/* Cards Grid: 3 columns x 2 rows */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
      </div>
    </section>
  );
}
