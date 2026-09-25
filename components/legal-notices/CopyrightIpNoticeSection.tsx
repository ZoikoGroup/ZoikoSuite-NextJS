import React from "react";
import { FONT_INTER, IP_INTRO, IP_ROWS } from "./data";
import { NoticeSection, NoticeTable } from "./NoticeSection";

export default function CopyrightIpNoticeSection() {
  return (
    <NoticeSection
      id="copyright-ip"
      tone="cream"
      eyebrow="Copyright & intellectual property notice"
      title="Rights ownership, stated only where verified"
      description={IP_INTRO}
    >
      <div className="w-full" style={{ fontFamily: FONT_INTER }}>
        <NoticeTable
          columns={["Element", "Requirement"]}
          rows={IP_ROWS.map((r) => [r.item, r.detail])}
        />
      </div>
    </NoticeSection>
  );
}
