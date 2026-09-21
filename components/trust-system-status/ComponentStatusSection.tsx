"use client";

import React from "react";
import Image from "next/image";

export default function ComponentStatusSection() {
  return (
    <section className="w-full bg-white font-sans py-16 md:py-20 px-6 md:px-14 flex justify-center">
      <div className="w-full max-w-[1320px] px-0 md:px-12 flex flex-col gap-1.5">
        {/* Header */}
        <div className="flex flex-col gap-4">
          <div className="self-stretch pb-[0.59px] flex flex-col justify-start items-start">
            <div className="self-stretch justify-center text-[#D4943A] text-xs font-normal font-['JetBrains_Mono'] leading-4 tracking-wider">
              03 / COMPONENTS
            </div>
          </div>
          <div className="self-stretch pt-[0.70px] flex flex-col justify-start items-start">
            <h2 className="text-[#0D2636] text-3xl md:text-4xl font-semibold font-['Archivo'] leading-10">
              Component status matrix
            </h2>
          </div>
          <div className="w-full max-w-[633.16px] flex flex-col justify-start items-start">
            <p className="text-[#3E5A6B] text-base md:text-lg font-normal font-['Archivo'] leading-7">
              Buyer-readable components mapped to internal service ownership — not a dump
              <br />
              of every microservice.
            </p>
          </div>
        </div>

        {/* Image */}
        <div className="mt-11 relative w-full rounded-2xl overflow-hidden border border-[#D6DEE3]">
          <div className="relative w-full h-[350px] sm:h-[450px] md:h-[611px]">
            <Image
              src="/Trust-SystemStatus/lp.png"
              alt="Component Status Matrix"
              fill
              className="object-cover object-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
}