import React from "react";
import Image from "next/image";

export default function WhyWeExistSection() {
  return (
    <section className="w-full max-w-[1200px] mx-auto px-8 py-24 flex flex-col justify-start items-start gap-5">
      {/* Header */}
      <div className="self-stretch inline-flex justify-start items-end flex-wrap content-end">
        <div className="inline-flex flex-col justify-start items-start gap-3.5">
          <div className="self-stretch inline-flex justify-start items-center gap-2.5">
            <div className="w-5 h-px bg-[#B8913F]" />
            <div className="justify-center text-[#B8913F] text-xs font-semibold font-['Inter'] tracking-wide uppercase">
              WHY WE EXIST
            </div>
          </div>
          <div className="self-stretch flex flex-col justify-start items-start">
            <h2 className="justify-center text-color-azure-12-4 text-3xl font-bold font-['Inter'] leading-9">
              Complex operations should not lose accountability at the seams.
            </h2>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="w-full lg:w-[850px] pt-4 flex flex-col justify-start items-start">
        <p className="justify-center text-color-azure-25-3 text-base font-normal font-['Inter'] leading-6 whitespace-nowrap">
          Organizations often run finance, workforce, legal, tax, compliance, and evidence across
          <br />
          disconnected systems and teams. ZoikoSuite is being built around a different premise: policy,
          <br />
          authority, jurisdiction, and evidence should remain attached to material actions as work happens.
        </p>
      </div>

      {/* Visual */}
      <Image
        src="/company/why-we-exist.png"
        alt="Accountability across disconnected systems"
        width={1136}
        height={568}
        className="self-stretch h-[568px] object-cover rounded-2xl"
      />
    </section>
  );
}
