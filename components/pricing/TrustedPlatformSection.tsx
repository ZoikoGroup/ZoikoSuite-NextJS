import React from "react";
import Image from "next/image";

export default function TrustedPlatformSection() {
  return (
    <section className="relative w-full bg-[#F6F5F0] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        {/* Top Tag / Subheading */}
        <div className="flex items-center justify-center space-x-2 mb-4">
          <span className="h-[1px] w-6 bg-[#dfb36a]" />
          <span className="text-xs font-bold tracking-widest text-[#dfb36a] uppercase">
            EVERY PLAN
          </span>
          <span className="h-[1px] w-6 bg-[#dfb36a]" />
        </div>

        {/* Main Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0f172a] mb-4">
          Built on the same trusted platform foundation.
        </h2>

        {/* Image Container */}
        <div className="relative w-full max-w-6xl mx-auto overflow-hidden">
          <div className="relative w-full aspect-[16/9] min-h-[350px] sm:min-h-[550px]">
            <Image
              src="/pricing/1.png"
              alt="Built on the same trusted platform foundation"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
