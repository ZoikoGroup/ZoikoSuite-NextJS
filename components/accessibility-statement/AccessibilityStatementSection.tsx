import React from "react";

export default function AccessibilityStatementSection() {
  return (
    <section className="relative w-full bg-[#FBFAF7] py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start w-full">
        {/* Header Section */}
        <div className="w-full flex flex-col items-start">
          {/* Subtitle (Eye tag size: xs) */}
          <span className="text-[#A8843A] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            ACCESSIBILITY STATEMENT
          </span>

          {/* Main Headline (32px for lg devices) */}
          <h1 className="text-3xl lg:text-[32px] font-bold text-[#0b1329] leading-tight tracking-tight mb-4 max-w-3xl">
            Accessibility is part of how ZoikoSuite is designed, tested, and
            supported.
          </h1>

          {/* Description Text */}
          <p className="text-gray-600 font-light leading-relaxed text-[15.5px] max-w-2xl">
            This statement explains the accessibility scope we assess, the
            standards we use, known limitations, available alternatives, and how
            to contact us if you encounter a barrier.
          </p>
        </div>
      </div>
    </section>
  );
}
