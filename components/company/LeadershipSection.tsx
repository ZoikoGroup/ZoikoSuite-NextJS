import React from "react";
import Image from "next/image";

export default function LeadershipSection() {
  return (
    <section className="w-full max-w-[1200px] mx-auto px-8 py-24 flex flex-col justify-start items-start gap-9">
      {/* Header */}
      <div className="self-stretch inline-flex justify-start items-end flex-wrap content-end">
        <div className="inline-flex flex-col justify-start items-start gap-3.5">
          <div className="self-stretch inline-flex justify-start items-center gap-2.5">
            <div className="w-5 h-px bg-[#B8913F]" />
            <div className="justify-center text-[#B8913F] text-xs font-semibold font-['Inter'] tracking-wide uppercase">
              LEADERSHIP
            </div>
          </div>
          <div className="self-stretch flex flex-col justify-start items-start">
            <h2 className="justify-center text-color-azure-12-4 text-3xl font-bold font-['Inter'] leading-9">
              Leadership accountable for the platform and the organization behind it.
            </h2>
          </div>
        </div>
      </div>

      {/* Visual */}
      <Image
        src="/company/leadership.png"
        alt="Leadership accountable for the platform"
        width={1136}
        height={568}
        className="self-stretch h-[568px] object-cover rounded-2xl"
      />
    </section>
  );
}
