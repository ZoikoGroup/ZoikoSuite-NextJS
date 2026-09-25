import React from "react";

export const SubprocessorListHero = () => {
  return (
    <section className="w-full flex justify-center py-[172.19px]">
      <div className="w-[1180px] max-w-[1180px] px-8 inline-flex flex-col justify-start items-start gap-2.5">
        <div className="self-stretch pb-[0.59px] flex flex-col justify-start items-start">
          <div className="self-stretch justify-center text-color-orange-44 text-xs font-bold font-['Inter'] uppercase leading-4 tracking-wider">
            SUBPROCESSOR LIST
          </div>
        </div>
        <div className="self-stretch flex flex-col justify-start items-start">
          <div className="self-stretch justify-center text-color-azure-16-2 text-3xl font-bold font-['Georgia'] leading-[51.20px]">
            Know which subprocessors support ZoikoSuite.
          </div>
        </div>
        <div className="w-[720px] max-w-[720px] pt-0.5 flex flex-col justify-start items-start">
          <div className="justify-center text-color-azure-37-2 text-sm font-normal font-['Inter'] leading-6 whitespace-nowrap">
            This registry identifies approved third parties that may process in-scope customer personal data on behalf of the<br />
            applicable Zoiko processor role. Scope, services, locations, and transfer context can vary by product,<br />
            deployment, jurisdiction, and customer agreement.
          </div>
        </div>
      </div>
    </section>
  );
};