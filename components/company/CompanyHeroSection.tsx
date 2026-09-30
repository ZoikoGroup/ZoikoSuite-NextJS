import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function CompanyHeroSection() {
  return (
    <section className="w-full bg-color-azure-11 py-16 flex justify-center">
      <div className="w-full max-w-[1200px] px-8 flex flex-col lg:flex-row justify-between items-center gap-12">
        {/* Left Column: Text Content */}
        <div className="flex-1 w-full flex flex-col justify-start items-start gap-3.5">
          {/* Eyebrow */}
          <div className="self-stretch inline-flex justify-start items-center gap-2.5">
            <div className="w-5 h-px bg-color-orange-58-2" />
            <div className="justify-center text-color-orange-58-2 text-xs font-semibold font-['Inter'] tracking-wide uppercase">
              COMPANY
            </div>
          </div>

          {/* Main Headline */}
          <div className="self-stretch flex flex-col justify-start items-start">
            <h1 className="self-stretch justify-center text-color-white-solid text-4xl sm:text-5xl font-bold font-['Inter'] leading-[1.15]">
              Built to make complex
              <br />
              operations accountable.
            </h1>
          </div>

          {/* Description */}
          <div className="w-full lg:w-[580px] pt-1.5 pb-1 flex flex-col justify-start items-start">
            <p
              className="justify-center text-base font-normal font-['Inter'] leading-6"
              style={{ color: "var(--color-color-azure-82-2, #C7D3DA)" }}
            >
              <span className="block whitespace-nowrap">
                Meet the organization behind ZoikoSuite — the platform, people,
              </span>
              <span className="block whitespace-nowrap">
                operating principles, and governance model shaping a more
              </span>
              <span className="block whitespace-nowrap">
                accountable way to run business across entities and jurisdictions.
              </span>
            </p>
          </div>

          {/* CTAs */}
          <div className="self-stretch pt-2 inline-flex justify-start items-start gap-3.5 flex-wrap content-start">
            <Link
              href="/about"
              className="px-6 py-3 bg-color-orange-400 rounded-[999px] outline outline-1 outline-offset-[-1px] outline-color-black--0 flex justify-start items-center hover:opacity-90 transition-opacity"
            >
              <span className="justify-center text-color-white-solid text-sm font-semibold font-['Inter']">
                About ZoikoSuite
              </span>
            </Link>
            <Link
              href="/leadership"
              className="px-6 py-3 rounded-[999px] outline outline-1 outline-offset-[-1px] outline-color-white--35 flex justify-start items-center hover:bg-white/10 transition-colors"
            >
              <span className="justify-center text-color-white-solid text-sm font-semibold font-['Inter']">
                Meet our leadership
              </span>
            </Link>
          </div>
        </div>

        {/* Right Column: Hero Image */}
        <div className="w-full lg:w-[485px] shrink-0 flex justify-center items-center">
          <Image
            src="/company/hero.png"
            alt="ZoikoSuite company visual"
            width={625}
            height={585}
            priority
            className="w-full h-auto max-h-[420px] object-cover rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}
