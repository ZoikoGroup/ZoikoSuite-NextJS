import React from "react";

export default function MediaEnquiriesClosingCta() {
  return (
    <section className="bg-[#082632] py-[55px] px-6 sm:px-12 lg:px-[120px] font-sans border-t border-white/10">
      <div className="w-full max-w-[1200px] mx-auto px-0 md:px-[36px]">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          {/* Left Column */}
          <div className="flex flex-col gap-[11px]">
            {/* Eyebrow */}
            <div className="flex items-center gap-[10px]">
              <span className="w-[23px] h-[2px] bg-[#D9B364] flex-shrink-0" />
              <span className="font-bold text-[11px] leading-[18.15px] tracking-[0.17em] uppercase text-[#D9B364]">
                Start with the story
              </span>
            </div>

            {/* H2 */}
            <h2 className="font-semibold text-[26px] sm:text-[30px] lg:text-[34px] leading-[1.2] lg:leading-[39.1px] tracking-[-0.035em] text-[#FFFFFF] pt-[7.64px]">
              Share your editorial question.
            </h2>

            {/* Paragraph with link */}
            <p className="font-normal text-[14px] leading-[23.1px] text-[#B7C9CE]">
              For other requests,{" "}
              <a
                href="#routes"
                className="underline hover:text-white transition-colors"
              >
                find a dedicated contact.
              </a>
            </p>
          </div>

          {/* Right Column: CTA */}
          <a
            href="#inquiry"
            className="inline-flex items-center justify-center gap-[25px] px-[22px] py-[13.7px] bg-[#D9B364] text-[#082632] rounded-[5px] border border-transparent font-semibold text-[13px] leading-[21.45px] hover:bg-[#cda653] transition-colors shadow-sm flex-shrink-0"
          >
            <span>Submit a media enquiry</span>
            <span className="font-semibold text-[13px] leading-[21.45px]">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
