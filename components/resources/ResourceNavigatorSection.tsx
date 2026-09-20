"use client";

import React from "react";

interface ResourceCard {
  number: string;
  title: string;
  description: string;
  cta: string;
}

const resourceCards: ResourceCard[] = [
  {
    number: "01",
    title: "Executive Briefs",
    description:
      "Concise decision-oriented materials for evaluation and<br />leadership review.",
    cta: "Explore Executive Briefs \u2192",
  },
  {
    number: "02",
    title: "Documentation",
    description:
      "Structured product and implementation documentation<br />published by the owning team.",
    cta: "Open Documentation \u2192",
  },
  {
    number: "03",
    title: "Knowledge Base",
    description:
      "Practical articles, how-to guidance, and problem-solving<br />resources where published.",
    cta: "Browse Knowledge Base \u2192",
  },
  {
    number: "04",
    title: "Training Academy",
    description:
      "Learning and enablement resources provided through<br />the Training Academy.",
    cta: "Visit Training Academy \u2192",
  },
  {
    number: "05",
    title: "Webinars &amp; Events",
    description: "Live or on-demand event resources where published.",
    cta: "Explore Webinars &amp; Events \u2192",
  },
  {
    number: "06",
    title: "Case Studies",
    description:
      "Customer or implementation stories that have been<br />approved for publication.",
    cta: "View Case Studies \u2192",
  },
  {
    number: "07",
    title: "Blog &amp; Insights",
    description: "Published perspectives, updates, and insights.",
    cta: "Read Blog &amp; Insights \u2192",
  },
  {
    number: "08",
    title: "Templates &amp; Tools",
    description: "Reusable resources and tools approved for public use.",
    cta: "Browse Templates &amp; Tools \u2192",
  },
  {
    number: "09",
    title: "Support Center",
    description:
      "Help and support pathways for visitors who need<br />assistance.",
    cta: "Go to Support Center \u2192",
  },
];

export default function ResourceNavigatorSection() {
  return (
    <div className="w-full px-[56px] py-[96px] top-[382px] absolute bg-[#F7F5F0] inline-flex flex-col justify-start items-start">
      <div className="w-full max-w-[528px] px-[48px] flex flex-col justify-start items-start gap-[44px]">
        <div className="self-stretch flex flex-col justify-start items-start gap-[12px]">
          <div className="self-stretch pb-[2.36px] flex flex-col justify-start items-start">
            <div className="self-stretch justify-center text-[#A07A2E] text-[11px] font-normal font-['JetBrains_Mono'] leading-4 tracking-[10px]">
              02 / NAVIGATOR
            </div>
          </div>
          <div className="self-stretch flex flex-col justify-start items-start">
            <div className="self-stretch justify-center text-[#1E293B] text-[32px] font-semibold font-['Archivo'] leading-10">
              Explore every Resource path
            </div>
          </div>
          <div className="w-[227.55px] max-w-[227.56px] pt-[1px] flex flex-col justify-start items-start">
            <div className="justify-center text-[#475569] text-base font-normal font-['Archivo'] leading-7">
              Choose the destination that best matches the kind of guidance you need.<br />
              Each destination remains the canonical owner of its content.
            </div>
          </div>
        </div>
        <div className="self-stretch h-[261.74px] inline-flex flex-col justify-start items-start gap-[16px]">
          {resourceCards.map((card) => (
            <div
              key={card.number}
              className="w-full h-[20.62px] relative bg-[#FFFFFF] rounded-[8px] border-l-[12px] border-r border-t border-b border-[#A07A2E]"
            >
              <div className="w-20 pb-[2.36px] left-[19px] top-[10.4px] absolute inline-flex flex-col justify-start items-start">
                <div className="justify-center text-[#A07A2E] text-[11px] font-normal font-['JetBrains_Mono'] leading-4 tracking-[10px]">
                  {card.number}
                </div>
              </div>
              <div className="w-20 left-[19px] top-[21.44px] absolute inline-flex flex-col justify-start items-start">
                <div className="justify-center text-[#1E293B] text-[14px] font-semibold font-['Archivo'] leading-5">
                  {card.title}
                </div>
              </div>
              <div className="w-20 pb-[2.32px] left-[19px] top-[33.95px] absolute inline-flex flex-col justify-start items-start">
                <div className="justify-center text-[#475569] text-[12px] font-normal font-['Archivo'] leading-6">
                  {card.description}
                </div>
              </div>
              <div className="w-20 min-h-[16px] pt-[6px] pb-[8px] left-[19px] top-[56.18px] absolute border-b border-[#00000000] inline-flex justify-start items-center">
                <div className="justify-center text-[#0F476A] text-[12px] font-semibold font-['Archivo'] leading-6">
                  {card.cta}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
