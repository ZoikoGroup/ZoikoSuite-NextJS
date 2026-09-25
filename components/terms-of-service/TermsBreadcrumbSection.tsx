import React from "react";
import Link from "next/link";
import { FONT_INTER } from "./data";

export default function TermsBreadcrumbSection() {
  return (
    <nav
      aria-label="Breadcrumb"
      className="w-full bg-[#F6F1E6] border-b border-[#DCD6C8] pt-[11px] pb-[12px] lg:hidden"
      style={{ fontFamily: FONT_INTER }}
    >
      <div className="mx-auto w-full max-w-[1180px] px-4 md:px-8">
        <p className="text-[12px] leading-[19.2px] text-[#4B5872]">
          <Link href="/" className="hover:text-[#16223A]">
            Home
          </Link>{" "}
          / Legal /{" "}
          <span aria-current="page" className="font-semibold text-[#16223A]">
            Terms of Service
          </span>
        </p>
      </div>
    </nav>
  );
}
