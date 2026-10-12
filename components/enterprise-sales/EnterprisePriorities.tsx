"use client";

import React from "react";
import Image from "next/image";

interface RoleCard {
  id: string;
  number: string;
  title: string;
  description: string;
  image: string;
}

const roleCards: RoleCard[] = [
  {
    id: "cio",
    number: "01",
    title: "CIO / IT",
    description: "Connect your technical priorities.",
    image: "/enterprise-sales/role-1-379dd7.png",
  },
  {
    id: "chro",
    number: "02",
    title: "CHRO / People",
    description: "Put your workforce needs in context.",
    image: "/enterprise-sales/role-2-379dd7.png",
  },
  {
    id: "coo",
    number: "03",
    title: "COO / Operations",
    description: "Start with the way your business works.",
    image: "/enterprise-sales/role-3-52e6ee.png",
  },
  {
    id: "finance",
    number: "04",
    title: "Finance / Controller",
    description: "Discuss controls and evaluation scope.",
    image: "/enterprise-sales/role-1-379dd7.png",
  },
  {
    id: "procurement",
    number: "05",
    title: "Procurement / Executive",
    description: "Shape an accountable evaluation.",
    image: "/enterprise-sales/role-2-379dd7.png",
  },
  {
    id: "other",
    number: "06",
    title: "Other business leaders",
    description: "Bring your own perspective.",
    image: "/enterprise-sales/role-3-52e6ee.png",
  },
];

interface EnterprisePrioritiesProps {
  onSelectRole?: (roleTitle: string) => void;
}

export default function EnterprisePriorities({ onSelectRole }: EnterprisePrioritiesProps) {
  const handleRoleClick = (roleTitle: string) => {
    if (onSelectRole) {
      onSelectRole(roleTitle);
    }
    const formElement = document.getElementById("inquiry");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="priorities" className="bg-white py-[82px] px-6 sm:px-12 lg:px-[120px] font-sans">
      <div className="w-full max-w-[1200px] mx-auto px-0 md:px-[36px]">
        {/* Section Head */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-[34px]">
          <div className="flex flex-col gap-[18.79px]">
            {/* Eyebrow */}
            <div className="flex items-center gap-[10px]">
              <span className="w-[23px] h-[2px] bg-[#D9B364] flex-shrink-0" />
              <span className="font-bold text-[11px] leading-[18.15px] tracking-[0.17em] uppercase text-[#13303B]">
                Built around your conversation
              </span>
            </div>

            {/* H2 */}
            <h2 className="font-semibold text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.15] lg:leading-[48.3px] tracking-[-0.035em] text-[#13303B]">
              A place to start.
              <br />
              Whatever your perspective.
            </h2>
          </div>

          {/* Lead */}
          <p className="max-w-[407px] font-normal text-[14px] leading-[23.1px] text-[#64757C]">
            Enterprise decisions bring different teams together. Choose a
            <br className="hidden sm:inline" />
            perspective to help shape your inquiry, or go straight to the
            <br className="hidden sm:inline" />
            form.
          </p>
        </div>

        {/* Roles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[22px]">
          {roleCards.map((card) => (
            <button
              key={card.id}
              type="button"
              suppressHydrationWarning
              onClick={() => handleRoleClick(card.title)}
              className="bg-white border border-[#DCE4E4] rounded-[7px] overflow-hidden flex flex-col text-left group hover:border-[#1C7A78] hover:shadow-lg transition-all duration-200 cursor-pointer"
            >
              {/* Photo Container */}
              <div className="relative w-full h-[175px] overflow-hidden">
                <Image
                  src={card.image}
                  alt="Business colleagues discussing priorities"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Gradient Overlay */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(8, 38, 50, 0) 0%, rgba(8, 38, 50, 0.27) 100%)",
                  }}
                />
                {/* Number Badge */}
                <span className="absolute left-[18px] bottom-[12px] font-normal text-[11px] leading-[18.15px] tracking-[0.1em] text-white select-none">
                  {card.number}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-[24px] pt-[23px] pb-[24px] flex flex-col gap-[12px] flex-1 justify-between w-full">
                <div className="flex flex-col gap-[8px]">
                  <h3 className="font-bold text-[21px] leading-[24.15px] tracking-[-0.02em] text-[#13303B] group-hover:text-[#1C7A78] transition-colors">
                    {card.title}
                  </h3>
                  <p className="font-normal text-[13px] leading-[21.45px] text-[#64757C]">
                    {card.description}
                  </p>
                </div>

                <div className="h-[36px] flex items-center justify-between text-[#1C7A78] pt-2 border-t border-[#DCE4E4]/40">
                  <span className="font-semibold text-[12px] leading-[19.8px]">
                    Explore your priorities
                  </span>
                  <svg
                    className="w-3 h-3 shrink-0 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.5 9.5L9.5 2.5M9.5 2.5H4.5M9.5 2.5V7.5"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
