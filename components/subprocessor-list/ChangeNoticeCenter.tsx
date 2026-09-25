import React from "react";

export const ChangeNoticeCenter = () => {
  return (
    <section className="w-full px-8 py-12 md:px-32 bg-color-white-solid flex justify-center">
      <div className="w-full max-w-[1180px] flex flex-col justify-start items-start gap-3">
        <div className="self-stretch pb-[0.59px] flex flex-col justify-start items-start">
          <div className="self-stretch justify-center text-color-orange-44 text-xs font-bold font-['Inter'] uppercase leading-4 tracking-wider">
            CHANGE &amp; NOTICE CENTER
          </div>
        </div>
        <div className="w-full max-w-[720px] flex flex-col justify-start items-start">
          <div className="justify-center text-color-azure-16-2 text-2xl font-bold font-['Georgia'] leading-10">
            Proposed and effective changes, structured by type
          </div>
        </div>
        <div className="self-stretch pt-4 pb-1.5 grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">
          <div className="p-4 bg-color-white-solid rounded-lg outline outline-1 outline-offset-[-1px] outline-color-orange-82 flex flex-col justify-start items-start gap-2 h-full">
            <div className="self-stretch flex flex-col justify-start items-start">
              <div className="self-stretch justify-center text-color-azure-16-2 text-sm font-bold font-['Inter'] leading-5">Proposed addition</div>
            </div>
            <div className="self-stretch flex flex-col justify-start items-start">
              <div className="self-stretch justify-center text-color-azure-37-2 text-xs font-normal font-['Inter'] leading-5">
                Entity, function, reason/category, planned effective date, affected service/deployment,<br />notice- issued date.
              </div>
            </div>
          </div>
          
          <div className="p-4 bg-color-white-solid rounded-lg outline outline-1 outline-offset-[-1px] outline-color-orange-82 flex flex-col justify-start items-start gap-2 h-full">
            <div className="self-stretch flex flex-col justify-start items-start">
              <div className="self-stretch justify-center text-color-azure-16-2 text-sm font-bold font-['Inter'] leading-5">Proposed replacement</div>
            </div>
            <div className="self-stretch flex flex-col justify-start items-start">
              <div className="self-stretch justify-center text-color-azure-37-2 text-xs font-normal font-['Inter'] leading-5">
                Outgoing entity, incoming entity, rationale category, planned effective date, migration<br />overlap if publishable.
              </div>
            </div>
          </div>

          <div className="p-4 bg-color-white-solid rounded-lg outline outline-1 outline-offset-[-1px] outline-color-orange-82 flex flex-col justify-start items-start gap-1.5 h-full">
            <div className="self-stretch flex flex-col justify-start items-start">
              <div className="self-stretch justify-center text-color-azure-16-2 text-sm font-bold font-['Inter'] leading-5">Location change</div>
            </div>
            <div className="self-stretch flex flex-col justify-start items-start">
              <div className="self-stretch justify-center text-color-azure-37-2 text-xs font-normal font-['Inter'] leading-5">
                Old/new processing region or rule; transfer/residency review status; effective date.
              </div>
            </div>
          </div>

          <div className="p-4 bg-color-white-solid rounded-lg outline outline-1 outline-offset-[-1px] outline-color-orange-82 flex flex-col justify-start items-start gap-1.5 h-full">
            <div className="self-stretch flex flex-col justify-start items-start">
              <div className="self-stretch justify-center text-color-azure-16-2 text-sm font-bold font-['Inter'] leading-5">Removal / retirement</div>
            </div>
            <div className="self-stretch flex flex-col justify-start items-start">
              <div className="self-stretch justify-center text-color-azure-37-2 text-xs font-normal font-['Inter'] leading-5">
                Last effective date; successor if any; historical record remains available.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
