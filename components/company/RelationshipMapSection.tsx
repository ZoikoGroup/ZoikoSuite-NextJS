import React from "react";
import Link from "next/link";

export default function RelationshipMapSection() {
  return (
    <section className="w-full bg-color-white-solid py-24 flex justify-center">
      <div className="w-full max-w-[1200px] px-8 flex flex-col justify-start items-start gap-9">
        {/* Header */}
        <div className="self-stretch flex flex-col justify-end items-start gap-4">
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
                RELATIONSHIP MAP
              </div>
            </div>
            <div className="self-stretch flex flex-col justify-start items-start">
              <h2 className="justify-center text-color-azure-12-4 text-3xl font-bold font-['Inter'] leading-9">
                Who builds, operates, and represents the platform.
              </h2>
            </div>
          </div>
          <div className="w-full lg:w-[600px] pt-1.5 pb-2 flex flex-col justify-start items-start">
            <p className="justify-center text-color-grey-44 text-base font-normal font-['Inter'] leading-6">
              <span className="block whitespace-nowrap">
                Corporate relationships reflect the current approved
              </span>
              <span className="block whitespace-nowrap">
                company registry. Legal entities and contracting parties
              </span>
              <span className="block whitespace-nowrap">
                may differ by service, jurisdiction, or agreement.
              </span>
            </p>
          </div>
        </div>

        {/* Map Cards with Arrows */}
        <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-4">
          {/* Card: Platform / brand */}
          <div className="flex-1 w-full p-6 bg-color-white-solid rounded-xl border border-color-orange-87 flex flex-col justify-between gap-4 min-h-[196px]">
            <div className="flex flex-col gap-2">
              <div
                className="text-xs font-bold font-['Inter'] uppercase tracking-wide"
                style={{ color: "rgba(184, 145, 63, 1)" }}
              >
                PLATFORM / BRAND
              </div>
              <div className="text-color-azure-12-4 text-base font-bold font-['Inter']">
                ZoikoSuite
              </div>
              <p className="text-color-grey-44 text-xs font-normal font-['Inter'] leading-5">
                Governance-first business operations
                <br />
                platform.
              </p>
            </div>
            <div>
              <Link
                href="/about"
                className="text-sm font-semibold font-['Inter'] hover:underline inline-flex items-center gap-1.5"
                style={{ color: "rgba(184, 145, 63, 1)" }}
              >
                <span>About ZoikoSuite</span>
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

          {/* Arrow 1 */}
          <div className="text-color-grey-58 px-1 hidden lg:flex items-center justify-center">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </div>

          {/* Card: Technology organization */}
          <div className="flex-1 w-full p-6 bg-color-white-solid rounded-xl border border-color-orange-87 flex flex-col justify-between gap-4 min-h-[196px]">
            <div className="flex flex-col gap-2">
              <div
                className="text-xs font-bold font-['Inter'] uppercase tracking-wide"
                style={{ color: "rgba(184, 145, 63, 1)" }}
              >
                TECHNOLOGY ORGANIZATION
              </div>
              <div className="text-color-azure-12-4 text-base font-bold font-['Inter']">
                Zoiko Tech
              </div>
              <p className="text-color-grey-44 text-xs font-normal font-['Inter'] leading-5">
                Technology organization responsible for the
                <br />
                platform — exact legal/operator wording
                <br />
                requires Corporate approval.
              </p>
            </div>
            <div>
              <Link
                href="/zoiko-tech"
                className="text-sm font-semibold font-['Inter'] hover:underline inline-flex items-center gap-1.5"
                style={{ color: "rgba(184, 145, 63, 1)" }}
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

          {/* Arrow 2 */}
          <div className="text-color-grey-58 px-1 hidden lg:flex items-center justify-center">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </div>

          {/* Card: Group context */}
          <div className="flex-1 w-full p-6 bg-color-white-solid rounded-xl border border-color-orange-87 flex flex-col justify-between gap-4 min-h-[196px]">
            <div className="flex flex-col gap-2">
              <div
                className="text-xs font-bold font-['Inter'] uppercase tracking-wide"
                style={{ color: "rgba(184, 145, 63, 1)" }}
              >
                GROUP CONTEXT
              </div>
              <div className="text-color-azure-12-4 text-base font-bold font-['Inter']">
                Zoiko Group
              </div>
              <p className="text-color-grey-44 text-xs font-normal font-['Inter'] leading-5">
                Group context for the wider portfolio — exact
                <br />
                ownership wording requires Corporate
                <br />
                approval.
              </p>
            </div>
            <div>
              <Link
                href="/zoiko-group"
                className="text-sm font-semibold font-['Inter'] hover:underline inline-flex items-center gap-1.5"
                style={{ color: "rgba(184, 145, 63, 1)" }}
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
