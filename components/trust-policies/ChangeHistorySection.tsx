import React from "react";
import Image from "next/image";

export default function ChangeHistorySection() {
  return (
    <section className="w-full bg-[#F7F5F0] font-sans py-20 md:py-24 px-6 md:px-14 flex justify-center">
      <div className="w-full max-w-[1320px] md:px-12 flex flex-col gap-8">
        {/* Header */}
        <div className="flex flex-col gap-4">
          <span
            className="self-stretch text-[#A7852B] text-xs font-normal leading-4 tracking-wider"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            11 / CHANGE HISTORY
          </span>
          <h2
            className="self-stretch text-[#0D2636] text-3xl md:text-4xl font-semibold leading-10"
            style={{ fontFamily: "'Archivo', sans-serif" }}
          >
            Change history &amp; notifications
          </h2>
          <div className="w-full max-w-[660px]">
            <p
              className="text-[#3E5A6B] text-base md:text-lg font-normal leading-7"
              style={{ fontFamily: "'Archivo', sans-serif" }}
            >
              Every version links to its predecessor and successor. Notifications appear only<br />
              where a real subscription service exists — never an implied promise to notify every<br />
              visitor.
            </p>
          </div>
        </div>

        {/* Artwork */}
        <div className="self-stretch rounded-2xl overflow-hidden">
          <Image
            src="/trust-policies/change-history.png"
            alt="Change history and notifications mockup"
            width={1216}
            height={612}
            sizes="(max-width: 768px) 100vw, 1216px"
            className="w-full h-auto block"
          />
        </div>
      </div>
    </section>
  );
}