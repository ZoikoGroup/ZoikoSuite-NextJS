"use client";

import React from "react";
import Image from "next/image";

interface MediaCategoryCard {
  id: string;
  badge: string;
  title: string;
  description: string;
  image: string;
}

const mediaCards: MediaCategoryCard[] = [
  {
    id: "press-questions",
    badge: "01 / MEDIA REQUEST",
    title: "Press Questions & Fact Checks",
    description:
      "Ask for factual clarification or approved statements about ZoikoSuite.",
    image: "/media-enquiries/role-1.png",
  },
  {
    id: "interviews",
    badge: "02 / MEDIA REQUEST",
    title: "Interviews & Spokesperson Requests",
    description:
      "Tell us the subject, format, intended audience, and preferred interview window.",
    image: "/media-enquiries/role-2.png",
  },
  {
    id: "news-releases",
    badge: "03 / MEDIA REQUEST",
    title: "News Releases & Company Information",
    description:
      "Request verified company facts or approved announcements for editorial use.",
    image: "/media-enquiries/role-3.png",
  },
  {
    id: "media-assets",
    badge: "04 / MEDIA REQUEST",
    title: "Images, Logos & Media Assets",
    description:
      "Ask about access to brand or company media for an editorial purpose.",
    image: "/media-enquiries/role-4.png",
  },
  {
    id: "events-speaking",
    badge: "05 / MEDIA REQUEST",
    title: "Events, Speaking & Broadcast",
    description:
      "Share event, broadcast, or panel details for consideration.",
    image: "/media-enquiries/role-5.png",
  },
  {
    id: "corrections",
    badge: "06 / MEDIA REQUEST",
    title: "Corrections & Sensitive Media Requests",
    description:
      "Raise an accuracy concern or time-sensitive press matter for review.",
    image: "/media-enquiries/role-6.png",
  },
];

interface MediaEnquiriesPrioritiesProps {
  onSelectCategory?: (categoryTitle: string) => void;
}

export default function MediaEnquiriesPriorities({
  onSelectCategory,
}: MediaEnquiriesPrioritiesProps) {
  const handleSelect = (title: string) => {
    if (onSelectCategory) {
      onSelectCategory(title);
    }
    const formEl = document.getElementById("inquiry");
    if (formEl) {
      formEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="priorities" className="bg-white py-[82px] px-6 sm:px-12 lg:px-[120px] font-sans">
      <div className="w-full max-w-[1200px] mx-auto px-0 md:px-[36px]">
        {/* Section Head */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-[34px]">
          <div className="flex flex-col gap-[18.64px]">
            {/* Eyebrow */}
            <div className="flex items-center gap-[10px]">
              <span className="w-[23px] h-[2px] bg-[#D9B364] flex-shrink-0" />
              <span className="font-bold text-[11px] leading-[18.15px] tracking-[0.17em] uppercase text-[#13303B]">
                Press & editorial contact
              </span>
            </div>

            {/* H2 */}
            <h2 className="font-semibold text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.15] lg:leading-[48.3px] tracking-[-0.035em] text-[#13303B]">
              What can we help you with?
            </h2>
          </div>

          {/* Lead */}
          <p className="max-w-[362px] font-normal text-[14px] leading-[23.1px] text-[#64757C]">
            Choose a topic to see the details we need. Journalists,
            <br className="hidden sm:inline" />
            editors, producers, researchers, and independent
            <br className="hidden sm:inline" />
            correspondents can frame a media request here.
          </p>
        </div>

        {/* Roles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[22px] pt-[17px]">
          {mediaCards.map((card) => (
            <button
              key={card.id}
              type="button"
              onClick={() => handleSelect(card.title)}
              className="bg-white border border-[#DCE4E4] rounded-[7px] overflow-hidden flex flex-col text-left group hover:border-[#1C7A78] hover:shadow-lg transition-all duration-200 cursor-pointer"
            >
              {/* Photo */}
              <div className="relative w-full h-[175px] overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Overlay */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(8, 38, 50, 0) 0%, rgba(8, 38, 50, 0.27) 100%)",
                  }}
                />
                {/* Badge */}
                <span className="absolute left-[18px] bottom-[12px] font-normal text-[11px] leading-[18.15px] tracking-[0.1em] text-white select-none">
                  {card.badge}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-[24px] flex flex-col gap-[12px] flex-1 justify-between w-full">
                <div className="flex flex-col gap-[8px]">
                  <h3 className="font-bold text-[20px] leading-[24.15px] tracking-[-0.02em] text-[#13303B] group-hover:text-[#1C7A78] transition-colors min-h-[48px]">
                    {card.title}
                  </h3>
                  <p className="font-normal text-[13px] leading-[21.45px] text-[#64757C]">
                    {card.description}
                  </p>
                </div>

                <div className="h-[36px] flex items-center justify-between text-[#1C7A78] pt-2 border-t border-[#DCE4E4]/40 mt-4">
                  <span className="font-semibold text-[12px] leading-[19.8px]">
                    Choose this request type
                  </span>
                  <span className="font-black text-[12px] leading-[19.8px] transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                    ↗
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
