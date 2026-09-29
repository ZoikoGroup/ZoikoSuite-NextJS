import React from "react";

export default function CompanySnapshotSection() {
  return (
    <section className="self-stretch px-28 py-24 bg-color-grey-95-12 flex flex-col justify-start items-start">
      <div className="w-full max-w-[1200px] px-8 flex flex-col justify-start items-start gap-4">
        {/* Header */}
        <div className="self-stretch inline-flex justify-between items-end flex-wrap content-end">
          <div className="inline-flex flex-col justify-start items-start gap-3.5">
            <div className="self-stretch inline-flex justify-start items-center gap-2.5">
              <div className="w-5 h-px bg-yellow-600" />
              <div className="justify-center text-yellow-600 text-xs font-semibold font-['Inter'] tracking-wide">
                COMPANY SNAPSHOT
              </div>
            </div>
            <div className="self-stretch flex flex-col justify-start items-start">
              <h2 className="justify-center text-color-azure-12-4 text-3xl font-bold font-['Inter'] leading-9">
                Verified facts — not fabricated scale.
              </h2>
            </div>
          </div>
          <div className="max-w-96 pr-3 pt-3.5 pb-5 inline-flex flex-col justify-start items-start">
            <p className="justify-center text-color-grey-44 text-base font-normal font-['Inter'] leading-6">
              If verified metrics are unavailable, this page uses identity,
              <br />
              governance, and proof routes instead. Empty space is
              <br />
              preferable to invented authority.
            </p>
          </div>
        </div>

        {/* Snapshot Cards */}
        <div className="self-stretch pt-4 inline-flex justify-center items-start gap-4 flex-wrap content-start">
          {/* Category */}
          <div className="flex-1 self-stretch min-w-52 p-5 bg-color-white-solid rounded-xl outline outline-1 outline-offset-[-1px] outline-color-orange-87 inline-flex flex-col justify-start items-start gap-1.5">
            <div className="self-stretch flex flex-col justify-start items-start">
              <div className="self-stretch justify-center text-color-grey-44 text-xs font-bold font-['Inter'] uppercase tracking-tight">
                Category
              </div>
            </div>
            <div className="self-stretch pt-0.5 flex flex-col justify-start items-start">
              <div className="self-stretch justify-center text-color-azure-12-4 text-base font-bold font-['Inter']">
                Governed Business
                <br />
                Operations Intelligence
              </div>
            </div>
            <div className="self-stretch flex flex-col justify-start items-start">
              <div className="self-stretch justify-center text-color-grey-58 text-xs font-normal font-['Inter']">
                Current approved category
              </div>
            </div>
          </div>

          {/* Operator / group context */}
          <div className="flex-1 self-stretch min-w-52 p-5 bg-color-white-solid rounded-xl outline outline-1 outline-offset-[-1px] outline-color-orange-87 inline-flex flex-col justify-start items-start gap-1.5">
            <div className="self-stretch flex flex-col justify-start items-start">
              <div className="self-stretch justify-center text-color-grey-44 text-xs font-bold font-['Inter'] uppercase tracking-tight">
                Operator / group context
              </div>
            </div>
            <div className="self-stretch pt-0.5 flex flex-col justify-start items-start">
              <div className="self-stretch justify-center text-color-azure-12-4 text-base font-bold font-['Inter']">
                Zoiko Tech · A Zoiko Group
                <br />
                company
              </div>
            </div>
            <div className="self-stretch flex flex-col justify-start items-start">
              <div className="self-stretch justify-center text-color-grey-58 text-xs font-normal font-['Inter']">
                See relationship map above
              </div>
            </div>
          </div>

          {/* Leadership */}
          <div className="flex-1 self-stretch min-w-52 p-5 bg-color-white-solid rounded-xl outline outline-1 outline-offset-[-1px] outline-color-orange-87 inline-flex flex-col justify-start items-start gap-1.5">
            <div className="self-stretch flex flex-col justify-start items-start">
              <div className="self-stretch justify-center text-color-grey-44 text-xs font-bold font-['Inter'] uppercase tracking-tight">
                Leadership
              </div>
            </div>
            <div className="self-stretch flex flex-col justify-start items-start">
              <div className="self-stretch justify-center text-color-grey-58 text-xs font-normal font-['Inter']">
                Count not required
              </div>
            </div>
          </div>

          {/* Locations */}
          <div className="flex-1 self-stretch min-w-52 p-5 bg-color-white-solid rounded-xl outline outline-1 outline-offset-[-1px] outline-color-orange-87 inline-flex flex-col justify-start items-start gap-1.5">
            <div className="self-stretch flex flex-col justify-start items-start">
              <div className="self-stretch justify-center text-color-grey-44 text-xs font-bold font-['Inter'] uppercase tracking-tight">
                Locations
              </div>
            </div>
            <div className="self-stretch flex flex-col justify-start items-start">
              <div className="self-stretch justify-center text-color-grey-58 text-xs font-normal font-['Inter']">
                Headquarters, offices, registered
                <br />
                addresses distinguished
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
