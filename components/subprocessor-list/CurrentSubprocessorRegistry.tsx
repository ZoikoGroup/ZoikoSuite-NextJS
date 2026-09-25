import React from "react";
import { ArrowRight } from "lucide-react";
export const CurrentSubprocessorRegistry = () => {
  return (
    <section className="w-full px-8 py-12 md:px-32 bg-color-white-solid flex justify-center">
      <div className="w-full max-w-[1180px] flex flex-col justify-start items-start gap-3">
        <div className="self-stretch pb-[0.59px] flex flex-col justify-start items-start">
          <div className="self-stretch justify-center text-color-orange-44 text-xs font-bold font-['Inter'] uppercase leading-4 tracking-wider">
            CURRENT SUBPROCESSOR REGISTRY
          </div>
        </div>
        <div className="w-full max-w-[720px] flex flex-col justify-start items-start">
          <div className="justify-center text-color-azure-16-2 text-2xl font-bold font-['Georgia'] leading-10">
            Procurement-grade table — not a logo gallery
          </div>
        </div>
        
        <div className="self-stretch pt-4 inline-flex justify-start items-start gap-2.5 flex-wrap content-start">
          <div className="px-3.5 py-1.5 bg-color-white-solid rounded-md outline outline-1 outline-offset-[-1px] outline-color-orange-82 inline-flex flex-col justify-start items-start">
            <div className="justify-center text-color-azure-37-2 text-xs font-normal font-['Inter'] leading-5">Search legal name, function, region</div>
          </div>
          <div className="px-3.5 py-1.5 bg-color-white-solid rounded-md outline outline-1 outline-offset-[-1px] outline-color-orange-82 inline-flex flex-col justify-start items-start">
            <div className="justify-center text-color-azure-37-2 text-xs font-normal font-['Inter'] leading-5">Service family ▾</div>
          </div>
          <div className="px-3.5 py-1.5 bg-color-white-solid rounded-md outline outline-1 outline-offset-[-1px] outline-color-orange-82 inline-flex flex-col justify-start items-start">
            <div className="justify-center text-color-azure-37-2 text-xs font-normal font-['Inter'] leading-5">Deployment ▾</div>
          </div>
          <div className="px-3.5 py-1.5 bg-color-white-solid rounded-md outline outline-1 outline-offset-[-1px] outline-color-orange-82 inline-flex flex-col justify-start items-start">
            <div className="justify-center text-color-azure-37-2 text-xs font-normal font-['Inter'] leading-5">Processing region ▾</div>
          </div>
          <div className="px-3.5 py-1.5 bg-color-white-solid rounded-md outline outline-1 outline-offset-[-1px] outline-color-orange-82 inline-flex flex-col justify-start items-start">
            <div className="justify-center text-color-azure-37-2 text-xs font-normal font-['Inter'] leading-5">Status ▾</div>
          </div>
          <div className="px-3.5 py-1.5 bg-color-white-solid rounded-md outline outline-1 outline-offset-[-1px] outline-color-orange-82 inline-flex flex-col justify-start items-start">
            <div className="justify-center text-color-azure-37-2 text-xs font-normal font-['Inter'] leading-5">Transfer status ▾</div>
          </div>
        </div>

        <div className="self-stretch w-full mt-2 rounded-lg outline outline-1 outline-offset-[-1px] outline-color-orange-82 overflow-hidden">
          <div className="w-full flex flex-col">
            <div className="w-full bg-[#F8F6F1] inline-flex justify-start items-start">
              <div className="w-[16%] px-3 py-2.5 border-r border-color-orange-82 inline-flex flex-col justify-start items-start">
                <div className="justify-center text-color-azure-37-2 text-xs font-bold font-['Inter'] uppercase leading-5 tracking-wide">Subprocessor</div>
              </div>
              <div className="w-[27%] px-3 py-2.5 border-r border-color-orange-82 inline-flex flex-col justify-start items-start">
                <div className="justify-center text-color-azure-37-2 text-xs font-bold font-['Inter'] uppercase leading-5 tracking-wide">Service / function</div>
              </div>
              <div className="w-[19%] px-3 py-2.5 border-r border-color-orange-82 inline-flex flex-col justify-start items-start">
                <div className="justify-center text-color-azure-37-2 text-xs font-bold font-['Inter'] uppercase leading-5 tracking-wide">ZoikoSuite scope</div>
              </div>
              <div className="w-[17%] px-3 py-2.5 border-r border-color-orange-82 inline-flex flex-col justify-start items-start">
                <div className="justify-center text-color-azure-37-2 text-xs font-bold font-['Inter'] uppercase leading-5 tracking-wide">Processing locations</div>
              </div>
              <div className="w-[14%] px-3 py-2.5 border-r border-color-orange-82 inline-flex flex-col justify-start items-start">
                <div className="justify-center text-color-azure-37-2 text-xs font-bold font-['Inter'] uppercase leading-5 tracking-wide">Transfer status</div>
              </div>
              <div className="w-[7%] px-3 py-2.5 inline-flex flex-col justify-start items-start">
                <div className="justify-center text-color-azure-37-2 text-xs font-bold font-['Inter'] uppercase leading-5 tracking-wide">Details</div>
              </div>
            </div>

            <div className="w-full border-t border-color-orange-82 inline-flex justify-start items-stretch">
              <div className="w-[16%] px-3 pt-2.5 pb-7 border-r border-color-orange-82 inline-flex flex-col justify-start items-start">
                <div className="justify-center text-color-azure-16-2 text-xs font-normal font-['Inter'] leading-5">[ Verified legal entity ]</div>
              </div>
              <div className="w-[27%] px-3 py-2.5 border-r border-color-orange-82 inline-flex flex-col justify-start items-start">
                <div className="justify-center text-color-azure-16-2 text-xs font-normal font-['Inter'] leading-5">[ Hosting / identity / support / observability ]</div>
              </div>
              <div className="w-[19%] px-3 pt-2.5 pb-7 border-r border-color-orange-82 inline-flex flex-col justify-start items-start">
                <div className="justify-center text-color-azure-16-2 text-xs font-normal font-['Inter'] leading-5">[ Service family / deployment ]</div>
              </div>
              <div className="w-[17%] px-3 pt-2.5 pb-7 border-r border-color-orange-82 inline-flex flex-col justify-start items-start">
                <div className="justify-center text-color-azure-16-2 text-xs font-normal font-['Inter'] leading-5">[ Country/region model ]</div>
              </div>
              <div className="w-[14%] px-3 pt-2.5 pb-6 border-r border-color-orange-82 inline-flex flex-col justify-start items-start">
                <div className="px-2 py-[3px] bg-[#F8F6F1] rounded-[99px] outline outline-1 outline-offset-[-1px] outline-color-orange-82 inline-flex justify-start items-start">
                  <div className="justify-center text-color-azure-37-2 text-[10px] font-extrabold font-['Inter'] leading-4 tracking-wide">[ status ]</div>
                </div>
              </div>
              <div className="w-[7%] px-3 pt-2.5 pb-7 inline-flex flex-col justify-start items-center">
                <div className="justify-center text-color-azure-16-2 text-xs font-normal font-['Inter'] leading-5 flex items-center">View <ArrowRight className="w-3 h-3 ml-0.5" /></div>
              </div>
            </div>

            <div className="w-full border-t border-color-orange-82 inline-flex justify-start items-stretch">
              <div className="w-[16%] px-3 pt-2.5 pb-4 border-r border-color-orange-82 inline-flex flex-col justify-start items-start">
                <div className="justify-center text-color-azure-16-2 text-xs font-normal font-['Inter'] leading-5">[ Verified legal entity ]</div>
              </div>
              <div className="w-[27%] px-3 pt-2.5 pb-4 border-r border-color-orange-82 inline-flex flex-col justify-start items-start">
                <div className="justify-center text-color-azure-16-2 text-xs font-normal font-['Inter'] leading-5">[ Function ]</div>
              </div>
              <div className="w-[19%] px-3 pt-2.5 pb-4 border-r border-color-orange-82 inline-flex flex-col justify-start items-start">
                <div className="justify-center text-color-azure-16-2 text-xs font-normal font-['Inter'] leading-5">[ Scope ]</div>
              </div>
              <div className="w-[17%] px-3 pt-2.5 pb-4 border-r border-color-orange-82 inline-flex flex-col justify-start items-start">
                <div className="justify-center text-color-azure-16-2 text-xs font-normal font-['Inter'] leading-5">[ Region ]</div>
              </div>
              <div className="w-[14%] px-3 py-2.5 border-r border-color-orange-82 inline-flex flex-col justify-start items-start">
                <div className="px-2 py-[3px] bg-[#F8F6F1] rounded-[99px] outline outline-1 outline-offset-[-1px] outline-color-orange-82 inline-flex justify-start items-start">
                  <div className="justify-center text-color-azure-37-2 text-[10px] font-extrabold font-['Inter'] leading-4 tracking-wide">[ status ]</div>
                </div>
              </div>
              <div className="w-[7%] px-3 pt-2.5 pb-4 inline-flex flex-col justify-start items-center">
                <div className="justify-center text-color-azure-16-2 text-xs font-normal font-['Inter'] leading-5 flex items-center">View <ArrowRight className="w-3 h-3 ml-0.5" /></div>
              </div>
            </div>
            
          </div>
        </div>

      </div>
    </section>
  );
};
