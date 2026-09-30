import React from "react";

export default function SustainabilitySection() {
  return (
    <section className="w-full bg-color-white-solid py-24 flex justify-center">
      <div className="w-full max-w-[1200px] px-8 flex flex-col justify-start items-start gap-9">
        {/* Header */}
        <div className="self-stretch flex flex-col justify-start items-start gap-4">
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
                SUSTAINABILITY
              </div>
            </div>
            <div className="self-stretch flex flex-col justify-start items-start">
              <h2 className="justify-center text-color-azure-12-4 text-3xl font-bold font-['Inter'] leading-9">
                Operate with accountability. Measure what matters.
              </h2>
            </div>
          </div>
          <div className="w-full lg:w-[500px] pt-1 flex flex-col justify-start items-start">
            <p className="justify-center text-color-grey-44 text-base font-normal font-['Inter'] leading-6">
              <span className="block whitespace-nowrap">
                Framework references use &quot;aligned with&quot; or &quot;references&quot;
              </span>
              <span className="block whitespace-nowrap">
                unless certification or formal compliance is independently
              </span>
              <span className="block whitespace-nowrap">
                established.
              </span>
            </p>
          </div>
        </div>

        {/* Commitment Cards */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Example commitment topic */}
          <div className="p-6 bg-color-white-solid rounded-xl border border-color-orange-87 flex flex-col justify-between gap-4 min-h-[160px]">
            <div className="flex flex-col gap-2">
              <div className="text-color-azure-12-4 text-base font-bold font-['Inter']">
                Example commitment topic
              </div>
              <p className="text-color-grey-44 text-sm font-normal font-['Inter'] leading-5">
                <span className="block whitespace-nowrap">
                  Qualitative commitment shown when supported
                </span>
                <span className="block whitespace-nowrap">
                  by a baseline and method — no hard-coded
                </span>
                <span className="block whitespace-nowrap">
                  aspirational numbers without one.
                </span>
              </p>
            </div>
            <div
              className="text-sm font-semibold font-['Inter']"
              style={{ color: "rgba(184, 145, 63, 1)" }}
            >
              Status: In progress
            </div>
          </div>

          {/* Governance & oversight */}
          <div className="p-6 bg-color-white-solid rounded-xl border border-color-orange-87 flex flex-col justify-between gap-4 min-h-[160px]">
            <div className="flex flex-col gap-2">
              <div className="text-color-azure-12-4 text-base font-bold font-['Inter']">
                Governance &amp; oversight
              </div>
              <p className="text-color-grey-44 text-sm font-normal font-['Inter'] leading-5">
                <span className="block whitespace-nowrap">
                  Owner and reporting period disclosed alongside
                </span>
                <span className="block whitespace-nowrap">
                  any published commitment.
                </span>
              </p>
            </div>
            <div
              className="text-sm font-semibold font-['Inter']"
              style={{ color: "rgba(184, 145, 63, 1)" }}
            >
              Status: Current commitment
            </div>
          </div>

          {/* Evidence & reporting */}
          <div className="p-6 bg-color-white-solid rounded-xl border border-color-orange-87 flex flex-col justify-between gap-4 min-h-[160px]">
            <div className="flex flex-col gap-2">
              <div className="text-color-azure-12-4 text-base font-bold font-['Inter']">
                Evidence &amp; reporting
              </div>
              <p className="text-color-grey-44 text-sm font-normal font-['Inter'] leading-5">
                <span className="block whitespace-nowrap">
                  Evidence/report link provided once a reporting
                </span>
                <span className="block whitespace-nowrap">
                  period closes.
                </span>
              </p>
            </div>
            <div
              className="text-sm font-semibold font-['Inter']"
              style={{ color: "rgba(184, 145, 63, 1)" }}
            >
              Status: Measured
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
