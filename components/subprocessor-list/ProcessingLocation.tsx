import React from "react";

export const ProcessingLocation = () => {
  return (
    <section className="w-full px-8 py-12 md:px-32 bg-color-white-solid flex justify-center">
      <div className="w-full max-w-[1180px] flex flex-col justify-start items-start gap-3">
        <div className="self-stretch pb-[0.59px] flex flex-col justify-start items-start">
          <div className="self-stretch justify-center text-color-orange-44 text-xs font-bold font-['Inter'] uppercase leading-4 tracking-wider">
            PROCESSING LOCATION, RESIDENCY &amp; TRANSFER CONTEXT
          </div>
        </div>
        <div className="w-full max-w-[720px] flex flex-col justify-start items-start">
          <div className="justify-center text-color-azure-16-2 text-2xl font-bold font-['Georgia'] leading-10">
            Four concepts that are often incorrectly collapsed into one
          </div>
        </div>
        
        <div className="self-stretch pt-4 pb-1.5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-stretch">
          <div className="p-4 bg-color-white-solid rounded-lg outline outline-1 outline-offset-[-1px] outline-color-orange-82 flex flex-col justify-start items-start gap-2 h-full">
            <div className="self-stretch flex flex-col justify-start items-start">
              <div className="self-stretch justify-center text-color-azure-16-2 text-sm font-bold font-['Inter'] leading-5">Vendor headquarters</div>
            </div>
            <div className="self-stretch flex flex-col justify-start items-start">
              <div className="self-stretch justify-center text-color-azure-37-2 text-xs font-normal font-['Inter'] leading-5">
                Corporate address — not proof of where customer data is processed.
              </div>
            </div>
          </div>
          
          <div className="p-4 bg-color-white-solid rounded-lg outline outline-1 outline-offset-[-1px] outline-color-orange-82 flex flex-col justify-start items-start gap-2 h-full">
            <div className="self-stretch flex flex-col justify-start items-start">
              <div className="self-stretch justify-center text-color-azure-16-2 text-sm font-bold font-['Inter'] leading-5">Processing location</div>
            </div>
            <div className="self-stretch flex flex-col justify-start items-start">
              <div className="self-stretch justify-center text-color-azure-37-2 text-xs font-normal font-['Inter'] leading-5">
                Country/region from which in-scope personal data may be stored, accessed, transmitted, or processed.
              </div>
            </div>
          </div>

          <div className="p-4 bg-color-white-solid rounded-lg outline outline-1 outline-offset-[-1px] outline-color-orange-82 flex flex-col justify-start items-start gap-2 h-full">
            <div className="self-stretch flex flex-col justify-start items-start">
              <div className="self-stretch justify-center text-color-azure-16-2 text-sm font-bold font-['Inter'] leading-5">Hosting / storage region</div>
            </div>
            <div className="self-stretch flex flex-col justify-start items-start">
              <div className="self-stretch justify-center text-color-azure-37-2 text-xs font-normal font-['Inter'] leading-5">
                Where relevant service data is stored — may be<br />customer/deployment-specific.
              </div>
            </div>
          </div>

          <div className="p-4 bg-color-white-solid rounded-lg outline outline-1 outline-offset-[-1px] outline-color-orange-82 flex flex-col justify-start items-start gap-2 h-full">
            <div className="self-stretch flex flex-col justify-start items-start">
              <div className="self-stretch justify-center text-color-azure-16-2 text-sm font-bold font-['Inter'] leading-5">Data residency</div>
            </div>
            <div className="self-stretch flex flex-col justify-start items-start">
              <div className="self-stretch justify-center text-color-azure-37-2 text-xs font-normal font-['Inter'] leading-5">
                Product/deployment constraint governing<br />storage/processing/backup/replication — source of truth is Data Residency architecture, not this list.
              </div>
            </div>
          </div>

          <div className="p-4 bg-color-white-solid rounded-lg outline outline-1 outline-offset-[-1px] outline-color-orange-82 flex flex-col justify-start items-start gap-2 h-full">
            <div className="self-stretch flex flex-col justify-start items-start">
              <div className="self-stretch justify-center text-color-azure-16-2 text-sm font-bold font-['Inter'] leading-5">International transfer</div>
            </div>
            <div className="self-stretch flex flex-col justify-start items-start">
              <div className="self-stretch justify-center text-color-azure-37-2 text-xs font-normal font-['Inter'] leading-5">
                Legal movement/access context across jurisdictions;<br />mechanism determined from approved legal analysis.
              </div>
            </div>
          </div>

          <div className="p-4 bg-color-white-solid rounded-lg outline outline-1 outline-offset-[-1px] outline-color-orange-82 flex flex-col justify-start items-start gap-2 h-full">
            <div className="self-stretch flex flex-col justify-start items-start">
              <div className="self-stretch justify-center text-color-azure-16-2 text-sm font-bold font-['Inter'] leading-5">Transfer mechanism status</div>
            </div>
            <div className="self-stretch flex flex-col justify-start items-start">
              <div className="self-stretch justify-center text-color-azure-37-2 text-xs font-normal font-['Inter'] leading-5">
                Approved / Not applicable / Adequacy (only if verified) /<br />Contractual mechanism / Customer-specific / Under review.
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
