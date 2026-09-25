import React from "react";
import { FONT_INTER, FORMAL_NOTICE_HEADERS, FORMAL_NOTICE_ROWS } from "./data";
import { NoticeSection, NoticeTable } from "./NoticeSection";

export default function FormalNoticesRoutingSection() {
  return (
    <NoticeSection
      id="formal-notices"
      tone="cream"
      eyebrow="Formal notices, legal communications & service routing"
      title="A general enquiry route is never confused with legally effective notice"
    >
      <div className="w-full" style={{ fontFamily: FONT_INTER }}>
        <NoticeTable
          columns={FORMAL_NOTICE_HEADERS}
          rows={FORMAL_NOTICE_ROWS.map((r) => [r.purpose, r.route, r.control])}
          boxed
        />
      </div>
    </NoticeSection>
  );
}
