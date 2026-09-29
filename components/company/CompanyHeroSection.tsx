import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function CompanyHeroSection() {
  return (
    <section className="self-stretch px-28 py-16 bg-color-azure-11 flex flex-col justify-start items-start">
      <div className="w-full max-w-[1200px] px-8 inline-flex justify-center items-center gap-14">
        {/* Left Column: Text Content */}
        <div className="w-[595.11px] pb-4 inline-flex flex-col justify-start items-start gap-3.5">
          {/* Eyebrow */}
          <div className="self-stretch inline-flex justify-start items-center gap-2.5">
            <div className="w-5 h-px bg-color-orange-58-2" />
            <div className="justify-center text-color-orange-58-2 text-xs font-semibold font-['Inter'] tracking-wide">
              COMPANY
            </div>
          </div>

          {/* Main Headline */}
          <div className="self-stretch flex flex-col justify-start items-start">
            <h1 className="self-stretch justify-center text-color-white-solid text-5xl font-bold font-['Inter'] leading-[48.30px]">
              Built to make complex
              <br />
              operations accountable.
            </h1>
          </div>

          {/* Description */}
          <div className="w-[500px] max-w-[500px] pt-1.5 pb-[0.69px] flex flex-col justify-start items-start">
            <p className="justify-center text-color-azure-82-2 text-base font-normal font-['Inter'] leading-6">
              Meet the organization behind ZoikoSuite — the platform, people,
              <br />
              operating principles, and governance model shaping a more
              <br />
              accountable way to run business across entities and jurisdictions.
            </p>
          </div>

          {/* CTAs */}
          <div className="self-stretch pt-2 inline-flex justify-start items-start gap-3.5 flex-wrap content-start">
            <Link
              href="/about"
              className="self-stretch px-6 py-3 bg-color-orange-400 rounded-[999px] outline outline-1 outline-offset-[-1px] outline-color-black--0 flex justify-start items-center"
            >
              <span className="justify-center text-color-white-solid text-sm font-semibold font-['Inter']">
                About ZoikoSuite
              </span>
            </Link>
            <Link
              href="/leadership"
              className="self-stretch px-6 py-3 rounded-[999px] outline outline-1 outline-offset-[-1px] outline-color-white--35 flex justify-start items-center"
            >
              <span className="justify-center text-color-white-solid text-sm font-semibold font-['Inter']">
                Meet our leadership
              </span>
            </Link>
          </div>
        </div>

        {/* Right Column: Hero Image */}
        <div className="w-[484.89px] inline-flex flex-col justify-start items-start">
          <Image
            src="/company/hero.png"
            alt="ZoikoSuite company visual"
            width={625}
            height={585}
            priority
            className="self-stretch h-96 w-full object-cover object-top p-6 rounded-2xl shadow-[0px_30px_70px_0px_rgba(0,0,0,0.40)] border border-color-azure-21"
          />
        </div>
      </div>
    </section>
  );
}
