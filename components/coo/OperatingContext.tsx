import React from "react";
import Image from "next/image";

export default function OperatingContext() {
  return (
    <section className="bg-[#F6F5F1] py-16 px-6 md:px-12 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <p className="text-[#A2783A] text-xs font-bold tracking-[0.2em] uppercase mb-3">
            OPERATING CONTEXT
          </p>
          <h2 className="text-[#1E293B] text-3xl md:text-4xl font-bold tracking-tight">
            Explore the responsibilities behind the decision.
          </h2>
        </div>

        {/* Image Card Container */}
        <div className="relative w-full h-[320px] sm:h-[400px] rounded-2xl overflow-hidden shadow-sm bg-[#F1F5F9]">
          <Image
            src="/coo/2.png"
            alt="Explore the responsibilities behind the decision"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
