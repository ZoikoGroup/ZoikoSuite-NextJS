import React from "react";
import Link from "next/link";

export default function OrganizationalContextSection() {
  return (
    <section className="w-[1200px] max-w-[1200px] mx-auto px-8 py-24 flex flex-col justify-start items-start gap-5">
      {/* Header */}
      <div className="self-stretch inline-flex justify-start items-end flex-wrap content-end">
        <div className="inline-flex flex-col justify-start items-start gap-3.5">
          <div className="self-stretch inline-flex justify-start items-center gap-2.5">
            <div className="w-5 h-px bg-yellow-600" />
            <div className="justify-center text-yellow-600 text-xs font-semibold font-['Inter'] tracking-wide">
              ORGANIZATIONAL CONTEXT
            </div>
          </div>
          <div className="self-stretch flex flex-col justify-start items-start">
            <h2 className="justify-center text-color-azure-12-4 text-3xl font-bold font-['Inter'] leading-9">
              Where ZoikoSuite sits, without duplicating the dedicated pages.
            </h2>
          </div>
        </div>
      </div>

      {/* Context Cards */}
      <div className="self-stretch pt-4 inline-flex justify-center items-start gap-5 flex-wrap content-start">
        {/* Zoiko Tech */}
        <div className="flex-1 self-stretch min-w-64 p-5 bg-color-white-solid rounded-xl outline outline-1 outline-offset-[-1px] outline-color-orange-87 inline-flex flex-col justify-start items-start gap-2">
          <div className="self-stretch flex flex-col justify-start items-start">
            <div className="self-stretch justify-center text-color-azure-12-4 text-base font-bold font-['Inter']">
              Zoiko Tech
            </div>
          </div>
          <div className="self-stretch flex flex-col justify-start items-start">
            <p className="self-stretch justify-center text-color-grey-44 text-sm font-normal font-['Inter'] leading-5">
              The technology organization&apos;s role in building and operating
              the platform, using
              <br />
              approved current language.
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

        {/* Zoiko Group */}
        <div className="flex-1 self-stretch min-w-64 p-5 bg-color-white-solid rounded-xl outline outline-1 outline-offset-[-1px] outline-color-orange-87 inline-flex flex-col justify-start items-start gap-2">
          <div className="self-stretch flex flex-col justify-start items-start">
            <div className="self-stretch justify-center text-color-azure-12-4 text-base font-bold font-['Inter']">
              Zoiko Group
            </div>
          </div>
          <div className="self-stretch flex flex-col justify-start items-start">
            <p className="self-stretch justify-center text-color-grey-44 text-sm font-normal font-['Inter'] leading-5">
              How ZoikoSuite sits within the wider group portfolio, using
              approved
              <br />
              relationship wording.
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
