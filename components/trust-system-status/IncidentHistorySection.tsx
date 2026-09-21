"use client";

import React from "react";
import Image from "next/image";

export default function IncidentHistorySection() {
  return (
    <section className="w-full bg-[#F2F0EB] font-sans py-20 md:py-24 px-6 md:px-14 flex justify-center">
      <div className="w-full max-w-[1320px] mx-auto px-0 md:px-12 flex flex-col gap-12">
        {/* Header */}
        <div className="flex flex-col gap-4">
          <div className="self-stretch pb-[0.59px] flex flex-col justify-start items-start">
            <div className="self-stretch justify-center text-[#D4943A] text-xs font-normal font-['JetBrains_Mono'] leading-4 tracking-wider">
              08 / HISTORY
            </div>
          </div>
          <div className="self-stretch pt-[0.70px] flex flex-col justify-start items-start">
            <h2 className="self-stretch justify-center text-[#0D2636] text-3xl md:text-4xl font-semibold font-['Archivo'] leading-10">
              Incident history
            </h2>
          </div>
          <div className="w-full max-w-[633.16px] flex flex-col justify-start items-start">
            <p className="justify-center text-[#3E5A6B] text-base md:text-lg font-normal font-['Archivo'] leading-7">
              A durable trust record — not curated to show only favorable
              outcomes.
            </p>
          </div>
        </div>

        {/* Image */}
        <div
          className="relative w-full rounded-2xl overflow-hidden border border-[#D6DEE3]"
        >
          <div className="relative w-full h-[350px] sm:h-[450px] md:h-[598px]">
            <Image
              src="/Trust-SystemStatus/ii.png"
              alt="Incident History Table"
              fill
              className="object-cover object-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
}