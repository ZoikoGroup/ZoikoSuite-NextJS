import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function ComplianceLadderHero() {
  return (
    <section className="w-full bg-[#FFFFFF] py-16 px-6 md:px-12 lg:px-24 flex items-center justify-center">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Text & CTA */}
        <div className="lg:col-span-6 flex flex-col items-start text-left">
          <div className="text-[11px] sm:text-xs font-semibold tracking-widest text-[#B49347] uppercase mb-3">
            COMPLIANCE LADDER
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#1F2421] tracking-tight leading-[1.15] mb-6">
            Turn obligations <br />
            into accountable, <br />
            reviewable work.
          </h2>

          <p className="text-[#4B5563] text-base sm:text-lg leading-relaxed mb-8 max-w-lg">
            Explore a proposed governance approach for defining scope,
            coordinating owners, reviewing controls, resolving exceptions and
            preparing decision-ready evidence.
          </p>

          <div>
            <a
              href="#context"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg bg-[#D9A74A] hover:bg-[#C8963D] text-white font-medium text-sm sm:text-base transition-colors shadow-sm group"
            >
              <span>Discuss evaluation context</span>
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        {/* Right Column: Illustration / Image */}
        <div className="lg:col-span-6 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[680px] aspect-[4/3] overflow-hidden">
            <Image
              src="/chro/1.png"
              alt="Compliance ladder 3D workflow illustration"
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
