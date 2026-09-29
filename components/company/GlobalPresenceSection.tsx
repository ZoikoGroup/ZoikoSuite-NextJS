import React from "react";

export default function GlobalPresenceSection() {
  return (
    <section className="w-[1200px] max-w-[1200px] mx-auto px-8 py-24 flex flex-col justify-start items-start gap-5">
      {/* Header */}
      <div className="self-stretch inline-flex justify-between items-end flex-wrap content-end">
        <div className="inline-flex flex-col justify-start items-start gap-3.5">
          <div className="self-stretch inline-flex justify-start items-center gap-2.5">
            <div className="w-5 h-px bg-yellow-600" />
            <div className="justify-center text-yellow-600 text-xs font-semibold font-['Inter'] tracking-wide">
              GLOBAL PRESENCE
            </div>
          </div>
          <div className="self-stretch flex flex-col justify-start items-start">
            <h2 className="justify-center text-color-azure-12-4 text-3xl font-bold font-['Inter'] leading-9">
              Global context, verified locally.
            </h2>
          </div>
        </div>
        <div className="max-w-96 pr-24 pt-3.5 pb-5 inline-flex flex-col justify-start items-start">
          <p className="justify-center text-color-grey-44 text-base font-normal font-['Inter'] leading-6">
            A postal address, registered address, regional
            <br />
            headquarters, and support location are not
            <br />
            interchangeable labels.
          </p>
        </div>
      </div>

      {/* Location Cards */}
      <div className="self-stretch pt-4 inline-flex justify-center items-start gap-5 flex-wrap content-start">
        {/* Sacramento */}
        <div className="flex-1 self-stretch min-w-64 px-5 pt-6 pb-5 bg-color-white-solid rounded-xl outline outline-1 outline-offset-[-1px] outline-color-orange-87 inline-flex flex-col justify-start items-start gap-1.5">
          <div className="px-2 py-[3px] bg-color-grey-94-10 rounded-[5px] inline-flex justify-start items-start">
            <div className="justify-center text-color-azure-24 text-xs font-bold font-['Inter'] uppercase">
              Pending registry validation
            </div>
          </div>
          <div className="self-stretch pt-1 flex flex-col justify-start items-start">
            <div className="self-stretch justify-center text-color-azure-12-4 text-base font-bold font-['Inter']">
              Sacramento, California, United States
            </div>
          </div>
          <div className="self-stretch flex flex-col justify-start items-start">
            <p className="self-stretch justify-center text-color-grey-44 text-xs font-normal font-['Inter'] leading-5">
              Current public-site signal for Zoiko Tech. Location type, address,
              and supported
              <br />
              functions are shown here only once validated in the location
              registry.
            </p>
          </div>
          <div className="self-stretch pt-0.5 flex flex-col justify-start items-start">
            <div className="self-stretch justify-center text-color-grey-58 text-xs font-normal font-['Inter']">
              Awaiting location-registry validation before publication.
            </div>
          </div>
        </div>

        {/* London */}
        <div className="flex-1 self-stretch min-w-64 px-5 pt-6 pb-5 bg-color-white-solid rounded-xl outline outline-1 outline-offset-[-1px] outline-color-orange-87 inline-flex flex-col justify-start items-start gap-1.5">
          <div className="px-2 py-[3px] bg-color-grey-94-10 rounded-[5px] inline-flex justify-start items-start">
            <div className="justify-center text-color-azure-24 text-xs font-bold font-['Inter'] uppercase">
              Pending registry validation
            </div>
          </div>
          <div className="self-stretch pt-1 flex flex-col justify-start items-start">
            <div className="self-stretch justify-center text-color-azure-12-4 text-base font-bold font-['Inter']">
              London, United Kingdom
            </div>
          </div>
          <div className="self-stretch flex flex-col justify-start items-start">
            <p className="self-stretch justify-center text-color-grey-44 text-xs font-normal font-['Inter'] leading-5">
              Current public-site signal for Zoiko Tech. Location type, address,
              and supported
              <br />
              functions are shown here only once validated in the location
              registry.
            </p>
          </div>
          <div className="self-stretch pt-0.5 flex flex-col justify-start items-start">
            <div className="self-stretch justify-center text-color-grey-58 text-xs font-normal font-['Inter']">
              Awaiting location-registry validation before publication.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
