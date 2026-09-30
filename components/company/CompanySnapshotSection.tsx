import React from "react";

export default function CompanySnapshotSection() {
  return (
    <section className="w-full bg-color-grey-95-12 py-24 flex justify-center">
      <div className="w-full max-w-[1200px] px-8 flex flex-col justify-start items-start gap-9">
        {/* Header */}
        <div className="self-stretch inline-flex justify-between items-end flex-wrap content-end gap-6">
          <div className="inline-flex flex-col justify-start items-start gap-3.5">
            <div className="self-stretch inline-flex justify-start items-center gap-2.5">
              <div
                className="w-5 h-px"
                style={{ backgroundColor: "rgba(184, 145, 63, 1)" }}
              />
              <div
                className="justify-center text-xs font-semibold font-['Inter'] tracking-wide uppercase"
                style={{ color: "rgba(184, 145, 63, 1)" }}
              >
                COMPANY SNAPSHOT
              </div>
            </div>
            <div className="self-stretch flex flex-col justify-start items-start">
              <h2 className="justify-center text-color-azure-12-4 text-3xl font-bold font-['Inter'] leading-9">
                Verified facts — not fabricated scale.
              </h2>
            </div>
          </div>
          <div className="w-full lg:w-[500px] pb-1 inline-flex flex-col justify-start items-start">
            <p className="justify-center text-color-grey-44 text-base font-normal font-['Inter'] leading-6">
              <span className="block whitespace-nowrap">
                If verified metrics are unavailable, this page uses identity,
              </span>
              <span className="block whitespace-nowrap">
                governance, and proof routes instead. Empty space is
              </span>
              <span className="block whitespace-nowrap">
                preferable to invented authority.
              </span>
            </p>
          </div>
        </div>

        {/* Snapshot Cards */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Category */}
          <div className="p-6 bg-color-white-solid rounded-xl border border-color-orange-87 flex flex-col justify-between gap-2 min-h-[160px]">
            <div className="flex flex-col gap-1.5">
              <div className="text-color-grey-44 text-xs font-bold font-['Inter'] uppercase tracking-tight">
                Category
              </div>
              <div className="text-color-azure-12-4 text-base font-bold font-['Inter'] leading-snug">
                Governed Business
                <br />
                Operations Intelligence
              </div>
            </div>
            <div className="text-color-grey-58 text-xs font-normal font-['Inter']">
              Current approved category
            </div>
          </div>

          {/* Operator / group context */}
          <div className="p-6 bg-color-white-solid rounded-xl border border-color-orange-87 flex flex-col justify-between gap-2 min-h-[160px]">
            <div className="flex flex-col gap-1.5">
              <div className="text-color-grey-44 text-xs font-bold font-['Inter'] uppercase tracking-tight">
                Operator / group context
              </div>
              <div className="text-color-azure-12-4 text-base font-bold font-['Inter'] leading-snug">
                Zoiko Tech · A Zoiko Group
                <br />
                company
              </div>
            </div>
            <div className="text-color-grey-58 text-xs font-normal font-['Inter']">
              See relationship map above
            </div>
          </div>

          {/* Leadership */}
          <div className="p-6 bg-color-white-solid rounded-xl border border-color-orange-87 flex flex-col justify-between gap-2 min-h-[160px]">
            <div className="flex flex-col gap-1.5">
              <div className="text-color-grey-44 text-xs font-bold font-['Inter'] uppercase tracking-tight">
                Leadership
              </div>
            </div>
            <div className="text-color-grey-58 text-xs font-normal font-['Inter']">
              Count not required
            </div>
          </div>

          {/* Locations */}
          <div className="p-6 bg-color-white-solid rounded-xl border border-color-orange-87 flex flex-col justify-between gap-2 min-h-[160px]">
            <div className="flex flex-col gap-1.5">
              <div className="text-color-grey-44 text-xs font-bold font-['Inter'] uppercase tracking-tight">
                Locations
              </div>
            </div>
            <div className="text-color-grey-58 text-xs font-normal font-['Inter'] leading-snug">
              Headquarters, offices, registered
              <br />
              addresses distinguished
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
