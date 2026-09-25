import React from "react";
import Link from "next/link";
import { FONT_INTER, RELATED_LEGAL_DOCS } from "./data";
import { NoticeSection } from "./NoticeSection";

export default function RelatedLegalDocumentsSection() {
  return (
    <NoticeSection
      id="related-legal-documents"
      tone="cream"
      eyebrow="Related legal documents"
      title="The canonical Legal hub"
    >
      <div
        className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
        style={{ fontFamily: FONT_INTER }}
      >
        {RELATED_LEGAL_DOCS.map((doc) => (
          <Link
            key={doc.name}
            href={doc.href}
            className="flex flex-col gap-1 rounded-md border border-[#DCD6C8] bg-white px-3.5 py-3 transition-colors hover:border-[#A8843A]"
          >
            <span className="text-xs font-bold leading-5 text-[#16223A]">
              {doc.name}
            </span>
            <span className="text-xs font-normal leading-4 text-[#4B5872]">
              {doc.description}
            </span>
          </Link>
        ))}
      </div>
    </NoticeSection>
  );
}
