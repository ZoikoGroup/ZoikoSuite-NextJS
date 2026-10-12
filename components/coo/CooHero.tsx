import React from "react";
import Image from "next/image";

export default function CooHero() {
  return (
    <section className="bg-white py-20 px-6 md:px-12 lg:px-20 font-sans">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Text & CTA */}
        <div className="lg:col-span-6 space-y-6">
          <p className="text-[#A2783A] text-xs font-bold tracking-[0.2em] uppercase mb-3">
            COO
          </p>

          <h1 className="text-[#1E293B] text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.12]">
            Bring operating decisions, ownership and evidence into focus.
          </h1>

          <p className="text-[#64748B] text-base md:text-lg leading-relaxed max-w-xl font-normal">
            Explore a governed approach to coordinating work, clarifying
            responsibilities, handling exceptions and reviewing operational
            outcomes across functions. Available capabilities and integrations
            are confirmed during evaluation.
          </p>

          <div className="pt-2">
            <a
              href="#context"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg bg-[#D0A644] text-[#FFFFFF] text-sm font-bold hover:bg-[#C5A028] transition-colors duration-200 shadow-sm"
            >
              Discuss evaluation context
            </a>
          </div>
        </div>

        {/* Right Column: Image */}
        <div className="lg:col-span-6 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-lg h-[380px] sm:h-[450px] md:h-[550px]">
            <Image
              src="/coo/1.png"
              alt="COO Operating Decisions Architecture"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
