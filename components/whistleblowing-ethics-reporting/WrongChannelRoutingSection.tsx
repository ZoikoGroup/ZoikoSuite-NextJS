import React from "react";
import Link from "next/link";
import SectionHead from "./SectionHead";
import { FONT_INTER, WRONG_CHANNEL_ROUTES } from "./data";

export default function WrongChannelRoutingSection() {
  return (
    <section
      aria-labelledby="wrong-channel-title"
      className="w-full bg-[#F6F1E6] flex justify-center px-4 md:px-[32px] lg:px-[130px] py-[32px] md:pt-[47px] md:pb-[48px]"
    >
      <div className="w-full max-w-[1180px] flex flex-col gap-[11px] px-0">
        <SectionHead
          id="wrong-channel-title"
          eyebrow="Make sure you're in the right place"
          title="Five routes, so this channel isn't overloaded"
        />

        <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-[12px] pt-[15px]">
          {WRONG_CHANNEL_ROUTES.map((route) => (
            <li key={route.label}>
              <Link
                href={route.href}
                className="flex items-center justify-center text-center h-full min-h-[54px] px-[14px] pt-[13px] pb-[18.6px] bg-white border border-[#DCD6C8] rounded-[8px] text-[12px] font-bold leading-[19.2px] text-[#16223A] hover:border-[#A8843A] transition-colors"
                style={{ fontFamily: FONT_INTER }}
              >
                {route.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
