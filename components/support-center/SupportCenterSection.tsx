import React from "react";
import Image from "next/image";

export default function SupportCenterSection() {
  return (
    <section className="w-full bg-white py-20 px-6 md:px-12 lg:px-24 flex items-center justify-center">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Column: Content */}
        <div className="flex flex-col items-start justify-center">
          {/* Subtitle with dash */}
          <div className="flex items-center gap-2 mb-4">
            <span className="w-6 h-[1px] bg-[#C5A880]"></span>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#C5A880]">
              SUPPORT CENTER
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-[51px] font-bold text-[#111827] tracking-tight leading-[1.15] mb-6">
            Find answers. Resolve issues. Get the right support.
          </h2>

          {/* Paragraph text */}
          <p className="text-[#5A6D79] text-base leading-relaxed font-normal mb-8 max-w-xl">
            Search ZoikoSuite help resources, follow guided troubleshooting, and
            reach the appropriate support pathway when self-service is not
            enough. Available support channels and service commitments are shown
            only when they are confirmed for your context.
          </p>
        </div>

        {/* Right Column: Image */}
        <div className="w-full flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[620px] aspect-[4/4] rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
            <Image
              src="/support/1.png"
              alt="ZoikoSuite Support Center illustration featuring an assistant robot, laptop, and help resources"
              fill
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
