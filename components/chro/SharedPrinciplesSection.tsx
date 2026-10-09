import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function SharedPrinciplesSection() {
  return (
    <section className="w-full bg-[#FFFFFF] py-16 px-6 md:px-12 lg:px-24 flex items-center justify-center">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Text & CTAs */}
        <div className="lg:col-span-6 flex flex-col items-start text-left">
          <div className="text-[11px] sm:text-xs font-semibold tracking-widest text-[#B49347] uppercase mb-3">
            DEFINING PROPERTIES
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#1F2421] tracking-tight leading-[1.15] mb-6">
            Shared principles. <br />
            Specialized responsibilities.
          </h2>

          <p className="text-[#4B5563] text-base sm:text-lg leading-relaxed mb-8 max-w-lg">
            Canonical governed-operation properties remain owned by their
            approved destination; no competing taxonomy is invented here.
          </p>

          <div className="flex gap-4">
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-white border border-gray-300 hover:bg-gray-50 text-[#1F2421] font-medium text-sm transition-colors shadow-sm"
            >
              <span>Audit Committee design preview</span>
              <ArrowRight className="h-5 w-5 ml-2" />
            </a>

            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-white border border-gray-300 hover:bg-gray-50 text-[#1F2421] font-medium text-sm transition-colors shadow-sm"
            >
              <span>Compliance Ladder design preview</span>
              <ArrowRight className="h-5 w-5 ml-2" />
            </a>
          </div>
        </div>

        {/* Right Column: Illustration / Image */}
        <div className="lg:col-span-6 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[680px] aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-black/5 bg-white">
            <Image
              src="/chro/7.png"
              alt="Shared principles and specialized responsibilities illustration"
              fill
              priority
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
