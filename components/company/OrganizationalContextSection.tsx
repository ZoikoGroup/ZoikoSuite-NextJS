import React from "react";
import Link from "next/link";

export default function OrganizationalContextSection() {
  return (
    <section className="w-full bg-color-white-solid py-24 flex justify-center">
      <div className="w-full max-w-[1200px] px-8 flex flex-col justify-start items-start gap-9">
        {/* Header */}
        <div className="self-stretch inline-flex justify-start items-end flex-wrap content-end">
          <div className="inline-flex flex-col justify-start items-start gap-3.5">
            <div className="self-stretch inline-flex justify-start items-center gap-2.5">
              <div className="w-5 h-px bg-[#B8913F]" />
              <div className="justify-center text-[#B8913F] text-xs font-semibold font-['Inter'] tracking-wide uppercase">
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
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Zoiko Tech */}
          <div className="p-6 bg-color-white-solid rounded-xl border border-color-orange-87 flex flex-col justify-between gap-4 min-h-[160px]">
            <div className="flex flex-col gap-2">
              <div className="text-color-azure-12-4 text-base font-bold font-['Inter']">
                Zoiko Tech
              </div>
              <p className="text-color-grey-44 text-sm font-normal font-['Inter'] leading-5">
                <span className="block whitespace-nowrap">
                  The technology organization&apos;s role in building and operating the platform, using
                </span>
                <span className="block whitespace-nowrap">
                  approved current language.
                </span>
              </p>
            </div>
            <div>
              <Link
                href="/zoiko-tech"
                className="text-[#B8913F] text-sm font-semibold font-['Inter'] inline-flex items-center gap-1.5 hover:underline"
              >
                <span>Explore Zoiko Tech</span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Zoiko Group */}
          <div className="p-6 bg-color-white-solid rounded-xl border border-color-orange-87 flex flex-col justify-between gap-4 min-h-[160px]">
            <div className="flex flex-col gap-2">
              <div className="text-color-azure-12-4 text-base font-bold font-['Inter']">
                Zoiko Group
              </div>
              <p className="text-color-grey-44 text-sm font-normal font-['Inter'] leading-5">
                <span className="block whitespace-nowrap">
                  How ZoikoSuite sits within the wider group portfolio, using approved
                </span>
                <span className="block whitespace-nowrap">
                  relationship wording.
                </span>
              </p>
            </div>
            <div>
              <Link
                href="/zoiko-group"
                className="text-[#B8913F] text-sm font-semibold font-['Inter'] inline-flex items-center gap-1.5 hover:underline"
              >
                <span>Explore Zoiko Group</span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
