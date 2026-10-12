import React from "react";
import Image from "next/image";

interface PointItem {
  number: string;
  title: string;
  description: string;
}

const contextPoints: PointItem[] = [
  {
    number: "01",
    title: "The subject and publication",
    description: "A focused question, outlet, audience, and format.",
  },
  {
    number: "02",
    title: "The timing you have in mind",
    description: "An optional deadline and time zone, as a request preference.",
  },
  {
    number: "03",
    title: "The permissions required",
    description:
      "Interviews, statements, and asset use require appropriate approval.",
  },
];

export default function MediaEnquiriesContext() {
  return (
    <section
      className="py-[82px] px-6 sm:px-12 lg:px-[120px] font-sans bg-color-azure-11"
      style={{
        backgroundColor: "var(--color-color-azure-11, #101E2B)",
      }}
    >
      <div className="w-full max-w-[1200px] mx-auto px-0 md:px-[36px]">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,560px)_1fr] gap-[40px] lg:gap-[60px] items-center">
          {/* Left Column: Context & Points */}
          <div className="flex flex-col gap-[18.8px]">
            {/* Eyebrow */}
            <div className="flex items-center gap-[10px]">
              <span className="w-[23px] h-[2px] bg-[#D9B364] flex-shrink-0" />
              <span className="font-bold text-[11px] leading-[18.15px] tracking-[0.17em] uppercase text-[#D9B364]">
                Context makes the difference
              </span>
            </div>

            {/* H2 */}
            <h2 className="font-semibold text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.15] lg:leading-[48.3px] tracking-[-0.035em] text-[#FFFFFF]">
              Bring the question.
              <br />
              Share the editorial context.
            </h2>

            {/* Lead */}
            <p className="font-normal text-[15px] sm:text-[16px] leading-[26.4px] text-[#B7C9CE]">
              Help a reviewer understand what you are working on, the information
              <br />
              you need, and how you intend to use it.
            </p>

            {/* Points List */}
            <div className="flex flex-col gap-[18px] pt-[11.2px]">
              {contextPoints.map((pt, idx) => (
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
          <div className="relative w-full h-[360px] sm:h-[420px] lg:h-[465px] rounded-[8px] overflow-hidden shadow-2xl">
            <Image
              src="/media-enquiries/hero-press.png"
              alt="Abstract illustration of press correspondence and editorial review"
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
