import React from "react";
import { FONT_INTER, IDENTITY_HEADERS, IDENTITY_ROWS } from "./data";
import { NoticeSection, NoticeTable } from "./NoticeSection";

export default function LegalIdentityAtAGlanceSection() {
  return (
    <NoticeSection
      id="legal-identity"
      tone="cream"
      eyebrow="Legal identity at a glance"
      title="What ZoikoSuite is, and how it relates to Zoiko Tech and Zoiko Group"
    >
      <div style={{ fontFamily: FONT_INTER }}>
        <NoticeTable
          columns={IDENTITY_HEADERS}
          rows={IDENTITY_ROWS.map((r) => [r.row, r.treatment, r.rule])}
          boxed
        />
      </div>
    </NoticeSection>
  );
}
