import React from "react";
import Link from "next/link";
import { FONT_INTER, TRUST_LINKS } from "./data";
import { NoticeSection } from "./NoticeSection";

export default function TrustCrossLinksSection() {
  return (
    <NoticeSection
      id="trust-cross-links"
      tone="white"
      eyebrow="Trust & assurance cross-links"
      title="Evidence stays where it's governed"
    >
      <div
        className="grid w-full grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
        style={{ fontFamily: FONT_INTER }}
      >
        {TRUST_LINKS.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="rounded-md border border-[#DCD6C8] bg-white px-3 py-2 text-center text-xs font-semibold leading-5 text-[#123255] transition-colors hover:border-[#A8843A] hover:text-[#A8843A]"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </NoticeSection>
  );
}
