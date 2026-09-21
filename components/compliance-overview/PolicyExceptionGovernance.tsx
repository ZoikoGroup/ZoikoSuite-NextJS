import React from "react";
import Image from "next/image";

export default function PolicyExceptionGovernance() {
  return (
    <section className="w-full bg-white py-20 px-6 lg:px-12 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Top Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-8">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-4 h-[1px] bg-[#C9B07A]"></span>
              <span className="text-[#C9B07A] text-[11px] font-semibold tracking-widest uppercase font-mono">
                POLICY, EXCEPTION AND APPROVAL GOVERNANCE
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold text-[#111827] tracking-tight leading-[1.15]">
              An exception without an expiry is just a policy change nobody approved
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-[#4B5563] text-[15px] leading-relaxed">
              Policies carry versions and effective dates. Exceptions carry owners, compensating controls and expiry dates, and reappear for decision rather than lapsing into permanent practice.
            </p>
          </div>
        </div>

        {/* Illustration Container */}
        <div className="w-full">
          <div className="relative w-full h-[360px] sm:h-[440px] lg:h-[550px] overflow-hidden">
            <Image
              src="/compliance/3.png"
              alt="Policy exception and approval governance illustration"
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