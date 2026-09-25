import React from "react";
import { ADVICE_ROWS, FONT_INTER } from "./data";
import { NoticeSection, NoticeTable } from "./NoticeSection";

export default function ProfessionalAdviceBoundarySection() {
  return (
    <NoticeSection
      id="professional-advice"
      tone="cream"
      eyebrow="Professional advice boundary"
      title="The website is not a substitute for qualified professional advice"
    >
      <div className="w-full" style={{ fontFamily: FONT_INTER }}>
        <NoticeTable
          columns={["Topic", "Required public treatment"]}
          rows={ADVICE_ROWS.map((r) => [r.item, r.detail])}
        />
      </div>
    </NoticeSection>
  );
}
