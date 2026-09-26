import React from "react";

export default function PrivacyRightsSection() {
  return (
    <section className="relative w-full bg-[#FBFAF7] py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start w-full">
        {/* Header Section */}
        <div className="w-full">
          {/* Subtitle */}
          <span className="text-[#A8843A] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            PRIVACY RIGHTS
          </span>

          {/* Main Headline */}
          <h1 className="text-3xl lg:text-[32px] font-bold text-[#0b1329] leading-tight tracking-tight mb-4">
            Exercise your privacy rights
          </h1>

          {/* Description */}
          <p className="text-gray-600 font-light leading-relaxed text-[15px] max-w-2xl">
            Submit a request to access, delete, correct, obtain, restrict,
            object to, or otherwise exercise privacy rights that may apply to
            you. Available rights depend on your location and relationship with
            ZoikoSuite.
          </p>
        </div>
      </div>
    </section>
  );
}
