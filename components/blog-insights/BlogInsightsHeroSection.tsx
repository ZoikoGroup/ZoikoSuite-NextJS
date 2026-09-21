import React from "react";

export default function BlogInsightsHeroSection() {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-12 lg:px-20 flex items-center justify-center font-sans">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Column: Content */}
        <div className="flex flex-col items-start justify-center">
          {/* Subtitle / Breadcrumb */}
          <div className="flex items-center gap-2 mb-4">
            <span className="w-6 h-[1px] bg-[#C29B38]" />
            <span className="text-[#C29B38] text-xs font-bold tracking-[0.2em] uppercase">
              BLOG & INSIGHTS
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#111827] leading-[1.2] tracking-tight mb-6">
            Ideas for operating with greater clarity, control, and
            confidence.
          </h2>

          {/* Description Paragraph */}
          <p className="text-[#4B5563] text-sm sm:text-base leading-relaxed max-w-xl">
            Explore practical perspectives, product-adjacent guidance, and
            research-informed thinking from ZoikoSuite. Published content is
            source-governed, currentness-aware, and designed to help teams make
            better decisions.
          </p>
        </div>

        {/* Right Column: Visual Graphic */}
        <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden">
          <img
            src="/doc/7.png"
            alt="Blog & Insights 3D Illustration"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
