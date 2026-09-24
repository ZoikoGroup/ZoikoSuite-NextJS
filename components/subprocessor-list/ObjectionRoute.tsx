import React from "react";

export const ObjectionRoute = () => {
  return (
    <section className="w-full px-8 py-12 md:px-32 bg-color-grey-93-7 flex justify-center">
      <div className="w-full max-w-[1180px] flex flex-col justify-start items-start gap-3">
        <div className="self-stretch pb-[0.59px] flex flex-col justify-start items-start">
          <div className="self-stretch justify-center text-color-orange-44 text-xs font-bold font-['Inter'] uppercase leading-4 tracking-wider">
            OBJECTION / QUESTION ROUTE
          </div>
        </div>
        <div className="w-full flex flex-col justify-start items-start">
          <div className="justify-center text-color-azure-16-2 text-2xl font-bold font-['Georgia'] leading-10">
            A contractual concern route — not an implied universal veto
          </div>
        </div>
        <div className="self-stretch pt-3.5 flex flex-col justify-start items-start">
          <div className="self-stretch pt-3.5 pb-2.5 border-b border-color-orange-82 inline-flex justify-start items-start gap-5">
            <div className="w-48 inline-flex flex-col justify-start items-start">
              <div className="justify-center text-color-azure-37-2 text-xs font-bold font-['Inter'] uppercase leading-5 tracking-wide">
                Step
              </div>
            </div>
            <div className="flex-1 inline-flex flex-col justify-start items-start">
              <div className="self-stretch justify-center text-color-azure-37-2 text-xs font-bold font-['Inter'] uppercase leading-5 tracking-wide">
                Required behavior
              </div>
            </div>
            <div className="flex-1 h-5 hidden md:block" />
          </div>
          
          <div className="self-stretch py-3.5 border-b border-color-orange-82 inline-flex justify-start items-start gap-5">
            <div className="w-48 inline-flex flex-col justify-start items-start">
              <div className="justify-center text-color-azure-16-2 text-xs font-bold font-['Inter'] leading-5">1. Identify change</div>
            </div>
            <div className="flex-1 inline-flex flex-col justify-start items-start">
              <div className="self-stretch justify-center text-color-azure-16-2 text-xs font-normal font-['Inter'] leading-5">
                Deep link pre-fills the subprocessor/change ID; choose current entity or<br />pending change.
              </div>
            </div>
            <div className="flex-1 h-5 hidden md:block" />
          </div>

          <div className="self-stretch py-3.5 border-b border-color-orange-82 inline-flex justify-start items-start gap-5">
            <div className="w-48 inline-flex flex-col justify-start items-start">
              <div className="justify-center text-color-azure-16-2 text-xs font-bold font-['Inter'] leading-5">2. Concern category</div>
            </div>
            <div className="flex-1 inline-flex flex-col justify-start items-start">
              <div className="self-stretch justify-center text-color-azure-16-2 text-xs font-normal font-['Inter'] leading-5">
                Data protection; security; location/transfer; contractual; other.
              </div>
            </div>
            <div className="flex-1 h-5 hidden md:block" />
          </div>

          <div className="self-stretch py-3.5 border-b border-color-orange-82 inline-flex justify-start items-start gap-5">
            <div className="w-48 inline-flex flex-col justify-start items-start">
              <div className="justify-center text-color-azure-16-2 text-xs font-bold font-['Inter'] leading-5">3. DPA applicability check</div>
            </div>
            <div className="flex-1 inline-flex flex-col justify-start items-start">
              <div className="self-stretch justify-center text-color-azure-16-2 text-xs font-normal font-['Inter'] leading-5">
                System resolves the applicable DPA/version and objection clause where<br />possible; otherwise routes to Legal review.
              </div>
            </div>
            <div className="flex-1 h-5 hidden md:block" />
          </div>

          <div className="self-stretch py-3.5 border-b border-color-orange-82 inline-flex justify-start items-start gap-5">
            <div className="w-48 inline-flex flex-col justify-start items-start">
              <div className="justify-center text-color-azure-16-2 text-xs font-bold font-['Inter'] leading-5">4. Submission</div>
            </div>
            <div className="flex-1 inline-flex flex-col justify-start items-start">
              <div className="self-stretch justify-center text-color-azure-16-2 text-xs font-normal font-['Inter'] leading-5">
                Plain-language acknowledgement — no promise that submission suspends<br />vendor use unless the contract says so.
              </div>
            </div>
            <div className="flex-1 h-5 hidden md:block" />
          </div>
        </div>
      </div>
    </section>
  );
};
