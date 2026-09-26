import React from "react";

export default function EuPrivacyNoticeSection() {
  return (
    <section className="relative w-full bg-[#FBFAF7] py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start w-full">
        {/* Header Section */}
        <div className="w-full">
          {/* Subtitle */}
          <span className="text-[#A8843A] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            EU & EEA PRIVACY
          </span>

          {/* Main Headline */}
          <h1 className="text-3xl lg:text-[32px] font-bold text-[#0b1329] leading-tight tracking-tight mb-4">
            EU Privacy Notice
          </h1>

          {/* Description */}
          <p className="text-gray-600 font-light leading-relaxed text-[15px] max-w-2xl">
            This notice explains how the applicable Zoiko entity handles
            personal data for people in the European Union and European Economic
            Area, including why we process it, who we share it with, how long we
            keep it, international transfers, and your data protection rights.
          </p>
        </div>
      </div>
    </section>
  );
}
