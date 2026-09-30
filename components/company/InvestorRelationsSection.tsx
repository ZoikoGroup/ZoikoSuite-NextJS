import React from "react";
import Image from "next/image";

export default function InvestorRelationsSection() {
  return (
    <section className="w-full bg-color-grey-95-12 py-24 flex justify-center">
      <div className="w-full max-w-[1200px] px-8 flex flex-col justify-start items-start gap-9">
        {/* Header */}
        <div className="self-stretch inline-flex justify-start items-end flex-wrap content-end">
          <div className="inline-flex flex-col justify-start items-start gap-3.5">
            <div className="self-stretch inline-flex justify-start items-center gap-2.5">
              <div className="w-5 h-px bg-[#B8913F]" />
              <div className="justify-center text-[#B8913F] text-xs font-semibold font-['Inter'] tracking-wide uppercase">
                INVESTOR RELATIONS
              </div>
            </div>
            <div className="self-stretch flex flex-col justify-start items-start">
              <h2 className="justify-center text-color-azure-12-4 text-3xl font-bold font-['Inter'] leading-9">
                Approved entity-level disclosures only.
              </h2>
            </div>
          </div>
        </div>

        {/* Visual */}
        <Image
          src="/company/investor-relations.png"
          alt="Investor relations"
          width={1136}
          height={579}
          className="self-stretch h-[579px] object-cover rounded-2xl"
        />
      </div>
    </section>
  );
}
