import React from "react";
import Image from "next/image";

export default function HowToReadAssuranceSection() {
  return (
    <section className="w-full bg-color-white-solid py-16 lg:py-24 flex justify-center">
      <div className="w-full max-w-7xl px-6 sm:px-8 flex flex-col justify-start items-start gap-8">
        {/* Header */}
        <div className="self-stretch flex flex-col justify-start items-start gap-3.5">
          <div className="self-stretch inline-flex justify-start items-center gap-2.5">
            <div className="w-5 h-px bg-color-orange-48" />
            <span className="text-color-orange-48 text-xs font-semibold font-['Inter'] tracking-wider uppercase">
              HOW TO READ ASSURANCE
            </span>
          </div>
          <div className="self-stretch flex flex-col justify-start items-start">
            <h2 className="text-color-azure-12-4 text-2xl sm:text-3xl lg:text-[32px] font-bold font-['Inter'] leading-tight">
              A certification, an attestation, and a readiness item are not the same thing.
            </h2>
          </div>
        </div>

        {/* 3D Illustration Graphic */}
        <div className="self-stretch w-full relative rounded-xl overflow-hidden border border-color-orange-87 shadow-xs bg-color-grey-95-12">
          <Image
            src="/certifications/card-how-to-read.png"
            alt="How to read assurance: certification vs attestation vs readiness"
            width={1136}
            height={568}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}
