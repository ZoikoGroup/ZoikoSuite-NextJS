import React from "react";
import Image from "next/image";

interface PointItem {
  number: string;
  title: string;
  description: string;
}

const pointsData: PointItem[] = [
  {
    number: "01",
    title: "Your business needs",
    description: "General goals, operating challenges, and stakeholders.",
  },
  {
    number: "02",
    title: "Your evaluation requirements",
    description:
      "Technology, governance, procurement, and review priorities.",
  },
  {
    number: "03",
    title: "Your intended next step",
    description:
      "The scope and context of the conversation you want to have.",
  },
];

export default function EnterpriseConsideredConversation() {
  return (
    <section
      className="py-[82px] px-6 sm:px-12 lg:px-[120px] font-sans bg-color-azure-11"
      style={{
        backgroundColor: "var(--color-color-azure-11, #101E2B)",
      }}
    >
      <div className="w-full max-w-[1200px] mx-auto px-0 md:px-[36px]">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_minmax(0,600px)] gap-[40px] lg:gap-[65px] items-center">
          {/* Left Column: Context & Points */}
          <div className="flex flex-col gap-[18.8px]">
            {/* Eyebrow */}
            <div className="flex items-center gap-[10px]">
              <span className="w-[23px] h-[2px] bg-[#D9B364] flex-shrink-0" />
              <span className="font-bold text-[11px] leading-[18.15px] tracking-[0.17em] uppercase text-[#D9B364]">
                A more considered conversation
              </span>
            </div>

            {/* H2 */}
            <h2 className="font-semibold text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.15] lg:leading-[48.3px] tracking-[-0.035em] text-[#FFFFFF]">
              Bring the context.
              <br />
              Build a clearer path forward.
            </h2>

            {/* Lead */}
            <p className="font-normal text-[17px] leading-[28px] text-[#B7C9CE]">
              Share the questions behind your evaluation, so the conversation can
              begin in the right place.
            </p>

            {/* Points List */}
            <div className="flex flex-col gap-[18px] pt-[11.2px]">
              {pointsData.map((pt, idx) => (
                <div key={idx} className="flex items-start gap-[15px]">
                  {/* Number */}
                  <span className="font-normal text-[13px] leading-[21.45px] text-[#D9B364] flex-shrink-0 w-6">
                    {pt.number}
                  </span>

                  {/* Text */}
                  <div className="flex flex-col">
                    <h3 className="font-bold text-[14px] leading-[23.1px] text-[#FFFFFF]">
                      {pt.title}
                    </h3>
                    <p className="font-normal text-[13px] leading-[21.45px] text-[#B7C9CE] mt-0.5">
                      {pt.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Illustration Art */}
          <div className="relative w-full h-[360px] sm:h-[440px] lg:h-[484px] rounded-[8px] overflow-hidden shadow-2xl">
            <Image
              src="/enterprise-sales/ecosystem-6dbdb5.png"
              alt="Illustrative connected business ecosystem"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
