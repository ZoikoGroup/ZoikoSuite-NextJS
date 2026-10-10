import React from "react";
import Image from "next/image";
import SectionHead from "./SectionHead";

export default function ArchitectureSection() {
  return (
    <section
      id="h-arch"
      className="scroll-mt-[100px] w-full bg-white flex justify-center px-4 md:px-8 lg:px-[120px] py-[40px] md:py-[56px]"
    >
      <div className="w-full max-w-[1200px] flex flex-col gap-[27px]">
        <SectionHead
          title="Fit the governance layer to your existing architecture."
          body="Review ownership, interfaces, and handling of exceptions before claiming integration readiness."
        />
        <div className="relative w-full aspect-[1136/568] rounded-[14px] overflow-hidden border border-[#E4E1D8]">
          <Image
            src="/cio/architecture-governance-layer.jpg"
            alt="Illustrative governance layer sitting across existing systems and data stores"
            fill
            sizes="(min-width: 1024px) 1136px, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
