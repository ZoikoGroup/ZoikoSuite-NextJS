import React from "react";

export const SubprocessorDetail = () => {
  return (
    <section className="w-full px-8 py-12 md:px-32 bg-color-grey-93-7 flex justify-center">
      <div className="w-full max-w-[1180px] flex flex-col justify-start items-start gap-3">
        <div className="self-stretch pb-[0.59px] flex flex-col justify-start items-start">
          <div className="self-stretch justify-center text-color-orange-44 text-xs font-bold font-['Inter'] uppercase leading-4 tracking-wider">
            SUBPROCESSOR DETAIL — STRUCTURAL EXAMPLE
          </div>
        </div>
        <div className="w-full max-w-[720px] flex flex-col justify-start items-start">
          <div className="justify-center text-color-azure-16-2 text-2xl font-bold font-['Georgia'] leading-10">
            Every field a reviewer needs, in one place
          </div>
        </div>
        <div className="self-stretch pt-3.5 flex flex-col justify-start items-start">
          <div className="self-stretch pt-3.5 pb-2.5 border-b border-color-orange-82 inline-flex justify-start items-start gap-5">
            <div className="w-48 inline-flex flex-col justify-start items-start">
              <div className="justify-center text-color-azure-37-2 text-xs font-bold font-['Inter'] uppercase leading-5 tracking-wide">
                Field group
              </div>
            </div>
            <div className="flex-1 inline-flex flex-col justify-start items-start">
              <div className="self-stretch justify-center text-color-azure-37-2 text-xs font-bold font-['Inter'] uppercase leading-5 tracking-wide">
                Content
              </div>
            </div>
            <div className="flex-1 h-5" />
          </div>
          
          <div className="self-stretch py-3.5 border-b border-color-orange-82 inline-flex justify-start items-start gap-5">
            <div className="w-48 inline-flex flex-col justify-start items-start">
              <div className="justify-center text-color-azure-16-2 text-xs font-bold font-['Inter'] leading-5">Identity</div>
            </div>
            <div className="flex-1 inline-flex flex-col justify-start items-start">
              <div className="self-stretch justify-center text-color-azure-16-2 text-xs font-normal font-['Inter'] leading-5">
                Legal entity name; trading name; affiliate/non-affiliate classification.
              </div>
            </div>
            <div className="flex-1 h-5" />
          </div>

          <div className="self-stretch py-3.5 border-b border-color-orange-82 inline-flex justify-start items-start gap-5">
            <div className="w-48 inline-flex flex-col justify-start items-start">
              <div className="justify-center text-color-azure-16-2 text-xs font-bold font-['Inter'] leading-5">Function</div>
            </div>
            <div className="flex-1 inline-flex flex-col justify-start items-start">
              <div className="self-stretch justify-center text-color-azure-16-2 text-xs font-normal font-['Inter'] leading-5">
                Service/function; purpose; dependency type.
              </div>
            </div>
            <div className="flex-1 h-5" />
          </div>

          <div className="self-stretch py-3.5 border-b border-color-orange-82 inline-flex justify-start items-start gap-5">
            <div className="w-48 inline-flex flex-col justify-start items-start">
              <div className="justify-center text-color-azure-16-2 text-xs font-bold font-['Inter'] leading-5">Applicability</div>
            </div>
            <div className="flex-1 inline-flex flex-col justify-start items-start">
              <div className="self-stretch justify-center text-color-azure-16-2 text-xs font-normal font-['Inter'] leading-5">
                ZoikoSuite services/modules; deployment modes; regions; customer-specific<br />exceptions.
              </div>
            </div>
            <div className="flex-1 h-5" />
          </div>

          <div className="self-stretch py-3.5 border-b border-color-orange-82 inline-flex justify-start items-start gap-5">
            <div className="w-48 inline-flex flex-col justify-start items-start">
              <div className="justify-center text-color-azure-16-2 text-xs font-bold font-['Inter'] leading-5">Data scope</div>
            </div>
            <div className="flex-1 inline-flex flex-col justify-start items-start">
              <div className="self-stretch justify-center text-color-azure-16-2 text-xs font-normal font-['Inter'] leading-5">
                High-level personal-data classes; special/sensitive-data status.
              </div>
            </div>
            <div className="flex-1 h-5" />
          </div>

          <div className="self-stretch py-3.5 border-b border-color-orange-82 inline-flex justify-start items-start gap-5">
            <div className="w-48 inline-flex flex-col justify-start items-start">
              <div className="justify-center text-color-azure-16-2 text-xs font-bold font-['Inter'] leading-5">Location</div>
            </div>
            <div className="flex-1 inline-flex flex-col justify-start items-start">
              <div className="self-stretch justify-center text-color-azure-16-2 text-xs font-normal font-['Inter'] leading-5">
                Processing countries/regions; storage region model; remote support/access<br />locations if materially relevant.
              </div>
            </div>
            <div className="flex-1 h-5" />
          </div>

          <div className="self-stretch py-3.5 border-b border-color-orange-82 inline-flex justify-start items-start gap-5">
            <div className="w-48 inline-flex flex-col justify-start items-start">
              <div className="justify-center text-color-azure-16-2 text-xs font-bold font-['Inter'] leading-5">Transfer context</div>
            </div>
            <div className="flex-1 inline-flex flex-col justify-start items-start">
              <div className="self-stretch justify-center text-color-azure-16-2 text-xs font-normal font-['Inter'] leading-5">
                Origin/destination context; approved mechanism state.
              </div>
            </div>
            <div className="flex-1 h-5" />
          </div>
        </div>
      </div>
    </section>
  );
};
