"use client";

import React from "react";

export default function UtilityStateContract() {
  return (
    <section className="w-full bg-[#08222F] py-28 px-6 md:px-12 lg:px-20 font-sans text-white">
      <div className="max-w-6xl mx-auto flex flex-col items-start">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start w-full mb-12">
          {/* Text Content */}
          <div className="flex flex-col flex-1">
            {/* Eyebrow Tag */}
            <div className="flex items-center gap-2 mb-4">
              <span className="w-4 h-[1.5px] bg-[#D0AA55]"></span>
              <span className="text-[#D0AA55] text-xs font-semibold tracking-widest uppercase font-mono">
                Utility state contract
              </span>
            </div>
            {/* Main Heading */}
            <h2 className="text-5xl font-semibold font-['Archivo'] leading-[49.28px]">
              Eight states, eight public<br/>behaviours
            </h2>
          </div>
          
          <div className="flex-1">
            <p className="text-gray-300 text-xl font-normal font-['Archivo'] leading-8 max-w-xl">
              A utility is never silently implied to be current. Each state<br/>determines exactly what the public catalog does.
            </p>
          </div>
        </div>

        {/* State Image */}
        <div className="w-full bg-white rounded-xl border border-gray-700 overflow-hidden">
          <img
            src="/templates-tools/table.legendtbl.png"
            alt="Utility State Contract"
            className="w-full h-auto object-cover block"
          />
        </div>
      </div>
    </section>
  );
}
