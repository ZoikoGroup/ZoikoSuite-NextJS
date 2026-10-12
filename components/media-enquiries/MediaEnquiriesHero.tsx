import React from "react";
import Image from "next/image";

export default function MediaEnquiriesHero() {
  return (
    <section
      className="relative overflow-hidden py-[82px] px-6 sm:px-12 lg:px-[120px] font-sans bg-color-azure-11"
      style={{
        backgroundColor: "var(--color-color-azure-11, #101E2B)",
      }}
    >
      <div className="w-full max-w-[1200px] mx-auto px-0 md:px-[36px]">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,1fr)] gap-[60px] items-center min-h-[470.34px]">
          {/* Left Column */}
          <div className="flex flex-col gap-[18.4px]">
            {/* Eyebrow */}
            <div className="flex items-center gap-[10px]">
              <span className="w-[23px] h-[2px] bg-[#D9B364] flex-shrink-0" />
              <span className="font-bold text-[11px] leading-[18.15px] tracking-[0.17em] uppercase text-[#D9B364]">
                Global headquarters · Media enquiries
              </span>
            </div>

            {/* H1 Heading */}
            <h1 className="font-semibold text-[38px] sm:text-[48px] lg:text-[60.5px] leading-[1.15] lg:leading-[69.55px] tracking-[-0.035em] text-[#FFFFFF]">
              Media enquiries
              <br />
              for ZoikoSuite
            </h1>

            {/* Lead Paragraph */}
            <p className="max-w-[540px] font-normal text-[15px] sm:text-[16px] leading-[26.4px] text-[#B7C9CE]">
              Send editorial questions, interview requests, media-asset inquiries, or
              <br className="hidden sm:inline" />
              requests for verified company information to the appropriate team.
            </p>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-[14px] pt-[11.6px] pb-[13.59px]">
              <a
                href="#inquiry"
                className="inline-flex items-center justify-center gap-[25px] px-[22px] py-[14px] bg-[#D9B364] text-[#082632] rounded-[5px] border border-transparent font-semibold text-[13px] leading-[21.45px] hover:bg-[#cda653] transition-colors"
              >
                <span>Submit a media enquiry</span>
                <svg
                  className="w-3.5 h-3.5 shrink-0"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.5 10.5L10.5 3.5M10.5 3.5H5.5M10.5 3.5V8.5"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>

              <a
                href="#priorities"
                className="inline-flex items-center justify-center gap-[25px] px-[22px] py-[14px] bg-transparent text-white rounded-[5px] border border-[#68818B] font-semibold text-[13px] leading-[21.45px] hover:bg-white/10 transition-colors"
              >
                <span>Choose an enquiry type</span>
                <svg
                  className="w-3.5 h-3.5 shrink-0"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 2.5V11.5M7 11.5L3.5 8M7 11.5L10.5 8"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Column: Hero Art */}
          <div className="relative w-full h-[340px] sm:h-[400px] lg:h-[450px] rounded-[10px] overflow-hidden shadow-2xl">
            <Image
              src="/media-enquiries/hero-press.png"
              alt="Conceptual glass press document with microphone, camera, and correspondence symbols"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
