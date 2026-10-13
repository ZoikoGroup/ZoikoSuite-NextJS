import React from "react";

export default function PrivacyCta() {
  return (
    <section className="bg-[#082834] py-20 px-6 md:px-12 font-sans">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        {/* Left Column: Heading */}
        <div>
          <h2 className="text-white text-3xl md:text-5xl font-bold tracking-tight leading-[1.15]">
            Start with the right route.
          </h2>
        </div>

        {/* Right Column: CTA Button */}
        <div className="flex-shrink-0">
          <a
            href="#topic"
            className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg bg-[#E3C065] text-[#082834] text-xs font-bold hover:bg-[#D4AF37] transition-colors duration-200 shadow-md space-x-2"
          >
            <span>Choose your topic</span>
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
