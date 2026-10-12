import React from "react";
import Image from "next/image";

interface StepItem {
  number: string;
  title: string;
  description: string;
}

const stepsData: StepItem[] = [
  {
    number: "01 / SEND",
    title: "Share your media request",
    description:
      "Provide your question, outlet, and relevant timing or publication context.",
  },
  {
    number: "02 / REVIEW",
    title: "Route for consideration",
    description:
      "The subject and requested deadline help inform review by an appropriate authorized team.",
  },
  {
    number: "03 / FOLLOW UP",
    title: "Continue the conversation",
    description:
      "The relevant team may follow up. Statements, interviews, and media rights require approval.",
  },
];

export default function MediaEnquiriesReviewSteps() {
  return (
    <section className="bg-white py-[82px] px-6 sm:px-12 lg:px-[120px] font-sans">
      <div className="w-full max-w-[1200px] mx-auto px-0 md:px-[36px] flex flex-col gap-[36px]">
        {/* Header */}
        <div className="flex flex-col gap-[18.6px]">
          {/* Eyebrow */}
          <div className="flex items-center gap-[10px]">
            <span className="w-[23px] h-[2px] bg-[#D9B364] flex-shrink-0" />
            <span className="font-bold text-[11px] leading-[18.15px] tracking-[0.17em] uppercase text-[#13303B]">
              How enquiries are reviewed
            </span>
          </div>

          {/* H2 */}
          <h2 className="font-semibold text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.15] lg:leading-[48.3px] tracking-[-0.035em] text-[#13303B]">
            What happens after you submit
          </h2>

          {/* Lead */}
          <p className="max-w-[640px] font-normal text-[17px] leading-[28px] text-[#64757C]">
            Once a verified intake is connected, your enquiry will be reviewed and routed
            <br className="hidden sm:inline" />
            according to its subject. A response or interview cannot be guaranteed.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px] lg:gap-[45px] pt-[21.4px]">
          {stepsData.map((step, idx) => (
            <div
              key={idx}
              className="border-t-2 border-[#D9B364] pt-[21px] flex flex-col gap-[8px]"
            >
              <span className="font-normal text-[12px] leading-[19.8px] text-[#1C7A78]">
                {step.number}
              </span>

              <h3 className="font-bold text-[21px] leading-[24.15px] tracking-[-0.02em] text-[#13303B] pt-[4px]">
                {step.title}
              </h3>

              <p className="font-normal text-[14px] leading-[23.1px] text-[#64757C] pt-[4px]">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Banner Image */}
        <div className="relative w-full h-[280px] sm:h-[360px] lg:h-[421px] rounded-[10px] overflow-hidden shadow-lg mt-4">
          <Image
            src="/media-enquiries/steps-banner.png"
            alt="Media review workflow and editorial coordination"
            fill
            className="object-cover"
            sizes="(max-width: 1200px) 100vw, 1125px"
          />
        </div>
      </div>
    </section>
  );
}
