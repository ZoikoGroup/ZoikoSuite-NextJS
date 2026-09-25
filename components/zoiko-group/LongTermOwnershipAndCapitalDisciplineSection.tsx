import React from "react";
import Image from "next/image";

export default function LongTermOwnershipAndCapitalDisciplineSection() {
  return (
    <section className="relative w-full bg-[#EFE8D8] py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start">
        {/* Header Section */}
        <div className="max-w-3xl mb-12">
          {/* Subtitle (Eye tag size: xs) */}
          <span className="text-[#A8843A] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            LONG-TERM OWNERSHIP & CAPITAL DISCIPLINE
          </span>

          {/* Main Headline (32px for lg devices) */}
          <h1 className="text-3xl lg:text-[32px] font-bold text-[#0b1329] leading-tight tracking-tight mb-4">
            Built with a long-term ownership mindset.
          </h1>

          {/* Description */}
          <p className="text-gray-600 font-light leading-relaxed text-[16.5px]">
            Zoiko Group is publicly described as privately held and as engaging
            selectively with institutional investors, strategic partners, and
            long-term capital. This context explains institutional orientation
            only.
          </p>
        </div>

        {/* Main Illustration Container */}
        <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden">
          <Image
            src="/zoiko/4.png"
            alt="Long-Term Ownership and Capital Discipline Illustration"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
