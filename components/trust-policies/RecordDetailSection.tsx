import React from "react";
import Image from "next/image";

export default function RecordDetailSection() {
  return (
    <section className="w-full bg-white font-sans py-20 md:py-24 px-6 md:px-14 flex justify-center">
      <div className="w-full max-w-[1320px] md:px-12 flex flex-col gap-12">
        {/* Header */}
        <div className="flex flex-col gap-4">
          <span
            className="self-stretch text-[#A7852B] text-xs font-normal leading-4 tracking-wider"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            04 / RECORD DETAIL
          </span>
          <h2
            className="self-stretch text-[#0D2636] text-3xl md:text-4xl font-semibold leading-10"
            style={{ fontFamily: "'Archivo', sans-serif" }}
          >
            Policy record detail
          </h2>
          <div className="w-full max-w-[720px]">
            <p
              className="text-[#3E5A6B] text-base md:text-lg font-normal leading-7"
              style={{ fontFamily: "'Archivo', sans-serif" }}
            >
              An indexable detail page for public policies, or a deep-linked drawer for restricted
              <br />
              metadata. Procurement-critical fields are never hover-only.
            </p>
          </div>
        </div>

        {/* Artwork — background white, border/framing removed */}
        <div className="w-full bg-white">
          <Image
            src="/trust-policies/record-detail.png"
            alt="Policy record detail mockup"
            width={1212}
            height={599}
            sizes="(max-width: 768px) 100vw, 1212px"
            className="w-full h-auto block"
          />
        </div>
      </div>
    </section>
  );
}