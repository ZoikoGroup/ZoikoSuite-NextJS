import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function PartnersHeroSection() {
  return (
    <section className="relative w-full bg-[#081829] py-16 lg:py-20 px-6 sm:px-10 lg:px-16 overflow-hidden">
      <div className="max-w-[1180px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
        {/* Left Content */}
        <div className="lg:col-span-6 flex flex-col items-start">
          <span className="text-[#C8A24A] text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase mb-4 block">
            COMPANY &middot; PARTNERS
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-serif font-bold text-white leading-tight lg:leading-[1.18] tracking-tight mb-5 max-w-xl">
            <span className="block whitespace-normal lg:whitespace-nowrap">
              Extend governed operations
            </span>
            <span className="block whitespace-normal lg:whitespace-nowrap">
              with the right ecosystem.
            </span>
          </h1>

          <p className="text-[#C7D2E2] text-sm sm:text-base font-light leading-relaxed mb-8 max-w-xl">
            <span className="block whitespace-normal lg:whitespace-nowrap">
              ZoikoSuite works with technology, delivery, professional, channel, and
            </span>
            <span className="block whitespace-normal lg:whitespace-nowrap">
              strategic collaborators where a defined relationship can improve
            </span>
            <span className="block whitespace-normal lg:whitespace-nowrap">
              integration, implementation, regional execution, or enterprise
            </span>
            <span className="block whitespace-normal lg:whitespace-nowrap">
              outcomes — with scope and responsibility kept explicit.
            </span>
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="#partner-directory"
              className="bg-[#C8A24A] hover:bg-[#B5913D] text-[#1A1408] font-bold text-sm px-6 h-[48px] rounded-lg transition-colors shadow-xs inline-flex items-center justify-center"
            >
              Find the right partner
            </Link>
            <Link
              href="#become-a-partner"
              className="bg-transparent hover:bg-white/5 text-white border border-white/30 font-bold text-sm px-6 h-[48px] rounded-lg transition-colors inline-flex items-center justify-center"
            >
              Become a partner
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="lg:col-span-6 flex justify-center lg:justify-end w-full">
          <div className="relative w-full max-w-[480px] aspect-[480/440] rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#0A1E35]">
            <Image
              src="/partners/io.png"
              alt="ZoikoSuite partner ecosystem"
              fill
              sizes="(min-width: 1024px) 480px, 100vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
