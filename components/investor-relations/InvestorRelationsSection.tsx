import React from "react";
import Image from "next/image";

export default function InvestorRelationsSection() {
  return (
    <section className="relative w-full bg-gradient-to-r from-[#0A1D34] to-[#0E2843] py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Column: Text & CTA */}
        <div className="flex flex-col items-start max-w-xl">
          {/* Subtitle (Eye tag size: xs) */}
          <span className="text-[#C8A24A] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            INVESTOR RELATIONS
          </span>

          {/* Main Headline (32px for lg devices) */}
          <h1 className="text-3xl lg:text-[44px] font-bold text-white leading-tight tracking-tight mb-4">
            Understand the company behind the <br /> platform.
          </h1>

          {/* Description */}
          <p className="text-gray-300 font-light leading-relaxed text-[16.5px] mb-8">
            ZoikoSuite is a Zoiko Tech platform and a Zoiko Group company.
            Investor and capital-partner enquiries are routed to the Zoiko Group
            investor function, where current corporate, governance, and
            qualified-investor information is maintained.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#investor-centre"
              style={{ borderRadius: "8px" }}
              className="px-6 py-3 bg-[#C8A24A] text-black text-sm font-semibold tracking-wide hover:bg-[#927230] transition-colors flex items-center gap-2 shadow-sm"
            >
              Visit Zoiko Group Investor Centre ↗
            </a>
            <a
              href="#contact-investor-relations"
              style={{ borderRadius: "8px" }}
              className="px-6 py-3 bg-transparent border border-[#1B3452] text-white text-sm font-semibold tracking-wide hover:bg-white/5 transition-colors"
            >
              Contact Investor Relations
            </a>
          </div>
        </div>

        {/* Right Column: Image */}
        <div className="relative w-full lg:w-[480px] aspect-[3/3] rounded-2xl overflow-hidden shadow-2xl flex-shrink-0">
          <Image
            src="/zoiko/5.png"
            alt="Zoiko Group Investor Relations Illustration"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
