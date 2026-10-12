import React from "react";
import Image from "next/image";

export default function DefiningProperties() {
  return (
    <section className="bg-white py-20 px-6 md:px-12 font-sans">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Text & Buttons */}
        <div className="lg:col-span-6 space-y-6">
          <p className="text-[#A2783A] text-xs font-bold tracking-[0.2em] uppercase mb-3">
            DEFINING PROPERTIES
          </p>

          <h2 className="text-[#1E293B] text-4xl md:text-5xl font-bold tracking-tight leading-[1.12]">
            Shared principles.
            <br />
            Specialized responsibilities.
          </h2>

          <p className="text-[#64748B] text-base md:text-lg leading-relaxed max-w-xl font-normal">
            Canonical governed-operation properties remain owned by their
            approved destination; no competing taxonomy is invented here.
          </p>

          <div className="pt-4 flex flex-wrap gap-4">
            <a
              href="/audit-committee"
              className="inline-flex items-center justify-center px-5 py-3 rounded-lg border border-[#CBD5E1] bg-white text-[#1E293B] text-xs font-semibold hover:bg-[#F8FAFC] transition-colors duration-200 shadow-sm"
            >
              Audit Committee design preview &rarr;
            </a>

            <a
              href="/compliance-ladder"
              className="inline-flex items-center justify-center px-5 py-3 rounded-lg border border-[#CBD5E1] bg-white text-[#1E293B] text-xs font-semibold hover:bg-[#F8FAFC] transition-colors duration-200 shadow-sm"
            >
              Compliance Ladder design preview &rarr;
            </a>
          </div>
        </div>

        {/* Right Column: Image */}
        <div className="lg:col-span-6 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-lg h-[380px] sm:h-[450px] md:h-[500px]">
            <Image
              src="/coo/4.png"
              alt="Shared principles and specialized responsibilities diagram"
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
