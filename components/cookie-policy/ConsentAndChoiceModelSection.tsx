import React from "react";

export default function ConsentAndChoiceModelSection() {
  return (
    <section className="relative w-full bg-[#F6F1E6] py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start">
        {/* Header Section */}
        <div className="mb-12">
          {/* Subtitle (Eye tag size: xs) */}
          <span className="text-[#A8843A] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            CONSENT & CHOICE MODEL
          </span>

          {/* Main Headline (32px for lg devices) */}
          <h1 className="text-3xl lg:text-[32px] font-bold text-[#0b1329] leading-tight tracking-tight">
            Accept, reject, and customize — with equal prominence
          </h1>
        </div>

        {/* Banner Card Container */}
        <div
          style={{ borderRadius: "14px" }}
          className="w-full bg-white border border-[#DCD6C8] p-8 md:p-10 shadow-sm flex flex-col gap-4"
        >
          <h3 className="text-[#0b1329] text-base font-semibold tracking-tight">
            Your privacy choices
          </h3>

          <p className="text-gray-600 font-light leading-relaxed text-[15.5px] max-w-4xl">
            We use necessary technologies to operate and protect this site. With
            your permission, we may also use optional technologies for
            preferences, analytics, and — where applicable — marketing. You can
            accept, reject, or choose by category.
          </p>
        </div>
      </div>
    </section>
  );
}
