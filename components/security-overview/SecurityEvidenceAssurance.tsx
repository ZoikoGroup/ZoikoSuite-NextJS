import React from "react";
import Image from "next/image";

export default function SecurityEvidenceAssurance() {
  return (
    <section className="w-full bg-[#F7F5F0] py-20 px-6 lg:px-12 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Top Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-4 h-[1px] bg-[#C9B07A]"></span>
              <span className="text-[#C9B07A] text-[11px] font-semibold tracking-widest uppercase font-mono">
                SECURITY EVIDENCE AND ASSURANCE
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold text-[#111827] tracking-tight leading-[1.15]">
              Every claim mapped to its evidence and owner
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-[#4B5563] text-[15px] leading-relaxed">
              Each material claim carries a status, a scope, an evidence route,
              a content owner and a last-reviewed date.
            </p>
          </div>
        </div>

        {/* Main Image Container */}
        <div className="relative w-full">
          <div className="relative w-full h-[320px] sm:h-[420px] lg:h-[480px] overflow-hidden">
            <Image
              src="/security/5.png"
              alt="Security evidence and assurance mapping illustration"
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
