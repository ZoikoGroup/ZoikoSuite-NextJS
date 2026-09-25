import React from "react";

export const HistoricalChanges = () => {
  return (
    <section className="w-full px-8 py-12 md:px-32 bg-color-white-solid flex justify-center">
      <div className="w-full max-w-[1180px] flex flex-col justify-start items-start gap-3">
        <div className="self-stretch pb-[0.59px] flex flex-col justify-start items-start">
          <div className="self-stretch justify-center text-color-orange-44 text-xs font-bold font-['Inter'] uppercase leading-4 tracking-wider">
            HISTORICAL CHANGES &amp; VERSIONING
          </div>
        </div>
        <div className="w-full max-w-[720px] flex flex-col justify-start items-start">
          <div className="justify-center text-color-azure-16-2 text-2xl font-bold font-['Georgia'] leading-10">
            Prior versions preserved, never overwritten
          </div>
        </div>
        <div className="self-stretch pt-3.5 flex flex-col justify-start items-start">
          <div className="self-stretch pt-3.5 pb-2.5 border-b border-color-orange-82 inline-flex justify-start items-start gap-5">
            <div className="w-48 inline-flex flex-col justify-start items-start">
              <div className="justify-center text-color-azure-37-2 text-xs font-bold font-['Inter'] uppercase leading-5 tracking-wide">
                Field
              </div>
            </div>
            <div className="flex-1 inline-flex flex-col justify-start items-start">
              <div className="self-stretch justify-center text-color-azure-37-2 text-xs font-bold font-['Inter'] uppercase leading-5 tracking-wide">
                Requirement
              </div>
            </div>
            <div className="flex-1 h-5 hidden md:block" />
          </div>
          
          <div className="self-stretch py-3.5 border-b border-color-orange-82 inline-flex justify-start items-start gap-5">
            <div className="w-48 inline-flex flex-col justify-start items-start">
              <div className="justify-center text-color-azure-16-2 text-xs font-bold font-['Inter'] leading-5">Registry version</div>
            </div>
            <div className="flex-1 inline-flex flex-col justify-start items-start">
              <div className="self-stretch justify-center text-color-azure-16-2 text-xs font-normal font-['Inter'] leading-5">
                Stable version ID for every public release.
              </div>
            </div>
            <div className="flex-1 h-5 hidden md:block" />
          </div>

          <div className="self-stretch py-3.5 border-b border-color-orange-82 inline-flex justify-start items-start gap-5">
            <div className="w-48 inline-flex flex-col justify-start items-start">
              <div className="justify-center text-color-azure-16-2 text-xs font-bold font-['Inter'] leading-5">Before / after</div>
            </div>
            <div className="flex-1 inline-flex flex-col justify-start items-start">
              <div className="self-stretch justify-center text-color-azure-16-2 text-xs font-normal font-['Inter'] leading-5">
                Structured old and new values for changed fields.
              </div>
            </div>
            <div className="flex-1 h-5 hidden md:block" />
          </div>

          <div className="self-stretch py-3.5 border-b border-color-orange-82 inline-flex justify-start items-start gap-5">
            <div className="w-48 inline-flex flex-col justify-start items-start">
              <div className="justify-center text-color-azure-16-2 text-xs font-bold font-['Inter'] leading-5">Deep links</div>
            </div>
            <div className="flex-1 inline-flex flex-col justify-start items-start">
              <div className="self-stretch justify-center text-color-azure-16-2 text-xs font-normal font-['Inter'] leading-5">
                Old links resolve to the archived record, never a 404.
              </div>
            </div>
            <div className="flex-1 h-5 hidden md:block" />
          </div>

          <div className="self-stretch py-3.5 border-b border-color-orange-82 inline-flex justify-start items-start gap-5">
            <div className="w-48 inline-flex flex-col justify-start items-start">
              <div className="justify-center text-color-azure-16-2 text-xs font-bold font-['Inter'] leading-5">Correction log</div>
            </div>
            <div className="flex-1 inline-flex flex-col justify-start items-start">
              <div className="self-stretch justify-center text-color-azure-16-2 text-xs font-normal font-['Inter'] leading-5">
                Non-material corrections remain visible where they could affect diligence<br />evidence.
              </div>
            </div>
            <div className="flex-1 h-5 hidden md:block" />
          </div>
        </div>
      </div>
    </section>
  );
};
