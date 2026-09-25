import React from "react";
import Link from "next/link";
import { FONT_INTER, RELATED_DESTINATIONS } from "./data";
import { ClauseSection } from "./NoticeSection";

export default function CpnRelatedDestinationsSection() {
  return (
    <ClauseSection id="related-destinations" title="Related Legal Destinations" className="mt-[26px]">
      <div
        className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        style={{ fontFamily: FONT_INTER }}
      >
        {RELATED_DESTINATIONS.map((dest) => (
          <Link
            key={dest.label}
            href={dest.href}
            className="rounded-md border border-[#DCD6C8] bg-white px-5 pt-[17px] pb-[14px] text-xs font-semibold leading-5 text-[#123255] transition-colors hover:border-[#A8843A] hover:text-[#A8843A]"
          >
            {dest.label}
          </Link>
        ))}
      </div>
    </ClauseSection>
  );
}
