import React from "react";
import Image from "next/image";
import { FONT_ARCHIVO, COLORS } from "./data";

const TAGS = ["Business evaluation", "Regional context", "Technical requirements"];

export default function HeroSection() {
  return (
    <section
      className="w-full flex justify-center px-4 sm:px-6 md:px-8 lg:px-12 py-[35px]"
      style={{ backgroundColor: COLORS.darkBg }}
    >
      <div className="w-full max-w-[1240px] grid grid-cols-1 lg:grid-cols-[583fr_473fr] items-center gap-[40px] py-[30px]">
        <div className="flex flex-col items-start gap-[22px]">
          <div className="flex items-center gap-[12px]">
            <span className="block h-[2px] w-[22px] shrink-0" style={{ backgroundColor: COLORS.gold }} />
            <span
              className="text-[10px] font-bold uppercase tracking-[2px]"
              style={{ fontFamily: FONT_ARCHIVO, color: COLORS.goldOnDark }}
            >
              European Headquarters / Enterprise sales
            </span>
          </div>

          <h1
            className="text-[36px] md:text-[58px] font-bold leading-[1.08] tracking-[-2px] text-white"
            style={{ fontFamily: FONT_ARCHIVO }}
          >
            Talk with our European
            <br />
            enterprise sales team
          </h1>

          <p
            className="max-w-[530px] text-[16px] font-normal leading-[1.65]"
            style={{ fontFamily: FONT_ARCHIVO, color: COLORS.heroBody }}
          >
            Share your organization&rsquo;s goals, operational footprint, and evaluation
            priorities. Your enquiry will be directed for review by the appropriate team.
          </p>

          <div className="flex flex-wrap gap-[12px] pt-[5px]">
            <a
              href="#enquiry"
              className="inline-flex items-center justify-center min-h-[46px] px-[20px] text-[12px] font-bold rounded-[2px] hover:opacity-90 transition-opacity"
              style={{ fontFamily: FONT_ARCHIVO, backgroundColor: COLORS.gold, color: COLORS.darkBg }}
            >
              Contact European sales
            </a>
            <a
              href="#topics"
              className="inline-flex items-center justify-center gap-[8px] min-h-[46px] px-[20px] text-[12px] font-bold text-white rounded-[2px] border hover:opacity-90 transition-opacity"
              style={{ fontFamily: FONT_ARCHIVO, borderColor: COLORS.outlineBtnBorder }}
            >
              Explore enterprise topics
              <span aria-hidden="true">↓</span>
            </a>
          </div>

          <div className="flex flex-wrap gap-[12px] pt-[7px]">
            {TAGS.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center px-[10px] py-[5px] text-[10px] font-normal rounded-full border"
                style={{ fontFamily: FONT_ARCHIVO, color: COLORS.tagText, borderColor: COLORS.tagBorder }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="relative hidden lg:block">
          <div
            className="relative w-full aspect-[473/447] rounded-none overflow-hidden shadow-[0px_18px_45px_0px_rgba(9,43,53,0.1)]"
            style={{ backgroundColor: "#f6f5ef" }}
          >
            <Image
              src="/european-enterprise-sales/hero-london-office.jpg"
              alt="Editorial photograph of contemporary glass and stone commercial architecture in London"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
