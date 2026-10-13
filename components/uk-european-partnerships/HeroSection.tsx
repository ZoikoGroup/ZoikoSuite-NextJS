import React from "react";
import Image from "next/image";
import { FONT_ARCHIVO, COLORS } from "./data";

export default function HeroSection() {
  return (
    <section
      className="w-full flex justify-center px-4 sm:px-6 md:px-8 lg:px-12 py-[32px]"
      style={{ backgroundColor: COLORS.darkBg }}
    >
      <div className="w-full max-w-[1240px] grid grid-cols-1 lg:grid-cols-[530fr_473fr] items-center gap-[40px]">
        <div className="flex flex-col items-start gap-[20px] py-[40px]">
          <div className="flex items-center gap-[12px]">
            <span className="block h-[2px] w-[22px] shrink-0" style={{ backgroundColor: COLORS.gold }} />
            <span
              className="text-[10px] font-bold uppercase tracking-[2px]"
              style={{ fontFamily: FONT_ARCHIVO, color: COLORS.goldOnDark }}
            >
              European Headquarters / Partnerships
            </span>
          </div>

          <h1
            className="text-[40px] md:text-[64px] font-bold leading-[1.08] tracking-[-2px] text-white"
            style={{ fontFamily: FONT_ARCHIVO }}
          >
            UK and European
            <br />
            <span style={{ color: COLORS.gold }}>partnerships</span>
          </h1>

          <h2
            className="max-w-[530px] text-[18px] md:text-[23px] font-bold leading-[1.18] tracking-[-0.4px] text-white"
            style={{ fontFamily: FONT_ARCHIVO }}
          >
            Explore a partnership built around clear business goals.
          </h2>

          <p
            className="max-w-[530px] text-[16px] font-normal leading-[1.65]"
            style={{ fontFamily: FONT_ARCHIVO, color: COLORS.heroBody }}
          >
            Tell us about the collaboration you are considering in the UK or
            Europe. We&rsquo;ll help direct your enquiry to the appropriate
            team for review.
          </p>

          <div className="flex flex-wrap gap-[12px] pt-[8px]">
            <a
              href="#enquiry"
              className="inline-flex items-center justify-center min-h-[46px] px-[20px] text-[12px] font-bold rounded-[2px] hover:opacity-90 transition-opacity"
              style={{ fontFamily: FONT_ARCHIVO, backgroundColor: COLORS.gold, color: COLORS.darkBg }}
            >
              Discuss a partnership
            </a>
            <a
              href="/european-enterprise-sales"
              className="inline-flex items-center justify-center min-h-[46px] px-[20px] text-[12px] font-bold text-white rounded-[2px] border hover:opacity-90 transition-opacity"
              style={{ fontFamily: FONT_ARCHIVO, borderColor: COLORS.outlineBtnBorder }}
            >
              Global partner enquiries →
            </a>
          </div>
        </div>

        <div className="relative hidden lg:block w-full aspect-square max-w-[530px] justify-self-end">
          <Image
            src="/uk-european-partnerships/hero-partnership-illustration.jpg"
            alt="Illustration of a partnership meeting with European office context"
            fill
            priority
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
