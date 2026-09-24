import React from "react";
import Image from "next/image";

export default function FeaturedNewsCard() {
  return (
    <section className="relative w-full bg-white py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start">
        {/* Subtitle (Eye tag size: xs) */}
        <span className="text-[#A8843A] text-xs font-semibold tracking-[0.2em] uppercase mb-8 block">
          FEATURED
        </span>

        {/* Card Container */}
        <div
          style={{ borderRadius: "14px" }}
          className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 border border-[#E5E0D5] bg-white shadow-lg overflow-hidden"
        >
          {/* Image Section */}
          <div className="relative w-full aspect-[16/10] lg:aspect-auto">
            <Image
              src="/news/1.png"
              alt="Laws Shaping a Changing World"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Content Section */}
          <div className="p-8 md:p-12 flex flex-col justify-center items-start">
            {/* Tag */}
            <span
              style={{ borderRadius: "20px" }}
              className="inline-flex items-center px-4 py-1.5 bg-[#EFE8D8] text-[#816832] text-xs font-semibold tracking-wide mb-6"
            >
              PRODUCT ANNOUNCEMENT
            </span>

            {/* Main Headline (32px for lg devices) */}
            <h1 className="text-3xl lg:text-[28px] font-bold text-[#0b1329] leading-tight tracking-tight mb-6">
              Laws Shaping a Changing World
            </h1>

            {/* Description (16.5px for lg devices) */}
            <p className="text-gray-600 font-light leading-relaxed text-[16.5px]">
              Stay informed on important legal updates, regulatory changes, and
              policies affecting people, businesses, and industries worldwide.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
