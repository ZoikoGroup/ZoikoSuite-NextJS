import React from "react";

export default function CookiesAndSimilarTechnologiesSection() {
  return (
    <section className="relative w-full bg-[#F6F1E6] py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start">
        {/* Header Section */}
        <div className="max-w-3xl">
          {/* Subtitle (Eye tag size: xs) */}
          <span className="text-[#A8843A] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            COOKIES & SIMILAR TECHNOLOGIES
          </span>

          {/* Main Headline (32px for lg devices) */}
          <h1 className="text-3xl lg:text-[32px] font-bold text-[#0b1329] leading-tight tracking-tight mb-4">
            Summary here — controls live in one place
          </h1>

          {/* Description */}
          <p className="text-gray-600 font-light leading-relaxed text-[16.5px]">
            Cookies or similar technologies may be used according to the
            verified consent/inventory record — essential, preferences,
            analytics, and advertising categories only as actually configured.
            This policy does not maintain a second, conflicting cookie
            inventory.
          </p>
        </div>
      </div>
    </section>
  );
}
