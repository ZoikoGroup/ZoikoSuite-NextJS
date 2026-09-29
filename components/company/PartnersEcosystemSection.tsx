import React from "react";
import Image from "next/image";

export default function PartnersEcosystemSection() {
  return (
    <section className="self-stretch px-28 py-24 bg-color-grey-95-12 flex flex-col justify-start items-start">
      <div className="w-full max-w-[1200px] px-8 flex flex-col justify-start items-start gap-9">
        {/* Header */}
        <div className="self-stretch inline-flex justify-start items-end flex-wrap content-end">
          <div className="inline-flex flex-col justify-start items-start gap-3.5">
            <div className="self-stretch inline-flex justify-start items-center gap-2.5">
              <div className="w-5 h-px bg-yellow-600" />
              <div className="justify-center text-yellow-600 text-xs font-semibold font-['Inter'] tracking-wide">
                PARTNERS &amp; ECOSYSTEM
              </div>
            </div>
            <div className="self-stretch flex flex-col justify-start items-start">
              <h2 className="justify-center text-color-azure-12-4 text-3xl font-bold font-['Inter'] leading-9">
                Build with the right ecosystem.
              </h2>
            </div>
          </div>
        </div>

        {/* Visual */}
        <Image
          src="/company/partners-ecosystem.png"
          alt="Partners and ecosystem"
          width={1136}
          height={568}
          className="self-stretch h-[568px] px-7 py-7 rounded-xl border border-color-yellow-82"
        />
      </div>
    </section>
  );
}
