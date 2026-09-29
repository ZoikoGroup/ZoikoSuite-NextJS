import React from "react";
import Image from "next/image";

export default function HowWeOperateSection() {
  return (
    <section className="self-stretch px-28 py-24 bg-stone-100 flex flex-col justify-start items-start">
      <div className="w-full max-w-[1200px] px-8 flex flex-col justify-start items-start gap-9">
        {/* Header */}
        <div className="self-stretch inline-flex justify-start items-end flex-wrap content-end">
          <div className="inline-flex flex-col justify-start items-start gap-3.5">
            <div className="self-stretch inline-flex justify-start items-center gap-2.5">
              <div className="w-5 h-px bg-yellow-600" />
              <div className="justify-center text-yellow-600 text-xs font-semibold font-['Inter'] tracking-wide">
                HOW WE OPERATE
              </div>
            </div>
            <div className="self-stretch flex flex-col justify-start items-start">
              <h2 className="justify-center text-color-azure-12-4 text-3xl font-bold font-['Inter'] leading-9">
                Operating principles, with a proof route for each.
              </h2>
            </div>
          </div>
        </div>

        {/* Visual */}
        <Image
          src="/company/how-we-operate.png"
          alt="Operating principles with proof routes"
          width={1136}
          height={554}
          className="self-stretch h-[554px] px-6 py-2 rounded-xl border border-color-orange-87"
        />
      </div>
    </section>
  );
}
