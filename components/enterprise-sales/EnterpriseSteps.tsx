import React from "react";
import Image from "next/image";

interface StepItem {
  number: string;
  title: string;
  description: React.ReactNode;
  nowrap?: boolean;
}

const stepsData: StepItem[] = [
  {
    number: "01 / SHARE",
    title: "Tell us your priorities",
    description:
      "Provide your organization’s general goals and the topics you want to evaluate.",
    nowrap: true,
  },
  {
    number: "02 / ROUTE",
    title: "Find the relevant team",
    description:
      "Your request is reviewed and directed according to its scope and regional context.",
    nowrap: true,
  },
  {
    number: "03 / DISCUSS",
    title: "Move the evaluation forward",
    description: (
      <>
        Discuss requirements and next steps with the relevant team, subject to operational
        <br />
        capacity.
      </>
    ),
    nowrap: false,
  },
];

export default function EnterpriseSteps() {
  return (
    <section className="bg-white py-[82px] px-6 sm:px-12 lg:px-[120px] font-sans">
      <div className="w-full max-w-[1200px] mx-auto px-0 md:px-[36px]">
        {/* 2-Column Layout: Left Column (Header + Steps) & Right Column (Image) */}
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,580px)_1fr] gap-[40px] lg:gap-[60px] items-start">
          {/* Left Column */}
          <div className="flex flex-col">
            {/* Eyebrow */}
            <div className="flex items-center gap-[10px] mb-[18px]">
              <span className="w-[23px] h-[2px] bg-[#D4B266] flex-shrink-0" />
              <span className="font-bold text-[11px] leading-[18.15px] tracking-[0.17em] uppercase text-[#13303B]">
                What happens next
              </span>
            </div>

            {/* H2 Heading */}
            <h2 className="font-semibold text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.15] lg:leading-[48.3px] tracking-[-0.035em] text-[#13303B]">
              A clear beginning.
              <br />
              A relevant conversation.
            </h2>

            {/* Lead */}
            <p className="font-normal text-[14px] sm:text-[15px] leading-[23px] text-[#64757C] mt-[16px] mb-[32px]">
              Once a verified intake is connected, your inquiry follows this path.
            </p>

            {/* 3 Step Items */}
            <div className="flex flex-col">
              {stepsData.map((step, idx) => (
                <div
                  key={idx}
                  className="border-t-2 border-[#D4B266] border-color-orange-62 pt-[18px] pb-[22px] flex flex-col"
                >
                  {/* Number Badge */}
                  <span className="font-semibold text-[11px] leading-[18px] tracking-[0.08em] text-[#1C7A78] uppercase">
                    {step.number}
                  </span>

                  {/* Step Title */}
                  <h3 className="font-bold text-[18px] leading-[26px] tracking-[-0.015em] text-[#13303B] pt-[4px]">
                    {step.title}
                  </h3>

                  {/* Step Description */}
                  <p
                    className={`font-normal text-[13px] sm:text-[14px] leading-[22px] text-[#64757C] pt-[4px] ${
                      step.nowrap ? "sm:whitespace-nowrap" : ""
                    }`}
                  >
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Step Image (moved to the bottom by 32px) */}
          <div className="relative w-full h-[400px] sm:h-[480px] lg:h-[513px] mt-[32px] flex items-center justify-center lg:justify-end">
            <Image
              src="/enterprise-sales/step-image.png"
              alt="Connected enterprise processes and evaluation path"
              fill
              priority
              className="object-contain object-top lg:object-right-top"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
