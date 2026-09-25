import React from "react";
import { FONT_INTER, VERSION_CONTROL_ROWS } from "./data";
import { NoticeSection, NoticeTable } from "./NoticeSection";

export default function VersionControlSection() {
  return (
    <NoticeSection
      id="version-control"
      tone="cream"
      eyebrow="Version, effective date, changes & corrections"
      title="Historical records are never overwritten"
    >
      <div className="w-full" style={{ fontFamily: FONT_INTER }}>
        <NoticeTable
          columns={["Control", "Requirement"]}
          rows={VERSION_CONTROL_ROWS.map((r) => [r.item, r.detail])}
        />
      </div>
    </NoticeSection>
  );
}
