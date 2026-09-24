import React from "react";
import Image from "next/image";

export default function RiskAndForwardLookingInformationSection() {
  return (
    <section className="relative w-full bg-[#0A1D34] py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start">
        {/* Header Section */}
        <div className="max-w-3xl mb-12">
          {/* Subtitle (Eye tag size: xs) */}
          <span className="text-[#A8843A] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            RISK & FORWARD-LOOKING INFORMATION
          </span>

          {/* Main Headline (32px for lg devices) */}
          <h1 className="text-3xl lg:text-[32px] font-bold text-white leading-tight tracking-tight">
            Boundaries around projections and strategic statements
          </h1>
        </div>

        {/* Main Illustration Container */}
        <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl mb-8">
          <Image
            src="/zoiko/7.png" // Replace with your actual image path if different
            alt="Boundaries around projections and strategic statements illustration"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Bottom Disclaimer Banner */}
        <div className="w-full bg-[#FFFFFF0D] border border-[#FFFFFF24] border-l-4 border-l-[#C8A24A] p-6 text-gray-300 font-light text-[14.5px] leading-relaxed relative flex items-center">
          <p className="pl-3">
            This page is for corporate information and relationship routing. It
            does not constitute an offer to sell, a solicitation to buy,
            investment advice, or a representation that any investment
            opportunity is currently available. Final wording is Legal-approved
            for publication jurisdictions.
          </p>
        </div>
      </div>
    </section>
  );
}
