import React from "react";

export default function AISystemRegistrySection() {
  return (
    <section className="w-full bg-[#F7F5F0] py-16 px-6 md:px-12 flex flex-col items-center justify-center font-sans">
      {/* Top Header Row with Title and Description */}
      <div className="max-w-6xl w-full flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
        <div className="flex flex-col items-start">
          {/* Subtitle / Breadcrumb */}
          <div className="flex items-center gap-2 mb-3">
            <span className="w-6 h-[1px] bg-[#C29B38]" />
            <span className="text-[#C29B38] text-xs font-bold tracking-[0.2em] uppercase">
              AI SYSTEM REGISTRY
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl font-bold text-[#111827] leading-[1.2] tracking-tight max-w-xl">
            Every system, its boundary, its provider and its state
          </h2>
        </div>

        {/* Right Description Text */}
        <div className="max-w-md">
          <p className="text-[#4B5563] text-sm sm:text-base leading-relaxed">
            Registration precedes deployment. A system without an approved use
            case, an owner and a current evaluation does not run.
          </p>
        </div>
      </div>

      {/* Visual Graphic Container */}
      <div className="max-w-6xl w-full aspect-[16/9] overflow-hidden">
        <img
          src="/responsible/2.png"
          alt="Every system, its boundary, its provider and its state illustration"
          className="w-full h-full object-cover object-center"
        />
      </div>
    </section>
  );
}
