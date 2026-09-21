import React from "react";
import Image from "next/image";

export default function PolicyLifecycleSection() {
  return (
    <section className="w-full bg-[#F7F5F0] font-sans py-20 md:py-24 px-6 md:px-14 flex justify-center">
      <div className="w-full max-w-[1320px] md:px-12 flex flex-col gap-12">
        {/* Header */}
        <div className="flex flex-col gap-4">
          <span
            className="self-stretch text-[#A7852B] text-xs font-normal leading-4 tracking-wider"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            05 / LIFECYCLE
          </span>
          <h2
            className="self-stretch text-[#0D2636] text-3xl md:text-4xl font-semibold leading-10"
            style={{ fontFamily: "'Archivo', sans-serif" }}
          >
            Policy lifecycle
          </h2>
          <div className="w-full max-w-[720px]">
            <p
              className="text-[#3E5A6B] text-base md:text-lg font-normal leading-7"
              style={{ fontFamily: "'Archivo', sans-serif" }}
            >
              A controlled state machine. Draft and internal review are
              described conceptually —<br />
              unpublished draft records never leak through the public site.
            </p>
          </div>
        </div>

        {/* Artwork — background Spring Wood, border/framing removed */}
        <div className="w-full bg-[#F7F5F0]">
          <Image
            src="/trust-policies/lifecycle.png"
            alt="Policy lifecycle state machine mockup"
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