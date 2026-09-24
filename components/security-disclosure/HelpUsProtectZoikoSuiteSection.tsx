import React from "react";

export default function HelpUsProtectZoikoSuiteSection() {
  return (
    <section className="relative w-full bg-[#FBFAF7] py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start w-full">
        {/* Header Section */}
        <div className="w-full flex flex-col items-start">
          {/* Subtitle (Eye tag size: xs) */}
          <span className="text-[#A8843A] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            SECURITY DISCLOSURE
          </span>

          {/* Main Headline (32px for lg devices) */}
          <h1 className="text-3xl lg:text-[32px] font-bold text-[#0b1329] leading-tight tracking-tight mb-4 max-w-3xl">
            Help us protect ZoikoSuite.
          </h1>

          {/* Description Text */}
          <p className="text-gray-600 font-light leading-relaxed text-[15.5px] max-w-2xl">
            If you believe you have found a security vulnerability affecting an
            in-scope ZoikoSuite service, report it through the approved channel.
            This page explains current scope, research boundaries, disclosure
            handling, and the status of any researcher authorization or reward
            program.
          </p>
        </div>
      </div>
    </section>
  );
}
