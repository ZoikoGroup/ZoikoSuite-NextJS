import React from "react";
import Image from "next/image";

export default function EmptyStatePatternSection() {
  return (
    <section className="w-full bg-[#F7F5F0] font-sans py-20 md:py-24 px-6 md:px-14 flex justify-center">
      <div className="w-full max-w-[1320px] md:px-12 flex flex-col gap-12">
        {/* Header */}
        <div className="flex flex-col gap-4">
          <span
            className="self-stretch text-[#A7852B] text-xs font-normal leading-4 tracking-wider"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            03a / SCREEN STATE
          </span>
          <h2
            className="self-stretch text-[#0D2636] text-3xl md:text-4xl font-semibold leading-10"
            style={{ fontFamily: "'Archivo', sans-serif" }}
          >
            Required empty-state pattern
          </h2>
        </div>

        {/* Artwork — border and container wrapper removed */}
        <div className="w-full">
          <Image
            src="/trust-policies/empty-state.png"
            alt="Empty state pattern mockup"
            width={1216}
            height={594}
            sizes="(max-width: 768px) 100vw, 1216px"
            className="w-full h-auto block"
          />
        </div>
      </div>
    </section>
  );
}