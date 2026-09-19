"use client";

import React from "react";

export default function MethodologyDataHandling() {
  return (
    <section className="w-full bg-[#F7F5F0] py-28 px-6 md:px-12 lg:px-20 font-sans text-[#111827]">
      <div className="max-w-6xl mx-auto flex flex-col items-start">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start w-full mb-12">
          {/* Text Content */}
          <div className="flex flex-col flex-1">
            {/* Eyebrow Tag */}
            <div className="flex items-center gap-2 mb-4">
              <span className="w-4 h-[1.5px] bg-[#C9B07A]"></span>
              <span className="text-[#C9B07A] text-xs font-semibold tracking-widest uppercase font-mono">
                Methodology, data handling and privacy
              </span>
            </div>
            {/* Main Heading */}
            <h2 className="text-5xl font-semibold font-['Archivo'] leading-[49.28px]">
              Where your inputs go
            </h2>
          </div>
          
          <div className="flex-1">
            <p className="text-[#4B5563] text-xl font-normal font-['Archivo'] leading-8 max-w-xl">
              Anything that accepts input must declare its data flow before you<br/>use it, not after.
            </p>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {/* Card 1: Methodology disclosure */}
          <div className="bg-white rounded-2xl border border-gray-200 p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-[#4B5563] mb-6 font-mono">
                Methodology disclosure
              </h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <span className="text-[#111827] text-sm leading-relaxed">
                    Formula or logic described in plain terms
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#111827] text-sm leading-relaxed">
                    Every assumption stated explicitly
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#111827] text-sm leading-relaxed">
                    Units and boundaries defined
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#111827] text-sm leading-relaxed">
                    Known limitations published with the tool
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#111827] text-sm leading-relaxed">
                    Calculation version shown on every result
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <span className="inline-block px-2 py-1 bg-green-50 border border-green-200 text-green-700 text-[10px] font-semibold uppercase tracking-wider font-mono rounded">
                Required for interactive
              </span>
            </div>
          </div>

          {/* Card 2: Data handling */}
          <div className="bg-white rounded-2xl border border-gray-200 p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-[#4B5563] mb-6 font-mono">
                Data handling
              </h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <span className="text-[#111827] text-sm leading-6 font-['Archivo']">
                    Whether inputs are processed in the browser or<br/>sent to a server
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#111827] text-sm leading-relaxed">
                    Whether anything is retained, and for how long
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#111827] text-sm leading-relaxed">
                    Whether results are stored or shared
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#111827] text-sm leading-relaxed">
                    What is included if you export a result
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#111827] text-sm leading-relaxed">
                    Saving and reuse only with explicit opt-in
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <span className="inline-block px-2 py-1 bg-green-50 border border-green-200 text-green-700 text-[10px] font-semibold uppercase tracking-wider font-mono rounded">
                Required before input
              </span>
            </div>
          </div>

          {/* Card 3: Not claimed anywhere */}
          <div className="bg-[#FFF8F1] rounded-2xl border border-[#FDBA74] p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-[#B45309] mb-6 font-mono">
                Not claimed anywhere
              </h3>
              <ul className="space-y-4 mb-6">
                <li className="flex items-start">
                  <span className="text-[#92400E] text-sm leading-relaxed">
                    Benchmark or industry-average figures
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#92400E] text-sm leading-relaxed">
                    ROI, savings or payback estimates
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#92400E] text-sm leading-relaxed">
                    Maturity or readiness scores
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#92400E] text-sm leading-6 font-['Archivo']">
                    Compatibility with a product or version not sourced<br/>from the registry
                  </span>
                </li>
              </ul>
              <p className="text-[#92400E] text-xs leading-relaxed mb-6 font-medium">
                None has approved evidence behind it.
              </p>
            </div>
            <div>
              <span className="inline-block px-2 py-1 bg-white border border-gray-300 text-gray-500 text-[10px] font-semibold uppercase tracking-wider font-mono rounded">
                Not published
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
