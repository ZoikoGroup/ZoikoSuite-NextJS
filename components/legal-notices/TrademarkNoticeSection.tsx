import React from "react";
import { FONT_INTER, TRADEMARK_ROWS } from "./data";
import { NoticeSection, NoticeTable } from "./NoticeSection";

export default function TrademarkNoticeSection() {
  return (
    <NoticeSection
      id="trademark-notice"
      tone="white"
      eyebrow="Trademark notice & guidelines handoff"
      title="Marks and third-party marks, without legal overreach"
    >
      <div className="w-full" style={{ fontFamily: FONT_INTER }}>
        <NoticeTable
          columns={["Control", "Required treatment"]}
          rows={TRADEMARK_ROWS.map((r) => [r.item, r.detail])}
        />
      </div>
    </NoticeSection>
  );
}
