import React from "react";
import Image from "next/image";

export default function ArticleDetailStructuralTemplate() {
  return (
    <section className="relative w-full bg-white py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start">
        {/* Header Section */}
        <div className="max-w-3xl mb-12">
          {/* Subtitle (Eye tag size: xs) */}
          <span className="text-[#A8843A] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            ARTICLE DETAIL — STRUCTURAL TEMPLATE
          </span>

          {/* Main Headline (32px for lg devices) */}
          <h1 className="text-3xl lg:text-[32px] font-bold text-[#0b1329] leading-tight tracking-tight">
            What every published article must show
          </h1>
        </div>

        {/* Card Container */}
        <div
          className="w-full overflow-hidden"
        >
          {/* Image Container */}
          <div className="relative w-full aspect-[17/9] overflow-hidden">
            <Image
              src="/news/2.png"
              alt="What every published article must show"
              fill
              className="object-cover rounded-xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
