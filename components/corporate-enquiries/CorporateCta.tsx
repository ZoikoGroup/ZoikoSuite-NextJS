import React from "react";
import { ArrowUpRight } from "lucide-react";

export default function CorporateCta() {
  return (
    <section className="bg-[#082834] py-20 px-6 md:px-12 font-sans">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        {/* Left Column: Heading & Subtitle */}
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <span className="w-4 h-[2px] bg-[#C9A34C]" />
            <p className="text-[#C9A34C] text-xs font-bold tracking-[0.2em] uppercase">
              A CONSIDERED FIRST STEP
            </p>
          </div>

          <h2 className="text-white text-3xl md:text-5xl font-bold tracking-tight leading-[1.15]">
            Start with your corporate question.
          </h2>

          <p className="text-[#B7C9CE] text-sm md:text-base font-normal">
            Not a corporate question?{" "}
            <a
              href="#contact"
              className="text-[#B7C9CE] underline underline-offset-4 hover:text-[#C9A34C] transition-colors duration-200"
            >
              Choose a dedicated contact.
            </a>
          </p>
        </div>

        {/* Right Column: CTA Button */}
        <div className="flex-shrink-0">
          <a
            href="#enquiry"
            className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg bg-[#D9B364] text-[#082834] text-sm font-bold hover:bg-[#C5A028] transition-colors duration-200 space-x-2 shadow-md"
          >
            <span>Send corporate enquiry</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
