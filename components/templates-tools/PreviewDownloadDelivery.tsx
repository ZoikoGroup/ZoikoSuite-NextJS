"use client";

import React from "react";

export default function PreviewDownloadDelivery() {
  return (
    <section className="w-full bg-[#F7F5F0] py-20 px-6 md:px-12 lg:px-20 font-sans text-[#111827]">
      <div className="max-w-6xl mx-auto flex flex-col items-start">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start w-full mb-12">
          {/* Text Content */}
          <div className="flex flex-col flex-1">
            {/* Eyebrow Tag */}
            <div className="flex items-center gap-2 mb-4">
              <span className="w-4 h-[1.5px] bg-[#C9B07A]"></span>
              <span className="text-[#C9B07A] text-xs font-semibold tracking-widest uppercase font-mono">
                Preview, download and file delivery
              </span>
            </div>
            {/* Main Heading */}
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
              Preview before retrieve, and a<br className="hidden md:block" />
              file record behind every<br className="hidden md:block" />
              download
            </h2>
          </div>
          
          <div className="flex-1">
            <p className="text-[#4B5563] text-lg md:text-xl leading-relaxed max-w-xl">
              A download link without a file record is not publishable. These
              fields must exist before the action is enabled.
            </p>
          </div>
        </div>

        {/* Content Layout */}
        <div className="flex flex-col lg:flex-row gap-12 w-full items-start">
          {/* Left Boxes */}
          <div className="flex-1 flex flex-col gap-6 w-full">
            {/* Box 1 */}
            <div className="bg-white rounded-2xl border-l-4 border-l-[#08222F] border border-gray-200 p-8">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-[#4B5563] mb-4 font-mono">
                Preview comes first
              </h3>
              <p className="text-[#111827] text-base leading-relaxed">
                Where a preview is safe to render, it appears before the download action — so a visitor can judge
                fit without retrieving a file they will not use.
              </p>
            </div>

            {/* Box 2 */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-[#4B5563] mb-4 font-mono">
                No form wall on public assets
              </h3>
              <p className="text-[#111827] text-base leading-relaxed">
                A public asset does not become gated at the moment of download. Where sign-in genuinely
                applies, that state is shown on the card <span className="font-bold">before</span> the click, and the user returns to the intended
                asset afterwards.
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1 w-full max-w-lg mx-auto">
            <img
              src="/templates-tools/div.speccard.png"
              alt="Preview and Download Interface Diagram"
              className="w-full h-auto rounded-xl border border-gray-300 shadow-sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
