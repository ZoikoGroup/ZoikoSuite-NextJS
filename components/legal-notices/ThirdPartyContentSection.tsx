import React from "react";
import { FONT_INTER, THIRD_PARTY_ROWS } from "./data";
import { NoticeSection, NoticeTable } from "./NoticeSection";

export default function ThirdPartyContentSection() {
  return (
    <NoticeSection
      id="third-party-content"
      tone="white"
      eyebrow="Third-party content, services & external links"
      title="Linking is never implied endorsement"
    >
      <div className="w-full" style={{ fontFamily: FONT_INTER }}>
        <NoticeTable
          columns={["Area", "Required rule"]}
          rows={THIRD_PARTY_ROWS.map((r) => [r.item, r.detail])}
        />
      </div>
    </NoticeSection>
  );
}
