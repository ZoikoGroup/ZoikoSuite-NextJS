import React from "react";
import TermsSectionsNav from "./TermsSectionsNav";
import TermsClause from "./TermsClause";
import TermsVersionHistorySection from "./TermsVersionHistorySection";
import RelatedLegalDocumentsSection from "./RelatedLegalDocumentsSection";
import TermsContactSection from "./TermsContactSection";
import { CLAUSES, FONT_INTER } from "./data";

export default function TermsReadingFrameSection() {
  return (
    <div className="w-full bg-[#FBFAF7] px-4 md:px-8 xl:px-0">
      <div className="mx-auto w-full max-w-[1116px] pt-[40px] pb-[80px] flex flex-col gap-[56px] lg:flex-row">
        {/* Section nav — stacked on tablet, sticky 260px rail on desktop */}
        <aside className="w-full pb-[20px] lg:pb-0 lg:w-[260px] lg:shrink-0">
          <div className="lg:sticky lg:top-[120px]">
            <TermsSectionsNav />
          </div>
        </aside>

        {/* Legal body */}
        <article className="w-full min-w-0 lg:flex-1 lg:max-w-[760px]">
          <div
            className="mb-[34px] px-[24px] py-[22px] bg-[#F6F1E6] border border-[#DCD6C8] rounded-[8px]"
            style={{ fontFamily: FONT_INTER }}
          >
            <p className="text-[13.5px] font-normal leading-[21.6px] text-[#4B5872]">
              <strong className="font-bold text-[#16223A]">
                Counsel-approved overview.
              </strong>{" "}
              This document sets out the terms governing access to and use of
              ZoikoSuite. It is organized into 18 numbered sections covering the
              agreement scope, account and use responsibilities, AI features,
              data handling, commercial terms, intellectual property, liability,
              dispute resolution, and how these Terms may change. This overview
              is provided for navigation only — the numbered sections below are
              the operative text.
            </p>
          </div>

          {CLAUSES.map((clause) => (
            <TermsClause key={clause.id} clause={clause} />
          ))}

          <TermsVersionHistorySection />
          <RelatedLegalDocumentsSection />
          <TermsContactSection />
        </article>
      </div>
    </div>
  );
}
