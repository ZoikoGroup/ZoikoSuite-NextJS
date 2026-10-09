import React from "react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="w-full bg-[#09232F] py-20 px-6 md:px-12 lg:px-24 flex items-center justify-center">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Heading, Description & Action Buttons */}
        <div className="lg:col-span-6 flex flex-col items-start text-left">
          {/* Top Tag */}
          <div className="flex items-center gap-2 mb-4">
            <span className="w-6 h-[1px] bg-[#D9A74A]" />
            <span className="text-[11px] sm:text-xs font-semibold tracking-widest text-[#D9A74A] uppercase">
              GOVERNED BUSINESS OPERATIONS
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-5xl lg:text-[56px] font-bold text-white tracking-tight leading-[1.1] mb-6">
            See the defining properties.
          </h1>

          {/* Description */}
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-10 max-w-lg">
            Understand the roles, decisions, records and boundaries behind more
            accountable operations.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
            <a
              href="/book-demo"
              className="inline-flex items-center justify-center bg-[#D9A74A] hover:bg-[#C8963D] text-[#09232F] font-bold text-sm sm:text-base px-8 py-4 rounded-xl shadow-md transition-all"
            >
              Book Demo
            </a>
            <a
              href="/sign-up"
              className="inline-flex items-center justify-center bg-transparent hover:bg-white/5 text-white font-semibold text-sm sm:text-base px-8 py-4 rounded-xl border border-white/20 transition-all"
            >
              Create Account
            </a>
          </div>
        </div>

        {/* Right Column: Hero Illustration */}
        <div className="lg:col-span-6 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[580px] aspect-[4/4] rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-[#061922]">
            <Image
              src="/defining/hero.png"
              alt="Governed business operations 3D isometric interface"
              fill
              priority
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
