import React from "react";
import Image from "next/image";

export default function FindYourPathSection() {
  return (
    <section className="w-[1200px] max-w-[1200px] mx-auto px-8 py-24 flex flex-col justify-start items-start gap-9">
      {/* Header */}
      <div className="self-stretch inline-flex justify-start items-end flex-wrap content-end">
        <div className="inline-flex flex-col justify-start items-start gap-3.5">
          <div className="self-stretch inline-flex justify-start items-center gap-2.5">
            <div className="w-5 h-px bg-yellow-600" />
            <div className="justify-center text-yellow-600 text-xs font-semibold font-['Inter'] tracking-wide">
              FIND YOUR PATH
            </div>
          </div>
          <div className="self-stretch flex flex-col justify-start items-start">
            <h2 className="justify-center text-color-azure-12-4 text-3xl font-bold font-['Inter'] leading-9">
              Routed by who you are, not a generic contact form.
            </h2>
          </div>
        </div>
      </div>

      {/* Visual */}
      <Image
        src="/company/find-your-path.png"
        alt="Routing by audience type"
        width={1136}
        height={535}
        className="self-stretch h-[535px] px-6 py-2 rounded-xl border border-color-orange-87"
      />
    </section>
  );
}
