import React from "react";
import { FONT_INTER, STANDARDS_ROWS } from "./data";
import { NoticeSection, NoticeTable } from "./NoticeSection";

export default function StandardsAssuranceSection() {
  return (
    <NoticeSection
      id="standards-assurance"
      tone="white"
      eyebrow="Standards, frameworks, certifications & assurance"
      title="Alignment is never confused with certification"
    >
      <div className="w-full" style={{ fontFamily: FONT_INTER }}>
        <NoticeTable
          columns={["Item", "UI rule"]}
          rows={STANDARDS_ROWS.map((r) => [r.item, r.detail])}
        />
      </div>
    </NoticeSection>
  );
}
