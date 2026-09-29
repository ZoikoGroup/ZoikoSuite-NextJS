import React from "react";

export default function SustainabilitySection() {
  return (
    <section className="w-[1200px] max-w-[1200px] mx-auto px-8 py-24 flex flex-col justify-start items-start gap-5">
      {/* Header */}
      <div className="self-stretch flex flex-col justify-end items-start gap-4">
        <div className="inline-flex flex-col justify-start items-start gap-3.5">
          <div className="self-stretch inline-flex justify-start items-center gap-2.5">
            <div className="w-5 h-px bg-yellow-600" />
            <div className="justify-center text-yellow-600 text-xs font-semibold font-['Inter'] tracking-wide">
              SUSTAINABILITY
            </div>
          </div>
          <div className="self-stretch flex flex-col justify-start items-start">
            <h2 className="justify-center text-color-azure-12-4 text-3xl font-bold font-['Inter'] leading-9">
              Operate with accountability. Measure what matters.
            </h2>
          </div>
        </div>
        <div className="max-w-96 pr-2.5 pt-3.5 pb-5 flex flex-col justify-start items-start">
          <p className="justify-center text-color-grey-44 text-base font-normal font-['Inter'] leading-6">
            Framework references use &quot;aligned with&quot; or
            &quot;references&quot;
            <br />
            unless certification or formal compliance is independently
            <br />
            established.
          </p>
        </div>
      </div>

      {/* Commitment Cards */}
      <div className="self-stretch pt-4 inline-flex justify-center items-start gap-5 flex-wrap content-start">
        {/* Example commitment topic */}
        <div className="w-96 self-stretch min-w-60 p-5 bg-color-white-solid rounded-xl outline outline-1 outline-offset-[-1px] outline-color-orange-87 inline-flex flex-col justify-start items-start gap-2">
          <div className="self-stretch flex flex-col justify-start items-start">
            <div className="self-stretch justify-center text-color-azure-12-4 text-base font-bold font-['Inter']">
              Example commitment topic
            </div>
          </div>
          <div className="self-stretch flex flex-col justify-start items-start">
            <p className="self-stretch justify-center text-color-grey-44 text-sm font-normal font-['Inter'] leading-5">
              Qualitative commitment shown when supported
              <br />
              by a baseline and method — no hard-coded
              <br />
              aspirational numbers without one.
            </p>
          </div>
          <div className="justify-center text-yellow-600 text-sm font-semibold font-['Inter']">
            Status: In progress
          </div>
        </div>

        {/* Governance & oversight */}
        <div className="w-96 self-stretch min-w-60 p-5 bg-color-white-solid rounded-xl outline outline-1 outline-offset-[-1px] outline-color-orange-87 inline-flex flex-col justify-start items-start gap-2">
          <div className="self-stretch flex flex-col justify-start items-start">
            <div className="self-stretch justify-center text-color-azure-12-4 text-base font-bold font-['Inter']">
              Governance &amp; oversight
            </div>
          </div>
          <div className="self-stretch flex flex-col justify-start items-start">
            <p className="self-stretch justify-center text-color-grey-44 text-sm font-normal font-['Inter'] leading-5">
              Owner and reporting period disclosed alongside
              <br />
              any published commitment.
            </p>
          </div>
          <div className="justify-center text-yellow-600 text-sm font-semibold font-['Inter']">
            Status: Current commitment
          </div>
        </div>

        {/* Evidence & reporting */}
        <div className="w-96 self-stretch min-w-60 p-5 bg-color-white-solid rounded-xl outline outline-1 outline-offset-[-1px] outline-color-orange-87 inline-flex flex-col justify-start items-start gap-2">
          <div className="self-stretch flex flex-col justify-start items-start">
            <div className="self-stretch justify-center text-color-azure-12-4 text-base font-bold font-['Inter']">
              Evidence &amp; reporting
            </div>
          </div>
          <div className="self-stretch flex flex-col justify-start items-start">
            <p className="self-stretch justify-center text-color-grey-44 text-sm font-normal font-['Inter'] leading-5">
              Evidence/report link provided once a reporting
              <br />
              period closes.
            </p>
          </div>
          <div className="justify-center text-yellow-600 text-sm font-semibold font-['Inter']">
            Status: Measured
          </div>
        </div>
      </div>
    </section>
  );
}
