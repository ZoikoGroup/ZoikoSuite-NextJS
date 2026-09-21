import React from "react";
import Image from "next/image";

export default function DataResidency() {
  return (
    <section className="w-full bg-[#08222F] py-16 px-6 md:px-12 lg:px-20 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Top Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-[1px] bg-[#C9B07A]"></span>
              <span className="text-[#C9B07A] text-xs font-semibold tracking-widest uppercase">
                PRIVACY, DATA RESIDENCY AND SOVEREIGNTY
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.15]">
              Residency is a lifecycle question, not a single region
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-[#93A2B8] text-base leading-relaxed">
              A primary storage region does not mean every lifecycle stage stays
              in that region. Each stage carries its own status.
            </p>
          </div>
        </div>

        {/* Illustration Container */}
        <div className="relative w-full overflow-hidden">
          <div className="relative w-full h-[380px] sm:h-[480px] lg:h-[650px] rounded-xl overflow-hidden">
            <Image
              src="/trust/4.png"
              alt="Residency is a lifecycle question, not a single region illustration"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
