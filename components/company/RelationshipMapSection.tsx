import React from "react";
import Link from "next/link";

export default function RelationshipMapSection() {
  return (
    <section className="w-[1200px] max-w-[1200px] mx-auto px-8 py-24 flex flex-col justify-start items-start gap-5">
      {/* Header */}
      <div className="self-stretch flex flex-col justify-end items-start gap-4">
        <div className="inline-flex flex-col justify-start items-start gap-3.5">
          <div className="self-stretch inline-flex justify-start items-center gap-2.5">
            <div className="w-5 h-px bg-yellow-600" />
            <div className="justify-center text-yellow-600 text-xs font-semibold font-['Inter'] tracking-wide">
              RELATIONSHIP MAP
            </div>
          </div>
          <div className="self-stretch flex flex-col justify-start items-start">
            <h2 className="justify-center text-color-azure-12-4 text-3xl font-bold font-['Inter'] leading-9">
              Who builds, operates, and represents the platform.
            </h2>
          </div>
        </div>
        <div className="max-w-96 pr-6 pt-3.5 pb-5 flex flex-col justify-start items-start">
          <p className="justify-center text-color-grey-44 text-base font-normal font-['Inter'] leading-6">
            Corporate relationships reflect the current approved
            <br />
            company registry. Legal entities and contracting parties
            <br />
            may differ by service, jurisdiction, or agreement.
          </p>
        </div>
      </div>

      {/* Map Cards */}
      <div className="self-stretch h-52 relative">
        {/* Arrows */}
        <div className="h-48 px-5 left-[338.66px] top-[16px] absolute inline-flex justify-center items-center">
          <div className="text-center justify-center text-color-grey-58 text-xl font-normal font-['Inter']">
            →
          </div>
        </div>
        <div className="h-48 px-5 left-[737.33px] top-[16px] absolute inline-flex justify-center items-center">
          <div className="text-center justify-center text-color-grey-58 text-xl font-normal font-['Inter']">
            →
          </div>
        </div>

        {/* Card: Platform / brand */}
        <div className="w-80 h-48 p-6 left-0 top-[16px] absolute bg-color-white-solid rounded-xl outline outline-1 outline-offset-[-1px] outline-color-orange-87 inline-flex flex-col justify-start items-start gap-2.5">
          <div className="self-stretch flex flex-col justify-start items-start">
            <div className="self-stretch justify-center text-yellow-600 text-xs font-bold font-['Inter'] uppercase tracking-wide">
              Platform / brand
            </div>
          </div>
          <div className="self-stretch flex flex-col justify-start items-start">
            <div className="self-stretch justify-center text-color-azure-12-4 text-base font-bold font-['Inter']">
              ZoikoSuite
            </div>
          </div>
          <div className="self-stretch pt-[3px] flex flex-col justify-start items-start">
            <p className="self-stretch justify-center text-color-grey-44 text-xs font-normal font-['Inter'] leading-5">
              Governance-first business operations
              <br />
              platform.
            </p>
          </div>
          <div className="pt-1 inline-flex justify-start items-center">
            <Link
              href="/about"
              className="justify-center text-yellow-600 text-sm font-semibold font-['Inter']"
            >
              About ZoikoSuite →
            </Link>
          </div>
        </div>

        {/* Card: Technology organization */}
        <div className="w-80 h-48 p-6 left-[398.66px] top-[16px] absolute bg-color-white-solid rounded-xl outline outline-1 outline-offset-[-1px] outline-color-orange-87 inline-flex flex-col justify-start items-start gap-2.5">
          <div className="self-stretch flex flex-col justify-start items-start">
            <div className="self-stretch justify-center text-yellow-600 text-xs font-bold font-['Inter'] uppercase tracking-wide">
              Technology organization
            </div>
          </div>
          <div className="self-stretch flex flex-col justify-start items-start">
            <div className="self-stretch justify-center text-color-azure-12-4 text-base font-bold font-['Inter']">
              Zoiko Tech
            </div>
          </div>
          <div className="self-stretch pt-[3px] flex flex-col justify-start items-start">
            <p className="self-stretch justify-center text-color-grey-44 text-xs font-normal font-['Inter'] leading-5">
              Technology organization responsible for the
              <br />
              platform — exact legal/operator wording
              <br />
              requires Corporate approval.
            </p>
          </div>
          <div className="pt-1 inline-flex justify-start items-center">
            <Link
              href="/zoiko-tech"
              className="justify-center text-yellow-600 text-sm font-semibold font-['Inter']"
            >
              Explore Zoiko Tech →
            </Link>
          </div>
        </div>

        {/* Card: Group context */}
        <div className="w-80 h-48 p-6 left-[797.33px] top-[16px] absolute bg-color-white-solid rounded-xl outline outline-1 outline-offset-[-1px] outline-color-orange-87 inline-flex flex-col justify-start items-start gap-2.5">
          <div className="self-stretch flex flex-col justify-start items-start">
            <div className="self-stretch justify-center text-yellow-600 text-xs font-bold font-['Inter'] uppercase tracking-wide">
              Group context
            </div>
          </div>
          <div className="self-stretch flex flex-col justify-start items-start">
            <div className="self-stretch justify-center text-color-azure-12-4 text-base font-bold font-['Inter']">
              Zoiko Group
            </div>
          </div>
          <div className="self-stretch pt-[3px] flex flex-col justify-start items-start">
            <p className="self-stretch justify-center text-color-grey-44 text-xs font-normal font-['Inter'] leading-5">
              Group context for the wider portfolio — exact
              <br />
              ownership wording requires Corporate
              <br />
              approval.
            </p>
          </div>
          <div className="pt-1 inline-flex justify-start items-center">
            <Link
              href="/zoiko-group"
              className="justify-center text-yellow-600 text-sm font-semibold font-['Inter']"
            >
              Explore Zoiko Group →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
