import React from "react";
import Image from "next/image";

export default function PolicyRegistrySection() {
  return (
    <section
      id="registry"
      className="w-full bg-white font-sans py-20 md:py-24 px-6 md:px-14 flex justify-center"
    >
      <div className="w-full max-w-[1320px] md:px-12 flex flex-col gap-1.5">
        {/* Header */}
        <div className="flex flex-col gap-4">
          <span
            className="self-stretch text-[#A7852B] text-xs font-normal leading-4 tracking-wider"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            03 / REGISTRY
          </span>
          <h2
            className="self-stretch text-[#0D2636] text-3xl md:text-4xl font-semibold leading-10"
            style={{ fontFamily: "'Archivo', sans-serif" }}
          >
            Public policy registry
          </h2>
          <div className="w-full max-w-[660px]">
            <p
              className="text-[#3E5A6B] text-base md:text-lg font-normal leading-7"
              style={{ fontFamily: "'Archivo', sans-serif" }}
            >
              The canonical public/restricted-disclosure index. If no record has been approved for publication, reviewers see an intentional empty state — never fictional content.
            </p>
          </div>
        </div>

        {/* Framed registry artwork */}
        <div className="self-stretch rounded-2xl border border-[#D6DEE3] overflow-hidden">
          <Image
            src="/trust-policies/registry.png"
            alt="Public policy registry table mockup"
            width={1212}
            height={612}
            sizes="(max-width: 768px) 100vw, 1212px"
            className="w-full h-auto block"
          />
        </div>
      </div>
    </section>
  );
}