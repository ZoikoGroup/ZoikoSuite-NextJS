"use client";

import React from "react";

export default function UtilityCardAnatomy() {
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
                Utility card anatomy
              </span>
            </div>
            {/* Main Heading */}
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
              Nine fields, every one sourced
            </h2>
          </div>
          
          <div className="flex-1">
            <p className="text-[#4B5563] text-lg md:text-xl leading-relaxed max-w-xl">
              This is the card contract a published utility will render against.
              Every value below is a marked specimen field, not a product
              claim.
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
                Card consistency rule
              </h3>
              <p className="text-[#111827] text-base leading-relaxed">
                The card action describes the <span className="font-bold">utility action first</span>. Marketing CTAs are not mixed into every card
                — commercial conversion belongs at detail or result level, where relevance has actually been
                established.
              </p>
            </div>

            {/* Box 2 */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-[#4B5563] mb-4 font-mono">
                Access state is visible before the click
              </h3>
              <p className="text-[#111827] text-base leading-relaxed mb-4">
                A visitor sees whether an asset is public, needs sign-in, or is unavailable <span className="font-bold">before</span> committing to
                the action. No surprise gating after a click.
              </p>
              <p className="text-[#4B5563] text-sm leading-relaxed">
                Entitlement states are sourced from the approved plan authority. No tier names are invented.
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1 w-full max-w-lg mx-auto">
            <img
              src="/templates-tools/div.speccard-1.png"
              alt="Utility Card Anatomy Diagram"
              className="w-full h-auto rounded-xl border border-gray-300 shadow-sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
