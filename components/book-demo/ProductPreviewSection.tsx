"use client";

import { useState } from "react";
import Image from "next/image";

const tabs = [
  "Dashboard",
  "AP / AR",
  "Close",
  "Multi-entity",
  "Workforce",
  "Governed AI",
];

export default function ProductPreviewSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="w-full bg-[#F6F5F0] px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="max-w-[1200px] mx-auto lg:px-8 flex flex-col items-center gap-10">
        <div className="max-w-[640px] flex flex-col gap-2.5">
          <div className="flex items-center justify-center gap-2.5">
            <span className="w-5 h-px bg-[#B8913F]" />
            <span className="text-xs font-semibold tracking-wide text-[#B8913F]">
              SELF-LED PREVIEW
            </span>
          </div>
          <h2 className="pt-1 text-center text-2xl sm:text-3xl font-bold text-[#101E2B] leading-9">
            Explore the product before you talk to anyone.
          </h2>
          <p className="text-center text-base text-[#66727C] leading-6">
            Safe sample data. No login, no bank connection, no file upload.
            Changes are not saved.
          </p>
        </div>

        <div className="w-full p-4 sm:p-6 bg-[#0C2C3D] rounded-2xl flex flex-col gap-4">
          <div role="tablist" className="flex flex-wrap gap-2">
            {tabs.map((tab, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={tab}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveIndex(index)}
                  className={`px-3.5 py-2 rounded-lg border text-xs font-semibold transition-colors cursor-pointer ${
                    isActive
                      ? "bg-[#CDA85B] border-[#CDA85B] text-[#08222F]"
                      : "bg-white/6 border-white/14 text-[#CFD9DE] hover:bg-white/10"
                  }`}
                >
                  {index + 1}. {tab}
                </button>
              );
            })}
          </div>

          <Image
            src="/book-demo/product-preview.webp"
            alt={`ZoikoSuite ${tabs[activeIndex]} preview with sample data`}
            width={1088}
            height={544}
            className="w-full h-auto rounded-xl"
          />
        </div>
      </div>
    </section>
  );
}
