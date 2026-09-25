import React from "react";

export const AuthorizationSafeguards = () => {
  return (
    <section className="w-full px-8 py-12 md:px-32 bg-color-grey-93-7 flex justify-center">
      <div className="w-full max-w-[1180px] flex flex-col justify-start items-start gap-3">
        <div className="self-stretch pb-[0.59px] flex flex-col justify-start items-start">
          <div className="self-stretch justify-center text-color-orange-44 text-xs font-bold font-['Inter'] uppercase leading-4 tracking-wider">
            AUTHORIZATION &amp; CONTRACT SAFEGUARDS
          </div>
        </div>
        <div className="w-full max-w-[720px] flex flex-col justify-start items-start">
          <div className="justify-center text-color-azure-16-2 text-2xl font-bold font-['Georgia'] leading-10">
            Governed by the executed DPA — never generic guidance
          </div>
        </div>
        <div className="self-stretch pt-3.5 flex flex-col justify-start items-start">
          <div className="self-stretch pt-3.5 pb-2.5 border-b border-color-orange-82 inline-flex justify-start items-start gap-5">
            <div className="w-48 inline-flex flex-col justify-start items-start">
              <div className="justify-center text-color-azure-37-2 text-xs font-bold font-['Inter'] uppercase leading-5 tracking-wide">
                Area
              </div>
            </div>
            <div className="flex-1 inline-flex flex-col justify-start items-start">
              <div className="self-stretch justify-center text-color-azure-37-2 text-xs font-bold font-['Inter'] uppercase leading-5 tracking-wide">
                Public treatment
              </div>
            </div>
            <div className="flex-1 h-5 hidden md:block" />
          </div>
          
          <div className="self-stretch py-3.5 border-b border-color-orange-82 inline-flex justify-start items-start gap-5">
            <div className="w-48 inline-flex flex-col justify-start items-start">
              <div className="justify-center text-color-azure-16-2 text-xs font-bold font-['Inter'] leading-5">Authorization model</div>
            </div>
            <div className="flex-1 inline-flex flex-col justify-start items-start">
              <div className="self-stretch justify-center text-color-azure-16-2 text-xs font-normal font-['Inter'] leading-5">
                Whether the standard DPA uses general or specific authorization —<br />stated only<br />when approved, linked to the exact DPA clause.
              </div>
            </div>
            <div className="flex-1 h-5 hidden md:block" />
          </div>

          <div className="self-stretch py-3.5 border-b border-color-orange-82 inline-flex justify-start items-start gap-5">
            <div className="w-48 inline-flex flex-col justify-start items-start">
              <div className="justify-center text-color-azure-16-2 text-xs font-bold font-['Inter'] leading-5">Change notice</div>
            </div>
            <div className="flex-1 inline-flex flex-col justify-start items-start">
              <div className="self-stretch justify-center text-color-azure-16-2 text-xs font-normal font-['Inter'] leading-5">
                Additions/replacements are communicated according to the applicable<br />DPA —<br />no invented notice period.
              </div>
            </div>
            <div className="flex-1 h-5 hidden md:block" />
          </div>

          <div className="self-stretch py-3.5 border-b border-color-orange-82 inline-flex justify-start items-start gap-5">
            <div className="w-48 inline-flex flex-col justify-start items-start">
              <div className="justify-center text-color-azure-16-2 text-xs font-bold font-['Inter'] leading-5">Opportunity to object</div>
            </div>
            <div className="flex-1 inline-flex flex-col justify-start items-start">
              <div className="self-stretch justify-center text-color-azure-16-2 text-xs font-normal font-['Inter'] leading-5">
                The contractual route and scope only — &quot;you may veto any vendor&quot;<br />language<br />is avoided unless the DPA actually provides that right.
              </div>
            </div>
            <div className="flex-1 h-5 hidden md:block" />
          </div>

          <div className="self-stretch py-3.5 border-b border-color-orange-82 inline-flex justify-start items-start gap-5">
            <div className="w-48 inline-flex flex-col justify-start items-start">
              <div className="justify-center text-color-azure-16-2 text-xs font-bold font-['Inter'] leading-5">Equivalent obligations</div>
            </div>
            <div className="flex-1 inline-flex flex-col justify-start items-start">
              <div className="self-stretch justify-center text-color-azure-16-2 text-xs font-normal font-['Inter'] leading-5">
                Approved subprocessor contracts are required to impose applicable<br />onward<br />data-protection obligations, without quoting confidential terms.
              </div>
            </div>
            <div className="flex-1 h-5 hidden md:block" />
          </div>
        </div>
      </div>
    </section>
  );
};
