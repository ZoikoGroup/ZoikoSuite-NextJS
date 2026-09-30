import React from "react";

export default function GlobalPresenceSection() {
  return (
    <section className="w-full bg-color-white-solid py-24 flex justify-center">
      <div className="w-full max-w-[1200px] px-8 flex flex-col justify-start items-start gap-9">
        {/* Header */}
        <div className="self-stretch inline-flex justify-between items-end flex-wrap content-end gap-6">
          <div className="inline-flex flex-col justify-start items-start gap-3.5">
            <div className="self-stretch inline-flex justify-start items-center gap-2.5">
              <div className="w-5 h-px bg-[#B8913F]" />
              <div className="justify-center text-[#B8913F] text-xs font-semibold font-['Inter'] tracking-wide uppercase">
                GLOBAL PRESENCE
              </div>
            </div>
            <div className="self-stretch flex flex-col justify-start items-start">
              <h2 className="justify-center text-color-azure-12-4 text-3xl font-bold font-['Inter'] leading-9">
                Global context, verified locally.
              </h2>
            </div>
          </div>
          <div className="w-full lg:w-[420px] pb-1 flex flex-col justify-start items-start">
            <p className="justify-center text-color-grey-44 text-base font-normal font-['Inter'] leading-6 whitespace-nowrap">
              A postal address, registered address, regional
              <br />
              headquarters, and support location are not
              <br />
              interchangeable labels.
            </p>
          </div>
        </div>

        {/* Location Cards */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Sacramento */}
          <div className="p-6 bg-color-white-solid rounded-xl border border-color-orange-87 flex flex-col justify-start items-start gap-3">
            <div className="px-2 py-[3px] bg-color-grey-94-10 rounded-[5px] inline-flex justify-start items-start">
              <div className="justify-center text-color-chathams-blue text-xs font-bold font-['Inter'] uppercase tracking-wider">
                Pending registry validation
              </div>
            </div>
            <div className="self-stretch">
              <div className="text-color-azure-12-4 text-base font-bold font-['Inter']">
                Sacramento, California, United States
              </div>
            </div>
            <div className="self-stretch">
              <p className="text-color-grey-44 text-xs font-normal font-['Inter'] leading-5">
                Current public-site signal for Zoiko Tech. Location type, address, and supported
                <br />
                functions are shown here only once validated in the location registry.
              </p>
            </div>
            <div className="self-stretch pt-1">
              <div className="text-color-grey-58 text-xs font-normal font-['Inter']">
                Awaiting location-registry validation before publication.
              </div>
            </div>
          </div>

          {/* London */}
          <div className="p-6 bg-color-white-solid rounded-xl border border-color-orange-87 flex flex-col justify-start items-start gap-3">
            <div className="px-2 py-[3px] bg-color-grey-94-10 rounded-[5px] inline-flex justify-start items-start">
              <div className="justify-center text-color-chathams-blue text-xs font-bold font-['Inter'] uppercase tracking-wider">
                Pending registry validation
              </div>
            </div>
            <div className="self-stretch">
              <div className="text-color-azure-12-4 text-base font-bold font-['Inter']">
                London, United Kingdom
              </div>
            </div>
            <div className="self-stretch">
              <p className="text-color-grey-44 text-xs font-normal font-['Inter'] leading-5">
                Current public-site signal for Zoiko Tech. Location type, address, and supported
                <br />
                functions are shown here only once validated in the location registry.
              </p>
            </div>
            <div className="self-stretch pt-1">
              <div className="text-color-grey-58 text-xs font-normal font-['Inter']">
                Awaiting location-registry validation before publication.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
